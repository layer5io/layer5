# Note for Epic #8297: Add Sub-Issues #8324 and #8330

Please update the Epic description of **#8297 ("Gatsby to Hugo Migration")** to track the following sub-issues under the "Phase 1: Foundation & Infrastructure" section:

```markdown
- [x] #8324: [Hugo] Phase 1 · PR preview deployments for the hugo branch
- [ ] #8330: [Hugo] Phase 1 · PR preview hardening (indexing protection & retention)
```

### Context
- **#8324** established the decoupled two-phase preview pipeline (unprivileged `build-hugo-preview.yml` on `hugo`, validating `deploy-hugo-preview.yml` on `master`, and Gatsby deploy exclusion).
- **#8330** hardens the preview infrastructure with indexing defenses (`<meta name="robots" content="noindex,nofollow">`, root and preview `robots.txt` disallows), proves retention pruning by git commit timestamps, and documents fork safety boundaries.
