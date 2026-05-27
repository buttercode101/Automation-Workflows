# Make Module Configuration Sheet (Click-by-Click)

Use this after opening a scenario in Make. Do not skip steps.

## Scenario A: Incoming Leads Processor

## Module A1 — Google Forms: Watch Responses
1. Click `+` and add module `Google Forms`.
2. Choose `Watch Responses`.
3. Create/select Google connection.
4. Choose form: `New Lead Intake`.
5. Set limit to 1 for initial testing.

## Module A2 — Tools: Set variable (Lead ID)
1. Add module `Tools` -> `Set variable`.
2. Variable name: `lead_id`.
3. Value:
`LD-{{formatDate(now; "YYMMDD")}}-{{random}}`

## Module A3 — Tools: Set variable (Clean phone)
1. Add module `Tools` -> `Set variable`.
2. Variable name: `phone_clean`.
3. Build expression logic:
   - remove spaces,
   - remove plus sign,
   - remove hyphens,
   - if starts with `0`, replace first `0` with `27`.

## Module A4 — Google Sheets: Add a Row
1. Add module `Google Sheets` -> `Add a Row`.
2. Select spreadsheet `Leads CRM - <Business Name>`.
3. Select sheet `Leads`.
4. Map fields:
   - Lead ID = `lead_id`
   - Timestamp = form response timestamp
   - Source = `DEFAULT_SOURCE` from onboarding file
   - Full Name = form full name
   - Phone = `phone_clean`
   - Email = form email
   - Service Interest = form service
   - Message = form message
   - Budget = form budget
   - Timeline = form timeline
   - Lead Score = `3`
   - Hot Lead = `NO`
   - Status = `NEW`
   - Assigned To = `OWNER_NAME`
   - Booking Link Sent = `YES`

## Module A5 — Router (Hot vs Standard)
1. Add `Router` module.
2. Route 1 name: `HOT`.
3. Route 1 filter: message contains any keyword
   `urgent|today|asap|quote|pricing|ready|install|book now`
4. Route 2 name: `STANDARD` (fallback).

## Module A6 — WhatsApp: Send message to lead
1. Add WhatsApp Cloud API send-message module on each route.
2. Recipient = `phone_clean`.
3. Body text = your approved message template.
4. Keep one short qualifying question + booking link.

## Module A7 — WhatsApp: Send owner alert
1. Add second WhatsApp module on each route.
2. Recipient = `OWNER_WHATSAPP_E164`.
3. Message includes:
   - Name
   - Phone
   - Service
   - Message
   - Score

## Module A8 — Google Sheets: Update Row
1. Add `Update a Row`.
2. Match the row added in A4.
3. Set:
   - Lead Score = 9 for HOT, 4 for STANDARD
   - Hot Lead = YES/NO
   - Status = CONTACTED
   - Last Contacted = now
   - Next Follow-up = now + 1 day

## Error handling (required)
1. On each WhatsApp module, add error handler route.
2. If send fails:
   - update `Error Flag = YES`
   - set `Error Message` to failure text
   - send fallback owner error alert

---

## Scenario B: Follow-up Engine

## Module B1 — Scheduler
1. New scenario -> Scheduler.
2. Set weekdays only.
3. Set time 09:00.
4. Set timezone to client timezone.

## Module B2 — Google Sheets Search Rows
1. Add `Search Rows` on `Leads` sheet.
2. Filter:
   - Status is not WON
   - Status is not LOST
   - Next Follow-up is today or earlier

## Module B3 — Iterator
1. Add iterator to process each returned row.

## Module B4 — WhatsApp follow-up message
1. Choose text by follow-up count:
   - 0 => Day 1 template
   - 1 => Day 3 template
   - 2 => Day 7 template
2. Send to lead phone.

## Module B5 — Update row
1. Set Last Contacted = now.
2. Increase Follow-up Count by 1.
3. Set Last Follow-up Template = D1/D3/D7.
4. Set Next Follow-up:
   - after D1: +2 days
   - after D3: +4 days
   - after D7: blank or set Status=COLD.
