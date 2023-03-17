import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import RecognitionPage from "../../../sections/Community/Handbook/recognition";
import Footer from "../../../sections/General/Footer";
const Recognition = () => {
  return (
    <Layout>
      <RecognitionPage  />
      <Footer />
    </Layout>
  );
};
export default Recognition;
export const Head = () => {
  return <SEO title="Recognizing and Appreciating Open Source Community Members" description="Layer5 readily recognizes and publicly appreciates its community members." />;
};