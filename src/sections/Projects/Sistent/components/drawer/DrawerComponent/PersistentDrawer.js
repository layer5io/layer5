import React, { useEffect, useRef } from "react";
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
          height: "550px",
          margin: "20px auto",
          border: "1px solid #ccc",
          overflow: "hidden",
          position: "relative",
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
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              zIndex: 1,
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
                borderRight: "1px solid #ccc",
                overflowY: "auto",
                overflowX: "hidden",
                backgroundColor: "transparent",
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
