#!/usr/bin/env bash
#
# Mirror this skill from its canonical home in the layer5 repo to the two
# agent skill directories.
#
# Why this exists: ~/.claude/skills/layer5-blog-writer had drifted into a stale
# fork. It carried an older generator with no pose-selection system and no
# assets/mascot-five/ at all, so --five-pose could not work there. Inside the
# layer5 repo the project copy shadows it and everything looks fine; anywhere
# else the broken copy is what runs. Copying by hand is what created that
# situation, so copy with this instead.
#
#   ./scripts/sync_skill.sh            # sync to ~/.claude and ~/.agents
#   ./scripts/sync_skill.sh --check    # report drift, change nothing (exit 1 if any)
#
# Run it after changing anything in the skill.

set -euo pipefail

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILL_NAME="$(basename "$SKILL_DIR")"
TARGETS=("$HOME/.claude/skills/$SKILL_NAME" "$HOME/.agents/skills/$SKILL_NAME")

CHECK_ONLY=0
[[ "${1:-}" == "--check" ]] && CHECK_ONLY=1

VERSION="$(sed -n 's/^version: *//p' "$SKILL_DIR/SKILL.md" | head -1)"
if [[ -z "$VERSION" ]]; then
  echo "error: SKILL.md has no 'version:' field in its frontmatter" >&2
  exit 1
fi

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
    if diff_out=$(rsync -rin --delete "${EXCLUDES[@]}" "$SKILL_DIR/" "$target/") && [[ -z "$diff_out" ]]; then
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
