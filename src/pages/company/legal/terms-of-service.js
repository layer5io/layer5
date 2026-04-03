import React from "react";

import SEO from "../../../components/seo";

import Terms from "../../../sections/Company/Legal/terms-of-service";
const TermsOfService = () => {
  return (
    <>
      <Terms />

    </>
  );
};
export default TermsOfService;
export const Head = () => {
  return <SEO title="Terms of Service" description="We believe innovation is furthered by collaboration and that collaboration is enabled by infrastructure." />;
};
