import React from "react";

import SEO from "../../components/seo";
import FAQ from "../../sections/General/Faq";

import DiscussCallout from "../../sections/Discuss-Callout";
const FAQPage = () => {
  return (
    <>
      <FAQ category={["all"]} />
      <DiscussCallout />

    </>
  );
};
export default FAQPage;
export const Head = () => {
  return <SEO title="FAQs" description="Frequently Asked Questions" />;
};