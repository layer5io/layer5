import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Stack, Box, SistentThemeProvider } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
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
          The Stack component provides a simple way to arrange elements in a{" "}
          <strong>row</strong> or <strong>column</strong> with consistent
          spacing and flexible alignment. It’s ideal for creating repeatable
          layouts such as toolbars, card groups, and vertical form stacks.
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
              location.pathname ===
              "/projects/sistent/components/stack/guidance"
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
          <h3>Basic Usage</h3>
          <p>
            Wrap child elements in Stack to layout horizontally or vertically:
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                border: "1px solid var(--border)",
                padding: "1rem",
                borderRadius: 4,
              }}
            >
              {["Item 1", "Item 2", "Item 3"].map((item) => (
                <Box
                  key={item}
                  sx={{
                    backgroundColor: "var(--background-secondary)",
                    padding: "0.75rem 1rem",
                    borderRadius: 2,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </SistentThemeProvider>

          <h3>Orientation</h3>
          <p>
            Change <code>direction</code> prop to "column" for vertical layouts:
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Stack
              direction="column"
              spacing={3}
              sx={{
                border: "1px dashed var(--border)",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "var(--background-secondary)",
                  borderRadius: 2,
                }}
              >
                Vertical A
              </Box>
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "var(--background-secondary)",
                  borderRadius: 2,
                }}
              >
                Vertical B
              </Box>
            </Stack>
          </SistentThemeProvider>

          <h3>Alignment & Spacing</h3>
          <p>
            Use <code>alignItems</code> and <code>justifyContent</code> to
            control item positioning:
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
              sx={{
                border: "1px solid var(--border)",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "var(--background-secondary)",
                  borderRadius: 2,
                }}
              >
                Left
              </Box>
              <Box
                sx={{
                  padding: "1rem",
                  backgroundColor: "var(--background-secondary)",
                  borderRadius: 2,
                }}
              >
                Right
              </Box>
            </Stack>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentStack;
