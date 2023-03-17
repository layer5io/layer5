import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import Community from "../../sections/Community";
const CommunityIndex = () => {
  return (
    <Layout>
      <Community  />
      <Footer />
    </Layout>
  );
};
export default CommunityIndex;
export const Head = () => {
  return  <SEO title="Award-winning Open Source Community"
    description="The Cloud Native Management Community at Layer5 - Learn, Share, Engage.
           Join the award-winning open source community - the warmest and most welcoming open source community around."
  />;
};