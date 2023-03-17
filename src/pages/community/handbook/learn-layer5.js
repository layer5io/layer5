import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import LearnPage from "../../../sections/Community/Handbook/learn5";
import Footer from "../../../sections/General/Footer";
const CommunityLearn = () => {
  return (
    <Layout>
      <LearnPage />
      <Footer />
    </Layout>
  );
};
export default CommunityLearn;
export const Head = () => {
  return <SEO title="Learn Layer5" description="We have put together good learning materials and resources to guide you through learning about cloud native infrastucture." />;
};