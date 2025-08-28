import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row, Col } from "../../../../../reusecore/Layout";
import { Toolbar, SistentThemeProvider, Button } from "@sistent/sistent";
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

const ToolbarGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [selectionType, setSelectionType] = useState("text"); // "text" or "image"

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
            For effective implementation, toolbars should be used consistently throughout
            the interface to provide users with predictable access to important actions.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            The function of toolbars determines how they should be used in
            different scenarios to provide users with quick access to actions and tools.
          </p>
          <h3>Navigation Toolbar</h3>
          <p>
            Navigation toolbars provide controls for moving between pages or sections
            of an application. They typically include back, forward, and home buttons.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <Button><ArrowBackIcon /></Button>
                <Button><ArrowForwardIcon /></Button>
                <Button><HomeIcon /></Button>
                <Button><RefreshIcon /></Button>
              </Toolbar>
            </SistentThemeProvider>
          </Row>
          <h3>Action Toolbar</h3>
          <p>
            Action toolbars contain buttons for performing operations on selected content
            or the current view. They often include functions like create, edit, delete, or share.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <Button><AddIcon /></Button>
                <Button><EditIcon /></Button>
                <Button><DeleteIcon /></Button>
                <div style={{ marginLeft: "auto" }}>
                  <Button><MoreVertIcon /></Button>
                </div>
              </Toolbar>
            </SistentThemeProvider>
          </Row>
          <h3>Search Toolbar</h3>
          <p>
            Search toolbars provide interfaces for finding content within an application.
            They typically include search fields and filtering options.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderRadius: "4px",
                  padding: "0 8px",
                  flex: 1,
                  maxWidth: "300px"
                }}>
                  <SearchIcon style={{ marginRight: "8px" }} />
                  <div style={{
                    height: "32px",
                    lineHeight: "32px",
                  }}>Search...</div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <Button><SettingsIcon /></Button>
                </div>
              </Toolbar>
            </SistentThemeProvider>
          </Row>

          <a id="Types">
            <h2>Types of Toolbars</h2>
          </a><p/>
          <h3>Fixed Toolbar</h3>
          <p>
            Fixed toolbars remain visible at the top or side of the screen while
            scrolling, providing persistent access to common actions.
          </p>
          <Row $Hcenter className="image-container">
            <div style={{ height: "300px", position: "relative", overflow: "hidden", width: "100%" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar fixed>
                  <Button><HomeIcon /></Button>
                  <Button><SearchIcon /></Button>
                  <Button><SettingsIcon /></Button>
                </Toolbar>
                <div style={{ height: "240px", overflowY: "auto", padding: "16px" }}>
                  <div style={{ height: "300px" }}>
                    <p><strong>Sistent Toolbar:</strong> The Sistent toolbar provides users with quick access to essential navigation and settings, ensuring a seamless experience across the application.</p>
                    <p>With a fixed position, the toolbar remains visible as you scroll, making key actions always accessible.</p>
                    <p>Use the Home icon to return to the dashboard, the Search icon to find resources, and the Settings icon to customize your preferences.</p>
                    <p>Sistent is designed for clarity, accessibility, and ease of use, helping users stay productive and focused.</p>
                  </div>
                </div>
              </SistentThemeProvider>
            </div>
          </Row>
          <h3>Contextual Toolbar</h3>
          <p>
            Contextual toolbars appear based on user selection or context, showing actions specific to the current content or state.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                {/* Toggle buttons for switching between text and image */}
                <div style={{
                  display: "flex",
                  borderRight: "1px solid",
                  marginRight: "8px",
                  paddingRight: "8px"
                }}>
                  <Button
                    onClick={() => setSelectionType("text")}
                  >
                    Text
                  </Button>
                  <Button
                    onClick={() => setSelectionType("image")}
                  >
                    Image
                  </Button>
                </div>

                {/* Dynamic toolbar options based on selection type */}
                {selectionType === "text" ? (
                  <>
                    <Button>Font</Button>
                    <Button>Size</Button>
                    <Button>Text Color</Button>
                  </>
                ) : (
                  <>
                    <Button>Crop</Button>
                    <Button>Replace Image</Button>
                    <Button>Size</Button>
                  </>
                )}
              </Toolbar>
            </SistentThemeProvider>
          </Row>

          <a id="Positioning">
            <h2>Positioning</h2>
          </a>
          <p>
            The positioning of toolbars affects usability and accessibility. Different
            positions work better for different types of applications and user behaviors.
          </p>
          <h3>Top Toolbar</h3>
          <p>
            Top toolbars are the most common placement and are easily discovered by users.
            They're ideal for primary navigation and actions.
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{
                  border: "1px solid",
                  borderRadius: "4px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto"
                }}>
                  <Toolbar style={{ borderBottom: "1px solid" }}>
                    <Button><HomeIcon /></Button>
                    <Button><SearchIcon /></Button>
                    <div style={{ marginLeft: "auto" }}>
                      <Button><SettingsIcon /></Button>
                    </div>
                  </Toolbar>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    Content Area
                  </div>
                </div>
              </SistentThemeProvider>
            </Col>
          </Row>
          <h3>Bottom Toolbar</h3>
          <p>
            Bottom toolbars are more accessible for mobile users as they're easier to reach
            with thumbs. They're good for common actions in mobile interfaces.
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{
                  border: "1px solid",
                  borderRadius: "4px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto"
                }}>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    Content Area
                  </div>
                  <Toolbar style={{ borderTop: "1px solid" }}>
                    <Button><HomeIcon /></Button>
                    <Button><SearchIcon /></Button>
                    <Button><AddIcon /></Button>
                    <Button><SettingsIcon /></Button>
                  </Toolbar>
                </div>
              </SistentThemeProvider>
            </Col>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            When implementing toolbars in your interface, consider these guidelines
            to ensure they're effective and user-friendly:
          </p>
          <ul>
            <li>
              <strong>Prioritize Actions:</strong> Include only the most important and frequently used
              actions in your toolbar to avoid overwhelming users.
            </li>
            <li>
              <strong>Group Related Actions:</strong> Organize buttons logically, keeping related
              actions together to improve discoverability.
            </li>
            <li>
              <strong>Use Icons With Labels:</strong> When space permits, include both icons and text
              labels to improve clarity and accessibility.
            </li>
            <li>
              <strong>Maintain Consistency:</strong> Use consistent positioning and styling for
              toolbars across your application to build user familiarity.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarGuidance;