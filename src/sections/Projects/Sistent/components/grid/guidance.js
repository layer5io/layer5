import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Grid2, Box, Avatar } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

// Demo Item component for examples
const Item = ({ children, sx = {} }) => (
  <Box
    sx={{
      p: 1,
      backgroundColor: "primary.main",
      color: "primary.contrastText",
      textAlign: "center",
      borderRadius: 1,
      ...sx,
    }}
  >
    {children}
  </Box>
);

const GridGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Grid">
      <div className="content">
        <a id="Identity">
          <h2>Grid</h2>
        </a>
        <p>
          The responsive layout grid adapts to screen size and orientation,
          ensuring consistency across layouts. It uses CSS Flexbox for high
          flexibility and provides a 12-column system with customizable breakpoints.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/grid"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/grid")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/grid/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/grid/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/grid/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/grid/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For effective use of the Grid system, it's important to understand
            responsive design principles and how to structure layouts that adapt
            gracefully across different screen sizes.
          </p>

          <a id="Layout Patterns">
            <h2>Layout Patterns</h2>
          </a>
          <p>
            The Grid component supports various layout patterns that are commonly
            used in responsive web design.
          </p>

          <h3>Container and Items</h3>
          <p>
            Every grid layout consists of a container (parent) and items (children).
            The container establishes the grid context and handles spacing, while
            items define how much space they occupy within that context.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600, border: "2px dashed", borderColor: "grey.400", p: 1 }}>
                <Grid2 size={4}>
                  <Item>Item 1</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 2</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 3</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <h3>Responsive Design</h3>
          <p>
            Design layouts that work across all screen sizes by using responsive
            breakpoints. Start with mobile-first design and progressively enhance
            for larger screens.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                  <Item>Responsive</Item>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                  <Item>Grid</Item>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
                  <Item>Items</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Spacing Guidelines">
            <h2>Spacing Guidelines</h2>
          </a>
          <p>
            Consistent spacing creates visual harmony and improves readability.
            Use the spacing system to maintain consistent gaps between grid items.
          </p>

          <h3>Uniform Spacing</h3>
          <p>
            Use consistent spacing values throughout your layout. The spacing prop
            accepts values that correspond to your theme's spacing scale.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Box sx={{ mb: 2 }}>
                  <Grid2 container spacing={1}>
                    <Grid2 size={6}><Item>Spacing: 1</Item></Grid2>
                    <Grid2 size={6}><Item>Spacing: 1</Item></Grid2>
                  </Grid2>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={6}><Item>Spacing: 2</Item></Grid2>
                    <Grid2 size={6}><Item>Spacing: 2</Item></Grid2>
                  </Grid2>
                </Box>
                <Grid2 container spacing={3}>
                  <Grid2 size={6}><Item>Spacing: 3</Item></Grid2>
                  <Grid2 size={6}><Item>Spacing: 3</Item></Grid2>
                </Grid2>
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Row and Column Spacing</h3>
          <p>
            For more control, use rowSpacing and columnSpacing to set different
            spacing values for rows and columns independently.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container rowSpacing={1} columnSpacing={3} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={6}>
                  <Item>Item 1</Item>
                </Grid2>
                <Grid2 size={6}>
                  <Item>Item 2</Item>
                </Grid2>
                <Grid2 size={6}>
                  <Item>Item 3</Item>
                </Grid2>
                <Grid2 size={6}>
                  <Item>Item 4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Content Alignment">
            <h2>Content Alignment</h2>
          </a>
          <p>
            Proper alignment ensures content is visually balanced and easy to scan.
            Use alignment properties to center content within grid items.
          </p>

          <h3>Centered Content</h3>
          <p>
            To center content within grid items, specify display="flex" on the item
            and use justifyContent and alignItems to control positioning.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }} minHeight={120}>
                <Grid2
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  size="grow"
                  sx={{ border: "1px dashed", borderColor: "grey.400" }}
                >
                  <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
                </Grid2>
                <Grid2
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  size="grow"
                  sx={{ border: "1px dashed", borderColor: "grey.400" }}
                >
                  <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
                </Grid2>
                <Grid2
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  size="grow"
                  sx={{ border: "1px dashed", borderColor: "grey.400" }}
                >
                  <Avatar sx={{ bgcolor: "error.main" }}>C</Avatar>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Direction Control">
            <h2>Direction Control</h2>
          </a>
          <p>
            The direction prop controls the flex-direction of the grid container,
            determining how grid items are arranged. Understanding direction is
            crucial for creating flexible layouts that adapt to different content needs.
          </p>

          <h3>Row Direction (Default)</h3>
          <p>
            The default direction is 'row', which arranges items horizontally from
            left to right. This is ideal for most standard grid layouts.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} direction="row" sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={3}>
                  <Item>1</Item>
                </Grid2>
                <Grid2 size={3}>
                  <Item>2</Item>
                </Grid2>
                <Grid2 size={3}>
                  <Item>3</Item>
                </Grid2>
                <Grid2 size={3}>
                  <Item>4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <h3>Column Direction</h3>
          <p>
            Use direction="column" to arrange items vertically. This is useful for
            sidebar layouts, vertical navigation, or when you want items to stack
            regardless of screen size.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} direction="column" sx={{ width: "100%", maxWidth: 200, height: 300 }}>
                <Grid2 size="grow">
                  <Item>1</Item>
                </Grid2>
                <Grid2 size="grow">
                  <Item>2</Item>
                </Grid2>
                <Grid2 size="grow">
                  <Item>3</Item>
                </Grid2>
                <Grid2 size="grow">
                  <Item>4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Wrap Behavior">
            <h2>Wrap Behavior</h2>
          </a>
          <p>
            The wrap prop controls how grid items behave when they exceed the
            container width. Understanding wrap behavior helps you create layouts
            that handle varying amounts of content gracefully.
          </p>

          <h3>Wrap (Default)</h3>
          <p>
            The default wrap="wrap" behavior allows items to wrap to new lines
            when the container width is exceeded. This ensures responsive behavior
            and prevents horizontal overflow.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} wrap="wrap" sx={{ width: "100%", maxWidth: 300 }}>
                <Grid2 size={4}>
                  <Item>Item 1</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 2</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 3</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <h3>No Wrap</h3>
          <p>
            Use wrap="nowrap" to prevent items from wrapping. This keeps all items
            on a single line but may cause horizontal overflow. Use with caution
            and consider adding overflow handling.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} wrap="nowrap" sx={{ width: "100%", maxWidth: 300, overflow: "auto" }}>
                <Grid2 size={4}>
                  <Item>Item 1</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 2</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 3</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>Item 4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            Follow these guidelines to create effective and maintainable grid layouts:
          </p>
          <ul>
            <li>
              <strong>Use Semantic Structure:</strong> Organize grid items in a logical order
              that makes sense when viewed linearly on smaller screens.
            </li>
            <li>
              <strong>Avoid Deep Nesting:</strong> Keep grid structures as flat as possible
              for better performance and maintainability.
            </li>
            <li>
              <strong>Plan for Content Growth:</strong> Design layouts that can accommodate
              varying amounts of content without breaking.
            </li>
            <li>
              <strong>Test Across Breakpoints:</strong> Always test your layouts at different
              screen sizes to ensure they work as expected.
            </li>
            <li>
              <strong>Use Consistent Spacing:</strong> Maintain consistent spacing patterns
              throughout your application for visual harmony.
            </li>
            <li>
              <strong>Optimize for Performance:</strong> Be mindful of layout shifts and
              ensure good Core Web Vitals scores.
            </li>
          </ul>

        </div>
      </div>
    </SistentLayout>
  );
};

export default GridGuidance;