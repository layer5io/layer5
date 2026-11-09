import React from "react";

import SEO from "../../../components/seo";

import CompanyPrivacy from "../../../sections/Company/Legal/privacy";
const Privacy = () => {
  return (
    <>
      <CompanyPrivacy />

    </>
  );
};
export default Privacy;
export const Head = () => {
  return <SEO title="Privacy" description="At Layer5, we value your right to privacy." />;
};