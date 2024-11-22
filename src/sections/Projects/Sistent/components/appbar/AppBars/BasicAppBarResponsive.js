import * as React from "react";
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
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon from MUI
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import { Image } from "../../../../../../assets/images/favicon.webp";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveAppBar() {
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
              <img src="../../../../../../assets/images/favicon.webp" alt="" />
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
