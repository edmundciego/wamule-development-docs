---
title: Operational Attention and drill-downs
---

# Operational Attention and drill-downs

Operational Attention is the shared, source-backed layer used by the Dashboard and Daily Brief to identify work that needs staff attention. It turns an aggregate warning into a specific record, deadline, owner, status, and destination.

It is not a separate business workflow and it does not change a lead, reservation, application, payment, contract, or post-sales record.

## What can appear

The attention layer can identify:

- overdue follow-ups and follow-ups due today;
- reservations nearing expiry and overdue deposit readiness;
- applications awaiting review;
- overdue collection requests;
- missing manual receipt numbers or transfer proof;
- blocked or overdue post-sales work; and
- site visits scheduled for today or the near term.

The exact list depends on current records and the selected period. A count is not a substitute for opening the source record.

## Open the source record

For each attention item, review the buyer or customer, action title, due date, owner, current status, and **Open action** link. Use **View all** when you need the complete filtered queue.

The link opens the relevant workspace. For a lead follow-up, it can open the lead detail workspace and focus the follow-up itself. Reservation, site-visit, application, payment, customer, contract, and post-sales links use the closest available record or section.

If the source record was completed, changed, or removed before you open the link, refresh the page and follow the current record status. Do not recreate work only because an older alert remains visible.

## Dashboard and Daily Brief relationship

The Dashboard is live and recalculates attention from current records. The Daily Brief is a generated snapshot. A saved brief item is rechecked against its source when it is displayed:

| Display state | Meaning |
| --- | --- |
| Current | The source issue still applies. |
| Updated since brief | The source still exists, but its status, deadline, or related data changed. |
| Resolved since brief | The underlying work is complete or no longer applicable. |
| Source unavailable | The original source record cannot be loaded. |

The historical brief text may remain for accountability, but the current badge and action link come from live data.

:::note Advisory content
AI wording may explain a priority or suggest a next step, but it does not create the attention item, invent identifiers, approve applications, confirm payments, or update records. Use the source record as the authority.
:::

## When an item cannot be loaded

If a non-zero count is shown but its records cannot be loaded, the page should identify that the records could not be loaded and provide a retry option. Report the page, approximate time, item type, and visible record identifier to support; do not include credentials or private document links.

**Media:** Annotated Dashboard screenshot, short walkthrough video, workflow diagram.
