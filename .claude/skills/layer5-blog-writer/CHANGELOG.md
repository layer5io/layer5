# Changelog

All notable changes to the `layer5-blog-writer` skill. Versions follow [semver](https://semver.org):
the major number moves when a generated artifact or a CLI contract changes shape.

The canonical copy lives at `.claude/skills/layer5-blog-writer/` in the
[layer5io/layer5](https://github.com/layer5io/layer5) repo. `scripts/sync_skill.sh` mirrors it to
`~/.claude/skills/` and `~/.agents/skills/`.

## 2.0.0

Breaking: `--output` now takes a raster path and refuses `.svg`. Posts written by 1.x reference
`hero-image.svg` and must be re-pointed at a raster.

### Hero images now ship as rasters

`og:image` and `twitter:image` resolve to the thumbnail's `publicURL`
(`src/templates/blog-single.js` into `src/components/seo.js`), and no major social platform renders
SVG there, so every post produced by 1.x unfurled with no image on X, LinkedIn, Facebook, and
Slack. `childImageSharp` is also null for SVG, so the blog index served the full-size file to paint
a ~350px card with no srcset or modern formats.

Heroes are composed in SVG and rasterized to JPEG q88: ~70KB against ~310KB, visually
indistinguishable (mean delta 1.1/255), and `gatsby-plugin-sharp` can now generate WebP/AVIF for
on-page display while crawlers still get a JPEG. Rasterizing also bakes the type, so the Qanelas
Soft OTF is no longer base64-embedded in every hero - it had been 73% of each file, which meant
committing the binary of a commercially licensed font once per post.

The two posts already on `master` were re-rendered to JPEG and re-pointed.

### Hero images stopped looking identical

- Category selected 1 of 2 compositions; 14 categories shared one list. Category now selects a
  _tone_, and a hash of the title selects among 10 compositions within it.
- One fixed layout. Now 4: the mascot sits left or right, centered or grounded.
- One invariant glow that covered 36% of the canvas. Now 3 feathered contrast devices.
- Measured across 8 heroes, two posts in the same category differed by a mean of 8/255 across the
  background - below perceptual threshold.

### Fixed

- **Non-determinism.** Selection used `hash(("mesh", title))`; Python salts string hashes per
  process, so the same command produced a different image on every run and a hero could never be
  regenerated. The seed is now `zlib.crc32` of the title, and per-choice selection uses
  `blake2b` - a second CRC skewed the three-way device pick (153/133/114 over 400 titles).
- **Mascot sizing.** Placement scaled by the Illustrator artboard rather than the artwork.
  `pondering` paints 113 units of ink in a 529-unit-wide viewBox, so it rendered roughly a quarter
  of the intended size while artboard-filling poses rendered full height. Sizing now reads
  `assets/mascot-five/pose-bounds.json`, measured by `scripts/measure_pose_bounds.py`.
- **Edge clipping.** The mascot zone ran to the canvas edge exactly, so any pose whose ink reached
  its own artboard edge was cropped by the frame. There is now a margin on every side.
- **Footer overlap.** The mascot was centered on full canvas height, so the footer bar painted over
  its feet. The footer band is now reserved.
- **Contrast.** Device alpha is solved against the measured background luminance rather than fixed,
  so light compositions get a whisper and dark ones get a real light source.
- **Category pill accessibility.** White on `#00B39F` measured 2.64:1, failing WCAG AA for the 12px
  label. Now `#1E2117` on the same teal: 6.19:1.
- **XML escaping.** Titles containing `&`, `<`, or `>` produced malformed SVG.
- **Silent category fallback.** An unknown or mis-cased `--category` quietly took the default
  palette. `Internship Programs` and `Programs` were both in the approved taxonomy and missing from
  the palette map, and `Security` was in the map but not the taxonomy. Unknown categories are now a
  hard error, and `check_post.py` cross-checks the two lists.
- **Raster pose paths.** `--five-pose PNG/...` died with a UTF-8 decode traceback; it now explains
  the problem.

### Added

- `scripts/check_post.py` - post linter used by Step 7a. Its first run against the two posts on
  `master` found an SVG thumbnail on both and a `Meshmates` capitalization error that the previous
  hand-ticked checklist had passed.
- `scripts/rasterize.py`, `scripts/measure_pose_bounds.py`, `scripts/sync_skill.sh`.
- `assets/mascot-five/pose-bounds.json`.
- Step 7b: build the **blog collection** before merging
  (`BUILD_FULL_SITE=false LITE_BUILD_PROFILE=blog`), not the full site - nothing a blog post can
  break lives in the other collections, and CI builds the whole site on the PR anyway. Step 8 now
  waits on `gh pr checks --watch` instead of merging immediately, and stages only the post's own
  directory instead of the whole year folder.

### Removed

- `assets/mascot-five/PNG/` - 1.3MB of never-referenced files that only existed as a trap.
- Ten byte-identical duplicate poses (`Artboard 5/8/13/16/18/20/22/25/35/38.svg`).

### Documentation

- `Artboard 41.svg` was on disk and absent from the pose index, which claimed to be complete. Added
  as `bursting-through`.
- `references/blog-structure.md` specified `hero-image.png` in four places, including an
  `import heroImage from "./hero-image.png"` that would fail the Gatsby build, while Step 6
  generated `.svg`.
- The style rule read ``Never use em dashes (`-`). Use a hyphen (`-`)`` - a hyphen in both
  positions, so it forbade nothing. Now named by code point, with a portable check.

## 1.x

Initial skill: MDX scaffolding, brand voice guidance, tag/category taxonomy, mesh-gradient hero
generator with the Five mascot collection, worktree-isolated commit and auto-merge flow.
