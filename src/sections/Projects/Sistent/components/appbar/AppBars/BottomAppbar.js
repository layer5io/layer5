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
          width: 850, // Confining width of the box
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
