import React, { useState } from "react";
import PricingWrapper from "./pricing.style";
import Comparison from "./comparison";
import FAQ from "../General/Faq";
import Reviews from "./review-slider";
import options from "./generatePlans";
import PlanCard from "../../components/PlanCard";
import OpenSourceBanner from "./openSource";
import { PricingAddons } from "../../components/PricingAddons";
import SubscriptionToggle from "./SubscriptionToggle";

const Pricing = () => {
  // const [monthly, setMonthly] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <PricingWrapper>
      <div className="headers">
        <h1 className="header-heading">Plans For Every Team Size</h1>

        <SubscriptionToggle isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* <svg className="header-svg" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
      <polygon fill="rgba(0,179,159,0.2)" points="50,50 100,0 100,100"/>
        </svg> */}
      </div>

      <div className="wrapper">
        <PlanCard planData={options} isYearly={isYearly}/>
      </div>
      <div className="wrapper">
        <PricingAddons isYearly={isYearly} sx={{ marginTop: "6rem" }} />
      </div>
      <Comparison />
      <Reviews />
      <OpenSourceBanner />
      <FAQ category={["Pricing", "Billing"]} />
    </PricingWrapper>
  );
};


export default Pricing;
