import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Popper, Button, Box } from "@layer5/sistent";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const PopperGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <SistentLayout title="Popper">
      <div className="content">
        <a id="Identity">
          <h2>Popper</h2>
        </a>
        <p>
          The Popper component provides a mechanism for positioning content
          dynamically relative to a reference element. It is commonly used for
          tooltips, dropdowns, and modals, enhancing the user experience by
          presenting contextual information without overcrowding the interface.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/popper"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/popper")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/popper/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/popper/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/popper/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/popper/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Proper usage of the Popper component can greatly enhance user
            experience by providing relevant contextual information at the right
            time. Below are some guidelines to ensure effective implementation.
          </p>

          <a id="Positioning">
            <h3>Positioning</h3>
          </a>
          <p>
            The positioning of the Popper is critical for usability. Use the
            `placement` prop to control where the Popper appears relative to its
            anchor element. Options include:
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
            The Popper component inherits styles from the Sistent theme. You can
            customize the appearance by applying styles to the content inside
            the Popper. For instance:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button
                variant="contained"
                label="Toggle Popper"
                size="medium"
                onClick={handleClick}
              />
              <Popper open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  The content of the Popper.
                </Box>
              </Popper>
            </SistentThemeProvider>
          </Row>
          <p>
            Ensure that the styling aligns with your application's theme for a
            cohesive look and feel.
          </p>

          <a id="Accessibility">
            <h3>Accessibility</h3>
          </a>
          <p>
            It’s important to ensure that the Popper component is accessible to
            all users. Here are some key considerations:
          </p>
          <ul>
            <li>
              Use appropriate <code>aria-</code> attributes to enhance screen
              reader compatibility, such as <code>aria-describedby</code> for
              tooltips.
            </li>
            <li>
              Ensure that the Popper is keyboard navigable, allowing users to
              open/close it using keyboard shortcuts.
            </li>
            <li>
              Provide sufficient contrast for the text and background colors to
              improve readability.
            </li>
          </ul>

          <a id="Performance">
            <h3>Performance Tips</h3>
          </a>
          <p>
            When using the Popper component, consider the following to optimize
            performance:
          </p>
          <ul>
            <li>
              Avoid excessive rendering by controlling when the Popper is
              opened. Use state management effectively to minimize unnecessary
              re-renders.
            </li>
            <li>
              For complex popper content, consider lazy loading non-critical
              elements to improve initial load times.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};
