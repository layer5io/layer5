# First wave: 10 ready-to-claim issues

Labels on every issue: `area/hugo-migration`. Add `needs-champion-review` for anything touching `baseof.html`, `hugo.yaml` or the migration script.
Each is sized for one small PR and verified by `make serve` plus `make test`.

| # | Title | Labels | Acceptance criteria |
|---|---|---|---|
| 1 | Port `<Button>` variants to `{{< button >}}` | hugo/shortcode, good first issue | All Sistent button variants render; keyboard focus visible; example page added |
| 2 | Terminal shortcode: line prompts and `$` stripping on copy | hugo/shortcode, good first issue | Copy omits leading `$`; works with multi-line; no layout shift |
| 3 | `{{< cta-fullwidth >}}`: image + secondary button | hugo/shortcode | Matches live CTA at 3 breakpoints; params documented in cheatsheet |
| 4 | Dark-mode parity pass | hugo/layout, help wanted | Every component readable in both themes; contrast ≥ 4.5:1 |
| 5 | Extend `COMPONENTS` map from a real dry-run report | hugo/content, good first issue | Run `make migrate-dry` on `layer5/src/collections`; each "unknown" component has a mapping or an issue |
| 6 | Blog list: filter by category/tag + pagination parity | hugo/layout | URLs match Gatsby (`verify-urls` clean for `/blog/*`) |
| 7 | Handbook: multi-level sidebar + breadcrumbs | hugo/layout | Nested sections collapse/expand without JS; current page highlighted |
| 8 | `{{< meshery-embed >}}` for `@layer5/meshery-design-embed` | hugo/shortcode, help wanted | Lazy-loaded iframe/module; no JS on pages without it |
| 9 | Members directory: role filter + badges | hugo/layout, good first issue | Reuses `data-filter-*` hooks; no new JS file |
| 10 | Lighthouse CI budget | hugo/ci | CI fails below 95 perf / 100 SEO / 100 a11y on home, blog post, integrations list |
