import React, { useState } from "react";
import { FormControlLabel, Checkbox, Radio, Switch } from "@sistent/sistent";

const FormControlLabelDemo = ({ type }) => {
  const [checked, setChecked] = useState(true);

  if (type === "checkbox") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <FormControlLabel
            control={
            <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            }
            label="Accept Terms and Conditions"
        />
      </div>
    );
  }

  if (type === "radio") {
    return (
      <FormControlLabel control={<Radio />} label="Option A" />
    );
  }

  if (type === "switch") {
    return (
      <FormControlLabel control={<Switch />} label="Enable Notifications" />
    );
  }

  if (type === "disabled") {
    return (
      <FormControlLabel
        control={<Checkbox disabled />}
        label="Disabled Option"
        disabled
      />
    );
  }

  if (type === "placement-start") {
    return (
      <FormControlLabel
        control={<Radio />}
        label="Choose Plan"
        labelPlacement="start"
      />
    );
  }

  if (type === "mixed") {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
            <FormControlLabel control={<Radio />} label="Option A" />
            <FormControlLabel control={<Switch />} label="Enable Dark Mode" />
        </div>
    );
  }

  return null;
};

export default FormControlLabelDemo;
