import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { SistentThemeProvider, Tabs, Tab, Box, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`demo-tabpanel-${index}`}
      aria-labelledby={`demo-tab-${index}`}
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

const TabsGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();


  const [standardValue, setStandardValue] = useState(0);
  const [scrollableValue, setScrollableValue] = useState(0);
  const [fullWidthValue, setFullWidthValue] = useState(0);
  const [verticalValue, setVerticalValue] = useState(0);
  const [iconValue, setIconValue] = useState(0);
  const [disabledValue, setDisabledValue] = useState(0);
  const [coloredValue, setColoredValue] = useState(0);
  const [controlledValue, setControlledValue] = useState(0);
  const [wrappedValue, setWrappedValue] = useState(0);

  const handleControlledNext = () => {
    setControlledValue((prev) => (prev + 1) % 3);
  };

  return (
    <SistentLayout title="Tabs">
      <div className="content">
        <a id="Identity">
          <h2>Tabs</h2>
        </a>
        <p>
          This guide shows you how to use different variations of the Tabs component
          effectively in your applications. Each variation serves specific use cases
          and design requirements.
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

          <a id="Standard Tabs">
            <h2>Standard Tabs</h2>
          </a>
          <p>
            The default tab layout with horizontal arrangement. Best for general navigation
            between related content sections when you have 3-7 tabs that fit comfortably
            in the available width.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs value={standardValue} onChange={(e, newValue) => setStandardValue(newValue)}>
                    <Tab label="Dashboard" />
                    <Tab label="Analytics" />
                    <Tab label="Reports" />
                    <Tab label="Settings" />
                  </Tabs>
                  <TabPanel value={standardValue} index={0}>
                    <strong>Dashboard</strong> - Overview of key metrics and recent activity
                  </TabPanel>
                  <TabPanel value={standardValue} index={1}>
                    <strong>Analytics</strong> - Detailed charts and performance data
                  </TabPanel>
                  <TabPanel value={standardValue} index={2}>
                    <strong>Reports</strong> - Generated reports and export options
                  </TabPanel>
                  <TabPanel value={standardValue} index={3}>
                    <strong>Settings</strong> - Configuration and preferences
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Scrollable Tabs">
            <h2>Scrollable Tabs</h2>
          </a>
          <p>
            When you have many tabs that don't fit in the available width, scrollable tabs
            provide navigation arrows. This prevents text truncation and maintains readability.
            Best for dashboards with multiple sections or detailed navigation.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 400 }}>
                  <Tabs
                    value={scrollableValue}
                    onChange={(e, newValue) => setScrollableValue(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab label="Overview" />
                    <Tab label="Performance" />
                    <Tab label="Security" />
                    <Tab label="Integrations" />
                    <Tab label="Billing" />
                    <Tab label="Team" />
                    <Tab label="Advanced" />
                  </Tabs>
                  <TabPanel value={scrollableValue} index={0}>
                    <strong>Overview</strong> - General information and status
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={1}>
                    <strong>Performance</strong> - Speed and optimization metrics
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={2}>
                    <strong>Security</strong> - Access control and permissions
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={3}>
                    <strong>Integrations</strong> - Connected services and APIs
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={4}>
                    <strong>Billing</strong> - Payment and subscription details
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={5}>
                    <strong>Team</strong> - User management and collaboration
                  </TabPanel>
                  <TabPanel value={scrollableValue} index={6}>
                    <strong>Advanced</strong> - Developer settings and customization
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Full Width Tabs">
            <h2>Full Width Tabs</h2>
          </a>
          <p>
            Tabs expand to fill the entire width of their container, distributing space
            evenly. Perfect for layouts where you want tabs to span the full width,
            typically with 2-4 tabs for optimal appearance.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 600 }}>
                  <Tabs
                    value={fullWidthValue}
                    onChange={(e, newValue) => setFullWidthValue(newValue)}
                    variant="fullWidth"
                  >
                    <Tab label="Profile" />
                    <Tab label="Account" />
                    <Tab label="Preferences" />
                  </Tabs>
                  <TabPanel value={fullWidthValue} index={0}>
                    <strong>Profile</strong> - Personal information and avatar settings
                  </TabPanel>
                  <TabPanel value={fullWidthValue} index={1}>
                    <strong>Account</strong> - Login credentials and security settings
                  </TabPanel>
                  <TabPanel value={fullWidthValue} index={2}>
                    <strong>Preferences</strong> - Application settings and customization
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Vertical Tabs">
            <h2>Vertical Tabs</h2>
          </a>
          <p>
            Vertical orientation is ideal for sidebar navigation or when horizontal space
            is limited. Common in admin panels, settings pages, and detailed configuration
            interfaces where you need more vertical space for content.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 300,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1
                }}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={verticalValue}
                    onChange={(e, newValue) => setVerticalValue(newValue)}
                    sx={{ borderRight: 1, borderColor: "divider", minWidth: 140 }}
                  >
                    <Tab label="General" />
                    <Tab label="Privacy" />
                    <Tab label="Security" />
                    <Tab label="Notifications" />
                    <Tab label="Advanced" />
                  </Tabs>
                  <TabPanel value={verticalValue} index={0}>
                    <strong>General Settings</strong><br/>
                    Basic configuration options and preferences for your account.
                  </TabPanel>
                  <TabPanel value={verticalValue} index={1}>
                    <strong>Privacy Settings</strong><br/>
                    Control who can see your information and activity.
                  </TabPanel>
                  <TabPanel value={verticalValue} index={2}>
                    <strong>Security Settings</strong><br/>
                    Manage passwords, two-factor authentication, and access controls.
                  </TabPanel>
                  <TabPanel value={verticalValue} index={3}>
                    <strong>Notification Settings</strong><br/>
                    Choose what notifications you receive and how you receive them.
                  </TabPanel>
                  <TabPanel value={verticalValue} index={4}>
                    <strong>Advanced Settings</strong><br/>
                    Developer options, API keys, and experimental features.
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Icon Tabs">
            <h2>Icon Tabs</h2>
          </a>
          <p>
            Enhance usability with icons that provide visual context. Icons can be used
            alone for compact layouts or combined with labels for better accessibility.
            Perfect for mobile interfaces or when space is at a premium.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs value={iconValue} onChange={(e, newValue) => setIconValue(newValue)}>
                    <Tab icon={<HomeIcon />} label="Home" />
                    <Tab icon={<SearchIcon />} label="Search" />
                    <Tab icon={<FavoriteIcon />} label="Favorites" />
                    <Tab icon={<PersonIcon />} label="Profile" />
                  </Tabs>
                  <TabPanel value={iconValue} index={0}>
                    <strong>Home</strong> - Main dashboard with overview information
                  </TabPanel>
                  <TabPanel value={iconValue} index={1}>
                    <strong>Search</strong> - Find and filter through your content
                  </TabPanel>
                  <TabPanel value={iconValue} index={2}>
                    <strong>Favorites</strong> - Your saved and bookmarked items
                  </TabPanel>
                  <TabPanel value={iconValue} index={3}>
                    <strong>Profile</strong> - Personal settings and account information
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Disabled Tabs">
            <h2>Disabled Tabs</h2>
          </a>
          <p>
            Some tabs can be disabled to indicate unavailable functionality or content
            that requires certain conditions to be met. Useful for progressive disclosure
            or when features depend on user permissions or subscription levels.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs value={disabledValue} onChange={(e, newValue) => setDisabledValue(newValue)}>
                    <Tab label="Basic Plan" />
                    <Tab label="Pro Features" disabled />
                    <Tab label="Enterprise" disabled />
                    <Tab label="Support" />
                  </Tabs>
                  <TabPanel value={disabledValue} index={0}>
                    <strong>Basic Plan</strong> - Features available in your current plan
                  </TabPanel>
                  <TabPanel value={disabledValue} index={1}>
                    <strong>Pro Features</strong> - Upgrade required to access these features
                  </TabPanel>
                  <TabPanel value={disabledValue} index={2}>
                    <strong>Enterprise</strong> - Contact sales for enterprise solutions
                  </TabPanel>
                  <TabPanel value={disabledValue} index={3}>
                    <strong>Support</strong> - Help documentation and contact information
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Colored Tabs">
            <h2>Colored Tabs</h2>
          </a>
          <p>
            Customize the indicator and text colors to match your design system. Use different
            color combinations to create visual hierarchy or match your brand colors.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs
                    value={coloredValue}
                    onChange={(e, newValue) => setColoredValue(newValue)}
                    indicatorColor="secondary"
                    textColor="secondary"
                    sx={{
                      "& .MuiTab-root": {
                        color: isDark ? "#90caf9" : "#1976d2",
                      },
                      "& .Mui-selected": {
                        color: isDark ? "#f48fb1" : "#d81b60",
                      },
                      "& .MuiTabs-indicator": {
                        backgroundColor: isDark ? "#f48fb1" : "#d81b60",
                      }
                    }}
                  >
                    <Tab label="Home" />
                    <Tab label="Profile" />
                    <Tab label="Settings" />
                  </Tabs>
                  <TabPanel value={coloredValue} index={0}>
                    <strong>Home</strong> - Main dashboard with custom colored tabs
                  </TabPanel>
                  <TabPanel value={coloredValue} index={1}>
                    <strong>Profile</strong> - User profile with secondary color theme
                  </TabPanel>
                  <TabPanel value={coloredValue} index={2}>
                    <strong>Settings</strong> - Application settings with brand colors
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Controlled Tabs">
            <h2>Controlled Tabs</h2>
          </a>
          <p>
            Programmatically control which tab is active using external buttons or logic.
            Useful for wizards, multi-step forms, or when you need to control navigation
            flow based on user actions or validation.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs value={controlledValue} onChange={(e, newValue) => setControlledValue(newValue)}>
                    <Tab label="Step 1" />
                    <Tab label="Step 2" />
                    <Tab label="Step 3" />
                  </Tabs>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <button
                      onClick={handleControlledNext}
                      style={{
                        padding: "8px 16px",
                        background: isDark ? "#1976d2" : "#1976d2",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                      }}
                    >
                      Next Step
                    </button>
                  </Box>
                  <TabPanel value={controlledValue} index={0}>
                    <strong>Step 1</strong> - Initial setup and configuration
                  </TabPanel>
                  <TabPanel value={controlledValue} index={1}>
                    <strong>Step 2</strong> - Data input and validation
                  </TabPanel>
                  <TabPanel value={controlledValue} index={2}>
                    <strong>Step 3</strong> - Review and confirmation
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Wrapped Labels Tabs">
            <h2>Wrapped Labels Tabs</h2>
          </a>
          <p>
            Tabs with longer labels that can wrap to multiple lines when needed. Useful when
            you have descriptive tab names that don't fit in a single line, while maintaining
            readability and accessibility.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs
                    value={wrappedValue}
                    onChange={(e, newValue) => setWrappedValue(newValue)}
                    sx={{
                      "& .MuiTab-root": {
                        minHeight: 72,
                        alignItems: "center",
                        whiteSpace: "normal",
                        textAlign: "center"
                      }
                    }}
                  >
                    <Tab label="User Management and Permissions" />
                    <Tab label="Data Analytics and Reporting" />
                    <Tab label="System Configuration" />
                  </Tabs>
                  <TabPanel value={wrappedValue} index={0}>
                    <strong>User Management and Permissions</strong> - Manage users, roles, and access controls
                  </TabPanel>
                  <TabPanel value={wrappedValue} index={1}>
                    <strong>Data Analytics and Reporting</strong> - View reports, analytics, and insights
                  </TabPanel>
                  <TabPanel value={wrappedValue} index={2}>
                    <strong>System Configuration</strong> - Configure system settings and preferences
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>When to Use Each Variation</h3>
          <ul>
            <li><p><b>Standard Tabs:</b> Use for 3-7 tabs in desktop layouts with sufficient horizontal space</p></li>
            <li><p><b>Scrollable Tabs:</b> Use when you have 5+ tabs or limited horizontal space</p></li>
            <li><p><b>Full Width Tabs:</b> Use for 2-4 important tabs in wide containers</p></li>
            <li><p><b>Vertical Tabs:</b> Use for sidebar navigation, admin panels, or settings pages</p></li>
            <li><p><b>Icon Tabs:</b> Use for mobile interfaces or when space is limited</p></li>
            <li><p><b>Disabled Tabs:</b> Use to show unavailable features or progressive disclosure</p></li>
            <li><p><b>Colored Tabs:</b> Use to match brand colors or create visual hierarchy</p></li>
            <li><p><b>Controlled Tabs:</b> Use for wizards, multi-step forms, or programmatic navigation</p></li>
            <li><p><b>Wrapped Labels Tabs:</b> Use when tab labels are longer and need multiple lines</p></li>
          </ul>

          <h3>Content Organization</h3>
          <ul>
            <li><p>Keep tab labels concise and descriptive (1-2 words when possible)</p></li>
            <li><p>Use consistent naming conventions across tabs</p></li>
            <li><p>Organize tabs in logical order of importance or user workflow</p></li>
            <li><p>Group related functionality within the same tab</p></li>
          </ul>

          <h3>Accessibility Guidelines</h3>
          <ul>
            <li><p>Ensure sufficient color contrast between active and inactive tabs</p></li>
            <li><p>Use descriptive labels that work well with screen readers</p></li>
            <li><p>Support keyboard navigation with arrow keys and tab key</p></li>
            <li><p>Provide clear focus indicators for keyboard users</p></li>
          </ul>

          <h3>Design Considerations</h3>
          <ul>
            <li><p>Maintain visual hierarchy with clear active/inactive states</p></li>
            <li><p>Use consistent spacing and alignment across all tabs</p></li>
            <li><p>Consider mobile responsiveness when choosing tab variants</p></li>
            <li><p>Test with real content to ensure tabs work with varying label lengths</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default TabsGuidance;