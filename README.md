# Wamule Operations Platform documentation

This repository contains the client-facing operations, workflow, and training documentation for **Wamule Development** and its **Wamule Operations Platform**.

It is intentionally separate from the Wamule application repository and its Netlify deployment. This repository does not contain application code, production application environment values, or Netlify configuration.

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

`npm run build` fails on broken internal and Markdown links. Before review, also check sidebar navigation, local search, responsive/mobile navigation, light/dark modes, and the visible media placeholders.

## Content workflow

- Add a Markdown or MDX article in `docs/`.
- Add its document ID to `sidebars.ts`.
- Use [the feature-guide template](templates/feature-guide-template.md) or [the SOP template](templates/sop-template.md).
- Follow [CONTRIBUTING.md](CONTRIBUTING.md) and the [style guide](STYLE_GUIDE.md).
- Submit documentation changes through a branch and pull request with a content owner and technical verifier.

## Screenshots, videos, and diagrams

Articles that end with a `**Media:**` recommendation automatically display a large screenshot or walkthrough placeholder on the published site. This keeps deliberate space in the layout until approved training media is ready.

Put approved media in `static/media/` and reference it from the related article. Use only test accounts and fictional records. Every asset must show **Training Data** and be reviewed for contact data, signatures, receipt numbers, bank references, documents, credentials, tokens, configuration, and audit exports.

Example screenshot markup:

```md
![Dashboard overview using fictional Training Data](/media/screenshots/dashboard-overview.webp)
```

After adding the approved image or video, remove the article's `**Media:**` placeholder line so the empty frame no longer appears.

Use approved accessible SVG workflow diagrams or simple text flows. Do not include secrets or personal data in diagrams.

## Search

The site uses `@easyops-cn/docusaurus-search-local`, a no-cost local-search plugin. It builds a static index with the documentation and runs in the reader's browser, so no external paid search service is required.

## Deployment architecture

```text
wamule-development-docs repository
→ GitHub Actions build
→ GitHub Pages
→ docs.wamuledevelopment.com

Wamule application repository
→ existing Netlify application deployment
→ unchanged
```

The active deployment workflow is `.github/workflows/deploy-pages.yml`. Pull requests run the production build for validation. Merges to `main` build and deploy the static site to GitHub Pages.

The custom domain is stored in `static/CNAME`. DNS for `docs.wamuledevelopment.com` must point to `edmundciego.github.io` through the domain's Cloudflare DNS zone. GitHub provisions HTTPS after the DNS record resolves and the Pages site accepts the custom domain.

## Content-review process

1. Draft content with the correct feature status and boundaries.
2. Verify behavior in a safe authorized test environment.
3. Obtain business/process review from the client documentation owner.
4. Confirm privacy and media compliance.
5. Approve and merge the documentation pull request.
6. Verify the GitHub Pages deployment and custom-domain health.
