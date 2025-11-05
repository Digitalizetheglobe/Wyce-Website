# Google Apps Script Web App Setup Guide

## ⚠️ IMPORTANT: Complete Setup Instructions

If emails aren't being sent or data isn't being saved, follow these steps EXACTLY.

### Step 1: Check Your Google Apps Script Code

Your Google Apps Script should look something like this:

```javascript
function doPost(e) {
  try {
    // Get the data from the POST request
    // For JSON requests:
    const data = JSON.parse(e.postData.contents);
    
    // OR for FormData/URL-encoded requests:
    // const data = e.parameter;
    
    const name = data.name || e.parameter.name;
    const email = data.email || e.parameter.email;
    const phone = data.phone || e.parameter.phone;
    const message = data.message || e.parameter.message;
    
    // Get your Google Sheet
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Add a new row with the data
    sheet.appendRow([
      new Date(),
      name,
      email,
      phone,
      message
    ]);
    
    // Send email notification (optional)
    const recipients = ['email1@example.com', 'email2@example.com', 'email3@example.com'];
    const subject = `New Form Submission from ${name}`;
    const body = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;
    
    recipients.forEach(recipient => {
      MailApp.sendEmail(recipient, subject, body);
    });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy as Web App

1. In Google Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Set the following:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone (or "Anyone with Google account" if you want to restrict)
5. Click **Deploy**
6. Copy the **Web App URL** (this is the URL you're using in the code)

### Step 3: Enable Required Services

Make sure you've enabled these services in your Google Apps Script:
- **SpreadsheetApp** (if saving to Google Sheets)
- **MailApp** (if sending emails)
- **ContentService** (for returning responses)

To enable:
1. In Google Apps Script editor, click **Extensions** → **Apps Script API**
2. Enable the required services

### Step 4: Test the Script

1. Open your browser's Developer Console (F12)
2. Submit a form
3. Check the console logs - you should see which method worked:
   - ✅ Form submitted successfully (JSON)
   - ✅ Form submitted successfully (FormData)
   - ✅ Form submitted successfully (URL-encoded)
   - ⚠️ Submitted with no-cors mode (cannot verify)

4. Check your Google Sheet to see if data was saved
5. Check your email inbox for notifications

### Step 5: Common Issues

**Issue**: Data not saving to Google Sheet
- **Solution**: Make sure you've set the correct Sheet ID in your script
- **Solution**: Check that the sheet has the right permissions

**Issue**: Emails not sending
- **Solution**: Make sure MailApp is enabled
- **Solution**: Check that recipient emails are correct
- **Solution**: Verify your Google account has email sending permissions

**Issue**: CORS errors in console
- **Solution**: This is normal if using no-cors mode (last resort)
- **Solution**: Make sure your Web App deployment has "Anyone" access

### Step 6: Get Your Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part
4. Replace `YOUR_SHEET_ID` in the script code above

---

## Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Check the Google Apps Script execution logs (View → Execution log)
3. Make sure your Web App URL is correct and the deployment is active

