---
title: Developer feedback
---

# Developer feedback

Use **Send Feedback** inside the protected Wamule Operations Platform to report a Bug, Question, Feature Request, Data Issue, or Other issue. A good report gives the developer enough safe, reproducible information to understand what happened without needing access to customer messages or sensitive records.

The current page address may be captured automatically. Feedback is saved and may queue a notification for manual processing in the Email Center. It is not an automatic support inbox and does not guarantee an immediate response.

## Choosing the feedback type

| Type | Use it when | Example |
| --- | --- | --- |
| Bug | The system behaves differently from the expected current feature | Save button shows success but the fictional follow-up remains unchanged. |
| Question | You need clarification about how the current workflow is intended to work | Should a released reservation return the lot to Available automatically? |
| Feature Request | You want a new capability or improvement | Add a filter for reservations expiring within three days. |
| Data Issue | A record, total, link, or relationship appears incorrect | Payment appears under the wrong fictional contract. |
| Other | The issue does not fit the categories above | Documentation wording or training-media correction. |

## Setting priority

Use priority based on business impact:

- **Urgent:** security exposure, inability to access critical work, serious financial risk, widespread data corruption, or production outage.
- **High:** important workflow blocked for several users or a time-sensitive customer/financial process.
- **Normal:** defect or question with a workaround and limited immediate impact.
- **Low:** minor usability, wording, or future improvement.

Do not mark every issue Urgent. Accurate priority helps genuine emergencies receive attention.

## Information to include

A reproducible report should include:

1. **Page and feature** — where the issue occurred.
2. **Record type** — lead, lot, application, customer, contract, payment, etc.
3. **Expected result** — what should have happened.
4. **Actual result** — what happened instead.
5. **Steps** — exact sequence that produced it.
6. **Time** — approximate date/time and timezone.
7. **User role** — Super Admin, Admin, Staff, or Read Only.
8. **Scope** — one record, several records, one user, or everyone.
9. **Workaround** — whether work can continue safely.
10. **Safe evidence** — redacted screenshot or fictional reproduction.

## Safe reproduction

Whenever possible, reproduce the behavior using Training Data before submitting customer information. A safe report might say:

> On the Leads page as Training Staff, I opened fictional lead Nadia Training, changed the follow-up due date from 15 July to 16 July, and clicked Save. A success message appeared, but after refresh the old date returned. Expected the new date to persist. Reproduced twice at approximately 10:20 a.m. No customer records affected. Workaround: manager can update the task from the task list.

## Reporting a data issue

For a suspected data issue:

- do not perform repeated edits trying to fix it;
- preserve the current state;
- note the record's internal context without publishing sensitive IDs;
- review related records and Audit Trail;
- explain the verified mismatch; and
- state whether customer, financial, contract, or lot work should pause.

## Security or privacy issue

For unauthorized access, exposed credentials, real customer data visible to the wrong user, or suspicious activity:

- stop sharing screenshots publicly;
- do not paste secrets into feedback;
- notify the designated security/support contact immediately;
- preserve safe evidence; and
- follow the emergency escalation process.

## After submission

- Record the feedback reference if one is provided.
- Continue only with a safe workaround.
- Avoid submitting duplicate reports unless new information exists.
- Respond to requests for clarification.
- Test the approved fix with fictional data.
- Update this documentation if the workflow changed.

## Common mistakes

- Writing only “not working.”
- Including real customer names or payment proof.
- Selecting Urgent for a cosmetic issue.
- Reporting expected behavior based on an unapproved assumption.
- Submitting several duplicates from different staff.
- Editing the affected record repeatedly after reporting.
- Treating feedback submission as confirmation that the issue is fixed.

## Suggested training media

**Screenshot space:** Add a complete Send Feedback form using a fictional bug. Label type, priority, title, expected result, actual result, reproduction steps, page URL, and safe screenshot field.

**Screenshot space:** Add a weak-versus-strong report comparison. Redact all identifiers and use only Training Data.

**Diagram space:** Add a support flow: Identify issue → Protect data → Reproduce safely → Submit complete feedback → Triage → Clarify → Fix/test → Document/release.

**Video space:** Record a 5-minute walkthrough submitting one fictional Bug and one Question, explaining priority and how to avoid exposing customer information.
