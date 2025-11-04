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
      <div className="content">
        <a id="Identity">
          <h2>Collapse</h2>
        </a>
        <p>
          The Collapse component allows you to create collapsible content areas that can be toggled to show or hide content. It's commonly used for FAQs, accordions, and other UI elements where space needs to be managed efficiently.
        </p>

        <div className="filterBtns">
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

        <div className="main-content">
          <p>
            The Collapse component provides a smooth, animated way to show and hide content. It's particularly useful for creating space-efficient interfaces and progressive disclosure of information.
          </p>


          <a id="Basic Collapse">
            <h2>Basic Collapse</h2>
          </a>
          <p>
            A simple collapsible section that can be toggled with a button click.
          </p>
          <Row $Vcenter $Hcenter className="image-container" style={{ flexDirection: "column" }}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Collapse" : "Expand"}
              </Button>
              <Collapse in={expanded}>
                <div className="collapse-content">
                  This content will be collapsed/expanded with a smooth animation.
                  You can put any content here, including other React components.
                </div>
              </Collapse>
            </SistentThemeProvider>
          </Row>


          <a id="Default Expanded">
            <h2>Default Expanded</h2>
          </a>
          <p>
            A collapsible section that starts expanded by default.
          </p>
          <Row $Vcenter $Hcenter className="image-container" style={{ flexDirection: "column" }}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="outlined" onClick={() => setExpanded2(!expanded2)}>
                {expanded2 ? "Collapse" : "Expand"}
              </Button>
              <Collapse in={expanded2}>
                <div className="collapse-content">
                  This content is expanded by default. Click the button to collapse it.
                </div>
              </Collapse>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCollapse;