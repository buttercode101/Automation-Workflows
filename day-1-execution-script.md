# Day 1 Execution Script (Beginner)

Use this as your exact launch-day run order.

## Hour 1 — Build data foundation
1. Import `lead-log-template.csv` into Google Sheet.
2. Confirm tab name is `Leads`.
3. Open `client-onboarding-inputs.md` and fill all required values.

## Hour 2 — Build intake form
1. Create Google Form `New Lead Intake`.
2. Add required questions from `quick-start.md`.
3. Send one test response manually.
4. Confirm response appears in linked responses sheet.

## Hour 3 — Build Scenario A in Make
1. Create scenario.
2. Add modules A1-A8 from `make-module-config-sheet.md`.
3. Add error handler branches.
4. Click `Run once`.
5. Submit a test form lead and observe each module pass.

## Hour 4 — Build Scenario B in Make
1. Create follow-up scenario.
2. Add modules B1-B5 from config sheet.
3. Set schedule for weekdays 09:00 local timezone.
4. Run once with sample due leads.

## Hour 5 — Dashboard and formulas
1. Open Apps Script and paste `google-apps-script-template.js`.
2. Run `bootstrapDashboard()`.
3. Verify Dashboard tab exists.
4. Validate formulas from `google-sheets-formulas.md`.

## Hour 6 — Final validation
1. Run through `go-live-checklist.md`.
2. Test 3 leads:
   - HOT (urgent keyword)
   - STANDARD
   - Invalid phone (must fail gracefully + log error)
3. Turn both scenarios ON.
