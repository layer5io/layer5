import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Drawer, Button, List, ListItem, Box, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerOverview = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [demoOpen, setDemoOpen] = React.useState(false);

  return (
    <SistentLayout title="Drawer">
      <div className="content">
        <a id="Identity">
          <h2>Drawer</h2>
        </a>
        <p>
          Navigation drawers provide access to destinations and app functionality,
          such as switching accounts. They can be permanently on-screen or controlled
          by a menu icon.
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
          <p>
            Drawers are modal panels that slide in from the edge of the screen,
            providing supplementary content without navigating away from the current page.
            They're ideal for navigation menus, filters, settings, and contextual information.
          </p>

          <a id="Demo">
            <h2>Interactive Demo</h2>
          </a>
          <p>
            Experience how the drawer component works with this interactive example:
          </p>
          <Row $Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  onClick={() => setDemoOpen(true)}
                  variant="contained"
                  startIcon={<MenuIcon />}
                  label="Open Navigation Drawer"
                />
                <Drawer open={demoOpen} onClose={() => setDemoOpen(false)}>
                  <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Navigation</Typography>
                    <List>
                      <ListItem><Typography>Dashboard</Typography></ListItem>
                      <ListItem><Typography>Projects</Typography></ListItem>
                      <ListItem><Typography>Team</Typography></ListItem>
                      <ListItem><Typography>Settings</Typography></ListItem>
                    </List>
                  </Box>
                </Drawer>
              </SistentThemeProvider>
            </Col>
          </Row>

          <a id="Key Features">
            <h2>Key Features</h2>
          </a>
          <p>
            The Sistent Drawer component provides several powerful features:
          </p>

          <h3>Multiple Variants</h3>
          <p>
            Choose from temporary, persistent, or permanent drawer types to match your
            application's navigation needs and layout requirements.
          </p>

          <h3>Flexible Positioning</h3>
          <p>
            Anchor drawers to any edge of the screen (left, right, top, or bottom)
            to create the most intuitive user experience for your content.
          </p>

          <h3>Modal Overlay</h3>
          <p>
            Temporary drawers include an automatic backdrop overlay that focuses user
            attention and can be clicked to close the drawer.
          </p>

          <h3>Keyboard Support</h3>
          <p>
            Built-in accessibility features including keyboard navigation and Escape key
            support for closing drawers, ensuring a fully accessible interface.
          </p>

          <h3>Responsive Design</h3>
          <p>
            Drawers adapt seamlessly to different screen sizes, making them ideal for
            both mobile and desktop applications with consistent behavior.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default DrawerOverview;