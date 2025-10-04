import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Grid2, Box, Avatar } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
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

const codes = [
  `  <SistentThemeProvider>
    <Grid2 container spacing={2}>
       <Grid2 size={5}>
        <Item>size=5</Item>
       </Grid2>
       <Grid2 size={5}>
         <Item>size=5</Item>
       </Grid2>
       <Grid2 size={6}>
         <Item>size=6</Item>
        </Grid2>
        <Grid2 size={6}>
          <Item>size=6</Item>
        </Grid2>        
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={2}>
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
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={3}>
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
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid2 size={6}>
        <Item>1</Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>2</Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>3</Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>4</Item>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={3}>
      <Grid2 size="grow">
        <Item>size=grow</Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>size=6</Item>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={3}>
      <Grid2 size="auto">
        <Item>size=auto</Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>size=6</Item>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
        <Item>1</Item>
      </Grid2>
      <Grid2 size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
        <Item>2</Item>
      </Grid2>
      <Grid2 size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
        <Item>3</Item>
      </Grid2>
      <Grid2 size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>
        <Item>4</Item>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={2} minHeight={160}>
      <Grid2 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        size="grow"
      >
        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
      </Grid2>
      <Grid2 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
      >
        <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
      </Grid2>
      <Grid2 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        size="grow"
      >
        <Avatar sx={{ bgcolor: 'error.main' }}>C</Avatar>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

  `  <SistentThemeProvider>
    <Grid2 container spacing={2} direction="column" sx={{ height: 300 }}>
      <Grid2>
        <Item>Item 1</Item>
      </Grid2>
      <Grid2>
        <Item>Item 2</Item>
      </Grid2>
      <Grid2>
        <Item>Item 3</Item>
      </Grid2>
      <Grid2>
        <Item>Item 4</Item>
      </Grid2>
    </Grid2>
  </SistentThemeProvider>`,

];

const GridCode = () => {
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
            The Grid component provides a flexible foundation for creating
            responsive layouts. Here are practical code examples showing
            different usage patterns.
          </p>

          <a id="Basic Grid">
            <h2>Basic Grid</h2>
          </a>
          <p>
            Create a basic grid layout with container and size props. The size
            prop accepts values from 1-12 representing column spans.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
                  <Grid2 size={5.5}>
                    <Item>size=5</Item>
                  </Grid2>
                  <Grid2 size={5.5}>
                    <Item>size=5</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>size=6</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>size=6</Item>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-grid" code={codes[0]} />
          </div>

          <a id="Responsive Grid">
            <h2>Responsive Grid</h2>
          </a>
          <p>
            Use breakpoint objects to define different layouts for different screen sizes.
            Each breakpoint applies to that size and larger unless overridden.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="responsive-grid" code={codes[1]} />
          </div>

          <a id="Grid Spacing">
            <h2>Grid Spacing</h2>
          </a>
          <p>
            Control the space between grid items using the spacing prop.
            The value corresponds to theme spacing units.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="grid-spacing" code={codes[2]} />
          </div>

          <h3>Row and Column Spacing</h3>
          <p>
            Use rowSpacing and columnSpacing for independent control over
            row and column gaps.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: "100%", maxWidth: 600 }}>
                  <Grid2 size={6}>
                    <Item>1</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>2</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>3</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>4</Item>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="row-column-spacing" code={codes[3]} />
          </div>

          <a id="Auto Layout">
            <h2>Auto Layout</h2>
          </a>
          <p>
            Use flexible sizing options for dynamic layouts that adapt to content.
          </p>

          <h3>Growing Columns</h3>
          <p>
            Use size="grow" to make columns take up available space equally.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
                  <Grid2 size="grow">
                    <Item sx={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>size=grow</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>size=6</Item>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="growing-columns" code={codes[4]} />
          </div>

          <h3>Variable Width Content</h3>
          <p>
            Use size="auto" to size columns based on their content width.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
                  <Grid2 size="auto">
                    <Item>size=auto</Item>
                  </Grid2>
                  <Grid2 size={6}>
                    <Item>size=6</Item>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="variable-width" code={codes[5]} />
          </div>

          <a id="Grid Offset">
            <h2>Grid Offset</h2>
          </a>
          <p>
            Use the offset prop to push grid items to the right, creating gaps
            or asymmetrical layouts.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="grid-offset" code={codes[6]} />
          </div>


          <a id="Centered Content">
            <h2>Centered Content</h2>
          </a>
          <p>
            Center content within grid items using flexbox properties directly
            on the Grid component.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container spacing={2} sx={{ width: "100%", maxWidth: 600 }} minHeight={160}>
                  <Grid2
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    size="grow"
                  >
                    <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
                  </Grid2>
                  <Grid2
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
                  </Grid2>
                  <Grid2
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    size="grow"
                  >
                    <Avatar sx={{ bgcolor: "error.main" }}>C</Avatar>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="centered-content" code={codes[7]} />
          </div>

          <a id="Column Direction">
            <h2>Column Direction</h2>
          </a>
          <p>
            Use the direction="column" prop to stack grid items vertically
            instead of horizontally.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Grid2 container spacing={2} direction="column" sx={{ height: 300, width: "100%", maxWidth: 200 }}>
                  <Grid2>
                    <Item>Item 1</Item>
                  </Grid2>
                  <Grid2>
                    <Item>Item 2</Item>
                  </Grid2>
                  <Grid2>
                    <Item>Item 3</Item>
                  </Grid2>
                  <Grid2>
                    <Item>Item 4</Item>
                  </Grid2>
                </Grid2>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="column-direction" code={codes[8]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};

export default GridCode;