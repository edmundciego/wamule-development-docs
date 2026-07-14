---
title: Reports and CSV exports
---

# Reports and CSV exports

Reports provides filtered operational views for understanding sales, inventory, applications, customers, payments, collections, post-sales work, workload, and data-quality exceptions. Supported views may be exported to CSV for further review.

Reports help management ask questions and identify records needing attention. They do not replace the underlying records or an approved accounting system.

## Common reporting areas

Reports may cover:

- payments and transaction activity;
- customer balances and account standing;
- lead pipeline and sales movement;
- follow-ups and site visits;
- reservations and deposit readiness;
- applications and review status;
- lot availability and demand;
- post-sales tasks and workload;
- missing receipt, proof, reference, document, or ownership information; and
- staff assignment or activity patterns.

The exact filters and columns should be confirmed in the live system before a management routine is finalized.

## Before running a report

Define the question first. Examples:

- Which payments this month are missing receipt numbers?
- Which active reservations expire within seven days?
- Which leads have overdue follow-ups and no recent activity?
- Which applications are pending review for unavailable lots?
- Which customers have an outstanding balance and no recent collections contact?
- Which post-sales tasks are blocked?

A clear question determines the correct report, date range, status filter, project, and owner filter.

## Using filters

1. Choose the relevant report area.
2. Set the date range and understand which date the filter uses—created, due, payment, visit, or another date.
3. Select the project or lot context when relevant.
4. Apply status and owner filters.
5. Review the on-screen results before exporting.
6. Open a sample of underlying records to confirm the interpretation.
7. Save or communicate the filter criteria with the result.

Do not compare two reports unless their date ranges, statuses, and record definitions are aligned.

## Understanding report accuracy

Report accuracy depends on source data. A report can be technically correct while still reflecting an operational problem, such as:

- staff did not update a lead stage;
- a follow-up was completed but not recorded;
- a reservation expired without being released;
- a payment is missing a reference;
- a contract status is stale;
- a customer was duplicated; or
- a task remains open after work was completed.

When a result looks wrong, identify specific rows and open the source records before assuming the report calculation is defective.

## CSV exports

Before exporting:

- apply the narrowest useful filters;
- confirm the rows and columns shown;
- avoid exporting personal or financial information that is not needed;
- use an approved business device and storage location;
- name the file with the report, date range, and export date; and
- do not email or upload the file through unapproved channels.

Example filename:

`collections-overdue-2026-07-01-to-2026-07-14-exported-2026-07-14.csv`

## Protecting exported data

A CSV may contain names, phone numbers, email addresses, lot information, balances, payment details, or internal notes. Treat it as operational data even when the repository or documentation site is public.

- Do not place real exports in the documentation repository.
- Do not use them in screenshots.
- Delete temporary copies according to business policy.
- Limit access to the people who need the report.
- Redact or aggregate data before sharing outside the operational team.

## Example: investigating a payment total

A monthly payment report total appears BZ$500 higher than expected.

1. Confirm the date range and transaction types included.
2. Check whether voided or corrected entries are included.
3. Sort or filter by amount and date.
4. Look for duplicate-looking entries.
5. Open the suspected payments.
6. Confirm customer, contract, reference, and status.
7. Correct the underlying record only through the approved financial process.
8. Re-run the same report with identical filters.
9. Document whether the issue was data entry, filter interpretation, or report behavior.

## Recommended weekly management reports

A weekly review can include:

- new leads and first-response status;
- overdue follow-ups and upcoming visits;
- active and expiring reservations;
- pending applications and unavailable-lot exceptions;
- available/reserved/sold lots by project;
- payments recorded and missing-information exceptions;
- due/overdue collections accounts and promises;
- open/overdue post-sales tasks; and
- data-quality or support issues requiring action.

Each report should end with named actions, not only totals.

## Common mistakes

- Exporting before applying filters.
- Comparing created-date results with payment-date results.
- Treating a report row as authoritative without opening the record.
- Sending a CSV containing customer data through personal email or chat.
- Editing the CSV and treating it as an update to the platform.
- Re-running a report with different filters and calling the totals inconsistent.
- Correcting a record only to make the report match an expectation.

## Suggested training media

**Screenshot space:** Add a Reports page screenshot with date range, project, owner, status, and report-type filters labelled. Include a small fictional result table.

**Screenshot space:** Add a before-and-after filter example showing an unfiltered payment report and a filtered “missing receipt number this month” report.

**Screenshot space:** Add a CSV export example with all data fictional. Label the filename, secure storage location, and fields that would be sensitive in a real export.

**Diagram space:** Add a reporting workflow: Define question → Select report → Set filters → Review sample records → Export if necessary → Assign actions → Re-run to confirm corrections.

**Video space:** Record a 7–9 minute weekly reporting walkthrough showing how to answer three questions: overdue follow-ups, reservations expiring this week, and payments missing receipt numbers.
