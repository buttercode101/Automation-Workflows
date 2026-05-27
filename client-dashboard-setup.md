# Client Dashboard Setup (Step-by-Step)

## Purpose
Create a simple KPI dashboard in the same spreadsheet as your `Leads` data.

## Prerequisites
- Google Sheet with a tab named `Leads`.
- Data imported from `lead-log-template.csv`.
- Editor access to the sheet.

## Steps
1. Open the Google Sheet.
2. Click `Extensions -> Apps Script`.
3. Delete starter code in editor.
4. Copy/paste everything from `google-apps-script-template.js`.
5. Click save.
6. In function dropdown, choose `bootstrapDashboard`.
7. Click `Run`.
8. Approve permissions when prompted:
   - choose your Google account,
   - click Advanced if warning appears,
   - allow script permissions.
9. Return to Sheet and refresh browser.
10. Confirm tab `Dashboard` now exists.

## Verify KPI cells
Check `Dashboard` has:
- New leads today
- Contact rate
- Hot lead rate
- Won rate
- Avg lead score

## If dashboard does not appear
1. Re-open Apps Script and run `bootstrapDashboard` again.
2. Confirm sheet tab is exactly named `Leads` (case-sensitive).
3. Check execution log for permission/runtime errors.
