# 🚀 Deploy Fixed Script - Saves ALL Leads (OTP Verified & Not Verified)

## What's Fixed

✅ **Saves ALL leads** - Both OTP verified AND not verified  
✅ **Extracts OTP status** from form submission  
✅ **Adds OTP status to sheet** (Column F: TRUE/FALSE)  
✅ **Visual formatting** - Red background for unverified leads  
✅ **Better error handling** - Continues even if formatting fails  
✅ **Detailed logging** - Shows exactly what's happening  

## Step-by-Step Deployment

### Step 1: Copy the Fixed Script

1. Open `FIXED_GOOGLE_APPS_SCRIPT.gs` in this project
2. **Select ALL** the code (Ctrl+A)
3. **Copy** it (Ctrl+C)

### Step 2: Update Google Apps Script

1. Go to: https://script.google.com
2. Open your project
3. **Select ALL** existing code (Ctrl+A)
4. **Delete** it (Delete key)
5. **Paste** the new code (Ctrl+V)
6. **Save** (Ctrl+S or File → Save)

### Step 3: Create New Deployment

**IMPORTANT**: You MUST create a new deployment for the changes to take effect!

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Select **Web app**
4. Configure:
   - **Description**: "Version 5 - Saves all leads with OTP status"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (MUST be "Anyone"!)
5. Click **Deploy**
6. **Authorize** if prompted (click "Authorize access")
7. **Copy the Web App URL** (you'll need this)

### Step 4: Update Environment Variable (If URL Changed)

If you got a new Web App URL:

1. Open your `.env.local` file (in project root)
2. Update `GOOGLE_APPS_SCRIPT_URL` with the new URL:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_NEW_ID/exec
   ```
3. **Restart your Next.js dev server** if running locally

### Step 5: Test the Script

1. In Google Apps Script, select `testScript` from the function dropdown
2. Click **Run** (▶️)
3. Check execution logs - should see:
   ```
   ✅ Found sheet: Sheet1
   ✅ Data saved to Google Sheet successfully - OTP Verified: false
   ✅ Email sent successfully
   ```
4. Check your Google Sheet - a test row should appear
5. Check your email - should receive test notification

### Step 6: Test Real Form Submission

1. Submit a form on your website (with OTP verified)
2. Submit another form (without OTP verification)
3. Check Google Sheet - **BOTH should appear**:
   - Verified lead: Normal formatting
   - Unverified lead: **Red background** (Column F = FALSE)
4. Check execution logs - should show both saved successfully

## What the Script Does Now

### For ALL Leads (Verified & Not Verified):

1. **Extracts data**: Name, Email, Phone, Message, OTP Status
2. **Saves to sheet** in columns:
   - Column A: Date/Time
   - Column B: Name
   - Column C: Email
   - Column D: Phone
   - Column E: Message
   - Column F: OTP Verified (TRUE/FALSE)
3. **Applies formatting**:
   - Verified (TRUE): Normal/white background
   - Not Verified (FALSE): **Red background** (#ffcccc) with red text
4. **Sends email** with OTP status in subject
5. **Logs everything** for debugging

## Expected Sheet Structure

After deployment, new leads will appear like this:

| A (Date) | B (Name) | C (Email) | D (Phone) | E (Message) | F (OTP) |
|----------|----------|-----------|-----------|-------------|---------|
| 1/9/2026 5:30 PM | John Doe | john@example.com | 1234567890 | Interested | TRUE |
| 1/9/2026 5:31 PM | Jane Smith | jane@example.com | 0987654321 | Test | FALSE |

**Note**: Row with FALSE will have **red background** to highlight unverified leads.

## Verification Checklist

After deploying, verify:

- [ ] Script code updated in Google Apps Script
- [ ] Script saved successfully
- [ ] New deployment created (Version 5)
- [ ] Web App URL copied
- [ ] Environment variable updated (if URL changed)
- [ ] testScript function runs successfully
- [ ] Test row appears in Google Sheet
- [ ] Test email received
- [ ] Real form submission (verified) appears in sheet
- [ ] Real form submission (not verified) appears in sheet with red background
- [ ] Execution logs show "Sheet: OK" for both

## Troubleshooting

### Issue: Still not saving to sheet

**Check:**
1. Execution logs - what error do you see?
2. Sheet permissions - is it shared with your Google account?
3. Sheet name - is it exactly "Sheet1"?
4. Deployment - did you create a NEW deployment?

### Issue: OTP status not showing

**Check:**
1. Is `otpVerified` being sent from the API route? (Check browser console)
2. Execution logs - does it show "OTP Verified: true/false"?
3. Column F in sheet - is it showing TRUE/FALSE?

### Issue: Red formatting not applying

**This is OK!** The data is still saved. Formatting is optional and might fail if:
- Sheet has protection
- Script doesn't have formatting permissions
- Column F doesn't exist

**The important thing**: Data is saved regardless!

## What to Look For in Logs

### ✅ Success:
```
=== NEW REQUEST RECEIVED ===
✅ Parsed JSON data: {name: "...", otpVerified: "true"}
📋 Extracted data - Name: ..., OTP Verified: true
✅ Found sheet: Sheet1
✅ Data saved to Google Sheet successfully - OTP Verified: true
✅ Email sent successfully
✅ Request processed - Sheet: OK, Email: OK
```

### ❌ If Sheet Save Fails:
```
❌ Error saving to sheet: [error message]
✅ Email sent successfully
✅ Request processed - Sheet: FAILED, Email: OK
```

**Even if sheet save fails, email is still sent!**

## Important Notes

1. **ALL leads are saved** - OTP verification status doesn't prevent saving
2. **Visual distinction** - Unverified leads have red background
3. **Email includes OTP status** - Subject shows verified/not verified
4. **Better error handling** - Script continues even if formatting fails
5. **Detailed logging** - Every step is logged for debugging

## Next Steps

1. **Deploy the script** following steps above
2. **Test with both** verified and unverified submissions
3. **Check your sheet** - both should appear
4. **Monitor execution logs** for a few days to ensure it's working

The script now saves **ALL leads** regardless of OTP verification status! 🎉

