import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Tabs, Tab } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `
    <Tabs value={0} onChange={(event, newValue) => handleChange(newValue)}>
      <Tab label="Tab One" />
      <Tab label="Tab Two" />
      <Tab label="Tab Three" />
    </Tabs>
  `,
  `
    <Tabs variant="fullWidth" value={0}>
      <Tab label="Full Width Tab" />
    </Tabs>
    <Tabs variant="scrollable" scrollButtons value={0}>
      <Tab label="Scrollable Tab" />
    </Tabs>
  `,
  `
    <Tabs value={0}>
      <Tab icon={<Icon name="home" />} label="Home" />
      <Tab icon={<Icon name="settings" />} label="Settings" />
    </Tabs>
  `
];

const TabCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <SistentLayout title="Tabs">
      <div className="content">
        <a id="Identity">
          <h2>Tabs</h2>
        </a>
        <p>
          The Tabs component allows users to navigate between different views in the same context.
        </p>
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/tabs" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/tabs")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/tabs/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/tabs/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/tabs/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/tabs/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Basic Tabs">
            <h3>Basic Tabs</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                  <Tab label="Tab One" />
                  <Tab label="Tab Two" />
                  <Tab label="Tab Three" />
                </Tabs>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-tabs" code={codes[0]} />
          </div>

          <a id="Variant Tabs">
            <h3>Tabs Variants</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Tabs variant="fullWidth" value={0}>
                  <Tab label="Full Width Tab" />
                </Tabs>
                <Tabs variant="scrollable" scrollButtons value={0}>
                  <Tab label="Scrollable Tab" />
                </Tabs>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="variant-tabs" code={codes[1]} />
          </div>
          
          <a id="Tabs with Icons">
            <h3>Tabs with Icons</h3>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Tabs value={0}>
                  <Tab icon={<Icon name="home" />} label="Home" />
                  <Tab icon={<Icon name="settings" />} label="Settings" />
                </Tabs>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="tabs-with-icons" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TabCode;
