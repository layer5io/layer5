import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Toolbar, Button } from "@sistent/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import TabButton from "../../../../../reusecore/Button";
import { Row, Col } from "../../../../../reusecore/Layout";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";


const getDropdownStyle = (isDark) => ({
  position: "absolute",
  right: 0,
  top: "100%",
  backgroundColor: isDark ? "#333" : "white",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  borderRadius: "4px",
  overflow: "hidden",
  zIndex: 1000,
});

const dropdownItem = {
  padding: "8px 16px",
  cursor: "pointer",
  minWidth: "120px",
  transition: "background-color 0.2s",
  whiteSpace: "nowrap",
};

const ToolbarOverview = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("More");
  const [selectedIcon, setSelectedIcon] = useState(<MoreVertIcon />);

  // Dropdown toggle and option select handlers
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleOptionClick = (option, icon) => {
    setSelectedOption(option);
    setSelectedIcon(icon);
    setDropdownOpen(false);
  };

  // Dropdown options
  const options = [
    { name: "Delete", icon: <DeleteIcon /> },
    { name: "Download", icon: <FileDownloadIcon /> },
    { name: "Share", icon: <ShareIcon /> }
  ];

  return (
    <SistentLayout title="Toolbar">
      <div className="content">
        <a id="Identity">
          <h2>Toolbar</h2>
        </a>
        <p>
          The Toolbar is a horizontal layout container used to organize and group actions or interactive elements.
          It helps streamline workflows and keeps related actions in one place, providing users with easy access
          to frequently used commands.
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
              location.pathname === "/projects/sistent/components/toolbar/guidance"
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
            onClick={() =>
              navigate("/projects/sistent/components/toolbar/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            Toolbars are essential UI components that provide convenient access to actions and tools.
            They can be placed at various locations within your interface and configured to suit different needs.
          </p>

          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Toolbars are commonly used in applications to provide quick access to frequently used functions.
            They can be customized with various controls including buttons, dropdowns, search fields, and more.<br />
            Some of the basic examples are shown below.
          </p>

          <h3>Standard Toolbar</h3>
          <p>
            A standard toolbar with basic action buttons:
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <Button><AddIcon /></Button>
                <Button><EditIcon /></Button>
                <Button><DeleteIcon /></Button>
              </Toolbar>
            </SistentThemeProvider>
          </Row>

          <h3>Navigation Toolbar</h3>
          <p>
            A toolbar for navigation controls:
          </p>

          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <Button><ArrowBackIcon /></Button>
                <Button><HomeIcon /></Button>
                <Button><ArrowForwardIcon /></Button>
              </Toolbar>
            </SistentThemeProvider>
          </Row>

          <h3>Toolbar with Dropdown</h3>
          <p>
            A toolbar with actions and a dropdown menu:
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Toolbar>
                <Button><AddIcon /></Button>
                <Button><EditIcon /></Button>
                <div style={{ position: "relative", marginLeft: "auto" }}>
                  <Button onClick={toggleDropdown}>
                    {selectedOption === "More" ? (
                      <>More <MoreVertIcon style={{ marginLeft: "4px" }} /></>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {selectedIcon}
                        {selectedOption}
                      </div>
                    )}
                  </Button>
                  {dropdownOpen && (
                    <div style={getDropdownStyle(isDark)}>
                      {options.map(
                        (option, index) => (
                          <div
                            key={index}
                            style={{
                              ...dropdownItem,
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                            onClick={() => handleOptionClick(option.name, option.icon)}
                          >
                            {React.cloneElement(option.icon, { fontSize: "small" })}
                            {option.name}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </Toolbar>
            </SistentThemeProvider>
          </Row>

          <h3>Search Toolbar</h3>
          <p>
            A toolbar with a search field and settings button:
          </p>

          <Row $Hcenter className="image-container">
            <Col sm={12}>
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
            </Col>
          </Row>

          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <p>
            Toolbars can be customized in various ways to fit your application's needs:
          </p>
          <ul>
            <li><strong>Fixed Position:</strong> Add the <code>fixed</code> prop to create a toolbar that stays in place during scrolling.</li>
            <li><strong>Density:</strong> Use <code>variant="dense"</code> for a more compact toolbar with less vertical padding.</li>
            <li><strong>Custom Content:</strong> Combine buttons, text fields, dropdowns, and other controls to create custom toolbar layouts.</li>
            <li><strong>Styling:</strong> Apply custom styles to match your application's design system.</li>
          </ul>

          <p>
            When designing toolbars, consider the user's workflow and prioritize the most frequently used actions
            to improve efficiency and usability.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ToolbarOverview;