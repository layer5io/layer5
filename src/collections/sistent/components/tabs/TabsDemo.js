import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button } from "@sistent/sistent";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

const TabsDemo = ({ type }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (type === "basic") {
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
  }

  if (type === "scrollable") {
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Tabs
          value={value}
          onChange={handleChange}
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
  }

  if (type === "fullWidth") {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Profile" />
          <Tab label="Account" />
          <Tab label="Preferences" />
        </Tabs>
      </Box>
    );
  }

  if (type === "vertical") {
    return (
      <Box sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 300,
        border: 1,
        borderColor: 'divider',
        borderRadius: 1
      }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: 140 }}
        >
          <Tab label="General" />
          <Tab label="Privacy" />
          <Tab label="Security" />
          <Tab label="Notifications" />
        </Tabs>
        <TabPanel value={value} index={0}>
          General Settings
        </TabPanel>
        <TabPanel value={value} index={1}>
          Privacy Settings
        </TabPanel>
        <TabPanel value={value} index={2}>
          Security Settings
        </TabPanel>
        <TabPanel value={value} index={3}>
          Notification Settings
        </TabPanel>
      </Box>
    );
  }

  if (type === "icon") {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<HomeIcon />} label="Home" />
          <Tab icon={<SearchIcon />} label="Search" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<PersonIcon />} label="Profile" />
        </Tabs>
        <TabPanel value={value} index={0}>
            Home Content
        </TabPanel>
        <TabPanel value={value} index={1}>
            Search Content
        </TabPanel>
        <TabPanel value={value} index={2}>
            Favorites Content
        </TabPanel>
        <TabPanel value={value} index={3}>
            Profile Content
        </TabPanel>
      </Box>
    );
  }

  if (type === "disabled") {
    return (
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Basic Plan" />
        <Tab label="Pro Features" disabled />
        <Tab label="Enterprise" disabled />
        <Tab label="Support" />
      </Tabs>
    );
  }

  if (type === "colored") {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          sx={{
             '& .MuiTab-root': { color: '#1976d2' },
             '& .Mui-selected': { color: '#d81b60' },
             '& .MuiTabs-indicator': { backgroundColor: '#d81b60' }
          }}
        >
          <Tab label="Home" />
          <Tab label="Profile" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
    );
  }

  if (type === "controlled") {
    const handleNext = () => {
      setValue((prev) => (prev + 1) % 3);
    };

    return (
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Step 1" />
          <Tab label="Step 2" />
          <Tab label="Step 3" />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleNext}>Next Step</Button>
        </Box>
        <TabPanel value={value} index={0}>
           Step 1 Content
        </TabPanel>
        <TabPanel value={value} index={1}>
           Step 2 Content
        </TabPanel>
        <TabPanel value={value} index={2}>
           Step 3 Content
        </TabPanel>
      </Box>
    );
  }

  if (type === "wrapped") {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
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
      </Box>
    );
  }

  return null;
};

export default TabsDemo;
