import * as React from "react";
import {
  SistentThemeProvider,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@layer5/sistent";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon from MUI
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
