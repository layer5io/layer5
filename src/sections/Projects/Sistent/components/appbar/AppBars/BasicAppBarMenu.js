import React, { useState } from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

export default function MenuAppBar() {
  const { isDark } = useStyledDarkMode();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <Button
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              Menu
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <Button
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               Account
              </Button>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </SistentThemeProvider>
  );
}
