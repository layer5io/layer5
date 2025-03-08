import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Button,
  Box,
  Grid,
  CustomTooltip,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<CustomTooltip title="Submit">
  <span>
    <Button variant="contained" label="Submit" size="medium" />
  </span>
</CustomTooltip>`,
  `<Box sx={{ width: 500 }}>
  <Grid container sx={{ justifyContent: "center" }}>
    <Grid item>
      <CustomTooltip title="Add" placement="top-start">
        <span>
          <Button>top-start</Button>
        </span>
      </CustomTooltip>
      <CustomTooltip title="Add" placement="top">
        <span>
          <Button>top</Button>
        </span>
      </CustomTooltip>
      <CustomTooltip title="Add" placement="top-end">
        <span>
          <Button>top-end</Button>
        </span>
      </CustomTooltip>
    </Grid>
  </Grid>
  <Grid container sx={{ justifyContent: "center" }}>
    <Grid item xs={6}>
      <CustomTooltip title="Add" placement="left-start">
        <span>
          <Button>left-start</Button>
        </span>
      </CustomTooltip>
      <br />
      <CustomTooltip title="Add" placement="left">
        <span>
          <Button>left</Button>
        </span>
      </CustomTooltip>
      <br />
      <CustomTooltip title="Add" placement="left-end">
        <span>
          <Button>left-end</Button>
        </span>
      </CustomTooltip>
    </Grid>
    <Grid
      item
      container
      xs={6}
      direction="column"
      sx={{ alignItems: "flex-end" }}
    >
      <Grid item>
        <CustomTooltip title="Add" placement="right-start">
          <span>
            <Button>right-start</Button>
          </span>
        </CustomTooltip>
      </Grid>
      <Grid item>
        <CustomTooltip title="Add" placement="right">
          <span>
            <Button>right</Button>
          </span>
        </CustomTooltip>
      </Grid>
      <Grid item>
        <CustomTooltip title="Add" placement="right-end">
          <span>
            <Button>right-end</Button>
          </span>
        </CustomTooltip>
      </Grid>
    </Grid>
  </Grid>
  <Grid container sx={{ justifyContent: "center" }}>
    <Grid item>
      <CustomTooltip title="Add" placement="bottom-start">
        <span>
          <Button>bottom-start</Button>
        </span>
      </CustomTooltip>
      <CustomTooltip title="Add" placement="bottom">
        <span>
          <Button>bottom</Button>
        </span>
      </CustomTooltip>
      <CustomTooltip title="Add" placement="bottom-end">
        <span>
          <Button>bottom-end</Button>
        </span>
      </CustomTooltip>
    </Grid>
  </Grid>
</Box>`,
  `<CustomTooltip
  title="Add"
  slotProps={{
    popper: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, -14],
          },
        },
      ],
    },
  }}
>
  <span>
    <Button variant="contained" size="medium">  
      Offset
    </Button>
  </span>
</CustomTooltip>`,
  `<CustomTooltip title="Add" variant="standard">
  <span>
    <Button variant="contained" size="medium">
      standard
    </Button>
  </span>
</CustomTooltip>
<CustomTooltip title="Add" variant="small">
  <span>
    <Button variant="contained" size="medium">
      small
    </Button>
  </span>
</CustomTooltip>`,
  `<CustomTooltip title="Follow Cursor" followCursor>
  <span>
    <Button variant="contained" size="medium">
      Button
    </Button>
  </span>
</CustomTooltip>`,
  `<CustomTooltip title="Add" enterDelay={500} leaveDelay={200}>
  <span>
    <Button variant="text" size="medium">
      [500MS, 200MS]
    </Button>
  </span>
</CustomTooltip>`,
];

const TooltipCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Tooltip">
      <div className="content">
        <a id="Identity">
          <h2>Tooltip</h2>
        </a>
        <p>
          The Tooltip component displays informative text when users hover over,
          focus on, or tap an element. Tooltips are designed to enhance
          accessibility and user understanding of interface elements.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tooltip"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/tooltip")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/tooltip/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/tooltip/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/tooltip/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/tooltip/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Tooltip component displays informative text when users hover
            over, focus on, or tap an element. Tooltips are designed to enhance
            accessibility and user understanding of interface elements.
          </p>
          <a id="Basic Tooltip">
            <h3>Basic Tooltip</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomTooltip title="Submit">
                  <span>
                    <Button variant="contained" label="Submit" size="medium" />
                  </span>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-Tooltip" code={codes[0]} />
          </div>
          <a id="Positioned Example">
            <h3>Positioned Example</h3>
          </a>
          <p>
            You can specify the position of the Popper using the{" "}
            <code>placement</code> prop. Here's an example of a Tooltip
            positioned above its anchor:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: 500 }}>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <CustomTooltip title="Add" placement="top-start">
                        <span>
                          <Button>top-start</Button>
                        </span>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="top">
                        <span>
                          <Button>top</Button>
                        </span>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="top-end">
                        <span>
                          <Button>top-end</Button>
                        </span>
                      </CustomTooltip>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={6}>
                      <CustomTooltip title="Add" placement="left-start">
                        <span>
                          <Button>left-start</Button>
                        </span>
                      </CustomTooltip>
                      <br />
                      <CustomTooltip title="Add" placement="left">
                        <span>
                          <Button>left</Button>
                        </span>
                      </CustomTooltip>
                      <br />
                      <CustomTooltip title="Add" placement="left-end">
                        <span>
                          <Button>left-end</Button>
                        </span>
                      </CustomTooltip>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={6}
                      direction="column"
                      sx={{ alignItems: "flex-end" }}
                    >
                      <Grid item>
                        <CustomTooltip title="Add" placement="right-start">
                          <span>
                            <Button>right-start</Button>
                          </span>
                        </CustomTooltip>
                      </Grid>
                      <Grid item>
                        <CustomTooltip title="Add" placement="right">
                          <span>
                            <Button>right</Button>
                          </span>
                        </CustomTooltip>
                      </Grid>
                      <Grid item>
                        <CustomTooltip title="Add" placement="right-end">
                          <span>
                            <Button>right-end</Button>
                          </span>
                        </CustomTooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <CustomTooltip title="Add" placement="bottom-start">
                        <span>
                          <Button>bottom-start</Button>
                        </span>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="bottom">
                        <span>
                          <Button>bottom</Button>
                        </span>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="bottom-end">
                        <span>
                          <Button>bottom-end</Button>
                        </span>
                      </CustomTooltip>
                    </Grid>
                  </Grid>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="positioned-example" code={codes[1]} />
          </div>
          <a id="Distance from anchor">
            <h3>Distance from anchor</h3>
          </a>
          <p>
            To adjust the distance between the tooltip and its anchor, you can
            use the slotProps prop to modify the offset of the popper.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomTooltip
                  title="Add"
                  slotProps={{
                    popper: {
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [0, -14],
                          },
                        },
                      ],
                    },
                  }}
                >
                  <span>
                    <Button variant="contained" size="medium">
                      Offset
                    </Button>
                  </span>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="distance-anchor" code={codes[2]} />
          </div>
          <a id="Variable width">
            <h3>Variable width</h3>
          </a>
          <p>
            The variant prop in Tooltip allows you to control the tooltips size
            with predefined styles (standard or small). This makes it easier to
            adjust the tooltip to fit various UI requirements quickly and
            consistently.
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
                  <CustomTooltip title="Add" variant="standard">
                    <span>
                      <Button variant="contained" size="medium">
                        standard
                      </Button>
                    </span>
                  </CustomTooltip>
                  <CustomTooltip title="Add" variant="small">
                    <span>
                      <Button variant="contained" size="medium">
                        small
                      </Button>
                    </span>
                  </CustomTooltip>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="variable-width" code={codes[3]} />
          </div>
          <a id="Follow cursor">
            <h3>Follow Cursor</h3>
          </a>
          <p>
            Tooltips can be configured to follow the cursor, making it easier to
            read the content.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomTooltip title="Follow Cursor" followCursor>
                  <span>
                    <Button variant="contained" size="medium">
                      Button
                    </Button>
                  </span>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="follow-cursor" code={codes[4]} />
          </div>
          <a id="Showing and hiding">
            <h3>Showing and Hiding</h3>
          </a>
          <p>
            A delay in showing or hiding the tooltip can be added through the{" "}
            <code>enterDelay</code> and <code>leaveDelay</code> props.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomTooltip title="Add" enterDelay={500} leaveDelay={200}>
                  <span>
                    <Button variant="text" size="medium">
                      [500MS, 200MS]
                    </Button>
                  </span>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="show-hide" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TooltipCode;
