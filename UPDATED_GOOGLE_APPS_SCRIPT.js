/**
 * UPDATED GOOGLE APPS SCRIPT CODE WITH OTP VERIFICATION
 * 
 * Copy and paste this ENTIRE code into your Google Apps Script editor
 * Replace your current doPost function with this
 */
function doPost(e) {
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
    const message = data.message || '';
    
    // Extract OTP verification status
    // Handle both string "true"/"false" and boolean true/false
    let otpVerified = data.otpVerified || 'false';
    if (otpVerified === true || otpVerified === 'true') {
      otpVerified = 'true';
    } else {
      otpVerified = 'false';
    }
    
    Logger.log('📋 Extracted data - Name: ' + name + ', Email: ' + email + ', Phone: ' + phone + ', OTP Verified: ' + otpVerified);
    
    // Validate required fields (message is optional now, but keeping validation for other fields)
    if (!name || !email || !phone) {
      Logger.log('❌ Missing required fields');
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          error: 'Missing required fields',
          received: { name, email, phone, message }
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ============================================
    // STEP 1: SAVE TO GOOGLE SHEET WITH FORMATTING
    // ============================================
    try {
      // IMPORTANT: Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
      // Get the Sheet ID from the URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
      // Example: If URL is https://docs.google.com/spreadsheets/d/1abc123xyz/edit
      // Then SHEET_ID = '1abc123xyz'
      const SHEET_ID = '1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU';
      
      // Try to get the spreadsheet by ID
      var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      if (!spreadsheet) {
        Logger.log('❌ Spreadsheet not found with ID: ' + SHEET_ID);
        return ContentService
          .createTextOutput(JSON.stringify({
            result: 'error',
            error: 'Spreadsheet not found. Please check Sheet ID: ' + SHEET_ID
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      
      // Get the sheet by name
      // NOTE: The sheet name is "Sheet1" - if you renamed it to "leads", change this to 'leads'
      var sheet = spreadsheet.getSheetByName('Sheet1');
      
      if (!sheet) {
        Logger.log('❌ Sheet "Sheet1" not found!');
        // List available sheets for debugging
        var availableSheets = spreadsheet.getSheets().map(s => s.getName());
        Logger.log('Available sheets: ' + JSON.stringify(availableSheets));
        return ContentService
          .createTextOutput(JSON.stringify({
            result: 'error',
            error: 'Sheet "Sheet1" not found. Please check sheet name.',
            availableSheets: availableSheets
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      
      // Get current timestamp
      var timestamp = new Date();
      
      // Append data to Google Sheet
      // Columns: Timestamp, Name, Email, Phone, Message, OTP Verified
      var newRow = sheet.appendRow([
        timestamp,
        name,
        email,
        phone,
        message,
        otpVerified  // Add OTP verification status as a column
      ]);
      
      // Get the row number that was just added
      var rowNumber = sheet.getLastRow();
      
      // Get the range for the entire row (all columns)
      var rowRange = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn());
      
      // Apply formatting based on OTP verification status
      if (otpVerified === 'false') {
        // Set red background for unverified leads
        rowRange.setBackground('#ffcccc'); // Light red background
        rowRange.setFontColor('#cc0000'); // Dark red text
        Logger.log('🔴 Applied RED formatting to row ' + rowNumber + ' (OTP not verified)');
      } else {
        // Set normal formatting for verified leads
        rowRange.setBackground('#ffffff'); // White background
        rowRange.setFontColor('#000000'); // Black text
        Logger.log('✅ Applied normal formatting to row ' + rowNumber + ' (OTP verified)');
      }
      
      Logger.log('✅ Data saved to Google Sheet successfully at row ' + rowNumber);
    } catch (sheetError) {
      Logger.log('❌ Error saving to sheet: ' + sheetError.toString());
      Logger.log('Stack trace: ' + sheetError.stack);
      // Return error but don't stop execution - still try to send email
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          error: 'Failed to save to sheet: ' + sheetError.toString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ============================================
    // STEP 2: SEND EMAIL NOTIFICATIONS
    // ============================================
    try {
      // Your email recipients
      var recipients = "digitalwyce@gmail.com, anuj@wycecorp.com, rashmi@wycecorp.com";
      
      // Update subject to include OTP status
      var otpStatus = otpVerified === 'true' ? '✅ VERIFIED' : '⚠️ NOT VERIFIED';
      var subject = "New Lead from Website - " + otpStatus;
      
      var body = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
    <p><b>OTP Verification:</b> ${otpStatus}</p>
    <br>
    <p>This lead was submitted via your website form.</p>
      `;
      
      // Send email
      MailApp.sendEmail({
        to: recipients,
        subject: subject,
        htmlBody: body
      });
      
      Logger.log('✅ Email sent successfully to: ' + recipients);
    } catch (emailError) {
      Logger.log('❌ Error sending email: ' + emailError.toString());
      // Log error but still return success since data was saved
    }
    
    // Return success response (JSON format)
    Logger.log('✅ Request processed successfully');
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Form submitted successfully',
        otpVerified: otpVerified,
        timestamp: new Date().toISOString()
      }))
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
  
  Logger.log('🧪 Running test script (unverified lead)...');
  const result = doPost(testEvent);
  Logger.log('📋 Test result: ' + result.getContent());
  
  // Also test with JSON and verified OTP
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
  
  Logger.log('🧪 Running JSON test (verified lead)...');
  const resultJSON = doPost(testEventJSON);
  Logger.log('📋 JSON test result: ' + resultJSON.getContent());
}
