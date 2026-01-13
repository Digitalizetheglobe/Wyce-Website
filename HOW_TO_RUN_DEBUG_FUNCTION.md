# 🔧 How to Run debugSheetAccess Function

## Step-by-Step Instructions

### Step 1: Open Google Apps Script Editor

1. Go to: https://script.google.com
2. Open your project ("Untitled project")
3. Make sure you're in the **Code** editor (click "Code" in left sidebar if needed)

### Step 2: Select the debugSheetAccess Function

1. Look at the **top toolbar** in the code editor
2. Find the **function dropdown** (it probably shows "doPost" right now)
3. **Click the dropdown** to see all available functions
4. **Select `debugSheetAccess`** from the list

### Step 3: Run the Function

1. After selecting `debugSheetAccess`, click the **"Run"** button (▶️) in the toolbar
   - OR press **Ctrl+R** (Windows) or **Cmd+R** (Mac)
2. If prompted to authorize, click **"Authorize access"** and follow the prompts
3. The function will run

### Step 4: View the Results

1. **Execution log panel** should appear at the bottom (or click "Execution log" button)
2. Look for the logs - you should see:
   ```
   === DEBUG SHEET ACCESS ===
   Sheet ID: 1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU
   ✅ Spreadsheet opened: [name]
   ✅ Spreadsheet ID: [id]
   Available sheets:
     - Sheet1 (ID: ...)
     - Prospect Clients (ID: ...)
     - site visit done (ID: ...)
   ✅ Sheet found: Sheet1
   ✅ Current last row: 151
   Attempting to append: [...]
   ✅ New last row: 152
   ✅ SUCCESS: Row was added!
   ✅ Verified saved name: DEBUG TEST
   ```

### Step 5: Check Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU/edit
2. Look at the **last row** - you should see:
   - Column A: Current date/time
   - Column B: **"DEBUG TEST"**
   - Column C: "debug@test.com"
   - Column D: "9999999999"
   - Column E: "This is a debug test"
   - Column F: FALSE

## What the Results Mean

### ✅ If You See "SUCCESS: Row was added!"
- The script **CAN** access and write to the sheet
- The issue is with how `doPost` is receiving/processing data
- Check the `doPost` execution logs for form submissions

### ❌ If You See "FAILED: Row was NOT added!"
- There's a permission or access issue
- Check the error message in logs
- Make sure the sheet is shared with your Google account

### ❌ If You See "ERROR: ..."
- Copy the exact error message
- Common errors:
  - "Spreadsheet not found" → Sheet ID is wrong
  - "Permission denied" → Sheet not shared or script not authorized
  - "Sheet 'Sheet1' not found" → Sheet name is different

## What to Share

After running `debugSheetAccess`, share:

1. **What do you see in the execution logs?**
   - Copy the entire log output
   - Especially look for "SUCCESS" or "FAILED" messages

2. **Does "DEBUG TEST" appear in your Google Sheet?**
   - Check the last row
   - What row number is it?

3. **Any error messages?**
   - Copy the exact error

## Visual Guide

```
Google Apps Script Editor
├── Top Toolbar
│   ├── Function Dropdown: [debugSheetAccess ▼] ← Select this
│   ├── Run Button: [▶️] ← Click this
│   └── Execution log: [📋] ← View results here
│
└── Execution Log Panel (Bottom)
    └── Shows: === DEBUG SHEET ACCESS ===
              ✅ Spreadsheet opened: ...
              ✅ Sheet found: Sheet1
              ✅ Current last row: 151
              ✅ New last row: 152
              ✅ SUCCESS: Row was added!
```

## Troubleshooting

### Issue: Function not in dropdown
**Fix**: Make sure you saved the script after I added the function. The function should be at the top of the file.

### Issue: "Authorization required"
**Fix**: Click "Authorize access" and allow the script to access your Google Sheets.

### Issue: "Execution log" not showing
**Fix**: Click the "Execution log" button in the toolbar, or go to **View** → **Execution log**.

## Next Steps

After running `debugSheetAccess`:

1. ✅ **Share the log output** - especially the SUCCESS/FAILED message
2. ✅ **Check your sheet** - does "DEBUG TEST" appear?
3. ✅ **If it works**: The issue is with `doPost` - check form submission logs
4. ✅ **If it fails**: Share the error message - we'll fix the permission issue

This will tell us if the script can access the sheet at all! 🔍

