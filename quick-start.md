# Speed-to-Lead Quick Start (Beginner Step-by-Step)

This guide assumes you are completely new to Google Forms, Google Sheets, and Make.

## Goal
When someone submits your form, they should:
1) be logged in Google Sheets,
2) get an instant WhatsApp message,
3) trigger an owner alert,
4) enter an automatic follow-up sequence.

## Before you start (accounts you need)
1. Google account (Gmail).
2. Make.com account (free to start).
3. Meta developer account with WhatsApp Cloud API access.

---

## Step 1 — Create your lead tracking sheet (Google Sheets)
1. Open https://sheets.new while logged into Google.
2. Rename the file to `Leads CRM - <Business Name>`.
3. Rename the first tab to `Leads`.
4. In top menu, click **File -> Import**.
5. Upload `lead-log-template.csv` from this folder.
6. Choose **Replace current sheet**.
7. Confirm you now see header columns like `Lead ID`, `Phone`, `Status`, `Next Follow-up`.

---

## Step 2 — Create your lead form (Google Forms)
1. Open https://forms.new.
2. Name form `New Lead Intake`.
3. Add these questions exactly:
   - Full Name (Short answer, Required)
   - Phone (Short answer, Required)
   - Email (Short answer, Optional)
   - Service Interest (Multiple choice or dropdown, Required)
   - Message / Requirements (Paragraph, Required)
   - Budget (Short answer, Optional)
   - Timeline (Multiple choice, Optional)
4. Click **Responses** tab.
5. Click the green **Link to Sheets** icon.
6. Select **Existing spreadsheet** and choose your `Leads CRM - <Business Name>` file.

---

## Step 3 — Fill your business values once
1. Open `client-onboarding-inputs.md`.
2. Fill every blank field.
3. Save the file.

---

## Step 4 — Connect Make.com
1. Log in to Make.
2. Click **Create a new scenario**.
3. Add first module: search `Google Forms` -> `Watch Responses`.
4. Connect your Google account.
5. Select form: `New Lead Intake`.
6. Add Google Sheets connection when prompted.
7. Add WhatsApp Cloud API connection using values from `client-onboarding-inputs.md`.
8. Keep this tab open.

Now follow `make-module-config-sheet.md` line by line.

---

## Step 5 — Import scenario template scaffold
1. In Make, open scenario menu (three dots).
2. Choose import option for blueprint/template (name differs by UI version).
3. Upload `make-import-template.json`.
4. If import fails, build manually using `make-scenario-blueprint.md` and `make-module-config-sheet.md`.

---

## Step 6 — Add dashboard (optional but recommended)
1. Open your Google Sheet.
2. Click **Extensions -> Apps Script**.
3. Paste code from `google-apps-script-template.js`.
4. Click Run on `bootstrapDashboard`.
5. Accept permissions.
6. Verify a new tab named `Dashboard` appears.

---

## Step 7 — Test everything
Follow `day-1-execution-script.md`, then `go-live-checklist.md`.

If all checks pass, turn scenarios ON in Make.
