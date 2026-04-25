# Layer5 Documentation Sources

Both documentation sites are cloned locally. When writing technical blog posts,
search these first rather than guessing at feature names, CLI flags, or behavior.
Docs are the authoritative source - blog posts extend and contextualize them.

## Layer5 Docs — docs.layer5.io

**Local path:** `~/code/docs` (clone from https://github.com/layer5io/docs if not present)
**Content root:** `~/code/docs/content/en/`

| Section                                 | Local path                           | Published URL prefix                             |
| --------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| Kanvas (Designer, Operator, Visualizer) | `content/en/kanvas/`                 | `https://docs.layer5.io/kanvas/`                 |
| Kanvas Designer                         | `content/en/kanvas/designer/`        | `https://docs.layer5.io/kanvas/designer/`        |
| Kanvas Operator                         | `content/en/kanvas/operator/`        | `https://docs.layer5.io/kanvas/operator/`        |
| Kanvas Getting Started                  | `content/en/kanvas/getting-started/` | `https://docs.layer5.io/kanvas/getting-started/` |
| Layer5 Cloud                            | `content/en/cloud/`                  | `https://docs.layer5.io/cloud/`                  |
| Layer5 Academy                          | `content/en/cloud/academy/`          | `https://docs.layer5.io/cloud/academy/`          |
| Catalog                                 | `content/en/cloud/catalog/`          | `https://docs.layer5.io/cloud/catalog/`          |
| Identity / Security                     | `content/en/cloud/identity/`         | `https://docs.layer5.io/cloud/identity/`         |

## Meshery Docs — docs.meshery.io

**Local path:** `~/code/meshery/docs` (clone from https://github.com/meshery/meshery if not present)
**Content root:** `~/code/meshery/docs/content/en/`

| Section                   | Local path                                     | Published URL prefix                                        |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| Concepts                  | `content/en/concepts/`                         | `https://docs.meshery.io/concepts/`                         |
| Logical Concepts          | `content/en/concepts/logical/`                 | `https://docs.meshery.io/concepts/logical/`                 |
| Architecture              | `content/en/concepts/architecture/`            | `https://docs.meshery.io/concepts/architecture/`            |
| Installation              | `content/en/installation/`                     | `https://docs.meshery.io/installation/`                     |
| Configuration Management  | `content/en/guides/configuration-management/`  | `https://docs.meshery.io/guides/configuration-management/`  |
| Infrastructure Management | `content/en/guides/infrastructure-management/` | `https://docs.meshery.io/guides/infrastructure-management/` |
| Performance Management    | `content/en/guides/performance-management/`    | `https://docs.meshery.io/guides/performance-management/`    |
| mesheryctl Reference      | `content/en/guides/mesheryctl/`                | `https://docs.meshery.io/reference/mesheryctl/`             |
| Extensions                | `content/en/extensions/`                       | `https://docs.meshery.io/extensions/`                       |
| Reference                 | `content/en/reference/`                        | `https://docs.meshery.io/reference/`                        |

## How to use the docs when writing

**Before writing a technical section**, check if the docs repos are cloned locally, then grep for the feature you're describing. If neither repo is present, qualify technical claims with "as of this writing" and link to the live docs instead.

```bash
# Find Meshery concepts related to your topic
grep -r "ConfigMap\|Secret\|configuration" ~/code/meshery/docs/content/en/ \
  --include="*.md" -l | head -10

# Find Kanvas feature pages
grep -r "design\|collaboration" ~/code/docs/content/en/kanvas/ \
  --include="*.md" -l | head -10

# Read a specific page
cat ~/code/meshery/docs/content/en/concepts/logical/designs.md
```

**When linking to docs**, use `<a>` tags (not `<Link>`) since docs.layer5.io and docs.meshery.io are external:

```jsx
<a
  href="https://docs.meshery.io/concepts/logical/designs"
  target="_blank"
  rel="noopener noreferrer"
>
  Meshery Designs
</a>
```

**Cross-checking facts**: If you're claiming Meshery supports X, grep the docs for it. If you can't find it, either qualify the claim or omit it.

## Key internal links for blog posts

These use `<Link>` (internal to layer5.io):

| Topic                | `<Link to="">` path                                   |
| -------------------- | ----------------------------------------------------- |
| Meshery product page | `/cloud-native-management/meshery`                    |
| Kanvas product page  | `/kanvas`                                             |
| Meshery Playground   | `/cloud-native-management/meshery/meshery-playground` |
| Layer5 Community     | `/community`                                          |
| Layer5 Learn         | `/learn`                                              |
| Blog index           | `/blog`                                               |
| Projects             | `/projects`                                           |

These use `<a>` (external):

| Topic          | URL                                  |
| -------------- | ------------------------------------ |
| Meshery Docs   | `https://docs.meshery.io`            |
| Layer5 Docs    | `https://docs.layer5.io`             |
| Meshery GitHub | `https://github.com/meshery/meshery` |
| Layer5 GitHub  | `https://github.com/layer5io/layer5` |
| Layer5 Slack   | `https://slack.layer5.io`            |
