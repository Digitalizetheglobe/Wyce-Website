# Google Apps Script Update Guide

## Problem
The `otpVerified` parameter is being sent from the website, but the Google Apps Script needs to be updated to:
1. Receive the `otpVerified` parameter
2. Apply red formatting to rows where OTP is not verified

## Solution

Update your Google Apps Script with the following code. This script will:
- Receive the `otpVerified` parameter
- Write data to the spreadsheet
- Apply red background color to rows where `otpVerified` is "false" or not provided

## Updated Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get the parameters (works with both JSON and form data)
    var name, email, phone, message, otpVerified;
    
    if (e.postData && e.postData.type === 'application/json') {
      // Handle JSON POST
      var data = JSON.parse(e.postData.contents);
      name = data.name;
      email = data.email;
      phone = data.phone;
      message = data.message || "";
      otpVerified = data.otpVerified || "false";
    } else {
      // Handle form data POST
      name = e.parameter.name;
      email = e.parameter.email;
      phone = e.parameter.phone;
      message = e.parameter.message || "";
      otpVerified = e.parameter.otpVerified || "false";
    }
    
    // Validate required fields
    if (!name || !email || !phone) {
      return ContentService.createTextOutput(
        JSON.stringify({ result: "error", error: "Missing required fields" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Append the row to the sheet
    var row = [timestamp, name, email, phone, message, otpVerified];
    var newRow = sheet.appendRow(row);
    var rowNumber = sheet.getLastRow();
    
    // Get the range for the entire row
    var rowRange = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn());
    
    // Apply formatting based on OTP verification status
    if (otpVerified === "false" || otpVerified === false || otpVerified === "") {
      // Set red background for unverified leads
      rowRange.setBackground("#ffcccc"); // Light red
      rowRange.setFontColor("#cc0000"); // Dark red text
    } else {
      // Set normal formatting for verified leads
      rowRange.setBackground("#ffffff"); // White background
      rowRange.setFontColor("#000000"); // Black text
    }
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: rowNumber })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Steps to Update

1. Open your Google Apps Script project
2. Replace the existing `doPost` function with the code above
3. Save the script
4. **Important**: Redeploy the Web App:
   - Click "Deploy" → "Manage deployments"
   - Click the pencil icon to edit
   - Click "Deploy" again (this updates the deployment with new code)
5. Test by submitting a form

## Column Structure

Make sure your spreadsheet has these columns (in order):
1. Timestamp
2. Name
3. Email
4. Phone
5. Message
6. OTP Verified (optional - can be hidden if you don't want to show it)

## Formatting Details

- **Unverified leads** (otpVerified = "false"): Red background (#ffcccc) with dark red text (#cc0000)
- **Verified leads** (otpVerified = "true"): White background with black text (normal)

You can customize the colors by changing the hex codes in the script.

## Testing

After updating:
1. Submit a form without entering OTP → Should appear in red
2. Submit a form with OTP verification → Should appear in normal color

## Troubleshooting

If formatting doesn't work:
1. Check the browser console for any errors
2. Verify the `otpVerified` parameter is being received (add `Logger.log(otpVerified)` in the script)
3. Make sure you redeployed the Web App after updating the code
4. Check that the sheet has the correct number of columns
