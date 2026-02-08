import React, { useState } from "react";
import { Switch, FormControlLabel, Box } from "@sistent/sistent";

const SwitchDemo = ({ type }) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if (type === "basic") {
    return <Switch checked={checked} onChange={handleChange} />;
  }

  if (type === "disabled") {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Switch checked={false} disabled />
            <Switch checked={true} disabled />
        </Box>
    );
  }

  if (type === "labeled") {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="demoSwitch"
          />
        }
        label="Enable Notifications"
      />
    );
  }

  if (type === "small") {
    return (
      <Switch
        size="small"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "small switch" }}
      />
    );
  }

  return null;
};

export default SwitchDemo;
