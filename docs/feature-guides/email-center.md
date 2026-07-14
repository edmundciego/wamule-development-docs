---
title: Email Center
---

# Email Center

The Email Center is an Admin or Super Admin-controlled outbox for supported notifications generated or prepared through the Wamule Operations Platform. It allows authorized users to review what is waiting to be sent, preview the content, send it, retry an eligible failure, cancel supported pending work, and review status.

It is not a full email inbox, reply-management tool, mass-marketing platform, or automatically managed customer campaign system.

## What to review before sending

Confirm:

- recipient name and email address;
- subject;
- message content;
- the related customer, application, payment, request, or business record;
- whether attachments or links are appropriate;
- whether the information is current;
- whether the recipient is authorized to receive it; and
- who approved the communication when approval is required.

Do not send a message because it appears in the queue without understanding why it was created.

## Email statuses

The Email Center may show statuses such as queued, sent, failed, cancelled, or another supported state. Verify the exact labels in the live system.

General meaning:

- **Queued** — prepared and awaiting an authorized send action or processing.
- **Sent** — the platform recorded that the send request succeeded; it may not prove the recipient read or acted on it.
- **Failed** — the send attempt did not complete successfully and needs investigation.
- **Cancelled** — the queued message was intentionally stopped where supported.

## Sending a queued notification

1. Open the queued item.
2. Verify recipient and related record.
3. Preview the full message.
4. Correct the source record first when the content is stale.
5. Confirm that sending is appropriate under the business process.
6. Send once.
7. Wait for the status to update.
8. Confirm the final status and record any required follow-up.

## Retrying a failed email

Before retrying:

- read the failure status or available error;
- confirm the recipient address is valid;
- check whether the message was already sent through another route;
- verify the source information is still correct;
- avoid repeated retries that could create duplicate messages; and
- escalate configuration or provider failures.

Retry once after correcting the cause, then confirm the result.

## Cancelling a queued email

Cancel only when:

- the recipient is wrong;
- the source information changed;
- the message was created in error;
- the customer no longer needs the communication; or
- management instructed that it should not be sent.

Record or preserve the reason where supported. Cancellation does not correct the underlying customer, payment, or application record.

## Sensitive information

Do not include unnecessary personal, contractual, banking, or internal information in an email. Before sending a document or link:

- confirm it belongs to the correct recipient;
- verify access restrictions;
- avoid publicly accessible document URLs;
- check the attachment for other customers' information; and
- follow the approved communication policy.

## Example: payment request notification

A payment request email is queued for a fictional customer, **Alana Training**.

1. Admin opens the customer and contract.
2. Admin verifies the requested amount and due date.
3. Admin reviews the queued recipient and message.
4. The email is sent once.
5. The Email Center shows Sent.
6. Collections records that the request was sent and schedules follow-up.
7. Staff do not mark the payment complete until Finance records the actual transaction.

## Common mistakes

- Sending to an old or incorrect address.
- Retrying a failed item several times without checking delivery history.
- Treating Sent as proof the customer read or paid.
- Editing only the email text when the source record is wrong.
- Sending sensitive documents to an unverified recipient.
- Using Email Center as a substitute for recording a collections activity.
- Assuming the platform receives or manages customer replies.

## Suggested training media

**Screenshot space:** Add an Email Center list showing queued, sent, failed, and cancelled fictional notifications. Label recipient, subject, related record, status, created time, and available actions.

**Screenshot space:** Add a preview screen for a fictional payment request. Highlight recipient verification, subject, message body, links/attachments, and Send/Cancel controls.

**Screenshot space:** Add a failed-email example showing the error context, corrected customer email, and successful retry result.

**Diagram space:** Add an email-control flow: Source record → Queue → Authorized preview → Send → Status review → Operational follow-up. Show that replies and payment completion happen outside the Email Center.

**Video space:** Record a 5–7 minute walkthrough sending one fictional notification and safely retrying one failure. Include the post-send customer/collections follow-up.
