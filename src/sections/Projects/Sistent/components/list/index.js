import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, List, ListItem, ListItemText, ListSubheader,ListItemButton, ListItemIcon, ListItemAvatar, Divider } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import {  Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";

const SistentList = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="List">
      <div className="content">
        <a id="Identity">
          <h2>List</h2>
        </a>
        <p>
          Lists are essential UI elements that allow items to be organized sequentially in a structured and readable way. They help users view, select, and interact with multiple items conveniently.
        </p>
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/list" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>The List component is a flexible and structured container for organizing content in vertical layouts. It supports various child components, such as List Items, Icons, Avatars, Buttons, and Subheaders, making it ideal for creating navigational menus, data displays, or interactive content groups.</p>
          <p>
            The List component is designed to:
          </p>
          <ul>
            <li><strong>Organize Content:</strong> Provides a structured vertical layout for related items.</li>
            <li><strong>Interactive Elements:</strong> Add actionable buttons and components to enhance user interaction.</li>
            <li><strong>Customizable Design:</strong> Offers size variations, dense modes, and alignment options.</li>
            <li><strong>Accessibility:</strong> Ensures keyboard navigation and visual feedback for enhanced usability.</li>
          </ul>
          <p>
            Components Overview:
          </p>
          <ul>
            <li>List Item: Represents an individual item within the list.</li>
            <li>List Item Button: A clickable button within a list item.</li>
            <li>List Item Icon: Displays an icon associated with a list item.</li>
            <li>List Item Avatar: Adds an avatar for visual representation within the list item.</li>
            <li>List Item Text: Contains the primary and secondary text within a list item.</li>
            <li>List Subheader: Provides a labeled header for grouping related list items.</li>
          </ul>

          <a id="Types of List component">
            <p><h3> Types of List component </h3></p>
          </a>
          <a id="List">
            <h4>1. List</h4>
          </a>
          <p>The base container for organizing related content in vertical layouts.</p>
          <p><strong>Basic Usage:</strong></p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

              <List>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item 3" />
                </ListItem>
              </List>

            </SistentThemeProvider>
          </Row>

          <a id="List Item">
            <h4>2. List Item</h4>
          </a>
          <p>
            Represents an individual entry in a list. Includes primary and optional secondary text.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Primary Item" secondary="Layer5 Sistent Supporting text" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Another Item" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
          <a id="List Item Button">
            <h4>3. List Item Button</h4>
          </a>
          <p>
            Adds interactivity to list items, making them actionable.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List>
                <ListItemButton onClick={() => {}}>
                Layer5 Sistent Action Item 1
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                Layer5 Sistent Action Item2
                </ListItemButton>
              </List>
            </SistentThemeProvider>
          </Row>

          <a id="List with Icons">
            <h4>4. List with Icons</h4>
          </a>
          <p>
            Icons can be added to list items to enhance visual interest and provide additional meaning for each item. Enhances list items with visual elements for better context.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List>
                <ListItem>
                  <ListItemIcon><StarIcon /></ListItemIcon>
                  <ListItemText primary="Layer5 Sistent Starred" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                  <ListItemText primary="Layer5 Sistent Calendar" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><NotificationsIcon /></ListItemIcon>
                  <ListItemText primary="Layer5 Sistent Notification" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckIcon /></ListItemIcon>
                  <ListItemText primary="Layer5 Sistent Completed Task" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CloseIcon /></ListItemIcon>
                  <ListItemText primary="Layer5 Sistent Incomplete Task" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
          <a id="List with Avatars">
            <h4>5. List with Avatars</h4>
          </a>
          <p>
            Avatars can be added to list items, which is particularly useful for representing people or items visually. Visually represents items with avatars for a user-friendly interface.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List>
                <ListItem>
                  <ListItemAvatar><PersonIcon /></ListItemAvatar>
                  <ListItemText primary="Layer5 Sistent User 1" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar><EngineeringIcon /></ListItemAvatar>
                  <ListItemText primary="Layer5 Sistent User 2" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
          <a id="List Subheader">
            <h4>6. List Subheader</h4>
          </a>
          <p>
            Subheaders provide a way to label groups within a list, adding clarity and helping users navigate content. Groups and labels items within a list for better navigation and organization.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List>
                <ListSubheader>Section 1</ListSubheader>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item A" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item B" />
                </ListItem>
                <Divider />
                <ListSubheader>Section 2</ListSubheader>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item C" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Layer5 Sistent Item D" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};
export default SistentList;
