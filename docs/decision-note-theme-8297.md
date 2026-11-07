# Architecture Decision Note: Hugo Theme Selection for Layer5.io (#8297)

- **Date**: 2026-11-07
- **Context**: Epic #8297 (Gatsby to Hugo Migration), Task Issue #8313 (Theme and Workflow Reuse).
- **Status**: Decided

---

## Decision

**Adopt a lightweight, custom Hugo architecture for `layer5.io`, reusing Docsy patterns selectively only for the `/handbook/` section.**

---

## Context & Problem Statement

Task #8313 investigated whether `layer5.io` could adopt the Docsy theme (`github.com/google/docsy v0.14.3`) used by `layer5io/docs` to unify theme code and workflow assets across Layer5 properties.

---

## Evaluation & Findings

1. **Feature Fit**:
   - `layer5io/docs` is a documentation portal where Docsy's hierarchy, multi-versioning, and sidebars fit naturally.
   - `layer5.io` is a dynamic marketing and community site with:
     - Hero landing sections and animated terminals (#8306)
     - Sistent design tokens and theme toggling (#8306)
     - Interactive filterable Integrations catalog (#8309)
     - Dynamic Community Members directory (#8306)
     - Rich blog listing and related post indices (#8304)
     - Local Pagefind search integration (#8307)
   - In our technical spike (`spike/docsy-theme`), 8 out of 12 core requirements were either "Not Covered" or "Needs Override" by Docsy.

2. **Performance Impact**:
   - Compiling Docsy's Bootstrap 5 SCSS and partial hierarchy increased clean build time from **5.28s to 13.74s (+260%)** and increased peak RSS memory by **+32%**.
   - A standalone custom Hugo setup compiles the complete 1,400-page synthetic benchmark in **< 16s** with **~47 MB RAM**, keeping developer iteration blazing fast.

3. **Maintenance Overhead**:
   - Forcing Docsy onto marketing pages requires continuously overriding Docsy's upstream HTML templates and fighting Bootstrap styling to maintain Layer5's bespoke brand and Sistent tokens.

---

## Consequences & Next Steps

1. **Marketing & Community Pages**: Maintain clean, modular Go templates in `hugo/layouts/` tailored directly to Layer5.
2. **Handbook (`/handbook/`)**: Reuse Docsy's documentation navigation hierarchy (sidebar tree and TOC partials).
3. **Workflows**: PR preview deployment workflows (#8326, #8327, #8329, #8331) are already established and decoupled from any specific theme.
