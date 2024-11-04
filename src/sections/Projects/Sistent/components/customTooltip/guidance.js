import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Button, Typography, Tooltip } from "@layer5/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const CustomTooltipGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  return (
    <SistentLayout title="Custom Tooltip">
      <div className="content">
        <a id="Identity">
          <h2>Custom Tooltip</h2>
        </a>
        <p>
          The Tooltip component displays informative text when users hover over,
          focus on, or tap an element. Tooltips are designed to enhance
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
            The Tooltip component displays informative text when users hover
            over, focus on, or tap an element. Tooltips are designed to enhance
            accessibility and user understanding of interface elements.
          </p>

          <a id="Positioning">
            <h3>Positioning</h3>
          </a>
          <p>
            The positioning of the CustomTooltip is critical for usability. Use
            the `placement` prop to control where the CustomTooltip appears
            relative to its anchor element. Options include:
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
            <h3>Styling</h3>
          </a>
          <p>
            The CustomTooltip component inherits styles from the Sistent theme.
            You can customize the appearance by applying styles to the content
            inside the CustomTooltip. For instance:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="contained"
                label="Toggle Popper"
                size="medium"
                // onClick={handleClick}
              />
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                    <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }
                // sx={{
                //   [`& .${tooltipClasses.tooltip}`]: {
                //     backgroundColor: theme.palette.common.white,
                //     color: "rgba(0, 0, 0, 0.87)",
                //     boxShadow: theme.shadows[1],
                //     fontSize: 11,
                //   },
                // }}
              >
                <Button variant="text" label="Customize" size="medium" />
              </Tooltip>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h3>Accessibility</h3>
          </a>
          <p>
            It’s important to ensure that the customTooltip component is
            accessible to all users. Here are some key considerations:
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
            <h3>Performance Tips</h3>
          </a>
          <p>
            When using the CustomTooltip component, consider the following to
            optimize performance:
          </p>
          <ul>
            <li>
              Use the `placement` prop to control the position of the
              CustomTooltip and prevent overlap with other interface elements.
            </li>
            <li>
              Ensure that the CustomTooltip is keyboard navigable, allowing
              users to open/close it using keyboard shortcuts.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CustomTooltipGuidance;
