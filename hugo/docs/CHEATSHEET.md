# Contributor cheatsheet (Go templates for people who know React)

| You used to write | You now write |
|---|---|
| `<Button url="/join">Join</Button>` | `{{< button url="/join" text="Join" >}}` |
| `<CTA_FullWidth title="…" buttonText="…" />` | `{{< cta-fullwidth title="…" button_text="…" button_url="…" >}}` |
| `<Terminal code="…" />` | `{{< terminal >}}…{{< /terminal >}}` |
| `<Accordion><AccordionItem title="Q">A</AccordionItem></Accordion>` | `{{< accordion >}}{{< accordion-item title="Q" >}}A{{< /accordion-item >}}{{< /accordion >}}` |
| `<Card title url>body</Card>` | `{{< card title="…" url="…" >}}body{{< /card >}}` |
| Cytoscape graph component | `{{< topology name="meshery" >}}` + `data/topologies/meshery.json` |
| FullCalendar component | `{{< calendar >}}` (reads `content/events/`) |
| `gatsby-image` | `{{ partial "responsive-image.html" (dict "page" . "src" "cover.png" "alt" "…") }}` |
| `redirect_from:` front matter | `aliases:` (migration script renames it) |
| GraphQL page query | `{{ range where site.RegularPages "Section" "blog" }}` |
| `useState` + conditional render | plain HTML + `data-*` hooks in `assets/js/main.js` |

## Rules of thumb
- **Shortcode attribute names are snake_case** (`button_text`). The migration script converts camelCase for you.
- `{{< >}}` passes inner content through raw (use for code); `{{% %}}` renders inner Markdown. Components use `{{< >}}` and call `markdownify` where Markdown is wanted.
- Content lives in **page bundles**: `content/blog/my-post/index.md` + images next to it.
- One-line fix for "my page 404s": check `slug:` in front matter and the `permalinks:` block in `hugo.yaml`.
- Run `make serve`. Errors name the file and line; shortcode errors show the page that called them.

## Where images go
| The image is… | Put it in | Use it with |
|---|---|---|
| used by one page (thumbnail, `darkthumbnail`, inline figure) | the page bundle, next to `index.md` | `thumbnail: cover.png` / `responsive-image.html` |
| shared by layouts (logos, icons, illustrations) | `assets/images/`, same sub-path as `src/assets/images/` | `resources.Get "images/…"` |
| a file that must keep its exact URL (brand kit, press, fonts) | `static/` | a plain `/path` link |

- Front matter never points outside the bundle. The migration script copies `../` images into the bundle and rewrites the path to the file name. If it can't (file missing, or the name is taken), it leaves the path and warns.
- SVGs are copied as-is; only raster images (PNG, JPG, WebP) get resized.

## Add a shortcode in 5 minutes
1. `layouts/shortcodes/my-thing.html` — read params with `.Get "name"`, body with `.Inner`.
2. Add it to `COMPONENTS` in `scripts/migrate-mdx.mjs` and a case in `scripts/test/`.
3. Use it in a page, run `make serve`, run `make test`.
4. Tick it off in `data/migration.json` → it appears on `/migration/`.
