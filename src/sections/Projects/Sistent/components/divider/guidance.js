import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Divider, Box, Stack } from "@sistent/sistent";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const DividerGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider">
      <div className="content">
        <a id="Identity">
          <h2>Divider</h2>
        </a>
        <p>
          The <code>Divider</code> component renders a thin line that separates content within lists, layouts, and sections, providing a subtle way to reinforce visual hierarchy and improve scannability.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/divider")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/divider/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/divider/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/divider/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Best-Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>When to Use</h3>
          <p>
            Dividers work best when separating distinct groups of content in lists, menus, or sections. They help users scan and understand the structure of complex interfaces.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Stack spacing={2} sx={{ width: "100%", maxWidth: 360 }}>
                <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 1</Box>
                <Divider />
                <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 2</Box>
                <Divider />
                <Box sx={{ p: 2, bgcolor: "background.paper" }}>Section 3</Box>
              </Stack>
            </SistentThemeProvider>
          </Row>

          <h3>Use Sparingly</h3>
          <p>
            Avoid overusing dividers. Too many lines can create visual clutter. Consider using whitespace, different background colors, or typography to create separation instead.
          </p>

          <h3>Vertical Dividers for Toolbars</h3>
          <p>
            Use vertical dividers to separate groups of actions in toolbars or icon groups. The <code>flexItem</code> prop ensures proper height alignment.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ p: 1 }}>Action A</Box>
                <Box sx={{ p: 1 }}>Action B</Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ p: 1 }}>Action C</Box>
                <Box sx={{ p: 1 }}>Action D</Box>
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            By default, Divider renders as an <code>&lt;hr&gt;</code> element with an implicit ARIA role of <code>separator</code>. Screen readers will announce it as "Horizontal Splitter" (or vertical when using <code>orientation="vertical"</code>).
          </p>

          <h3>Decorative Dividers</h3>
          <p>
            If the divider is purely decorative, add <code>aria-hidden="true"</code> to prevent screen readers from announcing it.
          </p>

          <h3>Dividers with Content</h3>
          <p>
            When wrapping content like text or chips, set <code>component="div"</code> and <code>role="presentation"</code> to maintain proper semantics.
          </p>

          <a id="Common-Patterns">
            <h2>Common Patterns</h2>
          </a>

          <h3>List Separators</h3>
          <p>
            When using dividers in lists, set <code>component="li"</code> to ensure valid HTML structure.
          </p>

          <h3>Section Headers</h3>
          <p>
            Use dividers with text to create subtle section headers:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Divider textAlign="left">Personal Information</Divider>
                <Box sx={{ p: 2 }}>Content here...</Box>
                <Divider textAlign="left">Contact Details</Divider>
                <Box sx={{ p: 2 }}>Content here...</Box>
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Responsive Behavior</h3>
          <p>
            Consider how dividers appear on different screen sizes. Vertical dividers in horizontal layouts may need to switch to horizontal dividers on smaller screens.
          </p>

          <a id="Dos-and-Donts">
            <h2>Do's and Don'ts</h2>
          </a>

          <h3>Do's</h3>
          <ul>
            <li>Use dividers to separate distinct groups of related content</li>
            <li>Combine with appropriate spacing for better visual rhythm</li>
            <li>Use <code>variant="middle"</code> or <code>variant="inset"</code> to reduce visual weight</li>
            <li>Set proper ARIA attributes for accessibility</li>
          </ul>

          <h3>Don'ts</h3>
          <ul>
            <li>Use dividers as the only method of creating separation</li>
            <li>Overuse dividers—they can create visual noise</li>
            <li>Rely on dividers to convey interactive functionality</li>
            <li>Use dividers for decorative purposes without hiding them from screen readers</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DividerGuidance;
