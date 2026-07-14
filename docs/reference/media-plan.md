---
title: Training media plan and privacy policy
---

# Training media plan and privacy policy

Training media should help staff recognize a page, understand the order of work, and see what a correct result looks like. Screenshots and videos should not be decorative. Every asset should answer a specific training question.

The guide uses visible **Screenshot space**, **Video walkthrough space**, and **Workflow diagram space** cards. Replace a card only after the proposed asset has been captured with safe training data, reviewed, and inserted into the related article.

## Safety requirements

Every screenshot, video, diagram, and example must use:

- a test account;
- fictional names, phone numbers, email addresses, lots, contracts, payments, and documents;
- a visible **Training Data** marker;
- approved internal URLs or cropped browser chrome;
- redaction of internal identifiers where necessary; and
- alt text or a written summary for accessibility.

Never publish:

- real customer names or contact details;
- signatures or identification documents;
- real contracts;
- real receipt numbers or bank references;
- document-storage URLs;
- API keys, tokens, passwords, or environment values;
- Supabase, Resend, Gemini, or other provider credentials;
- production configuration details that create a security risk;
- real Audit Trail exports; or
- unredacted browser notifications, bookmarks, tabs, email addresses, or account menus.

## Standard fictional training set

Using one consistent set of fictional records makes the guide easier to follow. Create a dedicated training project with examples such as:

| Record | Suggested fictional value | Purpose |
| --- | --- | --- |
| Staff account | `Training Admin`, `Training Sales`, `Training Finance` | Demonstrate role differences without using real staff accounts. |
| Buyer 1 | Nadia Training | Complete buyer-journey example. |
| Buyer 2 | Marlon Training | Collections and payment-dispute example. |
| Buyer 3 | Selena Training | Application duplicate and unavailable-lot example. |
| Project | Training Gardens | Separate training inventory from live housing projects. |
| Lots | T-05, T-07, T-08, T-14, T-22 | Create Available, Reserved, Sold, and conflict examples. |
| Contract | TRAIN-CON-001 | Contract, statement, and payment examples. |
| Cash receipt | TRAIN-RCPT-001 | Show format without imitating a real receipt sequence. |
| Transfer reference | TRAIN-BANK-001 | Demonstrate a reference field without exposing banking data. |

Every page and video should state that these are fictional records.

## Screenshot standards

### Capture size

- Capture desktop screenshots at a consistent browser width, ideally 1440–1600 pixels.
- Capture important mobile workflows separately when the layout changes meaningfully.
- Crop empty browser space while preserving enough context to identify the page.
- Use WebP or optimized PNG where possible.

### Annotation style

Use numbered callouts when the order matters. Use short labels rather than paragraphs inside the image. Explain details in the article below the image.

Recommended annotation pattern:

1. **Identity** — confirm the buyer or record.
2. **Current state** — read stage/status and recent activity.
3. **Linked context** — verify lot, application, contract, or payment.
4. **Action** — show the button or field to use.
5. **Confirmation** — show where the result appears after saving.

### Training Data marker

Place a visible marker near the top-left or top-right corner:

> TRAINING DATA — FICTIONAL RECORD

The marker should remain readable after image resizing.

## Video standards

Short videos should demonstrate one complete task or scenario. Avoid long recordings that simply click through every page.

Recommended structure:

1. **Purpose** — what the viewer will learn.
2. **Starting condition** — show the fictional record and current state.
3. **Verification** — explain what must be checked before acting.
4. **Action** — complete the workflow at normal speed.
5. **Result** — confirm the saved status, history, or related record.
6. **Boundary** — state what the action did not do automatically.
7. **Recap** — repeat owner, next action, and escalation point.

Recommended length:

- page orientation: 2–4 minutes;
- single task: 4–7 minutes;
- controlled financial or application procedure: 8–12 minutes;
- full buyer journey: 12–15 minutes.

Include captions or a written transcript. Do not record passwords, private notifications, personal browser tabs, or production customer searches.

## Priority media production list

### Priority 1 — Client handoff essentials

| Page | Screenshot to add | Video to add | Suggested filename |
| --- | --- | --- | --- |
| Welcome | Full Dashboard with navigation and five operational zones labelled | 4–6 minute platform orientation following one buyer across connected records | `screenshots/platform-overview.webp`, `walkthroughs/platform-orientation.mp4` |
| Navigation overview | Full sidebar plus list-versus-detail comparison | 3–4 minute navigation tour | `screenshots/navigation-overview.webp`, `walkthroughs/navigation-tour.mp4` |
| Roles | Users & Roles page with fictional accounts and role selector | 3-minute least-privilege assignment example | `screenshots/users-and-roles.webp`, `walkthroughs/assigning-a-role.mp4` |
| First-day checklist | First-login screen and four connected training records | 7–10 minute trainee orientation | `screenshots/first-day-overview.webp`, `walkthroughs/first-day-training.mp4` |
| Start-of-day workflow | Dashboard and Daily Brief with numbered review order | 6–8 minute morning review | `screenshots/start-of-day-dashboard.webp`, `walkthroughs/start-of-day-review.mp4` |
| Buyer journey overview | Consistent buyer shown at eight stages | 12–15 minute end-to-end journey | `diagrams/buyer-journey-swimlane.svg`, `walkthroughs/buyer-journey.mp4` |

### Priority 2 — Sales and inventory

| Page | Screenshot to add | Video to add | Suggested filename |
| --- | --- | --- | --- |
| Leads | Lead list filters; detailed lead with activity, follow-up, lot, visit, reservation, and application | 8–10 minute new-inquiry to site-visit example | `screenshots/leads-list.webp`, `screenshots/lead-detail.webp`, `walkthroughs/lead-workflow.mp4` |
| Lead activities | Timeline showing a useful call note, WhatsApp note, and status change | 4-minute “write a useful activity” example | `screenshots/lead-activity-history.webp`, `walkthroughs/record-lead-activity.mp4` |
| Follow-up tasks | Due/overdue list and completed task with resulting next action | 5-minute complete versus reschedule example | `screenshots/follow-up-queue.webp`, `walkthroughs/follow-up-outcomes.mp4` |
| Site visits | Visit form/list and completed visit outcome | 5-minute schedule and close a visit | `screenshots/site-visit-detail.webp`, `walkthroughs/site-visit-workflow.mp4` |
| Lots | Lot list, lot detail with reservation, and preferred-lot conflict | 6–8 minute inventory verification example | `screenshots/lots-inventory.webp`, `screenshots/lot-reservation-context.webp`, `walkthroughs/verify-lot-availability.mp4` |
| Reservations | Reservation form, active-expiry queue, and proof/payment split | 8-minute reservation lifecycle | `screenshots/reservation-detail.webp`, `screenshots/reservation-expiry-queue.webp`, `walkthroughs/reservation-lifecycle.mp4` |
| Deposit readiness | Expected, proof-received, overdue, and financially-recorded examples | 5-minute explanation of operational versus financial status | `screenshots/deposit-readiness.webp`, `walkthroughs/deposit-readiness-boundary.mp4` |

### Priority 3 — Applications and customers

| Page | Screenshot to add | Video to add | Suggested filename |
| --- | --- | --- | --- |
| Applications | Pending Review list and full application review workspace | 8–10 minute human review scenario | `screenshots/applications-list.webp`, `screenshots/application-review.webp`, `walkthroughs/application-review.mp4` |
| Possible Duplicate | Side-by-side records showing email, phone, name/lot comparison | 4-minute duplicate-review example | `screenshots/possible-duplicate-review.webp`, `walkthroughs/review-possible-duplicate.mp4` |
| Customers | Customer list with similar-name verification | 5-minute find the correct customer | `screenshots/customers-list.webp`, `walkthroughs/find-customer.mp4` |
| Customer Detail | Full page with Overview, Contract, Payments, Documents, Requests, Statement, Post-Sales, and Smart Summary | 10–12 minute account review | `screenshots/customer-detail-sections.webp`, `walkthroughs/customer-account-review.mp4` |
| Contracts | Contract form and contract-detail/account context | 10-minute approved application to active contract | `screenshots/contract-form.webp`, `screenshots/contract-detail.webp`, `walkthroughs/contract-setup.mp4` |

### Priority 4 — Finance and collections

| Page | Screenshot to add | Video to add | Suggested filename |
| --- | --- | --- | --- |
| Payments | Cash payment form, transfer form, and saved payment verification | 8–10 minute cash and transfer recording | `screenshots/payment-cash.webp`, `screenshots/payment-transfer.webp`, `walkthroughs/record-payments.mp4` |
| Receipts | Receipt metadata and customer-payment history | 4-minute receipt-number standards example | `screenshots/receipt-details.webp`, `walkthroughs/receipt-standards.mp4` |
| Payment proof | Proof upload, reference, verification status, and correct payment link | 5-minute proof-review example | `screenshots/payment-proof.webp`, `walkthroughs/payment-proof-review.mp4` |
| Payment requests | Request form, status, due date, and follow-up history | 5-minute request and verify outcome | `screenshots/payment-request.webp`, `walkthroughs/payment-request.mp4` |
| Collections | Priority list and account-detail verification | 9–12 minute due, overdue, and disputed examples | `screenshots/collections-priority.webp`, `screenshots/collections-account.webp`, `walkthroughs/collections-review.mp4` |
| Statements | Statement date range, transaction history, balance, and export | 6-minute verify and share a statement safely | `screenshots/customer-statement.webp`, `walkthroughs/statement-review.mp4` |

### Priority 5 — Management, post-sales, and administration

| Page | Screenshot to add | Video to add | Suggested filename |
| --- | --- | --- | --- |
| Reports | Filters, fictional results, and CSV export warning | 7–9 minute weekly management reporting | `screenshots/reports-filters.webp`, `walkthroughs/weekly-reports.mp4` |
| Post-sales checklists | Checklist status, owner, blocker, and completion evidence | 6-minute post-sales handoff | `screenshots/post-sales-checklist.webp`, `walkthroughs/post-sales-handoff.mp4` |
| Post-sales tasks | Due/overdue task list and task detail | 5-minute blocker and escalation example | `screenshots/post-sales-tasks.webp`, `walkthroughs/post-sales-task.mp4` |
| Audit Trail | Filtered change history with record, action, user, and time | 5-minute investigate a status correction | `screenshots/audit-trail.webp`, `walkthroughs/audit-investigation.mp4` |
| Settings | Settings landing page grouped by risk | 10-minute controlled configuration change | `screenshots/settings-overview.webp`, `walkthroughs/settings-change.mp4` |
| Developer feedback | Feedback form with page, expected/actual, steps, and screenshot | 4-minute submit a reproducible issue | `screenshots/developer-feedback.webp`, `walkthroughs/report-an-issue.mp4` |

## Workflow diagrams to produce

Create accessible SVG diagrams for:

1. Buyer journey swimlanes: Sales, Administration, Finance, Operations.
2. Record-quality cycle.
3. Start-of-day priority sequence.
4. Lead lifecycle.
5. Lot and reservation lifecycle.
6. Application review and human decision gate.
7. Payment verification and recording lanes.
8. Collections decision tree.
9. Contract lifecycle.
10. Documentation/support escalation flow.

Each diagram should include a text explanation in the article. Do not rely on color alone.

## Review checklist for each asset

- [ ] Uses only fictional Training Data
- [ ] Visible Training Data marker
- [ ] Correct current UI and terminology
- [ ] No personal browser/account information
- [ ] No real signatures, receipts, bank references, or documents
- [ ] No credentials, keys, URLs, or environment values
- [ ] Annotations are readable on mobile
- [ ] Alt text or transcript provided
- [ ] Article explains the business boundary
- [ ] Reviewed by process owner and technical verifier
- [ ] File optimized and stored under `static/media/`

## Adding an approved screenshot

Store the file under `static/media/screenshots/` and add it to the related article:

```md
![Lead detail showing fictional Training Data, owner, stage, next action, and activity history.](/media/screenshots/lead-detail.webp)
```

Remove the related **Screenshot space** paragraph only after the image is visible and reviewed.

## Adding an approved video

Store a reasonably compressed file under `static/media/walkthroughs/` or use an approved private/video-hosting approach if repository size becomes a concern. Add captions and a poster image.

For locally hosted media, use an accessible HTML video block in MDX or an approved reusable component. Keep the written step-by-step guide even after the video is added so staff can search and scan the procedure.

## Media maintenance

Review screenshots whenever:

- page layout changes;
- labels or statuses change;
- a workflow step changes;
- a security or privacy concern is identified;
- the product name or branding changes; or
- staff report that the image no longer matches the live system.

Record the capture date and source test environment in the pull request that adds or replaces the media.
