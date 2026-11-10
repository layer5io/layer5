# Gatsby URL migration — Issue #8301

Updated 2026-11-04.

This document describes the Gatsby-compatible URL conversion implemented for Issue #8301. The Hugo site still contains only partial POC content; full-site URL parity is not expected until the content migration is complete.

## Issue overview

Issue #8301 replaces guessed Hugo permalink patterns with the actual public routes produced by Gatsby.

Gatsby derives `fields.slug` from collection-specific frontmatter and its own `slugify()` helper, then `createPages` applies additional route changes for integrations and creates some pages not represented by a single content URL.

A folder-derived Hugo `slug` and generic `permalinks:` rules cannot reproduce those steps.

The converter now:

- Emits explicit trailing-slash `url:` values for eligible individual pages.
- Preserves Gatsby's collection-specific URL generation rules.
- Handles explicit permalink overrides.
- Preserves Gatsby's publication and page-visibility behavior.
- Prevents data-only content from becoming public pages.
- Detects duplicate final URLs before Hugo can overwrite content.

It does not change content wording, layouts, or Gatsby behavior.

## Original Gatsby behavior

### Slugification

`src/utils/slugify.js` exports `slugify(text)`. Its exact transformation order is preserved in `scripts/migrate-mdx.mjs`:

```js
text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w\-]+/g, "")
  .replace(/\-\-+/g, "-")
  .replace(/^-+/, "")
  .replace(/-+$/, "");
```

In particular, this does not transliterate Unicode and it preserves underscores.

### Collection routes

`gatsby-node.js` determines the collection from the source instance and, for `collections`, the first segment of the parent relative directory.

In `onCreateNode`, an explicit `frontmatter.permalink` takes precedence and first produces `/${collection}/${permalink}`.

Otherwise, the route rules are:

| Collection                        | Default Gatsby slug                                                                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog`                            | `/blog/<slugify(category)>/<slugify(title)>` when published                                                                                                          |
| `news`                            | `/company/news/<slugify(title)>`                                                                                                                                     |
| `service-mesh-books`              | `/learn/service-mesh-books/<slugify(title)>`                                                                                                                         |
| `workshops`                       | `/learn/workshops/<slugify(title)>`                                                                                                                                  |
| `kanvas-labs`                     | `/learn/kanvas-labs/<slugify(title)>`                                                                                                                                |
| `resources`                       | `/resources/<slugify(category)>/<slugify(title)>` when published                                                                                                     |
| `members`                         | `/community/members/<slugify(name)>` when published                                                                                                                  |
| `handbook`                        | `/community/handbook/<slugify(title)>`                                                                                                                               |
| `events`                          | `/community/events/<slugify(title)>` when a title exists                                                                                                             |
| `sistent`                         | `/projects/sistent/components/<last-relative-directory>/<filename>`; `index` has no filename suffix, and an empty relative directory is not replaced with a fallback |
| Other page-generating collections | `/<collection>/<slugify(title)>`                                                                                                                                     |

Gatsby's `createPages` prefixes every integration page path with `/cloud-native-management/meshery`. This is applied after `onCreateNode`, so an integration with an explicit permalink still receives the prefix.

The explicit-permalink branch precedes all collection-specific behavior.

For example, the published member `yash-sharma-2` resolves to `/members/yash-sharma-2/`, despite the normal member route being under `/community/members/`.

The source permalink `../careers/internships/` remains `/programs/../careers/internships/` in converter output; the converter does not normalize or reinterpret it.

### Page creation and publication

The following collections are queried with `published: true` when Gatsby creates individual pages:

- `blog`
- `news`
- `service-mesh-books`
- `resources`
- `members`
- `integrations`
- `events`
- `programs`
- `careers`

Members and integrations are created only in Gatsby's full-site build.

`handbook`, `workshops`, `kanvas-labs`, and `sistent` are not filtered by `published` in their `createPages` queries.

The converter therefore removes Gatsby's `published` field but only uses Hugo's `draft: true` for collections whose Gatsby page query requires `published: true`.

In particular, `published: false` does not suppress a workshop, lab, handbook page, or Sistent component page.

Gatsby does not create individual pages for `projects`, `use-cases`, or `service-mesh-workshops`.

The converter marks these with Hugo's current `build: { render: never }` front matter, including documents with no source front matter.

For a published event with no title or permalink, `onCreateNode` leaves the slug empty, but `createPages` still sends that empty path to Gatsby's `createPage` API, which rejects a page without a path.

The converter fails explicitly for this invalid input instead of letting Hugo publish a folder-name URL. An explicit permalink still takes precedence.

### Special routes and duplicate protection

- **Integrations:** The final path is `/cloud-native-management/meshery/integrations/<slug>/`.
- **Executive bios:** Gatsby adds `<member.fields.slug>/bio` for published executive members. The converter emits the corresponding `/community/members/<slug>/bio/` page and points `member_page_path` at the primary member URL. The Hugo project has no `executive-bio` layout yet, so visual parity for this page remains follow-up work; no new layout was introduced here.
- **Programs:** Gatsby also creates one `/programs/<programSlug>` page per program, selecting the latest document by `fields.slug`. That extra page is not equivalent to the source document's `url:` and is not generated by this URL-conversion issue; it remains a page-generation follow-up.
- **Other generated pages:** Blog category/tag and collection landing pages are Gatsby `createPages` outputs, not individual collection-node URLs. They are outside this converter's per-document URL mapping.
- **Duplicate paths:** Gatsby's `createPagePathGuard` panics when two created pages share a path. The converter registers final resolved page URLs and generated executive-bio URLs, and fails with both source paths on a collision.

## Files changed

Paths are relative to `hugo/`.

| File                                                           | Change                                                                                                                                                                                                                 | Reason                                               |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `scripts/migrate-mdx.mjs`                                      | Port Gatsby slug and route rules; emit explicit URLs; apply Gatsby-specific publication and non-page behavior; detect duplicate final URLs; generate executive-bio URLs; preserve current Hugo `build.render` metadata | Match Gatsby page URL and visibility behavior        |
| `scripts/test/migrate-mdx.test.mjs`                            | Cover collection routes, special paths, publication filters, non-page content, missing metadata, and duplicate URLs                                                                                                    | Prevent route and page-visibility regressions        |
| `scripts/test/fixtures/collections/blog/sample-post/index.mdx` | Extend converter test input                                                                                                                                                                                            | Exercise frontmatter conversion                      |
| `hugo.yaml`                                                    | Remove guessed collection permalink patterns                                                                                                                                                                           | Explicit converter `url:` values are authoritative   |
| `docs/CHEATSHEET.md`                                           | Change the 404 troubleshooting instruction to check `url:`                                                                                                                                                             | Keep contributor guidance aligned with explicit URLs |
| `package.json`                                                 | Add `gray-matter` as a development dependency                                                                                                                                                                          | Parse Gatsby front matter for route resolution       |
| `package-lock.json`                                            | Lock the dependency addition                                                                                                                                                                                           | Keep npm installs reproducible                       |
| `docs/GATSBY-URL-MIGRATION.md`                                 | Document Gatsby behavior, converter implementation, testing and limitations                                                                                                                                            | Provide implementation handoff                       |

## Functions changed or added

| Function                                                                     | Responsibility and change                                                                                                                                                                 | Coverage                                                                                |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `slugify(text)`                                                              | Ports Gatsby's `src/utils/slugify.js` operation-for-operation                                                                                                                             | Punctuation, whitespace, hyphens, Unicode, numeric input                                |
| `resolveGatsbyUrl({ collection, frontmatter, relativeDirectory, fileName })` | Implements Gatsby's explicit-permalink precedence and collection routes, applies the integration prefix, and rejects an invalid published event path                                      | Collection route, explicit path, integration, Sistent, publication, missing event title |
| `convertFrontMatter(fm, slug, ctx, url, renderNever, draft)`                 | Removes Gatsby-only `published`/source `url` fields, emits the calculated URL, maps only Gatsby-filtered content to Hugo drafts, and emits `build.render: never` for non-page collections | Frontmatter conversion and non-page/draft tests                                         |
| `convertFile(source, options)`                                               | Parses source metadata and passes the Gatsby URL and page-visibility decision into front matter conversion; applies the same behavior when source front matter is absent                  | Converter-level frontmatter tests                                                       |
| `createExecutiveBioPage(output, { bioUrl, memberPagePath })`                 | Adds Gatsby's extra member-bio URL and the correct primary member URL metadata                                                                                                            | Migration bio-page test                                                                 |
| `migrate({ src, dest, dryRun })`                                             | Registers each resolved final URL, includes executive-bio URLs, and throws on collisions instead of allowing Hugo to overwrite pages                                                      | Duplicate, dry-run, and executive-bio tests                                             |

## Removed or replaced behavior

- Removed the guessed `permalinks:` entries for blog, news, events, and integrations from `hugo.yaml`.
- Kept a folder-derived `slug` as metadata where applicable, but replaced its role in public URL generation with explicit Gatsby-compatible `url:`.
- Replaced the prior `_build: { render: never }` output with Hugo's current `build: { render: never }` key, required by the installed Hugo 0.169 build.
- Do not preserve a source `url:` that Gatsby would ignore; only the resolved Gatsby route is emitted.

## Testing performed

| Check                                                                                                                     | Result                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `npm test`                                                                                                                | **43 passed, 0 failed**                                                                                                        |
| `git diff --check`                                                                                                        | Passed                                                                                                                         |
| Full source dry run: `node scripts/migrate-mdx.mjs --src ../src/collections --dest /tmp/layer5-url-check-final --dry-run` | **1,150/1,150 documents**, 9,431 assets, **0 duplicate URL errors**; 412 documents have conversion warnings for MDX components |

The 412 conversion warnings are primarily unknown MDX components that have not yet been mapped to Hugo shortcodes. They do not prevent the converter from processing the documents.

The dry run confirms that all 1,150 documents can be processed and that no duplicate final URL errors are detected.

## Known limitations and follow-up

**Addressed in #8301**

- Gatsby slugification.
- Explicit permalink priority.
- Trailing slashes.
- Collection routing.
- Integration prefixing.
- Per-collection publication behavior.
- Non-page rendering.
- Duplicate final URL detection.

**Outside this issue**

- Completing P1-07's content conversion and image bundles (issue #8305).
- Migrating Gatsby's extra program aggregate routes, collection listings, blog category/tag pages, and hand-written pages.
- Implementing the executive-bio visual layout.
- Fixing existing image pipeline issues surfaced by a full converted-content build.
- Converting the remaining unknown MDX components reported by the dry run.

No full-site URL parity or rendering parity is claimed.

## How to verify

Run commands from `hugo/`:

```bash
# Unit tests
npm test

# Complete converter dry run
node scripts/migrate-mdx.mjs \
  --src ../src/collections \
  --dest /tmp/layer5-url-check \
  --dry-run
```
