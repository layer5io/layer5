# Draft Comment for Issue #8313: Docsy Theme Spike & Feasibility Findings

### Summary of Theme Spike on `spike/docsy-theme`

We conducted a technical evaluation of importing Docsy (v0.14.3, matching `layer5io/docs`) into `layer5io/layer5` to determine whether `layer5.io` can reuse the Docsy theme and workflows.

---

### Build Time & Memory Measurements (`/usr/bin/time -v`)

Tested 3 consecutive runs under clean environments:

| Metric | With Docsy Theme | Without Theme (Hugo POC Baseline) | Delta |
| :--- | :--- | :--- | :--- |
| **Median Build Duration** | **13.74 s** (13.29s, 13.86s, 13.74s) | **5.28 s** (7.68s, 5.28s, 5.03s) | **+8.46 s (+260%)** |
| **Median Peak Memory (RSS)** | **78.7 MB** (77.9MB, 78.7MB, 79.5MB) | **59.8 MB** (145.5MB, 58.6MB, 59.8MB) | **+18.9 MB (+32%)** |

*Takeaway*: Docsy adds a ~2.6x compilation overhead, primarily due to runtime Sass compilation of full Bootstrap 5 and complex partial trees.

---

### Feature Gap Table

| Need | Status | Evidence (File or Link) | Proposed Fix | Related Issue |
| :--- | :--- | :--- | :--- | :--- |
| **Home and landing layouts** | Needs override | Rendered `hugo/layouts/index.html`; Docsy provides doc home (`_vendor/.../docsy/layouts/index.html`) | Override layout: Keep Layer5 marketing layout in `hugo/layouts/index.html` | #8306 |
| **Header and mega-menu** | Needs override | Rendered `hugo/layouts/partials/header.html`; Docsy provides doc navbar (`layouts/partials/navbar.html`) | Keep our own partial (`layouts/partials/header.html`) with brand SVG and Sistent menu structure | #8306 |
| **Dark/light themes with Sistent tokens** | With styling | Verified in `assets/css/main.css` vs `layer5io/docs:assets/scss/_variables_project.scss` | Provide custom Sistent design tokens via CSS variables / SCSS variables | #8306 |
| **Blog (filters, authors, related posts)** | Needs override | Rendered `hugo/layouts/blog/single.html`; Docsy's `layouts/blog/` lacks author chips, custom tags, and permalink structure | Override layout: Keep Layer5 blog templates (`layouts/blog/*`) | #8306, #8304 |
| **Handbook sidebar and TOC** | Provided as-is | Rendered `hugo/layouts/handbook/` and verified Docsy `layouts/partials/sidebar-tree.html` & `toc.html` | Use Docsy's docs layouts and sidebar navigation tree directly for `/handbook/` | #8306 |
| **Members directory (role filter)** | Not covered | Rendered `hugo/layouts/members/list.html`; absent in Docsy | Keep our own custom layout (`layouts/members/list.html`) | #8306 |
| **Integrations catalog (category filter)** | Not covered | Rendered `hugo/layouts/integrations/list.html`; absent in Docsy | Keep our own custom layout (`layouts/integrations/list.html`) and filter script | #8306, #8309 |
| **Search (Pagefind vs theme search)** | Needs override | Verified Pagefind integration in `hugo/assets/js/main.js`; Docsy defaults to Algolia/Lunr (`layouts/partials/search-input.html`) | Keep our own Pagefind implementation (subpath safe, zero SaaS cost, offline) | #8306, #8307 |
| **Forms and newsletter** | Not covered | Rendered `hugo/layouts/partials/newsletter.html`; absent in Docsy | Keep our own partial (`layouts/partials/newsletter.html`) and client-side submit handler | #8306 |
| **Calendar, topology, Meshery embed** | Not covered | Checked Docsy shortcodes; no interactive canvas or Meshery live embeds | Keep / author custom shortcodes (`layouts/shortcodes/*`) | #8306, #8309 |
| **Cookie consent and analytics** | Provided as-is / with styling | Verified Docsy `layouts/partials/analytics.html` (Google Analytics supported) | Use Docsy analytics partial; style custom consent banner | #8306 |
| **SEO (OpenGraph, JSON-LD, sitemap)** | Provided as-is | Verified `_vendor/.../docsy/layouts/partials/head.html` and `hugo/layouts/partials/seo.html` | Use Docsy head metadata, supplemented with Layer5 Organization JSON-LD | #8306 |

*(Note: Zero rows are marked "unverified" — every row was verified by rendering templates or reading source files in `_vendor/github.com/google/docsy/` and `layer5io/docs`).*

---

### Recommendation

**Recommendation**: **"Use for Documentation Sections Only" (Hybrid Approach)**

1. **Do NOT apply Docsy globally across `layer5.io`**:
   `layer5.io` is a product marketing, community, and catalogue site. 8 out of the 12 core site features require overrides or are not covered by Docsy. Forcing Docsy onto marketing pages creates maintenance debt (overriding upstream Bootstrap templates) and slows down builds by 2.6x.
2. **Reuse Docsy selectively for the `/handbook/` section**:
   Docsy's left sidebar tree navigation, breadcrumb generation, and right-hand TOC are high quality and match the documentation experience. We should either scope Docsy's layout to `content/handbook/` or port its sidebar navigation partials into our lightweight standalone Hugo architecture.
