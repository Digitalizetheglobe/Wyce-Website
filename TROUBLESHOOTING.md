# 🔧 Troubleshooting: Form Not Sending Emails

## Quick Checklist

### ✅ Step 1: Check Your Google Apps Script Code

1. Open `GOOGLE_APPS_SCRIPT_CODE.gs` file (I created this for you)
2. Copy the ENTIRE code
3. Paste it into your Google Apps Script editor
4. **IMPORTANT**: Replace these two things:
   - `YOUR_SHEET_ID` → Your actual Google Sheet ID
   - Email addresses in the `recipients` array → Your actual email addresses

### ✅ Step 2: Deploy as Web App

1. In Google Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Set:
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (IMPORTANT - must be "Anyone")
5. Click **Deploy**
6. **Copy the new Web App URL**

### ✅ Step 3: Update Your API Route

1. Open `src/app/api/submit-lead/route.ts`
2. Find this line (around line 18):
   ```typescript
   const scriptUrl = "https://script.google.com/macros/s/.../exec";
   ```
3. Replace it with your NEW Web App URL from Step 2

### ✅ Step 4: Test and Debug

1. **Submit a form** on your website
2. **Open browser console** (F12 → Console tab)
3. Look for these messages:
   - `✅ Form submitted successfully via JSON`
   - `Google Apps Script response: 200 OK`
   - `Google Apps Script response data: {result: 'success'}`

4. **Check Google Apps Script logs**:
   - Go to Google Apps Script editor
   - Click **View** → **Execution log**
   - Look for any errors

5. **Check your Google Sheet**:
   - Open your Google Sheet
   - See if new rows are being added

6. **Check your email**:
   - Check inbox AND spam folder
   - Make sure you replaced the email addresses in the script

## Common Issues & Solutions

### ❌ "Form submitted successfully" but no email/data

**Problem**: Google Apps Script is receiving the request but not processing it correctly.

**Solution**:
1. Check Google Apps Script execution logs (View → Execution log)
2. Make sure you replaced `YOUR_SHEET_ID` with actual Sheet ID
3. Make sure you replaced the email addresses
4. Make sure the script is deployed as Web App with "Anyone" access

### ❌ "Google Apps Script error (XXX): ..."

**Problem**: The script is returning an error.

**Solution**:
1. Check the execution log in Google Apps Script
2. The error message will tell you what's wrong
3. Common issues:
   - Wrong Sheet ID → Sheet not found
   - Email address invalid → Email sending fails
   - Permission denied → Sheet/email not accessible

### ❌ No console logs at all

**Problem**: The request isn't reaching Google Apps Script.

**Solution**:
1. Check if the Web App URL is correct
2. Check if the deployment is active (not disabled)
3. Make sure "Who has access" is set to "Anyone"

## Testing Your Google Apps Script

1. Open Google Apps Script editor
2. Select the `testScript` function from the dropdown
3. Click Run (▶️)
4. Check the execution log to see if it works
5. Check your Sheet and email to verify

## Need More Help?

1. **Check browser console** - Look for error messages
2. **Check Google Apps Script execution log** - See what errors occurred
3. **Test the script manually** - Use the testScript function
4. **Verify Sheet ID** - Make sure it's correct
5. **Verify email addresses** - Make sure they're correct and accessible

---

**Remember**: The form will ALWAYS show "success" if the API route receives the data. The real test is whether Google Apps Script processes it. Check your Sheet and email!

