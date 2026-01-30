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
    
    // Extract user metadata fields
    let user_ip = data.user_ip || 'unknown';
    let country = data.country || 'unknown';
    let city = data.city || 'unknown';
    let latitude = data.latitude || '';
    let longitude = data.longitude || '';
    
    // If IP is private/local, get public IP
    if (user_ip === 'unknown' || user_ip === '::1' || user_ip === '127.0.0.1' || user_ip.startsWith('192.168.') || user_ip.startsWith('10.') || user_ip.startsWith('172.')) {
      try {
        const publicIpResponse = UrlFetchApp.fetch('https://api.ipify.org?format=json', {
          method: 'GET',
          muteHttpExceptions: true
        });
        
        if (publicIpResponse.getResponseCode() === 200) {
          const publicIpData = JSON.parse(publicIpResponse.getContentText());
          user_ip = publicIpData.ip;
          Logger.log('Got public IP: ' + user_ip);
        }
      } catch (ipError) {
        Logger.log('Error getting public IP: ' + ipError.toString());
      }
    }
    
    // Always try to get geolocation data from the IP
    if (user_ip !== 'unknown' && user_ip !== '::1' && user_ip !== '127.0.0.1') {
      try {
        const geoResponse = UrlFetchApp.fetch(`https://ipapi.co/${user_ip}/json/`, {
          method: 'GET',
          muteHttpExceptions: true
        });
        
        if (geoResponse.getResponseCode() === 200) {
          const geoData = JSON.parse(geoResponse.getContentText());
          country = geoData.country || 'unknown';
          city = geoData.city || 'unknown';
          latitude = geoData.latitude || '';
          longitude = geoData.longitude || '';
          
          Logger.log('Geolocation data fetched: ' + JSON.stringify(geoData));
        } else {
          Logger.log('Geolocation API failed with status: ' + geoResponse.getResponseCode());
        }
      } catch (geoError) {
        Logger.log('Error fetching geolocation: ' + geoError.toString());
      }
    }
    
    // Combine IP and location into a single location field for display
    const location = `${city}, ${country} (${latitude}, ${longitude})`.trim();
    
    // Log final data for debugging
    Logger.log('Final metadata - IP: ' + user_ip + ', Location: ' + location);
    
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
      // const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('leads');
      
      // OPTION 2: If script is standalone, use Sheet ID (uncomment and replace):
      const SHEET_ID = '1fK1THMHpGLpETVSa5Uh3lqBAL-MeOfmWmSqhSBByeSU';
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      let sheet = spreadsheet.getSheetByName('leads');
      
      // If 'leads' sheet doesn't exist, use the first sheet
      if (!sheet) {
        sheet = spreadsheet.getSheets()[0];
        Logger.log('Using first sheet instead of "leads" sheet');
      }
      
      // Ensure headers exist and are correct
      const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Message', 'IP Address', 'Location'];
      const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      
      // Check if headers need to be added/updated
      if (sheet.getLastRow() === 0 || JSON.stringify(existingHeaders) !== JSON.stringify(headers)) {
        if (sheet.getLastRow() > 0) {
          // Insert new header row at the top
          sheet.insertRowsBefore(1, 1);
        }
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        Logger.log('Headers updated: ' + JSON.stringify(headers));
      }
      
      // Append the form data
      sheet.appendRow([
        new Date(),
        name,
        email,
        phone,
        message,
        user_ip,
        location
      ]);
      
      Logger.log('Data saved to Google Sheet');
      Logger.log('Sheet name used: ' + sheet.getName());
    } catch (sheetError) {
      Logger.log('Error saving to sheet: ' + sheetError.toString());
      Logger.log('Stack trace: ' + sheetError.stack);
      
      // Try to continue with email notification
      Logger.log('Continuing with email notification despite sheet error...');
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
    <p><b>IP Address:</b> ${user_ip}</p>
    <p><b>Location:</b> ${location}</p>
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
 * Function to force authorization for all required permissions
 * Run this function first to trigger the authorization dialog
 */
function forceAuthorization() {
  // This will trigger external request permission
  const response = UrlFetchApp.fetch('https://api.ipify.org?format=json');
  Logger.log('External request test: ' + response.getContentText());
  
  // This will trigger spreadsheet permission
  const sheet = SpreadsheetApp.openById('1fK1THMHpGLpETVSa5Uh3lqBAL-MeOfmWmSqhSBByeSU');
  Logger.log('Sheet access test: ' + sheet.getName());
  
  // This will trigger email permission
  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    subject: 'Authorization Test',
    body: 'Permissions test successful'
  });
  
  Logger.log('All permissions authorized successfully!');
}

/**
 * Test function to verify your setup
 * Run this function from the Google Apps Script editor to test
 */
function testScript() {
  // Create a test event object with real metadata
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'This is a test message',
        user_ip: '203.0.113.1',
        country: 'US',
        city: 'New York',
        latitude: '40.7128',
        longitude: '-74.0060'
      })
    },
    parameter: {}
  };
  
  // Call doPost with test data
  const result = doPost(testEvent);
  Logger.log('Test result: ' + result.getContent());
}

