import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  Button,
  CustomTooltip,
  Box,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTooltip = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
            onClick={() => navigate("/projects/sistent/components/tooltip")}
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
              location.pathname === "/projects/sistent/components/tooltip/code"
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
            <h2>Basic Tooltip</h2>
          </a>
          <p>
            A simple tooltip that displays helpful information when hovering
            over an icon button.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip title="Submit">
                <span>
                  <Button variant="contained" label="Submit" size="medium" />
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>
          <h3>Custom Position</h3>
          <p>
            Tooltips support different placements, allowing flexibility
            depending on your layout requirements.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip title="Top Tooltip" placement="top">
                <span>
                  <Button variant="contained" size="medium">
                    Delete
                  </Button>
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <h3>Disabled Elements</h3>
          <p>
            By default disabled elements like button do not trigger user
            interactions so a <code>Tooltip</code> will not activate on normal
            events like hover. To accommodate disabled elements, add a simple
            wrapper element, such as a <code>span</code>.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip title="Disabled Tooltip">
                <span>
                  <Button variant="text" size="medium" disabled>
                    Disabled Button
                  </Button>
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <a id="Distance from anchor">
            <h2>Distance from anchor</h2>
          </a>
          <p>
            To adjust the distance between the tooltip and its anchor, you can
            use the slotProps prop to modify the offset of the popper.
          </p>
          <Row $Hcenter className="image-container">
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
          </Row>

          <a id="Variable width">
            <h2>Variable width</h2>
          </a>
          <p>
            The variant prop in Tooltip allows you to control the tooltips size
            with predefined styles (standard or small). This makes it easier to
            adjust the tooltip to fit various UI requirements quickly and
            consistently.
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
          </Row>

          <a id="Follow cursor">
            <h2>Follow Cursor</h2>
          </a>
          <p>
            Tooltips can be configured to follow the cursor, making it easier to
            read the content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip title="Follow Cursor" followCursor>
                <span>
                  <Button variant="contained" size="medium">
                    Button
                  </Button>
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <a id="Showing and hiding">
            <h2>Showing and Hiding</h2>
          </a>
          <p>
            The Tooltip is normally shown immediately when the user's mouse
            hovers over the element, and hides immediately when the user's mouse
            leaves. A delay in showing or hiding the tooltip can be added
            through the <code>enterDelay</code> and <code>leaveDelay</code>{" "}
            props.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip title="Add" enterDelay={500} leaveDelay={200}>
                <span>
                  <Button variant="text" size="medium">
                    [500MS, 200MS]
                  </Button>
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTooltip;
