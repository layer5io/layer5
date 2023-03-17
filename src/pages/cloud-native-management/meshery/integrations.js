import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import MesheryIntegration from "../../../sections/Meshery/Meshery-integrations";
const Integrations = () => {
  return (
    <Layout>
      <MesheryIntegration />
      <Footer />
    </Layout>
  );
};
export default Integrations;
export const Head = () => {
  return <SEO title="Meshery Integrations"
    description="A collection of supported Meshery Integrations."
  />;
};