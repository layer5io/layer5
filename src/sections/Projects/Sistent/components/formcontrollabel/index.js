import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Checkbox, FormControlLabel } from "@sistent/sistent";
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
            This component is typically used in forms or settings panels, where the label
            text describes the meaning of the control.
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControlLabel
                control={<Checkbox />}
                label="Enable notifications"
              />
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            Clicking on the label will toggle the state of the control automatically.
            This makes it easier for users, especially those using assistive technologies, to interact with the form.
          </p>

          <a id="Code">
            <h2>Code</h2>
          </a>
          <pre>
            <code>{`
import { FormControlLabel, Checkbox } from "@sistent/sistent";

<FormControlLabel
  control={<Checkbox />}
  label="Enable notifications"
/>
            `}</code>
          </pre>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentFormControlLabel;
