# Hugo Migration: Converter Report

> Generated automatically by `scripts/generate-converter-report.mjs` from a dry run with `--exclude sistent`.

## 1. Summary Totals

| Metric | Value |
|---|---|
| **Documents Converted** | 1006 / 1006 |
| **Excluded Collections** | `sistent` (138 files skipped) |
| **Skipped Templates** | 11 |
| **Files with Warnings** | **129** |
| **Unowned Warning Files** | **0** |
| **Zero-Byte Assets Logged** | 6 |
| **Asset Normalization Renames** | 26 |
| **Conversion Idempotency** | **0 byte difference (100% idempotent)** |

## 2. Warnings Breakdown by Key

| Warning Category | Occurrences | Primary Owner Issue | Description |
|---|---|---|---|
| `thumbnail outside page bundle` | 71 | #8308 | Images in `thumbnail` or `darkthumbnail` pointing to `../../assets` |
| `unknown components` | 70 | #8385 / Phase 3 | Components not yet mapped to Hugo shortcodes |
| `wrapper indent hazard` | 19 | #8402 | Wrapper bodies with 4+ space indents that could trigger Markdown code blocks |
| `non-literal prop expression` | 16 | #8401 / #8402 | JSX expression props (e.g. `image={var}`, `$url={link}`) |
| `bare-relative link` | 7 | #8402 | Links with bare-relative paths (e.g. `<Link to="newcomer">`) |
| `zero-byte asset` | 6 | #8308 | Zero-byte SVG files in source integrations |
| `external prop warning` | 1 | #8402 | Non-http(s) link marked with external prop |
| `missing front matter` | 1 | #8402 | Document missing YAML front matter; minimal front matter generated |

## 3. Unknown Components Inventory

| Component | Occurrences | Owning Issue / Phase | Proposed Solution |
|---|---|---|---|
| `<Blockquote>` | 66 | #8385 (P2-05) | `{{< blockquote >}}` shortcode (PR #8395) |
| `<Col>` | 25 | #8298 (P3-08 Programs / Careers) | Container grid column layout partial/shortcode |
| `<BlockquoteAlt>` | 23 | #8385 (P2-05) | `{{< blockquote-alt >}}` shortcode (PR #8395) |
| `<Callout>` | 14 | #8385 (P2-05) | `{{< callout >}}` shortcode (PR #8395) |
| `<MeetTheMaintainer>` | 11 | #8298 (P3-01 Blog) | Blog interview header component |
| `<PositionApply>` | 7 | #8298 (P3-08 Careers) | Job application CTA button/link |
| `<InlineQuotes>` | 6 | #8385 (P2-05) | `{{< inline-quotes >}}` shortcode (PR #8395) |
| `<Row>` | 5 | #8298 (P3-08 Programs / Careers) | Container grid row layout partial/shortcode |
| `<Grid2>` | 3 | #8298 (P3-04 Events) | Event grid container |
| `<BadgeRow>` | 3 | #8298 (P3-07 Handbook) | Handbook recognition badge row component |
| `<FAQ>` | 3 | #8298 (P3-02 Resources) | Resources FAQ accordion component |
| `<React.Fragment>` | 2 | #8298 (P3-07 Handbook) | React wrapper in repository overview maintainer loop |
| `<CommonForm>` | 2 | #8298 (P3-04 Events) | Event signup form island |
| `<MeshkitMesheryAdapterLib>` | 1 | #8298 (P3-01 Blog) | Architecture diagram component in blog post |
| `<BufProtocol>` | 1 | #8298 (P3-01 Blog) | Bespoke SVG diagram component in blog post |
| `<PerfbytesPodcast>` | 1 | #8298 (P3-01 Blog) | Audio/podcast player embed in blog post |
| `<MeetTheMeshMate>` | 1 | #8298 (P3-01 Blog) | Blog MeshMate profile component |
| `<Blog>` | 1 | #8298 (P3-01 Blog) | Bespoke blog listing component |
| `<HandbookFaqAccordion>` | 1 | #8298 (P3-07 Handbook) | FAQ accordion rendering `site.Data.handbook.faq` |
| `<ContentForm>` | 1 | #8298 (P3-04 Events) | Event speaker registration form island |
| `<LfxPageNav>` | 1 | #8298 (P3-08 Programs) | LFX program navigation pills |
| `<HPEintro>` | 1 | #8298 (P3-02 Resources) | HPE case study intro block |
| `<HPEfacts>` | 1 | #8298 (P3-02 Resources) | HPE case study facts sidebar |
| `<HPEbenefits>` | 1 | #8298 (P3-02 Resources) | HPE case study benefits section |
| `<INFORintro>` | 1 | #8298 (P3-02 Resources) | Infor case study intro block |
| `<INFORfacts>` | 1 | #8298 (P3-02 Resources) | Infor case study facts sidebar |
| `<INFORbenefits>` | 1 | #8298 (P3-02 Resources) | Infor case study benefits section |
| `<TCSintro>` | 1 | #8298 (P3-02 Resources) | TCS case study intro block |
| `<TCSfacts>` | 1 | #8298 (P3-02 Resources) | TCS case study facts sidebar |
| `<TCSbenefits>` | 1 | #8298 (P3-02 Resources) | TCS case study benefits section |
| `<PlaygroundCTA>` | 1 | #8298 (P3-02 Resources) | Meshery playground banner CTA |
| `<DockerExtensionCTA>` | 1 | #8298 (P3-02 Resources) | Docker extension banner CTA |
| `<Table>` | 1 | #8298 (P3-07 Handbook) | HTML table wrapper in handbook |

## 4. Warnings Inventory by File

Every warning file outside Sistent is tracked below with its owning issue.

| File | Warning Details | Owner Issue |
|---|---|---|
| `blog/2021/2021-02-04-meet-the-maintainer-michael-gfeller/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: MeetTheMaintainer | #8402, #8298 (P3-01 Blog) |
| `blog/2021/2021-02-07-meshkit-and-meshery-adapter-library/index.mdx` | unknown components: MeshkitMesheryAdapterLib | #8298 (P3-01 Blog) |
| `blog/2021/2021-04-05-meshmate-of-the-year-2020-nikhil-ladha/index.mdx` | unknown components: Blockquote, BlockquoteAlt | #8385 |
| `blog/2021/2021-04-16-meet-the-maintainer-jash-patel/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: MeetTheMaintainer | #8402, #8298 (P3-01 Blog) |
| `blog/2021/2021-04-24-buf-protocols/index.mdx` | unknown components: BufProtocol | #8298 (P3-01 Blog) |
| `blog/2021/2021-06-25-she-code-africa-contributhon-boot-camp/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2021/2021-09-20-service-mesh-specifications-and-why-they-matter/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2021/2021-10-04-ccoss-meshery-event/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2021/2021-10-09-an-introduction-to-meshery/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-01-07-Recap-KubeCon-China-TAG-Network-talk/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-01-22-the-story-of-meshery-1000-stars/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2022/2022-05-10-dockercon-22-hashicorp-talk/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-05-10-dockercon-22-hpe-talk/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2022/2022-05-14-service-meshcon-talk-intel/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2022/2022-05-20-meshmate-of-the-year-2021-aditya-chatterjee/index.mdx` | unknown components: Blockquote, BlockquoteAlt | #8385 |
| `blog/2022/2022-05-27-debug-envoy-proxy/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-06-01-perfbytes-podcast/index.mdx` | unknown components: PerfbytesPodcast, Blockquote | #8385 |
| `blog/2022/2022-06-07-week-open-source-contributions-with-layer5/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-07-28-managing-multiple-clusters-with-meshery/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2022/2022-10-19-kubeconna2022/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2023/04-12-meshery-surpasses-1000-contributors/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2023/05-02-layer5-reaches-a-4000-community-member-milestone/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2023/05-24-meet-the-meshmate-yash-sharma/index.mdx` | unknown components: MeetTheMeshMate | #8298 (P3-01 Blog) |
| `blog/2023/08-21-layer5-badge-program/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review<br>unknown components: Blog | #8402, #8298 (P3-01 Blog) |
| `blog/2023/09-28-hacktoberfest-2023/index.mdx` | unknown components: BlockquoteAlt | #8385 |
| `blog/2023/2023-09-05-unlocking-the-power-of-webassembly-in-service-mesh-management/index.mdx` | thumbnail: "../../../../assets/images/partners/intel-grey.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/partners/intel_white.webp" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2024/02-13-what-is-platform-engineering/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | #8402 |
| `blog/2024/02-24-open-container-image-meshery/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | #8402 |
| `blog/2024/04-26-docker-compose-with-meshery/index.mdx` | thumbnail: "../../../../assets/images/dockercompose-logo/dockercompose-logo.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/dockercompose-logo/dockercompose-logo.webp" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2024/05-07-mythical-engineer/index.mdx` | thumbnail: "../../../../assets/images/five/SVG/layer5-five-mascot-means-business.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/five/SVG/layer5-five-mascot-means-business.webp" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2024/05-12-cost-of-observability/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2024/06-13-2024/index.mdx` | thumbnail: "../../../../assets/images/layer5/layer5-only/svg/layer5-black.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/layer5/layer5-only/svg/layer5-light-bg.webp" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2024/06-21-meshery-5000-star-milestone/index.mdx` | unknown components: Blockquote | #8385 |
| `blog/2024/07-01-meet-the-maintainer-xin-huang/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2024/09-08-meet-the-maintainer-hussaina-begum/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2024/09-27-meet-the-maintainer-aisuko-li/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2024/10-09-docker-build-warning/index.mdx` | thumbnail: "../../../../assets/images/docker-extension/docker-extension-meshery-logo.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/docker-extension/docker-extension-meshery-logo.webp" is outside the page bundle — move it next to index.md<br>unknown components: BlockquoteAlt | #8308, #8385 |
| `blog/2024/10-22-meet-the-maintainer-aadhitya-amarendiran/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2024/11-01-meet-the-maintainer-yash-sharma/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2024/11-05-what-is-the-kanvas-catalog/index.mdx` | thumbnail: "../../../../assets/images/catalog-icon/catalog2.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/catalog-icon/catalog.webp" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2025/05-28-meet-the-maintainer-ian-whitney/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2025/08-27-meet-the-maintainer-aabid-sofi/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2025/11-03-2025-understanding-configmaps/index.mdx` | <BlogWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `blog/2025/11-19-kanvas-like-miro-but-more/index.mdx` | thumbnail: "../../../../assets/images/kanvas/icon-only/kanvas-icon-color.png" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/kanvas/icon-only/kanvas-icon-white.png" is outside the page bundle — move it next to index.md | #8308 |
| `blog/2025/12-28-gemini-cli-trusted-directories/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Blockquote | #8402, #8385 |
| `blog/2026/02-25-my-journey-to-lfx-at-layer5-raunak-madan/post.mdx` | unknown components: Blockquote | #8385 |
| `blog/2026/03-02-meshery-hits-10000-github-stars/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Blockquote, Callout | #8402, #8385 |
| `blog/2026/03-09-why-claude-code-cant-find-your-tools/index.mdx` | unknown components: Callout | #8385 |
| `blog/2026/03-26-meet-the-maintainer-sangram-rath/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2026/03-31-claude-code-source-leak/index.mdx` | unknown components: Callout | #8385 |
| `blog/2026/04-02-open-source-maintenance-ai-contributors/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Blockquote, Callout | #8402, #8385 |
| `blog/2026/04-03-claude-code-skills-not-found-sessionstart-hook/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Callout, Blockquote | #8402, #8385 |
| `blog/2026/04-07-design-for-the-human-enable-the-agent/index.mdx` | unknown components: Blockquote, Callout | #8385 |
| `blog/2026/06-22-meet-the-maintainer-mia-grenell/index.mdx` | unknown components: MeetTheMaintainer | #8298 (P3-01 Blog) |
| `blog/2026/09-14-disable-claude-code-session-feedback-survey/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Blockquote, Callout | #8402, #8385 |
| `blog/2026/09-16-ai-system-1-versus-system-2-tasks/index.mdx` | <CTA_FullWidth>: non-literal expression for "image"<br>unknown components: Callout, Blockquote | #8402, #8385 |
| `careers/digital-marketing-internship/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/software-engineer/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/software-engineering-internship/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/ui-engineer/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/ui-visual-designer-internship/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/ui-visual-designer/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `careers/ux-engineer/index.mdx` | unknown components: Col, PositionApply | #8298 (P3-08 Programs & Careers) |
| `events/2024/kubecon-EU-2024/index.mdx` | events/2024/kubecon-EU-2024/index.mdx: <Button> has external="true" on non-http(s) URL "/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" (<Button secondary title="KubeCon EU 2024 CNCF TAG Network Slide" url="/cncf-tag-network/KubeCon-EU-2024-CNCF-TAG-Network.pdf" external={ true } />); review manually | #8402 |
| `events/2024/making-the-cncf-landscape-interactive-with-meshery/index.mdx` | <Button>: non-literal expression for "style" | #8402 |
| `events/2025/hacktoberfest-2025/index.mdx` | unknown components: Grid2 | #8298 (P3-04 Events) |
| `handbook/faq/index.mdx` | unknown components: HandbookFaqAccordion | #8298 (P3-07 Handbook) |
| `handbook/mentorship-programs/index.mdx` | <Button>: non-literal expression for "$url"<br>unknown components: Row, Col | #8402, #8298 (P3-07 Handbook) |
| `handbook/recognition/index.mdx` | unknown components: BadgeRow | #8298 (P3-07 Handbook) |
| `handbook/repository-overview/index.mdx` | <Link>: non-literal expression for "to"<br><Link>: non-literal expression for "to"<br>unknown components: React.Fragment | #8402, #8298 (P3-07 Handbook) |
| `handbook/writing-program/index.mdx` | unknown components: Row, Col, ContentForm | #8298 (P3-07 Handbook) |
| `integrations/rustrial-aws-eks-iam-auth-controller/icons/color/rustrial-aws-eks-iam-auth-controller-color.svg` | zero-byte asset | #8308 |
| `integrations/rustrial-aws-eks-iam-auth-controller/icons/components/iam-identity-mapping/icons/color/iam-identity-mapping-color.svg` | zero-byte asset | #8308 |
| `integrations/rustrial-aws-eks-iam-auth-controller/icons/components/iam-identity-mapping/icons/white/iam-identity-mapping-white.svg` | zero-byte asset | #8308 |
| `integrations/rustrial-aws-eks-iam-auth-controller/icons/white/rustrial-aws-eks-iam-auth-controller-white.svg` | zero-byte asset | #8308 |
| `integrations/vald/icons/components/vald-mirror-target/icons/white/vald-mirror-target-white.svg` | zero-byte asset | #8308 |
| `integrations/vald/icons/white/vald-white.svg` | zero-byte asset | #8308 |
| `news/2021/2021-10-13-cncf-adopts-meshery/index.mdx` | thumbnail: "../../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.png" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.png" is outside the page bundle — move it next to index.md | #8308 |
| `news/2021/2021-10-13-cncf-adopts-service-mesh-performance-standard/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.webp" is outside the page bundle — move it next to index.md | #8308 |
| `news/2022/2022-05-10-layer5-joins-docker-extension-program-bringing-kubernetes-and-service-mesh-management-to-docker-with-meshery/index.mdx` | unknown components: BlockquoteAlt, Blockquote | #8385 |
| `news/2022/2022-05-18-meshmark-the-cloud-native-value-measurement/meshmark-the-cloud-native-value-measurement.md` | thumbnail: "../../../../assets/images/meshmark/stacked/meshmark-dark-full.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/meshmark/stacked/meshmark-dark-full.webp" is outside the page bundle — move it next to index.md<br>unknown components: BlockquoteAlt, Blockquote | #8308, #8385 |
| `news/2024/2024-11-12-layer5-launches-kanvas-a-collaborative-platform-for-cloud-native-infrastructure/index.mdx` | thumbnail: "../../../../assets/images/kanvas/stacked/kanvas-stacked-color.png" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/kanvas/stacked/kanvas-stacked-partial-color.png" is outside the page bundle — move it next to index.md<br>unknown components: BlockquoteAlt, Blockquote | #8308, #8385 |
| `news/2025/2025-11-05-sixth-highest-velocity/index.mdx` | unknown components: BlockquoteAlt, Blockquote | #8385 |
| `news/2025/2025-11-11-kanvas-ga-release/index.mdx` | unknown components: BlockquoteAlt, Blockquote | #8385 |
| `news/2025/2025-11-16-cncf-honors-innovators-and-defenders-community-awards/index.mdx` | unknown components: Blockquote | #8385 |
| `news/2025/2025-11-23-kubecon-2025-cncf-to-standardize-ai-workloads/index.mdx` | unknown components: BlockquoteAlt | #8385 |
| `news/2026/2026-03-23-meshery-v1-0-launches-at-kubecon-eu-with-governance-first-cloud-native-management/index.mdx` | unknown components: BlockquoteAlt | #8385 |
| `news/2026/2026-03-23-meshery-v1-launch-kubecon-eu/index.mdx` | unknown components: Blockquote, BlockquoteAlt | #8385 |
| `programs/communitybridge/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `programs/gsoc-2021/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `programs/hacktoberfest-2020/index.mdx` | programs/hacktoberfest-2020/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | #8402 |
| `programs/hacktoberfest-2021/index.mdx` | programs/hacktoberfest-2021/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | #8402 |
| `programs/hacktoberfest-2022/index.mdx` | programs/hacktoberfest-2022/index.mdx: <Link> has bare-relative "to" value "newcomer" (<Link className="highlight" to="newcomer">); review manually | #8402 |
| `programs/layer5/index.mdx` | darkthumbnail_svg: "../../../assets/images/layer5/layer5-only/svg/layer5-light-no-trim.svg" is outside the page bundle — move it next to index.md | #8308 |
| `programs/lfx-2025/lfx-2025.mdx` | programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "community/members/mia-grenell" (<Link to ="community/members/mia-grenell">); review manually<br>programs/lfx-2025/lfx-2025.mdx: <Link> has bare-relative "to" value "" (<Link to ="">); review manually | #8402 |
| `programs/lfx-2026/lfx-2026.mdx` | unknown components: LfxPageNav | #8298 (P3-08 Programs & Careers) |
| `programs/sca-contributhon/index.mdx` | <ProgramsWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `projects/distributed-performance-management/index.mdx` | unknown components: Row, Col | #8298 (Phase 3 Collections) |
| `resources/articles/consul-service-mesh/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/consul.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/consul.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/deploying-istio/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/devops-adoption/index.mdx` | <Link>: non-literal expression for "to"<br><Link>: non-literal expression for "to" | #8401 |
| `resources/articles/gitops/what-is-gitops.mdx` | thumbnail: "../../../../assets/images/socialIcons/github-dark.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/socialIcons/github-light.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-at-a-glance/istio-at-a-glance.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-authorization policy/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-pilot/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-service-mesh/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio-white.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-service-proxy/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/envoy/icon/color/envoy-icon-color.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/envoy/icon/color/envoy-icon-color.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/istio-virtual-service/index.mdx` | thumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/service-mesh-icons/istio.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/kubernetes/archtiecture-101/k8s-architecture-101.mdx` | thumbnail: "../kubernetes.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../kubernetes.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/articles/kubernetes/getting-started-with-kubernetes/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | #8402 |
| `resources/articles/kubernetes/management-of-kubernetes/index.mdx` | <CTA_FullWidth>: non-literal expression for "image" | #8402 |
| `resources/articles/layer5-academy-vs-moocit/index.mdx` | no front matter found; generated a minimal one | #8402 |
| `resources/articles/value-of-a-service-mesh/index.mdx` | <ResourcesWrapper>: wrapper body has 4+ space indented line after dedent; left as-is for manual review | #8402 |
| `resources/case-study/hpes-adoption-of-meshery-and-kanvas/index.mdx` | unknown components: HPEintro, HPEfacts, HPEbenefits, InlineQuotes | #8385 |
| `resources/case-study/infors-adoption-of-meshery-and-kanvas/index.mdx` | unknown components: INFORintro, INFORfacts, InlineQuotes, INFORbenefits | #8385 |
| `resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas/index.mdx` | unknown components: TCSintro, TCSfacts, InlineQuotes, TCSbenefits | #8385 |
| `resources/comparison/layer5-academy-vs-moocit/index.mdx` | thumbnail: "../../../../assets/images/academy/academy-layer5.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../../assets/images/academy/academy-layer5-light.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/faq/internship-faq.mdx` | thumbnail: "../../../assets/images/workshops/workshops.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/workshops/workshops.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | #8308, #8298 (P3-02 Resources) |
| `resources/faq/layer5-faq.mdx` | thumbnail: "../../../assets/images/layer5/layer5-only/png/layer5-gradient.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/layer5/layer5-only/png/layer5-gradient.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | #8308, #8298 (P3-02 Resources) |
| `resources/faq/meshery-faq.mdx` | thumbnail: "../../../assets/images/meshery/text-only/meshery-logo-dark-text.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/meshery/text-only/meshery-logo-dark-text.webp" is outside the page bundle — move it next to index.md<br>unknown components: FAQ | #8308, #8298 (P3-02 Resources) |
| `resources/recorded-webinars/introduction-to-meshery.mdx` | thumbnail: "../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/beginner-guide-to-contributing-to-meshery-and-mesheryctl.mdx` | thumbnail: "../../../assets/images/tutorials/intro-meshery-ctl.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-meshery-ctl.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/contributing-to-meshery-API-swagger-documentation.mdx` | thumbnail: "../../../assets/images/tutorials/swagger-logo.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/swagger-logo.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/docker-swarm/index.mdx` | resources/tutorials/docker-swarm/index.mdx: <Link> has bare-relative "to" value "../../articles/kubernetes/management-of-kubernetes" (<Link to="../../articles/kubernetes/management-of-kubernetes">); review manually<br>unknown components: PlaygroundCTA, DockerExtensionCTA | #8402, #8298 (P3-02 Resources) |
| `resources/tutorials/introduction-to-all-layer5-repositories.mdx` | thumbnail: "../../../assets/images/tutorials/all-repos-layer5.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/all-repos-layer5.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/introduction-to-contributing-to-meshery.mdx` | thumbnail: "../../../assets/images/tutorials/intro-to-meshery.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-to-meshery.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/introduction-to-meshey-ctl.mdx` | thumbnail: "../../../assets/images/tutorials/golang-meshery-ctl.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/golang-meshery-ctl.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/tutorial-on-contributing-to-layer5-and-working-with-git.mdx` | thumbnail: "../../../assets/images/tutorials/layer5-walkthrough.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/layer5-walkthrough.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/tutorial-on-gatsby.mdx` | thumbnail: "../../../assets/images/tutorials/intro-to-gatsby.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/intro-to-gatsby.webp" is outside the page bundle — move it next to index.md | #8308 |
| `resources/tutorials/working-with-meshery-docs-and-jekyll.mdx` | thumbnail: "../../../assets/images/tutorials/docs-jekyll.webp" is outside the page bundle — move it next to index.md<br>darkthumbnail: "../../../assets/images/tutorials/docs-jekyll.webp" is outside the page bundle — move it next to index.md | #8308 |
| `service-mesh-books/service-mesh-patterns/index.mdx` | unknown components: Table | #8298 (Phase 3 Collections) |
| `service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-Edition/index.mdx` | unknown components: CommonForm | #8298 (Phase 3 Collections) |
| `service-mesh-books/the-enterprise-path-to-service-mesh-architectures/index.mdx` | unknown components: CommonForm | #8298 (Phase 3 Collections) |
| `use-cases/commenting/index.mdx` | thumbnail_svg: "../../../assets/images/comments/comment.svg" is outside the page bundle — move it next to index.md | #8308 |
| `use-cases/whiteboarding/index.mdx` | thumbnail_svg: "../../../assets/images/whiteboard/whiteboard.svg" is outside the page bundle — move it next to index.md | #8308 |

## 5. Owner Issues Reference

- **#8308** — [Hugo] Phase 1 · Decision: images layout and thumbnail handling: Covers out-of-bundle thumbnails and zero-byte assets.
- **#8385** — [Hugo] Phase 2 · Shortcodes & converter rules for Blockquote, BlockquoteAlt, Callout, and InlineQuotes: Addressed by PR #8395.
- **#8401** — [Hugo] Imported assets backlog: Local images and PDFs referenced as imported JSX variables.
- **#8402** — [Hugo] Content hand-fix backlog: Non-literal Button/Link expressions, bare-relative URLs, wrapper indentation hazards.
- **#8298 (Phase 3: Content collections)**:
  - **P3-01** (#8298): Blog (`MeetTheMaintainer`, `MeetTheMeshMate`, `Blog`, diagrams)
  - **P3-02** (#8298): Resources (`FAQ`, `PlaygroundCTA`, `DockerExtensionCTA`, HPE/INFOR/TCS case studies)
  - **P3-04** (#8298): Events (`ContentForm`, `CommonForm`, `Grid2`)
  - **P3-07** (#8298): Handbook (`HandbookFaqAccordion`, `BadgeRow`, `Table`, `React.Fragment`)
  - **P3-08** (#8298): Programs & Careers (`PositionApply`, `LfxPageNav`, `Row`, `Col`)
  - **P3-12** (#8298): Community pages (`NewcomersMap`)
