import React from "react";
import SEO from "../components/seo";


import PricingPage from "../sections/Pricing";
const Pricing = () => {
  return (
    <>
      <PricingPage />

    </>
  );
};
export default Pricing;
export const Head = () => {
  return  <SEO title="Pricing" description="Layer5 Pricing" />;
};