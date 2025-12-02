import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Stack, Box, Button } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const StackGuidance = () => {
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
            Stack is built on Flexbox and optimized for one-dimensional layouts. It excels at organizing elements in a single direction while maintaining consistent spacing.
          </p>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>Use Cases</h3>
          <p>
            Stack is ideal for:
          </p>
          <ul>
            <li>Form layouts with consistent vertical spacing</li>
            <li>Button groups arranged horizontally or vertically</li>
            <li>Navigation menus with proper spacing</li>
            <li>Card content stacking</li>
            <li>Lists with dividers</li>
          </ul>

          <h3>Stack vs Grid</h3>
          <p>
            Choose the right component:
          </p>
          <ul>
            <li><strong>Stack:</strong> One-dimensional layout (single direction)</li>
            <li><strong>Grid:</strong> Two-dimensional layout (rows and columns)</li>
          </ul>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Box sx={{ mb: 3 }}>
                  <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Stack Example (One Direction):
                  </p>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", flex: 1 }}>
                      1
                    </Box>
                    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", flex: 1 }}>
                      2
                    </Box>
                    <Box sx={{ p: 2, bgcolor: "primary.main", color: "white", flex: 1 }}>
                      3
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="Spacing">
            <h2>Spacing</h2>
          </a>

          <h3>Best Practices</h3>
          <p>
            Use consistent spacing values throughout your application:
          </p>
          <ul>
            <li><code>spacing=1</code> (8px) for closely related elements</li>
            <li><code>spacing=2</code> (16px) for standard spacing</li>
            <li><code>spacing=3</code> (24px) for distinct sections</li>
            <li><code>spacing=4</code> (32px) for major separations</li>
          </ul>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack spacing={2}>
                <Box>
                  <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Spacing = 1
                  </p>
                  <Stack spacing={1}>
                    <Box sx={{ p: 1, bgcolor: "primary.main", color: "white" }}>Label</Box>
                    <Box sx={{ p: 1, bgcolor: "primary.main", color: "white" }}>Input</Box>
                  </Stack>
                </Box>
                <Box>
                  <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Spacing = 3
                  </p>
                  <Stack spacing={3}>
                    <Box sx={{ p: 1, bgcolor: "primary.main", color: "white" }}>Title</Box>
                    <Box sx={{ p: 1, bgcolor: "primary.main", color: "white" }}>Body</Box>
                  </Stack>
                </Box>
              </Stack>
            </SistentThemeProvider>
          </Row>

          <h3>Direction</h3>
          <ul>
            <li><code>direction="column"</code> (default) for vertical stacking</li>
            <li><code>direction="row"</code> for horizontal arrangements</li>
            <li>Use responsive values: <code>direction=&#123;&#123; xs: &quot;column&quot;, md: &quot;row&quot; &#125;&#125;</code></li>
          </ul>

          <h3>Dividers</h3>
          <ul>
            <li>Use to separate distinct sections</li>
            <li>Use sparingly for best effect</li>
            <li>Match divider style with your design system</li>
          </ul>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack
                spacing={2}
                sx={{ width: "100%", maxWidth: 400 }}
                divider={
                  <Box sx={{ borderBottom: "1px solid", borderColor: "divider" }} />
                }
              >
                <Box sx={{ p: 2 }}>Profile Settings</Box>
                <Box sx={{ p: 2 }}>Notification Preferences</Box>
                <Box sx={{ p: 2 }}>Privacy Controls</Box>
              </Stack>
            </SistentThemeProvider>
          </Row>

          <a id="Examples">
            <h2>Examples</h2>
          </a>

          <h3>Form Layout</h3>
          <p>
            Organize form fields vertically with consistent spacing:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack spacing={3} sx={{ width: "100%", maxWidth: 400 }}>
                <Box>
                  <Box component="label" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
                    Name
                  </Box>
                  <Box
                    sx={{
                      p: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                    }}
                  >
                    Input field
                  </Box>
                </Box>
                <Box>
                  <Box component="label" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
                    Email
                  </Box>
                  <Box
                    sx={{
                      p: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                    }}
                  >
                    Input field
                  </Box>
                </Box>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button variant="outlined">Cancel</Button>
                  <Button variant="contained">Submit</Button>
                </Stack>
              </Stack>
            </SistentThemeProvider>
          </Row>

          <h3>Button Groups</h3>
          <p>
            Use horizontal Stack for grouping related action buttons:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Save</Button>
                <Button variant="outlined">Cancel</Button>
                <Button variant="text">Reset</Button>
              </Stack>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default StackGuidance;
