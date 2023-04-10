import React from "react";
import SEO from "../components/seo";


import ThankYou from "../sections/thank-you/thank-you";
const ThankYouSection = () => {
  return (
    <>
      <ThankYou />

    </>
  );
};
export default ThankYouSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};