# 🔧 Add debugSheetAccess Function to Your Script

## The Problem

The `debugSheetAccess` function is not showing in the dropdown because it's not in your Google Apps Script yet.

## Solution: Update Your Script

### Step 1: Copy the Updated Code

1. Open `FIXED_GOOGLE_APPS_SCRIPT.gs` in this project
2. **Select ALL** the code (Ctrl+A or Cmd+A)
3. **Copy** it (Ctrl+C or Cmd+C)

### Step 2: Paste into Google Apps Script

1. Go to: https://script.google.com
2. Open your project
3. In the code editor, **Select ALL** existing code (Ctrl+A)
4. **Delete** it (Delete key)
5. **Paste** the new code (Ctrl+V)
6. **Save** (Ctrl+S or File → Save)

### Step 3: Verify the Function is There

1. Look at the **function dropdown** in the toolbar
2. You should now see:
   - `doPost`
   - `testScript`
   - **`debugSheetAccess`** ← This should appear now!

### Step 4: Run debugSheetAccess

1. Select `debugSheetAccess` from the dropdown
2. Click **Run** (▶️)
3. Check execution logs
4. Check your Google Sheet

## Quick Alternative: Add Just the Function

If you don't want to replace all code, you can add just the function:

1. In Google Apps Script editor, scroll to the bottom of your code
2. Add this function:

```javascript
/**
 * DEBUG FUNCTION - Test sheet access directly
 * Run this to verify the script can access and write to the sheet
 */
function debugSheetAccess() {
  try {
    Logger.log('=== DEBUG SHEET ACCESS ===');
    
    var SHEET_ID = '1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU';
    Logger.log('Sheet ID: ' + SHEET_ID);
    
    // Try to open spreadsheet
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    Logger.log('✅ Spreadsheet opened: ' + spreadsheet.getName());
    Logger.log('✅ Spreadsheet ID: ' + spreadsheet.getId());
    
    // List all sheets
    var allSheets = spreadsheet.getSheets();
    Logger.log('Available sheets:');
    for (var i = 0; i < allSheets.length; i++) {
      Logger.log('  - ' + allSheets[i].getName() + ' (ID: ' + allSheets[i].getSheetId() + ')');
    }
    
    // Try to get Sheet1
    var sheet = spreadsheet.getSheetByName('Sheet1');
    if (!sheet) {
      Logger.log('❌ Sheet "Sheet1" not found!');
      return;
    }
    
    Logger.log('✅ Sheet found: ' + sheet.getName());
    Logger.log('✅ Sheet ID: ' + sheet.getSheetId());
    
    // Check current last row
    var lastRow = sheet.getLastRow();
    Logger.log('✅ Current last row: ' + lastRow);
    
    // Try to append a test row
    var testData = [
      new Date(),
      'DEBUG TEST',
      'debug@test.com',
      '9999999999',
      'This is a debug test',
      false
    ];
    
    Logger.log('Attempting to append: ' + JSON.stringify(testData));
    sheet.appendRow(testData);
    
    // Verify it was added
    var newLastRow = sheet.getLastRow();
    Logger.log('✅ New last row: ' + newLastRow);
    
    if (newLastRow > lastRow) {
      Logger.log('✅ SUCCESS: Row was added!');
      var savedName = sheet.getRange(newLastRow, 2).getValue();
      Logger.log('✅ Verified saved name: ' + savedName);
    } else {
      Logger.log('❌ FAILED: Row was NOT added!');
    }
    
  } catch (error) {
    Logger.log('❌ ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
  }
}
```

3. **Save** the script (Ctrl+S)
4. The function should now appear in the dropdown

## After Adding the Function

1. ✅ **Save the script** (important!)
2. ✅ **Select `debugSheetAccess`** from dropdown
3. ✅ **Click Run** (▶️)
4. ✅ **Check execution logs**
5. ✅ **Check your Google Sheet** - should see "DEBUG TEST"

## What This Will Tell Us

- ✅ **If it works**: Script can access sheet, issue is with form data processing
- ❌ **If it fails**: Permission or access issue - we'll see the exact error

Add the function and run it! 🔍

