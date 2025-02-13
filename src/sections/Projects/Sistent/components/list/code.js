import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { List, ListItemIcon, ListItemAvatar, ListItemText,ListItem,ListSubheader, ListItemButton, SistentThemeProvider, Divider } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const codes = [
  // Basic List with List Items
  `  <List>
         <ListItem><ListItemText primary="Layer5 Sistent 1" /></ListItem> 
         <ListItem><ListItemText primary="Layer5 Sistent 2" /></ListItem> 
         <ListItem><ListItemText primary="Layer5 Sistent 3" /></ListItem> 
  </List> `,
  // List with Icons in List Items
  `  <List>
        <ListItem><ListItemIcon>🌟</ListItemIcon><ListItemText primary="Layer5 Sistent Starred" /></ListItem>
        <ListItem><ListItemIcon>📅</ListItemIcon><ListItemText primary="Layer5 Sistent Calender" /></ListItem>
        <ListItem><ListItemIcon>🔔</ListItemIcon><ListItemText primary="Layer5 Sistent Notification" /></ListItem>
  </List> `,
  // List with Avatars
  `  <List>
        <ListItem><ListItemAvatar>👤</ListItemAvatar><ListItemText primary="Layer5 Sistent User 1" /></ListItem>
        <ListItem><ListItemAvatar>👩‍💻</ListItemAvatar><ListItemText primary="Layer5 Sistent User 2" /></ListItem>
        <ListItem><ListItemAvatar>👤</ListItemAvatar><ListItemText primary="Layer5 Sistent User 3" /></ListItem>
  </List> `,
  // List with Subheader
  `  <List>
        <ListSubheader>Section 1</ListSubheader>
        <ListItem><ListItemText primary="Layer5 Sistent A" /></ListItem>
        <ListItem><ListItemText primary="Layer5 Sistent B" /></ListItem>      
        <ListSubheader>Section 2</ListSubheader>
        <ListItem><ListItemText primary="Layer5 Sistent C" /></ListItem>
        <ListItem><ListItemText primary="Layer5 Sistent D" /></ListItem>
  </List> `,
  // List with Action Buttons
  `  <List>
        <ListItemButton onClick={() => alert("Clicked!")}> Layer5 Sistent Action 1</ListItemButton>
        <ListItemButton onClick={() => alert("Clicked!")}>Layer5 Sistent Action 2</ListItemButton>
  </List> `,
  // Nested List Example
  `   <List sx={{ width: "100%", maxWidth: 360, padding: 2, bgcolor: "background.paper",}} component="nav" >
            <ListSubheader component="div" id="nested-list-subheader"> Layer5 Main Section </ListSubheader>
            <ListItemButton onClick={toggleOpen1}> 
                <ListItemText primary="Layer5 Main Item 1" />
                {open1 ? <ExpandLess /> : <ExpandMore />} 
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItem> <ListItemText primary="Layer5 Sub Item 1.1" /></ListItem>
                <ListItem> <ListItemText primary="Layer5 Sub Item 1.2" /></ListItem>
              </List>
            </Collapse>

            <ListItemButton onClick={toggleOpen2}> 
              <ListItemText primary="Layer5 Main Item 2" />
              {open2 ? <ExpandLess /> : <ExpandMore />}  
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItem><ListItemText primary="Layer5 Sub Item 2.1" /></ListItem>
                <ListItem><ListItemText primary="Layer5 Sub Item 2.2" /></ListItem>
              </List>
            </Collapse>
     </List> `,
];

const ListCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggleOpen1 = () => setOpen1((prev) => !prev);
  const toggleOpen2 = () => setOpen2((prev) => !prev);

  return (
    <SistentLayout title="List">
      <div className="content">
        <a id="Identity"><h2>List</h2></a>
        <p>
          The List component displays a list of items in a structured and
          accessible manner. Variants include simple lists, lists with icons,
          lists with avatars, and lists with action buttons.
        </p>

        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/list" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/list/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/list/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          {/* Simple List */}
          <a id="Simple List"><h3>Simple List</h3></a>
          <p>This is a basic list with plain text items.</p>
          <div className="showcase">
            <div className="items">

              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List>
                  <ListItem><ListItemText primary="Layer5 Sistent Item 1" /></ListItem>
                  <ListItem><ListItemText primary="Layer5 Sistent Item 2" /></ListItem>
                  <ListItem><ListItemText primary="Layer5 Sistent Item 3" /></ListItem>
                </List>
              </SistentThemeProvider>

            </div>
            <CodeBlock name="simple-list" code={codes[0]} />
          </div>

          {/* List with Icons */}
          <a id="List With Icons"><h3>List with Icons</h3></a>
          <p>List items can be paired with icons to add visual cues.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List>
                  <ListItem>
                    <ListItemIcon>🌟</ListItemIcon>
                    <ListItemText primary="Layer5 Sistent Starred" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>📅</ListItemIcon>
                    <ListItemText primary="Layer5 Sistent Calendar" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>🔔</ListItemIcon>
                    <ListItemText primary="Layer5 Sistent Notification" />
                  </ListItem>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="icon-list" code={codes[1]} />
          </div>

          {/* List with Avatars */}
          <a id="List With Avatars"><h3>List with Avatars</h3></a>
          <p>Use avatars for list items representing people or entities.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List>
                  <ListItem><ListItemAvatar>👤</ListItemAvatar><ListItemText primary="Layer5 Sistent User 1" /></ListItem>
                  <ListItem><ListItemAvatar>👩‍💻</ListItemAvatar><ListItemText primary="Layer5 Sistent User 2" /></ListItem>
                  <ListItem><ListItemAvatar>👩‍💻</ListItemAvatar><ListItemText primary="Layer5 Sistent User 3" /></ListItem>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="avatar-list" code={codes[2]} />
          </div>

          {/* List with Subheader */}
          <a id="List With Subheader"><h3>List with Subheader</h3></a>
          <p>Organize list items under different subheaders for better grouping.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List>
                  <ListSubheader>Section 1</ListSubheader>
                  <ListItem>
                    <ListItemText primary="Layer5 Sistent Item A" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Layer5 Sistent Item B" />
                  </ListItem>
                  <Divider />
                  <ListSubheader>Section 2</ListSubheader>
                  <ListItem>
                    <ListItemText primary="Layer5 Sistent Item C" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Layer5 Sistent Item D" />
                  </ListItem>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="subheader-list" code={codes[3]} />
          </div>

          {/* List with Action Buttons */}
          <a id="List With ActionButtons"><h3>List with Action Buttons</h3></a>
          <p>Lists can also have action buttons for added interactivity.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List>
                  {/* <ListItem text="Action Item 1" secondaryAction={<button>Action</button>} />
                  <ListItem text="Action Item 2" secondaryAction={<button>More</button>} /> */}
                  <ListItemButton onClick={() => alert("Layer5 List Item 1 Button Clicked!")}> Layer5 Sistent Action Item 1</ListItemButton>
                  <ListItemButton onClick={() => alert("Layer5 List Item 2 Button Clicked!")}>Layer5 Sistent Action Item 2</ListItemButton>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="button-list" code={codes[4]} />
          </div>

          {/* List with Nested Items */}
          <a id="Nested List"><h3>List with Nested Items</h3></a>
          <p>Lists can also be nested to represent hierarchical structures.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    padding: 2,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                >
                  <ListSubheader component="div" id="nested-list-subheader">
                    Layer5 Main Section
                  </ListSubheader>

                  {/* Main Item 1 with Nested Items */}
                  <ListItemButton onClick={toggleOpen1}>
                    <ListItemText primary="Layer5 Main Item 1" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      <ListItem>
                        <ListItemText primary="Layer5 Sub Item 1.1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Layer5 Sub Item 1.2" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Main Item 2 with Nested Items */}
                  <ListItemButton onClick={toggleOpen2}>
                    <ListItemText primary="Layer5 Main Item 2" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      <ListItem>
                        <ListItemText primary="Layer5 Sub Item 2.1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Layer5 Sub Item 2.2" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="nested-list" code={codes[5]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};
export default ListCode;