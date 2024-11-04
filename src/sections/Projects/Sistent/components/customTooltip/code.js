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
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <CustomTooltip title="Submit">
      <Button variant="contained" label="Submit" size="medium" />
    </CustomTooltip>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Box sx={{ width: 500 }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <CustomTooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </CustomTooltip>
          <CustomTooltip title="Add" placement="top">
            <Button>top</Button>
          </CustomTooltip>
          <CustomTooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </CustomTooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6}>
          <CustomTooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </CustomTooltip>
          <br />
          <CustomTooltip title="Add" placement="left">
            <Button>left</Button>
          </CustomTooltip>
          <br />
          <CustomTooltip title="Add" placement="left-end">
            <Button>left-end</Button>
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
              <Button>right-start</Button>
            </CustomTooltip>
          </Grid>
          <Grid item>
            <CustomTooltip title="Add" placement="right">
              <Button>right</Button>
            </CustomTooltip>
          </Grid>
          <Grid item>
            <CustomTooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </CustomTooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <CustomTooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </CustomTooltip>
          <CustomTooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </CustomTooltip>
          <CustomTooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </CustomTooltip>
        </Grid>
      </Grid>
    </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <CustomTooltip title="Add" variant="standard">
        <Button variant="contained" size="medium">
          standard
        </Button>
      </CustomTooltip>
      <CustomTooltip title="Add" variant="small">
        <Button variant="contained" size="medium">
          small
        </Button>
      </CustomTooltip>
    </Box>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <CustomTooltip title="Follow Cursor" followCursor>
      <Button variant="contained" size="medium">
        Button
      </Button>
    </CustomTooltip>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <CustomTooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button variant="text" size="medium">
        [500MS, 200MS]
      </Button>
    </CustomTooltip>
</SistentThemeProvider>`,
];

const CustomTooltipCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Custom Tooltip">
      <div className="content">
        <a id="Identity">
          <h2>Custom Tooltip</h2>
        </a>
        <p>
          The CustomTooltip component displays informative text when users hover
          over, focus on, or tap an element. Tooltips are designed to enhance
          accessibility and user understanding of interface elements.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/customTooltip"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/customTooltip")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/customTooltip/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/customTooltip/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/customTooltip/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/customTooltip/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The CustomTooltip component displays informative text when users
            hover over, focus on, or tap an element. Tooltips are designed to
            enhance accessibility and user understanding of interface elements.
          </p>
          <a id="Basic CustomTooltip">
            <h3>Basic CustomTooltip</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <CustomTooltip title="Submit">
                  <Button variant="contained" label="Submit" size="medium" />
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-customTooltip" code={codes[0]} />
          </div>
          <a id="Positioned Example">
            <h3>Positioned Example</h3>
          </a>
          <p>
            You can specify the position of the Popper using the{" "}
            <code>placement</code> prop. Here's an example of a CustomTooltip
            positioned above its anchor:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: 500 }}>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <CustomTooltip title="Add" placement="top-start">
                        <Button>top-start</Button>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="top">
                        <Button>top</Button>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="top-end">
                        <Button>top-end</Button>
                      </CustomTooltip>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={6}>
                      <CustomTooltip title="Add" placement="left-start">
                        <Button>left-start</Button>
                      </CustomTooltip>
                      <br />
                      <CustomTooltip title="Add" placement="left">
                        <Button>left</Button>
                      </CustomTooltip>
                      <br />
                      <CustomTooltip title="Add" placement="left-end">
                        <Button>left-end</Button>
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
                          <Button>right-start</Button>
                        </CustomTooltip>
                      </Grid>
                      <Grid item>
                        <CustomTooltip title="Add" placement="right">
                          <Button>right</Button>
                        </CustomTooltip>
                      </Grid>
                      <Grid item>
                        <CustomTooltip title="Add" placement="right-end">
                          <Button>right-end</Button>
                        </CustomTooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item>
                      <CustomTooltip title="Add" placement="bottom-start">
                        <Button>bottom-start</Button>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="bottom">
                        <Button>bottom</Button>
                      </CustomTooltip>
                      <CustomTooltip title="Add" placement="bottom-end">
                        <Button>bottom-end</Button>
                      </CustomTooltip>
                    </Grid>
                  </Grid>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="positioned-example" code={codes[1]} />
          </div>
          <a id="Variable width">
            <h3>Variable width</h3>
          </a>
          <p>
            The variant prop in CustomTooltip allows you to control the tooltips
            size with predefined styles (standard or small). This makes it
            easier to adjust the tooltip to fit various UI requirements quickly
            and consistently.
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
                    <Button variant="contained" size="medium">
                      standard
                    </Button>
                  </CustomTooltip>
                  <CustomTooltip title="Add" variant="small">
                    <Button variant="contained" size="medium">
                      small
                    </Button>
                  </CustomTooltip>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="variable-width" code={codes[2]} />
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
                  <Button variant="contained" size="medium">
                    Button
                  </Button>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="follow-cursor" code={codes[3]} />
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
                  <Button variant="text" size="medium">
                    [500MS, 200MS]
                  </Button>
                </CustomTooltip>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="show-hide" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CustomTooltipCode;
