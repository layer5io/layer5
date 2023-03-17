import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import SecurityVulnerabilitiesPage from "../../../sections/Community/Handbook/security-vulnerabilities";
import Footer from "../../../sections/General/Footer";
const SecurtyVulnerabilities = () => {
  return (
    <Layout>
      <SecurityVulnerabilitiesPage />
      <Footer />
    </Layout>
  );
};
export default SecurtyVulnerabilities;
export const Head = () => {
  return <SEO title="Securty Vulnerabilities" description="Reporting a vulnerability" />;
};