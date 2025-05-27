import React from "react";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  ListSubheader,
  OutlinedInput,
} from "@mui/material";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import SectionNav from "./section-nav";
import Header from "./header";
const SelectGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const [selectedAge, setSelectedAge] = React.useState("");
  const [multipleAges, setMultipleAges] = React.useState([]);
  const handleMultiplSelect = (event) => {
    let agesList = event.target.value;
    setMultipleAges(agesList);
  };
  return (
    <SistentLayout title="Select">
      <div className="content">
        <Header />
        <SectionNav />
        <div className="main-content">
          <a id="Functions">
            <h2>Functions</h2>
          </a>
          <p>
            The select component can exhibit different state based on the
            context and user input. Since it is usually used within a form
            component, these states can act in response to the user input for
            other components in the form.
          </p>
          <h3>Disabled</h3>
          <p>
            If the component is disabled, the dropdown menu won't display when
            user clicks on the selection area. This behavior is useful when the
            user is not allowed to select any option.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }} disabled>
                <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                <Select
                  labelId="demo-select-label-outlined"
                  id="demo-select-outlined"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>Error</h3>
          <p>
            This behavior is used to indicate that the user has made an error or
            the selection is not compatible with other form components.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }} error>
                <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                <Select
                  labelId="demo-select-label-outlined"
                  id="demo-select-outlined"
                  label="Age"
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>Required</h3>
          <p>
            If specified, the select component will be required to have an input
            from the user. An asterisk will be displayed next to the label to
            let the user know that the input is required.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }} required>
                <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                <Select
                  labelId="demo-select-label-outlined"
                  id="demo-select-outlined"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <p>
            Additional props can be added to the select component to customize
            its label and dropdown menu to provide use with more context of
            their selection.
          </p>
          <h3>Label and helper text</h3>
          <p>
            The label is optional. If provided, helper text is displayed below
            the component to give the user more context about the component.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Grid
              gap={2}
              container
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label"
                  id="demo-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>With label + Helper text</FormHelperText>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <Select id="demo-select-without-label">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </Grid>
          </SistentThemeProvider>
          <h3>Placeholder</h3>
          <p>
            A placeholder is a short hint or description that is displayed
            inside an input field or select component before the user enters a
            value. It provides a clue to the user about what kind of information
            is expected in the field. The placeholder text disappears when the
            user starts typing or selects an option.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <Select
                  id="demo-select-outlined"
                  onChange={(e) => setSelectedAge(e.target.value)}
                  renderValue={() => {
                    if (selectedAge == "") return <em>Select an age</em>;
                    return selectedAge;
                  }}
                  value={selectedAge}
                  displayEmpty
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>Grouping</h3>
          <p>
            If the selection options are organized into groups, their groups can
            be displayed within the dropdown menu to assist users in making
            their selection.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                <Select
                  labelId="demo-select-label-outlined"
                  id="demo-select-outlined"
                  label="Age"
                >
                  <ListSubheader muiSkipListHighlight>Group 1</ListSubheader>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <ListSubheader muiSkipListHighlight>Group 2</ListSubheader>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Fourty</MenuItem>
                  <ListSubheader muiSkipListHighlight>Group 3</ListSubheader>
                  <MenuItem value={50}>Fifty</MenuItem>
                  <MenuItem value={60}>Sixty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <a id="Multiple select">
            <h2>Multiple select</h2>
          </a>
          <p>
            The multiple select component allows users to select more than one
            option from the dropdown list. This is useful in scenarios where
            multiple selections are required, such as selecting multiple tags,
            categories, or items.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  multiple
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  input={<OutlinedInput label="Name" />}
                  value={multipleAges}
                  onChange={handleMultiplSelect}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SelectGuidance;
