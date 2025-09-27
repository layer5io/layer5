import React from "react";
import SEO from "../../../components/seo";
import DigitalServicesNotice from "../../../sections/Company/Legal/digital-service";

const DigitalServicePage = () => {
  return (
    <>
      <DigitalServicesNotice />
    </>
  );
};

export default DigitalServicePage;

export const Head = () => {
  return (
    <SEO
      title="Digital Services Notice"
      description="Layer5's commitment to transparency, safety, and user rights across our digital platforms."
    />
  );
};