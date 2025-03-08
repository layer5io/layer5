import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  ButtonGroup,
  Button,
  Box,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

const SistentButtonGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Button Group">
      <div className="content">
        <a id="Identity">
          <h2>Button Group</h2>
        </a>
        <p>
          The ButtonGroup component can be used to group related buttons
          together. It is a container for multiple buttons that can be used to
          group buttons together and apply styles to them. This component is
          useful when you have a group of buttons that need to be styled in a
          similar way.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button-group"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The ButtonGroup component is a container for multiple buttons that
            can be used to group buttons together and apply styles to them. This
            component is useful when you have a group of buttons that need to be
            styled in a similar way. The ButtonGroup component can be used to
            group related buttons together.
          </p>
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>
            The buttons can be grouped by wrapping them with the ButtonGroup
            component. They need to be immediate children.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                {buttons}
              </ButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Button variants">
            <h2>Button variants</h2>
          </a>
          <p>
            The ButtonGroup component supports the following variants: contained
            (default), outlined, and text.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  {buttons}
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="Basic button group">
                  {buttons}
                </ButtonGroup>
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="Vertical Group">
            <h2>Vertical Group</h2>
          </a>
          <p>
            The ButtonGroup component can be used to create a vertical group of
            buttons by setting the vertical prop to true.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  orientation="vertical"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup
                  orientation="vertical"
                  variant="outlined"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup
                  orientation="vertical"
                  variant="text"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="Disabled elevation">
            <h2>Disabled elevation</h2>
          </a>
          <p>
            You can remove the elevation with the <code>disableElevation</code>{" "}
            prop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Basic button group"
              >
                {buttons}
              </ButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            The ButtonGroup component supports the following sizes: small,
            medium (default), and large.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  size="small"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup
                  size="medium"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup
                  size="large"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="Full width">
            <h2>Full width</h2>
          </a>
          <p>
            You can make the ButtonGroup full width with the{" "}
            <code>fullWidth</code> prop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="Basic button group"
              >
                {buttons}
              </ButtonGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentButtonGroup;
