import React from "react";
import { SistentThemeProvider } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import {
  Box,
  Drawer,
  Button,
  Divider,
  ListItemIcon,
  ListItemText
} from "@layer5/sistent";
import { MoveToInbox as InboxIcon, Mail as MailIcon, Close as CloseIcon } from "@mui/icons-material";

const drawerWidth = 240;

export default function TemporaryDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = () => (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px" }}>
        <span style={{ fontWeight: "bold" }}>Menu</span>
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
            <ListItemText primary={text} />
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
          flexDirection: "column"
        }}
      >
        <Box sx={{
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
          <span style={{ fontWeight: "bold" }}> Drawer Demo</span>
        </Box>

        <Box sx={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            variant="persistent"
            sx={{
              width: drawerWidth,
              position: "relative", // Change to absolute to confine the drawer
              "& .MuiDrawer-paper": {
                position: "relative",
                width: drawerWidth,
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
              This is a demonstration of a temporary drawer. You can add a button to trigger the drawer's opening, making it easy for users to access additional content or navigation options when needed.
          </Box>
        </Box>
      </Box>
    </SistentThemeProvider>
  );
}
