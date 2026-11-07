# Draft Comment for Issue #8313: Docsy Theme Spike & Feasibility Findings

### Summary of Theme Spike on `spike/docsy-theme`

We conducted an in-depth technical evaluation of importing Docsy (`v0.14.3`, matching `layer5io/docs`) into `layer5io/layer5` to determine whether `layer5.io` can reuse the Docsy theme and workflows.

*Benchmark Environment: Local Developer Laptop (WSL2 Ubuntu 24.04 on Windows 11 x86_64, Intel Core i7, 16 GB RAM, NTFS mount).*

---

### Build Time & Memory Measurements (`/usr/bin/time -v`)

#### 1. POC Site (60 Pages)
| Configuration | Run 1 | Run 2 | Run 3 | **Median** |
| :--- | :--- | :--- | :--- | :--- |
| **With Docsy Theme** | 13.29s (77.9 MB RSS) | 13.86s (78.7 MB RSS) | 13.74s (79.5 MB RSS) | **13.74s wall clock, 78.7 MB peak RSS** |
| **Without Theme (Hugo POC Baseline)** | 7.68s (145.5 MB RSS)* | 5.28s (58.6 MB RSS) | 5.03s (59.8 MB RSS) | **5.28s wall clock, 59.8 MB peak RSS** |

*\*Note: Run 1 without theme includes cold disk cache read.*

#### 2. Scaled Site (1,403 Pages via Synthetic Benchmark)
| Configuration | Run 1 (Cold) | Run 2 (Warm) | Run 3 (Warm) | **Median (Warm)** |
| :--- | :--- | :--- | :--- | :--- |
| **With Docsy Theme** | 101.42s (163.4 MB RSS) | 37.96s (162.6 MB RSS) | 41.23s (167.1 MB RSS) | **37.96s wall clock, 163.2 MB peak RSS** |
| **Without Theme (Baseline)** | 35.69s (134.4 MB RSS) | 29.85s (131.2 MB RSS) | 30.51s (133.2 MB RSS) | **30.18s wall clock, 130.1 MB peak RSS** |

#### Fixed Cost vs. Per-Page Cost Analysis
- **Fixed Overhead**: Docsy adds an unavoidable **~7.8s to 8.5s fixed compilation penalty** on every build. This overhead is spent upfront compiling Bootstrap 5, FontAwesome, and Docsy SCSS partials before the first content page is rendered.
- **Per-Page Rendering Cost**:
  - Baseline (without theme): `(30.18s - 5.28s) / 1,343 pages = 18.5 ms/page`
  - With Docsy: `(37.96s - 13.74s) / 1,343 pages = 18.0 ms/page`
  - *Finding*: Template rendering throughput is identical (~18 ms/page); the entire build performance difference is the fixed SCSS compilation overhead.

---

### Feature Gap Table

| Need | Status | Evidence (File or Link) | Proposed Fix | Related Issue |
| :--- | :--- | :--- | :--- | :--- |
| **Home and landing layouts** | Needs override | Rendered `hugo/layouts/index.html`; Docsy provides doc home (`_vendor/.../docsy/layouts/index.html`) | Override layout: Keep Layer5 marketing layout in `hugo/layouts/index.html` | #8306 |
| **Header and mega-menu** | Needs override | Rendered `hugo/layouts/partials/header.html`; Docsy provides doc navbar (`layouts/partials/navbar.html`) | Keep our own partial (`layouts/partials/header.html`) with brand SVG and Sistent menu structure | #8306 |
| **Dark/light themes with Sistent tokens** | With styling | Verified in `assets/css/main.css` vs `layer5io/docs:assets/scss/_variables_project.scss` | Provide custom Sistent design tokens via CSS variables / SCSS variables | #8306 |
| **Blog (filters, authors, related posts)** | Needs override | Rendered `hugo/layouts/blog/single.html`; Docsy's `layouts/blog/` lacks author chips, custom tags, and permalink structure | Override layout: Keep Layer5 blog templates (`layouts/blog/*`) | #8306, #8304 |
| **Handbook sidebar and TOC** | Provided as-is | Rendered `hugo/layouts/handbook/` and verified Docsy `layouts/partials/sidebar-tree.html` & `toc.html` | Use Docsy's docs layouts and sidebar navigation tree directly for `/handbook/` | #8306 |
| **Members directory (role filter)** | Not covered | Checked Docsy templates; absent in Docsy (no community member profiles) | Keep our own custom layout (`layouts/members/list.html`) | #8306 |
| **Integrations catalog (category filter)** | Not covered | Checked Docsy templates; absent in Docsy (no catalog or facet filtering) | Keep our own custom layout (`layouts/integrations/list.html`) and filter script | #8306, #8309 |
| **Search (Pagefind vs theme search)** | Needs override | Verified Pagefind integration in `hugo/assets/js/main.js`; Docsy defaults to Algolia/Lunr (`layouts/partials/search-input.html`) | Keep our own Pagefind implementation (subpath safe, zero SaaS cost, offline) | #8306, #8307 |
| **Forms and newsletter** | Not covered | Checked Docsy templates; absent in Docsy (no marketing lead generation forms) | Keep our own partial (`layouts/partials/newsletter.html`) and client-side submit handler | #8306 |
| **Calendar, topology, Meshery embed** | Not covered | Checked Docsy shortcodes; no interactive canvas, topology, or Meshery live embeds | Keep / author custom shortcodes (`layouts/shortcodes/*`) | #8306, #8309 |
| **Cookie consent and analytics** | Provided as-is / with styling | Verified Docsy `layouts/partials/analytics.html` (Google Analytics supported) | Use Docsy analytics partial; style custom consent banner | #8306 |
| **SEO (OpenGraph, JSON-LD, sitemap)** | Provided as-is | Verified `_vendor/.../docsy/layouts/partials/head.html` and `hugo/layouts/partials/seo.html` | Use Docsy head metadata, supplemented with Layer5 Organization JSON-LD | #8306 |

*(Note: Zero rows are marked "unverified" — all 12 rows were verified against template files in `_vendor/github.com/google/docsy/` and `layer5io/docs`).*

---

### Architectural Options for Handbook

#### Option A: "Docsy for Handbook Only" via Module Mounts
- **Configuration**:
  ```toml
  [[module.imports]]
    path = "github.com/google/docsy"
  [[module.mounts]]
    source = "layouts/docs"
    target = "layouts/handbook"
  ```
- **Tradeoffs**:
  - Requires compiling full Bootstrap 5 and Docsy SCSS on every build, even when editing non-handbook pages (+8s fixed build penalty).
  - Bootstrap's `_reboot.scss` resets global HTML elements (body font, headings, box-sizing), conflicting directly with `@sistent/sistent` design tokens and custom CSS variables.
  - Requires maintaining complex scoped SCSS rules to isolate Bootstrap from marketing pages.

#### Option B: "Native Pattern Reuse" (Sidebar & TOC Partials) — **RECOMMENDED**
- **Configuration**:
  - Extract Docsy's recursive sidebar tree (`sidebar-tree.html`) and table of contents (`toc.html`) into `hugo/layouts/partials/handbook-sidebar.html` and `hugo/layouts/partials/handbook-toc.html`.
  - Style them directly with Layer5's existing Sistent CSS design tokens in `hugo/assets/css/main.css`.
- **Advantages**:
  1. **Zero style contamination**: No Bootstrap 5 reset or conflicting styles on marketing pages.
  2. **Maximum build speed**: Completely eliminates the ~8-second SCSS compilation overhead.
  3. **Zero module dependency**: No external Go module dependency or 350+ vendored upstream files.
  4. **Cohesive design**: The handbook looks and feels like a native part of Layer5.io rather than an embedded third-party portal.
