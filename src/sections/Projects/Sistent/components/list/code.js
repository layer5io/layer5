import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { List, ListItemIcon, ListItemAvatar, ListItemText,ListItem,ListSubheader, ListItemButton, SistentThemeProvider, Divider } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { SistentLayout } from "../../sistent-layout";
//import { FaArrowRight,FaUser, FaFolder, FaFile } from "react-icons/fa";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  // Basic List with List Items
  `  <SistentThemeProvider>
       <List>
         <ListItem><ListItemText primary="Layer5 Sistent 1" /></ListItem> 
         <ListItem><ListItemText primary="Layer5 Sistent 2" /></ListItem> 
         <ListItem><ListItemText primary="Layer5 Sistent 3" /></ListItem> 
       </List>
  </SistentThemeProvider>`,

  // List with Icons in List Items
  `  <SistentThemeProvider>
       <List>
        <ListItem><ListItemIcon>🌟</ListItemIcon><ListItemText primary="Layer5 Sistent Starred" /></ListItem>
        <ListItem><ListItemIcon>📅</ListItemIcon><ListItemText primary="Layer5 Sistent Calender" /></ListItem>
        <ListItem><ListItemIcon>🔔</ListItemIcon><ListItemText primary="Layer5 Sistent Notification" /></ListItem>
       </List>
  </SistentThemeProvider>`,

  // List with Avatars
  `  <SistentThemeProvider>
       <List>
        <ListItem><ListItemAvatar>👤</ListItemAvatar><ListItemText primary="Layer5 Sistent User 1" /></ListItem>
        <ListItem><ListItemAvatar>👩‍💻</ListItemAvatar><ListItemText primary="Layer5 Sistent User 2" /></ListItem>
        <ListItem><ListItemAvatar>👤</ListItemAvatar><ListItemText primary="Layer5 Sistent User 3" /></ListItem>
       </List>
  </SistentThemeProvider>`,

  // List with Subheader
  `  <SistentThemeProvider>
       <List>
        <ListSubheader>Section 1</ListSubheader>
        <ListItem><ListItemText primary="Layer5 Sistent A" /></ListItem>
        <ListItem><ListItemText primary="Layer5 Sistent B" /></ListItem>      
        <ListSubheader>Section 2</ListSubheader>
        <ListItem><ListItemText primary="Layer5 Sistent C" /></ListItem>
        <ListItem><ListItemText primary="Layer5 Sistent D" /></ListItem>
       </List>
  </SistentThemeProvider>`,

  // List with Action Buttons
  `  <SistentThemeProvider>
       <List>
        <ListItemButton onClick={() => alert("Clicked!")}> Layer5 Sistent Action 1</ListItemButton>
        <ListItemButton onClick={() => alert("Clicked!")}>Layer5 Sistent Action 2</ListItemButton>
       </List>
  </SistentThemeProvider>`,
];

export const ListCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

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
                  {/* <ListItem icon={<FaFile />} primaryText="Document" />
                  <ListItem icon={<FaFolder />} primaryText="Folder" />
                  <ListItem icon={<FaUser />} primaryText="Profile" /> */}
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
                  {/* <ListItem avatar="👤" primaryText="User 1" />
                  <ListItem avatar="👤" primaryText="User 2" />
                  <ListItem avatar="👤" primaryText="User 3" /> */}
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
                  <ListItemButton onClick={() => alert("Clicked!")}> Layer5 Sistent Action Item 1</ListItemButton>
                  <ListItemButton onClick={() => alert("Clicked!")}>Layer5 Sistent Action Item 2</ListItemButton>
                </List>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="button-list" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};