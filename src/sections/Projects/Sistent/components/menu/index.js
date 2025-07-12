import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Menu, MenuItem, MenuList, Button, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentMenu = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <SistentLayout title="Menu">
      <div className="content">
        <a id="Identity">
          <h2>Understanding the Menu Component</h2>
        </a>
        <p>
          The Menu component offers a way to present a list of actions or options to users. It is often used in dropdowns, settings panels, and navigation contexts.
          Menus remain hidden until triggered, improving UI cleanliness while still providing easy access to actions.
        </p>
        <p>
          The Menu component is built using a combination of <code>Menu</code>, <code>MenuList</code>, and <code>MenuItem</code>. This modular design ensures clarity, reusability, and flexibility across various use cases.
        </p>

        <div className="filterBtns">
          <TabButton
            title="Overview"
            className={location.pathname === "/projects/sistent/components/menu" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/menu")}
          />
          <TabButton
            title="Guidance"
            className={location.pathname === "/projects/sistent/components/menu/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/menu/guidance")}
          />
          <TabButton
            title="Code"
            className={location.pathname === "/projects/sistent/components/menu/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/menu/code")}
          />
        </div>

        <div className="main-content">
          <a id="Basic Usage">
            <h3>Basic Example</h3>
          </a>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Open Menu</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuList border="1px solid" borderColor="gray.200" boxShadow="md">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentMenu;
