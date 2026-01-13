/**
 * FIXED GOOGLE APPS SCRIPT CODE - FIXES SHEET SAVE ISSUE
 * 
 * This version ensures emails are sent even if sheet save fails
 * and tries multiple sheet names to handle mismatches
 * 
 * Copy and paste this ENTIRE code into your Google Apps Script editor
 * Replace your current doPost function with this
 */

function doPost(e) {
  // Track success/failure for both operations
  var sheetSaved = false;
  var emailSent = false;
  var sheetError = null;
  var emailError = null;
  
  try {
    // Check if event object exists (should always exist for Web App requests)
    if (!e) {
      Logger.log('❌ ERROR: Event object (e) is undefined');
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          error: 'Event object is undefined. This function must be called via Web App POST request.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Log the incoming request for debugging
    Logger.log('=== NEW REQUEST RECEIVED ===');
    Logger.log('PostData contents: ' + (e.postData ? e.postData.contents : 'No postData'));
    Logger.log('Parameters: ' + JSON.stringify(e.parameter || {}));
    
    // Parse the data - handle both JSON and form data
    let data = {};
    
    if (e.postData && e.postData.contents) {
      // Try to parse as JSON first
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log('✅ Parsed JSON data: ' + JSON.stringify(data));
      } catch (parseError) {
        Logger.log('⚠️ JSON parse error: ' + parseError.message);
        // If JSON parsing fails, fall back to e.parameter
        data = e.parameter;
        Logger.log('✅ Using parameters data: ' + JSON.stringify(data));
      }
    } else {
      // If no postData, use e.parameter (for FormData/URL-encoded)
      data = e.parameter || {};
      Logger.log('✅ Using parameters data (no postData): ' + JSON.stringify(data));
    }
    
    // Extract form fields - handle both 'name' and 'firstName'
    const name = data.name || data.firstName || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || 'No message provided'; // Make message optional with default
    
    // Extract OTP verification status - handle both string "true"/"false" and boolean
    let otpVerified = data.otpVerified || 'false';
    if (otpVerified === true || otpVerified === 'true') {
      otpVerified = true;
    } else {
      otpVerified = false;
    }
    
    Logger.log('📋 Extracted data - Name: ' + name + ', Email: ' + email + ', Phone: ' + phone + ', OTP Verified: ' + otpVerified);
    
    // Validate required fields (message is now optional)
    // IMPORTANT: Save ALL leads regardless of OTP verification status
    if (!name || !email || !phone) {
      Logger.log('❌ Missing required fields');
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          error: 'Missing required fields',
          received: { name, email, phone, message, otpVerified }
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ============================================
    // STEP 1: SAVE TO GOOGLE SHEET
    // ============================================
    try {
      const SHEET_ID = '1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU';
      
      // Try to get the spreadsheet by ID
      var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      if (!spreadsheet) {
        throw new Error('Spreadsheet not found with ID: ' + SHEET_ID);
      }
      
      // Try multiple sheet names (common variations)
      var sheet = null;
      var sheetNames = ['Sheet1', 'leads', 'Leads', 'LEADS', 'Sheet 1'];
      
      for (var i = 0; i < sheetNames.length; i++) {
        sheet = spreadsheet.getSheetByName(sheetNames[i]);
        if (sheet) {
          Logger.log('✅ Found sheet: ' + sheetNames[i]);
          break;
        }
      }
      
      if (!sheet) {
        // List available sheets for debugging
        var availableSheets = spreadsheet.getSheets().map(s => s.getName());
        Logger.log('❌ Sheet not found! Available sheets: ' + JSON.stringify(availableSheets));
        throw new Error('Sheet not found. Tried: ' + sheetNames.join(', ') + '. Available: ' + availableSheets.join(', '));
      }
      
      // Log sheet details for debugging
      Logger.log('✅ Sheet found: ' + sheet.getName());
      Logger.log('✅ Sheet ID: ' + spreadsheet.getId());
      var lastRowBefore = sheet.getLastRow();
      Logger.log('✅ Last row BEFORE append: ' + lastRowBefore);
      
      // Prepare data to append
      var rowData = [
        new Date(),
        name,
        email,
        phone,
        message,
        otpVerified  // Column F: OTP verification status (TRUE/FALSE)
      ];
      Logger.log('✅ Data to append: ' + JSON.stringify(rowData));
      
      // Append data to Google Sheet
      // IMPORTANT: Save ALL leads regardless of OTP verification status
      // Structure: Date, Name, Email, Phone, Message, OTP Verified
      try {
        sheet.appendRow(rowData);
        
        // Verify the row was added
        var lastRowAfter = sheet.getLastRow();
        Logger.log('✅ Last row AFTER append: ' + lastRowAfter);
        
        if (lastRowAfter > lastRowBefore) {
          sheetSaved = true;
          Logger.log('✅ Data saved to Google Sheet successfully - OTP Verified: ' + otpVerified);
          Logger.log('✅ New row number: ' + lastRowAfter);
          
          // Verify the data is actually in the sheet
          var savedName = sheet.getRange(lastRowAfter, 2).getValue(); // Column B (Name)
          Logger.log('✅ Verified saved name: ' + savedName);
          
          if (savedName !== name) {
            Logger.log('⚠️ WARNING: Saved name does not match! Expected: ' + name + ', Got: ' + savedName);
          }
        } else {
          throw new Error('Row was not added! Last row before: ' + lastRowBefore + ', after: ' + lastRowAfter);
        }
      } catch (appendError) {
        Logger.log('❌ Error in appendRow: ' + appendError.toString());
        Logger.log('Stack trace: ' + (appendError.stack || 'No stack trace'));
        throw appendError; // Re-throw to be caught by outer catch
      }
      
      // Apply formatting based on OTP status (optional - helps visually identify verified leads)
      try {
        var lastRow = sheet.getLastRow();
        var otpStatusRange = sheet.getRange(lastRow, 6); // Column F (OTP status)
        
        if (otpVerified) {
          // Verified leads - normal formatting (or green if you want)
          otpStatusRange.setBackground('#ffffff');
          otpStatusRange.setFontColor('#000000');
        } else {
          // Unverified leads - red background to highlight
          var rowRange = sheet.getRange(lastRow, 1, 1, 6);
          rowRange.setBackground('#ffcccc'); // Light red
          rowRange.setFontColor('#cc0000'); // Dark red text
          Logger.log('🔴 Applied RED formatting to row ' + lastRow + ' (OTP not verified)');
        }
      } catch (formatError) {
        // Don't fail if formatting fails - data is already saved
        Logger.log('⚠️ Could not apply formatting: ' + formatError.toString());
      }
    } catch (sheetErr) {
      sheetError = sheetErr.toString();
      Logger.log('❌ Error saving to sheet: ' + sheetError);
      Logger.log('Stack trace: ' + (sheetErr.stack || 'No stack trace'));
      // DON'T return here - continue to send email even if sheet save fails
    }
    
    // ============================================
    // STEP 2: SEND EMAIL NOTIFICATIONS
    // ============================================
    try {
      // Your email recipients
      var recipients = "digitalwyce@gmail.com, anuj@wycecorp.com, rashmi@wycecorp.com";
      
      // Include OTP status and sheet save status in email subject
      var otpStatus = otpVerified ? '✅ VERIFIED' : '⚠️ NOT VERIFIED';
      var sheetStatus = sheetSaved ? '✅ Saved to Sheet' : '⚠️ Sheet Save Failed';
      var subject = "New Lead from Website - " + otpStatus + " - " + sheetStatus;
      
      var body = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
    <p><b>OTP Verification:</b> ${otpStatus}</p>
    <br>
    <p>This lead was submitted via your website form.</p>
    ${sheetError ? '<p style="color: red;"><b>⚠️ WARNING:</b> Failed to save to Google Sheet. Error: ' + sheetError + '</p>' : ''}
      `;
      
      // Send email
      MailApp.sendEmail({
        to: recipients,
        subject: subject,
        htmlBody: body
      });
      
      emailSent = true;
      Logger.log('✅ Email sent successfully to: ' + recipients);
    } catch (emailErr) {
      emailError = emailErr.toString();
      Logger.log('❌ Error sending email: ' + emailError);
      Logger.log('Stack trace: ' + (emailErr.stack || 'No stack trace'));
    }
    
    // ============================================
    // STEP 3: RETURN RESPONSE
    // ============================================
    // Determine overall result
    var result = {
      result: 'success',
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString(),
      sheetSaved: sheetSaved,
      emailSent: emailSent,
      otpVerified: otpVerified
    };
    
    // Add warnings if something failed
    if (!sheetSaved) {
      result.warning = 'Sheet save failed: ' + sheetError;
      result.result = 'partial_success';
    }
    
    if (!emailSent) {
      result.error = 'Email send failed: ' + emailError;
      if (!sheetSaved) {
        result.result = 'error';
      } else {
        result.result = 'partial_success';
      }
    }
    
    Logger.log('✅ Request processed - Sheet: ' + (sheetSaved ? 'OK' : 'FAILED') + ', Email: ' + (emailSent ? 'OK' : 'FAILED'));
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the full error
    Logger.log('❌ CRITICAL ERROR in doPost: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        error: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * DEBUG FUNCTION - Test sheet access directly
 * Run this to verify the script can access and write to the sheet
 */
function debugSheetAccess() {
  try {
    Logger.log('=== DEBUG SHEET ACCESS ===');
    
    var SHEET_ID = '1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU';
    Logger.log('Sheet ID: ' + SHEET_ID);
    
    // Try to open spreadsheet
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    Logger.log('✅ Spreadsheet opened: ' + spreadsheet.getName());
    Logger.log('✅ Spreadsheet ID: ' + spreadsheet.getId());
    
    // List all sheets
    var allSheets = spreadsheet.getSheets();
    Logger.log('Available sheets:');
    for (var i = 0; i < allSheets.length; i++) {
      Logger.log('  - ' + allSheets[i].getName() + ' (ID: ' + allSheets[i].getSheetId() + ')');
    }
    
    // Try to get Sheet1
    var sheet = spreadsheet.getSheetByName('Sheet1');
    if (!sheet) {
      Logger.log('❌ Sheet "Sheet1" not found!');
      return;
    }
    
    Logger.log('✅ Sheet found: ' + sheet.getName());
    Logger.log('✅ Sheet ID: ' + sheet.getSheetId());
    
    // Check current last row
    var lastRow = sheet.getLastRow();
    Logger.log('✅ Current last row: ' + lastRow);
    
    // Try to append a test row
    var testData = [
      new Date(),
      'DEBUG TEST',
      'debug@test.com',
      '9999999999',
      'This is a debug test',
      false
    ];
    
    Logger.log('Attempting to append: ' + JSON.stringify(testData));
    sheet.appendRow(testData);
    
    // Verify it was added
    var newLastRow = sheet.getLastRow();
    Logger.log('✅ New last row: ' + newLastRow);
    
    if (newLastRow > lastRow) {
      Logger.log('✅ SUCCESS: Row was added!');
      var savedName = sheet.getRange(newLastRow, 2).getValue();
      Logger.log('✅ Verified saved name: ' + savedName);
    } else {
      Logger.log('❌ FAILED: Row was NOT added!');
    }
    
  } catch (error) {
    Logger.log('❌ ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
  }
}

/**
 * TEST FUNCTION - Run this manually to test your script
 * This simulates a Web App POST request
 */
function testScript() {
  // Simulate a FormData request (like your website sends)
  const testEvent = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'This is a test message from the testScript function',
      otpVerified: 'false'  // Test unverified lead
    },
    postData: null // Simulate FormData (no postData, uses e.parameter)
  };
  
  Logger.log('🧪 Running test script...');
  const result = doPost(testEvent);
  Logger.log('📋 Test result: ' + result.getContent());
  
  // Also test with JSON (verified lead)
  const testEventJSON = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User JSON',
        email: 'testjson@example.com',
        phone: '0987654321',
        message: 'This is a JSON test message',
        otpVerified: 'true'  // Test verified lead
      })
    },
    parameter: {}
  };
  
  Logger.log('🧪 Running JSON test...');
  const resultJSON = doPost(testEventJSON);
  Logger.log('📋 JSON test result: ' + resultJSON.getContent());
}
