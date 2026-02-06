import React, { useState } from "react";
import { RadioGroup, Radio, FormControlLabel, Box } from "@sistent/sistent";

const RadioGroupDemo = ({ type }) => {
  const [value, setValue] = useState("Layer5");
  const handleChange = (event) => setValue(event.target.value);

  const [disabledValue, setDisabledValue] = useState("Layer5");
  const handleDisabledChange = (event) => setDisabledValue(event.target.value);

  const [rowValue, setRowValue] = useState("Contributor");
  const handleRowChange = (event) => setRowValue(event.target.value);

  const [labelValue, setLabelValue] = useState("end");
  const handleLabelChange = (event) => setLabelValue(event.target.value);

  if (type === "basic") {
    return (
      <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
        <FormControlLabel value="Meshery" control={<Radio />} label="Meshery" />
        <FormControlLabel value="Kanvas" control={<Radio />} label="Kanvas" />
      </RadioGroup>
    );
  }

  if (type === "disabled") {
    return (
      <RadioGroup value={disabledValue} onChange={handleDisabledChange}>
        <FormControlLabel value="Layer5" control={<Radio />} label="Layer5" />
        <FormControlLabel value="Meshery-Cloud (Private)" control={<Radio />} label="Meshery-Cloud (Private)" disabled />
        <FormControlLabel value="Sistent Design System" control={<Radio />} label="Sistent Design System" />
      </RadioGroup>
    );
  }

  if (type === "row") {
    return (
      <RadioGroup row value={rowValue} onChange={handleRowChange}>
        <FormControlLabel value="Contributor" control={<Radio />} label="Contributor" />
        <FormControlLabel value="Community" control={<Radio />} label="Community Member" />
        <FormControlLabel value="Maintainer" control={<Radio />} label="Maintainer" />
      </RadioGroup>
    );
  }

  if (type === "labelPlacement") {
    return (
      <RadioGroup row value={labelValue} onChange={handleLabelChange}>
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
    );
  }

  return null;
};

export default RadioGroupDemo;
