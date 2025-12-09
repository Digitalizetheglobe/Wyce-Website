# Production Environment Variables Setup

## Issue
The `/api/send-otp` endpoint is returning a 500 error because the `ULTRAMSG_API_TOKEN` environment variable is not configured in production.

## Required Environment Variables

The following environment variables must be set in your production hosting platform:

### 1. ULTRAMSG_API_TOKEN (REQUIRED)
- **Purpose**: Authentication token for UltraMsg WhatsApp API
- **Where to get it**: UltraMsg dashboard
- **Current value** (from SECURITY_FIXES.md): `2x4lm3o0xznfnl3h`
- **Note**: Consider rotating this token if it was previously exposed

### 2. ULTRAMSG_API_URL (Optional)
- **Purpose**: UltraMsg API endpoint URL
- **Default**: `https://api.ultramsg.com/instance148323/messages/chat`
- **Note**: Only set this if you need to use a different endpoint

### 3. GOOGLE_APPS_SCRIPT_URL (REQUIRED for form submissions)
- **Purpose**: Google Apps Script web app URL for form submissions
- **Where to get it**: Google Apps Script deployment URL

### 4. NEXT_PUBLIC_GA_ID (Optional)
- **Purpose**: Google Analytics ID
- **Current value**: `G-K6VG584275`

### 5. NEXT_PUBLIC_GA_ADS_ID (Optional)
- **Purpose**: Google Ads ID
- **Current value**: `AW-17718626787`

## How to Fix in Production

### If using Vercel:
1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `ULTRAMSG_API_TOKEN` = `2x4lm3o0xznfnl3h` (or your current token)
   - `ULTRAMSG_API_URL` = `https://api.ultramsg.com/instance148323/messages/chat` (optional)
   - `GOOGLE_APPS_SCRIPT_URL` = (your Google Apps Script URL)
   - `NEXT_PUBLIC_GA_ID` = `G-K6VG584275` (optional)
   - `NEXT_PUBLIC_GA_ADS_ID` = `AW-17718626787` (optional)
4. Select the appropriate environments (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your application

### If using other hosting platforms:
1. Navigate to your hosting platform's environment variables settings
2. Add all required variables listed above
3. Redeploy your application

## Verification

After setting the environment variables and redeploying:
1. Test the OTP sending functionality
2. Check the server logs to ensure no "ULTRAMSG_API_TOKEN is not configured" errors
3. Verify that OTP messages are being sent successfully

## Security Note

⚠️ **Important**: The token value shown in `SECURITY_FIXES.md` was previously exposed in code. Consider:
1. Rotating the token in UltraMsg dashboard
2. Using the new token value in production
3. Removing the token from any documentation files

