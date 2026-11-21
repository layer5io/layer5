# Hugo Migration: Converter Report

> Generated automatically by `scripts/generate-converter-report.mjs` from a dry run with `--exclude sistent`.

## 1. Summary Totals

| Metric | Value |
|---|---|
| **Documents Converted** | 1006 / 1006 |
| **Excluded Collections** | `sistent` (138 files skipped) |
| **Skipped Templates** | 11 |
| **Files with Warnings** | **92** |
| **Unowned Warning Files** | **0** |
| **Zero-Byte Assets Logged** | 6 |
| **Asset Normalization Renames** | 26 |

## 2. Primary Owner Breakdown

Each warning file is assigned exactly one primary owner. The per-owner file counts sum exactly to the total files with warnings.
Each file lists one primary owner; a file only becomes warning-free when all of its warnings are fixed.

| Primary Owner Issue | Files | Scope / Focus |
|---|---|---|
| `#8402` | 28 | Content hand-fix backlog (wrapper indents, bare links, button props) |
| `#8453` | 16 | P3-01 Blog bespoke components (`MeetTheMaintainer`, `MeetTheMeshMate`, diagrams) |
| `#8308` | 16 | Out-of-bundle thumbnails and asset layout |
| `#8401` | 11 | Imported assets backlog (`<img src={var}>`, `<CTA_FullWidth image={var}>`) |
| `#8457` | 8 | P3-08 Programs & Careers bespoke components (`PositionApply`, `LfxPageNav`, `Row`, `Col`) |
| `#8454` | 7 | P3-02 Resources & Books bespoke components (`FAQ`, `CommonForm`, `Table`, case studies) |
| `#8456` | 5 | P3-07 Handbook bespoke components (`BadgeRow`, `Table`, `React.Fragment`, `Row/Col`) |
| `#8455` | 1 | P3-04 Events bespoke forms (`CommonForm`, `Grid2`) |
| **Total** | **92** | **100% accounted for (sum equals files with warnings)** |

## 3. Warnings Breakdown by Key

| Warning Category | Occurrences | Primary Owner Issue | Description |
|---|---|---|---|
| `unknown components` | 40 | #8385 / Phase 3 | Components not yet mapped to Hugo shortcodes |
| `non-literal prop expression` | 33 | #8401 / #8402 | JSX expression props (e.g. `image={var}`, `$url={link}`) |
| `thumbnail outside page bundle` | 32 | #8308 | Images in `thumbnail` or `darkthumbnail` pointing to `../../assets` |
| `wrapper indent hazard` | 19 | #8402 | Wrapper bodies with 4+ space indents that could trigger Markdown code blocks |
| `bare-relative link` | 7 | #8402 | Links with bare-relative paths (e.g. `<Link to="newcomer">`) |
| `zero-byte asset` | 6 | #8308 | Zero-byte SVG files in source integrations |
| `external prop warning` | 1 | #8402 | Non-http(s) link marked with external prop |
| `missing front matter` | 1 | #8402 | Document missing YAML front matter; minimal front matter generated |

## 4. Unknown Components Inventory

| Component | Occurrences | Owning Issue / Phase | Proposed Solution |
|---|---|---|---|
| `<Col>` | 24 | #8457 (P3-08) / #8458 (P3-13) | Container grid column layout partial/shortcode |
| `<MeetTheMaintainer>` | 11 | #8453 (P3-01) | Blog interview header component |
| `<PositionApply>` | 7 | #8457 (P3-08) | Job application CTA button/link |
| `<Row>` | 4 | #8457 (P3-08) / #8458 (P3-13) | Container grid row layout partial/shortcode |
| `<Grid2>` | 3 | #8455 (P3-04) | Event grid container |
| `<BadgeRow>` | 3 | #8456 (P3-07) | Handbook recognition badge row component |
| `<FAQ>` | 3 | #8454 (P3-02) | Resources FAQ accordion component |
| `<React.Fragment>` | 2 | #8456 (P3-07) | React wrapper in repository overview maintainer loop |
| `<CommonForm>` | 2 | #8455 (P3-04) | Event signup form island |
| `<MeshkitMesheryAdapterLib>` | 1 | #8453 (P3-01) | Architecture diagram component in blog post |
| `<BufProtocol>` | 1 | #8453 (P3-01) | Bespoke SVG diagram component in blog post |
| `<PerfbytesPodcast>` | 1 | #8453 (P3-01) | Audio/podcast player embed in blog post |
| `<MeetTheMeshMate>` | 1 | #8453 (P3-01) | Blog MeshMate profile component |
| `<Blog>` | 1 | #8453 (P3-01) | Bespoke blog listing component |
| `<HandbookFaqAccordion>` | 1 | #8456 (P3-07) | FAQ accordion rendering `site.Data.handbook.faq` |
| `<ContentForm>` | 1 | #8455 (P3-04) | Event speaker registration form island |
| `<LfxPageNav>` | 1 | #8457 (P3-08) | LFX program navigation pills |
| `<HPEintro>` | 1 | #8454 (P3-02) | HPE case study intro block |
| `<HPEfacts>` | 1 | #8454 (P3-02) | HPE case study facts sidebar |
| `<HPEbenefits>` | 1 | #8454 (P3-02) | HPE case study benefits section |
| `<INFORintro>` | 1 | #8454 (P3-02) | Infor case study intro block |
| `<INFORfacts>` | 1 | #8454 (P3-02) | Infor case study facts sidebar |
| `<INFORbenefits>` | 1 | #8454 (P3-02) | Infor case study benefits section |
| `<TCSintro>` | 1 | #8454 (P3-02) | TCS case study intro block |
| `<TCSfacts>` | 1 | #8454 (P3-02) | TCS case study facts sidebar |
| `<TCSbenefits>` | 1 | #8454 (P3-02) | TCS case study benefits section |
| `<PlaygroundCTA>` | 1 | #8454 (P3-02) | Meshery playground banner CTA |
| `<DockerExtensionCTA>` | 1 | #8454 (P3-02) | Docker extension banner CTA |
| `<Table>` | 1 | #8456 (P3-07) | HTML table wrapper in handbook |

## 5. Warnings Inventory by File

Every warning file outside Sistent is tracked below with its primary owning issue.

| File | Warning Details | Primary Owner |
|---|---|---|
| `blog/2021/2021-02-04-meet-the-maintainer-michael-gfeller/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: MeetTheMaintainer | `#8453` |
| `blog/2021/2021-02-07-meshkit-and-meshery-adapter-library/index.mdx` | unknown components: MeshkitMesheryAdapterLib | `#8453` |
| `blog/2021/2021-04-05-meshmate-of-the-year-2020-nikhil-ladha/index.mdx` | <Blockquote>: non-literal expression for "style"<br><BlockquoteAlt>: non-literal expression for "style"<br><BlockquoteAlt>: non-literal expression for "style"<br><BlockquoteAlt>: non-literal expression for "style"<br><BlockquoteAlt>: non-literal expression for "style" | `#8402` |
| `blog/2021/2021-04-16-meet-the-maintainer-jash-patel/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: MeetTheMaintainer | `#8453` |
| `blog/2021/2021-04-24-buf-protocols/index.mdx` | unknown components: BufProtocol | `#8453` |
| `blog/2021/2021-06-25-she-code-africa-contributhon-boot-camp/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2021/2021-09-20-service-mesh-specifications-and-why-they-matter/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2021/2021-10-04-ccoss-meshery-event/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2021/2021-10-09-an-introduction-to-meshery/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-01-07-Recap-KubeCon-China-TAG-Network-talk/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-01-22-the-story-of-meshery-1000-stars/index.mdx` | <Blockquote>: non-literal expression for "style"<br><Blockquote>: non-literal expression for "style"<br><Blockquote>: non-literal expression for "style" | `#8402` |
| `blog/2022/2022-05-10-dockercon-22-hashicorp-talk/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-05-20-meshmate-of-the-year-2021-aditya-chatterjee/index.mdx` | <Blockquote>: non-literal expression for "style"<br><BlockquoteAlt>: non-literal expression for "style" | `#8402` |
| `blog/2022/2022-05-27-debug-envoy-proxy/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-06-01-perfbytes-podcast/index.mdx` | unknown components: PerfbytesPodcast | `#8453` |
| `blog/2022/2022-06-07-week-open-source-contributions-with-layer5/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-07-28-managing-multiple-clusters-with-meshery/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2022/2022-10-19-kubeconna2022/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2023/04-12-meshery-surpasses-1000-contributors/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2023/05-24-meet-the-meshmate-yash-sharma/index.mdx` | unknown components: MeetTheMeshMate | `#8453` |
| `blog/2023/08-21-layer5-badge-program/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: Blog | `#8453` |
| `blog/2024/02-13-what-is-platform-engineering/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2024/02-24-open-container-image-meshery/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2024/06-21-meshery-5000-star-milestone/index.mdx` | <Blockquote>: non-literal expression for "style"<br><Blockquote>: non-literal expression for "style" | `#8402` |
| `blog/2024/07-01-meet-the-maintainer-xin-huang/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2024/09-08-meet-the-maintainer-hussaina-begum/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2024/09-27-meet-the-maintainer-aisuko-li/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2024/10-09-docker-build-warning/index.mdx` | <BlockquoteAlt>: non-literal expression for "style" | `#8402` |
| `blog/2024/10-22-meet-the-maintainer-aadhitya-amarendiran/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2024/11-01-meet-the-maintainer-yash-sharma/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2025/05-28-meet-the-maintainer-ian-whitney/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2025/08-27-meet-the-maintainer-aabid-sofi/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2025/11-03-2025-understanding-configmaps/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `blog/2025/12-28-gemini-cli-trusted-directories/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2026/03-02-meshery-hits-10000-github-stars/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2026/03-26-meet-the-maintainer-sangram-rath/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2026/04-02-open-source-maintenance-ai-contributors/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2026/04-03-claude-code-skills-not-found-sessionstart-hook/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2026/06-22-meet-the-maintainer-mia-grenell/index.mdx` | unknown components: MeetTheMaintainer | `#8453` |
| `blog/2026/09-14-disable-claude-code-session-feedback-survey/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `blog/2026/09-16-ai-system-1-versus-system-2-tasks/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `careers/digital-marketing-internship/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/software-engineer/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/software-engineering-internship/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/ui-engineer/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/ui-visual-designer-internship/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/ui-visual-designer/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `careers/ux-engineer/index.mdx` | unknown components: Col, PositionApply | `#8457` |
| `events/2024/kubecon-EU-2024/index.mdx` | events/2024/kubecon-EU-2024/index.mdx: <Button> has external="true" on non-http(s) URL "/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" (<Button secondary title="KubeCon EU 2024 CNCF TAG Network Slide" url="/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" external={ true } />); review manually | `#8402` |
| `events/2024/making-the-cncf-landscape-interactive-with-meshery/index.mdx` | <Button>: non-literal expression for "style" | `#8402` |
| `events/2025/hacktoberfest-2025/index.mdx` | unknown components: Grid2 | `#8455` |
| `handbook/faq/index.mdx` | unknown components: HandbookFaqAccordion | `#8456` |
| `handbook/mentorship-programs/index.mdx` | <Button>: non-literal expression for "$url"<br>unknown components: Row, Col | `#8456` |
| `handbook/recognition/index.mdx` | unknown components: BadgeRow | `#8456` |
| `handbook/repository-overview/index.mdx` | <Link>: non-literal expression for "to"<br><Link>: non-literal expression for "to"<br>unknown components: React.Fragment | `#8456` |
| `handbook/writing-program/index.mdx` | unknown components: Row, Col, ContentForm | `#8456` |
| `news/2022/2022-05-18-meshmark-the-cloud-native-value-measurement/meshmark-the-cloud-native-value-measurement.md` | thumbnail: "../../../../assets/images/meshmark/stacked/meshmark-dark-full.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/meshmark/stacked/meshmark-dark-full.webp" is outside the page bundle — move it next to index.md<br><Blockquote>: non-literal expression for "style" | `#8308` |
| `programs/communitybridge/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `programs/gsoc-2021/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `programs/hacktoberfest-2020/index.mdx` | programs/hacktoberfest-2020/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/hacktoberfest-2021/index.mdx` | programs/hacktoberfest-2021/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/hacktoberfest-2022/index.mdx` | programs/hacktoberfest-2022/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | `#8402` |
| `programs/lfx-2025/lfx-2025.mdx` | programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "community/members/mia-grenell" (<Link to ="community/members/mia-grenell">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually | `#8402` |
| `programs/lfx-2026/lfx-2026.mdx` | unknown components: LfxPageNav | `#8457` |
| `programs/sca-contributhon/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `resources/articles/devops-adoption/index.mdx` | <Link>: non-literal expression for "to"<br><Link>: non-literal expression for "to" | `#8401` |
| `resources/articles/gitops/what-is-gitops.mdx` | thumbnail: "../../../../assets/images/socialIcons/github-dark.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/socialIcons/github-light.svg" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/articles/istio-at-a-glance/istio-at-a-glance.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/articles/kubernetes/archtiecture-101/k8s-architecture-101.mdx` | thumbnail: "../kubernetes.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../kubernetes.svg" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/articles/kubernetes/getting-started-with-kubernetes/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `resources/articles/kubernetes/management-of-kubernetes/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | `#8401` |
| `resources/articles/layer5-academy-vs-moocit/index.mdx` | no front matter found; generated a minimal one | `#8402` |
| `resources/articles/value-of-a-service-mesh/index.mdx` | <ResourcesWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | `#8402` |
| `resources/case-study/hpes-adoption-of-meshery-and-kanvas/index.mdx` | <InlineQuotes>: non-literal expression for "image"<br><InlineQuotes>: non-literal expression for "image"<br>unknown components: HPEintro, HPEfacts, HPEbenefits | `#8454` |
| `resources/case-study/infors-adoption-of-meshery-and-kanvas/index.mdx` | unknown components: INFORintro, INFORfacts, INFORbenefits | `#8454` |
| `resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas/index.mdx` | <InlineQuotes>: non-literal expression for "image"<br>unknown components: TCSintro, TCSfacts, TCSbenefits | `#8454` |
| `resources/faq/internship-faq.mdx` | thumbnail: "../../../assets/images/workshops/workshops.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/workshops/workshops.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | `#8308` |
| `resources/faq/layer5-faq.mdx` | thumbnail: "../../../assets/images/layer5/layer5-only/png/layer5-gradient.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/layer5/layer5-only/png/layer5-gradient.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | `#8308` |
| `resources/faq/meshery-faq.mdx` | thumbnail: "../../../assets/images/meshery/text-only/meshery-logo-dark-text.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/meshery/text-only/meshery-logo-dark-text.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | `#8308` |
| `resources/recorded-webinars/introduction-to-meshery.mdx` | thumbnail: "../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/beginner-guide-to-contributing-to-meshery-and-mesheryctl.mdx` | thumbnail: "../../../assets/images/tutorials/intro-meshery-ctl.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-meshery-ctl.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/contributing-to-meshery-API-swagger-documentation.mdx` | thumbnail: "../../../assets/images/tutorials/swagger-logo.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/swagger-logo.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/docker-swarm/index.mdx` | resources/tutorials/docker-swarm/index.mdx: <Link> has bare-relative "to" value "../../articles/kubernetes/management-of-kubernetes" (<Link to="../../articles/kubernetes/management-of-kubernetes">); review manually<br>unknown components: PlaygroundCTA, DockerExtensionCTA | `#8454` |
| `resources/tutorials/introduction-to-all-layer5-repositories.mdx` | thumbnail: "../../../assets/images/tutorials/all-repos-layer5.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/all-repos-layer5.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/introduction-to-contributing-to-meshery.mdx` | thumbnail: "../../../assets/images/tutorials/intro-to-meshery.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-to-meshery.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/introduction-to-meshey-ctl.mdx` | thumbnail: "../../../assets/images/tutorials/golang-meshery-ctl.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/golang-meshery-ctl.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/tutorial-on-contributing-to-layer5-and-working-with-git.mdx` | thumbnail: "../../../assets/images/tutorials/layer5-walkthrough.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/layer5-walkthrough.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/tutorial-on-gatsby.mdx` | thumbnail: "../../../assets/images/tutorials/intro-to-gatsby.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-to-gatsby.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `resources/tutorials/working-with-meshery-docs-and-jekyll.mdx` | thumbnail: "../../../assets/images/tutorials/docs-jekyll.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/docs-jekyll.webp" is outside the page bundle — move it next to index.md | `#8308` |
| `service-mesh-books/service-mesh-patterns/index.mdx` | unknown components: Table | `#8454` |
| `service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-Edition/index.mdx` | unknown components: CommonForm | `#8454` |
| `service-mesh-books/the-enterprise-path-to-service-mesh-architectures/index.mdx` | unknown components: CommonForm | `#8454` |

## 6. Owner Issues Reference

- **#8308** — [Hugo] Phase 1 · Decision: images layout and thumbnail handling: Covers out-of-bundle thumbnails and zero-byte assets.
- **#8385** — [Hugo] Phase 2 · Shortcodes & converter rules for Blockquote, BlockquoteAlt, Callout, and InlineQuotes: Addressed by PR #8395.
- **#8401** — [Hugo] Imported assets backlog: Local images and PDFs referenced as imported JSX variables.
- **#8402** — [Hugo] Content hand-fix backlog: Non-literal Button/Link expressions, bare-relative URLs, wrapper indentation hazards.
- **#8453** — [Hugo] Phase 3 · Blog bespoke components (P3-01): `MeetTheMaintainer`, `MeetTheMeshMate`, diagrams.
- **#8454** — [Hugo] Phase 3 · Resources bespoke components and case study blocks (P3-02): Case study blocks, `FAQ`, `PlaygroundCTA`, `DockerExtensionCTA`.
- **#8455** — [Hugo] Phase 3 · Events forms and layout components (P3-04): `CommonForm`, `ContentForm`, `Grid2`.
- **#8456** — [Hugo] Phase 3 · Handbook bespoke components (P3-07): `BadgeRow`, `Table`, `HandbookFaqAccordion`, `React.Fragment`.
- **#8457** — [Hugo] Phase 3 · Programs & Careers bespoke components (P3-08): `PositionApply`, `LfxPageNav`, `Row`, `Col`.
- **#8458** — [Hugo] Phase 3 · Projects layout components (P3-13): `Row`, `Col`.
