import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Box } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentBox = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Box">
      <div className="content">
        <a id="Identity">
          <h2>Box</h2>
        </a>
        <p>
          The <code>Box</code> component is a versatile, theme-aware container
          in Sistent, ideal for styling and layout customization. It supports
          the sx prop for easy, responsive styling and can render as any HTML
          element.
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
            The <code>Box</code> component is a flexible and foundational
            container in Sistent, designed to structure and style content. It
            provides quick access to the theme and CSS utilities, allowing for
            easy customization and responsive design. Using the sx prop,
            developers can apply CSS styles directly with theme-aware
            properties, making Box ideal for layouts, spacing, and other UI
            adjustments. It can render as any HTML element using the component
            prop, offering high versatility in both structure and styling.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The Box component differs from other containers available in Sistent
            in that its usage is intended to be multipurpose and open-ended,
            just like a <code>`div`</code>. Components like Container, Stack and
            Paper, by contrast, feature usage-specific props that make them
            ideal for certain use cases: Container for main layout orientation,
            Stack for one-dimensional layouts, and Paper for elevated surfaces.
          </p>
          <h3>Box component</h3>
          <p>
            The Box component renders as a <code>`div`</code> by default, but
            you can swap in any other valid HTML tag or React component using
            the component prop. The demo below replaces the <code>`div`</code>
            with a <code>`section`</code> element:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
                This Box renders as an HTML section element.
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <p>
            The Box component can be styled flexibly with Sistent
            <code>sx</code>prop and custom themes. The sx prop allows quick
            application of CSS styles that are theme-aware, enabling responsive
            and consistent design.
          </p>

          <h3>Using the sx Prop</h3>
          <p>
            The sx prop supports a wide range of style properties, including
            colors, spacing, and responsive adjustments. It directly accesses
            theme values, allowing you to apply theme-based styles to a Box with
            minimal code.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentBox;
