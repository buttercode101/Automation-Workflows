# Go-Live Checklist (Detailed)

Complete in order. Do not skip unchecked items.

## Section A — Account and credential readiness
- [ ] Google account connected in Make.
- [ ] Google Form is receiving responses.
- [ ] Google Sheet has `Leads` tab and expected headers.
- [ ] Meta access token is valid and not expired.
- [ ] Phone Number ID is correct.
- [ ] Owner WhatsApp number is in E.164 (e.g., `27821234567`).
- [ ] Booking link opens correctly.

## Section B — Scenario A functional checks
- [ ] Form submission triggers Make scenario.
- [ ] Lead ID is generated.
- [ ] Phone normalization works.
- [ ] Row inserted in `Leads`.
- [ ] HOT/standard routing behaves correctly.
- [ ] Lead receives instant WhatsApp reply.
- [ ] Owner receives notification.
- [ ] Row updates to `CONTACTED`.
- [ ] `Next Follow-up` populated.

## Section C — Scenario B functional checks
- [ ] Scheduler set to weekdays at 09:00 in correct timezone.
- [ ] Due leads are detected (`Next Follow-up <= today`).
- [ ] D1/D3/D7 message logic works.
- [ ] Follow-up count increments.
- [ ] Won/Lost leads are excluded.

## Section D — Error and rollback readiness
- [ ] Error handler routes are attached to WhatsApp modules.
- [ ] `Error Flag` and `Error Message` are written on failures.
- [ ] Owner receives error alert when send fails.
- [ ] Team knows how to pause both scenarios immediately.

## Section E — Go-live approval
- [ ] 3/3 test leads passed end-to-end.
- [ ] Owner approved message tone and content.
- [ ] Both scenarios switched ON.
