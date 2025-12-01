import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Tabs, Tab, Box, Typography } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
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
      id={`code-tabpanel-${index}`}
      aria-labelledby={`code-tab-${index}`}
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

const codes = {
  basic: `import { Tabs, Tab, Box, Typography } from "@sistent/sistent";

function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Dashboard" />
        <Tab label="Analytics" />
        <Tab label="Settings" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Dashboard Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Analytics Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Settings Content
      </TabPanel>
    </Box>
  );
}`,

  scrollable: `import { Tabs, Tab, Box } from "@sistent/sistent";

function ScrollableTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Tabs 
        value={value} 
        onChange={(e, newValue) => setValue(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Overview" />
        <Tab label="Performance" />
        <Tab label="Security" />
        <Tab label="Integrations" />
        <Tab label="Billing" />
        <Tab label="Team" />
      </Tabs>
    </Box>
  );
}`,

  fullWidth: `import { Tabs, Tab, Box } from "@sistent/sistent";

function FullWidthTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs 
        value={value} 
        onChange={(e, newValue) => setValue(newValue)}
        variant="fullWidth"
      >
        <Tab label="Profile" />
        <Tab label="Account" />
        <Tab label="Preferences" />
      </Tabs>
    </Box>
  );
}`,

  vertical: `import { Tabs, Tab, Box } from "@sistent/sistent";

function VerticalTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ 
      flexGrow: 1, 
      bgcolor: 'background.paper', 
      display: 'flex', 
      height: 300 
    }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="General" />
        <Tab label="Privacy" />
        <Tab label="Security" />
        <Tab label="Notifications" />
      </Tabs>
      <TabPanel value={value} index={0}>
        General Settings
      </TabPanel>
    </Box>
  );
}`,

  icon: `import { Tabs, Tab, Box } from "@sistent/sistent";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

function IconTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab icon={<HomeIcon />} label="Home" />
        <Tab icon={<SearchIcon />} label="Search" />
        <Tab icon={<FavoriteIcon />} label="Favorites" />
        <Tab icon={<PersonIcon />} label="Profile" />
      </Tabs>
    </Box>
  );
}`,

  disabled: `import { Tabs, Tab } from "@sistent/sistent";

function DisabledTabs() {
  const [value, setValue] = useState(0);

  return (
    <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
      <Tab label="Basic Plan" />
      <Tab label="Pro Features" disabled />
      <Tab label="Enterprise" disabled />
      <Tab label="Support" />
    </Tabs>
  );
}`,

  colors: `import { Tabs, Tab, Box } from "@sistent/sistent";

function ColoredTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs 
        value={value} 
        onChange={(e, newValue) => setValue(newValue)}
        indicatorColor="secondary"
        textColor="secondary"
        sx={{
          '& .MuiTab-root': {
            color: '#1976d2', // Custom blue color
          },
          '& .Mui-selected': {
            color: '#d81b60', // Custom pink color for selected
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#d81b60', // Pink indicator
          }
        }}
      >
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Settings" />
      </Tabs>
    </Box>
  );
}`,

  controlled: `import { Tabs, Tab, Box, Button } from "@sistent/sistent";

function ControlledTabs() {
  const [value, setValue] = useState(0);

  const handleNext = () => {
    setValue((prev) => (prev + 1) % 3);
  };

  return (
    <Box>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Step 1" />
        <Tab label="Step 2" />
        <Tab label="Step 3" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        <Button onClick={handleNext}>Next Step</Button>
      </Box>
    </Box>
  );
}`,

  wrapped: `import { Tabs, Tab, Box } from "@sistent/sistent";

function WrappedLabelTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs 
        value={value} 
        onChange={(e, newValue) => setValue(newValue)}
        sx={{
          '& .MuiTab-root': {
            minHeight: 72,
            alignItems: 'center',
            whiteSpace: 'normal',
            textAlign: 'center'
          }
        }}
      >
        <Tab label="User Management and Permissions" />
        <Tab label="Data Analytics and Reporting" />
        <Tab label="System Configuration" />
      </Tabs>
    </Box>
  );
}`
};

const SistentTabsCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  // State for different tab examples
  const [basicValue, setBasicValue] = useState(0);
  const [scrollableValue, setScrollableValue] = useState(0);
  const [fullWidthValue, setFullWidthValue] = useState(0);
  const [verticalValue, setVerticalValue] = useState(0);
  const [iconValue, setIconValue] = useState(0);
  const [disabledValue, setDisabledValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);
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
          Here are code examples for all different variations and props of the Tabs component.
          Each example shows the implementation with a live preview and copyable code.
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

          <a id="Basic Tabs">
            <h2>Basic Tabs</h2>
          </a>
          <p>
            Standard horizontal tabs with controlled state and content panels.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs value={basicValue} onChange={(e, newValue) => setBasicValue(newValue)}>
                    <Tab label="Dashboard" />
                    <Tab label="Analytics" />
                    <Tab label="Settings" />
                  </Tabs>
                  <TabPanel value={basicValue} index={0}>
                    Dashboard Content
                  </TabPanel>
                  <TabPanel value={basicValue} index={1}>
                    Analytics Content
                  </TabPanel>
                  <TabPanel value={basicValue} index={2}>
                    Settings Content
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-tabs" code={codes.basic} />
          </div>

          <a id="Scrollable Tabs">
            <h2>Scrollable Tabs</h2>
          </a>
          <p>
            Tabs that can scroll horizontally when content overflows the container width.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ maxWidth: 400 }}>
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
                  </Tabs>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="scrollable-tabs" code={codes.scrollable} />
          </div>

          <a id="Full Width Tabs">
            <h2>Full Width Tabs</h2>
          </a>
          <p>
            Tabs that expand to fill the entire width of their container.
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
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="fullwidth-tabs" code={codes.fullWidth} />
          </div>

          <a id="Vertical Tabs">
            <h2>Vertical Tabs</h2>
          </a>
          <p>
            Tabs arranged vertically, perfect for sidebar navigation.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 250,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1
                }}
                >
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
                  </Tabs>
                  <TabPanel value={verticalValue} index={0}>General Settings</TabPanel>
                  <TabPanel value={verticalValue} index={1}>Privacy Settings</TabPanel>
                  <TabPanel value={verticalValue} index={2}>Security Settings</TabPanel>
                  <TabPanel value={verticalValue} index={3}>Notification Settings</TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="vertical-tabs" code={codes.vertical} />
          </div>

          <a id="Icon Tabs">
            <h2>Icon Tabs</h2>
          </a>
          <p>
            Tabs enhanced with icons for better visual context and usability.
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
                    Home Content
                  </TabPanel>
                  <TabPanel value={iconValue} index={1}>
                    Search Content
                  </TabPanel>
                  <TabPanel value={iconValue} index={2}>
                    Favorites Content
                  </TabPanel>
                  <TabPanel value={iconValue} index={3}>
                    Profile Content
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="icon-tabs" code={codes.icon} />
          </div>

          <a id="Disabled Tabs">
            <h2>Disabled Tabs</h2>
          </a>
          <p>
            Individual tabs can be disabled to indicate unavailable functionality.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Tabs value={disabledValue} onChange={(e, newValue) => setDisabledValue(newValue)}>
                  <Tab label="Basic Plan" />
                  <Tab label="Pro Features" disabled />
                  <Tab label="Enterprise" disabled />
                  <Tab label="Support" />
                </Tabs>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="disabled-tabs" code={codes.disabled} />
          </div>

          <a id="Colored Tabs">
            <h2>Colored Tabs</h2>
          </a>
          <p>
            Customize the indicator and text colors to match your design system.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <Tabs
                    value={colorValue}
                    onChange={(e, newValue) => setColorValue(newValue)}
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
                  <TabPanel value={colorValue} index={0}>
                    Home Content with Custom Colors
                  </TabPanel>
                  <TabPanel value={colorValue} index={1}>
                    Profile Content with Custom Colors
                  </TabPanel>
                  <TabPanel value={colorValue} index={2}>
                    Settings Content with Custom Colors
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="colored-tabs" code={codes.colors} />
          </div>

          <a id="Controlled Tabs">
            <h2>Controlled Tabs with External Controls</h2>
          </a>
          <p>
            Programmatically control which tab is active using external buttons or logic.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Box>
                  <Tabs value={controlledValue} onChange={(e, newValue) => setControlledValue(newValue)}>
                    <Tab label="Step 1" />
                    <Tab label="Step 2" />
                    <Tab label="Step 3" />
                  </Tabs>
                  <Box sx={{ mt: 2 }}>
                    <TabButton
                      onClick={handleControlledNext}
                    >
                      Next Step
                    </TabButton>
                  </Box>
                  <TabPanel value={controlledValue} index={0}>
                    Step 1 Content
                  </TabPanel>
                  <TabPanel value={controlledValue} index={1}>
                    Step 2 Content
                  </TabPanel>
                  <TabPanel value={controlledValue} index={2}>
                    Step 3 Content
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="controlled-tabs" code={codes.controlled} />
          </div>

          <a id="Wrapped Labels Tabs">
            <h2>Wrapped Labels Tabs</h2>
          </a>
          <p>
            Tabs with longer labels that can wrap to multiple lines when needed.
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
                    User Management Content
                  </TabPanel>
                  <TabPanel value={wrappedValue} index={1}>
                    Analytics Content
                  </TabPanel>
                  <TabPanel value={wrappedValue} index={2}>
                    Configuration Content
                  </TabPanel>
                </Box>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="wrapped-tabs" code={codes.wrapped} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTabsCode;
