---
version: 1.0
name: Layer5.io
description: Visual and interaction design specification for the Layer5.io website.
---

# Layer5.io Design System

## 1. Purpose and scope

This document defines the design system for [Layer5.io](https://layer5.io), the public website for Layer5. It is the design reference for the Hugo implementation and for future design and UI contributions to this repository.

The Hugo website is a new implementation of the existing Layer5.io experience. Its design is based on the established production website and Layer5 brand identity. The migration changes the publishing and rendering technology; it does not introduce a new visual identity.

This specification defines:

- Brand and semantic colors.
- Light, dark, and system theme behavior.
- Typography and type scale.
- Spacing, containers, grids, and responsive breakpoints.
- Shape, elevation, and motion.
- Shared components and interaction states.
- Accessibility requirements.
- The conventions used to implement the design in Hugo.

This document applies to **layer5.io only**. It does not define the design or implementation of `meshery.io`, `docs.layer5.io`, `play.meshery.io`, or other Layer5 properties. Shared brand decisions may be informed by Layer5's Brand Guide and Sistent, but this website owns its own templates, styles, components, and theme implementation.

## 2. Design principles

1. **Recognizable Layer5 identity.** Use the established Layer5 green/teal palette, saffron accent, logo treatments, and typography.
2. **Clear and welcoming.** The site serves engineers, operators, contributors, and the wider cloud-native community. Content must be easy to scan and understand.
3. **Content before decoration.** Use whitespace, typography, and neutral surfaces to establish hierarchy. Do not decorate every section with gradients, borders, or shadows.
4. **Consistent interactions.** Navigation, links, buttons, cards, and content components use predictable states across the site.
5. **Responsive by default.** Layouts must work across phones, tablets, laptops, and wide desktop screens.
6. **Accessible by design.** Semantic HTML, keyboard access, visible focus, sufficient contrast, and reduced-motion support are required.
7. **Simple implementation.** Prefer Hugo templates, HTML, and CSS. Use JavaScript only when interaction requires it.

## 3. Design authority

Use the following references for the decisions they govern:

- **Layer5.io production website:** visual composition, content hierarchy, imagery, navigation, and the overall user experience.
- **Layer5 Brand Guide:** approved brand identity, logo usage, brand colors, and typography roles.
- **Sistent:** shared design-system guidance, particularly semantic design tokens and the 8px spacing principle.
- **This document:** the concrete design specification for the Layer5.io Hugo website.

The production website establishes the site's visual character. The Brand Guide establishes the approved brand identity. This document defines how those decisions are applied consistently in the Hugo implementation.

References:

- [Layer5.io](https://layer5.io)
- [Layer5 Brand Guide](https://layer5.io/brand/brand-guide.pdf)
- [Sistent](https://github.com/layer5io/sistent)
- [Sistent color guidance](https://layer5.io/projects/sistent/identity/color/)
- [Sistent typography guidance](https://layer5.io/projects/sistent/identity/typography/)
- [Sistent design tokens](https://layer5.io/projects/sistent/getting-started/tokens/)

## 4. Color

### 4.1 Brand palette

The following colors form the Layer5 brand palette.

| Name              | Hex       | Role                                                                        |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| Caribbean Green   | `#00D3A9` | Bright brand green, decorative accents, highlights, and dark-theme links    |
| Keppel            | `#00B39F` | Core green brand color and primary green action treatment                   |
| Charcoal          | `#3C494F` | Neutral anchor, strong text-adjacent color, and interactive hover treatment |
| Dark Jungle Green | `#1E2117` | Dark heading color on light surfaces                                        |
| Teal Blue         | `#477E96` | Supporting brand accent, gradients, and selected decorative treatments      |
| Saffron           | `#EBC017` | Contrasting accent and primary call-to-action treatment                     |
| Flax              | `#EAD07D` | Light companion accent to saffron                                           |
| Silver Chalice    | `#B3B3B3` | Muted neutral                                                               |

Do not introduce additional brand colors. Semantic status colors are permitted for error, success, warning, and informational states.

### 4.2 Neutral colors

| Name       | Hex       | Role                                              |
| ---------- | --------- | ------------------------------------------------- |
| White      | `#FFFFFF` | Light page and surface background                 |
| Gallery    | `#EEEEEE` | Muted light background                            |
| Cod Gray   | `#121212` | Dark page background                              |
| Mine Shaft | `#212121` | Dark surface                                      |
| Black      | `#000000` | Strong text and selected dark navigation surfaces |
| Charcoal   | `#3C494F` | Neutral text and interaction color                |

### 4.3 Semantic color tokens

Components must use semantic tokens rather than hardcoded color values. The values below define the default light and dark themes.

| Token                  | Light     | Dark      | Use                                          |
| ---------------------- | --------- | --------- | -------------------------------------------- |
| `--color-bg`           | `#FFFFFF` | `#121212` | Main page background                         |
| `--color-bg-muted`     | `#EEEEEE` | `#212121` | Alternate section background                 |
| `--color-surface`      | `#FFFFFF` | `#212121` | Cards and raised surfaces                    |
| `--color-nav-bg`       | `#FFFFFF` | `#000000` | Navigation background                        |
| `--color-text`         | `#000000` | `#FFFFFF` | Body text                                    |
| `--color-heading`      | `#1E2117` | `#FFFFFF` | Headings                                     |
| `--color-primary`      | `#3C494F` | `#FFFFFF` | Strong neutral UI and hover text             |
| `--color-link`         | `#007A6B` | `#00D3A9` | Text links                                   |
| `--color-brand`        | `#00D3A9` | `#00D3A9` | Brand accents                                |
| `--color-brand-strong` | `#007A6B` | `#00B39F` | Accessible green actions and focus treatment |
| `--color-active`       | `#3C494F` | `#3C494F` | Button hover and active background           |
| `--color-highlight`    | `#EBC017` | `#EBC017` | Saffron CTA and highlights                   |
| `--color-error`        | `#D32F2F` | `#FF6B6B` | Error states                                 |
| `--color-success`      | `#237A57` | `#4CCB91` | Success states                               |
| `--color-warning`      | `#7A5700` | `#EBC017` | Warning states                               |
| `--color-scrollbar`    | `#3C494F` | `#00D3A9` | Scrollbar thumb                              |
| `--color-border`       | `#D6D6D6` | `#424242` | Borders and dividers                         |

The darker light-theme green `#007A6B` is used for text and controls where the brighter brand green does not meet contrast requirements. `#00D3A9` and `#00B39F` remain available for decorative brand use and dark-theme accents.

### 4.4 Status colors

| Type      | Border    | Title, light | Title, dark |
| --------- | --------- | ------------ | ----------- |
| Note      | `#477DFF` | `#2458CC`    | `#7EB3FF`   |
| Tip       | `#00D3A9` | `#007A6B`    | `#00D3A9`   |
| Warning   | `#EBC017` | `#7A5700`    | `#EBC017`   |
| Caution   | `#F97316` | `#C75800`    | `#F97316`   |
| Important | `#B32700` | `#8C1A00`    | `#FF6B4A`   |

### 4.5 Color rules

- Use semantic tokens for text, backgrounds, borders, and interactive states.
- Use the brand palette for brand expression, not as a substitute for semantic UI colors.
- Do not hardcode a color in a component when a semantic token exists.
- Every theme-dependent token must have a value in both themes.
- Never communicate meaning through color alone.
- Check foreground/background combinations against WCAG contrast requirements.

## 5. Theming

The site supports **light**, **dark**, and **system** theme preferences.

### 5.1 Theme behavior

- The active theme is represented by `data-theme="light"` or `data-theme="dark"` on the root `<html>` element.
- Store the user's preference in `localStorage` under the key `theme`.
- Supported stored values are `light`, `dark`, and `system`.
- An unset preference behaves as `system`.
- `system` follows `prefers-color-scheme`.
- Apply the resolved theme in the document `<head>` before the main stylesheet is painted to prevent a flash of the wrong theme.
- The theme toggle updates the root `data-theme` attribute and persists the selected preference.
- Theme-dependent colors are implemented with CSS custom properties, not JavaScript color conditionals.

### 5.2 Theme transition

Use the following transition for theme-related color changes:

```css
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
```

Apply transitions to the properties that change; transitions are not inherited. The body transitions `color` and `background-color`. SVG elements whose fills change use the same timing for `fill`.

Under `prefers-reduced-motion: reduce`, disable or substantially shorten non-essential transitions.

### 5.3 Theme initialization

The theme must be resolved before the page is rendered visibly. The following inline script is the reference behavior for Hugo's head partial:

```html
<script>
  (function () {
    try {
      var preference = localStorage.getItem("theme");
      var dark =
        preference === "dark" ||
        ((!preference || preference === "system") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light",
      );
    } catch (error) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  })();
</script>
```

The theme control writes `light`, `dark`, or `system` to the same `theme` key and updates `data-theme` immediately.

### 5.4 Images and SVGs

Use the following order of preference:

1. One SVG or image that works in both themes, including transparent regions that reveal the page background.
2. An inline SVG whose fills are controlled by CSS custom properties.
3. Separate light and dark assets, selected through theme-specific CSS.

Prefer inline SVG for logos and icons whose colors need to change with the theme. Use the Layer5 logo assets without distorting their proportions or altering their approved colors.

## 6. Typography

### 6.1 Typefaces

| Role                                  | Typeface     |
| ------------------------------------- | ------------ |
| Headings and designated emphasis      | Qanelas Soft |
| Body, paragraphs, and general content | Open Sans    |
| Fallback                              | `sans-serif` |

Both typefaces are self-hosted by the website. Qanelas Soft is served from `static/fonts/qanelas-soft/` and Open Sans from `static/fonts/open-sans/`. Declare each available weight and italic style with its own `@font-face` rule and use `font-display: swap`.

Recommended font tokens:

```css
:root {
  --font-heading: "Qanelas Soft", sans-serif;
  --font-body: "Open Sans", sans-serif;
}
```

Headings use Qanelas Soft. Body copy and long-form content use Open Sans. Form controls inherit the appropriate interface font.

### 6.2 Type scale

Heading sizes reduce at the `62rem` (992px) breakpoint.

| Element            |         Desktop |          Mobile | Weight | Line height                    |
| ------------------ | --------------: | --------------: | -----: | ------------------------------ |
| H1                 | 3.125rem (50px) | 2.125rem (34px) |    700 | Normal                         |
| H2                 | 2.125rem (34px) |  1.75rem (28px) |    600 | Normal                         |
| H3                 |  1.75rem (28px) |   1.5rem (24px) |    500 | Normal                         |
| H4                 |   1.5rem (24px) |  1.25rem (20px) |    400 | Normal                         |
| H5                 |  1.25rem (20px) | 1.1rem (17.6px) |    300 | Normal                         |
| H6                 |     1rem (16px) |     1rem (16px) |    200 | Normal                         |
| Body and paragraph | 1.125rem (18px) |     1rem (16px) |    400 | 28px desktop; 1.75 line-height |
| Section title      |  1.25rem (20px) | 1.1rem (17.6px) |    600 | Normal                         |

Subheadings using `.sub-heading` inherit their corresponding heading size and weight. They are gray, centered, and italic.

### 6.3 Text rules

- Headings have `margin: 0`; spacing is controlled by the surrounding layout.
- Paragraphs use `margin: 0 0 1rem`.
- Body text uses weight 400.
- Heading weights decrease from h1 through h6 as specified in the type scale.
- Links have no underline by default and use `--color-link`; hover uses `--color-primary`.
- Use antialiased font smoothing where supported.
- The page title is the h1. Main content begins with h2 when a page-level h1 is present.
- Keep long-form line lengths comfortable and avoid overly dense paragraphs.

## 7. Spacing and layout

### 7.1 Spacing scale

Use an 8px base spacing system for new Hugo components. The scale is aligned with Sistent's spacing guidance.

| Token        | Pixels |   Rem |
| ------------ | -----: | ----: |
| `--space-0`  |      0 |     0 |
| `--space-1`  |      2 | 0.125 |
| `--space-2`  |      4 |  0.25 |
| `--space-3`  |      8 |   0.5 |
| `--space-4`  |     16 |     1 |
| `--space-5`  |     24 |   1.5 |
| `--space-6`  |     32 |     2 |
| `--space-7`  |     40 |   2.5 |
| `--space-8`  |     48 |     3 |
| `--space-9`  |     56 |   3.5 |
| `--space-10` |     64 |     4 |
| `--space-11` |     72 |   4.5 |
| `--space-12` |     80 |     5 |

Use `3rem`, `4rem`, or `6rem` as the common vertical padding options for major page sections. Smaller sections and compact components may use `1rem` or `2rem` according to their hierarchy.

### 7.2 Container

Use a horizontally centered container with 15px horizontal padding and the following maximum widths:

| Viewport minimum | Container max-width |
| ---------------- | ------------------: |
| 576px            |               540px |
| 768px            |               720px |
| 992px            |               960px |
| 1200px           |              1170px |

Below 576px, the container is fluid and fills the available width with its horizontal padding. A fluid container variant is 100% wide.

### 7.3 Grid

- Use a 12-column responsive grid.
- Rows use `-15px` horizontal margins.
- Columns use `15px` horizontal padding, producing a 30px gutter between adjacent column contents.
- Columns wrap at narrow viewport widths.
- Column spans are responsive and may change at the defined breakpoints.
- CSS Grid or Flexbox may be used in Hugo as long as the resulting geometry and responsive behavior match this specification.

### 7.4 Breakpoints

Use these breakpoints consistently:

| Name       | Width                      | Primary use                                   |
| ---------- | -------------------------- | --------------------------------------------- |
| Phone      | `max-width: 480px`         | Small-screen component adjustments            |
| Small      | `max-width: 600px`         | Compact layouts                               |
| Tablet     | `max-width: 767px`         | Mobile navigation and single-column layouts   |
| Type scale | `max-width: 62rem` (992px) | Reduced heading sizes and intermediate layout |
| Desktop    | `min-width: 1200px`        | Wide container and desktop composition        |

Use `767px` as the maximum tablet breakpoint. Do not introduce a separate 768px maximum breakpoint for the same layout transition.

Legacy named breakpoints are not used in new Hugo styles. New CSS uses the breakpoint values in this section.

### 7.5 Anchored headings

Set `scroll-padding-top: 5rem` on `html` so in-page links and anchored headings are not hidden behind the sticky navigation.

## 8. Shape, elevation, and motion

### 8.1 Border radius

| Radius           | Use                           |
| ---------------- | ----------------------------- |
| `4px`            | Small controls and compact UI |
| `5px`            | Buttons                       |
| `8px` (`0.5rem`) | Cards and highlight chips     |
| `0.375rem`       | Callouts                      |
| `10px`           | Selected component surfaces   |
| `16px` (`1rem`)  | Larger component rounding     |
| `20px`           | Blockquotes                   |

Use the closest established radius for new components. Do not introduce excessive rounding or make every component pill-shaped.

### 8.2 Shadows

| Token                   | Light                             | Dark                                    |
| ----------------------- | --------------------------------- | --------------------------------------- |
| `--shadow-card`         | `0 2px 6px rgb(0 0 0 / 0.2)`      | `0 2px 6px #00D3A9`                     |
| `--shadow-card-hover`   | `0 2px 15px 4px rgb(0 0 0 / 0.1)` | `0 2px 15px 4px rgb(255 255 255 / 0.9)` |
| `--shadow-button-hover` | `0 2px 10px rgb(0 0 0 / 0.4)`     | `0 2px 10px rgb(255 255 255 / 0.4)`     |

Use shadows selectively to establish elevation and hover feedback. Do not add shadows to every section or surface.

### 8.3 Motion

- Theme and color transitions use `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Buttons transition over `450ms` and use `transform: scale(0.98)` while pressed.
- Card image hover zoom uses `transform: scale3d(1.1, 1.1, 1)` within an overflow-hidden image container.
- Hover interactions must have equivalent keyboard focus feedback.
- Under `prefers-reduced-motion: reduce`, disable non-essential transforms and shorten or remove transitions.

## 9. Components

### 9.1 Buttons

The default green button uses:

- `display: inline-flex` with centered content.
- `min-width: 170px`.
- `padding: 14px`.
- `border-radius: 5px`.
- `font-size: 16px`.
- Inherited interface font.
- No border and no text underline.
- Light-theme background `--color-brand-strong` and white text.
- Hover background `--color-active`, white text, and `--shadow-button-hover`.
- Active state with the button hover shadow and `transform: scale(0.98)`.

Button variants:

| Variant             | Background         | Text          | Border                  | Hover                                                    |
| ------------------- | ------------------ | ------------- | ----------------------- | -------------------------------------------------------- |
| Default / secondary | Green action token | White         | None                    | Default uses charcoal; secondary may use Caribbean Green |
| Primary CTA         | `#EBC017`          | `#000000`     | None                    | Retains saffron and adds shadow                          |
| Outlined            | Transparent        | Heading color | 2px solid heading color | Adds shadow                                              |

Use one primary saffron CTA per view for the main action. Other actions use the default, secondary, or outlined treatments according to their importance.

Use `<button>` for an action and `<a>` for navigation. Include visible focus, hover, active, and disabled states.

### 9.2 Cards

- Background: `--color-surface`.
- Border radius: `0.5rem`.
- Shadow: `--shadow-card`.
- Grid card bottom margin: `2rem`.
- Minimum grid-card height: `23rem` where a consistent card grid requires it.
- Hover: `--shadow-card-hover` and thumbnail zoom.
- Thumbnail aspect ratio: 16:9.
- Thumbnail top corners match the card radius and use `overflow: hidden`.
- Read-more links use `--color-brand-strong`; their arrow nudges right on hover.
- Below `776px`, cards become full width with `2rem` bottom margin.
- Cards may use a list layout with a thumbnail occupying 25% of the width on the left.

Do not nest interactive links or buttons inside another interactive card link.

### 9.3 Callouts

A callout uses semantic `<aside>` markup.

- Vertical margin: `1.75rem 0`.
- Border radius: `0.375rem`.
- Left border: `4px solid` using the status color.
- Font size: `0.95rem`.
- Header: flex row with `0.5rem` gap and `0.55rem 1rem` padding.
- Icon: `1rem`, inheriting the title color.
- Title: `0.9rem`, weight 700.
- Header background: status color at 15% opacity in light mode and 20% in dark mode.
- Supported types: `note`, `tip`, `warning`, `caution`, and `important`.
- Default type: `note`.

Every callout includes a visible text title. The icon and color supplement the message; they do not replace it.

### 9.4 Blockquotes

Blockquotes use a rounded outlined speech-bubble treatment:

- `2px` border.
- `20px` border radius.
- `20px` padding.
- Curved speech-bubble tail below the left side.
- Border: brand green (`#00D3A9`) in light mode and dark gray (`#2C2C2C`) in dark mode.
- Text: `--color-primary`, normal weight, centered.
- Maximum width: `620px`.

### 9.5 Links

- Default color: `--color-link`.
- Hover color: `--color-primary`.
- Links inside containers may use `.mute` to inherit the heading color and switch to brand green on hover.
- `.highlight` is a rounded inline chip with an 8px radius and subtle gray background.
- Links must remain distinguishable from surrounding content and have a visible keyboard focus state.

### 9.6 Text selection

Selected text uses `--color-brand-strong` as the background and white as the foreground. The selected pair must meet contrast requirements.

### 9.7 Focus

All interactive elements use a visible focus indicator:

```css
:focus-visible {
  outline: 3px solid var(--color-brand-strong);
  outline-offset: 3px;
}
```

Do not remove focus styling without providing an equally visible replacement. `:focus:not(:focus-visible)` may suppress the keyboard ring for pointer-only focus.

### 9.8 Shared site components

The site uses the following shared component families. Their Hugo implementations must use the same design tokens and interaction conventions:

- Navigation and footer.
- Page header and section title.
- Accordion.
- Counter and statistics.
- Search.
- Carousel and slider.
- Vintage box and other branded content containers.
- Terminal and code block, including copy control.
- Call-to-action banners.
- Profile, workshop, and resource cards.
- Related posts and resources.
- Cookie consent.
- Scroll-to-top control.

## 10. Accessibility

The target is **WCAG 2.1 AA**.

- Use semantic HTML elements, including `header`, `nav`, `main`, `section`, `aside`, and `footer`.
- Every informative image has meaningful alt text. Decorative images use `alt=""`.
- Keep heading levels in logical order.
- All interactive elements are keyboard reachable.
- Every interactive element has a visible `:focus-visible` indicator.
- Do not convey meaning through color alone.
- Provide labels and accessible error messages for form controls.
- Menus, accordions, dialogs, and carousels expose their state to assistive technology.
- Respect `prefers-reduced-motion`.
- Ensure controls have usable touch targets and sufficient separation on small screens.

### 10.1 Contrast requirements

Use WCAG contrast ratios as the minimum:

- Normal text: 4.5:1.
- Large text: 3:1.
- Meaningful UI boundaries and graphical controls: 3:1 against adjacent colors.

The following combinations are part of the theme palette:

| Pair                   | Approximate ratio | Result |
| ---------------------- | ----------------: | ------ |
| White on `#121212`     |           18.73:1 | Pass   |
| `#1E2117` on white     |           16.34:1 | Pass   |
| Black on `#EBC017`     |           12.08:1 | Pass   |
| `#00D3A9` on `#121212` |            9.72:1 | Pass   |
| White on `#3C494F`     |            9.30:1 | Pass   |
| `#FF6B6B` on `#121212` |            6.75:1 | Pass   |
| `#007A6B` on white     |            5.26:1 | Pass   |
| `#D32F2F` on white     |            4.98:1 | Pass   |

Do not use `#00B39F` as small text on white or white text on a `#00B39F` background; that pairing does not meet WCAG AA. Use the accessible light-theme action/link token instead.

## 11. Hugo implementation

The design system is implemented with Hugo templates, HTML, CSS/Sass, and small amounts of JavaScript. Hugo is responsible for rendering pages and processing static assets; the design tokens and component styles are owned by this repository.

### 11.1 Project structure

Use Hugo's standard project directories and keep to the structure established in the repository:

```text
assets/
  css/
    tokens.css
    base.css
    layout.css
    components/
      button.css
      card.css
      callout.css
      blockquote.css
  fonts/
layouts/
  _default/
  partials/
    head/
      theme-init.html
  shortcodes/
static/
  fonts/
```

The structure is a logical separation of responsibilities. Existing repository conventions take precedence over creating duplicate or parallel directories.

### 11.2 Stylesheet processing

Use Hugo Pipes for stylesheets that require compilation or processing:

- Compile Sass when Sass is used.
- Concatenate stylesheets where necessary.
- Minify production CSS.
- Fingerprint published assets for cache safety.

Keep design tokens in one shared stylesheet. Component styles consume those tokens instead of defining their own competing palettes.

### 11.3 CSS tokens

The following is the reference token foundation for the Hugo implementation:

```css
:root {
  color-scheme: light;

  --color-bg: #ffffff;
  --color-bg-muted: #eeeeee;
  --color-surface: #ffffff;
  --color-nav-bg: #ffffff;
  --color-text: #000000;
  --color-heading: #1e2117;
  --color-primary: #3c494f;
  --color-link: #007a6b;
  --color-brand: #00d3a9;
  --color-brand-strong: #007a6b;
  --color-active: #3c494f;
  --color-highlight: #ebc017;
  --color-error: #d32f2f;
  --color-success: #237a57;
  --color-warning: #7a5700;
  --color-border: #d6d6d6;
  --color-scrollbar: #3c494f;

  --font-heading: "Qanelas Soft", sans-serif;
  --font-body: "Open Sans", sans-serif;

  --shadow-card: 0 2px 6px rgb(0 0 0 / 0.2);
  --shadow-card-hover: 0 2px 15px 4px rgb(0 0 0 / 0.1);
  --shadow-button-hover: 0 2px 10px rgb(0 0 0 / 0.4);

  --ease-theme: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

[data-theme="dark"] {
  color-scheme: dark;

  --color-bg: #121212;
  --color-bg-muted: #212121;
  --color-surface: #212121;
  --color-nav-bg: #000000;
  --color-text: #ffffff;
  --color-heading: #ffffff;
  --color-primary: #ffffff;
  --color-link: #00d3a9;
  --color-brand: #00d3a9;
  --color-brand-strong: #00b39f;
  --color-active: #3c494f;
  --color-highlight: #ebc017;
  --color-error: #ff6b6b;
  --color-success: #4ccb91;
  --color-warning: #ebc017;
  --color-border: #424242;
  --color-scrollbar: #00d3a9;

  --shadow-card: 0 2px 6px #00d3a9;
  --shadow-card-hover: 0 2px 15px 4px rgb(255 255 255 / 0.9);
  --shadow-button-hover: 0 2px 10px rgb(255 255 255 / 0.4);
}
```

The `--space-*` scale is defined in Section 7.1 and should also be exposed as CSS custom properties in the token stylesheet.

### 11.4 Hugo templates and components

Use the appropriate Hugo mechanism for each responsibility:

- **Base templates and layouts** define page structure and content-type rendering.
- **Partials** provide reusable layout fragments such as navigation, footer, metadata, and shared UI.
- **Shortcodes** provide reusable components that content authors place inside Markdown content.
- **Data files** provide structured data consumed by templates.
- **Assets** hold stylesheets, scripts, and resources processed by Hugo Pipes.
- **Static files** hold resources copied to the published site without processing.

Do not turn every component into a shortcode. Choose the simplest mechanism that fits how the component is used.

### 11.5 JavaScript

Keep JavaScript small and purposeful.

- Use native HTML and CSS for simple interactions.
- Load scripts only on pages that need them where practical.
- Keep component behavior scoped and independent.
- Preserve core content and navigation when non-essential JavaScript is unavailable.
- Avoid theme-dependent color conditionals in JavaScript; use CSS custom properties.
- Ensure interactive scripts support keyboard and assistive-technology use.

## 12. Content and asset conventions

- Keep page content in Hugo content files and front matter rather than embedding it in layout templates.
- Use shared partials for repeated site chrome and reusable page structures.
- Store reusable structured data in Hugo data files.
- Keep image assets organized and avoid duplicate copies.
- Use SVG for logos and icons when scalable vector rendering or CSS-controlled fills are needed.
- Provide descriptive alt text for informative images.
- Use meaningful, stable asset names.
- Preserve established public URLs during migration; use redirects when a URL must change.
- Keep metadata, canonical URLs, and social-sharing metadata consistent across layouts.

## 13. Do and do not

### Do

- Use this document as the design contract for Layer5.io.
- Use the Layer5 brand palette and typography.
- Use semantic CSS tokens for shared visual values.
- Reuse Hugo partials and component styles.
- Keep content, templates, and presentation separate.
- Test all supported theme modes and responsive layouts.
- Preserve established page hierarchy, URLs, and navigation.
- Include keyboard, focus, contrast, and reduced-motion behavior.
- Keep the site performant and avoid unnecessary JavaScript.

### Do not

- Do not use Meshery.io or docs.layer5.io as the design reference for Layer5.io.
- Do not introduce a different brand palette or typography system.
- Do not hardcode repeated colors, spacing, or component values in templates.
- Do not add a new framework solely to reproduce existing layout behavior.
- Do not use JavaScript for behavior that native HTML and CSS can provide.
- Do not make every component pill-shaped or heavily rounded.
- Do not use gradients and shadows on every surface.
- Do not treat dark mode as a simple color inversion.
- Do not make content-heavy pages behave like marketing hero pages.
- Do not sacrifice accessibility for visual parity.

## 14. UI change checklist

Before merging a shared UI or design-system change, confirm:

- [ ] The change follows this design specification.
- [ ] Existing tokens and components have been reused where possible.
- [ ] The change works in light, dark, and system theme modes.
- [ ] The change works at phone, tablet, desktop, and wide desktop widths.
- [ ] Text and interactive controls meet contrast requirements.
- [ ] Keyboard navigation and visible focus work correctly.
- [ ] Reduced-motion preferences are respected.
- [ ] Images and icons have appropriate accessible names or empty alt text when decorative.
- [ ] The change does not introduce unnecessary JavaScript or layout shifts.
- [ ] Affected pages have been checked for visual regressions.
- [ ] Public URLs and navigation destinations remain correct.

## 15. Design intent

Layer5.io is the public home for Layer5's products, solutions, resources, and community. Its design combines a recognizable green and saffron identity, Qanelas Soft and Open Sans typography, neutral surfaces, clear content hierarchy, and responsive layouts.

Every new page and component should feel like part of the same website: welcoming to the broader cloud-native community, credible to technical audiences, accessible to all visitors, and straightforward to maintain.
