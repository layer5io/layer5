import React from "react";
import { SistentThemeProvider } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

import {
  Box,
  Drawer,
  Button,
  Divider,
  ListItemIcon
} from "@layer5/sistent";
import { MoveToInbox as InboxIcon, Mail as MailIcon, Close as CloseIcon } from "@mui/icons-material";

const drawerWidth = 10; // Mini drawer width
const fullDrawerWidth = 60; // Full width when expanded

export default function MiniVariantDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = () => (
    <Box sx={{ width: open ? fullDrawerWidth : drawerWidth }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px 16px" }}>
        <Button onClick={toggleDrawer(false)} sx={{ minWidth: "unset" }}>
          <CloseIcon />
        </Button>
      </Box>
      <Divider />
      <div>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <div key={text} style={{ display: "flex", alignItems: "center", padding: "8px 16px" }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
          </div>
        ))}
      </div>
      <Divider />
      <div>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <div key={text} style={{ display: "flex", alignItems: "center", padding: "8px 16px" }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
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
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box sx={{
          // bgcolor: "#00B39F",
          p: 2,
          display: "flex",
          alignItems: "center"
        }}>
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
            }}
          >
            Open drawer
          </Button>
          <span style={{ fontWeight: "bold" }}>Mini Variant Drawer Demo</span>
        </Box>

        <Box sx={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            variant="persistent"
            sx={{
              width: open ? fullDrawerWidth : drawerWidth,
              position: "relative",
              "& .MuiDrawer-paper": {
                position: "relative",
                width: open ? fullDrawerWidth : drawerWidth,
                height: "80vh",
                borderRight: "1px solid #ccc",
                backgroundColor: "transparent",
                overflowX: "hidden",
              },
            }}
          >
            <DrawerContent />
          </Drawer>

          <Box
            id="drawer-container"
            sx={{
              position: "relative",
              height: "100%",
              overflow: "auto",
              flexGrow: 1,
              p: 3
            }}
          >
            <h2>Main Content</h2>
            <p>This is the main content area. Click the button above to open the drawer.</p>
          </Box>
        </Box>
      </Box>
    </SistentThemeProvider>
  );
}
