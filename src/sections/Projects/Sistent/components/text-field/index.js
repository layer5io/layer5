import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Box, SistentThemeProvider, TextField } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTextField = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="TextField" >
      <div className="content">
        <a id="Identity">
          <h2>Text Field</h2>
        </a>
        <p>
          The TextField component is a versatile input field used to capture user input in forms and user interfaces. It can handle a variety of input types, such as text, numbers, emails, and passwords, and offers built-in styling and validation features.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/text-field"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-field")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/text-field/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-field/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/text-field/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-field/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            A Text fileds allow user to enter and edit any text. It mostly present in Forms or dialogue box in UI.
            TextField are crucial and integral elements in an interface. It allows to get data from enetered user.
          </p>
          <a id="Form Props">
            <h2>Form Props</h2>
          </a>
          <p>
            Standard form attributes are supported, for example required, disabled, type, etc.
            HelperText attributes is used to give context about a field's input,
            such as how the input will be used.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                />
              </div>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  variant="filled"
                />
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
                <TextField
                  id="filled-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  variant="standard"
                />
                <TextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  variant="standard"
                />
                <TextField
                  id="standard-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="standard"
                />
              </div>
            </Box>
          </SistentThemeProvider>
          <a id="Validation">
            <h2>Validation</h2>
          </a>
          <p>
            The error property toggles the error state. The helperText prop can then be used to provide feedback to the user about the error. As shown below it can be used with variant such as outlined (default), filled, and standard.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  error
                  id="outlined-error"
                  label="Error"
                  defaultValue="Hello World"
                />
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </div>
              <div>
                <TextField
                  error
                  id="filled-error"
                  label="Error"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  error
                  id="filled-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  error
                  id="standard-error"
                  label="Error"
                  defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="standard"
                />
              </div>
            </Box>
          </SistentThemeProvider>
          <a id="Multiline">
            <h2>Multiline</h2>
          </a>
          <p>
            The multiline prop transforms the text field into a TextareaAutosize element. Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize). You can use the minRows and maxRows props to bound it.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                />
                <TextField
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
              </div>
              <div>
                <TextField
                  id="filled-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  variant="filled"
                />
                <TextField
                  id="filled-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  variant="filled"
                />
                <TextField
                  id="filled-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  variant="standard"
                />
                <TextField
                  id="standard-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="standard"
                />
              </div>
            </Box>
          </SistentThemeProvider>
          <div style={{ paddingTop: "10px" }}>
            <a id="Sizes">
              <h2>Sizes</h2>
            </a>
            <p>
              TextField can have small or normal field sizes. According the requirement it can be adjusted.
            </p>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="Size"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                  />
                  <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
                </div>
                <div>
                  <TextField
                    label="Size"
                    id="filled-size-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    label="Size"
                    id="filled-size-normal"
                    defaultValue="Normal"
                    variant="filled"
                  />
                </div>
                <div>
                  <TextField
                    label="Size"
                    id="standard-size-small"
                    defaultValue="Small"
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    label="Size"
                    id="standard-size-normal"
                    defaultValue="Normal"
                    variant="standard"
                  />
                </div>
              </Box>
            </SistentThemeProvider>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <a id="Full Width">
              <h2>Full Width</h2>
            </a>
            <p>
              FullWidth attribute can be used to make the input take up the full width of its container.
            </p>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: 600, maxWidth: "100%" }}>
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
            </SistentThemeProvider>
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTextField;
