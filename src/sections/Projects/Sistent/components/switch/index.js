import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Switch,
  FormControlLabel,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentSwitch = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [isChecked, setIsChecked] = useState(true);
  const handleToggle = (e) => setIsChecked(e.target.checked);

  return (
    <SistentLayout title="Switch">
      <div className="content">
        <a id="Switch">
          <h2>Switch</h2>
        </a>
        <p>
          A switch is an toggle component which allows users to toggle a setting on or off and is typically used for
          system preferences or real-time configuration options.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/switch"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/switch")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/switch/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/switch/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/switch/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/switch/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            Switches are ideal when a setting is either enabled or disabled, and
            the user should be able to change it instantly without additional
            confirmation. They are used to toggle between two states.
          </p>

          <a id="States">
            <h2>States</h2>
          </a>
          <p>
            The Switch supports different states including <strong>active</strong>, <strong>inactive</strong>, and <strong>disabled</strong>. Visual feedback is immediate, allowing users to quickly understand the current status of a toggle.
          </p>

          <h3>Checked</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked />
            </SistentThemeProvider>
          </Row>

          <h3>Unchecked</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked={false} />
            </SistentThemeProvider>
          </Row>

          <h3>Disabled</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked={false} disabled />
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            Labels should be concise and descriptive to provide clarity about
            what each switch does.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isChecked}
                    onChange={handleToggle}
                    name="darkMode"
                  />
                }
                label="Dark Mode"
              />
            </SistentThemeProvider>
          </Row>

          <a id="Sizing">
            <h2>Sizing</h2>
          </a>
          <p>
            Switches come in two sizes: <strong>medium</strong> and{" "}
            <strong>small</strong>. The small size is particularly useful for
            dense layouts and compact UI patterns.
          </p>

          <h3>Medium (default)</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked />
            </SistentThemeProvider>
          </Row>

          <h3>Small</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch size="small" checked />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentSwitch;
