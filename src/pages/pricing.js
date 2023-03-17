import React from "react";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import PricingPage from "../sections/Pricing";
const Pricing = () => {
  return (
    <Layout>
      <PricingPage />
      <Footer />
    </Layout>
  );
};
export default Pricing;
export const Head = () => {
  return  <SEO title="Pricing" description="Layer5 Pricing" />;
};