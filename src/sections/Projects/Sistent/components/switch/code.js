import React, { useState } from "react";
import { CodeBlock } from "../button/code-block";
import { Switch, FormControlLabel, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { useLocation } from "@reach/router";

const codes = [
  `  <SistentThemeProvider>
      <Switch/>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <Switch checked={false} disabled />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="demoSwitch"
            color="primary"
          />
        }
        label="Enable Notifications"
      />
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <Switch
        size="small"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'toggle something' }}
      />
  </SistentThemeProvider>`,
];

const SwitchCode = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => setChecked(event.target.checked);
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  return (
    <SistentLayout title="Switch">
      <div className="content">
        <a id="Switch">
          <h2>Switch</h2>
        </a>
        <p>
          The Switch component allows users to toggle a setting between two states—on or off.
        </p>
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/switch" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/switch")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/switch/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/switch/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/switch/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/switch/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Basic Switch">
            <h2>Basic Switch</h2>
          </a>
          <p>
            This is the default switch style used to represent changes between two states.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Switch checked={checked} />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-switch" code={codes[0]} />
          </div>

          <a id="Disabled Switch">
            <h2>Disabled Switch</h2>
          </a>
          <p>
            Disabled switches show the state but are not interactive.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Switch checked={false} disabled />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="disabled-switch" code={codes[1]} />
          </div>

          <a id="Labeled Switch">
            <h2>Labeled Switch</h2>
          </a>
          <p>
            Labels describe the action being toggled and improve accessibility.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      name="demoSwitch"
                      color="primary"
                    />
                  }
                  label="Enable Notifications"
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="labeled-switch" code={codes[2]} />
          </div>

          <a id="Small Switch">
            <h2>Small Switch</h2>
          </a>
          <p>
            Use the <code>size="small"</code> prop for a more compact version.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Switch
                  size="small"
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "toggle something" }}
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="small-switch" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SwitchCode;
