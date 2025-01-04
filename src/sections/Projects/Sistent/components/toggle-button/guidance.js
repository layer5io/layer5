import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
  ToggleButton,
  ToggleButtonGroup,
  SistentThemeProvider,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ToggleButtonGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="ToggleButton">
      <div className="content">
        <a id="Identity">
          <h2>ToggleButton</h2>
        </a>
        <p>
          The `ToggleButton` and `ToggleButtonGroup` are versatile components
          that can be used for a wide range of applications. Their intuitive
          design ensures users can make selections easily and confidently.
          Whether it's enabling a setting, selecting a mode, or choosing
          multiple options, these components are built to enhance user
          experience across different scenarios.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/toggle-button")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/toggle-button/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/toggle-button/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/toggle-button/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/toggle-button/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Functionality">
            <h2>Functionality</h2>
          </a>
          <p>
            The `ToggleButton` and `ToggleButtonGroup` components provide an
            efficient way to handle user interactions for toggling states or
            selecting one or multiple options. Below are some common use cases.
          </p>
          <h3>Exclusive Selection</h3>
          <p>
            Use an exclusive `ToggleButtonGroup` when only one selection is
            allowed at a time. This is useful for scenarios like aligning text
            to the left, center, or right.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup value="left" exclusive>
                <ToggleButton value="left">Left</ToggleButton>
                <ToggleButton value="center">Center</ToggleButton>
                <ToggleButton value="right">Right</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>

          <h3>Multiple Selection</h3>
          <p>
            Enable multiple selections within a `ToggleButtonGroup` for cases
            where users need to toggle multiple options, such as enabling bold,
            italic, and underline text styling simultaneously.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup value={["bold", "italic"]}>
                <ToggleButton value="bold">Toggle Button 1</ToggleButton>
                <ToggleButton value="italic">Toggle Button 2</ToggleButton>
                <ToggleButton value="underline">Toggle Button 3</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>

          <h3>Sizes</h3>
          <p>
            Adjust the size of the `ToggleButton` using the `size` prop. This
            property supports `small`, `medium`, and `large` values to suit
            various design requirements.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <ToggleButtonGroup
                    value="option1"
                    exclusive
                    size="small"
                    style={{ width: "70%" }}
                  >
                    <ToggleButton value="option1">Small</ToggleButton>
                    <ToggleButton value="option2">Small</ToggleButton>
                  </ToggleButtonGroup>

                  <ToggleButtonGroup
                    value="option1"
                    exclusive
                    size="medium"
                  >
                    <ToggleButton value="option1">Medium</ToggleButton>
                    <ToggleButton value="option2">Medium</ToggleButton>
                  </ToggleButtonGroup>

                  <ToggleButtonGroup
                    value="option1"
                    exclusive
                    size="large"
                    style={{ width: "120%" }}
                  >
                    <ToggleButton style={{ width: "50%" }} value="option1">
                      Large
                    </ToggleButton>
                    <ToggleButton style={{ width: "50%" }} value="option2">
                      Large
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </SistentThemeProvider>
            </div>
          </div>

          <h3>Colors</h3>
          <p>
            Use the `color` prop to style the `ToggleButtonGroup` with
            pre-defined theme colors, such as `primary` or `secondary`. This
            ensures consistency across the application.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup value="primary" exclusive color="primary">
                <ToggleButton value="primary">Primary</ToggleButton>
                <ToggleButton value="secondary">Secondary</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>

          <h3>Vertical Orientation</h3>
          <p>
            The `orientation` prop allows you to arrange toggle buttons
            vertically instead of horizontally. This is ideal for menus or
            options requiring more vertical space.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup
                orientation="vertical"
                value="option1"
                exclusive
              >
                <ToggleButton value="option1">Vertical 1</ToggleButton>
                <ToggleButton value="option2">Vertical 2</ToggleButton>
                <ToggleButton value="option3">Vertical 3</ToggleButton>
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToggleButtonGuidance;
