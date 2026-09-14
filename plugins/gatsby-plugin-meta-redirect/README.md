# gatsby-plugin-meta-redirect (vendored)

Writes an `index.html` containing a `<meta http-equiv="refresh">` tag for every
redirect the site creates with Gatsby's `createRedirect` action, so that
redirects keep working on static hosts (GitHub Pages) that cannot serve real
HTTP redirects.

## Why this lives in the repo

This is a local Gatsby plugin rather than an npm dependency. Gatsby resolves
plugins out of the site's `plugins/` directory before it looks in
`node_modules`, so `gatsby-config.js` refers to it by name exactly as before.

It used to be installed straight from git:

```json
"gatsby-plugin-meta-redirect": "github:layer5labs/gatsby-plugin-meta-redirect"
```

npm 12 refuses to fetch git dependencies by default (`EALLOWGIT`), which broke
`npm ci` on a clean clone for anyone on that version. Vendoring the plugin
removes the git fetch entirely instead of asking every contributor to re-enable
git dependency fetching globally.

## Why not the published package

The `gatsby-plugin-meta-redirect` package on npm (1.1.1) is **not** a drop-in
replacement. The Layer5 fork it is vendored from
([layer5labs/gatsby-plugin-meta-redirect](https://github.com/layer5labs/gatsby-plugin-meta-redirect))
changes the emitted markup in two ways the site depends on:

1. it emits a `<link rel="canonical">` next to the meta refresh, pointing at
   `siteUrl + pathPrefix + url`, and
2. it drops the trailing slash from the redirect target when `CI=true`, which
   is the form GitHub Pages expects (see the
   [trailing slash guide](https://slorber.github.io/trailing-slash-guide/)).

Swapping to the registry version would silently regress both.

## Relationship to upstream

Vendored from `layer5labs/gatsby-plugin-meta-redirect` at commit
`51cd94fdb69f73f6f2a0cb7aae9d7d799f1d6e32` - the commit the lockfile pinned
before this directory existed. The only edit made while vendoring is swapping
`fs-extra` for node's built-in `fs/promises`, so the plugin has no dependencies
of its own and needs no install step.

The fork descends from [getchalk/gatsby-plugin-meta-redirect](https://github.com/getchalk/gatsby-plugin-meta-redirect)
and stays under its MIT license; see `LICENSE` in this directory.
