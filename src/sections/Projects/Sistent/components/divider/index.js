import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Divider, SistentThemeProvider, Box, List, ListItem, ListItemText, Chip } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentDivider = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Divider">
      <div className="content">
        <a id="Identity">
          <h2>Divider</h2>
        </a>
        <p>
          The <code>Divider</code> component renders a thin line that separates content within lists, layouts, and sections, providing a subtle way to reinforce visual hierarchy and improve scannability.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/divider")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/divider/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/divider/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/divider/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/divider/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Dividers help organize content and improve scannability by separating groups of related elements. Use them sparingly to maintain visual clarity without creating unnecessary noise.
          </p>
          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>
            The Divider component supports three variants: <code>fullWidth</code> (default), <code>inset</code>, and <code>middle</code>.
          </p>
          <h3>Full Width</h3>
          <p>
            The default variant spans the full width of its container.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Divider />
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Inset</h3>
          <p>
            The <code>inset</code> variant adds left padding, useful when aligning with indented list items.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Divider variant="inset" />
              </Box>
            </SistentThemeProvider>
          </Row>

          <h3>Middle</h3>
          <p>
            The <code>middle</code> variant shortens the divider on both sides.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Divider variant="middle" />
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="Orientation">
            <h2>Orientation</h2>
          </a>
          <p>
            Use the <code>orientation</code> prop to render vertical dividers. Vertical dividers are useful for separating items in toolbars or button groups.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <span>Left</span>
                <Divider orientation="vertical" flexItem />
                <span>Center</span>
                <Divider orientation="vertical" flexItem />
                <span>Right</span>
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="With-Text">
            <h2>Divider with Text</h2>
          </a>
          <p>
            You can center an element between divider lines using children. Use the <code>textAlign</code> prop to align the content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Divider>CENTER</Divider>
                <Divider textAlign="left">LEFT</Divider>
                <Divider textAlign="right">RIGHT</Divider>
                <Divider>
                  <Chip label="Chip" size="small" />
                </Divider>
              </Box>
            </SistentThemeProvider>
          </Row>

          <a id="List-Divider">
            <h2>List Divider</h2>
          </a>
          <p>
            When using the Divider to separate items in a list, render it as an <code>&lt;li&gt;</code> using the <code>component</code> prop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                <ListItem>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Drafts" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Trash" />
                </ListItem>
              </List>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentDivider;
