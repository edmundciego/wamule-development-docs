---
title: Settings
---

# Settings

Settings contains the business and platform configuration that determines how staff work, what options appear, and how future records are created. Because configuration can affect many users and records at once, it should be changed carefully and only by an authorized role.

Settings may include Company Profile, Public Application Settings, Payment Methods, Installment Plans, Lot Sizes, Fee Types, CRM Workflow Guide, Reservation Settings, AI Settings, Users & Roles, notification settings, and privileged Data Management.

## Before changing any setting

Confirm:

1. the business decision being implemented;
2. who authorized it;
3. the effective date;
4. whether it affects existing records, future records, or both;
5. which staff workflows and documentation must change;
6. whether a test can be completed safely first; and
7. how the setting can be reversed if the result is incorrect.

Do not change a setting while experimenting on a live workflow unless the business owner understands the impact.

## Company Profile

Company Profile may control details used across the platform or generated materials, such as business name, contact information, address, branding, or document details.

Before updating:

- confirm the approved spelling and legal/business information;
- check where the value appears;
- verify logo or asset requirements;
- review generated documents or emails after the change; and
- avoid placing credentials or private notes in public-facing fields.

## Public Application Settings

These settings can affect what applicants see or submit. Review:

- project or lot choices;
- public instructions;
- acknowledgements;
- required fields;
- application availability; and
- any routing or notification behavior.

After a change, complete a test submission using fictional data and confirm the resulting application and lead records.

## Payment Methods

Payment Methods defines the approved methods staff can select when recording financial transactions. Each method should have a clear operational standard.

For every method, document:

- when it may be used;
- required receipt or reference fields;
- proof requirements;
- verification or authorization steps; and
- whether it is active for new transactions.

Disabling a method should not erase historical payments that used it.

## Installment Plans

Installment Plans can provide reusable terms such as deposit, duration, payment amount logic, or due-date behavior. Before adding or changing a plan:

- obtain management/financial approval;
- verify the deposit and term;
- test calculations with fictional purchase prices;
- review start-date and due-day behavior;
- confirm whether existing contracts remain unchanged; and
- update the contract and finance documentation.

Do not change a plan to correct one customer's contract. Use the approved contract-correction process.

## Lot Sizes and Fee Types

Lot Sizes standardizes parcel categories. Fee Types standardizes approved charges or administrative items.

Use clear names and avoid creating nearly identical duplicates. Before deactivating or changing an option, check whether existing lots, contracts, applications, or reports depend on it.

## Reservation Settings

Reservation settings may control default duration, expiry behavior, deposit expectations, or related operational rules.

After changing them:

- create a fictional reservation;
- confirm start and expiry dates;
- review reminders or attention indicators;
- verify release/extension behavior; and
- confirm staff understand that reservation and payment remain separate.

## AI Settings

AI Settings may control availability or configuration for application review, Daily Brief, collections assistance, or other advisory features.

AI settings do not give AI authority to:

- approve or decline applications;
- confirm a payment;
- change a balance;
- reserve or sell a lot;
- alter a contract; or
- make a final customer decision.

API keys or credentials must never be placed in documentation, screenshots, notes, or public repositories. Only authorized staff should manage provider configuration.

## Users & Roles

Use Users & Roles to create or invite users, change access, and review account status. Follow the [User roles and responsibilities](../getting-started/roles) guide and use least privilege.

Review access when:

- a person joins;
- job duties change;
- temporary access expires;
- a person leaves;
- suspicious activity occurs; or
- a feature requires higher access than expected.

## Notification and Email Settings

Where available, these settings may affect recipients, enabled notifications, or supported email behavior. Before enabling or changing a notification:

- confirm the purpose and audience;
- avoid exposing customer data to an unnecessary recipient;
- test with approved addresses;
- confirm the trigger and expected frequency;
- review the Email Center or logs; and
- document who maintains the setting.

## CRM Workflow Guide

The CRM Workflow Guide or related settings may help staff understand stage flow and recommended actions. Keep it aligned with the live statuses and this documentation. Do not use a settings note to introduce an unapproved business policy.

## Privileged Data Management

Data Management is a restricted procedure for approved test data or clearly authorized records. It is not a routine correction tool for live customers, contracts, payments, or Audit Trail history.

Before using any destructive action:

- identify the exact records;
- confirm backups or recovery options;
- obtain explicit authorization;
- understand linked-record impact;
- document the reason;
- verify the result; and
- report any unexpected deletion immediately.

## Change-management checklist

- [ ] Business owner approved the change
- [ ] Current value documented
- [ ] New value and effective date documented
- [ ] Existing-record impact reviewed
- [ ] Safe test plan prepared
- [ ] Relevant staff informed
- [ ] Documentation updated
- [ ] Change saved by authorized user
- [ ] Test completed
- [ ] Audit/history reviewed where available
- [ ] Rollback or correction plan confirmed

## Example: adding a new payment method

Management approves a new supported bank-transfer method.

1. Finance defines the method name, required bank reference, proof requirement, and authorization process.
2. A Super Admin adds the method.
3. Staff use a fictional customer to record a test payment.
4. The team confirms the method appears in Payments, reports, statements, and missing-information checks as expected.
5. The payment-recording guide is updated.
6. Staff are trained before the method is used for live transactions.

## Common mistakes

- Changing configuration without recording the old value.
- Using Settings to fix one record.
- Creating duplicate payment methods, fees, lot sizes, or plans with slightly different names.
- Enabling a notification without confirming recipients and frequency.
- Placing an API key in a screenshot or note.
- Giving Super Admin access to solve a temporary problem.
- Using Data Management to erase a live error.
- Forgetting to update training documentation after a workflow change.

## Suggested training media

**Screenshot space:** Add a Settings landing-page screenshot with Company Profile, Public Application, Payment Methods, Installment Plans, Lot Sizes, Fee Types, Reservation, AI, Users & Roles, and Data Management labelled by risk level.

**Screenshot space:** Add a payment-method configuration example showing method name, active state, required reference/proof guidance, and the resulting option in the payment form.

**Screenshot space:** Add an installment-plan test example using a fictional lot price. Show configuration, calculated terms, and the contract-review check.

**Diagram space:** Add a configuration-change flow: Business decision → Risk/impact review → Test → Authorized change → Verify outputs → Train staff → Update documentation.

**Video space:** Record a 10-minute Super Admin walkthrough covering one low-risk reference update and one higher-risk workflow setting. Show the approval, test, verification, and documentation steps; do not display credentials or destructive Data Management actions.
