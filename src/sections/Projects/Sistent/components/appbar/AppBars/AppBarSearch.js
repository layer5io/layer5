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
