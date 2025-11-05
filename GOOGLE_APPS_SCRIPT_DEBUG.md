# 🔍 Debugging: Form Shows Success But No Emails

## The Problem

Your form shows "✅ Message sent successfully!" but:
- ❌ No emails are being received
- ❌ Data might not be saved to Google Sheet

## Why This Happens

The form shows success because the **API route successfully sends data to Google Apps Script**. However, the **Google Apps Script itself might be failing** to process the data.

## How to Debug

### Step 1: Check Browser Console

1. Open your website
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Submit the form
5. Look for these messages:

```
✅ Form submitted successfully via JSON
📧 Response details: {method: "JSON", status: 200, ...}
```

**If you see `⚠️ Google Apps Script returned an error`**:
- This means Google Apps Script received the data but failed to process it
- Check the error message - it will tell you what went wrong

### Step 2: Check Google Apps Script Execution Logs

1. Go to [Google Apps Script](https://script.google.com)
2. Open your project
3. Click **View** → **Execution log** (or **Executions** in the left sidebar)
4. Find the most recent execution
5. Click on it to see details

**Look for:**
- ✅ Green checkmark = Success
- ❌ Red X = Error (click to see error details)

**Common errors you might see:**
- `Cannot find sheet with ID: YOUR_SHEET_ID` → Sheet ID is wrong
- `Invalid email address` → Email address in recipients array is wrong
- `Permission denied` → Script doesn't have access to Sheet/Email

### Step 3: Verify Your Google Apps Script Code

Open `GOOGLE_APPS_SCRIPT_CODE.gs` and make sure you:

1. **Replaced `YOUR_SHEET_ID`**:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID';  // ❌ WRONG
   const SHEET_ID = '1abc123xyz...';   // ✅ CORRECT
   ```

2. **Replaced email addresses**:
   ```javascript
   const recipients = [
     'email1@example.com',  // ❌ WRONG - replace with real emails
     'your-email@gmail.com', // ✅ CORRECT
   ];
   ```

### Step 4: Test Your Google Apps Script Manually

1. In Google Apps Script editor, click the function dropdown
2. Select `testScript`
3. Click **Run** (▶️)
4. Check the execution log
5. Check your Google Sheet - a new row should appear
6. Check your email - you should receive a test email

**If this doesn't work, your script has an error. Fix it before testing the form.**

### Step 5: Check Web App Deployment

1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Make sure there's an **active deployment**
3. Click the **pencil icon** (✏️) to edit
4. Verify:
   - **Execute as**: Me
   - **Who has access**: **Anyone** (must be "Anyone"!)
5. Copy the **Web App URL**
6. Make sure this URL matches the one in `src/app/api/submit-lead/route.ts`

### Step 6: Verify Data is Being Received

Add this to your Google Apps Script `doPost` function (temporarily for debugging):

```javascript
function doPost(e) {
  try {
    // Log everything
    Logger.log('=== NEW REQUEST ===');
    Logger.log('PostData contents: ' + JSON.stringify(e.postData));
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    // ... rest of your code
  }
}
```

Then:
1. Submit a form
2. Check Execution log in Google Apps Script
3. You should see the logged data
4. If you don't see any logs, the script isn't receiving the request

## Common Issues & Solutions

### Issue 1: "Cannot find sheet with ID"

**Solution:**
- Get the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
- Make sure the Sheet is shared with your Google account
- Make sure the Sheet ID is correct (no extra spaces)

### Issue 2: "Invalid email address"

**Solution:**
- Check all email addresses in the `recipients` array
- Make sure they're valid email addresses
- Make sure they're in quotes: `'email@example.com'`

### Issue 3: "Permission denied"

**Solution:**
- Make sure the Sheet is shared with your Google account
- Make sure "Who has access" is set to "Anyone"
- Try re-deploying the Web App

### Issue 4: Script runs but no email

**Solution:**
- Check spam folder
- Make sure `MailApp` is enabled
- Check if your Google account has email sending limits
- Try sending to a different email address

### Issue 5: No execution logs at all

**Solution:**
- The script isn't receiving the request
- Check if the Web App URL is correct
- Make sure the deployment is active
- Try re-deploying the Web App

## Quick Fix Checklist

- [ ] Copied code from `GOOGLE_APPS_SCRIPT_CODE.gs`
- [ ] Replaced `YOUR_SHEET_ID` with actual Sheet ID
- [ ] Replaced email addresses with real emails
- [ ] Deployed as Web App with "Anyone" access
- [ ] Updated API route with new Web App URL
- [ ] Tested script manually (testScript function)
- [ ] Checked execution logs for errors
- [ ] Checked spam folder for emails

## Still Not Working?

1. **Check browser console** - Look for error messages
2. **Check execution logs** - See what Google Apps Script is doing
3. **Test manually** - Run testScript function
4. **Verify setup** - Make sure everything is configured correctly

The form showing success means the **data is being sent**. The issue is in **Google Apps Script processing**. Check the execution logs to see what's failing!

