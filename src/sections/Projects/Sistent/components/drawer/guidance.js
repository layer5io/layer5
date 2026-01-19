import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Box, Button, Drawer, List, ListItem, SistentThemeProvider, Typography } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListIcon from "@mui/icons-material/FilterList";

// Navigation drawer example component
const DrawerNavigationExample = ({ isDark }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
      <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          startIcon={<MenuIcon />}
          label="Open Navigation"
        />
        <Drawer open={open} onClose={() => setOpen(false)}>
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
      </SistentThemeProvider>
    </Box>
  );
};

// Settings drawer example component
const DrawerSettingsExample = ({ isDark }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
      <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          startIcon={<SettingsIcon />}
          label="Settings"
        />
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
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
      </SistentThemeProvider>
    </Box>
  );
};

// Filter drawer example component
const DrawerFilterExample = ({ isDark }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
      <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          startIcon={<FilterListIcon />}
          label="Filters"
        />
        <Drawer open={open} onClose={() => setOpen(false)}>
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
      </SistentThemeProvider>
    </Box>
  );
};

const DrawerGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

            <a id="when-to-use">
              <h2>When to Use Drawers</h2>
            </a>
            <p>
              Drawers are best suited for:
            </p>
            <ul>
              <li>Primary navigation menus in mobile and responsive applications</li>
              <li>Filtering and sorting options that need to be easily accessible but not always visible</li>
              <li>Settings panels that complement the main interface</li>
              <li>Secondary navigation or contextual information</li>
              <li>Multi-level navigation hierarchies</li>
            </ul>

            <a id="variant-selection">
              <h2>Choosing the Right Variant</h2>
            </a>

            <h3>Temporary Drawer</h3>
            <p>
              <strong>When to use:</strong> Mobile apps, responsive layouts, or when screen space is limited
            </p>
            <ul>
              <li>Overlays content with a backdrop</li>
              <li>Dismissed by clicking outside or pressing Escape</li>
              <li>Best for occasional access to navigation or settings</li>
              <li>Use temporary drawers for mobile and small tablet devices (&lt; 960px)</li>
            </ul>

            <h3>Persistent Drawer</h3>
            <p>
              <strong>When to use:</strong> Desktop apps where users frequently toggle navigation visibility
            </p>
            <ul>
              <li>Sits alongside content, pushing it to the side</li>
              <li>Remains open until explicitly closed</li>
              <li>State is remembered across sessions</li>
              <li>Best for desktop applications with screen widths &gt; 960px</li>
            </ul>

            <h3>Permanent Drawer</h3>
            <p>
              <strong>When to use:</strong> Desktop-first apps where navigation is always needed
            </p>
            <ul>
              <li>Always visible, cannot be closed</li>
              <li>Fixed at the edge of the viewport</li>
              <li>Best for large screens (&gt; 1280px) and complex applications</li>
              <li>Ideal for enterprise dashboards and multi-section interfaces</li>
            </ul>
            <a id="anchor-positions">
              <h2>Where to Position Drawers</h2>
            </a>

            <h3>Left Anchor</h3>
            <p>
              <strong>Best for:</strong> Primary navigation, main menus, hierarchical navigation
            </p>
            <ul>
              <li>Most common position for navigation drawers</li>
              <li>Natural reading flow in LTR (left-to-right) interfaces</li>
              <li>Consistent with user expectations for menu placement</li>
            </ul>

            <h3>Right Anchor</h3>
            <p>
              <strong>Best for:</strong> Settings, filters, shopping carts, detail panels
            </p>
            <ul>
              <li>Secondary or supplementary information</li>
              <li>Configuration and preferences</li>
              <li>Doesn't conflict with primary navigation on the left</li>
            </ul>

            <h3>Top and Bottom Anchors</h3>
            <p>
              <strong>Top:</strong> Notifications, alerts, expandable headers<br/>
              <strong>Bottom:</strong> Mobile action sheets, quick actions, mobile-optimized panels
            </p>

            <a id="best-practices">
              <h2>Best Practices</h2>
            </a>
            <br/>
            <h3>Content Organization</h3>
            <ul>
              <li>Keep drawer content focused on a single purpose</li>
              <li>Prioritize frequently used items at the top</li>
              <li>Group related items with visual separators</li>
              <li>Limit nesting to 2-3 levels maximum</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Ensure keyboard navigation works (Tab, Escape keys)</li>
              <li>Trap focus within the drawer when open</li>
              <li>Provide clear ARIA labels for screen readers</li>
              <li>Return focus to trigger element when closing</li>
            </ul>

            <h3>Responsive Behavior</h3>
            <ul>
              <li>Use temporary drawers on mobile (&lt; 960px)</li>
              <li>Consider persistent or permanent on desktop (&gt; 960px)</li>
              <li>Adjust drawer width based on screen size</li>
              <li>Test on actual devices, not just browser resize</li>
            </ul>

            <h3>User Experience</h3>
            <ul>
              <li>Make drawer triggers easily discoverable</li>
              <li>Provide smooth open/close animations</li>
              <li>Include a visible close button or clear dismiss method</li>
              <li>Maintain consistent behavior across your application</li>
            </ul>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DrawerGuidance;
