export const sliderThemeCustomization = {
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          backgroundColor: "#363F49",
          color: "white",
          fontSize: "14px",
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
          borderRadius: "8px",
          padding: "8px 12px",
          "&:before": {
            borderTopColor: "#363F49",
          },
        },
        mark: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
        markLabel: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "\"Qanelas Soft\", \"Open Sans\", sans-serif",
        },
      },
    },
  },
};

export default sliderThemeCustomization;