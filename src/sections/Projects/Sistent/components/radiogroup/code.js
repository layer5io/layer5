import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import React from "react";

import { Container, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

import { RadioGroup, Radio, FormControlLabel } from "@sistent/sistent";

const codes = [
  `<RadioGroup value={value} onChange={handleChange}>
    <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
    <FormControlLabel value="Meshery" control={<Radio />} label="Meshery" />
    <FormControlLabel value="Kanvas" control={<Radio />} label="Kanvas" />
  </RadioGroup>`,
  `<RadioGroup value={selectedDisabledOption} onChange={handleDisabledChange}>
  <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
  <FormControlLabel value="Meshery-Cloud (Private)" control={<Radio />} label="Meshery-Cloud (Private)" disabled />
  <FormControlLabel value="Sistent Design System" control={<Radio />} label="Sistent Design System" />
</RadioGroup>`,
  `<RadioGroup row value={selectedRowOption} onChange={handleRowChange}>
  <FormControlLabel value="Contributor" control={<Radio />} label="Contributor" />
  <FormControlLabel value="Community" control={<Radio />} label="Community Member" />
  <FormControlLabel value="Maintainer" control={<Radio />} label="Maintainer" />
</RadioGroup>`,
  `<RadioGroup row value={selectedLabelOption} onChange={handleLabelChange}>
  <FormControlLabel value="end" control={<Radio />} label="End (Default)" labelPlacement="end" />
  <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
  <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
  <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" /> 
</RadioGroup>`
];

const SistentRadioGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [value, setValue] = React.useState("Layer5");
  const handleChange = (event) => setValue(event.target.value);

  const [selectedDisabledOption, setSelectedDisabledOption] = React.useState("Layer5");
  const handleDisabledChange = (event) => setSelectedDisabledOption(event.target.value);

  const [selectedRowOption, setSelectedRowOption] = React.useState("Contributor");
  const handleRowChange = (event) => setSelectedRowOption(event.target.value);

  const [selectedLabelOption, setSelectedLabelOption] = React.useState("end");
  const handleLabelChange = (event) => setSelectedLabelOption(event.target.value);

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
          <a id="Basic RadioGroup">
            <h2>Basic RadioGroup</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel
                      value="Layer5"
                      control={<Radio />}
                      label="Layer5"
                    />
                    <FormControlLabel
                      value="Meshery"
                      control={<Radio />}
                      label="Meshery"
                    />
                    <FormControlLabel
                      value="Kanvas"
                      control={<Radio />}
                      label="Kanvas"
                    />
                  </RadioGroup>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="radiogroup-example" code={codes[0]} />
          </div>

          <a id="Disabled RadioGroup">
            <h2>Disabled Options</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <RadioGroup value={selectedDisabledOption} onChange={handleDisabledChange}>
                    <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
                    <FormControlLabel value="Meshery-Cloud (Private)" control={<Radio />} label="Meshery-Cloud (private)" disabled />
                    <FormControlLabel value="Sistent Design System" control={<Radio />} label="Sistent Design System" />
                  </RadioGroup>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="radiogroup-disabled" code={codes[1]} />
          </div>

          <a id="Row RadioGroup">
            <h2>Row Layout</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <RadioGroup row value={selectedRowOption} onChange={handleRowChange}>
                    <FormControlLabel value="Contributor" control={<Radio />} label="Contributor" />
                    <FormControlLabel value="Community" control={<Radio />} label="Community Member" />
                    <FormControlLabel value="Maintainer" control={<Radio />} label="Maintainer" />
                  </RadioGroup>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="radiogroup-row" code={codes[2]} />
          </div>

          <a id="LabelPlacement RadioGroup">
            <h2>Label Placement</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <RadioGroup row value={selectedLabelOption} onChange={handleLabelChange}>
                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="End (Default)"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="top"
                      control={<Radio />}
                      label="Top"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="bottom"
                      control={<Radio />}
                      label="Bottom"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Radio />}
                      label="Start"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="radiogroup-label-placement" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentRadioGroup;
