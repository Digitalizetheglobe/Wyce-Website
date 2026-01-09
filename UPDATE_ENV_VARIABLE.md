# 🔧 Update Environment Variable with New Deployment URL

## New Deployment Information

**Deployment ID**: `AKfycbxdFuVfYYHpsESJeL2t4Dg5woDqJ7TIUO821nFPXcub4mWz9wbJLsEjdFoo2OYAdDtkEA`

**New Web App URL**: 
```
https://script.google.com/macros/s/AKfycbxdFuVfYYHpsESJeL2t4Dg5woDqJ7TIUO821nFPXcub4mWz9wbJLsEjdFoo2OYAdDtkEA/exec
```

## About the "doGet not found" Error

⚠️ **This is NORMAL!** When you open the URL in a browser, it tries to make a GET request, but your script only has `doPost` function (for POST requests). This is expected behavior.

**The script will work correctly** when your website sends POST requests to it (which is what happens when forms are submitted).

## Step 1: Update Local Environment (For Development)

1. Create or edit `.env.local` file in your project root:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxdFuVfYYHpsESJeL2t4Dg5woDqJ7TIUO821nFPXcub4mWz9wbJLsEjdFoo2OYAdDtkEA/exec
   ```

2. **Restart your Next.js dev server**:
   - Stop the server (Ctrl+C)
   - Start it again (`npm run dev`)

## Step 2: Update Production Environment (Vercel/Other Hosting)

### If using Vercel:

1. Go to your project on [Vercel Dashboard](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Find `GOOGLE_APPS_SCRIPT_URL` or create it if it doesn't exist
4. Update the value to:
   ```
   https://script.google.com/macros/s/AKfycbxdFuVfYYHpsESJeL2t4Dg5woDqJ7TIUO821nFPXcub4mWz9wbJLsEjdFoo2OYAdDtkEA/exec
   ```
5. Select environments: **Production**, **Preview**, **Development**
6. Click **Save**
7. **Redeploy** your application:
   - Go to **Deployments** tab
   - Click the **three dots** (⋯) on the latest deployment
   - Click **Redeploy**

### If using other hosting platforms:

1. Navigate to your hosting platform's environment variables settings
2. Update `GOOGLE_APPS_SCRIPT_URL` with the new URL
3. Redeploy your application

## Step 3: Verify the Configuration

### Test Locally:

1. Start your dev server: `npm run dev`
2. Submit a test form on your website
3. Check browser console (F12) - should see successful submission
4. Check Google Apps Script execution logs - should see new execution
5. Check Google Sheet - new row should appear

### Test in Production:

1. After redeploying, submit a test form on your live website
2. Check Google Apps Script execution logs
3. Check Google Sheet - new row should appear

## Verification Checklist

- [ ] `.env.local` file created/updated with new URL
- [ ] Local dev server restarted
- [ ] Production environment variable updated (Vercel/other)
- [ ] Production application redeployed
- [ ] Test form submitted locally - works ✅
- [ ] Test form submitted in production - works ✅
- [ ] Data appears in Google Sheet ✅
- [ ] Email notifications received ✅

## What to Check in Execution Logs

After submitting a form, check Google Apps Script execution logs. You should see:

```
=== NEW REQUEST RECEIVED ===
✅ Parsed JSON data: {...}
📋 Extracted data - Name: ..., OTP Verified: true/false
✅ Found sheet: Sheet1
✅ Data saved to Google Sheet successfully - OTP Verified: true/false
✅ Email sent successfully
✅ Request processed - Sheet: OK, Email: OK
```

## Troubleshooting

### Issue: Still using old URL

**Solution:**
- Make sure you restarted the dev server after updating `.env.local`
- Make sure you redeployed production after updating environment variables
- Clear browser cache and try again

### Issue: "doGet not found" when opening URL

**This is normal!** The script only has `doPost` function. It will work when your website sends POST requests.

### Issue: Form submissions not working

**Check:**
1. Is the environment variable set correctly?
2. Check browser console for errors
3. Check Google Apps Script execution logs
4. Verify the script code is deployed correctly

## Next Steps

1. ✅ Update environment variables (local + production)
2. ✅ Test form submission locally
3. ✅ Test form submission in production
4. ✅ Verify data appears in Google Sheet
5. ✅ Monitor execution logs for a few days

Your new deployment is ready! All form submissions (OTP verified and not verified) will now be saved to your Google Sheet. 🎉

