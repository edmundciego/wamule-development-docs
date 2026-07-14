# Wamule Operations Platform documentation

This repository contains the client-facing operations, workflow, and training documentation for **Wamule Development** and its **Wamule Operations Platform**.

It is intentionally separate from the Wamule application repository and its Netlify deployment. This repository does not contain application code, production environment values, a Netlify configuration, a custom-domain file, or a live deployment workflow.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm start
```

Open the address printed by Docusaurus, normally `http://localhost:3000`.

## Build and validation

```bash
npm run build
npm run serve
```

`npm run build` fails on broken internal links. Before review, also check sidebar navigation, local search, responsive/mobile navigation, light/dark modes, and links to media placeholders.

## Content workflow

- Add a Markdown or MDX article in `docs/`.
- Add its document ID to `sidebars.ts`.
- Use [the feature-guide template](templates/feature-guide-template.md) or [the SOP template](templates/sop-template.md).
- Follow [CONTRIBUTING.md](CONTRIBUTING.md) and the [style guide](STYLE_GUIDE.md).
- Submit documentation changes through a branch and pull request with a content owner and technical verifier.

## Media and workflow diagrams

Put approved media in `static/media/`. Use only test accounts and fictional records. Every asset must show **Training Data** and be reviewed for contact data, signatures, receipt numbers, bank references, documents, credentials, tokens, configuration, and audit exports.

Use approved accessible SVG workflow diagrams or simple text flows. Do not include secrets or personal data in diagrams.

## Search

The site uses `@easyops-cn/docusaurus-search-local`, a no-cost local-search plugin. It builds a static index with the documentation and runs in the reader’s browser, making it suitable for a GitHub Pages static deployment without an external paid search service. Verify search locally after meaningful content changes.

## Deployment architecture — not yet enabled

```text
wamule-development-docs repository
→ future GitHub Pages workflow and Pages configuration, after approval
→ future docs.wamuledevelopment.com DNS/SSL configuration, after approval

Wamule application repository
→ existing Netlify application deployment
→ unchanged
```

Do not enable GitHub Pages, add a `CNAME`, configure DNS, use `docs.wamuledevelopment.com`, or add a production deployment until separately approved. A non-active workflow example is in `deployment/github-pages-workflow.yml.example`.

## Content-review process

1. Draft content with the correct feature status and boundaries.
2. Verify behavior in a safe authorized test environment.
3. Obtain business/process review from the client documentation owner.
4. Confirm privacy and media compliance.
5. Approve and merge the documentation pull request.
6. Publish only after separate deployment/DNS approval.
