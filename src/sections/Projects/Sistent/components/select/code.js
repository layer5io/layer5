import React from "react";
import { CodeBlock } from "../button/code-block";

import { SistentThemeProvider } from "@layer5/sistent";

import { SistentLayout } from "../../sistent-layout";

import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import SectionNav from "./section-nav";
import Header from "./header";

const codes = {
  "variant-outlined": `<Select>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "variant-filled": `<Select variant="filled">
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "variant-standard": `<Select variant="standard">
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "size-auto": `<Select autoWidth>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "size-small": `<Select size="small">
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "size-fullwidth": `<Select fullWidth>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "behavior-error-disabled": `<Select disabled>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>
<Select error>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,

  "behavior-required": `<FormControl required>
  <InputLabel id="demo-select-label-outlined">Age</InputLabel>
  <Select
    labelId="demo-select-label-outlined"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`,

  "customize-label": `<FormControl sx={{ width: "200px" }}>
  <InputLabel id="demo-select-label">Age</InputLabel>
  <Select
    labelId="demo-select-label"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`,

  "customize-helper-text": `<FormControl sx={{ width: "200px" }}>
  <Select>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <FormHelperText>This is a helper text</FormHelperText>
</FormControl>`,

  "customize-placeholder": `const [selectedAge, setSelectedAge] = React.useState("");

<Select
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
</Select>`,

  "customize-grouping": `<Select>
  <ListSubheader muiSkipListHighlight>Group 1</ListSubheader>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <ListSubheader muiSkipListHighlight>Group 2</ListSubheader>
  <MenuItem value={30}>Thirty</MenuItem>
  <MenuItem value={40}>Fourty</MenuItem>
  <ListSubheader muiSkipListHighlight>Group 3</ListSubheader>
  <MenuItem value={50}>Fifty</MenuItem>
  <MenuItem value={60}>Sixty</MenuItem>
</Select>`,

  multiselect: `const [multipleAges, setMultipleAges] = React.useState([]);
const handleMultiplSelect = (event) => {
  let agesList = event.target.value;
  setMultipleAges(agesList);
};

<Select
  multiple
  input={<OutlinedInput label="Name" />}
  value={multipleAges}
  onChange={handleMultiplSelect}
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>`,
};

const SelectCode = () => {
  const { isDark } = useStyledDarkMode();
  const [selectedAge, setSelectedAge] = React.useState("");
  const [multipleAges, setMultipleAges] = React.useState([10]);
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
          <a id="Select variants">
            <h2>Select variants</h2>
          </a>
          <p>
            The select comes in three types: Outlined, Filled, and Standard. To
            specify the variant, pass a value to the variant prop.
          </p>
          <h3>Outlined</h3>
          <p>
            If not specified, the default variant of the select if outlined.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="outlined-selection"
              code={codes["variant-outlined"]}
            />
          </div>
          <h3>Filled</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} variant="filled">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="filled-selection" code={codes["variant-filled"]} />
          </div>
          <h3>Standard</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} variant="standard">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="standard-selection"
              code={codes["variant-standard"]}
            />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            There are 3 size option for the select component: autowidth, small,
            and fullWidth. Depending on the size of the select, different prop
            can be passed to the component.
          </p>
          <h3>Autowidth</h3>
          <p>
            An autoWidth option is passed to the component to enable this
            attribute
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} autoWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-auto" code={codes["size-auto"]} />
          </div>
          <h3>Small</h3>
          <p>
            To generate small select, pass a size prop with a value of small
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} size="small">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-small" code={codes["size-small"]} />
          </div>
          <h3>Full width</h3>
          <p>
            The select will expand the full width of its parent when passed
            fullWidth prop
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} fullWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-fullwidth" code={codes["size-fullwidth"]} />
          </div>
          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <h3>Label</h3>
          <p>
            To add a label to the select component, wrap it inside a FormControl
            component. Add an InputLabel component and link it to the select
            component using the labelId prop. Ensure the label prop in the
            Select component matches the InputLabel text.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="customize-label" code={codes["customize-label"]} />
          </div>
          <h3>Helper text</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }}>
                  <Select defaultValue={10}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>This is a helper text</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="customize-helper-text"
              code={codes["customize-helper-text"]}
            />
          </div>
          <h3>Placeholder</h3>
          <p>
            To add a placeholder, use the renderValue prop to display a
            placeholder text when no value is selected.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="customize-placeholder"
              code={codes["customize-placeholder"]}
            />
          </div>
          <h3>Grouping</h3>
          To group selection options, use the ListSubheader component to create
          headers for each group within the dropdown menu. This helps users to
          easily navigate and find the options they need.
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10}>
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
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="customize-grouping"
              code={codes["customize-grouping"]}
            />
          </div>
          <p>
            Additional props such as error, required, and disabled can be passed
            to the select component to customize its behavior.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select disabled defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Select error defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="behavior-error-disabled"
              code={codes["behavior-error-disabled"]}
            />
          </div>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="adding-icons" code={codes["behavior-required"]} />
            <p>
              <strong>NOTE:</strong>
            </p>
            <p>
              When the select component is marked as required, an asterisk is
              added to the label to indicate this to the user. It is recommended
              to use this feature in conjunction with the label for better
              clarity.
            </p>
          </div>
          <a id="Multi-select">
            <h2>Multi-select</h2>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select
                  multiple
                  input={<OutlinedInput label="Name" />}
                  value={multipleAges}
                  onChange={handleMultiplSelect}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="multiselect" code={codes["multiselect"]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SelectCode;
