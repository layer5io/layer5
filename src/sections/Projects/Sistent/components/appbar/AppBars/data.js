export const codes = [
    `import * as React from "react";
import {
  SistentThemeProvider,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@layer5/sistent";
import MenuIcon from "@layer5/sistent"; 
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

export default function BasicAppBar() {
  const { isDark } = useStyledDarkMode();
  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  /> {/* Use MUI MenuIcon here */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </SistentThemeProvider>
  );
}
`,
`import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  Tooltip,
  Avatar,
} from "@layer5/sistent";
import MenuIcon from "@layer5/sistent"; // Import MenuIcon from MUI
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function MenuAppBar() {
  const { isDark } = useStyledDarkMode();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }} // Show only on small screens
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>

            {/* Mobile Menu */}
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }} // Show only on small screens
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} >
                  {page}
                </Button>
              ))}
            </Box>

            {/* User Settings */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </SistentThemeProvider>
  );
}
  `,
`import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,

} from "@layer5/sistent";
import {MenuIcon} from "@layer5/sistent";
import {SearchIcon} from "@layer5/sistent";
import {InputBase} from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

export default function SearchAppBar() {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginLeft: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              ...(window.innerWidth >= 600 && {
                marginLeft: "8px",
                width: "auto",
              }),
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
                color: "inherit",
                width: "100%",
                color: "black",
                paddingLeft: "calc(1em + 32px)",
                transition: "width 0.2s ease",
                ...(window.innerWidth >= 600 && {
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
    </SistentThemeProvider>
  );
}

`,
`import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import {FavoriteIcon, BellIcon } from "@layer5/sistent";
export default function BottomAppBar() {
  const { isDark } = useStyledDarkMode();
  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Box
        sx={{
          width: 950, // Confining width of the box
          height: 400, // Increased height
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Aligns AppBar at the bottom
        }}
      >
        {/* Additional Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Welcome to the App
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is a sample area to add content above the bottom app bar. You can place any text, images, or other components here.
          </Typography>

        </Box>

        {/* Bottom AppBar */}
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
              {/* <CalenderIcon/> */}
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="search">
              <BellIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="favorites">
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              {/* <PersonIcon /> */}
              <BellIcon />

            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </SistentThemeProvider>
  );
}

`,
`import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import {FavoriteIcon, BellIcon } from "@layer5/sistent";
export default function BottomAppBar() {
  const { isDark } = useStyledDarkMode();
  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Box
        sx={{
          width: 950, // Confining width of the box
          height: 400, // Increased height
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Aligns AppBar at the bottom
        }}
      >
        {/* Additional Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Welcome to the App
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is a sample area to add content above the bottom app bar. You can place any text, images, or other components here.
          </Typography>

        </Box>

        {/* Bottom AppBar */}
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
              {/* <CalenderIcon/> */}
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="search">
              <BellIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="favorites">
              <FavoriteIcon />

            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              {/* <PersonIcon /> */}
              <BellIcon />

            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </SistentThemeProvider>
  );
}
`

];