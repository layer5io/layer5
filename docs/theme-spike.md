# Hugo Theme Spike: Docsy Theme Evaluation for Layer5.io (#8313)

- **Branch**: `spike/docsy-theme` (throwaway branch, never merged)
- **Base**: `hugo`
- **Context**: Epic #8297 (Gatsby to Hugo Migration), Task Issue #8313 (Theme & Workflow Reuse).

---

## 1. Upstream Audit: `layer5io/docs` Theme & Workflow Architecture

The `layer5io/docs` repository (the official documentation site for Layer5, Meshery, and Kanvas) was audited directly via the GitHub API on default branch `master`:

1. **Docsy Version**:
   - Recorded in [`go.mod`](https://github.com/layer5io/docs/blob/master/go.mod):
     ```
     module github.com/layer5io/docs
     go 1.26.4
     require (
         github.com/google/docsy v0.14.3 // indirect
         github.com/google/docsy/dependencies v0.7.2 // indirect
     )
     ```
2. **Configuration (`hugo.toml`)**:
   - Hugo module imports:
     ```toml
     [[module.imports]]
       path = "github.com/google/docsy"
       disable = false
     [[module.imports]]
       path = "github.com/google/docsy/dependencies"
       disable = false
     ```
   - Content structure: Uses `contentDir = "content/en"` and multi-mount architecture mapping `content/en` into `assets/contentimg` for image processing.
   - Formats: Custom LLMs output formats (`llms.txt`, `llms-full.txt`, Markdown indices).
3. **Layout Overrides (`layouts/`)**:
   - `layouts/404.html` (custom 404 page)
   - `layouts/home.html` (custom docs landing)
   - `layouts/index.llms`, `layouts/index.llmsfull`, `layouts/index.md` (AI content scrapers)
   - `layouts/release/` (release notes layouts)
   - `layouts/video/` (video library layouts)
   - `layouts/partials/` (custom header, footer, TOC, breadcrumbs, search)
   - `layouts/shortcodes/` (custom documentation shortcodes)
4. **Style Overrides (`assets/scss/`)**:
   - Over 15 custom SCSS partials overriding Docsy styles:
     - `_variables_project.scss` (Layer5 brand tokens and custom colors)
     - `_elements_project.scss`, `_fonts_project.scss`, `_footer_project.scss`
     - `_content_project.scss`, `_breadcrumb.scss`, `_image-modal_project.scss`
     - `_tax_project.scss`, `_video-landing_project.scss`, `_yt-embed-container.scss`
     - `td/` (Docsy theme component overrides)
5. **Workflows (`.github/workflows/`)**:
   - `build-docs-preview.yml` & `deploy-docs-preview.yml`: Previews for docs PRs.
   - `hugo.yaml`: Production build and GitHub Pages deployment.
   - `cloud-release-docs.yml` & `meshery-extension-release-docs.yml`: Automation for syncing extension documentation.
   - `discussion-data-files-update.yml`: Forum syncing.

---

## 2. Docsy Integration in Layer5.io Spike

In `spike/docsy-theme`:
- Added `hugo/go.mod` initializing `module github.com/layer5io/layer5/hugo`.
- Imported `github.com/google/docsy v0.14.3` and `github.com/google/docsy/dependencies v0.7.2` via `hugo mod vendor`.
- Configured `hugo/hugo.yaml` with `module.imports`.
- Successfully rendered all core sections:
  1. Home page (`/`)
  2. Blog post (`/blog/2026/why-we-are-moving-to-hugo/`)
  3. Integrations list (`/cloud-native-management/meshery/integrations/`)
  4. Handbook page (`/handbook/`)

---

## 3. Build Performance Benchmark (`/usr/bin/time -v`)

Ran 3 consecutive builds with and without Docsy using `/usr/bin/time -v hugo --minify --gc` under clean environments:

| Configuration | Run 1 | Run 2 | Run 3 | **Median** |
| :--- | :--- | :--- | :--- | :--- |
| **With Docsy Theme** | 13.29s (77.9 MB RSS) | 13.86s (78.7 MB RSS) | 13.74s (79.5 MB RSS) | **13.74s wall clock, 78.7 MB peak RSS** |
| **Without Theme (Baseline POC)** | 7.68s (145.5 MB RSS*) | 5.28s (58.6 MB RSS) | 5.03s (59.8 MB RSS) | **5.28s wall clock, 59.8 MB peak RSS** |

*\*Note: Run 1 without theme includes cold disk cache read.*

### Analysis:
- **Build Duration**: Importing Docsy adds **~8.46s** (a ~2.6x increase) to the compile step. This is driven by Docsy's runtime Sass compilation of full Bootstrap 5 and multi-layout resolution.
- **Memory Footprint**: Peak RSS increases by **~18.9 MB** (+32%), reaching ~78.7 MB. While this remains trivial compared to Gatsby's 2–4 GB requirement, it is noticeably heavier than Layer5's standalone POC.

---

## 4. Feature Gap Table

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

---

## 5. Rendered Page Visual Verification (Light & Dark Modes)

Screenshots captured with headless Chrome at `1280x900` resolution:

### 1. Home Page (`/`)
- **Light Mode**: `docs/screenshots/home-light.png`
- **Dark Mode**: `docs/screenshots/home-dark.png`

### 2. Blog Post (`/blog/2026/why-we-are-moving-to-hugo/`)
- **Light Mode**: `docs/screenshots/blog-light.png`
- **Dark Mode**: `docs/screenshots/blog-dark.png`

### 3. Integrations Catalog (`/cloud-native-management/meshery/integrations/`)
- **Light Mode**: `docs/screenshots/integrations-light.png`
- **Dark Mode**: `docs/screenshots/integrations-dark.png`

### 4. Community Handbook (`/handbook/`)
- **Light Mode**: `docs/screenshots/handbook-light.png`
- **Dark Mode**: `docs/screenshots/handbook-dark.png`

---

## 6. Strategic Recommendation

**Recommendation**: **Hybrid Architecture ("Use for Documentation Sections Only")**
- **Do NOT adopt Docsy as the global site theme for `layer5.io`**.
  *Reasoning*: `layer5.io` is primarily a rich product marketing, community, and catalog site. As proven by the gap table, 8 out of 12 core needs are either "Not Covered" or "Need Override" under Docsy. Forcing Docsy onto marketing pages requires overriding almost all templates and incurs a 2.6x build time penalty (~13.7s vs ~5.3s) for minimal code reuse.
- **DO reuse Docsy patterns selectively for the `/handbook/` section**:
  Docsy's left sidebar tree navigation, breadcrumbs, and floating right TOC are ideal for documentation and the Layer5 Handbook. We can either mount Docsy specifically for `/handbook/` or port Docsy's clean sidebar partials directly into our lightweight standalone Hugo architecture.
