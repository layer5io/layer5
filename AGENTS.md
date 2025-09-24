# AGENTS.md

This document provides instructions for Large Language Models (LLMs) contributing to the Layer5 website, hosted at https://github.com/layer5io/layer5, built with Gatsby.js. These guidelines ensure consistency, quality, and alignment with the project's goals of promoting cloud native infrastructure management through clear documentation and user-friendly content.

## Project Overview

The Layer5 website (https://layer5.io) is a Gatsby.js-based static site that serves as the primary interface for the Layer5 community. It showcases projects like Meshery, Kanvas, and Cloud Native Patterns, and provides resources for contributors, users, and cloud native enthusiasts. The site emphasizes clean design, fast performance, and accessibility.

## Instructions for LLMs

### 1. Content Generation Guidelines

- **Tone and Style**: Use a professional yet approachable tone. Content should be clear, concise, and welcoming to both technical and non-technical audiences. Align with Layer5's mission of empowering engineers to "expect more from their infrastructure."
- **Markdown Usage**: All content must be written in Markdown, adhering to Gatsby's content structure (e.g., MDX files in `src/pages` or `src/content`).
- **Frontmatter**: Include appropriate frontmatter in MDX files. Example:

  ```yaml
  ---
  title: "Page Title"
  path: "/path/to/page"
  date: "2025-09-23"
  description: "Short description for SEO."
  ---
  ```
- **SEO Optimization**: Ensure all generated content includes meta descriptions, relevant keywords (e.g., "cloud native," "Meshery," "service mesh"), and proper heading structures (H1, H2, etc.).
- **Consistency**: Use American English spelling and grammar. Follow the Layer5 Writing Style Guide for terminology (e.g., "Meshery" not "meshery").

### 2. Code Contributions

- **Gatsby.js Structure**: Familiarize yourself with the repository structure:
  - `src/components`: Reusable React components.
  - `src/pages`: Page templates and MDX content.
  - `gatsby-config.js`: Site metadata and plugins.
  - `gatsby-node.js`: Dynamic page generation logic.
- **React Components**: When generating components, use functional components with modern JavaScript (ES6+). Example:

  ```jsx
  import React from 'react';
  
  const MyComponent = ({ title }) => (
    <div className="my-component">
      <h2>{title}</h2>
    </div>
  );
  
  export default MyComponent;
  ```
- **Styling**: Use CSS modules or styled-components as per the project's conventions. Prefer Tailwind CSS classes if integrated. Example:

  ```jsx
  <div className="bg-blue-500 text-white p-4">Content</div>
  ```
- **Accessibility**: Ensure all components meet WCAG 2.1 standards (e.g., alt text for images, ARIA labels where needed).

### 3. Contribution Workflow

- **Pull Requests**: All changes must be submitted as pull requests (PRs) to the `master` branch. Follow the Layer5 Contributing Guidelines.
- **Commit Messages**: Use clear, descriptive commit messages following the Conventional Commits format:

  ```
  feat: add new Meshery feature page
  fix: correct broken link in footer
  docs: update AGENTS.md with LLM instructions
  ```
- **Testing**: Ensure generated code passes `make setup` and `make site` without errors. Test for responsiveness across devices.
- Verifying your fix: The website takes a long time to build. Don't interrupt the build when checking terminal output. Don't hail victory on a fix before you have ACTUALLY verified the solution. Wait for the website to be running, for you to actually \`curl\` a page and verify rendered content.

### 4. Content Restrictions

- **No External Images**: Do not include external image URLs in Markdown or components. Use local assets in `src/images`.
- **No Placeholder Text**: Avoid placeholders like `[Your Name]` or `[Insert Content]`. Provide complete, usable content.
- **No Sensitive Data**: Do not include API keys, credentials, or personal information in generated content.

### 5. Specific Tasks for LLMs

- **Documentation Updates**: Generate or update MDX files in `src/content` for tutorials, blog posts, or project documentation. Ensure alignment with Layer5's Documentation Guidelines.
- **Blog Posts**: Create blog posts about cloud native topics, Meshery features, or community events. Example structure:

  ```markdown
  ---
  title: "Exploring Meshery's New Features in 2025"
  path: "/blog/meshery-new-features-2025"
  date: "2025-09-23"
  description: "Discover the latest updates to Meshery, the cloud native management platform."
  ---
  # Exploring Meshery's New Features in 2025
  ## Introduction
  Meshery continues to evolve as the leading platform for...
  ```
- **Component Generation**: Create reusable React components for UI elements like buttons, cards, or modals, ensuring they match the site's design system.

### 6. Validation and Testing

- **Linting**: Run `npm run lint` to ensure code adheres to ESLint and Prettier rules.
- **Build Testing**: Verify that `gatsby build` completes successfully.
- **Preview**: Test changes locally with `gatsby develop` and check for visual/functional issues.

### 7. Community Alignment

- **CNCF Code of Conduct**: All contributions must adhere to the CNCF Code of Conduct.
- **Engage with MeshMates**: For guidance, reference the MeshMates program in the Layer5 Community Handbook.

## Example Contribution

Below is an example of a new MDX page for the Layer5 website:

```markdown
---
title: "Getting Started with Meshery"
path: "/learn/getting-started"
date: "2025-09-23"
description: "A beginner's guide to setting up Meshery for cloud native management."
---
# Getting Started with Meshery
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

```

## Troubleshooting
- **Build Errors**: Check `gatsby-config.js` for plugin misconfigurations.
- **Content Issues**: Validate MDX syntax using `npm run develop`.
- **Community Support**: Reach out via the [Layer5 Slack](https://slack.layer5.io) for assistance.

By following these guidelines, LLMs can contribute high-quality content and code to the Layer5 website, enhancing its role as a hub for the cloud native community.
```
