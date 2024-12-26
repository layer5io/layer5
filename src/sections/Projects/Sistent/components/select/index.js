import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Button } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import {
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SistentSelect = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Select">
      <div className="content">
        <a id="Identity">
          <h2>Select</h2>
        </a>
        <p>
          Select component is a dropdown menu for selecting an option from a
          list.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/select"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/select")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/select/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/select/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/select/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/select/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Select component is a versatile and customizable element
            commonly used in forms and user interfaces. It is designed to
            present a list of options for users to choose from, either as a
            single selection or multiple selections. This component plays a
            vital role in collecting user-provided information efficiently and
            intuitively.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            To accommodate various design styles and use cases, the select
            component offers numerous customizable properties. Developers can
            customize how the component display the labels or selected option to
            improve user experience.
          </p>
          <h3>Outlined</h3>
          <p>
            The default style is "outlined," featuring a thin line around the
            selection area. The label appears above the selection, and the
            dropdown menu is displayed below it.
          </p>
          <Container sx={{ width: "200px" }}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl fullWidth>
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
          </Container>
          <h3>Filled</h3>
          <p>
            Filled select feature a background color fill. Depending on the
            theme or intended action, the color fill ican range from a primary
            brand color to any other applicable color in a brand's color
            palette.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row $Hcenter className="image-container">
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label-filled">Age</InputLabel>
                <Select
                  labelId="demo-select-label-filled"
                  id="demo-select-filled"
                  label="Age"
                  variant="filled"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Row>
          </SistentThemeProvider>
          <h3>Standard</h3>
          <p>
            The standard style features a simple underline below the selection
            area.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  variant="standard"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <a id="Label">
            <h2>Label and helper text</h2>
          </a>
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
                <Select id="demo-select-without-label" defaultValue={"None"}>
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </Grid>
          </SistentThemeProvider>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            For buttons to be fully effective, they can be adjusted in size to
            accommodate multiple use cases where they may apply. These size
            changes are usually done to the height of the buttons and not the
            width since buttons usually grow to contain their content. The
            height that makes up the different sizes of our buttons are gotten
            from our spacing system to retain space consistency. We have chosen
            two different sizes of buttons to provide options and more sizes can
            be added to fill the growing needs.
          </p>
          <h3>56px / 3.5rem</h3>
          <p>
            The 56px button is the first button size. It is currently the
            largest button available for use and it is available for both mobile
            and desktop resolutions, but it serves in different capacities
            across these different resolutions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl fullWidth>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  variant="standard"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>48px / 3rem</h3>
          <p>
            The 48px button is the second button size currently in use and it is
            available from mobile to desktop resolutions, even though it serves
            in different capacities across these screen sizes.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" label="48px / 3rem" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>Full width</h3>
          <p>
            Full width buttons are more efficient in mobile designs and rightly
            so in order to offer users with a wider touch area since the input
            devices - the fingers, are a lot larger than the cursor on a desktop
            or larger screen.
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" label="Full width" fullWidth />
              </SistentThemeProvider>
            </Col>
          </Row>
          <p>
            <strong>NOTE:</strong>
          </p>
          <p>
            These sizes are being specified with numerical values because though
            the same size is used across screen resolutions, they have different
            roles. On desktop for instance, the 56px button is a the default
            size, and 48px the small size, while on mobile, 56px is large and
            48px is the default size. Preferred button sizes (height) are
            usually arrived at through exploration and proper consideration of
            industry standards and best practices.
          </p>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
            Sometimes, icons are used alongside labels in buttons to pass across
            specific information or relay added information for a higher level
            of understanding and better comprehension. Depending on the
            information being conveyed, the icons can be placed on the left side
            of the label text or on the right side of the label text. No
            specific rules apply apart from spacing tips which may be considered
            here. For full width buttons, if icons must be added, they should be
            centered in the button alongside the label text.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentSelect;
