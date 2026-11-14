# Notes on the migration plan (things worth fixing before it's shared widely)

Written while building the POC. Each item is something a sharp maintainer could ask about in the meeting.

1. **Timeline arithmetic.** The Gantt runs 2026‑11‑02 → 2026‑12‑19, which is about **7 weeks**, not 6. Phase 5 is labelled “Week 5” in the text but starts 12‑07 (week 6) in the chart, and Phases 3 and 4 overlap by 3 days. Decide whether that overlap is intentional.
2. **Speed claims are targets, not measurements.** “~250× faster” is the midpoint of a range: 12–22 min vs 2.5–6 s is roughly 120×–530×. Label the table “target” until `make bench` has produced numbers on CI hardware. The POC's dashboard has a “Measured” column for exactly this.
3. **Mermaid diagram won't render on GitHub.** `subgraph Current Bottleneck (Gatsby)` and the matching `style` lines use names with spaces and parentheses. Use `subgraph gatsby["Current bottleneck (Gatsby)"]` and `style gatsby …`.
4. **Image processing wording.** Hugo's image pipeline is Go-native; it isn't libvips. Please double-check AVIF output support for your Hugo version before promising it; WebP is safe. The snippet in WS3 also calls `.Resources` / `.src` on what would be a dict, which fails. The POC's `responsive-image.html` is the corrected version.
5. **URL patterns need verification, not assumption.** The `permalinks:` block (e.g. `/blog/:year/:slug/`) should be checked against the live sitemap. I recall layer5.io blog URLs being category-based, but I haven't verified it. If they are, set `url:` per page (the converter can emit it). `make verify-urls` settles this with data in minutes.
6. **Inventory gap.** The audit counts content collections but not hand-written pages (`src/pages`, product and landing pages), which tend to be the highest-traffic and most bespoke. Add them to the inventory with an owner each.
7. **Sistent.** “Sistent CSS tokens / Web Components” assumes Sistent can export framework-free tokens. As far as I know it's a React component library; confirm with its maintainers whether tokens can be exported, otherwise Phase 2 includes a manual token port.
8. **Add a rollback and a freeze.** The risk matrix covers content drift but not *cutover failure*. Add: keep Gatsby deployable for 2 weeks after cutover, and a content-freeze window for the final sync.
9. **Add measurable exit criteria per phase** (e.g. “Phase 3 done = `verify-urls` clean for blog/news/handbook/members/programs”). The tooling here makes that cheap.
