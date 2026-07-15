# Wamule Operations Platform documentation

This repository contains the client-facing operations, workflow, and training documentation for **Wamule Development** and its **Wamule Operations Platform**.

It is intentionally separate from the Wamule application repository and its Netlify deployment. This repository does not contain application code, production application environment values, or Netlify configuration.

## Local workspace location and Git connection

The repository may live inside a larger local workspace, for example:

```text
wamule-workspace/
└── documentation/
    └── wamule-development-docs/
```

Moving the complete folder does not disconnect it from GitHub because its hidden `.git` directory moves with it. From inside `documentation/wamule-development-docs`, verify the connection with:

```bash
git rev-parse --show-toplevel
git remote get-url origin
git status
```

The remote should be:

```text
https://github.com/edmundciego/wamule-development-docs.git
```

Do not run `git init` again when the existing `.git` directory is present. Normal commits and pushes from this nested folder continue to update the separate documentation repository and trigger the GitHub Pages deployment.

When a parent Wamule repository needs to track the documentation repository as part of its workspace, use a Git submodule rather than committing the wiki files into the parent repository:

```bash
# Run from the parent Wamule repository root.
git submodule add --force \
  https://github.com/edmundciego/wamule-development-docs.git \
  documentation/wamule-development-docs

git add .gitmodules documentation/wamule-development-docs
git commit -m "Link Wamule documentation wiki"
```

The parent repository stores only the documentation commit reference. The wiki keeps its own history, remote, workflow, and custom-domain deployment.

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

## Graphify knowledge-graph index

The wiki has its own Graphify index so its operational guides, SOPs, feature explanations, diagrams, configuration, and future approved training media can be queried independently from the application code graph.

Install Graphify once:

```bash
uv tool install graphifyy
graphify install --project --platform codex
```

Build or refresh the documentation graph from this repository root:

```bash
bash scripts/graphify-index.sh
```

The script runs `graphify .` and writes the local index to:

```text
graphify-out/
├── graph.html
├── GRAPH_REPORT.md
└── graph.json
```

`graphify-out/` is intentionally ignored by Git. It is local development intelligence and is not part of the public wiki or GitHub Pages deployment.

To refresh the index after documentation commits, install Graphify's repository hook from this folder:

```bash
graphify hook install
```

The `.graphifyignore` file excludes dependencies and generated Docusaurus output while keeping `docs/`, `src/`, `templates/`, configuration, scripts, diagrams, screenshots, and approved training media available to the graph.

## Content workflow

- Add a Markdown or MDX article in `docs/`.
- Add its document ID to `sidebars.ts`.
- Use [the feature-guide template](templates/feature-guide-template.md) or [the SOP template](templates/sop-template.md).
- Follow [CONTRIBUTING.md](CONTRIBUTING.md) and the [style guide](STYLE_GUIDE.md).
- Submit documentation changes through a branch and pull request with a content owner and technical verifier.

## Screenshots, videos, and diagrams

Use these labels to create visible page-specific training-media slots:

```md
**Screenshot space:** Describe the exact screen, state, fields, and annotations to capture.

**Video space:** Describe the scenario, steps, boundaries, and recommended duration.

**Diagram space:** Describe the workflow, owners, decision points, and verification gates.
```

Legacy `**Media:**` recommendations also render as a planned-media card, but new and revised pages should use the specific labels above. The published card displays the recommendation text so the future asset owner knows exactly what should replace it.

Put approved media in `static/media/` and reference it from the related article. Use only test accounts and fictional records. Every asset must show **Training Data** and be reviewed for contact data, signatures, receipt numbers, bank references, documents, credentials, tokens, configuration, and audit exports.

Example screenshot markup:

```md
![Dashboard overview using fictional Training Data](/media/screenshots/dashboard-overview.webp)
```

After adding and reviewing the approved image, video, or diagram, remove the corresponding placeholder paragraph so the empty card no longer appears.

The detailed shot list, filenames, capture standards, and privacy review are in [`docs/reference/media-plan.md`](docs/reference/media-plan.md).

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

Because this site uses a custom GitHub Actions workflow, the custom domain is configured in the repository's **Settings → Pages** screen rather than through a `CNAME` file in the source tree. The custom domain is `docs.wamuledevelopment.com`. Its Cloudflare DNS record is a DNS-only `CNAME` from `docs` to `edmundciego.github.io`.

## Content-review process

1. Draft content with the correct feature status and boundaries.
2. Verify behavior in a safe authorized test environment.
3. Obtain business/process review from the client documentation owner.
4. Confirm privacy and media compliance.
5. Approve and merge the documentation pull request.
6. Verify the GitHub Pages deployment and custom-domain health.
