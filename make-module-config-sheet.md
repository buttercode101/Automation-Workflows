# Make Module Configuration Sheet

## Connections
- Google Forms: connected
- Google Sheets: connected
- WhatsApp Cloud API: connected

## Module Config (Scenario A)
- M1 Trigger: form `New Lead Intake`
- M2 lead_id expression: `LD-{{formatDate(now; "YYMMDD")}}-{{random}}`
- M3 phone_clean logic:
  - remove spaces, plus, hyphens
  - replace leading `0` with `27`
- M4 Add Row: map all fields from form + defaults
- M5 HOT filter keywords: urgent|today|asap|quote|pricing|ready|install|book now
- M6 Lead message template: see `make-import-template.json` message body
- M7 Owner alert template: HOT/STANDARD variants
- M8 Update row: status=CONTACTED; last_contacted=now; next_followup=+1 day

## Module Config (Scenario B)
- Schedule: Mon-Fri, 09:00
- Query logic: Status not WON/LOST and Next Follow-up due
- Follow-up ladder:
  - count 0 -> Day1; next +2d
  - count 1 -> Day3; next +4d
  - count 2 -> Day7; mark COLD/blank next
