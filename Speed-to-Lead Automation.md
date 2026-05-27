I’d start with the **Speed-to-Lead Automation** first.

Why:

* Fastest visible ROI for South African SMEs.
* Easiest to demo and sell.
* Lowest operational complexity.
* Clients immediately understand “lead came in → instant WhatsApp reply → more bookings”.
* Reusable foundation for the other 4 automations.

Best first niche in SA:

* Solar installers
* Security companies
* Gyms
* Real estate agencies
* Car dealerships
* Coaches/consultants
* Cleaning services
* Marketing agencies

## Recommended V1 Stack

* **Google Sheets** → master CRM
* **Make.com** → orchestration
* **WhatsApp Business Cloud API** → messaging
* **Google Calendar** → booking
* **Google Forms/Facebook Lead Ads** → lead intake
* **OpenAI** → optional personalization only

Avoid:

* Airtable initially
* Heavy AI classification
* Complex CRMs
* Multi-scenario spaghetti

Keep it:

* One Sheet
* One main scenario
* One follow-up scenario

---

# BUILD ORDER (IMPORTANT)

## Phase 1 — Working MVP (2–3 hours)

Build ONLY:

1. Capture lead
2. Save to Sheets
3. Send instant WhatsApp reply
4. Notify owner
5. Update status

No AI yet.

This alone is sellable.

---

# SPEED-TO-LEAD — PRODUCTION STRUCTURE

## Recommended Scenario Naming

### Scenario 1

`[Client] - Incoming Leads Processor`

### Scenario 2

`[Client] - Follow-up Engine`

---

# GOOGLE SHEETS STRUCTURE (Optimized)

## Sheet: Leads

Add these columns EXACTLY:

| Column            | Purpose           |
| ----------------- | ----------------- |
| Lead ID           | Unique ID         |
| Timestamp         | Created date      |
| Source            | FB/WA/Web         |
| Full Name         | Lead name         |
| Phone             | Standardized      |
| Email             | Optional          |
| Service Interest  | What they want    |
| Message           | Original inquiry  |
| Budget            | Estimated         |
| Timeline          | Urgency           |
| Lead Score        | 1–10              |
| Hot Lead          | YES/NO            |
| Status            | New/Contacted/etc |
| Assigned To       | Owner             |
| Last Contacted    | Timestamp         |
| Next Follow-up    | Timestamp         |
| Booking Link Sent | YES/NO            |
| Outcome           | Won/Lost          |
| Notes             | Internal          |

---

# MAKE.COM FLOW (DETAILED)

# SCENARIO 1 — Incoming Leads Processor

## MODULE 1 — Trigger

Choose ONE initially:

### Best Starter:

`Google Forms → Watch Responses`

Why:

* Stable
* Free
* Easy testing
* No Meta approval headaches

Later add:

* Facebook Lead Ads
* WhatsApp inbound
* Website webhook

---

# MODULE 2 — Generate Lead ID

Use:
`Tools → Set Variable`

Format:

```text
LD-{{formatDate(now; "YYMMDD")}}-{{random}}
```

Example:

```text
LD-260527-4832
```

---

# MODULE 3 — Normalize Phone Number

South African formatting matters.

Use:
`Text Parser / Replace`

Convert:

```text
0821234567
```

To:

```text
27821234567
```

Rule:

* Remove spaces
* Remove "+"
* Replace leading 0 with 27

This prevents WhatsApp failures.

---

# MODULE 4 — Google Sheets Add Row

Map all fields.

Default values:

| Field             | Value      |
| ----------------- | ---------- |
| Status            | NEW        |
| Lead Score        | 3          |
| Hot Lead          | NO         |
| Booking Link Sent | YES        |
| Assigned To       | Owner Name |

---

# MODULE 5 — Lead Qualification Router

NO AI initially.

Use keyword filters.

## HOT LEAD FILTER

Keywords:

* urgent
* today
* asap
* quote
* pricing
* ready
* install
* book now

If matched:

* Score = 8–10
* Hot Lead = YES

Else:

* Score = 3–5

This is enough initially.

---

# MODULE 6 — Instant WhatsApp Reply

Use:
`WhatsApp Business Cloud → Send Message`

## Best-performing SA structure:

### Message Formula:

1. Acknowledge
2. Human tone
3. Set expectation
4. Ask ONE question
5. Booking CTA

Example:

Hi {{firstName}} 👋

Thanks for reaching out to {{businessName}}.

We've received your inquiry about {{service}} and one of our team members will assist shortly.

Quick question:
What timeline are you working with?

You can also book a quick call here:
{{bookingLink}}

---

# MODULE 7 — Owner Alert

Send WhatsApp to business owner.

Format:

🔥 NEW HOT LEAD

Name: {{name}}
Phone: {{phone}}
Service: {{service}}
Source: {{source}}

Message:
{{message}}

Lead Score: {{score}}/10

This is where owners see value instantly.

---

# MODULE 8 — Update Google Sheet

Update:

* Lead Score
* Status = CONTACTED
* Last Contacted = now()

---

# SCENARIO 2 — Follow-up Engine

Run:

* Daily at 9AM
* Every weekday only

---

# MODULE FLOW

## 1. Scheduler

Daily.

---

## 2. Google Sheets → Search Rows

Find:

```text
Status != WON
AND
Next Follow-up <= TODAY
```

---

## 3. Iterator

Process each lead.

---

## 4. Send Follow-up WhatsApp

Start rule-based.

### Day 1:

“Just checking if you saw our previous message…”

### Day 3:

“Would you still like a quote?”

### Day 7:

“We’re closing your inquiry soon…”

---

## 5. Update Sheet

Increment:

* Follow-up count
* Last contacted
* Next follow-up

---

# WHERE AI SHOULD ACTUALLY BE USED

Most people overuse AI.

Use AI ONLY for:

## Good AI Use Cases

* Personalizing replies
* Summarizing conversations
* Rewriting awkward messages
* Lead sentiment analysis
* Daily summaries

## DO NOT USE AI FOR

* Routing
* Basic scoring
* Status logic
* Timing
* CRM operations

Rules are cheaper and more reliable.

---

# COST-EFFICIENT OPENAI IMPLEMENTATION

## Recommended Model

Use:

* GPT-4.1-mini or equivalent low-cost model

Avoid:

* Large reasoning models

---

# SAFEST AI PROMPT

Use structured prompts only.

Example:

```text
You are a receptionist for a South African solar company.

Write a WhatsApp reply under 80 words.

Customer inquiry:
{{message}}

Goals:
- Friendly
- Professional
- Ask ONE qualifying question
- Encourage booking
```

---

# CLIENT PRICING MODEL (SA)

## Setup Fee

R3k–R15k

Depends on:

* Lead volume
* Channels
* Complexity

## Monthly Retainer

R1k–R5k/month

For:

* Monitoring
* Updating flows
* Support
* Optimization

---

# BIGGEST MISTAKES TO AVOID

## 1. Too many scenarios

Keep under 3 initially.

## 2. Too much AI

Rules first.

## 3. No logging

Everything must hit Sheets.

## 4. No error handling

Always add fallback notifications.

## 5. Using client WhatsApp manually

Use proper Cloud API.

---

# YOUR NEXT STEP

Build this exact sequence:

```text
Google Form
→ Make Trigger
→ Google Sheets
→ WhatsApp Reply
→ Owner Notification
→ Sheet Update
```

Once stable:

* Add AI personalization
* Add Facebook Lead Ads
* Add Calendar booking
* Add nurture sequences
* Add reporting dashboards

That becomes a reusable agency system you can deploy repeatedly across South African SMEs.
