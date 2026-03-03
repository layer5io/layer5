import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Radio,
  FormControl,
  FormGroup,
  RadioGroup,
  InputLabel,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl sx={{ width: "200px" }}>
    <InputLabel id="age-select-label">Age</InputLabel>
    <Select
      labelId="age-select-label"
      id="age-select"
      value={age}
      label="Age"
      onChange={(e) => setAge(e.target.value)}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <FormHelperText>Select your age range</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
  `import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl sx={{ width: "200px" }} required>
    <InputLabel id="category-select-label">Category</InputLabel>
    <Select
      labelId="category-select-label"
      id="category-select"
      value={category}
      label="Category"
      onChange={(e) => setCategory(e.target.value)}
    >
      <MenuItem value="frontend">Frontend</MenuItem>
      <MenuItem value="backend">Backend</MenuItem>
    </Select>
    <FormHelperText>This field is required</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
  `import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl sx={{ width: "200px" }} error>
    <InputLabel id="priority-select-label">Priority</InputLabel>
    <Select
      labelId="priority-select-label"
      id="priority-select"
      value={priority}
      label="Priority"
      onChange={(e) => setPriority(e.target.value)}
    >
      <MenuItem value="low">Low</MenuItem>
      <MenuItem value="high">High</MenuItem>
    </Select>
    <FormHelperText>Please select a priority</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
  `import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl sx={{ width: "200px" }} disabled>
    <InputLabel id="region-select-label">Region</InputLabel>
    <Select
      labelId="region-select-label"
      id="region-select"
      defaultValue="us"
      label="Region"
    >
      <MenuItem value="us">US</MenuItem>
      <MenuItem value="eu">EU</MenuItem>
    </Select>
    <FormHelperText>Region is disabled</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
  `import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl component="fieldset">
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Email notifications"
      />
      <FormControlLabel control={<Checkbox />} label="SMS notifications" />
      <FormControlLabel control={<Checkbox />} label="Push notifications" />
    </FormGroup>
    <FormHelperText>Choose notifications</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
  `import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";

<SistentThemeProvider>
  <FormControl component="fieldset">
    <RadioGroup value={theme} onChange={(e) => setTheme(e.target.value)}>
      <FormControlLabel value="light" control={<Radio />} label="Light" />
      <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      <FormControlLabel value="system" control={<Radio />} label="System" />
    </RadioGroup>
    <FormHelperText>Select theme preference</FormHelperText>
  </FormControl>
</SistentThemeProvider>`,
];

const FormControlCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [theme, setTheme] = React.useState("light");

  return (
    <SistentLayout title="FormControl">
      <div className="content">
        <a id="Identity">
          <h2>FormControl</h2>
        </a>
        <p>
          The <code>FormControl</code> component provides context and grouping
          for form elements such as labels, inputs, helper text, and error
          messages. It manages layout, state propagation (like error, disabled,
          and required), and accessibility for its children.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/formcontrol"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/formcontrol")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/formcontrol/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formcontrol/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/formcontrol/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formcontrol/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Below are code examples demonstrating various{" "}
            <code>FormControl</code> configurations. Each example includes a
            live preview and the corresponding code snippet.
          </p>

          <a id="Basic Select">
            <h2>Basic Select</h2>
          </a>
          <p>
            A simple <code>FormControl</code> wrapping a <code>Select</code>{" "}
            input with a label and helper text.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }}>
                  <InputLabel id="demo-age-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-age-select-label"
                    id="demo-age-select"
                    value={age}
                    label="Age"
                    onChange={(e) => setAge(e.target.value)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Select your age range</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-basic" code={codes[0]} />
          </div>

          <a id="Required">
            <h2>Required State</h2>
          </a>
          <p>
            Use the <code>required</code> prop to mark the form control as
            mandatory. An asterisk is added to the label automatically.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }} required>
                  <InputLabel id="demo-category-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-category-select-label"
                    id="demo-category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="frontend">Frontend</MenuItem>
                    <MenuItem value="backend">Backend</MenuItem>
                  </Select>
                  <FormHelperText>This field is required</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-required" code={codes[1]} />
          </div>

          <a id="Error">
            <h2>Error State</h2>
          </a>
          <p>
            The <code>error</code> prop flags validation issues. The label,
            border, and helper text reflect the error state.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }} error>
                  <InputLabel id="demo-priority-select-label">
                    Priority
                  </InputLabel>
                  <Select
                    labelId="demo-priority-select-label"
                    id="demo-priority-select"
                    value={priority}
                    label="Priority"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                  <FormHelperText>Please select a priority</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-error" code={codes[2]} />
          </div>

          <a id="Disabled">
            <h2>Disabled State</h2>
          </a>
          <p>
            The <code>disabled</code> prop prevents interaction with the form
            control and all its children.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }} disabled>
                  <InputLabel id="demo-region-select-label">Region</InputLabel>
                  <Select
                    labelId="demo-region-select-label"
                    id="demo-region-select"
                    defaultValue="us"
                    label="Region"
                  >
                    <MenuItem value="us">US</MenuItem>
                    <MenuItem value="eu">EU</MenuItem>
                  </Select>
                  <FormHelperText>Region is disabled</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-disabled" code={codes[3]} />
          </div>

          <a id="Checkbox Group">
            <h2>Checkbox Group</h2>
          </a>
          <p>
            Combine <code>FormControl</code> with <code>FormGroup</code> and{" "}
            <code>FormControlLabel</code> for accessible checkbox groups.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Email notifications"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="SMS notifications"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Push notifications"
                    />
                  </FormGroup>
                  <FormHelperText>Choose notifications</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-checkbox" code={codes[4]} />
          </div>

          <a id="Radio Group">
            <h2>Radio Group</h2>
          </a>
          <p>
            Use <code>FormControl</code> with <code>RadioGroup</code> for
            accessible single-choice selections.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  >
                    <FormControlLabel
                      value="light"
                      control={<Radio />}
                      label="Light"
                    />
                    <FormControlLabel
                      value="dark"
                      control={<Radio />}
                      label="Dark"
                    />
                    <FormControlLabel
                      value="system"
                      control={<Radio />}
                      label="System"
                    />
                  </RadioGroup>
                  <FormHelperText>Select theme preference</FormHelperText>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="formcontrol-radio" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default FormControlCode;
