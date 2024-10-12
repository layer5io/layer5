import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Popper } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const SistentPopper = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
            Poppers are critical for displaying information dynamically and can
            be used in various scenarios like tooltips, dropdowns, and menus. By
            anchoring the content to a reference element, Poppers provide users
            with relevant information as they interact with the interface.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            The Popper component should be used in cases where context-sensitive
            information is necessary. Here are common use cases:
          </p>
          <ul>
            <li>Tooltips that provide additional information on hover.</li>
            <li>Dropdown menus for navigation or selections.</li>
            <li>Modals for confirmations or additional content.</li>
          </ul>
          <h3>Basic Example</h3>
          <p>
            Below is a simple example of how to use the Popper component to
            display content relative to a button.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Popper open={true} anchorEl={document.querySelector("button")}>
                <div>This is popper content!</div>
              </Popper>
            </SistentThemeProvider>
          </Row>
          <p>
            The `anchorEl` prop specifies the element to which the Popper will
            be anchored. The `open` prop controls its visibility.
          </p>
          <h2>Styling and Positioning</h2>
          <p>
            You can customize the positioning of the Popper using the
            `placement` prop to define where the Popper appears relative to the
            anchor element.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Popper
                open={true}
                anchorEl={document.querySelector("button")}
                placement="bottom"
              >
                <div>Popper positioned at the bottom!</div>
              </Popper>
            </SistentThemeProvider>
          </Row>
          <p>
            The above example demonstrates a Popper positioned below the
            reference button, providing flexibility in its placement.
          </p>
          <h2>Conclusion</h2>
          <p>
            The Popper component is essential for creating dynamic, contextually
            relevant interfaces that enhance user experience. By utilizing the
            Popper component effectively, developers can create intuitive and
            interactive web applications.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};
