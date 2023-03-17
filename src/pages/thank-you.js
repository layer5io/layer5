import React from "react";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import ThankYou from "../sections/thank-you/thank-you";
const ThankYouSection = () => {
  return (
    <Layout>
      <ThankYou />
      <Footer />
    </Layout>
  );
};
export default ThankYouSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};