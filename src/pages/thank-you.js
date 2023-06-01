import React from "react";
import SEO from "../components/seo";

import ThankYou from "../sections/thank-you/thank-you";
import Footer from "../sections/General/Footer";
const ThankYouSection = ({ location }) => {
  return (
    <>
      <ThankYou />
      <Footer location={location} />

    </>
  );
};
export default ThankYouSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};