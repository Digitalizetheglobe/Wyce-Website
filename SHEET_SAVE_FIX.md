# 🔧 Fix: Leads Going to Email But Not Google Sheet

## The Problem

Some leads are being sent to email ✅ but NOT being saved to the Google Sheet ❌.

## Root Causes

1. **Sheet Name Mismatch**: The script looks for a specific sheet name (e.g., "Sheet1" or "leads"), but your actual sheet might have a different name.

2. **Early Return on Error**: The old script returns immediately when sheet save fails, which means:
   - If sheet save fails → Email is NOT sent
   - But in your case, emails ARE being sent, which suggests the deployed script might be different

3. **Error Handling**: The script doesn't try multiple sheet names or continue execution if sheet save fails.

## The Solution

I've updated `FIXED_GOOGLE_APPS_SCRIPT.gs` with these improvements:

### ✅ Key Fixes:

1. **Tries Multiple Sheet Names**: Automatically tries "Sheet1", "leads", "Leads", "LEADS", "Sheet 1" to find the correct sheet
2. **Continues on Sheet Error**: If sheet save fails, it still sends the email and returns a detailed response
3. **Better Error Reporting**: Returns status for both sheet save and email send operations
4. **Email Includes Warning**: If sheet save fails, the email subject includes a warning
5. **Message is Optional**: Handles cases where message might be empty

## How to Fix

### Step 1: Update Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Open your project
3. **Copy the ENTIRE code** from `FIXED_GOOGLE_APPS_SCRIPT.gs`
4. **Replace ALL your code** in the Google Apps Script editor
5. **Save** the script (Ctrl+S or Cmd+S)

### Step 2: Verify Sheet Name

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU/edit
2. Look at the **bottom tab** - what is the sheet name?
3. The script will now try multiple names automatically, but if you know the exact name, you can update line 90 in the script

### Step 3: Test the Script

1. In Google Apps Script, click the function dropdown
2. Select `testScript`
3. Click **Run** (▶️)
4. Check the execution log:
   - Should see: `✅ Found sheet: [name]`
   - Should see: `✅ Data saved to Google Sheet successfully`
   - Should see: `✅ Email sent successfully`
5. Check your Google Sheet - a new test row should appear
6. Check your email - you should receive a test email

### Step 4: Redeploy the Web App

**IMPORTANT**: You MUST redeploy after updating the code!

1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Click the **pencil icon** (✏️) to edit the existing deployment
3. OR click **New deployment** to create a new one
4. Make sure:
   - **Execute as**: Me
   - **Who has access**: **Anyone** (must be "Anyone"!)
5. Click **Deploy**
6. **Copy the NEW Web App URL** (if you created a new deployment)

### Step 5: Update API Route (Only if you got a new URL)

If you created a new deployment and got a new URL:

1. Open `src/app/api/submit-lead/route.ts`
2. Find: `const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;`
3. Make sure your `.env.local` file has the correct URL:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

### Step 6: Test Real Form Submission

1. Submit a form on your website
2. Check Google Apps Script execution logs:
   - Go to **Executions** (left sidebar)
   - Find the most recent execution
   - Click on it to see details
   - Look for:
     - `✅ Found sheet: [name]` - Sheet was found
     - `✅ Data saved to Google Sheet successfully` - Data was saved
     - `✅ Email sent successfully` - Email was sent
3. Check your Google Sheet - new row should appear
4. Check your email - should receive notification

## What to Look For in Logs

### ✅ Success Logs:
```
=== NEW REQUEST RECEIVED ===
✅ Parsed JSON data: {...}
📋 Extracted data - Name: ..., Email: ...
✅ Found sheet: Sheet1
✅ Data saved to Google Sheet successfully
✅ Email sent successfully to: ...
✅ Request processed - Sheet: OK, Email: OK
```

### ❌ Error Logs (Sheet Save Failed):
```
❌ Error saving to sheet: Sheet not found. Tried: Sheet1, leads, ...
Available sheets: ["Sheet1", "OtherSheet"]
✅ Email sent successfully to: ...
✅ Request processed - Sheet: FAILED, Email: OK
```

If you see "Sheet: FAILED", check:
- The sheet name in your Google Sheet
- The sheet ID is correct
- The sheet is shared with your Google account

## Response Format

The script now returns detailed status:

```json
{
  "result": "success",  // or "partial_success" or "error"
  "message": "Form submitted successfully",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sheetSaved": true,   // or false
  "emailSent": true,    // or false
  "warning": "Sheet save failed: ..."  // only if sheet save failed
}
```

## Common Issues

### Issue: "Sheet not found" even after fix

**Solution:**
1. Check the exact sheet name in your Google Sheet (case-sensitive)
2. Add the exact name to the `sheetNames` array in the script (line 90)
3. Make sure the sheet ID is correct (line 74)

### Issue: "Permission denied"

**Solution:**
1. Make sure the Google Sheet is shared with your Google account
2. Make sure "Who has access" in Web App deployment is set to "Anyone"
3. Try re-deploying the Web App

### Issue: Still not saving to sheet

**Solution:**
1. Check execution logs in Google Apps Script
2. Look for the exact error message
3. Verify the sheet ID is correct
4. Verify the sheet name matches one of the names in the script

## Verification Checklist

- [ ] Updated Google Apps Script with new code
- [ ] Saved the script
- [ ] Ran `testScript` function successfully
- [ ] Test row appeared in Google Sheet
- [ ] Test email was received
- [ ] Redeployed Web App
- [ ] Tested real form submission
- [ ] Checked execution logs - both sheet save and email send succeeded
- [ ] Verified data appears in Google Sheet
- [ ] Verified email notification received

## Next Steps

After deploying the fix:

1. Monitor the execution logs for a few form submissions
2. Verify that both sheet save and email send are working
3. If you see "Sheet: FAILED" in logs, check the sheet name and update the script accordingly

The fix ensures that even if sheet save fails, you'll still receive email notifications with a warning, so you don't lose any leads!

