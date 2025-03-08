import React from "react";
import SEO from "../../components/seo";
import OpenSourcePricingPage from "../../sections/Community/Open-Source-Program";

const OpenSourcePricingProgramPage = () => {
  return (
    <>
      <OpenSourcePricingPage  />
    </>
  );
};
export default OpenSourcePricingProgramPage;
export const Head = () => {
  return <SEO title="Layer5 Open Source Program"
    description="Layer5, empowerer of engineers. At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration."
    image="/images/Layer5-overview.svg" />;
};
