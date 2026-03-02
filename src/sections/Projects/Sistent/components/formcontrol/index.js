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
} from "@sistent/sistent";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  FormGroup,
  RadioGroup,
} from "@mui/material";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentFormControl = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
            FormControl acts as a wrapper that provides shared state and
            consistent layout for form inputs. Instead of manually passing props
            like <code>error</code>, <code>disabled</code>, or{" "}
            <code>required</code> to every child, FormControl propagates these
            states automatically to its descendants.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <h3>Basic FormControl with Select</h3>
          <p>
            Wrap a label, input, and helper text inside <code>FormControl</code>{" "}
            to group them as a single logical unit.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel>Age</InputLabel>
                <Select label="Age" defaultValue="">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Select your age range</FormHelperText>
              </FormControl>
            </SistentThemeProvider>
          </Row>

          <h3>FormControl with Checkboxes</h3>
          <p>
            Use <code>FormControl</code> together with <code>FormGroup</code>{" "}
            and <code>FormControlLabel</code> to create accessible checkbox
            groups.
          </p>
          <Row $Hcenter className="image-container">
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
                <FormHelperText>Choose notification preferences</FormHelperText>
              </FormControl>
            </SistentThemeProvider>
          </Row>

          <h3>FormControl with RadioGroup</h3>
          <p>
            Pair <code>FormControl</code> with <code>RadioGroup</code> to create
            accessible radio button groups.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl component="fieldset">
                <RadioGroup defaultValue="light">
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
                <FormHelperText>Select a theme preference</FormHelperText>
              </FormControl>
            </SistentThemeProvider>
          </Row>

          <a id="States">
            <h2>States</h2>
          </a>
          <p>
            FormControl supports <code>error</code>, <code>disabled</code>, and{" "}
            <code>required</code> props. These are propagated to all child
            components automatically.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <FormControl sx={{ width: "180px" }} required>
                  <InputLabel>Required</InputLabel>
                  <Select label="Required" defaultValue="">
                    <MenuItem value="a">Option A</MenuItem>
                  </Select>
                  <FormHelperText>This field is required</FormHelperText>
                </FormControl>

                <FormControl sx={{ width: "180px" }} error>
                  <InputLabel>Error</InputLabel>
                  <Select label="Error" defaultValue="">
                    <MenuItem value="a">Option A</MenuItem>
                  </Select>
                  <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>

                <FormControl sx={{ width: "180px" }} disabled>
                  <InputLabel>Disabled</InputLabel>
                  <Select label="Disabled" defaultValue="">
                    <MenuItem value="a">Option A</MenuItem>
                  </Select>
                  <FormHelperText>This field is disabled</FormHelperText>
                </FormControl>
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="Further">
            <h2>Learn More</h2>
          </a>
          <p>
            Visit the <strong>Guidance</strong> tab for best practices and the{" "}
            <strong>Code</strong> tab for implementation details.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentFormControl;
