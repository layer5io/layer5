
export const codes = [
`export default function TemporaryDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = () => (
      <Box sx={{ width: drawerWidth }} role="presentation">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
          <span style={{ fontWeight: "bold" }}>Menu</span>
          <Button onClick={toggleDrawer(false)} sx={{ minWidth: "unset" }}>
            <CloseIcon />
          </Button>
        </Box>
        <Divider />
        {["Inbox", "Starred", "Send email", "Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
          <Box key={text} sx={{ display: "flex", alignItems: "center", p: 1 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </Box>
        ))}
      </Box>
    );

  return (
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
              position: "relative",
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
  );
}
`,
`export default function MiniVariantDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = () => (
      <Box sx={{ width: open ? fullDrawerWidth : drawerWidth }} role="presentation">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
          <Button onClick={toggleDrawer(false)} sx={{ minWidth: "unset" }}>
            <CloseIcon />
          </Button>
        </Box>
        <Divider />
        {["Inbox", "Starred", "Send email", "Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
          <Box key={text} sx={{ display: "flex", alignItems: "center", p: 1 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          </Box>
        ))}
      </Box>
    );

  return (
  
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
  );
}
`,
`export default function PersistentDrawer() {
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {

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
      <div
        style={{
          width: "800px",
          height: "550px", 
          margin: "20px auto",
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
            <Button color="inherit" onClick={toggleDrawer} >
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
              marginLeft: open ? drawerWidth : 0,
              height: "calc(100% - 64px)",
              overflowY: "auto",
              maxHeight: "calc(100% - 64px)", 
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
  );
}

`,
`export default function PermanentDrawer() {
  const { isDark } = useStyledDarkMode();

    const DrawerContent = () => (
      <Box sx={{ width: drawerWidth }} role="presentation">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px 16px" }}>
          <span style={{ fontWeight: "bold" }}>Menu</span>
        </Box>
        <Divider />
        {["Inbox", "Starred", "Send email", "Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
          <div key={text} style={{ display: "flex", alignItems: "center", padding: "8px 16px" }}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </div>
        ))}
      </Box>
    );

  return (
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
  );
}
`,
];
