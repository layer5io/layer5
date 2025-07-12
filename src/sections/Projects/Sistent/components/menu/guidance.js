import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Menu, MenuItem, MenuList, Button, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { Row } from "../../../../../reusecore/Layout";

const MenuGuidance = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <SistentLayout title="Menu Guidance">
      <div className="content">
        <a id="Functionality">
          <h2>Design Guidelines and Best Practices</h2>
        </a>
        <p>
          Menus should be used to organize related actions under a single trigger. This improves usability while minimizing visual clutter. Below are the recommended guidelines:
        </p>
        <ul>
          <li>Use menu items to present actions relevant to the current context.</li>
          <li>Avoid overloading menus with too many items; keep it concise and focused.</li>
          <li>Provide visual feedback and ensure keyboard navigation for accessibility.</li>
          <li>Position menus in a way that they do not overlap important UI elements.</li>
        </ul>

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

        <Row $Hcenter className="image-container">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Actions</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuList border="1px solid" borderColor="gray.200" boxShadow="md">
                <MenuItem onClick={handleClose}>Download</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Archive</MenuItem>
              </MenuList>
            </Menu>
          </SistentThemeProvider>
        </Row>
      </div>
    </SistentLayout>
  );
};

export default MenuGuidance;
