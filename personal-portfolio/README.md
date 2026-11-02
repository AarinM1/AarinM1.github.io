# Aarin's portfolio

A static React/Vite portfolio with a terminal-inspired layout, warm amber night mode, and warm paper day mode. Buttons replace the details panel with one section at a time. Experience and project summaries stay deliberately high level.

## Local development

Use Node.js 24 (the version in `.nvmrc`), then run from this directory:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4147 --strictPort
```

Open <http://localhost:4147/> for the portfolio. The old `/terminal.html` URL redirects to the main page. There is no command input, command history, or shell execution.

## Checks and production preview

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4147 --strictPort
```

Stop the development server before using the same port for the production preview. Vite writes the static site to `dist/`.

## GitHub Pages

The workflow at `../.github/workflows/pages.yml` installs locked dependencies, lints, builds, and publishes only `dist/` on pushes to `main` or a manual workflow run. Set the repository's **Settings → Pages → Source** to **GitHub Actions** before deployment. No deployment is performed by local build commands.

This account-level site uses Vite's default `/` base URL. Section buttons update client-side state; the site requires no server-side router. The résumé PDF in the repository root is not copied into the deployment artifact.

Content shipped in browser assets is public. Keep proprietary details out of source, images, and downloadable files.

## Dependency security review

The dependency refresh upgrades React to 19, Vite to 8, and ESLint to 10,
with Node 24 required for development. Build and lint pass.
The latest npm audit reports zero high/critical findings and six moderate
findings in the ESLint development dependency tree, stemming from minimatch
(GHSA-g3hv-75wg-m249). npm reports no automatic fix for the affected tree.
These tools are not shipped in the static site. Recheck `npm audit` when
upstream releases arrive; no forced major transitive override has been applied.

Experience summaries and the Release Detective overview omit implementation details and internal metrics.
