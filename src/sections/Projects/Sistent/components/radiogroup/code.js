import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import React from "react";

import { Container, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import { RadioGroup, Radio, FormControlLabel } from "@layer5/sistent";

const codes = [
  `
  import { RadioGroup, Radio, FormControlLabel } from "@layer5/sistent";
  
  const [value, setValue] = React.useState("option1");
  const handleChange = (event) => setValue(event.target.value);

  <RadioGroup value={value} onChange={handleChange}>
    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
    <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
  </RadioGroup>`,
];

const SistentRadioGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [value, setValue] = React.useState("option1");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <SistentLayout title="RadioGroup">
      <div className="content">
        <a id="Identity">
          <h2>RadioGroup</h2>
        </a>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/radiogroup"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/radiogroup")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/radiogroup/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radiogroup/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/radiogroup/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/radiogroup/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The RadioGroup component lets users select one option from a set of
            choices. It ensures accessibility and ease of use.
          </p>
          <a id="RadioGroup">
            <h2>RadioGroup Example</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Option 1"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Option 2"
                    />
                    <FormControlLabel
                      value="option3"
                      control={<Radio />}
                      label="Option 3"
                    />
                  </RadioGroup>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="radiogroup-example" code={codes[0]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentRadioGroup;
