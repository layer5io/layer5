import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentRadioGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [selectedBasicOption, setSelectedBasicOption] = React.useState("option1");
  const [selectedDisabledOption, setSelectedDisabledOption] = React.useState("option1");
  const [selectedRowOption, setSelectedRowOption] = React.useState("option1");

  const handleBasicChange = (event) => setSelectedBasicOption(event.target.value);
  const handleDisabledChange = (event) => setSelectedDisabledOption(event.target.value);
  const handleRowChange = (event) => setSelectedRowOption(event.target.value);

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
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Disabled Options</h3>
          <p>One of the options is disabled and cannot be selected.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup value={selectedDisabledOption} onChange={handleDisabledChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2 (Disabled)" disabled />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
          <h3>Row Layout</h3>
          <p>Options are displayed in a horizontal row.</p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <RadioGroup row value={selectedRowOption} onChange={handleRowChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentRadioGroup;
