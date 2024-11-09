export const codes = [
`export default function BasicAppBar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}
`,

`const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

export default function MenuAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton edge="start" onClick={handleOpenNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Add your Image in here 
          </Typography>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

`,
`export default function SearchAppBar() {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 600);

      const handleResize = () => setIsLargeScreen(window.innerWidth >= 600);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <div
            style={{
              position: "relative",
              borderRadius: "4px",
              marginLeft: isLargeScreen ? "8px" : 0,
              width: isLargeScreen ? "auto" : "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "0 16px",
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                width: "100%",
                color: "black",
                paddingLeft: "calc(1em + 32px)",
                transition: "width 0.2s ease",
                ...(isLargeScreen && {
                  width: "12ch",
                  "&:focus": {
                    width: "20ch",
                  },
                }),
              }}
            />
          </div>

          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
  );
}
`,
`export default function BottomAppBar() {
  return (
      <Box
        sx={{
          width: 850, 
          height: 400, 
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", 
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Welcome to the App
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Add your content in here. 
          </Typography>

        </Box>

        <AppBar
          position="relative"
          sx={{
            top: "auto",
            bottom: 0,
            width: "100%",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton color="inherit" aria-label="home">
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="search">
              <BellIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="favorites">
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              <BellIcon />

            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
`
];