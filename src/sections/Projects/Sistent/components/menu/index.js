import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Menu,
  MenuItem,
  Button,
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentMenu = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <SistentLayout title="Menu">
      <div className="content">
        <a id="Identity">
          <h2>Menu</h2>
        </a>
        <p>
          <code>Menu</code> is the anchored container (shell) that manages positioning, anchoring,
          opening/closing, focus management, and transitions. It typically wraps a
          <code> MenuList</code>, which renders the list of <code>MenuItem</code> options and handles
          keyboard navigation.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/menu/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/menu/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <a id="Basic Menu">
            <h2>Basic Menu</h2>
          </a>
          <p>
            Menus are anchored to a control (usually a button). Clicking the
            control opens the menu. Select an item to perform an action or close
            the menu.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" onClick={handleOpen}>
                Open menu
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </SistentThemeProvider>
          </Row>

          <a id="Positioning">
            <h2>Positioning</h2>
          </a>
          <p>
            Use <code>anchorEl</code> and origin props to control where the <code>Menu</code> appears
            relative to its trigger. <code>Menu</code> uses <code>Popover</code> internally and manages focus
            and dismissal via <code>open</code> and <code>onClose</code>.
          </p>

          <a id="MenuItem" style={{ marginTop: "3rem" }}>
            <h2>MenuItem</h2>
          </a>
          <p>
            <code>MenuItem</code> represents an actionable option within a menu. Use props like
            <code> selected</code>, <code> disabled</code>, and <code> autoFocus</code> to communicate state, or render as a link with
            <code> component="a"</code> and <code> href</code>.
          </p>

          <a id="MenuList" style={{ marginTop: "3rem" }}>
            <h2>MenuList</h2>
          </a>
          <p>
            <code>MenuList</code> renders the list of options and manages keyboard navigation (Arrow keys, Home/End) and roles
            (e.g., <code>role="menu"</code>). It does not handle positioning or anchoring—that is the responsibility of <code>Menu</code>.
            Use it standalone when you need menu-like behavior without a floating surface.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentMenu;

