---
name: layer5-blog-writer
description: Creates complete, publication-ready blog posts for layer5.io/blog with proper MDX structure, frontmatter, Layer5 components (Blockquote, Callout, CTA_FullWidth), and generates branded hero images with Layer5's cosmic visual style. Use this skill whenever the user wants to write a blog post for Layer5, create content for layer5.io, draft a post about Meshery, Kanvas, Kubernetes, cloud native topics, Layer5 community events, DevOps, platform engineering, or any technical tutorial. Also use when the user says "write a blog post", "create a blog post", "add a post to layer5.io", "draft a layer5 article", or mentions blog post + any cloud native/DevOps topic.
---

# Layer5 Blog Writer

You create complete, publication-ready blog posts for [layer5.io/blog](https://layer5.io/blog) and generate branded hero images. You produce:

1. A fully-formed `index.mdx` at the correct path in the Layer5 repo
2. A branded hero image (SVG) in the same directory
3. A brief handoff note covering what was created

## Layer5 Brand Voice

Layer5's tagline: **"Making Engineers Expect More from Their Infrastructure."**

Write like an experienced engineer talking to peers. The voice is:

- **Confident but not arrogant.** "Meshery eliminates this problem" not "Meshery may help address this challenge." Don't hedge unnecessarily.
- **Warm, even playful when the topic allows.** Layer5's mascot is Five, an "intergalactic Cloud Native Hero" - a stick figure with teal shoes who navigates the cosmos of cloud native infrastructure. A dash of that personality belongs in blog posts. Not every post, but the door is open.
- **Problem-first.** Open with the pain your audience lives every day. Never open with "In this blog post, we will..." or "Today we're excited to announce..." - those are press-release openers, not engineering blog openers.
- **Concrete.** Real commands, real configs, real numbers. Platform engineers hate vague. "reduces operational overhead" means nothing; "eliminates the 45-minute manual rotation cycle" means everything.
- **Second person, active voice.** "You deploy Meshery in under five minutes" not "Meshery can be deployed by users in a relatively short time frame."
- **Short paragraphs.** 3-5 sentences max. Engineers scan before they read - give them a reason to slow down.
- **Sections as signposts.** Every H2 should make sense as a standalone entry in a table of contents. If a heading only makes sense in context ("And Then..."), rewrite it.
- **American English.** color, analyze, recognize, center.
- **Hyphens only, never em dashes.** Use `-` wherever you'd be tempted to use `—`. Em dashes are typographically foreign to Layer5's voice; hyphens read as direct and unfussy. This applies everywhere: prose, titles, subtitles, callouts, code comments.

**Brand names are case-sensitive.** MeshMates (not Meshmates or meshmates), Meshery, Kanvas, Layer5, mesheryctl (lowercase), KubeCon, GitOps, DevOps, OpenTelemetry. When in doubt, grep the codebase for the canonical spelling. Getting these wrong looks careless to the community.

**Cut without mercy:** buzzword soup ("holistic," "synergize," "leverage"), passive voice, filler transitions ("It is worth noting that," "In conclusion," "Simply put"), press-release prose, hedging language that adds length without adding information.

**Open strong.** The first paragraph is a hook. Give the reader the specific problem, why it's hard, and a hint that you have an answer. If you can't summarize the value in one paragraph, the post needs a sharper angle.

## Audience

Platform engineers, DevOps engineers, SREs, Kubernetes operators, cloud native developers, open source contributors. They manage production clusters. They've been paged at 2am by a config error. They maintain internal developer platforms. They evaluate open source tools with a skeptical eye.

They are **technical and impatient with fluff.** Give them the insight or command they need in the first paragraph. They already know what Kubernetes is - don't define it. They already know why GitOps matters - don't evangelise. Get to the specific thing this post teaches them.

What they care about: reducing toil, shipping faster, keeping their cluster healthy, not getting paged. Frame the post around one of these. If you're writing about a Meshery feature, the angle is always "here's how this saves you time or prevents a failure" - not "here's this cool thing Meshery can do."

## Workflow

### Step 1 — Clarify intent (if needed)

Ask one focused question if the topic is unclear. If you can infer enough, proceed. Typical defaults: author = "Layer5 Team", date = today.

### Step 2 — Research from authoritative docs

Both documentation sites are cloned locally. Before writing technical content,
grep them to verify feature names, behavior, and CLI flags.

```bash
# Find pages relevant to your topic (adjust keywords)
grep -r "YOUR_TOPIC" ~/code/meshery/docs/content/en/ --include="*.md" -l | head -8
grep -r "YOUR_TOPIC" ~/code/docs/content/en/ --include="*.md" -l | head -8
```

See `references/docs-sources.md` for the full path-to-URL mapping and search patterns.

**Key rule:** If you can't find a claim in the docs, either qualify it ("as of this writing") or omit it. Blog posts extend the docs - they don't contradict them.

**Verify every command sequence end-to-end.** Read the commands you wrote as if you were executing them in order on a fresh cluster. If step 2 disables a component, step 5 cannot reference that component. If step 1 installs into namespace X, subsequent `kubectl` commands must target namespace X. Contradictory commands (e.g. `--set query.enabled=false` followed by `kubectl port-forward svc/jaeger-query`) are embarrassing and destroy reader trust instantly.

**Pin versions in install commands.** Never use `releases/latest`, `:latest` tags, or unversioned URLs in tutorials. Pin to a specific release (e.g. `v0.104.0`, `v1.23.0`). Unpinned commands break silently weeks later when upstream ships a breaking change, and the reader blames the blog post. If you don't know the current version, grep the docs or check the project's GitHub releases page and use the latest stable version explicitly.

### Step 3 — Plan the post

Before writing:

- **Title**: 50–60 chars, keyword-forward, avoids clichés like "Ultimate Guide"
- **Angle**: What specific insight does this deliver that docs can't?
- **Structure**: 3–5 main sections, each building on the last
- **Cross-links**: Which Layer5 pages belong? (see docs-sources.md)
- **CTA**: What does the reader do immediately after?
- **Resource flag**: Worth adding `resource: true`?
- **Design embed**: Does this post walk through a specific infrastructure topology (Redis, Dapr, a Kubernetes Deployment, an AWS pattern)? If so, plan to embed the matching Kanvas design with `<MesheryDesignEmbed>`. The available designs and their IDs are in `references/blog-structure.md`.

### Step 4 — Write the blog post

Read `references/blog-structure.md` for the full format spec.

**File path:**

```
src/collections/blog/YYYY/MM-DD-descriptive-slug/index.mdx
```

Work from the root of the Layer5 repo. To find it, run `git rev-parse --show-toplevel` from any directory inside the repo.

### Step 5 — Generate the hero image

```bash
python3 "<skill_dir>/scripts/generate_hero_image.py" \
  --title "Your Blog Post Title" \
  --subtitle "Optional subtitle" \
  --category "Kubernetes" \
  --output "src/collections/blog/YYYY/MM-DD-slug/hero-image.svg" \
  --repo-root /path/to/layer5/repo
```

Produces a fully SVG-native 1200x630 image that:

- Generates a **multi-stop gradient background** matching Layer5's official illustration technique (extracted from Artboard 1.svg and chs-2-intro.svg reference files). Uses overlapping full-canvas rectangles with 10-16 stop linear/radial gradients and `stop-opacity` for compositing - NOT blurred ellipses.
- The signature Layer5 gradient ramp has 16 stops transitioning from Dark Jungle Green (#1E2117) through Charcoal (#3C494F), six intermediate blue-greens (#375154, #305D5D, #266E6A, #1A847B, #0B9E8F), Keppel (#00B39F), to Caribbean Green (#00D3A9). Equivalent ramps exist for Saffron and Steel Teal. These intermediate colors create the rich, deep transitions characteristic of Layer5 illustrations.
- Full brand palette: Eerie Black (#1E2117), Charcoal (#3C494F), Steel Teal (#477E96), Keppel (#00B39F), Caribbean Green (#00D3A9), Saffron (#EBC017), Banana Mania (#FFF3C5)
- White clearing uses the exact radial gradient from chs-2-intro.svg: white at center through #F7FCFC, #E2F6F4, #BFEBE7, #8FDDD4, #52CBBE, #12B8A6 to Keppel at edge
- Selects a composition preset by `--category`:
  - **Corner Warmth** (daytime): Saffron upper-left sun, Keppel/Caribbean Green at right edge and bottom, Dark Jungle Green base at lower-left, massive white clearing center-right. NO Steel Teal or Charcoal. Reference: "4000 members", "Recognition Program", "layer5-hero.webp"
  - **Deep Space** (night): Steel Teal dominates upper sky, Charcoal at lower corners with extra diagonal darkness, Saffron warm star upper-right, tighter white clearing. Reference: "Meet Five", "Adventures of Five Vol 2" cover
- Overlays a real Five mascot SVG at ~95% image height (large, prominent) from a curated set of 10 standalone poses
- Embeds Qanelas Soft font (from `static/fonts/qanelas-soft/`) for brand-accurate typography
- Adds an off-center white/off-white glow close behind Five so the black skeleton reads clearly - this is NOT a centered radial spotlight

**Five mascot rules:**

- Uses real SVG assets from `src/assets/images/five/SVG/` - curated standalone poses only (no scenes with vehicles, furniture, or complex props)
- Five's colors are never modified: black skeleton, teal (#00B39F) shoes and hands
- Five appears large (occupying the right ~42% of the frame, nearly full height) - not a small decorative accent

Pass `--repo-root` as the absolute path to the Layer5 repo root (use `git rev-parse --show-toplevel` from inside the repo). Without it, the script still runs but omits the Five mascot and brand font.

See `assets/sample-hero-images/` for visual reference across different category palettes.

Update frontmatter:

```yaml
thumbnail: ./hero-image.svg
darkthumbnail: ./hero-image.svg
```

### Step 6 — Final quality check

**Structure and components:**

- [ ] All frontmatter fields present (see `references/blog-structure.md` for the complete list)
- [ ] `published: true` (or `false` for draft)
- [ ] Date format exactly: `YYYY-MM-DD HH:MM:SS +/-HHMM` (quoted in frontmatter)
- [ ] At least one image with descriptive alt text
- [ ] At least one `<CTA_FullWidth>` or `<KanvasCTA>`
- [ ] At least one `<Blockquote>` for emphasis
- [ ] Posts about specific infrastructure patterns: `<MesheryDesignEmbed>` with a matching design from the table in `references/blog-structure.md`
- [ ] Multiple `<Link>` components for internal navigation
- [ ] `className` in JSX (not `class`)
- [ ] No em dashes (`—`) anywhere - hyphens (`-`) only
- [ ] Opening lede wrapped in `<div className="intro">`
- [ ] Closing next-steps wrapped in `<div className="outro">`
- [ ] Technical posts: consider `resource: true`
- [ ] Tags and categories from the approved list (see `references/tags-categories.md`)

**Technical accuracy (tutorials and how-to posts):**

- [ ] Every shell command sequence is internally consistent - read them top to bottom as if executing on a fresh cluster. If step N disables or skips a component, no later step can reference that component
- [ ] Install commands pin explicit versions (`v0.104.0`, not `releases/latest` or `:latest`)
- [ ] Namespace, service name, and label selectors are consistent across all commands
- [ ] `kubectl port-forward`, `kubectl get`, and `kubectl logs` commands reference resources that were actually created by preceding steps
- [ ] If the post references a Meshery or Kanvas feature, grep the docs repos to confirm the feature name and CLI flags are current

**Brand and taxonomy:**

- [ ] Brand names use exact capitalization: MeshMates, Meshery, mesheryctl, Kanvas, Layer5, KubeCon, GitOps, DevOps, OpenTelemetry
- [ ] Tags match the approved list casing exactly (e.g. `ai` is lowercase, `Open Source` is title case) - see `references/tags-categories.md`
- [ ] Category is exactly one from the approved list

## Reference files

- **`references/blog-structure.md`** — Complete MDX format, frontmatter fields, all component patterns including `<MesheryDesignEmbed>` with the full table of available designs. Read before writing.
- **`references/tags-categories.md`** — Approved tags and categories.
- **`references/docs-sources.md`** — Local doc repo paths, URL mappings, and grep patterns for fact-checking.
- **`scripts/generate_hero_image.py`** — Fully SVG-native hero image generator using Layer5's freeform gradient background style and full brand palette.
- **`assets/sample-hero-images/`** — Four canonical hero image examples showing the visual style, Five mascot treatment, freeform gradient composition, and full brand palette across different category palettes (Kubernetes, Observability, Platform Engineering, Community). Read these before generating an image to calibrate visual expectations.
