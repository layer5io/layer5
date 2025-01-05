import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Box } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const BoxGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Box">
      <div className="content">
        <a id="Identity">
          <h2>Box</h2>
        </a>
        <p>
          The Box component is a flexible, theme-aware container that adapts
          seamlessly across various layouts. It provides a convenient way to
          apply styles, positioning, and responsive adjustments to content,
          making it ideal for any layout needs.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/box")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/box/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/box/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/box/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            The Box component is a highly versatile tool that can be used for
            layout management, spacing, styling, and more. With full support for
            responsive design, Box is an essential part of any well-structured
            application, allowing developers to customize and style elements
            while keeping the theme consistent.
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>

          <p>The Box component serves several functions:</p>

          <h3>Responsive Styling</h3>
          <p>
            The <code>sx</code> prop makes it easy to apply responsive styles
            directly within the component, allowing for adaptive design that
            looks great across all screen sizes.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  padding: 3,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "primary.light" },
                }}
              >
                <p style={{ color: "black" }}>
                  This is a responsive Box component.
                </p>
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Flexible Layout Control</h3>
          <p>
            Box can serve as a container for organizing other elements, whether
            it's aligning text, images, or interactive components. The
            flexibility of the Box component allows it to adapt to a wide range
            of layout needs, from card-style containers to more complex nested
            structures.
          </p>

          <h3>Customizable Appearance</h3>
          <p>
            The Box component’s customization options allow you to adjust
            colors, borders, shadows, and more through the <code>sx</code> prop,
            ensuring that components blend well with your app's overall theme.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  bgcolor: "secondary.main",
                  padding: 2,
                  boxShadow: 3,
                  borderRadius: 4,
                }}
              >
                <p style={{ color: "black" }}>
                  Customized Box with shadow and color.
                </p>
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="UseCases">
            <h2>Use Cases</h2>
          </a>

          <h3>Nested Layouts</h3>
          <p>
            Use Box to create nested layouts by embedding one Box within
            another, each with distinct styling. This setup enables the creation
            of structured and multi-layered designs.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  padding: 3,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ bgcolor: "info.main", padding: 2 }}>
                  <p style={{ color: "black" }}>Nested Box layout example.</p>
                </Box>
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Utility for Spacing and Margin</h3>
          <p>
            Leveraging Box for margin and padding adjustments offers
            fine-grained control over spacing between components, making it
            useful in complex layouts where alignment and spacing are crucial.
          </p>

          <h3>Event Handling and State Management</h3>
          <p>
            Box can also be used as an interactive element, handling events and
            managing state. This makes it ideal for use cases that require
            dynamic behavior or user interaction.
          </p>

          <h3>Responsive Design</h3>
          <p>
            The Box component seamlessly integrates with Sistent’s responsive
            design principles, providing a cohesive experience across various
            screen sizes by leveraging breakpoints in the <code>sx</code> prop.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default BoxGuidance;
