import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import CommunityPage from "../../../sections/Community/Handbook/community";
import Footer from "../../../sections/General/Footer";
const Community = () => {
  return (
    <Layout>
      <CommunityPage  />
      <Footer />
    </Layout>
  );
};
export default Community;
export const Head = () => {
  return <SEO title="Community" description="Community guidelines" />;
};