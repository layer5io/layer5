import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Checkbox,
  Radio,
  Switch,
  FormControlLabel
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentFormControlLabel = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="FormControlLabel">
      <div className="content">
        <a id="Identity">
          <h2>FormControlLabel</h2>
        </a>
        <p>
          <code>FormControlLabel</code> is a wrapper component that pairs a label with a control such as a checkbox or a radio button.
          It enhances accessibility by allowing users to click the label to toggle the control.
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
              location.pathname === "/projects/sistent/components/formcontrollabel/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/formcontrollabel/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/formcontrollabel/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/formcontrollabel/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
  <a id="Usage">
    <h2>Usage</h2>
  </a>
  <p>
    The <code>FormControlLabel</code> component is commonly used to attach readable text labels to controls like checkboxes, radio buttons, or switches. 
    It helps ensure the control is understandable, accessible, and easy to interact with.
  </p>

  <a id="Examples">
    <h2>Examples</h2>
  </a>
  <Row $Hcenter className="image-container">
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
        <FormControlLabel control={<Radio />} label="Option A" />
        <FormControlLabel control={<Switch />} label="Enable Dark Mode" />
      </div>
    </SistentThemeProvider>
  </Row>

  <a id="Accessibility">
    <h2>Accessibility</h2>
  </a>
  <p>
    Labels are automatically associated with their controls, making it easier for assistive technologies to provide context. 
    Clicking on the label will also toggle the control.
  </p>

  <a id="Further">
    <h2>Learn More</h2>
  </a>
  <p>
    Visit the <strong>Guidance</strong> tab for best practices and the <strong>Code</strong> tab for implementation details.
  </p>
</div>
      </div>
    </SistentLayout>
  );
};

export default SistentFormControlLabel;
