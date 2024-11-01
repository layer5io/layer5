import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Container, Box, Divider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const DividerGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider Guidance">
      <div className="content">
        <a id="Identity">
          <h2>Divider Component</h2>
        </a>
        <p>
          The Divider component provides a visual separation between content
          areas, improving readability and structure in your layouts.
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
            onClick={() =>
              navigate("/projects/sistent/components/divider/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>The Divider component supports three variants:</p>
          <ul>
            <li>
              <strong>fullWidth:</strong> The default variant that spans the
              full width of its container.
            </li>
            <li>
              <strong>inset:</strong> This variant indents the divider to create
              visual hierarchy.
            </li>
            <li>
              <strong>middle:</strong> Centers the divider within its container,
              useful for segmenting content.
            </li>
          </ul>

          <a id="Orientation">
            <h2>Orientation</h2>
          </a>
          <p>The Divider can be oriented horizontally or vertically:</p>
          <ul>
            <li>
              <strong>Horizontal:</strong> Default orientation, ideal for
              separating content sections.
            </li>
            <li>
              <strong>Vertical:</strong> Use when you need to separate items in
              a flex layout or sidebar.
            </li>
          </ul>

          <a id="FlexItem">
            <h2>Using as a Flex Item</h2>
          </a>
          <p>
            When using the Divider in a flex container, set the{" "}
            <code>flexItem</code> prop. This ensures proper alignment and sizing
            relative to other flex items.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid white",
                    padding: "5px",
                  }}
                >
                  <div>Item 1</div>
                  <Divider orientation="vertical" flexItem />
                  <div>Item 2</div>
                </Box>
              </Container>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            The Divider is announced by screen readers, ensuring users with
            assistive technologies can navigate your layout effectively. If the
            Divider is purely decorative, consider using{" "}
            <code>aria-hidden="true"</code>.
          </p>

          <a id="UsageExamples">
            <h2>Usage Examples</h2>
          </a>
          <p>Here are a few scenarios where you might use the Divider:</p>
          <ul>
            <li>Separating sections in a card layout.</li>
            <li>Dividing items in a list.</li>
            <li>Creating visual breaks in a form.</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};
