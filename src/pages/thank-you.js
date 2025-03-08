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
  return <SEO title="Layer5 Newsletter" description="Cloud native application and infrastructure management software for engineers who expect more from their infrastructure." />;
};