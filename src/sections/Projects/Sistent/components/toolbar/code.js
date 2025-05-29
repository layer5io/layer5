import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Toolbar, SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
       <Toolbar>
         <button>Home</button>
         <button>Profile</button>
         <button>Settings</button>
       </Toolbar>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar fixed>
         <button>Back</button>
         <button>Forward</button>
         <button>Refresh</button>
       </Toolbar>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar>
         <button disabled>Disabled</button>
         <button>Active</button>
         <button>Normal</button>
       </Toolbar>
  </SistentThemeProvider>`,
];

const ToolbarCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Toolbar">
      <div className="content">
        <a id="Identity">
          <h2>Toolbar</h2>
        </a>
        <p>
          Toolbars provide quick access to commonly used actions grouped
          logically in a horizontal or vertical container.
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
          <a id="Basic Toolbar">
            <h2>Basic Toolbar</h2>
          </a>
          <p>
            The basic toolbar contains a set of buttons that represent key
            actions.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar>
                  <button>Home</button>
                  <button>Profile</button>
                  <button>Settings</button>
                </Toolbar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-toolbar" code={codes[0]} />
          </div>

          <a id="Fixed Toolbar">
            <h2>Fixed Toolbar</h2>
          </a>
          <p>
            Fixed toolbars remain visible when scrolling and provide persistent
            access to navigation.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar fixed>
                  <button>Back</button>
                  <button>Forward</button>
                  <button>Refresh</button>
                </Toolbar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="fixed-toolbar" code={codes[1]} />
          </div>

          <a id="States">
            <h2>States</h2>
          </a>
          <p>
            Toolbar buttons can have different states such as disabled or active.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar>
                  <button disabled>Disabled</button>
                  <button>Active</button>
                  <button>Normal</button>
                </Toolbar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="toolbar-states" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarCode;
