import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Menu, MenuItem, MenuList, Button, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const menuCodeExample = `
const [anchorEl, setAnchorEl] = useState(null);
const handleOpen = (event) => setAnchorEl(event.currentTarget);
const handleClose = () => setAnchorEl(null);

<Button onClick={handleOpen}>Open Menu</Button>
<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
  <MenuList>
    <MenuItem onClick={handleClose}>Option 1</MenuItem>
    <MenuItem onClick={handleClose}>Option 2</MenuItem>
    <MenuItem onClick={handleClose}>Option 3</MenuItem>
  </MenuList>
</Menu>
`;

const MenuCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <SistentLayout title="Menu Code Examples">
      <div className="content">
        <a id="Menu Code">
          <h2>Menu Code Implementation</h2>
        </a>
        <p>
          The Menu component is built using a combination of Menu, MenuList, and MenuItem. Below is a working code sample that shows how to trigger and close the Menu using a button.
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button onClick={handleOpen}>Options</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuList border="1px solid" borderColor="gray.200" boxShadow="md">
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </MenuList>
            </Menu>
          </SistentThemeProvider>

          <h3 style={{ marginTop: "2rem" }}>Code Snippet</h3>
          <CodeBlock name="menu-basic" code={menuCodeExample} />
        </div>
      </div>
    </SistentLayout>
  );
};

export default MenuCode;
