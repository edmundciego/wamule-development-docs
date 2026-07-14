# Training media

Add only approved training media here. Every screenshot or video must use test accounts, fictional data, a visible **Training Data** marker, and redaction where required. See [`docs/reference/media-plan.md`](../../docs/reference/media-plan.md).

Recommended folders:

```text
static/media/
├── screenshots/
├── walkthroughs/
└── diagrams/
```

Use descriptive lowercase filenames, for example:

```text
screenshots/dashboard-overview.webp
screenshots/application-review-workspace.webp
walkthroughs/recording-a-payment.mp4
diagrams/buyer-journey.svg
```

Reference a screenshot from an article with:

```md
![Dashboard overview using fictional Training Data](/media/screenshots/dashboard-overview.webp)
```

The documentation automatically turns an article's final `**Media:**` recommendation into a visible placeholder frame. Remove that line after the approved media has been inserted.
