# ✅ Quick Fix Checklist - Form Not Saving Data/Emails

## Current Status
✅ **Request IS reaching Google Apps Script** (FormData method working)
⚠️ **But script is not returning JSON response** (no response body)

## What This Means
- Your Next.js app is sending data correctly ✅
- Google Apps Script is receiving the request ✅
- BUT: Google Apps Script might not be processing it correctly ❌

## Step-by-Step Fix

### Step 1: Use the Fixed Script
1. Open `FIXED_GOOGLE_APPS_SCRIPT.gs` file
2. Copy the ENTIRE code
3. Go to [Google Apps Script](https://script.google.com)
4. Open your project
5. **Replace ALL your code** with the fixed version
6. **IMPORTANT**: Make sure the sheet name is `'leads'` (line 60)

### Step 2: Check Your Sheet Name
In your Google Sheet:
- Look at the bottom tab - what is the sheet name?
- It should be exactly `leads` (case-sensitive)
- If it's different, either:
  - Rename the sheet to `leads`, OR
  - Change line 60 in the script to match your sheet name

### Step 3: Redeploy the Web App
1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Click the **pencil icon** (✏️) to edit
3. OR create a new deployment
4. Make sure:
   - **Execute as**: Me
   - **Who has access**: **Anyone** (must be "Anyone"!)
5. Click **Deploy**
6. **Copy the NEW Web App URL**

### Step 4: Update API Route
1. Open `src/app/api/submit-lead/route.ts`
2. Find line ~18: `const scriptUrl = "..."`
3. Replace it with your NEW Web App URL from Step 3

### Step 5: Test and Debug
1. Submit a form on your website
2. Open browser console (F12) - you should see more detailed logs now
3. **MOST IMPORTANT**: Check Google Apps Script execution logs:
   - Go to Google Apps Script
   - Click **Executions** (left sidebar)
   - Find the most recent execution
   - Click on it to see details
   - Look for:
     - ✅ Green checkmark = Success
     - ❌ Red X = Error (click to see what failed)

### Step 6: Verify Data is Being Received
In the execution log, you should see:
```
=== NEW REQUEST RECEIVED ===
PostData contents: ...
Parameters: ...
✅ Using parameters data: ...
📋 Extracted data - Name: ..., Email: ...
```

If you see this, the script IS receiving data!

### Step 7: Check for Errors
Look for these in the execution log:
- `❌ Sheet "leads" not found!` → Sheet name is wrong
- `❌ Missing required fields` → Data format issue
- `❌ Error saving to sheet` → Permission issue
- `❌ Error sending email` → Email issue

## Common Issues & Quick Fixes

### Issue: "Sheet 'leads' not found"
**Fix**: 
- Check the exact sheet name in your Google Sheet
- Make sure it matches exactly (case-sensitive)
- Or change line 60 in the script

### Issue: "Missing required fields"
**Fix**:
- Check execution log to see what data was received
- Make sure the form is sending: name, email, phone, message

### Issue: Script runs but no data saved
**Fix**:
- Check if script has permission to edit the sheet
- Make sure the sheet is shared with your Google account
- Try using Sheet ID instead (see FIXED script, line 64-65)

### Issue: No emails sent
**Fix**:
- Check execution log for email errors
- Verify email addresses are correct
- Check spam folder
- Make sure MailApp is enabled

## What to Check Right Now

1. ✅ Are you using the FIXED_GOOGLE_APPS_SCRIPT.gs code?
2. ✅ Is the sheet name exactly `'leads'`?
3. ✅ Did you redeploy the Web App after updating the script?
4. ✅ Did you update the API route with the new Web App URL?
5. ✅ What do the execution logs show?

## Next Steps

After following the checklist:
1. Submit a form
2. Check execution logs in Google Apps Script
3. Share what you see in the logs
4. Check your Google Sheet - does data appear?
5. Check your email - did you receive notification?

The fact that you're getting "no response body" means the script might be working but not returning JSON. The FIXED script will return proper JSON, so you'll see the actual response!

