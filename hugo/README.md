# layer5.io on Hugo — Proof of Concept

This repository is a proof of concept (POC) for migrating [layer5.io](https://layer5.io) from Gatsby to Hugo. The current Gatsby site build is resource-heavy, leading to high memory usage and slow CI build times; this Hugo version is being built in parallel to deliver near-instant builds. Parity with the current site comes first, with no redesign.

<!-- TODO: add link to main migration tracking epic -->
> **Tracking Epic**: [TODO: add migration epic link] <!-- TODO: add epic link --> | **Community Chat**: [TODO: add Slack/forum channel link] <!-- TODO: add chat channel link -->

## How the migration works

- **Converting content**: An automated script converts legacy MDX content into standard Hugo Markdown with YAML front matter.
- **Rebuilding components**: React and Gatsby components are ported to lightweight, reusable Hugo shortcodes.
- **Protecting URLs**: A verification tool checks every URL the live Gatsby site serves against the new site to ensure zero 404s.
- **Safe cutover**: The Gatsby site is kept operational as an immediate rollback target until the Hugo migration passes all checks.

## Status

| Piece | Status | Notes |
|---|---|---|
| Site build | **Working** | Compiles clean HTML into `public/` with zero template errors. |
| Tooling tests | **23 passed** | 23 of 23 unit tests pass (`make test`). |
| Sample content | **Placeholder** | Minimal sample content to test components; real content will migrate from `layer5`. |
| Netlify redirects | **Working** | Generates extensionless `public/_redirects` from page aliases. |
| Performance benchmarks | **Informal** | Windows numbers are approximate Go memory; true peak RSS is only measured on Linux CI. |

> [!WARNING]
> No performance figure in this repo should be treated as an official result yet. Plan targets (< 6 s, < 250 MB) are goals, not measurements.

## Quick start

### Prerequisites
- **Hugo Extended**: CI pins `0.145.0`; verified locally with `v0.162.1+extended` (version pin is being reviewed).
- **Node.js**: Version 18 or newer (used solely for tooling in `scripts/` and Pagefind).
- **Make**: Standard command runner.
*(Verified on Windows x64; native macOS and Linux environments are untested on this dev machine).*

```bash
make serve         # Start local dev server with live reload at http://localhost:1313/ (verified on Windows)
make test          # Run all 23 migration tooling unit tests (verified on Windows)
make build         # Compile minified production site to ./public (verified on Windows)
make bench         # Run 1,210-page synthetic build benchmark (verified on Windows; approx Go memory)
make index         # Build Pagefind search index (untested; requires network for npx on first run)
make verify-urls   # Build, then report live URLs Hugo would 404, per collection (see "Keeping every URL working")
make migrate-dry   # Dry-run MDX converter against layer5 collections (reads ../src/collections)
```

## How to contribute

1. **Find or claim an issue**: Look for issues labelled `area/hugo-migration` in [layer5io/layer5 issues](https://github.com/layer5io/layer5/issues) and comment to claim one.
2. **Fork and branch**: Fork [layer5io/layer5](https://github.com/layer5io/layer5), clone your fork, and check out the `hugo` branch:
   ```bash
   git clone https://github.com/<your-username>/layer5.git
   cd layer5
   git checkout hugo
   git checkout -b feature/your-feature-name
   cd hugo
   ```
3. **Make your change**: Work inside `hugo/`. Keep changes minimal. Run `make serve` to test locally and `make test` to ensure tooling passes.
4. **Visual checks**: For any visual or layout changes, attach before/after screenshots in both light and dark mode.
5. **Open a PR**: Open a pull request against the `hugo` branch of `layer5io/layer5` (not `master`), referencing the issue (e.g., `Refs layer5io/layer5#123`). Sign off your commits (`git commit -s`); check CONTRIBUTING in `layer5io/layer5` for the current rules.
6. **Review**: A maintainer will review your pull request.

### Definition of Done for PRs
- [ ] `make serve` runs without template or build errors.
- [ ] `make test` passes (all 23 tests pass).
- [ ] Verified in both light and dark theme modes.
- [ ] URL parity is preserved (`make verify-urls` clean for touched collections).
- [ ] [docs/CHEATSHEET.md](docs/CHEATSHEET.md) updated if shortcodes or attributes changed.

## Repo map

| Path | Description |
|---|---|
| `layouts/` | Hugo templates for home, sections, handbook, members, and partials. |
| `layouts/shortcodes/` | Hugo shortcodes replacing React components (`button`, `terminal`, `accordion`, etc.). |
| `assets/` | Site styling (CSS variables mapped to Sistent tokens) and client-side scripts (`main.js`). |
| `static/js/` | Optional libraries (`topology.js`, `calendar.js`) loaded only on pages requiring them. |
| `content/` | Sample content bundles (`blog/`, `handbook/`, `members/`, `integrations/`). |
| `data/migration.json` | Migration metrics and collection counts displayed on `/migration/`. |
| `scripts/` | Tooling: `migrate-mdx.mjs` (converter), `verify-urls.mjs` (URL checker), `bench.mjs` (benchmark). |
| `docs/` | Contributor cheatsheet, starter issues, demo script, maintainer notes, and first-run report. |
| `.github/workflows/` | CI workflow (`hugo.yml`) running builds, link checks, and Linux benchmarks. |

## Design notes

- **Zero third-party requests on normal pages**: Uses system fonts, inline SVGs, and no tracking scripts.
- **Token-based theme**: CSS variables provide dark/light modes and map cleanly to Sistent design tokens.
- **Accessibility floor**: Visible focus states, keyboard navigation, skip links, and `prefers-reduced-motion` support.

## Keeping every URL working

Every URL that works on layer5.io today must keep working after the cutover, either as a page or as a redirect.

- `make url-inventory` writes `.bench/url-inventory.json`, one row per live URL with the sources that list it. The main source is the Gatsby build deployed to the `gh-pages` branch: every `index.html` and other HTML file there is a URL. Only its file list is fetched, so no Gatsby build is needed. It also reads the live sitemap, `src/utils/redirects.yaml` and `redirect_from` in `src/collections`. To use a local `gatsby build` instead, run `node scripts/url-inventory.mjs --gatsby-public ../public`.
- `make verify-urls` builds the site and checks each URL against `public/`. A URL passes when Hugo writes a page there, an alias stub (`<path>/index.html` with `http-equiv="refresh"`) or a `_redirects` entry. It prints `MISSING: N` for each collection. `make check-urls` runs the same check on an existing `public/`.
- CI runs the check on every PR to `hugo` in the `verify-urls` job and uploads the full list as the `url-report` artifact.
- Collections listed in `scripts/verify-urls.allow` are only reported. When a collection's Phase 3 issue closes, delete its line in the same PR. From then on a missing URL in that collection fails CI. The list only ever shrinks.

## Learn more

- [docs/CHEATSHEET.md](docs/CHEATSHEET.md) — Go template syntax for React and Gatsby developers.
- [docs/FIRST_RUN_REPORT.md](docs/FIRST_RUN_REPORT.md) — Initial verification, bug fixes, and benchmark details.
- [docs/MAINTAINER_NOTES.md](docs/MAINTAINER_NOTES.md) — Project lead handover notes and meeting recommendations.
- [docs/PLAN_FEEDBACK.md](docs/PLAN_FEEDBACK.md) — Technical review and critique of the migration plan.
- `/migration/` — Live migration burndown dashboard powered by `data/migration.json`.

## Glossary

- **Hugo**: A fast static site generator written in Go that compiles Markdown into HTML.
- **Shortcode**: A reusable Hugo template tag (e.g. `{{< button >}}`) used inside Markdown.
- **Front matter**: Metadata block at the top of a Markdown file (title, slug, date, aliases).
- **Page bundle**: A directory containing an `index.md` file along with its co-located assets and images.
- **MDX**: Markdown with embedded React components, used by the existing Gatsby site.
- **Pagefind**: A lightweight client-side search library that indexes static HTML output.
