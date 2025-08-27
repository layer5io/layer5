import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Toolbar, SistentThemeProvider, Button } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar>
         <Button disabled>Disabled</Button>
         <Button>Active</Button>
         <Button>Normal</Button>
       </Toolbar>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar variant="dense">
         <Button><HomeIcon /></Button>
         <Button><SearchIcon /></Button>
         <Button><SettingsIcon /></Button>
       </Toolbar>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Toolbar>
         <Button><AddIcon /></Button>
         <Button><EditIcon /></Button>
         <div style={{ marginLeft: "auto" }}>
           <Button><MoreVertIcon /></Button>
         </div>
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
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar fixed>
                  <Button><ArrowBackIcon /></Button>
                  <Button><ArrowForwardIcon /></Button>
                  <Button><RefreshIcon /></Button>
                </Toolbar>
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
            <CodeBlock name="dense-toolbar" code={codes[3]} />
          </div>

        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarCode;