import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Button,
  ButtonGroup,
  Box,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

const codes = [
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <ButtonGroup variant="contained" aria-label="Basic bgroup">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="Basic bugroup">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </SistentThemeProvider>`,
  ` <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="outlined"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
  </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <ButtonGroup
        size="small"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        size="medium"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <ButtonGroup
        fullWidth
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
  </SistentThemeProvider>`,
];

const ButtonGroupCode = () => {
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
            The ButtonGroup component can be used to group related buttons
            together. It is a container for multiple buttons that can be used to
            group buttons together and apply styles to them. This component is
            useful when you have a group of buttons that need to be styled in a
            similar way.
          </p>
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>
            The buttons can be grouped by wrapping them with the ButtonGroup
            component. They need to be immediate children.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-usage" code={codes[0]} />
          </div>
          <a id="Button Variant">
            <h2>Button Variant</h2>
          </a>
          <p>
            The ButtonGroup component supports three variants: Filled, Outlined,
            and Text.
          </p>
          <div className="showcase">
            <div className="items">
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
                  <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                  >
                    {buttons}
                  </ButtonGroup>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="button-variant" code={codes[1]} />
          </div>
          <a id="Vertical Group">
            <h2>Vertical Group</h2>
          </a>
          <p>
            The ButtonGroup component can be used to create a vertical group of
            buttons by setting the vertical prop to true.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="vertical-group" code={codes[2]} />
          </div>
          <a id="Disable elevation">
            <h2>Disable elevation</h2>
          </a>
          <p>
            The ButtonGroup component can be used to create a group of buttons
            with no elevation by setting the disableElevation prop to true.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="disable-elevation" code={codes[3]} />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            For now, two different sizes of buttons exist: 56px height and 48px
            height.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="sizes" code={codes[4]} />
          </div>
          <a id="Full Width">
            <h2>Full Width</h2>
          </a>
          <p>
            The ButtonGroup component can be used to create a group of buttons
            that take up the full width of the container by setting the
            fullWidth prop to true.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {buttons}
                </ButtonGroup>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="full-width" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ButtonGroupCode;
