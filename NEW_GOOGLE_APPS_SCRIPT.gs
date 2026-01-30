/**
 * COMPLETE GOOGLE APPS SCRIPT CODE - NEW VERSION
 * Copy this entire code into a NEW Google Apps Script project
 */

function doPost(e) {
  try {
    Logger.log('Received POST request');
    Logger.log('PostData contents: ' + e.postData.contents);
    
    // Parse the data
    let data = {};
    
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log('Parsed JSON data: ' + JSON.stringify(data));
      } catch (parseError) {
        data = e.parameter;
        Logger.log('Using parameters data: ' + JSON.stringify(data));
      }
    } else {
      data = e.parameter;
    }
    
    // Extract form fields
    const name = data.name || data.firstName || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || '';
    const otpVerified = data.otpVerified === 'true' || data.otpVerified === true; // Handle both string and boolean
    
    // Extract device/browser/OS information
    const userAgent = data.userAgent || '';
    const deviceType = data.deviceType || 'unknown';
    const browser = data.browser || 'unknown';
    const os = data.os || 'unknown';
    
    // Extract metadata
    let user_ip = data.user_ip || 'unknown';
    let country = data.country || 'unknown';
    let city = data.city || 'unknown';
    let latitude = data.latitude || '';
    let longitude = data.longitude || '';
    
    // Get public IP if private
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
    
    // Get geolocation - try multiple APIs for better reliability
    if (user_ip !== 'unknown' && user_ip !== '::1' && user_ip !== '127.0.0.1') {
      try {
        // Try ipapi.co first
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
          Logger.log('Geolocation data from ipapi.co: ' + JSON.stringify(geoData));
        } else {
          // Fallback to ip-api.com
          const fallbackResponse = UrlFetchApp.fetch(`http://ip-api.com/json/${user_ip}`, {
            method: 'GET',
            muteHttpExceptions: true
          });
          
          if (fallbackResponse.getResponseCode() === 200) {
            const fallbackData = JSON.parse(fallbackResponse.getContentText());
            country = fallbackData.countryCode || 'unknown';
            city = fallbackData.city || 'unknown';
            latitude = fallbackData.lat || '';
            longitude = fallbackData.lon || '';
            Logger.log('Geolocation data from ip-api.com: ' + JSON.stringify(fallbackData));
          }
        }
      } catch (geoError) {
        Logger.log('Geolocation error: ' + geoError.toString());
      }
    }
    
    const location = `${city}, ${country} (${latitude}, ${longitude})`.trim();
    Logger.log('Final metadata - IP: ' + user_ip + ', Location: ' + location);
    
    // Save to Google Sheet
    try {
      const SHEET_ID = '1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU';
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      let sheet = spreadsheet.getSheetByName('Sheet1');
      
      if (!sheet) {
        sheet = spreadsheet.getSheets()[0];
      }
      
      // Ensure headers - matching your exact column order
      const headers = ['TimeStamp', 'Name', 'Email', 'Phone', 'Message', 'IP Address', 'Location', 'Device', 'Browser', 'OS', 'Lead', 'RM'];
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
      }
      
      // Add data in the exact order of your columns
      sheet.appendRow([
        new Date(),                    // TimeStamp
        name,                          // Name
        email,                         // Email
        phone,                         // Phone
        message,                       // Message
        user_ip,                       // IP Address
        location,                      // Location
        deviceType,                    // Device
        browser,                       // Browser
        os,                            // OS
        otpVerified ? 'TRUE' : 'FALSE', // Lead
        ''                             // RM (empty for now)
      ]);
      
      Logger.log('Data saved to Google Sheet successfully');
    } catch (sheetError) {
      Logger.log('Sheet error: ' + sheetError.toString());
      Logger.log('Stack trace: ' + sheetError.stack);
    }
    
    // Send email
    try {
      const recipients = "digitalwyce@gmail.com, anuj@wycecorp.com, rashmi@wycecorp.com";
      const subject = "New Lead from Website";
      const body = `
        <h2>New Lead Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><strong>IP Address:</strong> ${user_ip}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>OTP Verified:</strong> ${otpVerified ? 'TRUE' : 'FALSE'}</p>
        <hr>
        <h3>Device Information:</h3>
        <p><strong>Device Type:</strong> ${deviceType}</p>
        <p><strong>Browser:</strong> ${browser}</p>
        <p><strong>Operating System:</strong> ${os}</p>
        <hr>
        <p><em>This lead was submitted via your website form.</em></p>
      `;
      
      MailApp.sendEmail({
        to: recipients,
        subject: subject,
        htmlBody: body
      });
      
      Logger.log('Email sent successfully to: ' + recipients);
    } catch (emailError) {
      Logger.log('Email error: ' + emailError.toString());
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Form submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Main error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function testScript() {
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
        longitude: '-74.0060',
        otpVerified: 'true',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        deviceType: 'Desktop',
        browser: 'Chrome',
        os: 'Windows 10'
      })
    },
    parameter: {}
  };
  
  const result = doPost(testEvent);
  Logger.log('Test result: ' + result.getContent());
}
