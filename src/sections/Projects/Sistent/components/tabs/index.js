import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTab = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Tabs" >
      <div className="content">
        <a id="Identity">
          <h2>Tabs</h2>
        </a>
        <p>
          Tabs help organize content by separating it into multiple views where only one is visible at a time.
        </p>
        <div className="filterTabs">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tabs"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tabs")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tabs/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tabs/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tabs/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tabs/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Tabs allow users to navigate between different sections within the same context, keeping the interface clean and organized.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Different types of tabs exist to meet various use cases. Tabs can be structured based on their appearance and behavior.
          </p>
          <h3>Basic Tabs</h3>
          <p>
            Basic tabs are simple and only display content related to the selected tab.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Tab 1" className="active" />
              <TabButton title="Tab 2" />
              <TabButton title="Tab 3" />
            </SistentThemeProvider>
          </Row>
          <h3>Underlined Tabs</h3>
          <p>
            Underlined tabs feature an indicator below the active tab to signify selection.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Tab 1" className="active underline" />
              <TabButton title="Tab 2" className="underline" />
              <TabButton title="Tab 3" className="underline" />
            </SistentThemeProvider>
          </Row>
          <h3>Icon Tabs</h3>
          <p>
            Icon tabs combine icons with text labels to provide additional context.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Home" icon="home" className="active" />
              <TabButton title="Settings" icon="settings" />
              <TabButton title="Profile" icon="user" />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTab;
