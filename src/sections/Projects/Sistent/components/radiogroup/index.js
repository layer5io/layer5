import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";


import {
  SistentThemeProvider,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";


const SistentRadioGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [selectedBasicOption, setSelectedBasicOption] = React.useState("Layer5");
  const [selectedDisabledOption, setSelectedDisabledOption] = React.useState("Layer5");
  const [selectedRowOption, setSelectedRowOption] = React.useState("Layer5");
  const [selectedLabelOption, setSelectedLabelOption] = React.useState("end");

  const handleBasicChange = (event) => setSelectedBasicOption(event.target.value);
  const handleDisabledChange = (event) => setSelectedDisabledOption(event.target.value);
  const handleRowChange = (event) => setSelectedRowOption(event.target.value);
  const handleLabelChange = (event) => setSelectedLabelOption(event.target.value);

  return (
    <SistentLayout title="RadioGroup">
      <div className="content">
        <a id="Identity">
          <h2>RadioGroup</h2>
        </a>
        <p>
                    The RadioGroup component allows users to select one option from a set
                    of mutually exclusive choices. It ensures accessibility and
                    consistency within the Sistent design system.
        </p>
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
                        The RadioGroup component in React is used to present a set of
                        mutually exclusive options, where only one option can be selected
                        at a time. It is commonly used in forms and settings.
          </p>
          <a id="Usage">
            <h2>How to use</h2>
          </a>
          <p>
                        The examples below demonstrate different ways to use the RadioGroup component.
          </p>
          <h3>Basic RadioGroup</h3>
          <p>Select one option from a simple vertical list.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup value={selectedBasicOption} onChange={handleBasicChange}>
                <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
                <FormControlLabel value="Meshery" control={<Radio />} label="Meshery" />
                <FormControlLabel value="Kanvas" control={<Radio />} label="Kanvas" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Disabled Options</h3>
          <p>One of the options is disabled and cannot be selected.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup value={selectedDisabledOption} onChange={handleDisabledChange}>
                <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
                <FormControlLabel value="Meshery-Cloud (Disabled)" control={<Radio />} label="Meshery-Cloud (Private)" disabled />
                <FormControlLabel value="Sistent Design System" control={<Radio/>} label="Sistent Design System" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Row Layout</h3>
          <p>Options are displayed in a horizontal row.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup row value={selectedRowOption} onChange={handleRowChange}>
                <FormControlLabel value="Contributor" control={<Radio />} label="Contributor" />
                <FormControlLabel value="Community" control={<Radio />} label="Community Member" />
                <FormControlLabel value="Maintainer" control={<Radio />} label="Maintainer" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>

          <h3>Label Placement</h3>
          <p>You can change the placement of the label with the <code>labelPlacement</code> prop.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};


export default SistentRadioGroup;