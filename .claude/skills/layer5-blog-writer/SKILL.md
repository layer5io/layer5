---
name: layer5-blog-writer
description: Creates complete, publication-ready blog posts for layer5.io/blog with proper MDX structure, frontmatter, Layer5 components (Blockquote, Callout, CTA_FullWidth), and generates branded hero images with Layer5's cosmic visual style. Use this skill whenever the user wants to write a blog post for Layer5, create content for layer5.io, draft a post about Meshery, Kanvas, Kubernetes, cloud native topics, Layer5 community events, DevOps, platform engineering, or any technical tutorial. Also use when the user says "write a blog post", "create a blog post", "add a post to layer5.io", "draft a layer5 article", or mentions blog post + any cloud native/DevOps topic.
---

# Layer5 Blog Writer

You create complete, publication-ready blog posts for [layer5.io/blog](https://layer5.io/blog), generate branded hero images, and ship them all the way to merged on `master`. You produce:

1. A fully-formed `index.mdx` at the correct path in the Layer5 repo
2. A branded hero image (SVG) in the same directory
3. A signed-off commit on a dedicated branch in an isolated worktree
4. A pull request that is auto-merged (regular fast-forward, no review wait)
5. A brief handoff note covering what was created and the merged PR URL

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
complete, human-maintained catalog of every pose in `assets/mascot-five/` (41 poses: description,
topical tags, whether a Layer5/Meshery logo is already baked in, and whether the pose has genuine
blank signage). Scan the tags for the post's actual theme and pick the best match yourself; don't
default to the same pose across posts. If nothing fits well, fall back to the `climbing-stairs`
pose (plain forward motion, no props that could clash with an unrelated topic) rather than forcing
a thematic pick that doesn't hold up.

If the chosen pose has blank signage (currently `blank-signpost` or `blank-book` - the index says
so explicitly), you can put post-specific text on it with `--sign-text`, e.g. the post's title, a
product name, or a short callout. Don't pass `--sign-text` for any other pose - it's silently
ignored unless the pose has a calibrated zone.

```bash
python3 "<skill_dir>/scripts/generate_hero_image.py" \
  --title "Your Blog Post Title" \
  --subtitle "Optional subtitle" \
  --category "Kubernetes" \
  --five-pose "SVG/pondering-wondering-questioning-confused-thinking.svg" \
  --date "Month DD, YYYY" \
  --author "Layer5 Team" \
  --output "src/collections/blog/YYYY/MM-DD-slug/hero-image.svg" \
  --repo-root "$WORKTREE_DIR"
```

Produces a 1200x630 SVG that:

- Renders a **real interpolated mesh gradient** background: brand-color control points scattered
  across the canvas, blended by inverse-distance weighting, rendered at low resolution and embedded
  as a base64 PNG `<image>` that the browser upscales - the upscale is what produces the soft,
  organic blend (the same trick behind tools like Figma's mesh-gradient plugin). This replaced an
  earlier pure-SVG layered-gradient approximation that looked flat and washed-out; if a generated
  image ever looks muddy or gray again, the bug is almost certainly in the interpolation math or an
  underpowered `IDW_POWER`, not something to work around with more gradient layers.
- **All colors live in `scripts/mesh_palette.py`**, not in the generator script itself. If a hero
  image's colors need adjusting - a category feels too dark, an accent hue is off-brand - edit that
  file's `CORNER_WARMTH` / `DEEP_SPACE` control-point lists or the brand hex constants at its top.
  Nothing else needs to change.
- Selects a composition by `--category`: **Corner Warmth** (daytime, warm - Saffron/Banana/Teal) for
  lighter topics, **Deep Space** (night, cool - Steel Teal/Charcoal) for darker/technical topics. See
  `CATEGORY_COMPOSITION` in `mesh_palette.py` for the exact category-to-composition mapping.
- Places two white/off-white control points exactly where Five ends up standing (computed dynamically
  from the chosen pose's own dimensions, not hardcoded), so the clearing behind the mascot always
  lines up regardless of pose aspect ratio.
- Composites the chosen Five pose, scaled to fit both the available height (~92%) and the available
  width of the right-hand zone - portrait and landscape-framed poses (e.g. the wide launching-rocket
  or team-sign poses) both fit without overlapping the text column.
- Adds an off-center white/off-white glow close behind Five so the black line art reads clearly
  against any background color - not a centered radial spotlight.
- Embeds Qanelas Soft font (from `static/fonts/qanelas-soft/`) for brand-accurate typography.
- Footer shows the **publish date on the left and the author on the right** (`--date` / `--author`)
  - not a repeated tagline. Defaults to today's date and "Layer5 Team" if omitted.

**Five mascot rules:**

- Uses real SVG assets from `assets/mascot-five/SVG/` (this skill's own bundled collection, not
  `src/assets/images/five/` - that directory is a separate, thinner set used elsewhere on the site
  and isn't wired into this generator).
- Five's illustrated colors are never modified. They are **not** just black-and-teal - several poses
  have incidental shading grays, near-blacks, and prop colors (a brown rake handle, a yellow spray
  canister) baked into the artwork. Contrast against the background comes from the glow placed behind
  Five, never from recoloring the SVG.
- Five appears large (fit to the right-hand zone, up to ~92% of frame height) - not a small
  decorative accent.
- `SVG/Artboard 31.svg` (Five driving a car) is excluded from the index's normal rotation - Five is a
  small passenger there, not a standalone figure, and looks wrong at this scale. Don't select it.

`--repo-root` is now only used to find the Qanelas Soft font (`static/fonts/qanelas-soft/`) - pass
the worktree root (`$WORKTREE_DIR` from Step 4) as before. Without it, the script still runs and
falls back to a system sans-serif; the mascot and mesh background are unaffected either way, since
they no longer depend on repo-root at all.

See `assets/sample-hero-images/` for visual reference across different category palettes and poses.

Update frontmatter:

```yaml
thumbnail: ./hero-image.svg
darkthumbnail: ./hero-image.svg
```

### Step 7 — Final quality check

Run from inside `$WORKTREE_DIR`. Do not proceed to Step 8 until every box is checked.

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

**Authorship:**

- [ ] No reference to AI assistants, AI tooling, or automated authorship anywhere in the post, frontmatter, metadata, alt text, or comments. The post must read as the author's own work.

### Step 8 — Commit, push, auto-merge, and remove the worktree

Land the post on `master` without leaving a PR open for review. The repo's standard merge strategy is regular fast-forward; the workflow below produces a single signed-off commit on top of `origin/master` and merges it via `gh pr merge --merge --delete-branch`.

**Authorship rule (non-negotiable):** the commit message, PR title, PR body, and any other text introduced by this skill must contain no reference to AI assistants, AI authoring tools, "Co-Authored-By" trailers, or automation by name. The signoff is the user's configured `user.name <user.email>`, appended only by `git commit -s`. Do not add `--author`, do not add trailers, do not add "generated with" lines.

```bash
# Run from inside $WORKTREE_DIR
cd "$WORKTREE_DIR"

TITLE="<the blog post's title>"   # same as the post's frontmatter title
git add "src/collections/blog/$(date -u +%Y)/"   # or the explicit YYYY/MM-DD-slug path
git commit -s -m "blog: ${TITLE}"

# Push and open the PR
git push -u origin "$BRANCH"
PR_URL=$(gh pr create \
  --base master \
  --head "$BRANCH" \
  --title "blog: ${TITLE}" \
  --body "Adds the \`${SLUG}\` blog post under \`src/collections/blog/\`.")

# Auto-merge on behalf of the user (regular fast-forward, no review wait)
gh pr merge --merge --delete-branch "$PR_URL"

# Tear down the worktree once the merge is confirmed
cd "$REPO_ROOT"
git worktree remove "$WORKTREE_DIR"
git -C "$REPO_ROOT" pull --ff-only origin master
```

Failure handling:

- If `gh pr merge` reports the PR is not yet mergeable (e.g. CI check pending or branch protection requires status checks), poll with `gh pr checks "$PR_URL" --watch` and retry the merge. Do not leave the PR half-shipped.
- If the merge cannot complete (branch protection blocks `--merge`, conflicts on `master`), report the PR URL and the specific blocker; do not remove the worktree until the user decides how to proceed.
- If `git worktree remove` fails because the worktree has untracked files, investigate before forcing - there may be unsaved work.

End the run with a one-paragraph handoff: the merged PR URL, the post path on `master`, and any follow-ups (e.g. broken cross-links, a Kanvas design ID still to be confirmed).

## Reference files

- **`references/blog-structure.md`** — Complete MDX format, frontmatter fields, all component patterns including `<MesheryDesignEmbed>` with the full table of available designs. Read before writing.
- **`references/tags-categories.md`** — Approved tags and categories.
- **`references/docs-sources.md`** — Local doc repo paths, URL mappings, and grep patterns for fact-checking.
- **`references/mascot-five-index.md`** — Complete catalog of all 41 Five poses: description, topical tags, baked-in logo, and blank-signage flag. Read before Step 6 and pick a pose deliberately - this is the only place pose selection happens, there's no keyword-matching logic in the script.
- **`scripts/generate_hero_image.py`** — Hero image generator: renders a real interpolated mesh-gradient background (stdlib-only PNG encoder, no Pillow/numpy dependency) and composites the chosen Five pose on top.
- **`scripts/mesh_palette.py`** — All hero-image colors and composition control points. Edit this file, not the generator, when a color needs to change.
- **`assets/mascot-five/`** — The full Five pose collection (`SVG/` + `PNG/`), indexed by `references/mascot-five-index.md`.
- **`assets/sample-hero-images/`** — Canonical hero image examples showing the mesh-gradient background, Five mascot treatment, and footer layout across different category palettes and poses. Read these before generating an image to calibrate visual expectations.
