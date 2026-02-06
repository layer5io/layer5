import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  FormHelperText,
  ListSubheader,
  Box
} from "@mui/material";

const SelectDemo = ({ type, ...props }) => {
  const [age, setAge] = useState("");
  const [multipleAges, setMultipleAges] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleMultipleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMultipleAges(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  if (type === "basic") {
    // Covers outlined, filled, standard variants via props
    const labelId = `demo-select-${props.variant || 'outlined'}-label`;
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth {...props}>
          <InputLabel id={labelId}>Age</InputLabel>
          <Select
            labelId={labelId}
            id={`demo-select-${props.variant || 'outlined'}`}
            value={age}
            label="Age"
            onChange={handleChange}
            {...props}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

  if (type === "helper") {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    );
  }

  if (type === "placeholder") {
     return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select an age</em>;
                  }
                  return selected;
                }}
            >
              <MenuItem disabled value="">
                <em>Select an age</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
     )
  }

  if (type === "grouping") {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    );
  }

  if (type === "multiple") {
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={multipleAges}
          onChange={handleMultipleChange}
          input={<OutlinedInput label="Name" />}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }

  return null;
};

export default SelectDemo;
