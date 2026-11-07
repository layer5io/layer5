# Architecture Decision Note: Hugo Theme Selection for Layer5.io (#8297)

- **Date**: 2026-11-07
- **Context**: Epic #8297 (Gatsby to Hugo Migration), Task Issue #8313 (Theme and Workflow Reuse).
- **Status**: Decided

---

## Decision

**Adopt a lightweight, custom Hugo architecture for `layer5.io` using Native Pattern Reuse: replicate Docsy's recursive sidebar and TOC patterns natively in `hugo/layouts/partials/` styled with Sistent tokens, without importing the external Docsy theme module.**

---

## Context & Problem Statement

Task #8313 investigated whether `layer5.io` should adopt the Docsy theme (`github.com/google/docsy v0.14.3`) used by `layer5io/docs` to standardize theme code and workflow assets across Layer5 properties.

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
   - In our technical spike (`spike/docsy-theme`), **8 out of 12 core requirements** were either "Not Covered" or "Needs Override" by Docsy.

2. **Performance Impact**:
   - Compiling Docsy's Bootstrap 5 SCSS adds an unavoidable **~7.8s to 8.5s fixed compile overhead** to every build (POC build jumped from 5.28s to 13.74s; 1,403-page benchmark jumped from 30.18s to 37.96s).
   - Peak RSS memory increased from 130.1 MB to 163.2 MB (+33.1 MB).
   - Per-page rendering throughput is identical (~18 ms/page); the entire penalty stems from upfront Sass compilation.

3. **Styling & Token Compatibility**:
   - Docsy depends on Bootstrap 5. Bootstrap's `_reboot.scss` resets global HTML defaults (typography, box-sizing, links), conflicting directly with `@sistent/sistent` design tokens and Layer5 CSS custom properties.
   - Scoping Bootstrap strictly to `/handbook/` requires fragile SCSS namespacing and creates duplicate CSS payloads.

4. **Alternative: Native Pattern Reuse**:
   - Copying Docsy's recursive menu navigation (`sidebar-tree.html`) and TOC logic directly into `hugo/layouts/partials/` gives us Docsy's best UX features.
   - Applying Layer5's Sistent tokens directly to these partials guarantees zero CSS conflict, avoids vendoring 350+ Docsy files, and eliminates the 8-second compile penalty completely.

---

## Consequences & Next Steps

1. **Marketing & Community Pages**: Maintain clean, modular Go templates in `hugo/layouts/` tailored directly to Layer5.
2. **Handbook (`/handbook/`)**: Implement `handbook-sidebar.html` and `handbook-toc.html` replicating Docsy's tree logic styled with Sistent tokens.
3. **Workflows**: PR preview deployment workflows (#8326, #8327, #8329, #8331, #8332) remain independent and fully functional regardless of theme selection.
