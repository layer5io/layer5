import React from "react";

import SEO from "../../components/seo";
import FAQ from "../../sections/General/Faq";

import DiscussCallout from "../../sections/Discuss-Callout";
import Footer from "../../sections/General/Footer";
const FAQPage = ({ location }) => {
  return (
    <>
      <FAQ category={["all"]} />
      <DiscussCallout />
      <Footer location={location} />

    </>
  );
};
export default FAQPage;
export const Head = () => {
  return <SEO title="FAQs" description="Frequently Asked Questions" />;
};