import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MesheryPage from "../../../sections/Meshery";
import Footer from "../../../sections/General/Footer";
const Meshery = () => {
  return (
    <Layout>
      <MesheryPage />
      <Footer />
    </Layout>
  );
};
export default Meshery;
export const Head = () => {
  return  <SEO title="Meshery"
    description="Lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};