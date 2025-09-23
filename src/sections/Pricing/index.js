import React, { useState } from "react";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import options from "./generatePlans";
import PlanCard from "../../components/Pricing/PlanCard";
import OpenSourceBanner from "./openSource";
import { PricingAddons } from "../../components/Pricing/PricingAddons";
import SubscriptionToggle from "./SubscriptionToggle";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@sistent/sistent";
import { Currencies } from "../../utils/currencies";

export const CurrencySelect = ({ currency, setCurrency }) => {
  return (
     <FormControl
      variant="outlined"
      size="small"
      sx={{
        minWidth: 150,
        "& .MuiInputLabel-root": { color: "white" }, 
        "& .MuiInputLabel-root.Mui-focused": { color: '#00B39F' }, 
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, 
        "& .MuiSelect-icon": { color: "white" }, 
        "& .MuiSelect-select": { color: "white" }, 
        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, 
      }}
    >
      <InputLabel >Currency</InputLabel>
      <Select
        value={currency}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00B39F", 
          },
        }}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
        renderValue={(value) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff" }}>
            <Typography variant="body1">{Currencies[value].symbol}</Typography>
            <Typography variant="body2">{Currencies[value].name}</Typography>
          </Box>
        )}
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

        <div style={{ display: "flex", "gap": "1rem", alignItems: "center", "justifyContent": "flex-end", width: "85%" }} >
          <CurrencySelect currency={currency} setCurrency={setCurrency} />

          <SubscriptionToggle isYearly={isYearly} setIsYearly={setIsYearly} />
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
