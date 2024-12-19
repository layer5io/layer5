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
  `<SistentThemeProvider>
    <ToggleButton value="toggle1" selected={true}>
      Toggle On
    </ToggleButton>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
    <ToggleButtonGroup
      value="option1"
      exclusive
      onChange={(event, value) => console.log(value)}
    >
      <ToggleButton value="option1">Option 1</ToggleButton>
      <ToggleButton value="option2">Option 2</ToggleButton>
    </ToggleButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
    <ToggleButtonGroup
      value={["option1", "option3"]}
      onChange={(event, value) => console.log(value)}
    >
      <ToggleButton value="option1">Option 1</ToggleButton>
      <ToggleButton value="option2">Option 2</ToggleButton>
      <ToggleButton value="option3">Option 3</ToggleButton>
    </ToggleButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
    <ToggleButtonGroup value="option1" exclusive size="small">
      <ToggleButton value="option1">Small</ToggleButton>
      <ToggleButton value="option2">Small</ToggleButton>
    </ToggleButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
    <ToggleButtonGroup value="option1" exclusive size="large">
      <ToggleButton value="option1">Large</ToggleButton>
      <ToggleButton value="option2">Large</ToggleButton>
    </ToggleButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider>
    <ToggleButtonGroup value="option1" exclusive color="primary">
      <ToggleButton value="option1">Primary</ToggleButton>
      <ToggleButton value="option2">Secondary</ToggleButton>
    </ToggleButtonGroup>
  </SistentThemeProvider>`,
];

const ToggleButtonCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [selected, setSelected] = useState("option1");
  const [multiSelected, setMultiSelected] = useState(["option1"]);

  const handleSingleToggle = (event, value) => {
    setSelected(value);
  };

  const handleMultiToggle = (event, value) => {
    setMultiSelected(value);
  };

  return (
    <SistentLayout title="ToggleButton">
      <div className="content">
        <a id="Identity">
          <h2>ToggleButton</h2>
        </a>
        <p>
          The `ToggleButton` component provides a way to toggle between states
          or select options within a group. Whether used individually or in
          conjunction with a `ToggleButtonGroup`, it offers a consistent and
          user-friendly way to control selections in a UI.
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
          <a id="Single ToggleButton">
            <h3>Single ToggleButton</h3>
          </a>
          <p>
            A single `ToggleButton` is used to toggle between two states. Here
            is an example:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButton value="toggle1" selected={true}>
                  Toggle On
                </ToggleButton>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="single-toggle" code={codes[0]} />
          </div>

          <a id="Grouped ToggleButtons (Single Selection)">
            <h3>Grouped ToggleButtons (Single Selection)</h3>
          </a>
          <p>
            Use a `ToggleButtonGroup` to group related buttons for single
            selection. The `exclusive` prop ensures that only one button can be
            selected at a time.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  value={selected}
                  exclusive
                  onChange={handleSingleToggle}
                >
                  <ToggleButton value="option1">Option 1</ToggleButton>
                  <ToggleButton value="option2">Option 2</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="grouped-single-selection" code={codes[1]} />
          </div>

          <a id="Grouped ToggleButtons (Multiple Selection)">
            <h3>Grouped ToggleButtons (Multiple Selection)</h3>
          </a>
          <p>
            Use `ToggleButtonGroup` without the `exclusive` prop to allow users
            to select multiple options within a group. This approach is useful
            when enabling combinations of settings.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup
                  value={multiSelected}
                  onChange={handleMultiToggle}
                >
                  <ToggleButton value="option1">Option 1</ToggleButton>
                  <ToggleButton value="option2">Option 2</ToggleButton>
                  <ToggleButton value="option3">Option 3</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="grouped-multiple-selection" code={codes[2]} />
          </div>

          <a id="ToggleButton Sizes">
            <h3>ToggleButton Sizes</h3>
          </a>
          <p>
            Adjust the size of the `ToggleButton` using the `size` prop. Supported values include
            `small`, `medium`, and `large`.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup value="option1" exclusive size="small">
                  <ToggleButton value="option1">Small</ToggleButton>
                  <ToggleButton value="option2">Small</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value="option1" exclusive size="large">
                  <ToggleButton value="option1">Large</ToggleButton>
                  <ToggleButton value="option2">Large</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="toggle-button-sizes" code={codes[3]} />
          </div>

          <a id="ToggleButton Colors">
            <h3>ToggleButton Colors</h3>
          </a>
          <p>
            Use the `color` prop to set the color scheme for the `ToggleButton`. Common values include
            `primary`, `secondary`, and `default`.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ToggleButtonGroup value="option1" exclusive color="primary">
                  <ToggleButton value="option1">Primary</ToggleButton>
                  <ToggleButton value="option2">Secondary</ToggleButton>
                </ToggleButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="toggle-button-colors" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToggleButtonCode;
