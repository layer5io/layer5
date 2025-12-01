import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Stack, Box } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentStack = () => {
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
            Stack simplifies one-dimensional layouts by automatically handling spacing and direction.
            It eliminates manual margin adjustments, making it ideal for form fields, button groups, and navigation items.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <h3>Vertical Stack</h3>
          <p>
            By default, Stack arranges children vertically. Use the <code>spacing</code> prop to control gaps between elements.
          </p>
          <Row $Hcenter className="image-container">
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
          </Row>

          <h3>Horizontal Stack</h3>
          <p>
            Set <code>direction="row"</code> to arrange children horizontally.
          </p>
          <Row $Hcenter className="image-container">
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
          </Row>

          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <p>
            Stack provides several props for customization, including spacing,
            direction, dividers, and responsive behavior. These options make it
            flexible for various layout requirements.
          </p>

          <h3>Responsive Direction</h3>
          <p>
            The <code>direction</code> prop accepts responsive values, allowing
            the stack to change direction based on screen size:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ width: "100%", maxWidth: 600 }}
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
          </Row>

          <h3>Dividers</h3>
          <p>
            Use the <code>divider</code> prop to add visual separation between elements.
          </p>
          <Row $Hcenter className="image-container">
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
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentStack;
