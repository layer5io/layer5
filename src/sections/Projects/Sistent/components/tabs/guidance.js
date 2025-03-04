import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TabGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Tab">
      <div className="content">
        <a id="Identity">
          <h2>Tab</h2>
        </a>
        <p>
          Tabs allow users to switch between different views or sections within the same page without navigating away.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tab"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tab")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tab/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tab/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/tab/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/tab/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            Tabs provide a way to organize and structure content efficiently, making it easier for users to navigate without reloading the page.
          </p>
          <h3>Primary Tab</h3>
          <p>
            The primary tab is the default selected tab that provides immediate access to the main content of a section.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Primary Tab" className="active" />
            </SistentThemeProvider>
          </Row>
          <h3>Secondary Tab</h3>
          <p>
            Secondary tabs help users explore additional options while maintaining a connection with the primary tab content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Secondary Tab" />
            </SistentThemeProvider>
          </Row>
          <h3>Disabled Tab</h3>
          <p>
            A disabled tab indicates that the content is not accessible at the moment, preventing users from interacting with it.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <TabButton title="Disabled Tab" disabled />
            </SistentThemeProvider>
          </Row>
          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            Clear and concise labels should be used for tabs to provide users with an intuitive understanding of their purpose.
          </p>
          <h3>Font Weight</h3>
          <p>
            Text inside tabs should be legible and consistent in style, with emphasis where necessary to indicate active selection.
          </p>
          <h3>Content</h3>
          <p>
            Keep tab labels short and descriptive, ensuring that users can quickly understand the content within each section.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TabGuidance;