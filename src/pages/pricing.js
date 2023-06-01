import React from "react";
import SEO from "../components/seo";


import PricingPage from "../sections/Pricing";
import Footer from "../sections/General/Footer";
const Pricing = ({ location }) => {
  return (
    <>
      <PricingPage />
      <Footer location={location} />


    </>
  );
};
export default Pricing;
export const Head = () => {
  return  <SEO title="Pricing" description="Layer5 Pricing" />;
};