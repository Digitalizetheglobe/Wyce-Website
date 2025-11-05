/**
 * COMPLETE GOOGLE APPS SCRIPT CODE
 * 
 * Copy and paste this ENTIRE code into your Google Apps Script editor
 * 
 * SETUP INSTRUCTIONS:
 * 1. Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
 * 2. Replace the email addresses in the recipients array
 * 3. Deploy as Web App (see instructions below)
 */

function doPost(e) {
  try {
    // Log the incoming request for debugging
    Logger.log('Received POST request');
    Logger.log('PostData contents: ' + e.postData.contents);
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    // Parse the data - handle both JSON and form data
    let data = {};
    
    if (e.postData && e.postData.contents) {
      // JSON request
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log('Parsed JSON data: ' + JSON.stringify(data));
      } catch (parseError) {
        Logger.log('JSON parse error, trying parameters: ' + parseError.message);
        // If JSON parsing fails, fall back to e.parameter
        data = e.parameter;
        Logger.log('Using parameters data: ' + JSON.stringify(data));
      }
    } else {
      // Form data (URL-encoded or FormData)
      data = e.parameter;
      Logger.log('Using parameters data (no postData): ' + JSON.stringify(data));
    }
    
    // Extract form fields - handle both 'name' and 'firstName'
    const name = data.name || data.firstName || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || '';
    
    // Validate required fields
    if (!name || !email || !phone || !message) {
      Logger.log('Missing required fields');
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          error: 'Missing required fields',
          received: data
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('Form data extracted - Name: ' + name + ', Email: ' + email);
    
    // ============================================
    // STEP 1: SAVE TO GOOGLE SHEET
    // ============================================
    try {
      // OPTION 1: If script is bound to the sheet, use this:
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('leads');
      
      // OPTION 2: If script is standalone, use Sheet ID (uncomment and replace):
      // const SHEET_ID = 'YOUR_SHEET_ID';
      // const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('leads');
      
      // Add headers if this is the first row
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
      }
      
      // Append the form data
      sheet.appendRow([
        new Date(),
        name,
        email,
        phone,
        message
      ]);
      
      Logger.log('Data saved to Google Sheet');
    } catch (sheetError) {
      Logger.log('Error saving to sheet: ' + sheetError.toString());
      // Continue even if sheet save fails - still try to send email
    }
    
    // ============================================
    // STEP 2: SEND EMAIL NOTIFICATIONS
    // ============================================
    try {
      // REPLACE THESE EMAIL ADDRESSES with your actual recipient emails
      const recipients = "digitalwyce@gmail.com, anuj@wycecorp.com, rashmi@wycecorp.com";
      
      const subject = "New Lead from Website";
      const body = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
    <br>
    <p>This lead was submitted via your website form.</p>
      `;
      
      // Send email to all recipients
      try {
        MailApp.sendEmail({
          to: recipients,
          subject: subject,
          htmlBody: body
        });
        Logger.log('Email sent successfully to: ' + recipients);
      } catch (emailError) {
        Logger.log('Error sending email: ' + emailError.toString());
      }
      
      Logger.log('Email notifications sent');
    } catch (emailError) {
      Logger.log('Error in email sending: ' + emailError.toString());
      // Continue even if email fails - still return success
    }
    
    // Return success response
    Logger.log('Request processed successfully');
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Form submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the full error
    Logger.log('Error in doPost: ' + error.toString());
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
 * OPTIONAL: Test function to verify your setup
 * Run this function from the Google Apps Script editor to test
 */
function testScript() {
  // Create a test event object
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'This is a test message'
      })
    },
    parameter: {}
  };
  
  // Call doPost with test data
  const result = doPost(testEvent);
  Logger.log('Test result: ' + result.getContent());
}

