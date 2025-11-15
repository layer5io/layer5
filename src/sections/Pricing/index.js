import React, { useState, useRef, useEffect } from "react";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import options from "./generatePlans";
import PlanCard from "../../components/Pricing/PlanCard";
import OpenSourceBanner from "./openSource";
import { PricingAddons } from "../../components/Pricing/PricingAddons";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@sistent/sistent";
import { Currencies } from "../../utils/currencies";
import {
  toggleButtonStyles,
  getToggleButtonStyle,
} from "../../components/Pricing/PricingAddons/styles.js";

const customToggleButtonStyles = {
  container: {
    ...toggleButtonStyles.container,
    backgroundColor: "transparent",
    p: "6px",
    minHeight: "42px",
    minWidth: "50px",
    borderColor: "#ffffffff"
  },
  base: {
    py: 0.5,
    px: 4,
    fontSize: "4rem",
    ...toggleButtonStyles.base,
  },
};

const getCustomToggleButtonStyle = (isActive, baseStyle) => ({
  ...getToggleButtonStyle(isActive, baseStyle),
  backgroundColor: isActive ? "#00B39F" : "transparent",
  color: isActive ? "#fffcfcff" : "#fff",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: isActive ? "#009B8A" : "transparent",
  },
});

export const CurrencySelect = ({ currency, setCurrency }) => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const el = toggleRef.current ?? containerRef.current;
    if (!el) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              setOpen(false);
            }
          });
        },
        { root: null, threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }

    let ticking = false;
    const checkRect = () => {
      const currentEl = toggleRef.current ?? containerRef.current;
      if (!currentEl) return;

      const rect = currentEl.getBoundingClientRect();
      const isOutOfView =
        rect.bottom < 0 ||
        rect.top > window.innerHeight ||
        rect.right < 0 ||
        rect.left > window.innerWidth;

      if (isOutOfView) {
        setOpen(false);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          checkRect();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", checkRect, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", checkRect);
    };
  }, [open]);

  return (
    <FormControl
      ref={containerRef}
      variant="outlined"
      size="small"
      sx={{
        minWidth: 150,
        "& .MuiInputLabel-root": {
          color: "white",
          "&.Mui-focused": { color: "#00B39F" },
        },
        "& .MuiOutlinedInput-root": {
          color: "white",
          "& .MuiSelect-icon": { color: "white" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00B39F",
          },
        },
        "&:hover": {
          "& .MuiInputLabel-root": { color: "#00B39F" },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00B39F",
            borderWidth: "2px",
          },
        },
      }}
    >
      <InputLabel id="currency-selector-label">Currency</InputLabel>

      <Select
        ref={toggleRef}
        labelId="currency-selector-label"
        value={currency}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
        renderValue={(value) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff" }}>
            <Typography variant="body1">{Currencies[value]?.symbol}</Typography>
            <Typography variant="body2">{Currencies[value]?.name}</Typography>
          </Box>
        )}
        MenuProps={{
          disablePortal: true,
          disableScrollLock: true,
          PaperProps: {
            sx: {
              backgroundColor: "#1E1E1E",
              color: "white",
              maxHeight: 300,
              overflowY: "auto",
              position: "absolute",
            },
          },
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          marginThreshold: 0,
        }}
      >
        {Object.entries(Currencies).map(([code, { symbol, name }]) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body1">{symbol}</Typography>
              <Typography variant="body2">{name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};


const Pricing = () => {
  // const [monthly, setMonthly] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <PricingWrapper>
      <div className="headers">
        <h1 className="header-heading">Plans For Every Team Size</h1>

        <div className="header-controls" style={{ display: "flex", "gap": "1rem", alignItems: "center", "justifyContent": "flex-end", width: "85%" }} >
          <CurrencySelect currency={currency} setCurrency={setCurrency} />

          <Box sx={customToggleButtonStyles.container}>
            <Box
              onClick={() => setIsYearly(false)}
              sx={getCustomToggleButtonStyle(!isYearly, customToggleButtonStyles.base)}
            >
              Monthly
            </Box>
            <Box
              onClick={() => setIsYearly(true)}
              sx={getCustomToggleButtonStyle(isYearly, customToggleButtonStyles.base)}
            >
              Yearly
            </Box>
          </Box>
        </div>

      </div>

      <div className="wrapper">
        <PlanCard planData={options} isYearly={isYearly} currency={currency} />
      </div>
      <div style={{ marginTop: "7rem", marginBottom: "3rem" }}>
        <PricingAddons isYearly={isYearly} setIsYearly={setIsYearly} currency={currency} enterprisePlan={options.filter(opt => opt.tier == "Enterprise")[0]} />
      </div>
      <Comparison />
      <Reviews />
      <OpenSourceBanner />
      <FAQ category={["Pricing", "Billing"]} />
    </PricingWrapper>
  );

};


export default Pricing;
