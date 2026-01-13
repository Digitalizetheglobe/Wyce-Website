# 📋 How to Check Execution Logs - Step by Step

## What You're Seeing

Your execution logs show:
- ✅ Multiple "Completed" executions for `doPost` (Version 6, Version 5)
- ✅ The highlighted one: **5:44:09 PM** (Version 6, doPost, Completed) - matches your email time
- ✅ Newer execution: **5:55:59 PM** (Version 6, doPost, Completed)

## Step-by-Step: View Detailed Logs

### Step 1: Click on the Execution

1. **Click on the highlighted row** (5:44:09 PM, Version 6, doPost, Completed)
   - OR click on the most recent one (5:55:59 PM)
2. This will open the **execution details** panel

### Step 2: View the Logs

In the execution details, you'll see:

**Left side:**
- Execution summary
- Status: Completed
- Duration: 1.324 s

**Right side (or below):**
- **"View logs"** or **"Execution log"** button
- Click it to see detailed logs

### Step 3: What to Look For

Scroll through the logs and look for these messages:

#### ✅ If Working Correctly:
```
=== NEW REQUEST RECEIVED ===
✅ Parsed JSON data: {...}
📋 Extracted data - Name: Adarsh Sanjivan Waghmare, OTP Verified: false
✅ Found sheet: Sheet1
✅ Sheet ID: 1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU
✅ Last row BEFORE append: 151
✅ Data to append: [...]
✅ Last row AFTER append: 152
✅ Data saved to Google Sheet successfully - OTP Verified: false
✅ New row number: 152
✅ Verified saved name: Adarsh Sanjivan Waghmare
✅ Email sent successfully
✅ Request processed - Sheet: OK, Email: OK
```

#### ❌ If Failing:
```
=== NEW REQUEST RECEIVED ===
✅ Parsed JSON data: {...}
📋 Extracted data - Name: Adarsh Sanjivan Waghmare, OTP Verified: false
✅ Found sheet: Sheet1
✅ Last row BEFORE append: 151
❌ Error saving to sheet: [error message here]
✅ Email sent successfully
✅ Request processed - Sheet: FAILED, Email: OK
```

## Common Error Messages to Look For

### Error 1: Sheet Not Found
```
❌ Sheet not found! Available sheets: ["Sheet1", "Prospect Clients", "site visit done"]
```
**Meaning**: Script can't find the sheet
**Fix**: Check sheet name matches exactly

### Error 2: Permission Denied
```
❌ Error saving to sheet: Exception: You do not have permission to call appendRow on this spreadsheet
```
**Meaning**: Script doesn't have permission to edit
**Fix**: Re-authorize the script, make sure sheet is shared

### Error 3: Spreadsheet Not Found
```
❌ Error saving to sheet: Exception: Spreadsheet not found
```
**Meaning**: Sheet ID is wrong
**Fix**: Verify Sheet ID in script matches your sheet

### Error 4: Row Not Added
```
✅ Last row BEFORE append: 151
✅ Last row AFTER append: 151
❌ Error: Row was not added!
```
**Meaning**: appendRow() didn't work
**Fix**: Check sheet permissions, try manual test

## What to Share

After clicking on the execution and viewing logs, share:

1. **Do you see "✅ Found sheet: Sheet1"?**
2. **Do you see "✅ Last row BEFORE append: [number]"?**
3. **Do you see "✅ Last row AFTER append: [number]"?**
   - Does the number increase? (Should go from 151 to 152)
4. **Do you see any error messages?**
   - Copy the exact error message
5. **Do you see "✅ Verified saved name: [name]"?**
   - Does the name match what you submitted?

## Alternative: Check Most Recent Execution

If the 5:44 PM execution doesn't show detailed logs, try:

1. Click on the **most recent execution** (5:55:59 PM, Version 6)
2. This one might have the updated logging
3. Check the same things listed above

## If You Don't See Detailed Logs

If clicking on the execution doesn't show logs:

1. Make sure you're logged into the correct Google account
2. Try refreshing the page
3. Check if there's a "View logs" or "Execution log" button
4. The logs might be in a different location - look for a "Logs" tab or section

## Quick Test: Run testScript

While checking logs, also test manually:

1. In Google Apps Script editor, select `testScript` from function dropdown
2. Click **Run** (▶️)
3. Check execution logs for this test
4. Check your Google Sheet - does "Test User" appear?

**If testScript works but real submissions don't:**
- The issue is with how data is received in doPost

**If testScript also fails:**
- The issue is with sheet access/permissions

## Next Steps

1. ✅ **Click on the 5:44:09 PM execution** (or 5:55:59 PM)
2. ✅ **View the detailed logs**
3. ✅ **Look for the messages listed above**
4. ✅ **Share what you see** - especially any error messages
5. ✅ **Check if testScript works**

The logs will tell us exactly what's happening! 🔍

