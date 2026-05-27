# Speed-to-Lead Quick Start (Plug & Play)

## 1) What you do once (10-20 min)
1. Create Google Sheet from `lead-log-template.csv` (import file).
2. Connect Google + WhatsApp Cloud API in Make.
3. Fill values in `client-onboarding-inputs.md`.
4. Import `make-import-template.json` into Make and map credentials.
5. Run `dashboard-bootstrap.js` once (Apps Script) to create dashboard tabs.

## 2) What runs automatically
- New lead capture -> score -> WhatsApp reply -> owner alert -> sheet update.
- Daily weekday follow-up cadence (D1, D3, D7).
- Dashboard refresh and KPI rollups.

## 3) Human-only items (cannot be automated by Codex)
- Meta/WhatsApp account verification and token creation.
- Final approval of message wording.
- Booking link + owner number.

## 4) Go-live order
1. `client-onboarding-inputs.md`
2. `make-module-config-sheet.md`
3. Import `make-import-template.json`
4. Deploy `google-apps-script-template.js`
5. Execute `day-1-execution-script.md`
6. Validate with `go-live-checklist.md`
