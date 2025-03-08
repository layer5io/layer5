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
  return <SEO title="Privacy" description="Contact Layer5 for help with operating a service mesh.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />;
};