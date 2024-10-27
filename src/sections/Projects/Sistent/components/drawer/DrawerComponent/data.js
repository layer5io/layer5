
export const codes = [
    `  import React from "react";
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
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box sx={{
          bgcolor: "#00B39F",
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center"
        }}>
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              color: "white",
              mr: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)"
              }
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
          display : "flex",
          flexDirection: "row",
        }}>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            variant="persistent"
            sx={{
              width: drawerWidth,
              position: "relative", // Change to absolute to confine the drawer
              "& .MuiDrawer-paper": {
                position: "relative",
                width: drawerWidth,
                boxSizing: "border-box",
                height: "100%", // Set height to 100% to fill the parent box
                borderRight: "1px solid #ccc",
                backgroundColor: isDark ? "background.default" : "#fff",
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
`,
    `  import React from "react";
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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px" }}>
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
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box sx={{
          bgcolor: "#00B39F",
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center"
        }}>
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              color: "white",
              mr: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)"
              }
            }}
          >
            Open drawer
          </Button>
          <span style={{ fontWeight: "bold" }}>Mini Variant Drawer Demo</span>
        </Box>

        <Box sx={{
          position: "relative",
          flex: 1,
          overflow: "hidden"
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
                boxSizing: "border-box",
                height: "80vh",
                borderRight: "1px solid #ccc",
                backgroundColor: isDark ? "background.default" : "#fff",
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
`,
    ` import React, { useEffect, useRef } from "react";
import { Drawer, Button, SistentThemeProvider } from "@layer5/sistent";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

const drawerWidth = 240;

export default function PersistentDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !event.target.closest(".MuiButton-root")
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleDrawer = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <div
        style={{
          width: "800px",
          height: "600px", // Increased height for scrolling
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          borderBottom: "1px solid #ccc",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "64px",
              backgroundColor: "#00B39F",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              color: "white",
              zIndex: 1,
              transition: "margin-left 0.3s ease",
              marginLeft: open ? drawerWidth : 0,
            }}
          >
            <Button color="inherit" onClick={toggleDrawer} style={{ color: "white" }}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </Button>
            <span style={{ marginLeft: "16px", fontWeight: "bold", fontSize: "1.2rem" }}>
              Persistent Drawer
            </span>
          </div>

          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              position: "absolute",
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                height: "140vh",
                position: "relative",
                boxSizing: "border-box",
                borderRight: "1px solid #ccc",
                overflowY: "auto",
                overflowX: "hidden",
                backgroundColor: "transparent", // Set the background to transparent
              },
            }}
          >

            <div style={{ width: drawerWidth }}>
              <div style={{ padding: "16px", fontWeight: "bold" }}>Menu</div>
              <div>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    <div>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</div>
                    <span style={{ marginLeft: "16px" }}>{text}</span>
                  </div>
                ))}
              </div>
              <hr style={{ margin: "16px 0" }} />
              <div>
                {["All mail", "Trash"].map((text, index) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    <div>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</div>
                    <span style={{ marginLeft: "16px" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Drawer>

          <main
            style={{
              flexGrow: 1,
              padding: "24px",
              transition: "margin-left 0.3s ease",
              marginLeft: open ? drawerWidth : 0,
              height: "calc(100% - 64px)",
              overflowY: "auto",
              maxHeight: "calc(100% - 64px)", // Ensures scrolling within the content area
            }}
          >
            <h2 style={{ margin: "0 0 16px 0" }}>Main Content</h2>
            <p>This is the main content area. Click anywhere outside the drawer to close it.</p>
            {Array.from({ length: 20 }).map((_, index) => (
              <p key={index} style={{ paddingBottom: "16px" }}>
                This is additional content for scrolling demonstration. Even as you scroll, the drawer will remain persistent.
              </p>
            ))}
          </main>
        </div>
      </div>
    </SistentThemeProvider>
  );
}
`,
    `  import React from "react";
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
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
              backgroundColor: isDark ? "background.default" : "#fff",
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
            height: "500px", // Set height to make it scrollable within the container
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
`,
    `  <SistentThemeProvider>
        <Button
          variant="contained"
          size="medium"
          endIcon={<FaArrowRight size={12} />}
        >
          Next
        </Button>
    </SistentThemeProvider>`,
];
