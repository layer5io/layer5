import React from "react";
import { SistentThemeProvider } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import {
  Box,
  Drawer,
  Divider,
  ListItemIcon,
  ListItemText
} from "@layer5/sistent";
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

const drawerWidth = 240;

export default function PermanentDrawer() {
  const { isDark } = useStyledDarkMode();

  const DrawerContent = () => (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px" }}>
        <span style={{ fontWeight: "bold" }}>Menu</span>
      </Box>
      <Divider />
      <div>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <div key={text} style={{ display: "flex", alignItems: "center", padding: "8px 16px" }}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </div>
        ))}
      </div>
      <Divider />
      <div>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <div key={text} style={{ display: "flex", alignItems: "center", padding: "8px 16px" }}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </div>
        ))}
      </div>
    </Box>
  );

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Box
        sx={{
          width: 800,
          height: 500,
          margin: "20px auto",
          border: "1px solid #ccc",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Drawer
          anchor="left"
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              height: "100%",
              position: "relative",
              borderRight: "1px solid #ccc",
              backgroundColor: "transparent",
              overflowX: "hidden",
            },
          }}
        >
          <DrawerContent />
        </Drawer>

        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            height: "500px",
            overflow: "auto"
          }}
        >
          <h2>Main Content</h2>
          <p>This is the main content area. The drawer on the left is permanent.</p>
          <p>Additional content to demonstrate scrolling.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra nulla vitae nisi pulvinar, sed congue magna feugiat.</p>
          <p>Quisque dapibus metus sit amet arcu fermentum, sit amet gravida felis sodales.</p>
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index} style={{ paddingBottom: "16px" }}>
                This is additional content for scrolling demonstration. Even as you scroll, the drawer will remain persistent.
            </p>
          ))}
        </Box>
      </Box>
    </SistentThemeProvider>
  );
}
