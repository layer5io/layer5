import React, { useState } from "react";
import { navigate } from "gatsby";
import {
  SistentThemeProvider,
  Checkbox
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { FormControlLabel, FormGroup } from "@mui/material";

const SistentCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [multiCheck, setMultiCheck] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleMultiChange = (event) => {
    setMultiCheck({ ...multiCheck, [event.target.name]: event.target.checked });
  };

  return (
    <SistentLayout title="Checkbox">
      <div className="content">
        <a id="Identity">
          <h2>Checkbox</h2>
        </a>
        <p>
          The Checkbox component allows users to select one or multiple options from a list. It's commonly used in forms and settings.
        </p>
        <div className="filterBtns">
          <TabButton onClick={() => navigate("/projects/sistent/components/checkbox")} title="Overview" />
          <TabButton onClick={() => navigate("/projects/sistent/components/checkbox/guidance")} title="Guidance" />
          <TabButton onClick={() => navigate("/projects/sistent/components/checkbox/code")} title="Code" />
        </div>
        <div className="main-content">
          <h3>Basic Usage</h3>
          <SistentThemeProvider>
            <FormControlLabel control={<Checkbox checked label="Option 1" />} label="Option 1" />
            <FormControlLabel control={<Checkbox label="Option 2" />} label="Option 2" />
            <FormControlLabel control={<Checkbox label="Option 3" />} label="Option 3" />
          </SistentThemeProvider>

          <h3>Controlled Checkbox</h3>
          <SistentThemeProvider>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
              label="Toggle me"
            />
          </SistentThemeProvider>

          <h3>Multi-selection Checkboxes</h3>
          <SistentThemeProvider>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={multiCheck.option1} onChange={handleMultiChange} name="option1" />}
                label="Option 1"
              />
              <FormControlLabel
                control={<Checkbox checked={multiCheck.option2} onChange={handleMultiChange} name="option2" />}
                label="Option 2"
              />
              <FormControlLabel
                control={<Checkbox checked={multiCheck.option3} onChange={handleMultiChange} name="option3" />}
                label="Option 3"
              />
            </FormGroup>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCheckbox;