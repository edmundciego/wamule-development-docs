---
title: Records, statuses, dates, and activity history
---

# Records, statuses, dates, and activity history

The Wamule Operations Platform is built around connected business records. A record is the system's documented version of a real business item, such as a buyer inquiry, lot, application, customer, contract, payment, reservation, request, or task.

The quality of the platform depends on the quality of these records. Staff should update the authoritative record instead of relying on memory, a private message, or a separate notebook.

## What makes a record trustworthy

A trustworthy record is:

- linked to the correct buyer, lot, customer, or contract;
- in a status that describes what has actually happened;
- owned by the person responsible for the next step;
- supported by dated activities or notes;
- complete enough for another authorized staff member to understand; and
- corrected through a process that preserves accountability.

## Statuses describe the present state

A status should answer: **What is true now?** It should not describe what staff hope will happen.

Examples:

- A lead should not be moved to a later stage merely because the buyer sounded interested.
- A site visit should not be marked completed until the visit has occurred.
- A reservation should not be treated as active after it has expired or been released.
- An application should not be approved until an authorized human reviewer has made and documented the decision.
- A payment should not be treated as reconciled because proof was promised or uploaded without verification.

When unsure, leave the status unchanged and record the missing information or escalation.

## Dates create operational commitments

Different dates serve different purposes:

| Date type | What it means | Staff responsibility |
| --- | --- | --- |
| Created date | When the system record was first created | Use it to understand age, not as proof that work began immediately. |
| Due date | When an action should be completed | Assign an owner and update or reschedule it when circumstances change. |
| Follow-up date | When staff should contact or review the buyer again | Record the outcome and set the next action. |
| Visit date | When a site visit is expected or occurred | Confirm outcome; do not assume a reservation followed. |
| Reservation expiry | When the operational hold should be reviewed or released | Escalate before expiry when buyer action or proof is still pending. |
| Payment date | When the payment is represented as received | Verify it against the appropriate evidence and business procedure. |
| Contract date | The date recorded for the agreement or its status change | Do not alter without authorized legal/business instruction. |

Overdue does not always mean the work was ignored; it means the system needs an updated outcome, new date, owner, or explanation.

## Activities explain what happened

Activities should record meaningful business events, not every thought or informal message. A useful activity answers:

- What happened?
- When did it happen?
- Who was involved?
- What was the outcome?
- What happens next?

A weak note says:

> Called buyer.

A useful note says:

> Called buyer on 14 July. Buyer confirmed continued interest in Lot 12 and requested a Saturday site visit. Visit request sent to the assigned staff member. Follow-up scheduled for 16 July to confirm time.

Do not include insulting, speculative, or unnecessary personal information. Notes may become part of an internal investigation or customer-history review.

## Record ownership and next action

For active operational work, the owner and next action should be clear. When work changes hands:

1. Record the current outcome.
2. Assign the new owner where supported.
3. Add the next action and due date.
4. Explain why the responsibility changed.
5. Confirm the new owner can access the record.

Do not remove yourself from a record before another person has accepted responsibility when the process requires continuous follow-up.

## Corrections versus deletion

Most mistakes should be corrected through an accountable update, not by deleting history. Examples include:

- correcting a spelling error in a buyer's name;
- changing an incorrect lead stage after reviewing the activity history;
- updating a missed follow-up date with an explanation;
- voiding or correcting a financial record through the approved process; or
- releasing an expired reservation while preserving the reservation history.

Restricted purge or data-management tools are not normal correction methods. They should be used only under an approved procedure for test data or clearly authorized records.

## Audit Trail and accountability

The Audit Trail records supported system actions such as creation, update, status change, upload, generation, review, cancellation, release, voiding, or settings changes. It helps answer who changed a supported record and when.

The Audit Trail does not remove the need for a useful activity note. A technical event may show that a status changed, while the activity note explains the business reason.

## Example: correcting an inaccurate lead stage

A lead is marked as **Reserved**, but the activity history shows only a completed site visit.

1. Open the lead and confirm the latest activity.
2. Check the preferred lot and reservation records.
3. Confirm that no active reservation exists.
4. Change the lead to the truthful stage allowed by the workflow.
5. Add an activity explaining the correction and the source of verification.
6. Set the next action for the buyer.
7. Review the Dashboard or report to confirm the item moved to the expected queue.

## Common mistakes

- Updating a status without adding the reason.
- Entering a promised date as though the event already happened.
- Creating a second buyer record instead of checking possible duplicates.
- Recording a payment only in a lead note.
- Reassigning work without telling the new owner.
- Deleting or overwriting evidence that should remain part of the history.

Read [Feature status and boundaries](../reference/feature-status) before assuming a workflow is automated.

## Suggested training media

**Screenshot space:** Add an annotated lead-detail screenshot showing the current status, owner, next action, due date, latest activity, and link to related records. Number the fields in the order staff should review them.

**Screenshot space:** Add a before-and-after example of an inaccurate status correction using fictional data. Show the original activity history, corrected status, explanation note, and resulting queue placement.

**Diagram space:** Add a record-quality cycle: Verify identity → Read history → Update truthful status → Record reason → Set owner and due date → Confirm result.

**Video space:** Record a 5-minute walkthrough demonstrating how to investigate and correct one fictional lead-stage error without deleting history.
