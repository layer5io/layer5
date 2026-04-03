# Layer5 Blog Post Structure

## Directory Layout

```
src/collections/blog/
└── YYYY/
    └── MM-DD-descriptive-slug/
        ├── index.mdx          ← main post file
        ├── hero-image.png     ← generated thumbnail
        └── [other images]     ← supporting images
```

## Complete Frontmatter

```yaml
---
title: "Post Title (50–60 chars, keywords near front)"
subtitle: "Supporting subtitle that adds context"
date: 2026-04-01 10:00:00 -0500
author: Layer5 Team
thumbnail: ./hero-image.png
darkthumbnail: ./hero-image.png
description: "150–160 char SEO description with natural keyword usage."
type: Blog
category: Engineering
tags:
  - Kubernetes
  - Open Source
  - Platform Engineering
featured: false
published: true
---
```

### Field reference

| Field           | Required | Notes                                                  |
| --------------- | -------- | ------------------------------------------------------ |
| `title`         | ✓        | 50–60 chars; primary keyword near start                |
| `subtitle`      | optional | Shown below the title                                  |
| `date`          | ✓        | `YYYY-MM-DD HH:MM:SS +/-HHMM`                          |
| `author`        | ✓        | Default: `Layer5 Team`. Real name for interviews only. |
| `thumbnail`     | ✓        | Relative path, e.g. `./hero-image.png`                 |
| `darkthumbnail` | ✓        | Can match `thumbnail`                                  |
| `description`   | ✓        | 150–160 chars for SEO                                  |
| `type`          | ✓        | Always `Blog`                                          |
| `category`      | ✓        | One approved category                                  |
| `tags`          | ✓        | 2–5 approved tags                                      |
| `featured`      | ✓        | `false` unless specifically promoted                   |
| `published`     | ✓        | `true` or `false`                                      |
| `resource`      | optional | `resource: true` for reference-worthy technical posts  |
| `product`       | optional | `product: Meshery` or `product: Kanvas`                |
| `interviewer`   | optional | Meet the Maintainer posts                              |
| `interviewee`   | optional | Meet the Maintainer posts                              |

## Standard Imports

```jsx
import { BlogWrapper } from "../../Blog.style.js";
import { Link } from "gatsby";
import Blockquote from "../../../../reusecore/Blockquote";
import Callout from "../../../../reusecore/Callout";
import CTA_FullWidth from "../../../../components/Call-To-Actions/CTA_FullWidth";
import CTAImg from "../../../../assets/images/meshery/icon-only/meshery-logo-shadow.webp";
import heroImage from "./hero-image.png";
```

For Kanvas posts, swap the CTA:

```jsx
import KanvasCTA from "../../../../components/Call-To-Actions/KanvasCTA";
```

When embedding a Meshery/Kanvas design, add:

```jsx
import MesheryDesignEmbed from "@layer5/meshery-design-embed";
```

## Post Template

```mdx
<BlogWrapper>

<div className="intro">
  <p>
    One-paragraph lede that opens with the problem. Platform engineers are busy
    — give them a reason to keep reading in the first three sentences.
  </p>
</div>

## Main Section Heading

Paragraph with <Link to="/cloud-native-management/meshery">internal links</Link>
and <a href="https://external.com" target="_blank" rel="noopener noreferrer">external links</a>.

<img
  src={heroImage}
  className="image-center-shadow"
  alt="Descriptive alt text"
/>

### Subsection

Content.

<Blockquote
  quote="A memorable insight or key takeaway."
  person="Optional Name"
  title="Optional Title"
/>

## Second Section

<Callout type="note" title="Prerequisites">
  <p>What the reader needs before following these steps.</p>
</Callout>

\`\`\`bash
mesheryctl design deploy --contexts prod-east,prod-west
\`\`\`

## Third Section

More content.

<CTA_FullWidth
image={CTAImg}
heading="Get Started with Meshery"
alt="Meshery - Cloud Native Manager"
content="Meshery is the open source, cloud native management plane for Kubernetes and cloud native infrastructure."
button_text="Get Meshery"
url="/cloud-native-management/meshery"
external_link={false}
/>

<div className="outro">
  <p>
    Next step or community invite. Link to a related post, the Meshery
    playground, or the Layer5 Slack. Keep it to one sentence and one action.
  </p>
</div>

</BlogWrapper>
```

## Component Reference

### `<Blockquote>`

```jsx
<Blockquote
  quote="Kubernetes is not just container orchestration — it's a platform for building platforms."
  person="Lee Calcote"
  title="Founder, Layer5"
/>

<Blockquote quote="GitOps closes the gap between desired and actual cluster state." />
```

### `<Callout>`

Types: `note`, `tip`, `warning`, `info`

```jsx
<Callout type="note" title="Prerequisites">
  <p>You'll need kubectl configured and a running Kubernetes cluster.</p>
</Callout>

<Callout type="tip">
  <p>Run <code>mesheryctl system check</code> to verify all components are healthy.</p>
</Callout>
```

### `<CTA_FullWidth>`

```jsx
<CTA_FullWidth
  image={CTAImg}
  heading="Manage Your Infrastructure with Meshery"
  alt="Meshery - Cloud Native Manager"
  content="Meshery is the open source, multi-cloud infrastructure management platform."
  button_text="Get Meshery"
  url="/cloud-native-management/meshery"
  external_link={false}
/>

<KanvasCTA />
```

### `<MesheryDesignEmbed>`

Use this component whenever the post demonstrates a specific infrastructure design or pattern -
a Redis deployment, a Dapr app, an AWS architecture, a service mesh config, etc.
It renders an interactive, live visualization of the Kanvas design directly in the post.

**Import:**

```jsx
import MesheryDesignEmbed from "@layer5/meshery-design-embed";
```

**Usage:**

```jsx
<MesheryDesignEmbed
  style={{ border: "1px solid #eee" }}
  embedId="embedded-design-c3dcee44-6b8a-498f-a44c-66682ccf4d2a"
  embedScriptSrc="/embed-test/embedded-design-redis.js"
/>
```

**How embedId and embedScriptSrc relate:**
The `embedScriptSrc` is the path (from the site root) to a JS bundle in `static/embed-test/`.
The `embedId` is encoded inside that bundle. They are always paired - use values from the
table below or ask the author to export a new embed from the Meshery Playground.

**Available designs in `static/embed-test/`:**

| Design               | `embedId`                                              | `embedScriptSrc`                                     |
| -------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| Redis                | `embedded-design-c3dcee44-6b8a-498f-a44c-66682ccf4d2a` | `/embed-test/embedded-design-redis.js`               |
| Dapr                 | `embedded-design-7d183e77-09e1-4b69-a5ee-3e3870e9c5f4` | `/embed-test/embedded-design-dapr.js`                |
| Dapr (CRDs)          | `embedded-design-7eed863e-a37c-493f-a7b6-61e4b29bb678` | `/embed-test/embedded-design-dapr-crds.js`           |
| Dapr (deployments)   | `embedded-design-f6439589-1722-4fbc-b0e5-49f8d7c0ab17` | `/embed-test/embedded-design-dapr-deployments.js`    |
| Dapr (roles)         | `embedded-design-79476480-b3b3-4e47-8805-de2cd5735bb8` | `/embed-test/embedded-design-dapr-roles.js`          |
| Deployment + Service | `embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8` | `/embed-test/embedded-design-deployment-service.js`  |
| Edge Stack           | `embedded-design-d429e684-c42a-4c14-816b-b4dddb4b6d40` | `/embed-test/embedded-design-edge-stack.js`          |
| Statestore           | `embedded-design-f0b9088c-ab17-41ee-9400-fcfc5f4d59a8` | `/embed-test/embedded-design-statestore.js`          |
| Node app             | `embedded-design-13665e6e-53cc-4cf4-9e8e-280237428672` | `/embed-test/embedded-design-node-application.js`    |
| Python app           | `embedded-design-03016ef6-7124-4169-a5c0-f403711d480d` | `/embed-test/embedded-design-python-application.js`  |
| AWS complex          | `embedded-design-79d1f362-39b3-46f2-b658-42a16984f88e` | `/embed-test/embedded-design-awscomplex.js`          |
| Annotations example  | `embedded-design-a83f0098-2f91-4275-b075-c8676e842804` | `/embed-test/embedded-design-annotations-example.js` |

**When to use:**

- Post walks through deploying a specific technology (Redis, Dapr, Kubernetes Deployments, etc.) - embed the matching design so readers can explore it interactively
- Post is about a Kanvas or Meshery design feature - embed a design to demonstrate it
- Always prefer embedding a real design over a static screenshot when one is available

**When NOT to use:**

- The post is conceptual or does not reference a specific design topology
- No matching design exists in the table above and the author has not provided embed files

**Adding a new design embed:**
If you need a design that isn't in the table, leave a placeholder comment in the MDX:

```jsx
{
  /* TODO: embed design — export from Meshery Playground and add JS bundle to static/embed-test/ */
}
```

### Images

```jsx
<img src={heroImage} className="image-center-shadow" alt="Description" />

<figure className="imgWithCaption fig-right">
  <img src={diagramImg} alt="Diagram showing..." />
  <figcaption>Caption</figcaption>
</figure>
```

## `<div className="outro">`

The closing section wrapper. Visually distinct from `intro` - solid teal top/bottom border (vs dashed in intro) with a centered, action-forward tone. Use it to wrap the final next-step paragraph that comes after the last CTA component.

```jsx
<div className="outro">
  <p>
    Want to try this yourself?{" "}
    <Link to="/cloud-native-management/meshery">Deploy Meshery</Link> in minutes
    and explore the playground - no cluster required.
  </p>
</div>
```

The `outro` style is defined in `Blog.style.js` alongside `intro`. Both use the teal brand color from `theme.primaryLightColor`, but `intro` uses dashed borders with an italic voice while `outro` uses solid borders with a direct, action-forward tone.

## Writing Style

- **Lead with the problem.** Never open with "In this post we will..."
- **Sections as signposts.** H2 for main, H3 for sub. Each heading should make sense in a TOC scan.
- **Short paragraphs.** 3-5 sentences max.
- **Cut filler.** "It is worth noting that", "In conclusion", "Simply put" - delete them.
- **American English.** color, analyze, recognize.
- **Hyphens only.** Never use em dashes (`-`). Use a hyphen (`-`) everywhere.
- **End with momentum.** Community invite, next step, or related post link. Put this in `<div className="outro">`.

## Meet the Maintainer Format

```jsx
import { MeetTheMaintainer } from "../../MeetTheMaintainer.style.js";

<MeetTheMaintainer>
  <div className="intro">
    <p>Introduction about the maintainer...</p>
  </div>

  <div className="interviewer">
    <span>Interviewer Name:</span> Question text?
  </div>

  <div className="interviewee">
    <span>Maintainer Name:</span> Answer text.
  </div>
</MeetTheMaintainer>;
```

Extra frontmatter for interviews:

```yaml
author: Interviewer Name
interviewer: Interviewer Name
interviewee: Maintainer Name
category: Open Source
tags:
  - Open Source
  - Community
  - Meet The Maintainer
```
