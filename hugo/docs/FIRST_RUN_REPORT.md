# First Run Report: Hugo Proof of Concept

## 1. Environment

- **Hugo Version**: `hugo v0.162.1-bba860e3eda3091efe8c6d1a96bc49a29ad2d5f6+extended windows/amd64` (Confirmed Extended edition; matches the CI-pinned Hugo version `0.162.1`).
- **Node.js Version**: `v26.5.0` (Environment used for the initial run; CI uses Node.js `22`).
- **Operating System**: Windows (AMD64).

---

## 2. Issues Encountered and Fixes Applied

### A. Redirects File Output Extension Bug

- **Files Modified**:
  - `hugo.yaml`
  - `layouts/index.redirects` (renamed from `layouts/index.redirects.txt`)
- **Problem**:
  In `hugo.yaml`, the `Redirects` output format used `mediaType: text/plain` with `baseName: _redirects`. Because `text/plain` in Hugo has a `.txt` suffix and a default delimiter `.`, Hugo generated `public/_redirects.txt` instead of Netlify/Cloudflare-compatible `public/_redirects`.
- **Fix**:
  1. Defined a custom media type `text/netlify` in `hugo.yaml` with `delimiter: ""` and `suffixes: [""]`.
  2. Pointed the `Redirects` output format to `mediaType: text/netlify`.
  3. Renamed `layouts/index.redirects.txt` to `layouts/index.redirects` to match Hugo's template lookup convention for extensionless custom output formats.

### B. Benchmark Execution on Windows

- **Files Modified**:
  - `scripts/bench.mjs` (created)
  - `scripts/bench.sh` (delegated to Node runner)
  - `Makefile` (updated `bench:` target to invoke `node scripts/bench.mjs`)
- **Problem**:
  `make bench` failed on Windows with `CreateProcess(NULL, env bash ...)` because Windows does not have Unix `/usr/bin/env` in system PATH. Additionally, `scripts/bench.sh` relied on GNU/BSD `/usr/bin/time`, `awk`, and Unix `find | wc -l`, none of which are present on native Windows.
- **Fix**:
  Created a cross-platform benchmark script `scripts/bench.mjs` using native Node.js (already required for the tooling suite). It generates synthetic content, runs Hugo with memory monitoring (`--printMemoryUsage`), measures wall time with `performance.now()`, counts HTML files recursively, outputs `.bench/result.json`, and appends to `GITHUB_STEP_SUMMARY` when present. Updated `Makefile` to run `node scripts/bench.mjs` and updated `scripts/bench.sh` to forward arguments to `node scripts/bench.mjs "$@"` for CI compatibility.

---

## 3. Benchmark Results

Measured from running `make bench` against the synthetic 1,210-page test suite:

- **Synthetic Input Pages**: 1,210
- **HTML Pages Generated**: 1,403
- **Build Time**: 106.72 s
- **Memory Method**: `go-printMemoryUsage-approx`
- **Approx Go Memory**: 47 MB (not peak RSS)
- **Hugo Version**: `hugo v0.162.1-bba860e3eda3091efe8c6d1a96bc49a29ad2d5f6+extended`
- **Operating System**: `win32`
- **Result Artifact**: Recorded in `.bench/result.json`
  _(Note: As instructed, these numbers have NOT been written into `data/migration.json` yet)._

---

## 4. Redirects Verification

- **Status**: **Verified and working.**
- `public/_redirects` is generated at the root of `public/` (without any `.txt` extension).
- Contents verified:
  ```
  /blog/meshery/getting-started /blog/2026/getting-started-with-meshery/ 301
  ```
  This matches the alias configured in `content/blog/getting-started-with-meshery/index.md`.

---

## 5. Converter Dry-Run Status

- **Status**: **Skipped**
- **Reason**: The `layer5io/layer5` repository checkout was not found next to this folder (searched `../layer5/src/collections`).
- **Clone Command**: Run the following command from the parent directory:
  ```bash
  git clone https://github.com/layer5io/layer5.git
  ```
  or from within this repository:
  ```bash
  git clone https://github.com/layer5io/layer5.git ../layer5
  ```

---

## 6. Observations and Non-Blocking Notes

1. **Hugo Deprecation Warnings on v0.162.1**:
   - `WARN deprecated: .Site.Data was deprecated in Hugo v0.156.0 and will be removed in a future release. Use hugo.Data instead.`
   - `WARN deprecated: .Site.AllPages was deprecated in Hugo v0.156.0 and will be removed in a future release. See https://discourse.gohugo.io/t/56732.`
     _Decision_: Kept as-is during the initial run because the CI environment at that time used Hugo `0.145.0`, where `hugo.Data` was not available and `.Site.Data` / `.Site.AllPages` were standard. The current CI version is `0.162.1`; these deprecation warnings should be reviewed separately.
2. **Tooling Unit Tests Pass**:
   - `make test` executes 23 unit tests across `scripts/test/*.test.mjs` (including tests for GNU/BSD time parsers, Go memory parsers, and platform detection) with 23 passing and 0 failing.
3. **Core Site Pages Generated**:
   - All expected routes verified in `public/`: `/` (home), `/blog/`, `/cloud-native-management/meshery/integrations/`, `/members/`, `/handbook/`, and `/migration/`.

---

## 7. Benchmark Method

To ensure reliable, cross-platform performance tracking that works on developer machines and in CI without misrepresenting figures, `scripts/bench.mjs` supports three explicit measurement methods:

1. **`gnu-time-max-rss` (Linux / CI)**:
   - Uses `/usr/bin/time -v hugo ...` to measure execution.
   - Extracts `Maximum resident set size (kbytes)` and `Elapsed (wall clock) time`.
   - **Metrics validity**: Produces genuine operating-system-level process peak RSS.
   - **Reported keys**: Sets `memory_method: "gnu-time-max-rss"` and populates `peak_rss_mb`.

2. **`bsd-time-max-rss` (macOS)**:
   - Uses `/usr/bin/time -l hugo ...` to measure execution.
   - Extracts `maximum resident set size` (bytes) and `real` time.
   - **Metrics validity**: Produces genuine operating-system-level process peak RSS.
   - **Reported keys**: Sets `memory_method: "bsd-time-max-rss"` and populates `peak_rss_mb`.

3. **`go-printMemoryUsage-approx` (Windows / Fallback)**:
   - Used on Windows or environments where `/usr/bin/time` is unavailable.
   - Hugo runs directly with `--printMemoryUsage`, capturing Go runtime memory statistics (`Sys = <X> MB`).
   - Wall-clock time is measured via Node's `performance.now()`.
   - **Metrics validity**: This is an internal runtime approximation of allocated memory, **NOT** the OS process peak RSS.
   - **Reported keys**: Sets `memory_method: "go-printMemoryUsage-approx"` and populates `approx_go_memory_mb` instead of `peak_rss_mb`.

### Quoting Peak Memory in Reports

- **Only** figures generated by `gnu-time-max-rss` (such as those from CI runs on `ubuntu-latest`) or `bsd-time-max-rss` can be quoted as real **Peak RSS**.
- Any figure obtained from `go-printMemoryUsage-approx` must be explicitly identified as approximate Go runtime memory (`approx_go_memory_mb`) and must not be presented as true peak memory.
