import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Grid2, Box } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
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

const SistentGrid = () => {
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
            The Grid component works well for layouts with a known number of columns.
            The columns can be configured with multiple breakpoints to specify the
            column span of each child. It uses CSS Flexbox rather than CSS Grid for
            high flexibility and is always a flex item.
          </p>

          <a id="Basic Grid">
            <h2>Basic Grid</h2>
          </a>
          <p>
            To create a grid layout, you need a container. Use the container prop to create
            a grid container that wraps the grid items. Column widths are integer values
            between 1 and 12.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={8}>
                  <Item>size=8</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>size=4</Item>
                </Grid2>
                <Grid2 size={4}>
                  <Item>size=4</Item>
                </Grid2>
                <Grid2 size={8}>
                  <Item>size=8</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Responsive Breakpoints">
            <h2>Responsive Breakpoints</h2>
          </a>
          <p>
            Items may have multiple widths defined, causing the layout to change at
            defined breakpoints. Width values apply to all wider breakpoints, and
            larger breakpoints override those given to smaller breakpoints.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Spacing">
            <h2>Spacing</h2>
          </a>
          <p>
            Use the spacing prop to control the space between children. The spacing
            value can be any positive number or string, converted using the theme
            spacing helper.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
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

          <a id="Auto Layout">
            <h2>Auto Layout</h2>
          </a>
          <p>
            The auto-layout feature gives equal space to all items. When you set the
            width of one item, others automatically resize. Use "grow" for flexible
            sizing and "auto" for content-based sizing.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size="grow">
                  <Item>size=grow</Item>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <Item>size=6</Item>
                </Grid2>
                <Grid2 size="auto">
                  <Item>size=auto</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>

          <a id="Offset">
            <h2>Offset</h2>
          </a>
          <p>
            The offset prop pushes an item to the right side of the grid. It accepts
            numbers for specific column offsets or "auto" to push items to the far right.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid2 container spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
                <Grid2 size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
                  <Item>1</Item>
                </Grid2>
                <Grid2 size={{ xs: 4, md: 2 }} offset={{ md: "auto" }}>
                  <Item>2</Item>
                </Grid2>
                <Grid2 size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
                  <Item>3</Item>
                </Grid2>
                <Grid2 size={{ xs: "grow", md: 6 }} offset={{ md: 2 }}>
                  <Item>4</Item>
                </Grid2>
              </Grid2>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentGrid;