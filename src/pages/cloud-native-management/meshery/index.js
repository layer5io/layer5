import React from "react";

import SEO from "../../../components/seo";
import MesheryPage from "../../../sections/Meshery";
import Footer from "../../../sections/General/Footer";
const Meshery = ({ location }) => {
  return (
    <>
      <MesheryPage />
      <Footer location={location} />


    </>
  );
};
export default Meshery;
export const Head = () => {
  return  <SEO title="Meshery"
    description="Lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};