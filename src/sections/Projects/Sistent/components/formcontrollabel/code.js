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
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<FormControlLabel
  control={<Checkbox />}
  label="Accept Terms"
/>`,
  `<FormControlLabel
  control={<Radio />}
  label="Option A"
/>`,
  `<FormControlLabel
  control={<Switch />}
  label="Enable Notifications"
/>`,
  `<FormControlLabel
  control={<Checkbox disabled />}
  label="Disabled Option"
  disabled
/>`
];


const FormControlLabelCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [checked, setChecked] = useState(true);

  return (
    <SistentLayout title="FormControlLabel">
      <div className="content">
        <a id="Identity">
          <h2>FormControlLabel</h2>
        </a>
        <p>
          The <code>FormControlLabel</code> component wraps controls like checkboxes, radios, and switches,
          adding a label to the right side by default. It improves accessibility and user experience by combining form elements with clear labeling.
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
          <h3>With Checkbox</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Accept Terms"
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrollabel-checkbox" code={codes[0]} />
          </div>

          <h3>Disabled Example</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControlLabel
                  control={<Checkbox disabled />}
                  label="Disabled Option"
                  disabled
                />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrollabel-disabled" code={codes[3]} />
          </div>

          <h3>With Radio Button</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControlLabel control={<Radio />} label="Option A" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrollabel-radio" code={codes[1]} />
          </div>

          <h3>With Switch</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControlLabel control={<Switch />} label="Enable Notifications" />
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrollabel-switch" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default FormControlLabelCode;
