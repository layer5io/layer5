import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  FormControlLabel,
  Checkbox,
  Radio,
  Switch,
  SistentThemeProvider
} from "@sistent/sistent";

import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const FormControlLabelGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [checked, setChecked] = useState(true);

  return (
    <SistentLayout title="FormControlLabel">
      <div className="content">
        <a id="Identity">
          <h2>FormControlLabel</h2>
        </a>
        <p>
          The <code>FormControlLabel</code> component combines a form control (such as a checkbox,
          radio button, or switch) with a label. It improves accessibility and consistency by
          ensuring that the form control and its label are semantically and visually connected.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/formcontrollabel"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/formcontrollabel")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/formcontrollabel/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formcontrollabel/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/formcontrollabel/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formcontrollabel/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Use <code>FormControlLabel</code> when you need to pair a form control with a descriptive label. This improves usability and ensures better alignment and interaction.
          </p>

          <ul>
            <li>Supports <code>control</code> prop for checkboxes, radios, switches, etc.</li>
            <li>Automatically positions the label to the right of the control by default.</li>
            <li >Can be customized with positioning via <code>labelPlacement</code> prop.</li>
          </ul>

          <a id="Checkbox Usage">
            <h3>With Checkbox</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Accept Terms and Conditions"
              />
            </SistentThemeProvider>
          </Row>

          <a id="Disabled Checkbox">
            <h3>With Disabled Checkbox</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={<Checkbox disabled />}
                label="I agree to receive marketing emails"
                disabled
              />
            </SistentThemeProvider>
          </Row>

          <a id="Disabled Checkbox">
            <h3>With Disabled Checkbox</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={<Checkbox disabled />}
                label="I agree to receive marketing emails"
                disabled
              />
            </SistentThemeProvider>
          </Row>

          <a id="Radio Usage">
            <h3>With Radio Button</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel control={<Radio />} label="Option A" />
            </SistentThemeProvider>
          </Row>
          <a id="Radio Label Start">
            <h3>With Radio Button (Label on Left)</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={<Radio />}
                label="Choose Plan"
                labelPlacement="start"
              />
            </SistentThemeProvider>
          </Row>

          <a id="Switch Usage">
            <h3>With Switch</h3>
          </a>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel control={<Switch />} label="Enable Notifications" />
            </SistentThemeProvider>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>Accessibility</h3>
          <p>
            Always use a visible and meaningful label. This ensures assistive technologies can
            identify the purpose of the control.
          </p>

          <h3>Label Positioning</h3>
          <p>
            Use the <code>labelPlacement</code> prop to customize where the label appears
            (top, bottom, start, end). Default is <code>end</code>.
          </p>

          <h3>Consistency</h3>
          <p>
            Use consistent label styles across forms to build visual trust and maintain
            usability. Do not use different positions for labels unless absolutely necessary.
          </p>

          <h3>Clear Language</h3>
          <p>
            Keep labels short, clear, and actionable. They should describe exactly what the
            control does.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default FormControlLabelGuidance;
