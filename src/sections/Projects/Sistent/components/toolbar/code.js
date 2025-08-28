import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Toolbar, SistentThemeProvider, Button } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";

const codes = [
  `  <SistentThemeProvider>
       <Toolbar>
         <Button>Home</Button>
         <Button>Profile</Button>
         <Button>Settings</Button>
       </Toolbar>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar fixed>
         <Button><ArrowBackIcon /></Button>
         <Button><ArrowForwardIcon /></Button>
         <Button><RefreshIcon /></Button>
       </Toolbar>
        /* Further content goes here. */
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar variant="dense">
         <Button><HomeIcon /></Button>
         <Button><SearchIcon /></Button>
         <Button><SettingsIcon /></Button>
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
          <p>
            The following examples demonstrate how to implement various toolbar configurations
            in your application.
          </p>
          <a id="Basic Toolbar">
            <h2>Basic Toolbar</h2>
          </a>
          <p>
            The basic toolbar contains a set of buttons that represent key
            actions. Each button can perform a specific task when clicked.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar>
                  <Button>Home</Button>
                  <Button>Profile</Button>
                  <Button>Settings</Button>
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
            access to navigation. Use the <code>fixed</code> prop to create a toolbar that
            stays in place during scrolling.
          </p>
          <div className="showcase">
            <div style={{ height: "300px", position: "relative", overflow: "hidden" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar fixed>
                  <Button><ArrowBackIcon /></Button>
                  <Button><ArrowForwardIcon /></Button>
                  <Button><RefreshIcon /></Button>
                </Toolbar>
                <div style={{ height: "240px", overflowY: "auto", padding: "16px" }}>
                  <div style={{ height: "300px" }}>
                    <p>Scrollable content goes here...</p>
                    <p>More content...</p>
                    <p>Even more content...</p>
                    <p>Keep scrolling to see the toolbar stay fixed.</p>
                    <p><strong>Toolbar in Sistent:</strong> Provides a consistent and accessible way to group key actions for users at the top of your application.</p>
                  </div>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="fixed-toolbar" code={codes[1]} />
          </div>
          <a id="Dense Toolbar">
            <h2>Dense Toolbar</h2>
          </a>
          <p>
            Dense toolbars are more compact, saving vertical space. Use the <code>variant="dense"</code> prop
            to create a more compact toolbar.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar variant="dense">
                  <Button><HomeIcon /></Button>
                  <Button><SearchIcon /></Button>
                  <Button><SettingsIcon /></Button>
                </Toolbar>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="dense-toolbar" code={codes[2]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarCode;