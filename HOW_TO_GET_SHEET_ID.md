# How to Get Your Google Sheet ID

## Step 1: Open Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Open your "leads" sheet

## Step 2: Look at the URL

The URL will look like this:
```
https://docs.google.com/spreadsheets/d/1abc123xyz456/edit#gid=0
```

## Step 3: Find the Sheet ID

The Sheet ID is the long string between `/d/` and `/edit`:

```
https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
```

**Example:**
- If your URL is: `https://docs.google.com/spreadsheets/d/1YGHPqg-zEl576wKHu3HcECSsHTpPK6psWeQWXUb1Z4oy9fQ9TK-XdhTc/edit`
- Then your Sheet ID is: `1YGHPqg-zEl576wKHu3HcECSsHTpPK6psWeQWXUb1Z4oy9fQ9TK-XdhTc`

## Step 4: Replace in Script

1. Open `FIXED_GOOGLE_APPS_SCRIPT.gs`
2. Find this line (around line 60):
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID'; // ⚠️ REPLACE THIS
   ```
3. Replace `YOUR_SHEET_ID` with your actual Sheet ID:
   ```javascript
   const SHEET_ID = '1YGHPqg-zEl576wKHu3HcECSsHTpPK6psWeQWXUb1Z4oy9fQ9TK-XdhTc';
   ```
4. Save the script
5. Run `testScript` again to test

## Important Notes

- The Sheet ID is case-sensitive
- Make sure there are no extra spaces
- The Sheet ID is different from the Sheet name
- Make sure your Google account has access to the Sheet

