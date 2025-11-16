import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Stack, Box, Button } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
  <Stack spacing={2}>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Header
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Content
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Footer
    </Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack direction="row" spacing={2}>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Home
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      About
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Contact
    </Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={2}
    sx={{ width: "100%" }}
  >
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", flex: 1 }}>
      Card One
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", flex: 1 }}>
      Card Two
    </Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack
    spacing={2}
    divider={
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      />
    }
  >
    <Box sx={{ p: 1 }}>Profile</Box>
    <Box sx={{ p: 1 }}>Settings</Box>
    <Box sx={{ p: 1 }}>Logout</Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack spacing={4}>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Title
    </Box>
    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
      Description
    </Box>
  </Stack>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Stack direction="row" spacing={2}>
    <Button variant="contained">Save</Button>
    <Button variant="outlined">Cancel</Button>
    <Button variant="text">Reset</Button>
  </Stack>
</SistentThemeProvider>`,
];

const StackCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Stack">
      <div className="content">
        <a id="Identity">
          <h2>Stack</h2>
        </a>
        <p>
          The <code>Stack</code> component is a layout utility that manages
          one-dimensional layouts with flexible spacing and alignment. Built on
          Flexbox, it provides an efficient way to arrange elements vertically
          or horizontally with consistent spacing.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stack")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/stack/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/stack/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/stack/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The <code>Stack</code> component arranges children in one-dimensional flow, either vertically or
            horizontally, with consistent spacing and no manual margin adjustments.
          </p>
          <a id="Vertical Stack">
            <h2>Vertical Stack</h2>
          </a>
          <p>
            The default Stack orientation is vertical. Use the <code>spacing</code> prop to control the gap between children.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack spacing={2}>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Header
                  </Box>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Content
                  </Box>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Footer
                  </Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-vertical" code={codes[0]} />
          </div>
          <a id="Horizontal Stack">
            <h2>Horizontal Stack</h2>
          </a>
          <p>
            Set <code>direction="row"</code> to arrange children horizontally. Useful for button groups and navigation items.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Home
                  </Box>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    About
                  </Box>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Contact
                  </Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-horizontal" code={codes[1]} />
          </div>
          <a id="Responsive Stack">
            <h2>Responsive Stack</h2>
          </a>
          <p>
            Use responsive values for the <code>direction</code> prop to create adaptive layouts that stack vertically on mobile and horizontally on larger screens.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "primary.main",
                      color: "white",
                      flex: 1,
                    }}
                  >
                    Card One
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "primary.main",
                      color: "white",
                      flex: 1,
                    }}
                  >
                    Card Two
                  </Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-responsive" code={codes[2]} />
          </div>
          <a id="Divider">
            <h2>Divider</h2>
          </a>
          <p>
            Add visual separation between children using the <code>divider</code> prop.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack
                  spacing={2}
                  divider={
                    <Box
                      sx={{
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                  }
                >
                  <Box sx={{ p: 1 }}>Profile</Box>
                  <Box sx={{ p: 1 }}>Settings</Box>
                  <Box sx={{ p: 1 }}>Logout</Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-divider" code={codes[3]} />
          </div>
          <a id="Spacing">
            <h2>Spacing</h2>
          </a>
          <p>
            Use larger spacing values to create wider gaps. Common values range from 1 (8px) to 4 (32px).
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack spacing={4}>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Title
                  </Box>
                  <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                    Description
                  </Box>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-spacing" code={codes[4]} />
          </div>
          <a id="Button Group">
            <h2>Button Group</h2>
          </a>
          <p>
            Use <code>direction="row"</code> to stack horizontal button groups with consistent spacing.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Save</Button>
                  <Button variant="outlined">Cancel</Button>
                  <Button variant="text">Reset</Button>
                </Stack>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="stack-buttons" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StackCode;
