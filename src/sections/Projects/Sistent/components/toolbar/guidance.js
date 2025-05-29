import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Toolbar, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ToolbarGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Toolbar">
      <div className="content">
        <a id="Identity">
          <h2>Toolbar</h2>
        </a>
        <p>
          A toolbar is a container for a set of controls or actions related to the current context or page.
          It helps users quickly access common functions or navigate within an application.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toolbar"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toolbar")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/toolbar/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/toolbar/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toolbar/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toolbar/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Toolbars group related commands and controls in a consistent
            horizontal or vertical layout, making it easier for users to find
            and use actions relevant to their current task.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Use toolbars to surface important actions such as navigation,
            formatting options, or filtering tools. They should be easy to
            scan and interact with.
          </p>
          <a id="Types">
            <h2>Types of Toolbars</h2>
          </a>
          <br></br>
          <h3>Fixed Toolbar</h3>
          <p>
            Fixed toolbars remain visible at the top or side of the screen while
            scrolling, providing persistent access to common actions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar fixed>
                <button>Home</button>
                <button>Search</button>
                <button>Settings</button>
              </Toolbar>
            </SistentThemeProvider>
          </Row>
          <h3>Contextual Toolbar</h3>
          <p>
            Contextual toolbars appear based on user selection or context, showing
            actions specific to the current content or state.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <button>Edit</button>
                <button>Delete</button>
                <button>Share</button>
              </Toolbar>
            </SistentThemeProvider>
          </Row>
          <br></br>
          <a id="Design">
            <h2>Design Considerations</h2>
          </a>
          <p>
            Keep toolbar controls minimal and relevant, group related buttons,
            and ensure clear visual feedback on hover and focus states.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarGuidance;
