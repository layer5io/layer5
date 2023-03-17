import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ConnectPage from "../../../sections/Community/Handbook/connect";
import Footer from "../../../sections/General/Footer";
const Connect = () => {
  return (
    <Layout>
      <ConnectPage />
      <Footer />
    </Layout>
  );
};
export default Connect;
export const Head = () => {
  return <SEO title="Connect With Us" description="We are a community of like-minded people with over a thousand members. Join our Slack Workspace and interact with people" />;
};