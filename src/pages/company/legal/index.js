import React from "react";

import SEO from "../../../components/seo";

import TrustCenter from "../../../sections/Company/Legal/index";
const LegalIndex = () => {
  return (
    <>
      <TrustCenter  />

    </>
  );
};
export default LegalIndex;
export const Head = () => {
  return  <SEO title="Layer5 Trust Center"
    description="Layer5 is committed to maintaining the trust and confidence of our users. We want you to know that we are dedicated to protecting your privacy and ensuring the security of your personal information."
  />;
};