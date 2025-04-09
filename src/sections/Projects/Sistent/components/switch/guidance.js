import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
  SistentThemeProvider,
  Switch,
  FormControlLabel,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { SistentLayout } from "../../sistent-layout";

const SwitchGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Switch">
      <div className="content">
        <a id="Identity">
          <h2>Switch</h2>
        </a>
        <p>
          The Switch is a toggle component used to instantly turn
          features on or off. Its binary nature makes it ideal for
          preferences and settings panels where real-time toggling is expected.
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

          <a id="Function">
            <h2>Function</h2>
          </a>

          <h3>State Representation</h3>
          <p>
            A Switch reflects its state visually, using a track and thumb
            indicator. When toggled, the thumb slides across the track to
            communicate the new value. This feedback is direct and immediate.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked />
            </SistentThemeProvider>
          </Row>

          <h3>State Variants</h3>
          <p>
            A Switch can be active, inactive, or disabled. Use the disabled
            state to communicate unavailable features or settings that require
            prerequisites.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch checked={false} disabled />
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            Every Switch should be paired with a visible label. Use <code>FormControlLabel</code> to
            visually bind labels to toggles for clarity and context.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={
                  <Switch
                    checked={true}
                    inputProps={{ 'aria-label': 'Enable dark mode' }}
                  />
                }
                label="Enable Dark Mode"
              />
            </SistentThemeProvider>
          </Row>

          <h3>Label Placement</h3>
          <p>
            Labels can be placed beside the Switch horizontally. For forms or
            settings pages, maintaining vertical spacing with consistent margins
            is recommended to improve readability and alignment.
          </p>

          <a id="Sizing">
            <h2>Sizing</h2>
          </a>
          <p>
            The default Switch size is medium, which fits most use cases. Use
            <code>size="small"</code> when space is constrained or when embedding
            toggles into compact elements such as tables, cards, or toolbars.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Switch size="small" checked={false} />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SwitchGuidance;
