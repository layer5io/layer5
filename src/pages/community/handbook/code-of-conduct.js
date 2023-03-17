import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ConductPage from "../../../sections/Community/Handbook/conduct";
import Footer from "../../../sections/General/Footer";
const CommunityConduct = () => {
  return (
    <Layout>
      <ConductPage />
      <Footer />
    </Layout>
  );
};
export default CommunityConduct;
export const Head = () => {
  return <SEO title="Code Of Conduct" description="Layer5 follows the CNCF Code of Conduct" />;
};