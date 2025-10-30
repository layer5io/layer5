import React, { useState, useMemo } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Collapse, Button } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentCollapse = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(true);

  // Memoize the active tab to prevent unnecessary re-renders
  const activeTab = useMemo(() => {
    const path = location.pathname;
    if (path.endsWith("/code")) return "code";
    if (path.endsWith("/guidance")) return "guidance";
    return "overview";
  }, [location.pathname]);

  // Handle tab change
  const handleTabChange = (tab) => {
    const basePath = "/projects/sistent/components/collapse";
    const newPath = tab === "overview" ? basePath : `${basePath}/${tab}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  };

  return (
    <SistentLayout title="Collapse">
      <div className="content" style={{ padding: "2rem 0" }}>
        <a id="Identity" style={{ display: "block", marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Collapse</h2>
        </a>
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
          The Collapse component allows you to create collapsible content areas that can be toggled to show or hide content. It's commonly used for FAQs, accordions, and other UI elements where space needs to be managed efficiently.
        </p>

        <div className="filterBtns" style={{ marginBottom: "2.5rem" }}>
          <TabButton
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => handleTabChange("overview")}
            title="Overview"
          />
          <TabButton
            className={activeTab === "guidance" ? "active" : ""}
            onClick={() => handleTabChange("guidance")}
            title="Guidance"
          />
          <TabButton
            className={activeTab === "code" ? "active" : ""}
            onClick={() => handleTabChange("code")}
            title="Code"
          />
        </div>

        <div className="main-content" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "1rem" }}>
            The Collapse component provides a smooth, animated way to show and hide content. It's particularly useful for creating space-efficient interfaces and progressive disclosure of information.
          </p>

          <div style={{ marginBottom: "1rem" }}>
            <a id="Basic Collapse" style={{ display: "block" }}>
              <h2 style={{ marginBottom: "1.3rem", fontSize: "1.5rem" }}>Basic Collapse</h2>
            </a>
            <p>
          A simple collapsible section that can be toggled with a button click.
            </p>
            <Row $Vcenter $Hcenter style={{ flexDirection: "column", gap: "1rem" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  variant="contained"
                  onClick={() => setExpanded(!expanded)}
                  style={{ marginBottom: "1rem" }}
                >
                  {expanded ? "Collapse" : "Expand"}
                </Button>
                <Collapse in={expanded}>
                  <div style={{
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: isDark ? "#333" : "#f5f5f5"
                  }}>
                  This content will be collapsed/expanded with a smooth animation.
                  You can put any content here, including other React components.
                  </div>
                </Collapse>
              </SistentThemeProvider>
            </Row>

          </div>

          <div style={{ marginBottom: "1rem" }}>
            <a id="Default Expanded" style={{ display: "block" }}>
              <h2 style={{ marginBottom: "1.3rem", fontSize: "1.5rem" }}>Default Expanded</h2>
            </a>
            <p>
          A collapsible section that starts expanded by default.
            </p>
            <Row $Vcenter $Hcenter style={{ flexDirection: "column", gap: "1rem" }}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  variant="outlined"
                  onClick={() => setExpanded2(!expanded2)}
                  style={{ marginBottom: "1rem" }}
                >
                  {expanded2 ? "Collapse" : "Expand"}
                </Button>
                <Collapse in={expanded2}>
                  <div style={{
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: isDark ? "#333" : "#f5f5f5"
                  }}>
                  This content is expanded by default. Click the button to collapse it.
                  </div>
                </Collapse>
              </SistentThemeProvider>
            </Row>
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCollapse;