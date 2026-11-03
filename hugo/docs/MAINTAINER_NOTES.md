# Maintainer Notes

These notes are preserved from the initial handoff of the proof-of-concept for the project lead and maintainers.

---

## 1. Initial Authoring & First-Run Context

When this repository was originally authored, Hugo Extended was not available in the development environment where the templates and configuration were created. 
- Templates, shortcodes, and `hugo.yaml` were initially linted statically (verifying balanced blocks and existence of referenced partials/shortcodes).
- The tooling scripts (`migrate-mdx.mjs`, `verify-urls.mjs`, `generate-synthetic-content.mjs`) were tested with unit tests upfront.
- Templates, output formats, and redirects were subsequently verified and fixed during the first build pass on a machine with Hugo Extended installed (see `docs/FIRST_RUN_REPORT.md`).

---

## 2. Meeting Advice (Weekly Websites Meeting)

- **Quote measured numbers in meetings, not the plan's targets**:
  The migration plan contains speed targets (e.g. `< 6 s` full site build, `< 250 MB` peak RAM), but these are aspirational targets, not measurements.
- The `/migration/` dashboard's "Measured" column in `data/migration.json` was left blank intentionally until `make bench` is run on official CI hardware (`ubuntu-latest`).
- When presenting, reference real figures measured on CI hardware rather than plan estimates.

---

## 3. Original "Next 48 Hours" Action List

1. Run `make serve` and verify Hugo renders cleanly without template errors.
2. Run `make bench` on the CI runner and paste verified measurements into `data/migration.json`.
3. Check out `layer5io/layer5` adjacent to this repo (`../layer5`) and run:
   ```bash
   make migrate-dry SRC=../layer5/src/collections
   ```
   Use the resulting `.bench/migration-report.json` to identify unknown React components and turn each into a migration issue.
4. Download the live sitemap and run:
   ```bash
   make verify-urls
   ```
5. Open the migration epic on GitHub and file the starter tasks outlined in `docs/GOOD_FIRST_ISSUES.md`.

