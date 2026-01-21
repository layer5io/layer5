import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Box, Button, Drawer, List, ListItem, SistentThemeProvider, Typography } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListIcon from "@mui/icons-material/FilterList";

const DrawerGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [navOpen, setNavOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);

  return (
    <SistentLayout title="Drawer">
      <div className="content">
        <a id="Identity">
          <h2>Drawer</h2>
        </a>
        <p>
          This guide provides comprehensive information on when and how to use
          drawers effectively in your applications.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/drawer/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/drawer/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/drawer/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/drawer/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Drawers provide access to destinations and app functionality without navigating away from the current page. They help organize secondary content and actions, making your interface cleaner and more focused.
          </p>
          <ul>
            <li>Use drawers for navigation menus in mobile and responsive applications</li>
            <li>Organize filters and sorting options that need to be accessible but not always visible</li>
            <li>Present settings panels that complement the main interface</li>
            <li>Display contextual information without disrupting the user's workflow</li>
          </ul>

          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            A simple navigation drawer that slides in from the left side of the screen.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Button
                  onClick={() => setNavOpen(true)}
                  variant="contained"
                  startIcon={<MenuIcon />}
                  label="Open Navigation"
                />
                <Drawer open={navOpen} onClose={() => setNavOpen(false)}>
                  <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Main Menu</Typography>
                    <List>
                      <ListItem><Typography>Home</Typography></ListItem>
                      <ListItem><Typography>Products</Typography></ListItem>
                      <ListItem><Typography>Services</Typography></ListItem>
                      <ListItem><Typography>About</Typography></ListItem>
                      <ListItem><Typography>Contact</Typography></ListItem>
                    </List>
                  </Box>
                </Drawer>
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="When to Use">
            <h2>When to Use</h2>
          </a>
          <p>
            Drawers are best suited for specific use cases where content needs to be accessible but not always visible. Here are common scenarios:
          </p>

          <h3>Navigation Menus</h3>
          <p>
            Drawers are ideal for primary navigation in mobile and responsive applications, providing access to main sections without cluttering the interface.
          </p>

          <h3>Settings and Configuration</h3>
          <p>
            Use right-anchored drawers for settings panels that allow users to configure preferences without leaving their current context.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Button
                  onClick={() => setSettingsOpen(true)}
                  variant="outlined"
                  startIcon={<SettingsIcon />}
                  label="Settings"
                />
                <Drawer anchor="right" open={settingsOpen} onClose={() => setSettingsOpen(false)}>
                  <Box sx={{ width: 280, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Settings</Typography>
                    <List>
                      <ListItem><Typography>Account</Typography></ListItem>
                      <ListItem><Typography>Preferences</Typography></ListItem>
                      <ListItem><Typography>Notifications</Typography></ListItem>
                      <ListItem><Typography>Privacy</Typography></ListItem>
                    </List>
                  </Box>
                </Drawer>
              </div>
            </SistentThemeProvider>
          </Row>

          <h3>Filters and Sorting</h3>
          <p>
            Drawers work well for filter panels in e-commerce or data-heavy applications, allowing users to refine content without losing their place.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Button
                  onClick={() => setFilterOpen(true)}
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  label="Filters"
                />
                <Drawer open={filterOpen} onClose={() => setFilterOpen(false)}>
                  <Box sx={{ width: 260, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Filter Options</Typography>
                    <List>
                      <ListItem><Typography>Category</Typography></ListItem>
                      <ListItem><Typography>Price Range</Typography></ListItem>
                      <ListItem><Typography>Brand</Typography></ListItem>
                      <ListItem><Typography>Rating</Typography></ListItem>
                    </List>
                  </Box>
                </Drawer>
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            Follow these guidelines to ensure drawers are effective and user-friendly:
          </p>
          <ul>
            <li>
              <strong>Clear Purpose:</strong> Use drawers for navigation, filters, or supplementary content. Avoid using them for critical actions or primary content.
            </li>
            <li>
              <strong>Appropriate Width:</strong> Keep drawer width between 240-360px on desktop. On mobile, drawers can be up to 80% of screen width.
            </li>
            <li>
              <strong>Positioning:</strong> Use left anchors for primary navigation, right anchors for settings/filters, and top/bottom for mobile-specific patterns.
            </li>
            <li>
              <strong>Responsive Behavior:</strong> Use temporary drawers on mobile (&lt; 960px) and consider persistent or permanent drawers on desktop (&gt; 960px).
            </li>
            <li>
              <strong>Keyboard Support:</strong> Ensure drawers can be opened/closed with keyboard (Escape key) and focus is managed properly.
            </li>
            <li>
              <strong>Clear Dismissal:</strong> Provide multiple ways to close temporary drawers: backdrop click, close button, or Escape key.
            </li>
            <li>
              <strong>Content Organization:</strong> Keep drawer content focused and well-organized. Use lists, dividers, and headers to structure information.
            </li>
            <li>
              <strong>Performance:</strong> Lazy load drawer content when possible to improve initial page load performance.
            </li>
            <li>
              <strong>Accessibility:</strong> Use proper ARIA labels, manage focus trap within the drawer, and ensure screen reader compatibility.
            </li>
            <li>
              <strong>Animation:</strong> Use smooth slide-in/out transitions. Avoid overly long animations that slow down user interactions.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DrawerGuidance;
