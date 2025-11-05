# 📊 Form Data Flow - Where Your Data Goes

## Complete Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  1. USER FILLS FORM ON WEBSITE                              │
│     - Name: "John Doe"                                      │
│     - Email: "john@example.com"                             │
│     - Phone: "1234567890"                                   │
│     - Message: "I'm interested in your project"             │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│  2. FORM SUBMITS TO NEXT.JS API ROUTE                       │
│     Location: src/app/api/submit-lead/route.ts              │
│     URL: https://yourwebsite.com/api/submit-lead             │
│     Method: POST                                             │
│     Data: {name, email, phone, message}                     │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│  3. API ROUTE SENDS TO GOOGLE APPS SCRIPT                    │
│     Location: src/app/api/submit-lead/route.ts (line ~18)   │
│     URL: https://script.google.com/macros/s/.../exec        │
│     Method: POST                                             │
│     Tries: JSON → FormData → URL-encoded                     │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│  4. GOOGLE APPS SCRIPT PROCESSES DATA                        │
│     Location: FIXED_GOOGLE_APPS_SCRIPT.gs                   │
│     Function: doPost(e)                                      │
│     Receives: {name, email, phone, message}                 │
└─────────────────────────────────────────────────────────────┘
                        ↓
        ┌─────────────────┴─────────────────┐
        ↓                                   ↓
┌───────────────────────┐    ┌──────────────────────────────┐
│  5A. SAVED TO SHEET   │    │  5B. EMAIL SENT              │
│  Google Sheet:        │    │  To:                         │
│  - Sheet ID:          │    │  - digitalwyce@gmail.com     │
│    1fK1THMHp...       │    │  - anuj@wycecorp.com         │
│  - Sheet Name:        │    │  - rashmi@wycecorp.com       │
│    "Sheet1"           │    │  Subject: "New Lead..."      │
│  - Columns:           │    │  Body: Form details          │
│    A: Timestamp       │    │                              │
│    B: Name            │    │                              │
│    C: Email           │    │                              │
│    D: Phone           │    │                              │
│    E: Message         │    │                              │
└───────────────────────┘    └──────────────────────────────┘
```

## Detailed Step-by-Step Flow

### Step 1: User Submits Form
**Location:** Your website (Header Contact Modal, Contact Section, etc.)

**Files:**
- `src/components/Header.tsx` → Opens ContactModal
- `src/app/wyce-exclucity/ContactModal.tsx` → Form component
- `src/components/ContactSection.tsx` → Form component
- `src/app/contact/page.tsx` → Form component

**What happens:**
```javascript
const handleSubmit = async (e) => {
  const success = await submitLead({
    name: formData.firstName,  // or formData.fullName
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  });
  
  if (success) {
    setShowSuccessPopup(true); // Shows "✅ Message sent successfully!"
  }
};
```

---

### Step 2: Data Goes to Next.js API Route
**Location:** `src/app/api/submit-lead/route.ts`

**What happens:**
```typescript
// Receives: {name, email, phone, message}
// Validates the data
// Sends to Google Apps Script Web App URL
const response = await fetch(scriptUrl, {
  method: "POST",
  body: JSON.stringify({name, email, phone, message})
});
```

**Google Apps Script URL:**
```
https://script.google.com/macros/s/AKfycbzov0JFTSJe_1NUbCVWBaug12w1WKvAO2hjZbxXWFFuVJoBG1Tka6o00aQiE8KgqswMyw/exec
```

---

### Step 3: Google Apps Script Receives Data
**Location:** `FIXED_GOOGLE_APPS_SCRIPT.gs` → `doPost(e)` function

**What happens:**
```javascript
// Receives data from API route
// Parses JSON or FormData
// Extracts: name, email, phone, message
```

---

### Step 4A: Data Saved to Google Sheet
**Location:** Google Sheet with ID: `1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU`

**Sheet Name:** "Sheet1"

**What happens:**
```javascript
// Opens your Google Sheet
var spreadsheet = SpreadsheetApp.openById('1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU');
var sheet = spreadsheet.getSheetByName('Sheet1');

// Adds a new row:
sheet.appendRow([
  new Date(),        // Column A: Timestamp
  name,              // Column B: Name
  email,             // Column C: Email
  phone,             // Column D: Phone
  message            // Column E: Message
]);
```

**Result:** Your data appears in the Google Sheet in row 2, 3, 4, etc.

---

### Step 4B: Email Sent
**Location:** Google Apps Script → `MailApp.sendEmail()`

**What happens:**
```javascript
MailApp.sendEmail({
  to: "digitalwyce@gmail.com, anuj@wycecorp.com, rashmi@wycecorp.com",
  subject: "New Lead from Website",
  htmlBody: `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
  `
});
```

**Result:** All three email addresses receive the notification email.

---

## Where to Find Your Data

### 1. Google Sheet
- **URL:** https://docs.google.com/spreadsheets/d/1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU/edit
- **Sheet Name:** "Sheet1"
- **Columns:** Timestamp | Name | Email | Phone | Message
- **Rows:** Each form submission adds a new row

### 2. Email Inbox
- **digitalwyce@gmail.com**
- **anuj@wycecorp.com**
- **rashmi@wycecorp.com**

Check spam folder if not in inbox!

### 3. Google Apps Script Execution Logs
- **Location:** Google Apps Script → Executions
- **Shows:** Success/failure status, errors, logs

---

## File Locations Summary

| Step | File Location | Purpose |
|------|--------------|---------|
| Form Submission | `src/app/wyce-exclucity/ContactModal.tsx`<br>`src/components/ContactSection.tsx`<br>`src/app/contact/page.tsx` | User fills and submits form |
| Utility Function | `src/utils/submitLead.ts` | Sends data to API route |
| API Route | `src/app/api/submit-lead/route.ts` | Receives form data, sends to Google Apps Script |
| Google Apps Script | `FIXED_GOOGLE_APPS_SCRIPT.gs` | Processes data, saves to sheet, sends emails |
| Google Sheet | Sheet ID: `1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU` | Stores all form submissions |
| Email | Gmail inboxes of 3 recipients | Receives notifications |

---

## Quick Access Links

- **Your Google Sheet:** https://docs.google.com/spreadsheets/d/1fK1THMHpGLpETVSa5Uh3IqBAL-4eOfmWmSqhSBByeSU/edit
- **Google Apps Script:** https://script.google.com
- **Execution Logs:** Google Apps Script → Executions (left sidebar)

---

## Troubleshooting

**If data doesn't appear in sheet:**
1. Check Google Apps Script execution logs
2. Verify Sheet ID is correct
3. Verify sheet name is "Sheet1"

**If emails don't arrive:**
1. Check spam folder
2. Check Google Apps Script execution logs
3. Verify email addresses are correct

**If form shows success but nothing happens:**
1. Check browser console (F12) for errors
2. Check Google Apps Script execution logs
3. Make sure you redeployed the Web App after updating code

