import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Tabs, Tab, Box, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SistentTabs = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <SistentLayout title="Tabs">
      <div className="content">
        <a id="Identity">
          <h2>Tabs</h2>
        </a>
        <p>
          Tabs organize content across different screens, data sets, and other interactions.
          They allow users to navigate between different views within the same context,
          making it easy to explore and switch between related content sections.
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
            The <code>Tabs</code> component provides an intuitive way to organize and
            navigate between related content sections. It supports various configurations
            and is essential for creating organized user interfaces.
          </p>

          <a id="Simple Example">
            <h2>Simple Example</h2>
          </a>
          <p>
            Here's a basic example showing how tabs work with content panels:
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 600 }}>
                  <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="Dashboard" />
                    <Tab label="Analytics" />
                    <Tab label="Settings" />
                  </Tabs>
                  <TabPanel value={tabValue} index={0}>
                    <strong>Dashboard Content</strong><br/>
                    This is where you would display dashboard information and metrics.
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <strong>Analytics Content</strong><br/>
                    Here you can show charts, graphs, and analytical data.
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    <strong>Settings Content</strong><br/>
                    Configuration options and preferences would go here.
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Variations">
            <h2>Variations</h2>
          </a>

          <p>You can customize the Tabs as per your requirements by passing various props to the component</p>

          <h3>By Variant</h3>
          <ul>
            <li><p><b>Standard:</b> Default horizontal tabs with fixed positioning</p></li>
            <li><p><b>Scrollable:</b> Tabs that can scroll horizontally when overflowing</p></li>
            <li><p><b>Full Width:</b> Tabs that expand to fill the entire container width</p></li>
          </ul>

          <h3>By Orientation</h3>
          <ul>
            <li><p><b>Horizontal:</b> Standard left-to-right tab layout</p></li>
            <li><p><b>Vertical:</b> Top-to-bottom tab layout, perfect for sidebars</p></li>
          </ul>

          <h3>By Content</h3>
          <ul>
            <li><p><b>Text Only:</b> Tabs with only text labels</p></li>
            <li><p><b>Icon Only:</b> Tabs with only icons</p></li>
            <li><p><b>Icon + Text:</b> Tabs with both icons and text labels</p></li>
            <li><p><b>With Badges:</b> Tabs that can display notification badges</p></li>
          </ul>

          <h3>By State</h3>
          <ul>
            <li><p><b>Enabled:</b> Interactive tabs that users can click</p></li>
            <li><p><b>Disabled:</b> Non-interactive tabs that are grayed out</p></li>
            <li><p><b>Active:</b> The currently selected tab</p></li>
            <li><p><b>Inactive:</b> Non-selected tabs available for interaction</p></li>
          </ul>

          <h3>By Customization</h3>
          <ul>
            <li><p><b>Colored Tabs:</b> Custom indicator and text colors to match design system</p></li>
            <li><p><b>Controlled Tabs:</b> Programmatically controlled tab selection</p></li>
            <li><p><b>Wrapped Labels:</b> Tabs with longer labels that can wrap to multiple lines</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTabs;