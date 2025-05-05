import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import React from "react";

import { Checkbox, Container, FormControlLabel, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `
  import { Container, FormControlLabel } from "@layer5/sistent";

  <div>
    <FormControlLabel
        control={
          <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled-checkbox" }}
          />
        }
        label="Accept Terms & Conditions"
      />
  </div>`,
];

const CheckboxCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <SistentLayout title="checkbox">
      <div className="content">
        <a id="Identity">
          <h2>checkbox</h2>
        </a>
        <p></p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/checkbox"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/checkbox")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/checkbox/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/checkbox/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/checkbox/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/checkbox/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Checkbox component allows users to select one or multiple options from a list.
            It's commonly used in forms and settings.
          </p>
          <a id="Checkbox">
            <h2>Checkbox Example</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled-checkbox" }}
                      />
                    }
                    label="Accept Terms & Conditions"
                  />
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="checkbox-example" code={codes[0]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};

export default CheckboxCode;