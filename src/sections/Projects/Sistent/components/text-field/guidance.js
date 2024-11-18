import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Box, SistentThemeProvider, TextField } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TextFieldGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="TextField">
      <div className="content">
        <a id="Identity">
          <h2>Text Field</h2>
        </a>
        <p>
          The TextField component is a versatile input field used to capture
          user input in forms and user interfaces. It can handle a variety of
          input types, such as text, numbers, emails, and passwords, and offers
          built-in styling and validation features.
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
              location.pathname ===
              "/projects/sistent/components/text-field/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-field/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For proper application, these TextField can be used for different
            purposes. It can be effectively used in any project to increase User
            Interaction. Lets see how can we use TextField effectively in our
            project.
          </p>
          <a id="Basic TextField">
            <h2>Basic TextField</h2>
          </a>
          <p>
            The TextField wrapper component is a complete form control including
            a label, variant, helper text etc. TextField comes with three
            variants: outlined (default), filled, and standard.
          </p>
          <h3>Outlined (default)</h3>
          <p>
            Outlined TextField are TextField that do not have a fill, but have a
            border or stroke to define its bounding box as well as a text label
            to convey a thought for users to take action upon. Colors can also
            be used to style these buttons in order to fit into the theme align
            with brand guidelines.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </SistentThemeProvider>
          <h3>Filled</h3>
          <p>
            Filled TextField are TextField that consist a background color fill
            and a text in it. Depending on the theme or intended action, the
            color fill can range from a primary brand color to any other
            applicable color in a brand’s color palette.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField variant="filled" label="Filled" id="filled-basic" />
            </Box>
          </SistentThemeProvider>
          <h3>Standard</h3>
          <p>
            Standard TextField are TextField that do not have background color
            fill and a text in it. Colors can also be used to style these
            buttons in order to fit into the theme align with brand guidelines.
          </p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
          </SistentThemeProvider>
          <a id="When to use different properties?">
            <h2>When to use different properties?</h2>
          </a>
          <p>
            You might come across in a situation you needed some helper text,
            field with number, disabled field etc. Let's see different
            properties availble for TextField.
          </p>
          <h3>Type prop</h3>
          <p>Type prop can have a value such as password, number or text.</p>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField id="outlined-number" label="Number" type="number" />
                <TextField id="outlined-text" label="Text" type="text" />
              </div>
            </Box>
          </SistentThemeProvider>
          <h3>Helper Text</h3>
          <p>
            Helper text also very effective for your form or for better
            understanding.
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
                  id="outlined-text"
                  label="Text"
                  type="text"
                  helperText="This is helper text"
                />
              </div>
            </Box>
          </SistentThemeProvider>
          <h3>Error</h3>
          <p>
            Error handling is very important for UI. User might come in
            sitatution where they enter invalid value or forget to enter any
            data in TextField. Here come error prop helps to indicate partucular
            field are required or user have entered invalid value.
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
              </div>
            </Box>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TextFieldGuidance;
