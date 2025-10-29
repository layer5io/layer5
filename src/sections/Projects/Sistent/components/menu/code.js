import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { SistentThemeProvider, Menu, MenuItem, Button } from "@sistent/sistent";
import { CodeBlock } from "../button/code-block";

const codes = [
  // Basic menu
  `  <SistentThemeProvider>
       <Button variant="contained" onClick={handleOpen}>Open menu</Button>
       <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
         <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
       </Menu>
  </SistentThemeProvider>`,
  // Positioned menu
  `  <SistentThemeProvider>
       <Button variant="outlined" onClick={handleOpen2}>Top-right menu</Button>
       <Menu
         anchorEl={anchorEl2}
         open={open2}
         onClose={handleClose2}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
         transformOrigin={{ vertical: "top", horizontal: "right" }}
       >
         <MenuItem onClick={handleClose2}>Settings</MenuItem>
         <MenuItem onClick={handleClose2}>Help</MenuItem>
       </Menu>
  </SistentThemeProvider>`,
  // Menu item states
  `  <SistentThemeProvider>
       <Button variant="text" onClick={handleOpen3}>With states</Button>
       <Menu anchorEl={anchorEl3} open={open3} onClose={handleClose3}>
         <MenuItem onClick={handleClose3} selected>
           Selected
         </MenuItem>
         <MenuItem onClick={handleClose3} disabled>
           Disabled
         </MenuItem>
         <MenuItem onClick={handleClose3}>Regular</MenuItem>
       </Menu>
  </SistentThemeProvider>`,
  // Long menu with max height and auto focus item
  `  <SistentThemeProvider>
       <Button variant="contained" onClick={handleOpen4}>Long menu</Button>
       <Menu
         anchorEl={anchorEl4}
         open={open4}
         onClose={handleClose4}
         MenuListProps={{ autoFocusItem: true }}
         PaperProps={{ style: { maxHeight: 240, width: 220 } }}
       >
         {["Profile","My account","Dashboard","Settings","Billing","Support","Sign out"].map((label) => (
           <MenuItem key={label} onClick={handleClose4}>{label}</MenuItem>
         ))}
       </Menu>
  </SistentThemeProvider>`,
];

const MenuCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  // Example 1
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Example 2 (positioned)
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleOpen2 = (e) => setAnchorEl2(e.currentTarget);
  const handleClose2 = () => setAnchorEl2(null);

  // Example 3 (states)
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleOpen3 = (e) => setAnchorEl3(e.currentTarget);
  const handleClose3 = () => setAnchorEl3(null);

  // Example 4 (long)
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleOpen4 = (e) => setAnchorEl4(e.currentTarget);
  const handleClose4 = () => setAnchorEl4(null);

  return (
    <SistentLayout title="Menu">
      <div className="content">
        <a id="Identity">
          <h2>Menu</h2>
        </a>
        <p>
          The Menu component displays a list of choices on a temporary surface anchored to a trigger.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu/guidance" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/menu/code" ? "active" : ""
            }
            onClick={() => navigate("/projects/sistent/components/menu/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          {/* Basic Menu */}
          <a id="Basic Menu">
            <h3>Basic Menu</h3>
          </a>
          <p>Attach the menu to a trigger using <code>anchorEl</code> and control its visibility with <code>open</code>.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={handleOpen}>Open menu</Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-menu" code={codes[0]} />
          </div>

          {/* Positioned Menu */}
          <a id="Positioned Menu">
            <h3>Positioned Menu</h3>
          </a>
          <p>Control menu placement with <code>anchorOrigin</code> and <code>transformOrigin</code>.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="outlined" onClick={handleOpen2}>Top-right menu</Button>
                <Menu
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={handleClose2}>Settings</MenuItem>
                  <MenuItem onClick={handleClose2}>Help</MenuItem>
                </Menu>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="positioned-menu" code={codes[1]} />
          </div>

          {/* Menu Item States */}
          <a id="Menu Item States">
            <h3>Menu Item States</h3>
          </a>
          <p>Communicate state with <code>selected</code> and <code>disabled</code> props on MenuItem.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="text" onClick={handleOpen3}>With states</Button>
                <Menu anchorEl={anchorEl3} open={open3} onClose={handleClose3}>
                  <MenuItem onClick={handleClose3} selected>
                    Selected
                  </MenuItem>
                  <MenuItem onClick={handleClose3} disabled>
                    Disabled
                  </MenuItem>
                  <MenuItem onClick={handleClose3}>Regular</MenuItem>
                </Menu>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="menu-item-states" code={codes[2]} />
          </div>

          {/* Long Menu */}
          <a id="Long Menu">
            <h3>Long Menu</h3>
          </a>
          <p>Constrain menu size with <code>PaperProps</code> and enable keyboard focus with <code>MenuListProps.autoFocusItem</code>.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={handleOpen4}>Long menu</Button>
                <Menu
                  anchorEl={anchorEl4}
                  open={open4}
                  onClose={handleClose4}
                  MenuListProps={{ autoFocusItem: true }}
                  PaperProps={{ style: { maxHeight: 240, width: 220 } }}
                >
                  {["Profile","My account","Dashboard","Settings","Billing","Support","Sign out"].map((label) => (
                    <MenuItem key={label} onClick={handleClose4}>{label}</MenuItem>
                  ))}
                </Menu>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="long-menu" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default MenuCode;

