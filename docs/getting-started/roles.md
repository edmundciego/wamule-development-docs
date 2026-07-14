---
title: User roles and responsibilities
---

# User roles and responsibilities

User roles control the level of trust and responsibility a person has inside the Wamule Operations Platform. A role should match the person's real job—not their seniority alone—and should provide only the access needed to complete assigned work.

## Role overview

| Role | Primary responsibility | Typical work | Important boundary |
| --- | --- | --- | --- |
| Super Admin | System ownership, user administration, and high-trust configuration | Inviting users, assigning roles, managing company and workflow settings, overseeing protected controls | Use only for people responsible for the platform and its configuration. |
| Admin | Trusted operational management and review | Supervising records, reviewing reports, using authorized email or administrative tools, correcting approved operational issues | Admin access does not remove the need for business approval or documented reasons. |
| Staff | Day-to-day sales, customer service, operations, follow-up, and post-sale work | Updating leads, recording activities, scheduling follow-ups, working applications and customer tasks where permitted | Staff should not change privileged configuration or perform destructive data actions. |
| Read Only | Management, review, training observation, or oversight without edits | Reviewing permitted records, statuses, reports, and history | Read Only users cannot complete operational updates or record financial activity. |

Exact permissions should be confirmed in the live system before staff are assigned responsibility for a sensitive process.

## Super Admin responsibilities

A Super Admin is responsible for protecting the structure of the system. Typical responsibilities include:

- approving and creating user access;
- assigning or changing roles;
- maintaining company profile and operational configuration;
- reviewing high-trust AI or notification settings;
- overseeing restricted data-management procedures;
- confirming that changes have an owner, business approval, and effective date; and
- ensuring access is removed or reduced when a person's duties change.

Super Admin access should not be used for routine convenience. A Super Admin can still make an operational mistake, so significant settings changes should be reviewed and documented.

## Admin responsibilities

Admins coordinate and verify work across teams. Depending on the final production permissions, they may:

- review applications and operational exceptions;
- supervise lead, reservation, payment, collections, and post-sales queues;
- use supported email or reporting tools;
- investigate discrepancies using record history and Audit Trail; and
- approve or direct corrections that are within business policy.

An Admin should not treat access as authorization to make an undocumented financial, contractual, or customer decision. The business instruction must still be clear.

## Staff responsibilities

Staff users maintain the accuracy of daily work. A Staff user should:

- work only from their assigned or authorized records;
- keep lead stages and next actions current;
- record meaningful buyer contact and outcomes;
- confirm lot information before communicating availability;
- complete required application or post-sales tasks;
- escalate financial, contract, access, or data conflicts rather than guessing; and
- use Send Feedback when the system behaves unexpectedly.

Staff are often the people creating the activity history that managers later rely on. Notes should be factual, respectful, and useful to the next person who opens the record.

## Read Only responsibilities

Read Only access is appropriate when a person needs visibility but should not change records. Examples include a manager reviewing performance, a temporary observer, or a trainee shadowing an experienced user.

A Read Only user should not share screenshots or exported information outside approved business channels simply because they cannot edit it. Viewing access still carries a privacy responsibility.

## Choosing the correct role

Use the following questions before assigning access:

1. Does the person need to change records or only review them?
2. Which business areas are part of their current job?
3. Will they manage users or configuration?
4. Will they handle payments, contracts, or personal information?
5. Who will review their work during training?
6. When should the access be reviewed or removed?

:::warning Use least privilege
Assign the lowest role that enables the person's actual work. Do not give Super Admin access simply to solve a temporary access issue. Investigate the specific missing permission first.
:::

## Role-change process

When a role needs to change:

1. Confirm the request with the authorized manager or business owner.
2. Record the reason and the required effective date.
3. Review whether the person still needs all existing access.
4. Make the role change through the approved user-management process.
5. Ask the person to sign out and sign in again if permissions do not refresh immediately.
6. Confirm the expected pages and actions using a safe test record.
7. Review the Audit Trail or user history where available.

## Common mistakes

- Assigning Super Admin to avoid investigating a role issue.
- Sharing one account between several staff members.
- Leaving access active after a person changes duties or leaves the business.
- Assuming a visible button means the user is authorized by policy to use it.
- Testing a new role on a live customer or payment record.

Super Admin procedures are described in [Privileged Super Admin controls](../administration/privileged-controls).

## Suggested training media

**Screenshot space:** Add a screenshot of the Users & Roles area using fictional staff accounts. Highlight the role selector, user status, invitation state, and any last-login or access information that is available.

**Diagram space:** Add a role ladder showing Read Only → Staff → Admin → Super Admin. Beside each role, list examples of permitted responsibility and one action that must be escalated.

**Video space:** Record a 3-minute Super Admin walkthrough showing how to review a new-user request, assign the lowest suitable role, verify access with a test account, and document the change.
