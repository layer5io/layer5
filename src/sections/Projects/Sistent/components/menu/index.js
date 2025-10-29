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
          The Menu component displays a list of choices on temporary surfaces.
          Menus appear upon user interaction, such as clicking a button, and
          remain visible until an action is selected or dismissed.
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
            Use the anchor element and origin props to control where the menu
            appears relative to its trigger. Default behavior positions the menu
            below the anchor.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentMenu;

