# Changelog

All notable changes to the `layer5-blog-writer` skill. Versions follow [semver](https://semver.org):
the major number moves when a generated artifact or a CLI contract changes shape.

The canonical copy lives at `.claude/skills/layer5-blog-writer/` in the
[layer5io/layer5](https://github.com/layer5io/layer5) repo. `scripts/sync_skill.sh` mirrors it to
`~/.claude/skills/`, `~/.agents/skills/`, and any vendored copy passed to it (the koopverse/firstmate
fleet pack, layer5io/meshery-cloud's `.agents/skills/`).

## 2.1

### Brand checks stop flagging repo slugs and start checking the visible copy

`check_post.py` flagged `meshery/meshery` in link text on the 10,000-stars post:
`mask_prose` blanked the `href` attribute but not the visible text repeating the
same slug. Link text that matches the href's trailing path is now masked before
brand rules run; prose link text is still checked.

The same pass closed two gaps on the other side. Frontmatter `title`, `subtitle`,
and `description` were skipped wholesale, and `ATTR_RE` blanked every JSX
attribute value, so a lowercase brand in a title or a `<Blockquote quote="...">`
passed silently. Both are now checked as prose. Route and file-path attributes
(`to="/community/meshmates"`) stay exempt.

### Hero titles and subtitles warn instead of truncating silently

The renderer sliced titles to 3 lines and subtitles to 2 with `[:3]`/`[:2]`,
the same silent truncation 2.0.1 removed from sign text. Wrapping now lives in
`fit_title`/`fit_subtitle`, which return the dropped words: the generator warns
on stderr naming them, and `check_post.py` fails on the same condition through
the same helpers, so the two cannot disagree. Its first run found five
over-long titles/subtitles already on `master`.

### Structural checks ignore fenced code and tolerate extra attributes

`intro`/`outro`/`<Blockquote>`/CTA matching read the whole body including
fenced code blocks, so a post quoting those tags in a sample passed without any
of them. The check now strips fences and JSX comments first, and the
intro/outro match is a regex, so `<div className="intro" id="lede">` no longer
reports "missing".

### Failed runs leave nothing behind, and `.svg` is refused before mkdir

2.0.1 cleaned the temp working directory on success but leaked one `/tmp` dir
per failed run. The working SVG now lives in a `TemporaryDirectory`, which
removes itself on both paths; the failure message points at `--keep-svg` for
inspecting it instead of naming a deleted path. The `.svg` output refusal also
moved ahead of directory creation, so a refused invocation creates nothing.

### Step 8 no longer claims a fast-forward

`gh pr merge --merge` creates a merge commit, which the repo history confirms;
SKILL.md called it "regular fast-forward" in three places. It now says merge
commit, and the `TITLE=` assignment carries a quoting note for titles
containing `"`, `$`, backticks, or `\`.

### Tests

`scripts/test_check_post.py` and `scripts/test_generate_hero_image.py` (27
tests, stdlib `unittest`, no Chrome or Pillow needed) cover every fix above.
Run with `python3 -m unittest discover -s scripts` from the skill root.

## 2.0.1

### Sign text is centered on the sign, and never silently truncated

`--sign-text` rendered too high on both blank-signage poses: two-line text on `blank-signpost` ran
through the top edge of the board. Two causes compounded. `build_sign_text_overlay` centered each
line's SVG `y`, which is the alphabetic baseline, so every block sat half a cap height above its
slot. And both zones in `mesh_palette.SIGN_TEXT_ZONES` had been eyeballed: each was wider than the
surface it sits on and centered above it. The zones are now measured from a per-row dark-pixel
profile of each pose rendered at viewBox size (signpost board x 198-405, y 266-346; book pages
x 195-372, y 208-355), and carry a `max_height` and `min_font_size`.

Text that did not fit used to be cut to its first three lines with no message. The generator now
shrinks the font toward `min_font_size` until the block fits, and exits with an error naming the
zone when it cannot.

### A missing Pillow fails before anything lands in the post directory

Without Pillow, a `.jpg` run wrote `hero-image.png`, exited 1 anyway, and wrote the working SVG to
`hero-image.svg` beside it - the exact filename every 1.x post committed, so it was one `git add`
away from shipping the broken format 2.0.0 removed. SKILL.md described the same case as "a PNG plus
a warning". The Pillow check now runs before Chrome launches, nothing is written on failure, and
the working SVG stays in its temp directory. The temp directory is also removed after a successful
run; it previously leaked on every invocation.

### sync_skill.sh checks content, refuses to run from a copy, and covers vendored copies

- `--check` compared size and mtime, so an identical copy checked out by git read as drifted. It
  now compares checksums.
- The script is mirrored with everything else, and running a stale copy's sync would overwrite the
  current copies. It now refuses to run anywhere but `<layer5 repo>/.claude/skills/`.
- Symlinked targets are resolved and de-duplicated; `~/.claude/skills` is often a symlink to
  `~/.agents/skills`, which was synced and reported twice.
- Extra directories can be passed to sync or check vendored copies in other repos.
- The header claimed the project copy shadows the user-level copy inside the layer5 repo. It does
  not reliably: a session in this repo loaded the stale 1.x user-level copy and shipped an SVG hero
  in an open PR before the drift was caught.

### The hero image no longer appears twice

`references/blog-structure.md` imported `heroImage` and placed it in the body of its post template,
and SKILL.md's checklist asked for "at least one in-body image". The blog template already renders
`thumbnail` above the title, so every post that followed the template showed the same image twice
in a row. The template no longer imports the hero, the checklist asks for alt text on genuine
in-body images instead, and `check_post.py` flags any body `<img>` whose source is the thumbnail
file. Its first run found two posts on `master` doing this (AGENTS.md: One File to Guide Them All,
and Meshery Hits 10,000 GitHub Stars); both are fixed in the same change.

### Docs

- SKILL.md no longer links `src/utils/build-collections.js` by a relative path that only resolves
  inside the layer5 repo, so vendored copies are byte-identical to this one.
- Em dashes removed from SKILL.md and `references/`, which the skill's own voice rules forbid.

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
