import { createTheme } from "@mui/material/styles";

// Layer5 brand colors based on their design system
export const layer5Theme = createTheme({
  palette: {
    primary: {
      main: "#00B39F", // Layer5 signature green
      light: "#00D3C7",
      dark: "#00A08F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5C5C5C",
      light: "#8A8A8A",
      dark: "#2E2E2E",
      contrastText: "#ffffff",
    },
    background: {
      default: "#FAFAFA",
      paper: "#ffffff",
    },
    text: {
      primary: "#1A202C",
      secondary: "#4A5568",
    },
    success: {
      main: "#38A169",
      light: "#68D391",
      dark: "#2F855A",
    },
    info: {
      main: "#00B39F",
      light: "#00D3C7",
      dark: "#00A08F",
    },
  },
  typography: {
    fontFamily: "\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 24px",
        },
        contained: {
          boxShadow: "0 2px 8px rgba(0, 179, 159, 0.2)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 179, 159, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(0, 179, 159, 0.1)",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#00B39F",
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: "#00B39F",
          border: "2px solid currentColor",
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0 0 0 8px rgba(0, 179, 159, 0.16)",
          },
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
          backgroundColor: "#E2E8F0",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#00B39F",
            "& + .MuiSwitch-track": {
              backgroundColor: "#00B39F",
            },
          },
        },
      },
    },
  },
});