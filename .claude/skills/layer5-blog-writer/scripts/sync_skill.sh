#!/usr/bin/env bash
#
# Mirror this skill from its canonical home in the layer5 repo
# (layer5io/layer5, .claude/skills/layer5-blog-writer) to every other copy.
#
# Why this exists: copies of this skill drift, and a stale copy looks exactly
# like a current one. ~/.claude/skills/layer5-blog-writer sat at 1.x for months
# after 2.0.0 shipped, and a session run from inside the layer5 repo still
# loaded that user-level copy rather than the project copy - so the project
# copy does NOT reliably shadow it. The skill is also vendored into other
# repos (the koopverse/firstmate fleet pack, layer5io/meshery-cloud's
# .agents/skills), which nothing kept current. Copying by hand is what created
# all of that, so copy with this instead.
#
#   ./scripts/sync_skill.sh                    # sync to ~/.claude and ~/.agents
#   ./scripts/sync_skill.sh --check            # report drift, change nothing (exit 1 if any)
#   ./scripts/sync_skill.sh [--check] DIR...   # also sync/check vendored copies, e.g.
#       ~/code/firstmate/fleet/skills/layer5-blog-writer
#       ~/code/meshery-cloud/.agents/skills/layer5-blog-writer
#
# Vendored copies live in other git repos: syncing one changes that repo's
# working tree, and still needs a commit and PR there.
#
# Run it after changing anything in the skill.

set -euo pipefail

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
SKILL_NAME="$(basename "$SKILL_DIR")"

CHECK_ONLY=0
if [[ "${1:-}" == "--check" ]]; then
  CHECK_ONLY=1
  shift
fi

# Refuse to run from a copy: the script is mirrored along with everything else,
# and running a stale copy's sync would overwrite every current copy with it.
repo_root="$(git -C "$SKILL_DIR" rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "$repo_root" || ! -d "$repo_root/src/collections/blog" \
      || "$SKILL_DIR" != "$(cd "$repo_root" && pwd -P)/.claude/skills/$SKILL_NAME" ]]; then
  echo "error: run this from the canonical copy at <layer5 repo>/.claude/skills/$SKILL_NAME," >&2
  echo "       not from $SKILL_DIR" >&2
  exit 1
fi

VERSION="$(sed -n 's/^version: *//p' "$SKILL_DIR/SKILL.md" | head -1)"
if [[ -z "$VERSION" ]]; then
  echo "error: SKILL.md has no 'version:' field in its frontmatter" >&2
  exit 1
fi

# Resolve symlinks and de-duplicate: ~/.claude/skills is commonly a symlink to
# ~/.agents/skills, which would otherwise be synced twice and reported twice.
resolve() {
  local dir="$1"
  if [[ -d "$dir" ]]; then
    (cd "$dir" && pwd -P)
  elif [[ -d "$(dirname "$dir")" ]]; then
    echo "$(cd "$(dirname "$dir")" && pwd -P)/$(basename "$dir")"
  else
    echo "$dir"
  fi
}

TARGETS=()
for candidate in "$HOME/.claude/skills/$SKILL_NAME" "$HOME/.agents/skills/$SKILL_NAME" "$@"; do
  resolved="$(resolve "$candidate")"
  [[ "$resolved" == "$SKILL_DIR" ]] && continue
  [[ " ${TARGETS[*]-} " == *" $resolved "* ]] && continue
  TARGETS+=("$resolved")
done

# Excluded from the mirror: VCS noise, macOS turds, Python bytecode, and any
# working SVG left behind by generate_hero_image.py --keep-svg.
EXCLUDES=(
  --exclude '.git' --exclude '.DS_Store' --exclude '__pycache__'
  --exclude '*.pyc' --exclude '*.raster.png' --exclude '.*.raster.html'
)

drift=0
for target in "${TARGETS[@]}"; do
  if [[ $CHECK_ONLY -eq 1 ]]; then
    if [[ ! -d "$target" ]]; then
      echo "MISSING  $target"
      drift=1
      continue
    fi
    # Drift means content, not timestamps. A git checkout of an identical copy
    # has fresh mtimes, so: --checksum to compare bytes, then drop itemized
    # lines whose only flag is a time change (.f..T.... in openrsync on macOS,
    # .f..t...... in GNU rsync) - both still list those even with --checksum.
    if diff_out=$(rsync -rinc --delete "${EXCLUDES[@]}" "$SKILL_DIR/" "$target/" \
                    | { grep -vE '^\.[a-zA-Z]\.\.[tT]\.+ ' || true; }) \
       && [[ -z "$diff_out" ]]; then
      echo "in sync  $target"
    else
      echo "DRIFTED  $target"
      echo "$diff_out" | sed 's/^/           /'
      drift=1
    fi
  else
    mkdir -p "$(dirname "$target")"
    rsync -a --delete "${EXCLUDES[@]}" "$SKILL_DIR/" "$target/"
    echo "synced   $target"
  fi
done

if [[ $CHECK_ONLY -eq 1 ]]; then
  [[ $drift -eq 0 ]] && echo "$SKILL_NAME v$VERSION: all copies in sync" \
                     || echo "$SKILL_NAME v$VERSION: copies have drifted - run ./scripts/sync_skill.sh"
  exit $drift
fi

echo "$SKILL_NAME v$VERSION mirrored to ${#TARGETS[@]} location(s)"
