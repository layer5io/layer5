import React from "react";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import CommunityManagers from "../../sections/Community/CommunityManagers";
const ManagersPage = () => {
  return (
    <Layout>
      <CommunityManagers />
      <Footer />
    </Layout>
  );
};
export default ManagersPage;
export const Head = () => {
  return <SEO title="Community Managers"
    description="Layer5 Community Managers have an innate drive to contribute to the community's prosperity and that of our individual contributors' prosperity."
  />;
};