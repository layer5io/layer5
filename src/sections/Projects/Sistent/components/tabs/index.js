import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Tabs, Tab } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTabs = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Tabs">
      <div className="content">
        <a id="Identity">
          <h2>Tabs</h2>
        </a>
        <p>
          Tabs are UI components that organize content into separate views which
          users can navigate between without changing pages, making complex
          interfaces more manageable and focused.
        </p>
        <div className="filterBtns">
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
              location.pathname ===
              "/projects/sistent/components/tabs/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/tabs/guidance")
            }
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
            Tabs create an efficient way to navigate between related sections of content
            while preserving screen real estate. They maintain context and reduce
            cognitive load by showing only one content section at a time while keeping
            other sections accessible through visible tab headers.
          </p>
          <a id="Structure">
            <h2>Structure</h2>
          </a>
          <p>
            The Tab implementation in Layer5 projects consists of two key components 
            that work together to create intuitive navigation patterns.
          </p>
          <h3>Tabs Container</h3>
          <p>
            The Tabs component serves as the container and controller for a set of 
            individual Tab components. It manages which tab is active and handles 
            the display of the corresponding content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="First Tab">
                  <p>Content for the first tab</p>
                </Tab>
                <Tab label="Second Tab">
                  <p>Content for the second tab</p>
                </Tab>
                <Tab label="Third Tab">
                  <p>Content for the third tab</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Individual Tabs</h3>
          <p>
            Each Tab component represents a selectable section with its own content.
            Tabs have a label that users click to select and display the associated
            content. These labels can include text, icons, or both.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Tab with Text">
                  <p>This tab has a simple text label</p>
                </Tab>
                <Tab label={<span><i className="material-icons">settings</i> Tab with Icon</span>}>
                  <p>This tab has both an icon and text</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <a id="States">
            <h2>States</h2>
          </a>
          <p>
            Tabs have several visual states that indicate their current status and
            available interactions. These states help users understand which content
            is currently displayed and which tabs can be selected.
          </p>
          <h3>Active</h3>
          <p>
            The active tab highlights which content is currently displayed. This state
            is visually distinctive, typically using a combination of color, underlines,
            or borders to indicate selection.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Active Tab">
                  <p>This tab is currently active</p>
                </Tab>
                <Tab label="Inactive Tab">
                  <p>This tab is inactive</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Inactive</h3>
          <p>
            Inactive tabs represent content that is available but not currently displayed.
            They appear visually subdued compared to the active tab but still clearly
            interactive.
          </p>
          <h3>Disabled</h3>
          <p>
            Tabs can be disabled when their content is not currently available or applicable.
            Disabled tabs are visually muted and do not respond to user interaction.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Available Tab">
                  <p>This tab is available</p>
                </Tab>
                <Tab label="Disabled Tab" disabled={true}>
                  <p>This tab is disabled</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Hover & Focus</h3>
          <p>
            Hover and focus states provide visual feedback when users interact with
            tabs, enhancing usability and accessibility. These states should be
            visually distinct but not overpowering.
          </p>
          <a id="Variations">
            <h2>Variations</h2>
          </a>
          <p>
            Tabs can be implemented in different styles to fit the specific needs
            of various interfaces and content types.
          </p>
          <h3>Horizontal Tabs</h3>
          <p>
            The standard and most common implementation, with tabs arranged horizontally
            along the top of the content area. These work well in most situations and
            are familiar to users.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Overview">
                  <p>Overview content would be displayed here</p>
                </Tab>
                <Tab label="Details">
                  <p>Details content would be displayed here</p>
                </Tab>
                <Tab label="Settings">
                  <p>Settings content would be displayed here</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Responsive Tabs</h3>
          <p>
            For interfaces that need to adapt to different screen sizes, responsive
            tabs can transform based on available space. They may scroll horizontally
            or convert to a dropdown menu on smaller screens.
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Tabs defaultIndex={0}>
                  <Tab label="First">
                    <p>Content for responsive tab example</p>
                  </Tab>
                  <Tab label="Second">
                    <p>More content for responsive tab example</p>
                  </Tab>
                  <Tab label="Third">
                    <p>Additional content for responsive tab example</p>
                  </Tab>
                  <Tab label="Fourth">
                    <p>Content that might overflow on small screens</p>
                  </Tab>
                </Tabs>
              </SistentThemeProvider>
            </Col>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTabs;