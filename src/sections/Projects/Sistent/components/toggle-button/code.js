import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  // For exclusive selection
  `
    <ToggleButtonGroup
      value="left"
      exclusive
    >
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  `,
  // For multiple selection
  `
    <ToggleButtonGroup
      value={["bold", "italic"]}
    >
      <ToggleButton value="bold">Toggle Button 1</ToggleButton>
      <ToggleButton value="italic">Toggle Button 1</ToggleButton>
      <ToggleButton value="underline">Toggle Button 1</ToggleButton>
    </ToggleButtonGroup>
  `,
  // For size
  `
    <ToggleButtonGroup value="option1" exclusive size="small">
      <ToggleButton value="option1">Small</ToggleButton>
      <ToggleButton value="option2">Small</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup value="option1" exclusive size="medium">
      <ToggleButton value="option1">Medium</ToggleButton>
      <ToggleButton value="option2">Medium</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup value="option1" exclusive size="large">
      <ToggleButton value="option1">Large</ToggleButton>
      <ToggleButton value="option2">Large</ToggleButton>
    </ToggleButtonGroup>
  `,
  // For color
  `
    <ToggleButtonGroup value="primary" exclusive color="primary">
      <ToggleButton value="primary">Primary</ToggleButton>
      <ToggleButton value="secondary">Secondary</ToggleButton>
    </ToggleButtonGroup>
  `,
  // For vertical
  `
    <ToggleButtonGroup
      orientation="vertical"
      value="option1"
      exclusive
    >
      <ToggleButton value="option1">Vertical 1</ToggleButton>
      <ToggleButton value="option2">Vertical 2</ToggleButton>
      <ToggleButton value="option3">Vertical 3</ToggleButton>
    </ToggleButtonGroup>
  `,
];

const ToggleButtonCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [exclusiveSelected, setExclusiveSelected] = useState("left");
  const [multiSelected, setMultiSelected] = useState(["bold"]);
  const [sizeSelected, setSizeSelected] = useState("small");
  const [colorSelected, setColorSelected] = useState("primary");
  const [verticalSelected, setVerticalSelected] = useState("left");
  const handleExclusiveToggle = (event, value) => {
    setExclusiveSelected(value);
  };

  const handleMultiToggle = (event, value) => {
    setMultiSelected(value);
  };
  const handleSizeToggle = (event, value) => {
    setSizeSelected(value);
  };
  const handleColorToggle = (event, value) => {
    setColorSelected(value);
  };
  const handleVerticalToggle = (event, value) => {
    setVerticalSelected(value);
  };

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
          <a id="Exclusive Selection">
            <h3>Exclusive Selection</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  value={exclusiveSelected}
                  exclusive
                  onChange={handleExclusiveToggle}
                >
                  <ToggleButton value="left">Left</ToggleButton>
                  <ToggleButton value="center">Center</ToggleButton>
                  <ToggleButton value="right">Right</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="exclusive-selection" code={codes[0]} />
          </div>

          <a id="Multiple Selection">
            <h3>Multiple Selection</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  value={multiSelected}
                  onChange={handleMultiToggle}
                >
                  <ToggleButton value="bold">Toggle Button 1</ToggleButton>
                  <ToggleButton value="italic">Toggle Button 2</ToggleButton>
                  <ToggleButton value="underline">Toggle Button 3</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="multiple-selection" code={codes[1]} />
          </div>

          <a id="Sizes">
            <h3>ToggleButton Sizes</h3>
          </a>
          <p>
            Adjust the size of the `ToggleButton` using the `size` prop.
            Supported values include `small`, `medium`, and `large`.
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
                    value={sizeSelected}
                    onChange={handleSizeToggle}
                    exclusive
                    size="small"
                    style={{ width: "70%" }}
                  >
                    <ToggleButton value="option1">Small</ToggleButton>
                    <ToggleButton value="option2">Small</ToggleButton>
                  </ToggleButtonGroup>

                  <ToggleButtonGroup
                    value={sizeSelected}
                    onChange={handleSizeToggle}
                    exclusive
                    size="medium"
                  >
                    <ToggleButton value="option1">Medium</ToggleButton>
                    <ToggleButton value="option2">Medium</ToggleButton>
                  </ToggleButtonGroup>

                  <ToggleButtonGroup
                    value={sizeSelected}
                    onChange={handleSizeToggle}
                    exclusive
                    size="large"
                    style={{ width: "120%" }}
                  >
                    <ToggleButton style={ { width: "50%" }} value="option1">Large</ToggleButton>
                    <ToggleButton style={ { width: "50%" }} value="option2">Large</ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="toggle-button-sizes" code={codes[2]} />
          </div>

          <a id="Colors">
            <h3>ToggleButton Colors</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  value={colorSelected}
                  onChange={handleColorToggle}
                  exclusive
                  color="primary"
                >
                  <ToggleButton value="primary">Primary</ToggleButton>
                  <ToggleButton value="secondary">Secondary</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="toggle-button-colors" code={codes[3]} />
          </div>

          <a id="Vertical Buttons">
            <h3>Vertical Buttons</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={verticalSelected}
                  onChange={handleVerticalToggle}
                  exclusive
                >
                  <ToggleButton value="option1">Vertical 1</ToggleButton>
                  <ToggleButton value="option2">Vertical 2</ToggleButton>
                  <ToggleButton value="option3">Vertical 3</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="vertical-toggle-buttons" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToggleButtonCode;
