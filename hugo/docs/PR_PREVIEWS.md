# Hugo PR Preview Deployments

This document describes how automated PR previews work for the `hugo` branch of `layer5io/layer5`, their architecture, security controls, and maintainer setup requirements.

---

## Overview & Architecture

Every pull request targeting the `hugo` branch that modifies files under `hugo/**` or preview workflow definitions automatically generates an ephemeral preview deployed to GitHub Pages.

Previews are architected as a two-phase decoupled workflow to ensure security:

```
[PR from contributor / fork]
          │
          ▼
1. Build Hugo PR Preview (.github/workflows/build-hugo-preview.yml)
   - Runs on `pull_request` event in unprivileged context (`contents: read`).
   - Zero repository secrets exposed.
   - Builds Hugo site with:
       --baseURL "https://layer5.io/hugo-preview/pr-<N>/"
       --environment preview
   - Emits <meta name="robots" content="noindex,nofollow"> and robots.txt Disallow: /
   - Indexes content with Pagefind (configured for subpath).
   - Generates and uploads artifact containing `hugo/public/` and `pr-meta/`.
          │
          ▼ (workflow_run event on default branch)
2. Hugo Preview Post-Build (.github/workflows/deploy-hugo-preview.yml)
   - Runs on default branch (`master`) with `workflow_run` trigger.
   - Granted write permissions (`contents: write`, `pull-requests: write`).
   - Treats downloaded artifact as UNTRUSTED:
       * Validates PR number is an integer.
       * Validates action, commit SHA, and base_ref.
       * Calls GitHub API to verify PR exists, targets branch `hugo`, and commit SHA matches `workflow_run.head_sha`.
   - Never executes any code from the artifact.
   - Deploys static files to `hugo-preview/pr-<N>/` on `gh-pages` branch.
   - Posts or updates a sticky comment on the PR with the live URL.
   - On PR closure: removes preview files from `gh-pages` and updates sticky comment.
   - Housekeeping: prunes old previews beyond the retention limit.
```

---

## URL Format

Previews are published at:
```
https://layer5.io/hugo-preview/pr-<PR_NUMBER>/
```

Example for PR #8350:
`https://layer5.io/hugo-preview/pr-8350/`

---

## Preview Lifecycle & Events

1. **PR Opened / Synchronized / Reopened**:
   - `build-hugo-preview.yml` builds the site and bundles the search index.
   - `deploy-hugo-preview.yml` publishes the artifact to `hugo-preview/pr-<PR_NUMBER>/` on `gh-pages`.
   - Sticky PR comment is posted or updated with the live preview link.
2. **PR Closed / Merged**:
   - `build-hugo-preview.yml` records the `closed` action without building.
   - `deploy-hugo-preview.yml` removes `hugo-preview/pr-<PR_NUMBER>/` from `gh-pages`.
   - Sticky PR comment is updated to state that the preview was removed.
3. **Retention & Pruning**:
   - To keep total deployment size well under GitHub Pages' 1 GB limit, only the **3 most recently updated** previews are retained on `gh-pages`.
   - When a preview is pruned, a comment is left on that PR explaining the automatic cleanup.

---

## Subpath & Namespace Isolation

- **Directory Namespace**: Hugo previews are deployed under `hugo-preview/pr-<N>/`.
- **Gatsby Previews**: Gatsby previews are deployed under `pr-preview/pr-<N>/`.
- **Clean Separation**: Neither workflow touches the other's directory. All prune and deployment scripts strictly filter on their respective prefix (`hugo-preview` vs `pr-preview`).

---

## Search Indexing (Pagefind) Under Subpath

Pagefind search UI is initialized in `assets/js/main.js` with dynamic `bundlePath`:
```javascript
const baseMeta = $('meta[name="base-url"]')?.getAttribute('content');
const rawBase = baseMeta || document.documentElement.dataset.base || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

new window.PagefindUI({
  element: '#search',
  showSubResults: true,
  showImages: false,
  bundlePath: `${base}pagefind/`
});
```
This ensures Pagefind loads search chunks and WASM modules from `/hugo-preview/pr-<N>/pagefind/` instead of the root.

---

## Search Engine Protection

To prevent search engines from indexing ephemeral previews:
1. `head.html` checks `hugo.Environment == "preview"` and injects:
   ```html
   <meta name="robots" content="noindex,nofollow">
   ```
2. `robots.txt` in preview environment outputs:
   ```txt
   User-agent: *
   Disallow: /
   ```

---

## How to Force a Rebuild

If a preview deployment needs to be re-run:
1. Push an empty commit to the PR branch:
   ```bash
   git commit --allow-empty -m "chore: trigger preview rebuild"
   git push origin <your-branch>
   ```
   *or*
2. A maintainer can click **Re-run all jobs** on the corresponding `Build Hugo PR Preview` run in GitHub Actions.

---

## Maintainer Configuration Checklist

Repository administrators should verify the following GitHub settings:

1. **GitHub Pages Source**:
   - Navigate to **Settings** -> **Pages**.
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select `gh-pages` and `/ (root)`.
2. **Workflow Permissions**:
   - Navigate to **Settings** -> **Actions** -> **General** -> **Workflow permissions**.
   - Select **Read and write permissions** (required for `deploy-hugo-preview.yml` to push to `gh-pages` and post PR comments).
3. **Branch Protection on `gh-pages`**:
   - If branch protection is enabled on `gh-pages`, ensure `github-actions[bot]` has bypass privileges or permission to push commits directly, otherwise the preview deploy step will be blocked.
4. **Default Branch Requirement for `workflow_run`**:
   - GitHub Actions requires that any workflow triggered by `workflow_run` exists on the repository's default branch (`master`).
   - Consequently, `.github/workflows/deploy-hugo-preview.yml` is already merged to `master`, so it will pick up builds from this PR.
