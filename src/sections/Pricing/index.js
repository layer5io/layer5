import React, { useState, Suspense, lazy, useCallback, useMemo, useEffect } from "react";
import PricingWrapper from "./pricing.style";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import options from "./generatePlans";
import PlanCard from "../../components/Pricing/PlanCard";
import OpenSourceBanner from "./openSource";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@sistent/sistent";
import { Currencies } from "../../utils/currencies";
import {
  toggleButtonStyles,
  getToggleButtonStyle,
} from "../../components/Pricing/PricingAddons/styles.js";

const LazyComparison = lazy(() => import("./comparison"));
const LazyReviews = lazy(() => import("./review-slider"));
const LazyOpenSourceBanner = lazy(() => import("./openSource"));
const LazyFAQ = lazy(() => import("../General/Faq"));
const LazyPricingAddons = lazy(() => import("../../components/Pricing/PricingAddons").then(module => ({ default: module.PricingAddons })));

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

export const CurrencySelect = React.memo(({ currency, setCurrency }) => {
  const handleCurrencyChange = useCallback((e) => {
    setCurrency(e.target.value);
  }, [setCurrency]);

  const formControlSx = useMemo(() => ({
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
  }), []);

  const currencyEntries = useMemo(() => Object.entries(Currencies), []);

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={formControlSx}
    >
      <InputLabel id="currency-selector-label">Currency</InputLabel>
      <Select
        labelId="currency-selector-label"
        value={currency}
        onChange={handleCurrencyChange}
        label="Currency"
        MenuProps={{
          disableScrollLock: true,
          marginThreshold: null,
        }}
        renderValue={(value) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff" }}>
            <Typography variant="body1">{Currencies[value]?.symbol}</Typography>
            <Typography variant="body2">{Currencies[value]?.name}</Typography>
          </Box>
        )}
      >
        {currencyEntries.map(([code, { symbol, name }]) => (
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
});

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [renderHeavyComponents, setRenderHeavyComponents] = useState(false);

  const handleYearlyToggle = useCallback((yearly) => {
    setIsYearly(yearly);
  }, []);

  const handleCurrencyChange = useCallback((newCurrency) => {
    setCurrency(newCurrency);
  }, []);

  const enterprisePlan = useMemo(() => options.filter(opt => opt.tier == "Enterprise")[0], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderHeavyComponents(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PricingWrapper>
      <div className="headers">
        <h1 className="header-heading">Plans For Every Team Size</h1>

        <div className="header-controls" style={{ display: "flex", "gap": "1rem", alignItems: "center", "justifyContent": "flex-end", width: "85%" }} >
          <CurrencySelect currency={currency} setCurrency={handleCurrencyChange} />

          <Box sx={customToggleButtonStyles.container}>
            <Box
              onClick={() => handleYearlyToggle(false)}
              sx={getCustomToggleButtonStyle(!isYearly, customToggleButtonStyles.base)}
            >
              Monthly
            </Box>
            <Box
              onClick={() => handleYearlyToggle(true)}
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
      
      {/* Lazy load PricingAddons to reduce TBT - defer until after paint */}
      {renderHeavyComponents && (
        <Suspense fallback={<div style={{ height: "500px", marginTop: "7rem", marginBottom: "3rem" }} />}>
          <div style={{ marginTop: "7rem", marginBottom: "3rem" }}>
            <LazyPricingAddons isYearly={isYearly} setIsYearly={handleYearlyToggle} currency={currency} enterprisePlan={enterprisePlan} />
          </div>
        </Suspense>
      )}
      
      {/* Lazy load below-fold components - defer until after paint */}
      {renderHeavyComponents && (
        <>
          <Suspense fallback={<div style={{ height: "300px" }} />}>
            <LazyComparison />
          </Suspense>
          <Suspense fallback={<div style={{ height: "400px" }} />}>
            <LazyReviews />
          </Suspense>
          <Suspense fallback={<div style={{ height: "150px" }} />}>
            <LazyOpenSourceBanner />
          </Suspense>
          <Suspense fallback={<div style={{ height: "300px" }} />}>
            <LazyFAQ category={["Pricing", "Billing"]} />
          </Suspense>
        </>
      )}
    </PricingWrapper>
  );
};

export default Pricing;
