# blog-writer Agent Quick Reference

A quick reference card for using the blog-writer custom agent.

## Basic Syntax

```
@blog-writer [Create/Write] a blog post about [topic]
```

## Common Tags (by usage frequency)

| Tag | Uses | Tag | Uses |
|-----|------|-----|------|
| Open Source | 18 | Meshery | 15 |
| Community | 14 | Kubernetes | 9 |
| ai | 8 | Meet The Maintainer | 8 |
| docker | 7 | Service Mesh | 2+ |

## Common Categories

- **Meshery** - Meshery product features
- **Community** - Community news, events, spotlights
- **Open Source** - Open source topics
- **Kubernetes** - K8s-focused content
- **Kanvas** - Kanvas features and guides
- **Platform Engineering** - Platform engineering topics
- **Cloud Native** - General cloud native content

## Required Components Checklist

- [ ] Frontmatter with all fields
- [ ] BlogWrapper import and usage
- [ ] At least 1 graphic/image
- [ ] At least 1 CTA component
- [ ] BlockQuote or BlockQuoteAlt
- [ ] Multiple cross-page links
- [ ] SEO-optimized title & description

## Component Quick Reference

### Imports
```jsx
import { BlogWrapper } from "../../Blog.style.js";
import { Link } from "gatsby";
import Blockquote from "../../../../reusecore/Blockquote";
import BlockquoteAlt from "../../../../reusecore/Blockquote/Blockquote-alt-style";
import CTA_FullWidth from "../../../../components/Call-To-Actions/CTA_FullWidth";
```

### BlockQuote
```jsx
<Blockquote
  quote="Your impactful quote"
  person="Name"
  title="Title/Role"
/>
```

### CTA
```jsx
<CTA_FullWidth 
  image={CTAImg}
  heading="Heading"
  alt="Alt text"
  content="Description"
  button_text="Button Text"
  url="/path"
  external_link={false}
/>
```

### Images
```jsx
// Import
import myImage from "./my-image.png";

// Use
<img src={myImage} className="image-center" alt="Alt text" />
```

### Links
```jsx
<Link to="/cloud-native-management/meshery">Meshery</Link>
```

### Special Divs
```jsx
<div class="intro">
  <p>Introductory text</p>
</div>

<div class="note">
  <a href="url">Call to action</a>
</div>

<div class="tip">
  <h3>Tip Title</h3>
  <p>Tip content</p>
</div>
```

## CSS Classes for Images

| Class | Effect |
|-------|--------|
| `image-left` | Float left with shadow |
| `image-right` | Float right with shadow |
| `image-left-no-shadow` | Float left, no shadow |
| `image-right-no-shadow` | Float right, no shadow |
| `image-center` | Center, full width |
| `image-center-shadow` | Center with shadow |

## Common Link Destinations

| Type | Path |
|------|------|
| Meshery | `/cloud-native-management/meshery` |
| Kanvas | `/cloud-native-management/meshery/design` |
| Catalog | `/cloud-native-management/catalog` |
| Community | `/community` |
| Slack | `https://slack.layer5.io` |
| Blog | `/blog` |
| Resources | `/resources` |

## SEO Guidelines

- **Title**: 50-60 characters, keyword at start
- **Description**: 150-160 characters, includes keywords
- **URL**: Descriptive, under 60 chars, use hyphens
- **H2/H3**: Include keywords naturally

## File Structure

```
/src/collections/blog/YYYY/MM-DD-descriptive-slug/
├── post.mdx (or index.mdx)
├── image1.png
├── image2.png
└── ...
```

## Frontmatter Template

```yaml
---
title: "Title Here"
subtitle: "Subtitle here"
date: YYYY-MM-DD HH:MM:SS -0530
author: Author Name
thumbnail: ./image.png
darkthumbnail: ./image.png
description: "Meta description here"
type: Blog
category: Category Name
tags:
  - Tag1
  - Tag2
featured: false
published: true
resource: true
product: Meshery
---
```

## RSS Feed Rules

| Feed | Criteria |
|------|----------|
| Meshery Community | Category: Meshery/Announcements/Events AND tags: Community/Meshery/mesheryctl |
| Main Blog | All posts |
| Technical Posts | Exclude: Programs/Community/Events/FAQ |
| News | All news items |

## Quick Prompts

### Feature Post
```
@blog-writer Feature announcement for [Product] - [Feature]. 
Include use case, how-to, CTA.
```

### Tutorial
```
@blog-writer Step-by-step tutorial: [Topic]. 
Mark as resource. Include troubleshooting.
```

### Community
```
@blog-writer Community post about [Event/Person]. 
Use Community category and BlockQuote.
```

### Technical
```
@blog-writer Technical deep-dive: [Topic]. 
Include code examples, diagrams, best practices.
```

## What Agent Handles

✅ Frontmatter structure  
✅ Component imports  
✅ Tag/category selection  
✅ SEO optimization  
✅ Required elements  
✅ Cross-linking  
✅ RSS feed consideration  

## What You Review

📝 Technical accuracy  
📝 Tag relevance  
📝 Image descriptions  
📝 CTA destinations  
📝 Link validity  
📝 Overall tone  

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Wrong category | Specify in prompt: "use [Category] category" |
| Missing component | Request explicitly: "include BlockQuote and CTA" |
| Too technical | Add: "target audience: beginners/general" |
| Not technical enough | Add: "target audience: engineers/architects" |
| Need specific tags | List in prompt: "use tags: X, Y, Z" |

## Resources

- Full docs: `.github/agents/README.md`
- Examples: `.github/agents/USAGE_EXAMPLES.md`
- Template: `/src/collections/blog/blog-template/index.mdx`
- Contributing: `CONTRIBUTING.md`
- Style guide: `AGENTS.md`

---

**Pro Tip**: Start with a simple prompt, review the output, then refine with more specific requirements in a follow-up prompt.
