import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import {
  SistentThemeProvider,
  Button,
  Typography,
  CustomTooltip,
  Grid,
} from "@layer5/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TooltipGuidance = () => {
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

          <a id="Positioning">
            <h2>Positioning</h2>
          </a>
          <p>
            The positioning of the Tooltip is critical for usability. Use the
            `placement` prop to control where the Tooltip appears relative to
            its anchor element. Options include:
          </p>
          <ul>
            <li>top</li>
            <li>bottom</li>
            <li>left</li>
            <li>right</li>
            <li>top-start</li>
            <li>top-end</li>
            <li>bottom-start</li>
            <li>bottom-end</li>
            <li>left-start</li>
            <li>left-end</li>
            <li>right-start</li>
            <li>right-end</li>
          </ul>
          <p>
            Choosing the right position helps to prevent overlap with other
            interface elements and improves readability.
          </p>

          <a id="Styling">
            <h2>Styling</h2>
          </a>
          <p>
            The Tooltip component inherits styles from the Sistent theme. You
            can customize the appearance by applying styles to the content
            inside the Tooltip. For instance:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip
                title={<Typography color="GrayText">Custom Tooltip</Typography>}
              >
                <span>
                  <Button variant="text" label="Button" size="medium" />
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <h3>HTML Support</h3>
          <p>
            The Tooltip component supports HTML content, allowing you to include
            rich text, links, and other elements inside the tooltip. By passing
            HTML content as the title prop, you can create more engaging and
            informative tooltips.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      Tooltip with HTML Support
                    </Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                    <a href="#">{"amazing content"}</a>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }
              >
                <span>
                  <Button variant="text" label="Customize" size="medium" />
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <h3>Markdown Support</h3>
          <p>
            The Tooltip component supports Markdown content, allowing you to
            include rich text, links, and other elements inside the tooltip. By
            passing Markdown content as the title prop, you can create more
            engaging and informative tooltips.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <CustomTooltip
                title={`### Tooltip with Markdown 
*And here's* **some** [amazing content](#) 
It's very engaging. Right?`}
              >
                <span>
                  <Button variant="text" label="Customize" size="medium" />
                </span>
              </CustomTooltip>
            </SistentThemeProvider>
          </Row>

          <h2>Triggers</h2>
          <p>
            The Tooltip component can be triggered by various user actions,
            including hover, focus, and click. By default, the Tooltip appears
            when the user hovers over the anchor element. You can customize the
            trigger behavior using the following props:
          </p>
          <ul>
            <li>
              <code>disableHoverListener</code>: Disables the hover trigger.
            </li>
            <li>
              <code>disableFocusListener</code>: Disables the focus trigger.
            </li>
            <li>
              <code>disableTouchListener</code>: Disables the touch trigger.
            </li>
          </ul>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Grid container sx={{ justifyContent: "space-evenly" }}>
                <Grid item>
                  <CustomTooltip disableFocusListener title="Add">
                    <span>
                      <Button variant="contained" size="medium">
                        Hover or touch
                      </Button>
                    </span>
                  </CustomTooltip>
                </Grid>
                <Grid item>
                  <CustomTooltip disableHoverListener title="Add">
                    <span>
                      <Button variant="contained" size="medium">
                        Focus or touch
                      </Button>
                    </span>
                  </CustomTooltip>
                </Grid>
                <Grid item>
                  <CustomTooltip disableTouchListener title="Add">
                    <span>
                      <Button variant="contained" size="medium">
                        Hover or Focus
                      </Button>
                    </span>
                  </CustomTooltip>
                </Grid>
              </Grid>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            It’s important to ensure that the Tooltip component is accessible to
            all users. Here are some key considerations:
          </p>
          <ul>
            <li>
              By default, tooltips are designed to label their child element
              rather than describe it. This differs from the <code>title</code>{" "}
              attribute, which can either label or describe the child element
              based on whether it already has an accessible label.
            </li>
            <li>
              Using <code>describeChild</code> : When you want the tooltip to
              act as an accessible description (adding additional context), you
              can enable the describeChild prop. Use describeChild only if the
              tooltip provides supplementary information and the child element
              already has an accessible label.
            </li>
            <li>
              Avoiding Accessibility Violations: Do not use describeChild if the
              tooltip is the only visible label for the child element, as this
              would prevent the child from having an accessible name.
            </li>
          </ul>

          <a id="Performance">
            <h2>Performance Tips</h2>
          </a>
          <p>
            When using the Tooltip component, consider the following to optimize
            performance:
          </p>
          <ul>
            <li>
              Use the `placement` prop to control the position of the Tooltip
              and prevent overlap with other interface elements.
            </li>
            <li>
              Ensure that the Tooltip is keyboard navigable, allowing users to
              open/close it using keyboard shortcuts.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TooltipGuidance;
