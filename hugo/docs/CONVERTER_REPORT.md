# Hugo Migration: Converter Report

> Generated automatically by `scripts/generate-converter-report.mjs` from a dry run with `--exclude sistent`.

## 1. Summary Totals

| Metric | Value |
|---|---|
| **Documents Converted** | 1006 / 1006 |
| **Excluded Collections** | `sistent` (138 files skipped) |
| **Skipped Templates** | 11 |
| **Files with Warnings** | **15** |
| **Unowned Warning Files** | **1** |
| **Zero-Byte Assets Logged** | 4 |
| **Asset Normalization Renames** | 26 |

## 2. Primary Owner Breakdown

Each warning file is assigned exactly one primary owner. The per-owner file counts sum exactly to the total files with warnings.
Each file lists one primary owner; a file only becomes warning-free when all of its warnings are fixed.

| Primary Owner Issue | Files | Scope / Focus |
|---|---|---|
| `#8402` | 9 | Content hand-fix backlog (wrapper indents, bare links, button props) |
| `#8456` | 4 | P3-07 Handbook bespoke components & data loops (`BadgeRow`, `Table`, `React.Fragment`, `Row/Col`, `mentorship-programs`, `recognition`, `repository-overview`) |
| `Unassigned` | 1 | Files without an assigned owner issue |
| `#8401` | 1 | Imported assets backlog (`<img src={var}>`, `<CTA_FullWidth image={var}>`) |
| **Total** | **15** | **100% accounted for (sum equals files with warnings)** |

## 3. Warnings Breakdown by Key

| Warning Category | Occurrences | Primary Owner Issue | Description |
|---|---|---|---|
| `non-literal prop expression` | 42 | #8401 / #8402 | JSX expression props (e.g. `image={var}`, `$url={link}`) |
| `bare-relative link` | 7 | #8402 | Links with bare-relative paths (e.g. `<Link to="newcomer">`) |
| `zero-byte asset` | 4 | #8308 | Zero-byte SVG files in source integrations |
| `unknown components` | 3 | Phase 3 | Components not yet mapped to Hugo shortcodes |
| `<img>: "/blog/2024/11-05-what-is-the-kanvas-catalog/import-design-gif.gif" is missing from the page bundle` | 2 | #8402 | Manual review |
| `duplicate alias` | 2 | #8402 | Manual review |
| `external prop warning` | 1 | #8402 | Non-http(s) link marked with external prop |
| `missing front matter` | 1 | #8402 | Document missing YAML front matter; minimal front matter generated |

## 4. Unknown Components Inventory

| Component | Occurrences | Owning Issue / Phase | Proposed Solution |
|---|---|---|---|
| `<BadgeRow>` | 3 | #8456 (P3-07) | Handbook recognition badge row component |
| `<React.Fragment>` | 2 | #8456 (P3-07) | React wrapper in repository overview maintainer loop |
| `<HandbookFaqAccordion>` | 1 | #8456 (P3-07) | FAQ accordion rendering `site.Data.handbook.faq` |

## 5. Warnings Inventory by File

Every warning file outside Sistent is tracked below with its primary owning issue.

| File | Warning Details | Primary Owner |
|---|---|---|
| `blog/2024/11-05-what-is-the-kanvas-catalog/index.mdx` | <img>: "/blog/2024/11-05-what-is-the-kanvas-catalog/import-design-gif.gif" is missing from the page bundle<br><img>: "/blog/2024/11-05-what-is-the-kanvas-catalog/import-design-gif.gif" is missing from the page bundle | `Unassigned` |
| `blog/2026/04-02-open-source-maintenance-ai-contributors/index.mdx` | non-literal expression for "src" on <img> | `#8401` |
| `events/2024/kubecon-EU-2024/index.mdx` | events/2024/kubecon-EU-2024/index.mdx: <Button> has external="true" on non-http(s) URL "/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" (<Button secondary title="KubeCon EU 2024 CNCF TAG Network Slide" url="/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" external={ true } />); review manually | `#8402` |
| `handbook/faq/index.mdx` | unknown components: HandbookFaqAccordion | `#8456` |
| `handbook/mentorship-programs/index.mdx` | non-literal expression for "class" on <div><br>non-literal expression for "key" on <div><br>non-literal expression for "key" on <div><br><Button>: non-literal expression for "$url"<br>non-literal expression for "src" on <img><br>non-literal expression for "alt" on <img> | `#8456` |
| `handbook/recognition/index.mdx` | non-literal expression for "style" on <h3><br>non-literal expression for "style" on <div><br>non-literal expression for "style" on <table><br>non-literal expression for "style" on <tr><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <table><br>non-literal expression for "style" on <tr><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <table><br>non-literal expression for "style" on <tr><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>non-literal expression for "style" on <th><br>unknown components: BadgeRow | `#8456` |
| `handbook/repository-overview/index.mdx` | non-literal expression for "key" on <div><br>non-literal expression for "key" on <table><br>non-literal expression for "key" on <tbody><br>non-literal expression for "href" on <a><br>non-literal expression for "src" on <img><br><Link>: non-literal expression for "to"<br>non-literal expression for "href" on <a><br>non-literal expression for "key" on <div><br>non-literal expression for "key" on <table><br>non-literal expression for "key" on <tbody><br>non-literal expression for "class" on <tr><br>non-literal expression for "class" on <img><br>non-literal expression for "src" on <img><br><Link>: non-literal expression for "to"<br>non-literal expression for "href" on <a><br>unknown components: React.Fragment | `#8456` |
| `news/2021/2021-06-18-5-lesser-known-but-extremely-powerful-Kubernetes-service-mesh-tools/index.mdx` | duplicate alias "/news/service-mesh-offers-promising-solution-for-cloud-native-networking/" also claimed by news/2020/2020-12-04-service-mesh-offers-promising-solution-for-cloud-native-networking/index.mdx | `#8402` |
| `programs/gsoc-2023/index.mdx` | duplicate alias "/gsoc/2022/" also claimed by programs/gsoc-2022/index.mdx | `#8402` |
| `programs/hacktoberfest-2020/index.mdx` | programs/hacktoberfest-2020/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/hacktoberfest-2021/index.mdx` | programs/hacktoberfest-2021/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/hacktoberfest-2022/index.mdx` | programs/hacktoberfest-2022/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/lfx-2025/lfx-2025.mdx` | programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "community/members/mia-grenell" (<Link to ="community/members/mia-grenell">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually | `#8402` |
| `resources/articles/layer5-academy-vs-moocit/index.mdx` | no front matter found; generated a minimal one | `#8402` |
| `resources/tutorials/docker-swarm/index.mdx` | resources/tutorials/docker-swarm/index.mdx: <Link> has bare-relative "to" value "../../articles/kubernetes/management-of-kubernetes" (<Link to="../../articles/kubernetes/management-of-kubernetes">); review manually | `#8402` |

## 6. Owner Issues Reference

- **#8308** — [Hugo] Phase 1 · Decision: images layout and thumbnail handling: Covers out-of-bundle thumbnails and zero-byte assets.
- **#8385** — [Hugo] Phase 2 · Shortcodes & converter rules for Blockquote, BlockquoteAlt, Callout, and InlineQuotes: Addressed by PR #8395.
- **#8401** — [Hugo] Imported assets backlog: Local images and PDFs referenced as imported JSX variables.
- **#8402** — [Hugo] Content hand-fix backlog: Non-literal Button/Link expressions, bare-relative URLs, wrapper indentation hazards.
- **#8453** — [Hugo] Phase 3 · Blog bespoke components (P3-01): `MeetTheMaintainer`, `MeetTheMeshMate`, diagrams.
- **#8454** — [Hugo] Phase 3 · Resources bespoke components and case study blocks (P3-02): Case study blocks, `FAQ`, `PlaygroundCTA`, `DockerExtensionCTA`.
- **#8455** — [Hugo] Phase 3 · Events forms and layout components (P3-04): `CommonForm`, `ContentForm`, `Grid2`.
- **#8456** — [Hugo] Phase 3 · Handbook bespoke components and data loops (P3-07): `BadgeRow`, `Table`, `HandbookFaqAccordion`, `React.Fragment`, data loops (`mentorship-programs`, `recognition`, `repository-overview`).
- **#8457** — [Hugo] Phase 3 · Programs & Careers bespoke components (P3-08): `PositionApply`, `LfxPageNav`, `Row`, `Col`.
- **#8458** — [Hugo] Phase 3 · Projects layout components (P3-13): `Row`, `Col`.
