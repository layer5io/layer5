import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";
import { FavoriteIcon, BellIcon } from "@layer5/sistent";
export default function BottomAppBar() {
  const { isDark } = useStyledDarkMode();
  return (
    <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
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
            This is a sample area to add content above the bottom app bar. You can place any text, images, or other components here.
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
    </SistentThemeProvider>
  );
}
