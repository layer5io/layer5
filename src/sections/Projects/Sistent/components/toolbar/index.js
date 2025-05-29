import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Toolbar } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import TabButton from "../../../../../reusecore/Button";

const ToolbarOverview = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("More");

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const options = ["Delete", "Download", "Share"];

  return (
    <SistentLayout title="Toolbar">
      <div className="content">
        <a id="Toolbar">
          <h2>Toolbar</h2>
        </a>
        <p>
          The Toolbar is a horizontal layout container used to organize and group actions or interactive elements. It helps streamline workflows and keeps related actions in one place.
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
            Toolbars are useful for combining different types of controls like buttons and menus. They are commonly found at the top of interfaces or sections to help users perform quick actions.
          </p>

          <h3>Basic Toolbar Example</h3>
          <p>
            Here's a basic example with two actions and a dropdown on the right:
          </p>

          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Toolbar>
                  <button style={btnStyle}>Add</button>
                  <button style={btnStyle}>Edit</button>
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "relative" }}>
                      <button style={btnStyle} onClick={toggleDropdown}>
                        {selectedOption} ▾
                      </button>
                      {dropdownOpen && (
                        <div style={dropdownStyle}>
                          {[selectedOption, ...options.filter(opt => opt !== selectedOption)].map(
                            (option, index) => (
                              <div
                                key={index}
                                style={dropdownItem}
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                </Toolbar>
              </SistentThemeProvider>
            </div>
          </div>

          <p>
            You can customize the items inside a Toolbar as needed. They support a mix of buttons, dropdowns, icons, and even search fields depending on your UI requirements.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

const btnStyle = {
  padding: "8px 12px",
  margin: "0 6px",
  border: "1px solid #ccc",
  background: "#fff",
  borderRadius: "4px",
  cursor: "pointer",
};

const dropdownStyle = {
  position: "absolute",
  top: "110%",
  right: 0,
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

const dropdownItem = {
  padding: "8px 12px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
  background: "#fff",
  color: "#000",
  font: "8px Arial, sans-serif",
};

export default ToolbarOverview;