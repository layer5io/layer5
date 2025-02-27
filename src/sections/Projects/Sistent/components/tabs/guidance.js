import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { Tabs, Tab, SistentThemeProvider } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TabsGuidance = () => {
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
            To implement tabs effectively in Layer5 projects, consider the following
            guidance on when and how to use them, as well as best practices for
            creating a cohesive user experience.
          </p>
          <a id="When to Use">
            <h2>When to Use</h2>
          </a>
          <p>
            Understanding when tabs are appropriate helps create interfaces that
            align with user expectations and optimize information architecture.
          </p>
          <h3>Content Organization</h3>
          <p>
            Use tabs when you need to organize related but distinct content into
            separate views. Tabs are ideal when users need to switch between different
            aspects of the same topic or feature without losing context.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Connection Details">
                  <p>Shows details of the selected connection</p>
                </Tab>
                <Tab label="Performance Metrics">
                  <p>Displays performance data for the connection</p>
                </Tab>
                <Tab label="Configuration">
                  <p>Provides configuration options</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Space Efficiency</h3>
          <p>
            Use tabs when screen real estate is limited and you need to present
            multiple sections of content without scrolling or navigating to new pages.
            This is particularly important in dashboard interfaces and control panels.
          </p>
          <h3>Section-Level Navigation</h3>
          <p>
            Tabs are appropriate for secondary navigation within a page or feature.
            They help users understand they're viewing different aspects of the same
            overall section or functionality.
          </p>
          <a id="When Not to Use">
            <h2>When Not to Use</h2>
          </a>
          <p>
            Tabs aren't suitable for all scenarios. Understanding their limitations
            helps ensure appropriate implementation.
          </p>
          <h3>Sequential Processes</h3>
          <p>
            Don't use tabs for steps in a sequential process or wizard. For these cases,
            use a stepper component instead, which better communicates progress and
            sequence.
          </p>
          <h3>Unrelated Content</h3>
          <p>
            Avoid using tabs for content that isn't clearly related. Users expect tab
            content to be connected by a common theme or purpose. For truly distinct
            content, consider separate pages or sections.
          </p>
          <h3>Critical Information</h3>
          <p>
            Don't hide critical information behind tabs if users need to see multiple
            pieces of information simultaneously for comparison or context.
          </p>
          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            Following these best practices ensures tabs are implemented effectively
            and consistently across Layer5 projects.
          </p>
          <h3>Clear Labeling</h3>
          <p>
            Tab labels should be concise, descriptive, and clearly communicate the
            content they contain. Use consistent terminology and avoid ambiguity
            between tab options.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Tabs defaultIndex={0}>
                <Tab label="Overview">
                  <p>High-level information</p>
                </Tab>
                <Tab label="Mesh Management">
                  <p>Specific tools for managing the mesh</p>
                </Tab>
                <Tab label="Analytics">
                  <p>Data analysis and reporting</p>
                </Tab>
              </Tabs>
            </SistentThemeProvider>
          </Row>
          <h3>Logical Organization</h3>
          <p>
            Organize tabs in a logical order, typically by frequency of use,
            importance, or in a natural sequence. Place the most commonly used
            tab first, and make it the default selected tab.
          </p>
          <h3>Limit Tab Count</h3>
          <p>
            Limit the number of tabs to avoid overwhelming users. Aim for 2-7 tabs
            in most cases. If you need more, consider reorganizing your content or
            implementing a different navigation pattern, such as vertical tabs or
            nested navigation.
          </p>
          <h3>Visual Distinction</h3>
          <p>
            Ensure active tabs are clearly distinguished from inactive ones through
            visual styling. Use multiple visual cues (not just color) to indicate
            the active state, such as underlines, borders, and font weight.
          </p>
          <h3>Consistent Content Structure</h3>
          <p>
            Maintain consistent padding, layout, and hierarchy within each tab's content
            area. This provides a cohesive experience as users switch between tabs.
          </p>
          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            Accessible tabs ensure all users can navigate and understand the interface,
            regardless of abilities or assistive technologies.
          </p>
          <h3>Keyboard Navigation</h3>
          <p>
            Ensure tabs can be navigated using a keyboard. Users should be able to:
          </p>
          <ul>
            <li>Move between tabs using arrow keys</li>
            <li>Activate a tab using Enter or Space</li>
            <li>Navigate to and from the tab content using Tab key</li>
          </ul>
          <h3>ARIA Implementation</h3>
          <p>
            Implement proper ARIA roles and attributes to ensure screen readers can
            interpret the tab interface correctly:
          </p>
          <ul>
            <li>Use role="tablist" for the container of tabs</li>
            <li>Use role="tab" for individual tab triggers</li>
            <li>Use role="tabpanel" for tab content containers</li>
            <li>Include aria-selected for the active state</li>
            <li>Use aria-controls to associate tabs with their panels</li>
          </ul>
          <h3>Focus Indicators</h3>
          <p>
            Ensure focus states are clearly visible, especially for keyboard users.
            Never remove focus indicators, as they're essential for accessibility.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TabsGuidance;