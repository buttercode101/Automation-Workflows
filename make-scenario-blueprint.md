# Make Scenario Blueprint (Functional Design)

## Scenario A: Incoming Leads Processor
1. Trigger: Google Forms - Watch responses
2. Set lead_id: `LD-YYMMDD-random`
3. Normalize phone to E.164 ZA
4. Add row to Leads sheet
5. Router: HOT vs STANDARD by keyword match
6. WhatsApp message to lead
7. WhatsApp alert to owner
8. Update row: score/status/last_contacted/next_followup
9. Error route: notify owner + write error columns

## Scenario B: Follow-up Engine
1. Scheduler: weekdays at 09:00 (local TZ)
2. Search due leads (not WON/LOST, next_followup <= today)
3. Iterator
4. Choose message by follow-up_count/day bucket
5. Send WhatsApp follow-up
6. Update count + next_followup + template code

## Data contract
Required columns are defined in `lead-log-template.csv`.
