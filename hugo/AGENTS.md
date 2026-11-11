# AGENTS.md

This document provides instructions for Large Language Models (LLMs) contributing to the Layer5 website, hosted at https://github.com/layer5io/layer5, built with Hugo. These guidelines ensure consistency, quality, and alignment with the project's goals of promoting cloud native infrastructure management through clear documentation and user-friendly content.

## Project Overview

The Layer5 website (https://layer5.io) is a Hugo-based static site that serves as the primary interface for the Layer5 community. It showcases projects like Meshery, Kanvas, and Cloud Native Patterns, and provides resources for contributors, users, and cloud native enthusiasts. The site emphasizes clean design, fast performance, and accessibility.

Hugo renders Markdown content and Go templates to plain HTML at build time. There is no React runtime on the site by default, so pages ship little or no JavaScript unless a feature needs it.

## Instructions for LLMs

### 1. Content Generation Guidelines

- **Tone and Style**: Use a professional yet approachable tone. Content should be clear, concise, and welcoming to both technical and non-technical audiences. Align with Layer5's mission of empowering engineers to "expect more from their infrastructure."
- **Markdown Usage**: All content is written in Markdown (`.md`) files under `content/`. Hugo does not support MDX or inline React components. Use Markdown (`>`) for block quotes. To embed reusable elements, use available Hugo shortcodes from `layouts/shortcodes/`, for example `{{< terminal >}}...{{< /terminal >}}`.
- **Frontmatter**: Include appropriate frontmatter in every content file. Hugo uses the `title`, `date`, `description`, and `draft` fields natively. The Gatsby `path` field is replaced by `url` (full override) or `slug` (last segment only). Example:

  ```yaml
  ---
  title: "Page Title"
  date: 2025-09-23
  description: "Short description for SEO."
  url: "/path/to/page"
  draft: false
  ---
  ```

- **Preserving URLs**: This site was migrated from Gatsby, so existing URLs must keep working. When a page's URL differs from its Hugo content path, set `url` in frontmatter, and add the old URL under `aliases` if it changed:

  ```yaml
  aliases:
    - /old/path/to/page
  ```

- **SEO Optimization**: Ensure all generated content includes meta descriptions, relevant keywords (e.g., "cloud native," "Meshery," "service mesh"), and proper heading structures. The page title is rendered as the H1 by the template, so content bodies start at H2.
- **Consistency**: Use American English spelling and grammar. Follow the Layer5 Writing Style Guide for terminology (e.g., "Meshery" not "meshery").

### 2. Code Contributions

- **Hugo Structure**: Familiarize yourself with the repository structure:
  - `content/`: All Markdown content (pages, blog posts, docs), organized into sections by folder.
  - `layouts/`: Go templates. Key subfolders are `_default/` (base, list, and single templates), `partials/` (reusable template fragments), and `shortcodes/` (reusable elements used inside Markdown).
  - `assets/`: Files processed by Hugo Pipes (SCSS/CSS, JavaScript, images that need resizing or fingerprinting).
  - `static/`: Files copied to the output as-is (favicons, `robots.txt`, downloads).
  - `data/`: YAML, TOML, or JSON data files accessible from templates (for example, member lists or project metadata).
  - `i18n/`: Translation strings, if the site is multilingual.
  - `archetypes/`: Templates for new content created with `hugo new`.
  - `hugo.yaml` (or `config/`): Site configuration, menus, taxonomies, params, and module imports. This replaces `gatsby-config.js`.
  - `go.mod`: Present when the site uses Hugo Modules.
- **Templates**: Write templates in Go template syntax. Prefer partials for repeated markup and keep logic in templates minimal. Use `partialCached` for partials that do not change per page.
- **Replaces Gatsby's dynamic page generation**: `gatsby-node.js` logic is replaced by Hugo's built-in content sections, taxonomies, list/single templates, and `_content.gotmpl` content adapters. Do not add custom build scripts for page generation if Hugo can do it natively.
- **Shortcodes**: When generating a new shortcode, place it in `layouts/shortcodes/` and keep it simple and accessible. Document its parameters in a comment at the top of the file. Example:

  ```go-html-template
  {{/* callout: highlights a note. Usage: {{< callout >}}Text{{< /callout >}} */}}
  {{- $type := .Get "type" | default "note" -}}

  {{- $titles := dict
    "note" "Note"
    "tip" "Tip"
    "warning" "Warning"
    "caution" "Caution"
    "important" "Important"
  -}}

  {{- $icons := dict
    "note" "info"
    "tip" "lightbulb"
    "warning" "alert-triangle"
    "caution" "alert-circle"
    "important" "alert-octagon"
  -}}

  {{- $title := index $titles $type | default "Note" -}}
  {{- $icon := index $icons $type | default "info" -}}

  <aside class="callout callout--{{ $type }}" role="note">
    <div class="callout__header">
      <span class="callout__icon" aria-hidden="true">
        {{ partial "icons.html" $icon }}
      </span>
      <span class="callout__title">{{ $title }}</span>
    </div>

    <div class="callout__content">
      {{ .Inner | markdownify }}
    </div>
  </aside>
  ```

- **Styling**: Follow the repository's established styling conventions:
  - Use the site's existing CSS/SCSS, processed through Hugo Pipes (`resources.Get`, `css.Sass`, `minify`, `fingerprint`) from `assets/`.
  - Use CSS custom properties (design tokens) for colors, spacing, and typography instead of hardcoding values.
  - Do not introduce Tailwind CSS or CSS-in-JS libraries (styled-components, Emotion); follow the repository's established styling patterns instead.
- **JavaScript**: Keep client-side JavaScript minimal. Prefer vanilla JavaScript or small, framework-free libraries for interactivity. Bundle scripts with `js.Build` from `assets/js/`. Do not add React, MUI, or `@sistent/sistent` to pages; they require a React runtime that this site does not ship. If a genuinely app-like feature needs React, raise it in the pull request description first and mount it as an isolated island on a single page.
- **Design System Reference**:
  - Refer to [DESIGN.md](./DESIGN.md)
  - Match the visual language of Layer5's design system (colors, typography, spacing, component appearance) using the site's CSS tokens. Sistent components are React-based and are not used directly; reproduce their look with plain HTML and CSS where needed.
  - Avoid hardcoded brand values when an existing token is available.
- **Accessibility**: Ensure all templates and content meet WCAG 2.1 standards (e.g., alt text for images, semantic HTML elements, ARIA labels where needed, sufficient color contrast, keyboard-accessible interactive elements).

### 3. Contribution Workflow

- **Pull Requests**: All changes must be submitted as pull requests (PRs) to the `master` branch. Follow the Layer5 Contributing Guidelines.
- **Commit Messages**: Use clear, descriptive commit messages following the Conventional Commits format:

  ```
  feat: add new Meshery feature page
  fix: correct broken link in footer
  docs: update AGENTS.md with LLM instructions
  ```

- **Testing**: Ensure the site builds without errors or warnings using `hugo --gc --minify`. Test for responsiveness across devices.
- **Verifying your fix**: Hugo builds quickly, so there is no excuse for skipping verification. Don't declare a fix done until you have ACTUALLY verified the solution. Start the dev server with `hugo server`, `curl` the affected page, and check the rendered HTML for the expected content. Also check the terminal output for template errors and warnings.

### 4. Content Restrictions

- **No External Images**: Do not include external image URLs in Markdown or templates. Use local assets: place images in `assets/images/` (or alongside the content as a page bundle) and reference them through Hugo's image processing or a figure shortcode so they are optimized and fingerprinted.
- **No Placeholder Text**: Avoid placeholders like `[Your Name]` or `[Insert Content]`. Provide complete, usable content.
- **No Sensitive Data**: Do not include API keys, credentials, or personal information in generated content.
- **Alt Text Required**: Every image must have meaningful alt text.

### 5. Specific Tasks for LLMs

- **Documentation Updates**: Generate or update Markdown files in `content/` for tutorials, blog posts, or project documentation. Ensure alignment with Layer5's Documentation Guidelines.
- **Page Bundles**: Prefer page bundles (a folder containing `index.md` plus its images) for content that has its own images. Use plain files for content without attached resources.
- **Blog Posts**: Create blog posts about cloud native topics, Meshery features, or community events. Create them with `hugo new` so the archetype applies, or follow this structure:

  ```markdown
  ---
  title: "Exploring Meshery's New Features in 2025"
  date: 2025-09-23
  description: "Discover the latest updates to Meshery, the cloud native management platform."
  url: "/blog/meshery-new-features-2025"
  tags: ["meshery"]
  draft: false
  ---

  ## Introduction

  Meshery continues to evolve as the leading platform for...
  ```

- **Component Generation**: Before creating a new partial or shortcode (buttons, cards, modals), check whether an appropriate one already exists in `layouts/partials/` or `layouts/shortcodes/`. Ensure new ones follow existing project styling conventions and match the site's design system.

### 6. Validation and Testing

- **Linting**: If the repository has a `package.json`, run `npm run lint` to check any JavaScript and CSS against the project's ESLint, Stylelint, and Prettier rules.
- **Build Testing**: Verify that `hugo --gc --minify` completes successfully with no errors or warnings.
- **Preview**: Test changes locally with `hugo server` (add `-D` to include drafts) and check for visual and functional issues. Check for broken internal links and missing images.

### 7. Community Alignment

- **CNCF Code of Conduct**: All contributions must adhere to the CNCF Code of Conduct.
- **Engage with MeshMates**: For guidance, reference the MeshMates program in the Layer5 Community Handbook.

## Worktrees and landing a change

- **Work in a treehouse worktree, never in the main clone.** Other agent sessions and the
  no-mistakes pipeline share the main clone. Take a worktree with
  `treehouse get --lease -b <branch>` (it prints the path; `--base <branch>` starts it from
  another branch), work there, and release it with `treehouse return <path>` once the change
  has merged. `treehouse status` lists the pool. Never make one with `git worktree add` or a
  second clone.
- **Land every change through no-mistakes, at most three runs per pull request.** Commit in
  the worktree, then run `no-mistakes axi run --intent "<goal>"` (a clone without a
  `no-mistakes` remote needs `no-mistakes init` once). `no-mistakes axi status` shows the step
  and its findings, and `no-mistakes axi respond` answers a review gate. The pipeline reviews,
  tests, pushes and opens the pull request. After the third run, merge the pull request as it
  stands and open an issue for anything still flagged. A run that stopped on a usage limit
  counts; one cancelled before it did anything does not.

## Example Contribution

Below is an example of a new Markdown page for the Layer5 website, saved as `content/learn/getting-started.md`:

````markdown
---
title: "Getting Started with Meshery"
date: 2025-09-23
description: "A beginner's guide to setting up Meshery for cloud native management."
url: "/learn/getting-started"
draft: false
---

Meshery is an open-source cloud native management platform that simplifies...

## Installation

1. Install Meshery CLI using:

   ```bash
   curl -L https://meshery.io/install | bash -
   ```

2. Verify installation:

   ```bash
   mesheryctl system check
   ```

## Next Steps

Explore Meshery Docs for advanced configurations.
````

## Troubleshooting

- **Build Errors**: Run `hugo --gc --minify --printPathWarnings` and read the error message; Hugo reports the template or content file and line number. Check `hugo.yaml` for misconfigured params, menus, or module imports.
- **Content Issues**: Validate frontmatter syntax (YAML indentation, quoting). A page that does not appear is usually `draft: true`, a future `date`, or an `expiryDate` in the past. Run `hugo server -D --buildFuture` to check.
- **Shortcode Errors**: Make sure shortcodes are closed correctly (`{{< x >}}...{{< /x >}}`) and that the file name in `layouts/shortcodes/` matches the name used in content.
- **Missing Styles or Scripts**: Hugo Pipes resources must be fetched from `assets/`, not `static/`. Check that the path passed to `resources.Get` is correct. The extended edition of Hugo is required for SCSS.
- **Community Support**: Reach out via the [Layer5 Slack](https://slack.layer5.io) for assistance.

## Custom GitHub Copilot Agents

Layer5 has custom agents available for specialized tasks. These agents provide deep expertise in specific areas:

### blog-writer Agent

**Purpose**: Expert in creating high-quality blog posts for the Layer5 website.

**Configuration**: Automatically uses the most powerful AI model available.

**Target Audience**: Content is specifically tailored for platform engineers, DevOps engineers, site reliability engineers (SREs), IT administrators, Kubernetes operators, cloud native developers, open source contributors, solution architects, enterprise architects, and developers.

**When to use**: Creating blog posts about Layer5 projects, cloud native topics, tutorials, community content, or technical articles for engineering practitioners.

**Documentation**:

- Configuration: `.github/agents/blog-writer.md`

**Key features**:

- Uses blog template structure (Hugo archetype) with proper frontmatter
- Prefers existing taxonomy terms (tags and categories), weighted by usage
- Includes required graphics, CTAs, and block quotes through shortcodes
- Adds extensive cross-page hyperlinks to existing content (use `relref` or `ref` so links are validated at build time)
- Optimizes for SEO (URL, title, description, keywords)
- Considers posts for the `/resources` collection inclusion
- Follows Layer5's writing style and community values
- Addresses real-world challenges faced by platform teams and operators

**Basic usage**:

```
@blog-writer Create a blog post about [topic]
```

For detailed examples and advanced usage, see `.github/agents/USAGE_EXAMPLES.md`.

By following these guidelines, LLMs can contribute high-quality content and code to the Layer5 website, enhancing its role as a hub for the cloud native community.
