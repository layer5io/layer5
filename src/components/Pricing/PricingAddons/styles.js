// Common styles for PricingAddons component

export const QANELAS_FONT = "\"Qanelas Soft\", \"Open Sans\", sans-serif";

// Typography styles
export const typographyStyles = {
  qanelasFont: {
    fontFamily: QANELAS_FONT
  },
  heading: {
    fontFamily: QANELAS_FONT,
    fontWeight: "bold"
  },
  subheading: {
    fontFamily: QANELAS_FONT,
    fontSize: 12,
    textTransform: "uppercase",
    color: "text.secondary",
    fontWeight: 300
  },
  body: {
    fontFamily: QANELAS_FONT
  },
  italic: {
    fontFamily: QANELAS_FONT,
    fontStyle: "italic",
    color: "text.secondary"
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: QANELAS_FONT
  },
  ellipsisText: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontFamily: QANELAS_FONT,
    fontStyle: "italic",
    color: "text.secondary"
  },
  featureTitle: {
    marginBottom: 2,
    marginTop: -2
  },
  learnerCount: {
    justifySelf: "center",
    textAlign: "center",
    width: "100%",
    fontFamily: QANELAS_FONT
  },
  priceDisclaimer: {
    lineHeight: "1rem",
    fontSize: "0.8rem",
    fontStyle: "italic",
    fontFamily: QANELAS_FONT,
    color: "text.secondary"
  },
  pricingItemLeft: {
    marginLeft: 0.5,
    fontFamily: QANELAS_FONT
  },
  pricingItemRight: {
    marginRight: 0.5,
    fontFamily: QANELAS_FONT
  }
};

// Box/Container styles
export const boxStyles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column"
  },
  flexRowWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexRowNoWrap: {
    display: "flex",
    flexWrap: "nowrap"
  },
  container: {
    my: 2,
    px: 2,
    overflow: "visible"
  },
  cardHeaderTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 1
  },
  cardContent: {
    p: 2.5
  },
  cardContentInner: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    py: 1,
    width: "100%",
  },
  featureContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    gap: 1
  },
  featureContainerEnd: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 1
  },
  featureChips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
    my: 1,
    mt: 1
  },
  featureChipsPractical: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    my: 0.5,
    mt: 1
  },
  learnerSection: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 1,
    mt: 2
  },
  sliderMarks: {
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "bold"
  },
  sliderMarksSecondary: {
    color: "text.secondary",
    mb: 1.5,
    fontSize: ".9rem"
  },
  sliderMarksOther: {
    textAlign: "center",
    fontSize: (index) => index === 0 ? "0.75rem" : "1rem"
  },
  sliderMarksPrice: {
    color: "primary.main",
    fontWeight: "bold",
    mt: 0.5
  },
  sliderPriceText: {
    color: "primary.main",
    fontWeight: "bold",
    mt: 0.5
  },
  academySliderMarks: {
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "bold"
  },
  academySliderPrice: {
    color: "text.secondary",
    mb: 1.5,
    fontSize: ".9rem"
  },
  unitQuantitySection: {
    mt: 2,
    justifyContent: "center"
  },
  unitQuantityTitle: {
    fontSize: "1rem",
    mb: 1
  },
  pricingPaper: {
    p: 2.5,
    mt: 2,
    background: "linear-gradient(135deg, rgba(0, 179, 159, 0.08) 0%, rgba(0, 179, 159, 0.12) 100%)",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: 2,
    maxWidth: 600,
    mx: "auto"
  },
  pricingHeader: {
    marginBottom: "0.75rem"
  },
  pricingItems: {
    gap: 1.5,
    mb: 2
  },
  enterpriseUserSection: {
    display: "flex",
    alignItems: "center"
  },
  enterpriseUserInput: {
    width: "5rem",
    ml: 1,
    "& .MuiInputBase-input": {
      py: "0.25rem"
    }
  },
  totalSection: {
    textAlign: "right",
    margin: 0
  },
  costDisplay: {
    fontSize: 14,
    textAlign: "left",
    margin: 0
  },
  priceComponent: {
    fontSize: ".8rem",
    fontFamily: QANELAS_FONT
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    mt: 1
  },
  disclaimerSection: {
    my: 6,
    mb: 2,
    justifyContent: "space-between"
  }
};

// Toggle button styles
export const toggleButtonStyles = {
  base: {
    px: 1,
    py: 0.5,
    fontSize: "0.75rem",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: QANELAS_FONT,
    minWidth: "auto",
    textAlign: "center"
  },
  container: {
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "6px",
    padding: "2px",
    backgroundColor: "background.paper",
    minWidth: "auto",
    maxWidth: "140px",
    height: "32px"
  }
};

// Slider styles
export const sliderStyles = {
  base: {
    mb: 2,
    width: "80%",
    display: "flex",
    justifyContent: "center"
  },
  baseOther: {
    mb: 2,
    display: "flex",
    justifyContent: "center"
  },
  valueLabel: {
    backgroundColor: "#363F49",
    color: "white",
    fontFamily: QANELAS_FONT,
    borderRadius: "8px",
    padding: "8px 12px",
    "&:before": {
      borderTopColor: "#363F49"
    }
  },
  marks: {
    fontFamily: QANELAS_FONT
  }
};

// Icon styles
export const iconStyles = {
  calculate: {
    fontSize: 24,
    color: (theme) => theme.palette.background.secondary
  },
  cloud: {
    color: (theme) => theme?.palette?.background?.inverse || "#FFFFFF"
  },
  group: {
    color: (theme) => theme?.palette?.background?.inverse || "#00B39F"
  }
};

// Card styles
export const cardStyles = {
  main: {
    overflow: "visible",
    maxWidth: 600,
    mx: "auto",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: 2,
    zIndex: 1,
    marginTop: "24px",
    paddingBottom: "1rem"
  },
  header: {
    background: "linear-gradient(135deg, rgba(0, 179, 159, 0.05) 0%, rgba(0, 179, 159, 0.1) 100%)",
    borderBottom: "1px solid",
    borderColor: "divider",
    py: 1.5,
    px: 2
  }
};

// FormControlLabel styles
export const formControlStyles = {
  base: {
    display: "flex",
    justifySelf: "flex-end",
    marginRight: -1,
    marginTop: "-0.5rem",
    marginLeft: 1,
    padding: 0,
    alignItems: "flex-start"
  },
  switch: {
    margin: 0,
    display: "flex",
    gap: 1,
    alignSelf: "flex-end"
  }
};

// FeatureDetails styles
export const featureDetailsStyles = {
  base: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

// Helper functions for dynamic styles
export const getToggleButtonStyle = (isActive, baseStyle) => ({
  ...baseStyle,
  fontWeight: isActive ? 600 : 400,
  color: isActive ? "white" : "text.primary",
  backgroundColor: isActive ? "primary.main" : "transparent",
  "&:hover": {
    backgroundColor: isActive ? "primary.dark" : "action.hover",
  },
});

export const getSliderStyle = (baseStyle, fontSize = "1rem") => ({
  ...baseStyle,
  "& .MuiSlider-valueLabel": {
    ...sliderStyles.valueLabel,
    fontSize: fontSize,
  },
  "& .MuiSlider-mark": sliderStyles.marks,
  "& .MuiSlider-markLabel": sliderStyles.marks,
});
