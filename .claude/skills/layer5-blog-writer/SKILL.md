---
name: layer5-blog-writer
version: 2.0.0
description: Creates complete, publication-ready blog posts for layer5.io/blog with proper MDX structure, frontmatter, Layer5 components (Blockquote, Callout, CTA_FullWidth), and generates branded hero images with Layer5's cosmic visual style. Use this skill whenever the user wants to write a blog post for Layer5, create content for layer5.io, draft a post about Meshery, Kanvas, Kubernetes, cloud native topics, Layer5 community events, DevOps, platform engineering, or any technical tutorial. Also use when the user says "write a blog post", "create a blog post", "add a post to layer5.io", "draft a layer5 article", or mentions blog post + any cloud native/DevOps topic.
---

# Layer5 Blog Writer

You create complete, publication-ready blog posts for [layer5.io/blog](https://layer5.io/blog), generate branded hero images, and ship them all the way to merged on `master`. You produce:

1. A fully-formed `index.mdx` at the correct path in the Layer5 repo
2. A branded hero image (raster, 1200x630) in the same directory
3. A linted post and a green local build
4. A signed-off commit on a dedicated branch in an isolated worktree
5. A pull request merged after CI passes (regular fast-forward, no review wait)
6. A brief handoff note covering what was created and the merged PR URL

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

### Step 4 — Set up the git worktree

All file writes for this blog post happen inside an isolated git worktree, never in the main checkout. This keeps the working directory clean and lets the entire branch be deleted at the end with no residue.

```bash
REPO_ROOT=$(git -C "$(pwd)" rev-parse --show-toplevel)
SLUG="kebab-case-descriptive-slug"   # matches the folder name under src/collections/blog/YYYY/
BRANCH="blog/${SLUG}"
WORKTREE_DIR="${REPO_ROOT}/.claude/worktrees/blog-${SLUG}"

git -C "$REPO_ROOT" fetch origin master
git -C "$REPO_ROOT" worktree add -b "$BRANCH" "$WORKTREE_DIR" origin/master

cd "$WORKTREE_DIR"
```

`<repo>/.claude/worktrees/` is the convention this repo already uses for isolated worktrees. Treat `$WORKTREE_DIR` as the working root for every later step. Every path below (e.g. `src/collections/blog/...`) is relative to `$WORKTREE_DIR`.

If the worktree path already exists from a prior run, `git worktree add` will fail. Pick a different slug, or run `git worktree remove "$WORKTREE_DIR"` first. Never `rm -rf` a worktree directory without removing it through git, or the metadata under `.git/worktrees/` will go stale.

### Step 5 — Write the blog post

Read `references/blog-structure.md` for the full format spec.

**File path (inside the worktree):**

```
src/collections/blog/YYYY/MM-DD-descriptive-slug/index.mdx
```

### Step 6 — Generate the hero image

First, **pick a Five pose deliberately.** Read `references/mascot-five-index.md` - it's the
complete, human-maintained catalog of all 41 poses in `assets/mascot-five/SVG/` (description,
topical tags, whether a Layer5/Meshery logo is already baked in, and whether the pose has genuine
blank signage). Scan the tags for the post's actual theme and pick the best match yourself; don't
default to the same pose across posts. If nothing fits well, fall back to the `climbing-stairs`
pose (plain forward motion, no props that could clash with an unrelated topic) rather than forcing
a thematic pick that doesn't hold up.

If the chosen pose has blank signage (currently `blank-signpost` or `blank-book` - the index says
so explicitly), you can put post-specific text on it with `--sign-text`, e.g. the post's title, a
product name, or a short callout. Don't pass `--sign-text` for any other pose - the generator warns
and ignores it unless the pose has a calibrated zone.

```bash
python3 "<skill_dir>/scripts/generate_hero_image.py" \
  --title "Your Blog Post Title" \
  --subtitle "Optional subtitle" \
  --category "Kubernetes" \
  --five-pose "SVG/pondering-wondering-questioning-confused-thinking.svg" \
  --date "Month DD, YYYY" \
  --author "Layer5 Team" \
  --output "src/collections/blog/YYYY/MM-DD-slug/hero-image.jpg" \
  --repo-root "$WORKTREE_DIR"
```

**The output is a raster, and that is not negotiable.** `--output` must be `.jpg` (recommended),
`.png`, or `.webp`; the generator refuses `.svg` outright. SVG is composed internally and thrown
away, because a shipped SVG breaks two things at once:

- `og:image` and `twitter:image` resolve to the thumbnail's `publicURL`
  (`src/templates/blog-single.js` into `src/components/seo.js`). X, LinkedIn, Facebook, and Slack
  do not render SVG social cards, so an SVG thumbnail unfurls with **no image at all**.
- `childImageSharp` is null for SVG, so `src/components/image.js` falls back to a bare `<img src>`:
  no srcset, no WebP/AVIF, no blur-up, and the blog index downloads the full-size file to paint a
  ~350px card.

JPEG at q88 measures ~70KB against ~310KB for the equivalent SVG, is visually indistinguishable
(mean delta 1.1/255), and lets `gatsby-plugin-sharp` generate modern formats for on-page display
while crawlers still get a JPEG. Rasterizing also bakes the type, so no Qanelas Soft binary is
committed - the old SVG heroes were 73% base64 OTF of a commercially licensed font, once per post.

Rasterizing needs a Chrome/Chromium binary, and Pillow for JPEG/WebP encoding. Without Pillow you
get a PNG plus a warning; without Chrome the generator fails loudly and leaves the working SVG so
no effort is lost. Pass `--keep-svg` to inspect the intermediate - never commit it.

Produces a 1200x630 image that:

- Renders a **real interpolated mesh gradient** background: brand-color control points scattered
  across the canvas, blended by inverse-distance weighting, rendered at low resolution and upscaled
  - the upscale is what produces the soft, organic blend (the same trick behind tools like Figma's
    mesh-gradient plugin). If a generated image ever looks muddy or gray, the bug is in the
    interpolation math or an underpowered `IDW_POWER`, not something to work around with more
    gradient layers.
- **All colors, compositions, and layouts live in `scripts/mesh_palette.py`**, not in the generator.
  If a hero needs adjusting - a composition feels too dark, an accent hue is off-brand - edit that
  file. Nothing else needs to change.
- **Varies per post, deliberately.** `--category` picks a _tone_ (warm or cool), and a hash of the
  title picks the composition within that tone, the layout, and the contrast device. There are 10
  compositions, 4 layouts (the mascot sits left or right, centered or grounded), and 3 devices. An
  earlier version mapped 22 categories onto 2 compositions with one fixed layout; two posts in the
  same category differed by a mean of 8/255 across the background, which is below perceptual
  threshold, and every hero read as one template with the words swapped.
- **Is deterministic.** The same title always produces a byte-identical image, so a hero can be
  regenerated. Selection uses `zlib.crc32`, not Python's `hash()`, which is salted per process and
  previously produced a different image on every run of the same command.
- **Sizes the mascot from its measured artwork**, via `assets/mascot-five/pose-bounds.json`, not
  from its Illustrator artboard. Artboards are not tight - `pondering` paints 113 units of ink in a
  529-unit-wide viewBox - so artboard sizing rendered some poses a quarter of the intended size.
- Keeps a margin from every canvas edge and never lets the footer band cover the mascot's feet.
- Places a feathered contrast device behind Five whose **alpha is solved against the background it
  has to lift**, targeting a luminance of 206. Light compositions get a whisper; dark ones get a
  real light source. A fixed opacity either punched a white hole through light backgrounds or left
  the line art unreadable on dark ones.
- Footer shows the **publish date on the left and the author on the right** (`--date` / `--author`).
  Defaults to today's date and "Layer5 Team" if omitted.

**Five mascot rules:**

- Uses the SVG assets in `assets/mascot-five/SVG/` (this skill's own bundled collection, not
  `src/assets/images/five/` - a separate, thinner set used elsewhere on the site).
- Five's illustrated colors are never modified. They are **not** just black-and-teal - several poses
  have incidental shading grays, near-blacks, and prop colors (a brown rake handle, a yellow spray
  canister) baked into the artwork. Contrast comes from the device placed behind Five, never from
  recoloring the SVG.
- `SVG/Artboard 31.svg` (Five driving a car) is excluded from rotation - Five is a small passenger
  there, not a standalone figure, and looks wrong at this scale. Don't select it.

`--repo-root` is only used to find the Qanelas Soft font (`static/fonts/qanelas-soft/`) - pass the
worktree root (`$WORKTREE_DIR` from Step 4). Without it the script still runs and falls back to a
system sans-serif.

Update frontmatter:

```yaml
thumbnail: ./hero-image.jpg
darkthumbnail: ./hero-image.jpg
```

### Step 7 — Final quality check

Run from inside `$WORKTREE_DIR`. Do not proceed to Step 8 until both gates pass.

#### 7a. Run the linter

```bash
python3 "<skill_dir>/scripts/check_post.py" "src/collections/blog/YYYY/MM-DD-slug/index.mdx"
```

Exit code 0 means clean. It asserts the mechanical half of this step: required frontmatter fields,
the exact `YYYY-MM-DD HH:MM:SS +/-HHMM` date format, thumbnails that exist and are rasters rather
than SVG, category and tags matching `references/tags-categories.md` (case-sensitively), presence
of `intro`/`outro`/`<Blockquote>`/a CTA, `className` rather than `class`, en/em dashes, brand
capitalization in prose, unpinned `:latest` versions, and AI-authorship trailers. It also
cross-checks the taxonomy doc against `CATEGORY_TONE` in `mesh_palette.py` so the two cannot drift.

This replaced a hand-ticked checklist. Every item above was previously a prose assertion an agent
could tick by eye, and the first run of the linter against the two posts already merged to `master`
found an SVG thumbnail on both and a `Meshmates` capitalization error - none of which the checklist
had caught.

#### 7b. Build the blog collection

```bash
BUILD_FULL_SITE=false LITE_BUILD_PROFILE=blog NODE_OPTIONS=--max-old-space-size=8192 npx gatsby build
```

The post is MDX compiled at build time, so an unclosed tag, a bad component import, or a missing
image import fails the build. That is what this step is for.

**Build the blog collection, not the whole site.** `npm run build` sets `BUILD_FULL_SITE=true` and
compiles members, integrations, news, events, and resources as well - none of which a blog post can
break, and all of which cost many minutes. The `blog` profile in
[`src/utils/build-collections.js`](../../../src/utils/build-collections.js) excludes exactly those.
`npm run dev` (which is `develop:lite` on the `core` profile) is the wrong tool here too: `core`
excludes `blog`, so it would skip the very thing you are trying to compile.

CI (`.github/workflows/checks.yml`) runs the full-site build on the PR, so full-site coverage is not
lost by scoping locally - it just happens on the runner instead of on your laptop.

#### 7c. Judgement calls the linter cannot make

- [ ] Every shell command sequence is internally consistent - read them top to bottom as if executing on a fresh cluster. If step N disables or skips a component, no later step can reference that component
- [ ] Namespace, service name, and label selectors are consistent across all commands
- [ ] `kubectl port-forward`, `kubectl get`, and `kubectl logs` reference resources that preceding steps actually created
- [ ] If the post references a Meshery or Kanvas feature, grep the docs repos to confirm the feature name and CLI flags are current
- [ ] At least one in-body image, each with descriptive alt text (not checked by the linter)
- [ ] Multiple `<Link>` components for internal navigation
- [ ] Posts about specific infrastructure patterns embed `<MesheryDesignEmbed>` with a matching design from the table in `references/blog-structure.md`
- [ ] Technical posts: consider `resource: true`
- [ ] The post reads as the author's own work. Naming an AI product is fine when it is the subject matter; claiming AI authorship is not

### Step 8 — Commit, push, auto-merge, and remove the worktree

Land the post on `master` without leaving a PR open for review. The repo's standard merge strategy is regular fast-forward; the workflow below produces a single signed-off commit on top of `origin/master` and merges it via `gh pr merge --merge --delete-branch`.

**Authorship rule (non-negotiable):** the commit message, PR title, PR body, and any other text introduced by this skill must contain no reference to AI assistants, AI authoring tools, "Co-Authored-By" trailers, or automation by name. The signoff is the user's configured `user.name <user.email>`, appended only by `git commit -s`. Do not add `--author`, do not add trailers, do not add "generated with" lines.

```bash
# Run from inside $WORKTREE_DIR
cd "$WORKTREE_DIR"

TITLE="<the blog post's title>"   # same as the post's frontmatter title
POST_DIR="src/collections/blog/YYYY/MM-DD-${SLUG}"

# Stage only this post's directory. Never `git add` the whole year folder -
# that sweeps up any unrelated stray file sitting in it.
git add "$POST_DIR"
git status --short          # confirm nothing unexpected is staged
git commit -s -m "blog: ${TITLE}"

# Push and open the PR
git push -u origin "$BRANCH"
PR_URL=$(gh pr create \
  --base master \
  --head "$BRANCH" \
  --title "blog: ${TITLE}" \
  --body "Adds the \`${SLUG}\` blog post under \`src/collections/blog/\`.")

# Wait for CI before merging. checks.yml runs `npm run build` and eslint; a
# broken MDX post that lands on master breaks the production deploy.
gh pr checks "$PR_URL" --watch

# Merge only once checks are green (regular fast-forward, no review wait)
gh pr merge --merge --delete-branch "$PR_URL"

# Tear down the worktree once the merge is confirmed
cd "$REPO_ROOT"
git worktree remove "$WORKTREE_DIR"
git -C "$REPO_ROOT" pull --ff-only origin master
```

Failure handling:

- **Never merge without green checks.** `gh pr merge` fires immediately by default; if it is called before CI finishes, a post that fails the build can land on `master` and surface only in the deploy workflow. `gh pr checks --watch` is what makes the local build in Step 7b a double check rather than the only check.
- If `gh pr checks` reports a failure, fix it in the worktree, commit with `-s`, push, and let the checks rerun. Do not merge past a red check.
- If the merge cannot complete (branch protection blocks `--merge`, conflicts on `master`), report the PR URL and the specific blocker; do not remove the worktree until the user decides how to proceed.
- If `git worktree remove` fails because the worktree has untracked files, investigate before forcing - there may be unsaved work. A leftover `hero-image.svg` from `--keep-svg` is the usual culprit; delete it rather than committing it.

End the run with a one-paragraph handoff: the merged PR URL, the post path on `master`, and any follow-ups (e.g. broken cross-links, a Kanvas design ID still to be confirmed).

## Reference files

- **`references/blog-structure.md`** — Complete MDX format, frontmatter fields, all component patterns including `<MesheryDesignEmbed>` with the full table of available designs. Read before writing.
- **`references/tags-categories.md`** — Approved tags and categories, and the source of truth `check_post.py` validates against.
- **`references/docs-sources.md`** — Local doc repo paths, URL mappings, and grep patterns for fact-checking.
- **`references/mascot-five-index.md`** — Catalog of all 41 Five poses: description, topical tags, baked-in logo, and blank-signage flag. Read before Step 6 and pick a pose deliberately - this is the only place pose selection happens, there's no keyword-matching logic in the script.
- **`scripts/generate_hero_image.py`** — Hero image generator. Composes the mesh-gradient background and mascot in SVG, then rasterizes. Deterministic per title.
- **`scripts/mesh_palette.py`** — All hero-image colors, compositions, layouts, and contrast devices. Edit this file, not the generator, when the look needs to change.
- **`scripts/rasterize.py`** — SVG to JPEG/PNG/WebP via headless Chrome. Documents why heroes ship as rasters.
- **`scripts/measure_pose_bounds.py`** — Regenerates `assets/mascot-five/pose-bounds.json`. Run after adding or replacing a pose.
- **`scripts/check_post.py`** — Post linter used in Step 7a. Exit code 0 means clean.
- **`scripts/sync_skill.sh`** — Copies this skill to `~/.claude/skills/` and `~/.agents/skills/`. Run after changing anything here.
- **`assets/mascot-five/SVG/`** — The Five pose collection, indexed by `references/mascot-five-index.md`. Vector only.
- **`assets/mascot-five/pose-bounds.json`** — Measured visible-ink box per pose. The generator sizes the mascot from this, not from the artboard.
- **`assets/sample-hero-images/`** — Canonical hero examples across compositions, layouts, and poses. Look at these before generating to calibrate visual expectations.
- **`CHANGELOG.md`** — What changed between skill versions and why.
