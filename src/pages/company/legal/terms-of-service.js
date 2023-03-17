import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import Terms from "../../../sections/Company/Legal/terms-of-service";
const TermsOfService = () => {
  return (
    <Layout>
      <Terms />
      <Footer />
    </Layout>
  );
};
export default TermsOfService;
export const Head = () => {
  return <SEO title="Terms of Service" description="Layer5's cloud native application and infrastructure management software enables organizations to expect more from their infrastructure.
  Layer5 is the makers of Meshery and service mesh standards.
" />;
};