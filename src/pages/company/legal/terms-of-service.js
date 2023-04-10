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
  return <SEO title="Terms of Service" description="Layer5's cloud native application and infrastructure management software enables organizations to expect more from their infrastructure.
  Layer5 is the makers of Meshery and service mesh standards.
" />;
};