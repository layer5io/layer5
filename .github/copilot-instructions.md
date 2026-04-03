# GitHub Copilot Custom Coding Agent Instructions

## AI Model Selection

**IMPORTANT**: When using GitHub Copilot, always select the most powerful AI model available (e.g., GPT-4, Claude 3.5 Sonnet, or the latest advanced model) for code generation, review, and assistance tasks. More powerful models provide better code quality, deeper understanding of context, and more accurate suggestions aligned with project standards.

## Project Overview

The Layer5 website is a Gatsby.js-based static site that serves as the primary interface for the Layer5 community, hosted at https://github.com/layer5io/layer5 and live at https://layer5.io. It showcases projects like Meshery, Kanvas, and Cloud Native Patterns, and provides resources for contributors, users, and cloud native enthusiasts. The site emphasizes clean design, fast performance, and accessibility, serving the cloud native infrastructure management ecosystem.

## Technology Stack

- **Framework**: Gatsby.js 5.x (React-based static site generator)
- **Language**: JavaScript (ES6+)
- **Styling**: Styled-components, CSS Modules, Emotion
- **Content**: MDX (Markdown with JSX components)
- **Package Manager**: npm (with `--legacy-peer-deps` flag)
- **Node Version**: v20.18.3 (see `.nvmrc`)
- **Build System**: Gatsby CLI, Make
- **Linting**: ESLint with custom configuration

## Core Principles

### 1. Minimal, Surgical Changes
- Make the **smallest possible changes** to accomplish the goal
- Never delete or modify working code unless absolutely necessary
- Focus on precise, targeted modifications rather than wholesale rewrites
- Preserve existing patterns and conventions unless explicitly changing them

### 2. Code Quality Standards
- Follow the existing code style and patterns in the repository
- Use functional React components with modern JavaScript (ES6+)
- Ensure all code passes `npm run lint` without errors
- Maintain accessibility standards (WCAG 2.1)
- Write clean, readable, self-documenting code with minimal comments unless necessary for complex logic
- **Performance-first**: Every code change must consider Core Web Vitals impact
- **SEO-aware**: Ensure proper semantic HTML, meta tags, and structured data

### 3. Testing and Validation
- Always validate changes work before considering them complete
- Build the site and verify rendered content: wait for `npm start` to complete, then curl pages to verify
- The website takes significant time to build - be patient and don't interrupt builds
- Run linting frequently: `npm run lint`
- Test changes incrementally and iteratively
- **Lighthouse CI**: Monitor Core Web Vitals scores (check GitHub Actions workflows)
- **Performance testing**: Test on throttled connections (Fast 3G) to ensure good performance for all users

## Project Structure

```
layer5/
├── .github/                 # GitHub configuration and workflows
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page templates and routes
│   ├── sections/           # Page sections and layouts
│   ├── templates/          # Dynamic page templates
│   ├── assets/             # Images, icons, and static assets
│   ├── collections/        # Data collections
│   └── theme/              # Theme configuration and styles
├── static/                 # Static assets copied to build
├── content-learn/          # Learning content and tutorials
├── gatsby-config.js        # Gatsby configuration
├── gatsby-node.js          # Dynamic page generation logic
├── package.json            # Dependencies and scripts
├── Makefile                # Build automation
└── AGENTS.md               # LLM contribution guidelines
```

## Development Workflow

### Setup
```bash
# Install dependencies (required for fresh clone)
make setup
# or
npm install --legacy-peer-deps
```

### Development
```bash
# Start development server
make site
# or
npm start

# Alternative faster method
make site-fast
# or
gatsby develop
```

### Building
```bash
# Build for production
make build
# or
gatsby build && gatsby serve

# Clean cache and rebuild
make clean
```

### Linting
```bash
# Run and auto-fix linting issues
make lint
# or
npm run lint

# Check linting without fixing
npm run checklint
```

## Content Guidelines

### Tone and Style
- Use a **professional yet approachable** tone
- Content should be clear, concise, and welcoming to both technical and non-technical audiences
- Align with Layer5's mission of empowering engineers to "expect more from their infrastructure"
- Use American English spelling and grammar

### Markdown and MDX
- All content must be written in Markdown or MDX
- Place content files in appropriate directories (`src/pages` or `content-learn`)
- Include proper frontmatter with metadata:

```yaml
---
title: "Page Title"
path: "/path/to/page"
date: "2025-09-23"
description: "Short description for SEO (150-160 chars)"
---
```

### SEO Optimization

**Critical Requirements**:
- **Meta descriptions**: Include in frontmatter (150-160 characters, compelling and keyword-rich)
- **Title tags**: Clear, descriptive, under 60 characters
- **Keywords**: Naturally incorporate "cloud native", "Meshery", "service mesh", "Kanvas", "Layer5", "Kubernetes", "microservices"
- **Heading hierarchy**: Maintain proper structure (single H1, logical H2 → H3 → H4 progression)
- **Semantic HTML**: Use appropriate HTML5 elements (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`)
- **URL structure**: Use clean, descriptive, keyword-rich URLs (slug: kebab-case)
- **Image optimization**: 
  - Always include descriptive alt text for accessibility and SEO
  - Use gatsby-plugin-image for automatic optimization
  - Implement proper image dimensions and compression
- **Internal linking**: Create relevant internal links to improve site structure and navigation
- **Schema markup**: Add structured data where appropriate (articles, events, FAQs)
- **Open Graph tags**: Include OG tags for social media sharing
- **Canonical URLs**: Ensure canonical tags are properly set to avoid duplicate content
- **Mobile optimization**: Ensure responsive design for mobile-first indexing
- **Page speed**: Optimize for fast loading times (target < 3 seconds)

### Content Restrictions
- **No external images**: Use local assets in `src/assets` or `static` directories only
- **No placeholder text**: Provide complete, production-ready content
- **No sensitive data**: Never include API keys, credentials, or personal information
- **Use proper terminology**: "Meshery" not "meshery", "Kanvas" not "canvas"

## Code Contribution Guidelines

### React Components

#### Component Structure
```jsx
import React from 'react';
import styled from 'styled-components';

// Use functional components with modern JavaScript
const MyComponent = ({ title, description, className }) => {
  return (
    <ComponentWrapper className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ComponentWrapper>
  );
};

export default MyComponent;

// Styled-components at the bottom of file
const ComponentWrapper = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`;
```

#### Component Best Practices
- Use functional components with hooks (no class components)
- Destructure props in function parameters
- Use PropTypes or TypeScript for type checking (when already present)
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks or utility functions
- Use proper React patterns: composition over inheritance

### Styling

#### Approaches (in order of preference)
1. **Styled-components**: Primary styling method in this project
2. **CSS Modules**: For component-specific styles
3. **Emotion**: For dynamic, theme-based styling
4. **Inline styles**: Avoid unless necessary for dynamic values

#### Style Guidelines
```jsx
// Styled-components example
const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

// Use theme values from props.theme
// Maintain responsive design with media queries
// Follow BEM-like naming for CSS classes when used
```

### Accessibility

**Required Standards**: WCAG 2.1 Level AA

- **Images**: Always include descriptive `alt` text
- **Interactive elements**: Ensure keyboard navigation support
- **ARIA labels**: Use when semantic HTML is insufficient
- **Color contrast**: Maintain at least 4.5:1 ratio for text
- **Focus indicators**: Ensure visible focus states for all interactive elements
- **Semantic HTML**: Use appropriate HTML5 elements (`<nav>`, `<main>`, `<article>`, etc.)

Example:
```jsx
<button aria-label="Close modal" onClick={handleClose}>
  <CloseIcon aria-hidden="true" />
</button>

<img 
  src="/images/meshery-logo.png" 
  alt="Meshery logo - cloud native management platform" 
/>
```

### ESLint Configuration

#### Key Rules
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings, JSX attributes
- **Semicolons**: Required
- **Line endings**: Unix (LF)
- **Spacing**: Space after keywords, around operators
- **Array/Object**: No spaces inside brackets, spaces inside braces
- **Unused vars**: Warning (except React)

#### Common Patterns
```javascript
// ✓ Correct
const myFunction = (param1, param2) => {
  const result = param1 + param2;
  return result;
};

const myObject = { key: "value", another: "data" };
const myArray = [1, 2, 3];

// ✗ Incorrect
const myFunction = ( param1,param2 )=>{
  const result=param1+param2
  return result
}

const myObject = {key: 'value', another: 'data'}
const myArray = [ 1,2,3 ]
```

## Git Workflow

### Commit Messages
Follow Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process, tooling, dependencies

**Examples**:
```
feat(blog): add new post about Meshery patterns
fix(navigation): resolve broken link in footer
docs(readme): update installation instructions
style(components): format code according to eslint rules
refactor(api): simplify data fetching logic
chore(deps): update gatsby to version 5.14
```

### Pull Requests
- Submit all changes as PRs to the `master` branch
- Reference related issues in PR description
- Ensure CI checks pass before requesting review
- Follow the PR template guidelines
- Sign-off commits with `git commit -s`

### Branch Naming
Use descriptive, kebab-case names:
- `feat/add-blog-post-meshery`
- `fix/navigation-mobile-menu`
- `docs/update-contributing-guide`

## Performance Considerations

### Core Web Vitals Optimization

**CRITICAL**: All changes must maintain or improve Core Web Vitals scores. Monitor and optimize for:

#### 1. Largest Contentful Paint (LCP) - Target: < 2.5s
- **Images**: Use `gatsby-plugin-image` for automatic optimization, lazy loading, and responsive images
- **Preload critical resources**: Preload above-the-fold images, fonts, and critical CSS
- **Reduce server response time**: Optimize GraphQL queries, minimize API calls
- **Remove render-blocking resources**: Defer non-critical JavaScript and CSS
- **Font optimization**: Use `font-display: swap` or `optional`, preload critical fonts from `fonts.css`

#### 2. First Input Delay (FID) / Interaction to Next Paint (INP) - Target: < 100ms / < 200ms
- **Minimize JavaScript execution**: 
  - Use code splitting and lazy loading via `@loadable/component`
  - Avoid large third-party scripts
  - Break up long tasks into smaller chunks
- **Optimize event handlers**: Debounce/throttle scroll, resize, and input events
- **Web Workers**: Offload heavy computations to Web Workers when possible
- **Reduce main thread work**: Minimize DOM manipulation, avoid forced reflows

#### 3. Cumulative Layout Shift (CLS) - Target: < 0.1
- **Reserve space**: Set explicit width and height for images, videos, and embeds
- **Avoid dynamic content**: Don't insert content above existing content without user interaction
- **Font loading**: Use `font-display: optional` to prevent layout shifts from font swaps
- **Avoid animations**: Don't animate properties that trigger layout (width, height, top, left)
- **Skeleton screens**: Use placeholders for dynamic content loading

### Gatsby Build Optimization
- **Images**: Use `gatsby-plugin-image` for optimized images with automatic format conversion (WebP, AVIF)
- **Code splitting**: Leverage Gatsby's automatic code splitting per route
- **Lazy loading**: Use `@loadable/component` for heavy components below the fold
- **Bundle size**: Monitor with webpack bundle analyzer, keep bundles < 200KB
- **Font loading**: Preload critical fonts defined in `fonts.css`, use subset fonts
- **Static generation**: Prefer static generation over client-side rendering when possible
- **Caching**: Leverage Gatsby's aggressive caching strategy

### Best Practices

#### Image Optimization (Critical for LCP)
```jsx
// ✓ Use gatsby-plugin-image with proper sizing and alt text
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const MyComponent = ({ imageData }) => {
  const image = getImage(imageData);
  return (
    <GatsbyImage 
      image={image} 
      alt="Descriptive alt text for accessibility and SEO"
      loading="eager" // For above-the-fold images
      // loading="lazy" // For below-the-fold images (default)
    />
  );
};

// ✓ Set explicit dimensions to prevent CLS
const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; // Prevents layout shift
`;
```

#### Code Splitting & Lazy Loading (Critical for FID/INP)
```jsx
// ✓ Use lazy loading for heavy components below the fold
import loadable from '@loadable/component';

const HeavyComponent = loadable(() => import('./HeavyComponent'), {
  fallback: <div>Loading...</div>, // Prevents CLS
});

// ✓ Use React.lazy for route-based code splitting
const DynamicPage = React.lazy(() => import('./pages/DynamicPage'));

// Wrap with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <DynamicPage />
</Suspense>
```

#### Font Loading (Critical for CLS and LCP)
```jsx
// ✓ In gatsby-browser.js or component
const fontStyles = `
  @font-face {
    font-family: 'CustomFont';
    src: url('/fonts/customfont.woff2') format('woff2');
    font-display: optional; /* Prevents CLS from font swaps */
    font-weight: 400;
    font-style: normal;
  }
`;
```

#### Event Handler Optimization (Critical for FID/INP)
```jsx
// ✓ Debounce expensive operations
import { debounce } from 'lodash';

const handleSearch = debounce((query) => {
  // Expensive search operation
}, 300);

// ✓ Use passive event listeners for scroll/touch
useEffect(() => {
  const handleScroll = () => {
    // Scroll handling
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Common Tasks

### Creating a New Page

1. Create MDX file in `src/pages/`:
```markdown
---
title: "My New Page"
path: "/my-new-page"
description: "Description for SEO"
---

# My New Page

Content goes here...
```

2. Or create a React component in `src/pages/`:
```jsx
import React from 'react';
import Layout from '../components/layout';

const MyNewPage = () => {
  return (
    <Layout>
      <h1>My New Page</h1>
      <p>Content goes here...</p>
    </Layout>
  );
};

export default MyNewPage;
```

### Creating a New Blog Post

1. Add MDX file with proper frontmatter
2. Include publication date in ISO format
3. Use appropriate tags and categories
4. Include featured image in frontmatter
5. Follow existing blog post structure

### Adding a New Component

1. Create component file in `src/components/ComponentName/`
2. Create `index.js` with component logic
3. Add styled-components in same file or separate `style.js`
4. Export component as default
5. Update component documentation if it exists
6. Ensure component is responsive and accessible

### Modifying Gatsby Configuration

**Files**:
- `gatsby-config.js`: Site metadata, plugins
- `gatsby-node.js`: Dynamic page generation, GraphQL schema
- `gatsby-browser.js`: Browser APIs, global styles
- `gatsby-ssr.js`: SSR APIs

**Caution**: Changes to these files require restart of development server

## Troubleshooting

### Build Errors
- Check `gatsby-config.js` for plugin misconfigurations
- Clear cache: `gatsby clean`
- Reinstall dependencies: `rm -rf node_modules && npm install --legacy-peer-deps`
- Check for Node version mismatch (should match `.nvmrc`)

### Content Issues
- Validate MDX syntax: Look for unclosed JSX tags, improper frontmatter
- Check GraphQL queries in `gatsby-node.js`
- Verify file paths are correct and case-sensitive

### Styling Issues
- Check for conflicting styled-components
- Verify theme values are correctly accessed
- Clear `.cache` directory and rebuild

### Linting Errors
- Run `npm run lint` to auto-fix many issues
- Check `eslint.config.js` for rule details
- Common fixes: indentation (2 spaces), double quotes, semicolons

## Security Best Practices

- Never commit secrets, API keys, or credentials
- Use environment variables for sensitive configuration
- Validate and sanitize user inputs in forms
- Keep dependencies up to date
- Follow CSP headers defined in `gatsby-config.js`
- Review security headers in `_headers` file

## Community and Resources

### Documentation
- Layer5 Community Handbook: https://layer5.io/community/handbook
- Meshery Documentation: https://docs.meshery.io
- Gatsby Documentation: https://www.gatsbyjs.com/docs/

### Getting Help
- Layer5 Slack: https://slack.layer5.io
- MeshMates Program: For guidance and mentorship
- GitHub Discussions: For questions and community help

### Code of Conduct
All contributions must adhere to the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

Report violations via:
- Email: community@layer5.io
- Incident Report Form: https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform

## Summary Checklist for Code Contributions

Before submitting a PR, verify:

### Code Quality
- [ ] Code follows ESLint rules (`npm run lint` passes)
- [ ] All new components are functional, not class-based
- [ ] Styling uses styled-components or existing patterns
- [ ] Commit messages follow Conventional Commits format
- [ ] Changes are minimal and surgical
- [ ] No placeholder content or sensitive data
- [ ] No console errors or warnings introduced

### Accessibility & Semantics
- [ ] Accessibility requirements are met (WCAG 2.1 AA)
- [ ] Images have descriptive alt text for both accessibility and SEO
- [ ] Proper semantic HTML elements used (`<article>`, `<nav>`, etc.)
- [ ] Keyboard navigation works correctly
- [ ] Color contrast ratios meet WCAG standards (4.5:1 for text)

### SEO Requirements
- [ ] Meta descriptions included in frontmatter (150-160 characters)
- [ ] Title tags are descriptive and under 60 characters
- [ ] Proper heading hierarchy (single H1, logical H2-H6)
- [ ] URLs are clean and keyword-rich (kebab-case slugs)
- [ ] Relevant keywords naturally incorporated
- [ ] Open Graph tags included for social sharing
- [ ] Images optimized with gatsby-plugin-image
- [ ] Internal linking implemented where appropriate

### Core Web Vitals Performance
- [ ] **LCP < 2.5s**: Images optimized, critical resources preloaded
- [ ] **FID/INP < 100ms/200ms**: JavaScript minimized, code splitting used
- [ ] **CLS < 0.1**: Explicit dimensions set for media, no layout shifts
- [ ] Lazy loading implemented for below-the-fold content
- [ ] Font loading optimized (font-display: optional)
- [ ] Bundle size kept under 200KB per route
- [ ] Lighthouse CI checks pass (if applicable)

### Testing & Validation
- [ ] Build completes successfully (`make build`)
- [ ] Changes work correctly in development (`make site`)
- [ ] Responsive design is maintained across devices
- [ ] Tested on throttled connection (Fast 3G)
- [ ] No external dependencies on images or resources
- [ ] Content uses American English
- [ ] Terminology is correct (Meshery, Kanvas, etc.)

## Example Contribution

### Complete Blog Post Example

```markdown
---
title: "Exploring Meshery's New Features in 2025 | Layer5"
path: "/blog/meshery-new-features-2025"
date: "2025-09-23"
author: "Layer5 Team"
description: "Discover the latest Meshery features for cloud native management: enhanced pattern management, Kanvas integration, and Kubernetes optimization tools for service mesh operations."
thumbnail: "/images/blog/meshery-2025-features.png"
tags:
  - Meshery
  - Cloud Native
  - Features
  - Kubernetes
  - Service Mesh
category: "Product Updates"
# SEO and Open Graph metadata
keywords: ["meshery", "cloud native", "kubernetes", "service mesh", "kanvas", "microservices"]
ogTitle: "Exploring Meshery's New Features in 2025"
ogDescription: "Latest Meshery updates for cloud native infrastructure management"
ogImage: "/images/blog/meshery-2025-features-og.png"
twitterCard: "summary_large_image"
---

# Exploring Meshery's New Features in 2025

Meshery continues to evolve as the leading platform for cloud native infrastructure management. In this post, we'll explore the exciting new features released in 2025 that enhance Kubernetes operations, service mesh management, and cloud native application deployment.

## Enhanced Pattern Management

The new pattern management system allows you to define, share, and deploy cloud native infrastructure patterns with improved validation, versioning, and collaboration features. Learn how to streamline your Kubernetes deployments...

## Improved Kanvas Integration

Kanvas now integrates seamlessly with Meshery to provide visual topology mapping, real-time infrastructure visualization, and drag-and-drop service mesh configuration. This integration enables DevOps teams to...

## Getting Started

To try these new features:

1. Install or update Meshery CLI:
   ```bash
   curl -L https://meshery.io/install | bash -
   ```

2. Verify installation:
   ```bash
   mesheryctl system check
   ```

3. Explore the new features in the Meshery UI

## Next Steps

- Read the [full documentation](https://docs.meshery.io)
- Join our [community Slack](https://slack.layer5.io)
- Contribute to [Meshery on GitHub](https://github.com/meshery/meshery)

We're excited to see what you build with these new capabilities!
```

### Complete Component Example

```jsx
import React from 'react';
import styled from 'styled-components';

/**
 * FeatureCard - Displays a feature with icon, title, and description
 * 
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 * @param {ReactNode} icon - Icon component
 * @param {string} link - Optional link to feature details
 */
const FeatureCard = ({ title, description, icon, link }) => {
  const content = (
    <>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </>
  );

  if (link) {
    return (
      <CardLink href={link} aria-label={`Learn more about ${title}`}>
        <CardWrapper>{content}</CardWrapper>
      </CardLink>
    );
  }

  return <CardWrapper>{content}</CardWrapper>;
};

export default FeatureCard;

const CardWrapper = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const CardDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;
```

## Additional Notes

- **Build time**: The site takes significant time to build (5-10+ minutes). Be patient and don't interrupt builds.
- **Memory**: Builds require significant memory. Use `NODE_OPTIONS=--max-old-space-size=8192` as configured in `package.json`.
- **Caching**: Gatsby caches aggressively. When in doubt, run `gatsby clean` to clear cache.
- **Hot reload**: Development server supports hot module replacement for fast iteration.
- **Repository size**: Use `git clone --depth=1` to avoid downloading entire history (~6 GB).

This document serves as the primary reference for GitHub Copilot when assisting with code contributions to the Layer5 website. Always prioritize minimal changes, maintain existing patterns, and ensure quality through linting and testing.
