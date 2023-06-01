import React from "react";

import SEO from "../../../components/seo";
import Faqs from "../../../sections/Community/Handbook/faq";
import Footer from "../../../sections/General/Footer";

const Faq = ({ location }) => {
  return (
    <>
      <Faqs />
      <Footer location={location} />
    </>
  );
};
export default Faq;
export const Head = () => {
  return <SEO title="FAQ" description="Frequently Asked Questions" />;
};