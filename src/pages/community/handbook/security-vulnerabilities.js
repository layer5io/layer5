import React from "react";

import SEO from "../../../components/seo";
import SecurityVulnerabilitiesPage from "../../../sections/Community/Handbook/security-vulnerabilities";

const SecurtyVulnerabilities = () => {
  return (
    <>
      <SecurityVulnerabilitiesPage />

    </>
  );
};
export default SecurtyVulnerabilities;
export const Head = () => {
  return <SEO title="Securty Vulnerabilities" description="Reporting a vulnerability" />;
};