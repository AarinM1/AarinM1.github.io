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
The latest npm audit reports zero high/critical findings and three moderate
findings in the ESLint development dependency tree, stemming from minimatch
(GHSA-g3hv-75wg-m249). npm now reports a fix available for the affected tree;
that separate advisory was not remediated during the js-yaml verification.
These tools are not shipped in the static site. Recheck `npm audit` when
upstream releases arrive; no forced major transitive override has been applied.

Experience summaries and the Release Detective overview omit implementation details and internal metrics.

### Final release verification

A clean Node 24 `npm ci`, full-source lint, and production build pass. The
production-only npm audit reports **zero known vulnerabilities**. The full
installation reports **three moderate findings**, all from the ESLint/minimatch
development dependency chain. The installed minimatch is 10.2.6; the advisory
requires 11.0.1, and npm now reports a fix available for the affected tree.
No forced transitive major-version override was applied. ESLint processes local
source during development/CI and is not included in the deployed browser bundle.

Earlier authenticated GitHub checks reported 57 open Dependabot alerts against the
lockfile. Those alerts include versions no longer present: Vite is now 8.3.5
(alert ranges end at 6.4.3), source-map-js is 1.2.2, nanoid is 3.3.20, and
postcss is 8.5.32. Rollup, esbuild, and js-yaml have been removed from this tree.
The remaining minimatch advisory is real; GitHub's alert list has not yet been
fully reconciled with the current lockfile. Do not interpret the old alert count
as a current npm audit result or dismiss alerts without reviewing their ranges.

### CVE-2026-84375 verification

On 2026-11-14, the tracked manifest and lockfile contained no `js-yaml`
dependency. A clean `npm ci` using Node 24 followed by `npm ls js-yaml --all`
confirmed an empty tree; lint and production build passed. The full npm audit
contained no finding for CVE-2026-84375 / GHSA-2883-xcg3-v3hh. No dependency
update or override was needed because the earlier refresh removed the package.

`git ls-remote --symref origin HEAD` confirmed GitHub's default branch is `main`
at `6f6e493e83572909137f8801e84015be60ac136b`, matching the verified checkout.
Authenticated Dependabot alert status was not verified in this session: the
unauthenticated GitHub repository API returned 404. If an alert remains open,
inspect its manifest path and detected version before considering dismissal.
The [advisory](https://github.com/advisories/GHSA-2883-xcg3-v3hh) identifies
3.15.2 and 4.3.2 as patched versions for their respective major versions.

The workflow run for commit `34330e6` completed successfully. Pages was still
configured as legacy publication from `gh-pages` `/` with HTTPS enforced during
review; the final release should use GitHub Actions as its Pages source.
