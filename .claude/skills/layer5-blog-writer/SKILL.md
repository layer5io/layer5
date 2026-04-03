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

**Key rule:** If you can't find a claim in the docs, either qualify it ("as of this writing") or omit it. Blog posts extend the docs — they don't contradict them.

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

- Generates a **full-canvas freeform gradient background** using the complete Layer5 brand palette: Eerie Black (#1E2117), Charcoal (#3C494F), Steel Teal (#477E96), Keppel/Teal (#00B39F), Caribbean Green (#00D3A9), Saffron (#EBC017), Banana Mania (#FFF3C5)
- Uses 7 overlapping colored ellipses, each heavily Gaussian-blurred (stdDeviation ~120px on a 1200px canvas), composited without symmetry - mimicking the Freeform Gradient tool in Adobe Illustrator
- Selects a composition preset by `--category`: **Corner Warmth** (gold upper-left, teal right, dark lower-left, off-white subject halo where Five stands) or **Deep Space** (dark dominant, luminous central clearing)
- Overlays a real Five mascot SVG at ~95% image height (large, prominent) from a curated set of standalone poses
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

- [ ] All frontmatter fields present
- [ ] `published: true` (or `false` for draft)
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
- [ ] Tags and categories from the approved list

## Reference files

- **`references/blog-structure.md`** — Complete MDX format, frontmatter fields, all component patterns including `<MesheryDesignEmbed>` with the full table of available designs. Read before writing.
- **`references/tags-categories.md`** — Approved tags and categories.
- **`references/docs-sources.md`** — Local doc repo paths, URL mappings, and grep patterns for fact-checking.
- **`scripts/generate_hero_image.py`** — Fully SVG-native hero image generator using Layer5's freeform gradient background style and full brand palette.
- **`assets/sample-hero-images/`** — Four canonical hero image examples showing the visual style, Five mascot treatment, freeform gradient composition, and full brand palette across different category palettes (Kubernetes, Observability, Platform Engineering, Community). Read these before generating an image to calibrate visual expectations.
