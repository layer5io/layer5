import * as React from "react";
import {
  SistentThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@layer5/sistent";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useStyledDarkMode } from "../../../../../../theme/app/useStyledDarkMode";

// test

export default function SearchAppBar() {
  const { isDark } = useStyledDarkMode();

  // State for window width (for client-side check only)
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    // Check if window is defined to handle SSR
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 600);

      // Optional: Update the width on resize
      const handleResize = () => setIsLargeScreen(window.innerWidth >= 600);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
    </SistentThemeProvider>
  );
}
