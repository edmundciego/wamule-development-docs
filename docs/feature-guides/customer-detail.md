---
title: Customer Detail
---

# Customer Detail

Customer Detail is the post-approval working record. Its sections include Overview, Financials, Contracts, Post-Sales, Documents, Requests, Smart Summary, and linked operational context.

## Current account and historical activity

When an active contract exists, the Current Account Ledger shows only that contract’s posted land payments, purchase price, remaining balance, monthly payment, next due date, and account standing.

When no active contract exists, the page shows a compact **No active contract** state. It does not present purchase price, balance, monthly payment, or next due date as `N/A` account values. Historical land payments remain visible separately, with their status, contract relationship, receipt state, and supporting documents.

Community fees are shown separately from land payments. A reservation is not a payment, deposit readiness is not ledger confirmation, and a payment request is not a completed payment.

## Lot relationships and actions

The header labels lot relationships separately:

- **Requested Lot** — the lot selected on the application;
- **Reserved Lot** — the lot on an active reservation; and
- **Contract Lot** — the lot on the active contract.

Create Contract is available only when an active reservation or approved application authorizes a lot. Without an active contract, the payment action is presented as a community-fee action; land payments require an active contract. The database remains the final enforcement layer.

The Current Account Statement is unavailable without an active contract, while historical transactions remain available for review.

The Smart Summary can flag account status, missing items, and recommended actions; it remains advisory and must be checked against customer, contract, payment, and request records. It cannot populate live financial cards or establish a current balance when no active contract exists. Regenerate it when the page marks it as outdated.

**Media:** Annotated screenshot, walkthrough video, fictional scenario.
