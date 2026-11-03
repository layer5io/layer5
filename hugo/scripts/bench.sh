#!/usr/bin/env bash
# Reproducible build benchmark: synthetic 1,210-page site → wall time, peak RSS, page count.
# Runs cross-platform via scripts/bench.mjs
set -euo pipefail
cd "$(dirname "$0")/.."
exec node scripts/bench.mjs "$@"
