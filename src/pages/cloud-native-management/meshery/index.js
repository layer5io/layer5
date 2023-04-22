import React from "react";

import SEO from "../../../components/seo";
import MesheryPage from "../../../sections/Meshery";

const Meshery = () => {
  return (
    <>
      <MesheryPage />

    </>
  );
};
export default Meshery;
export const Head = () => {
  return  <SEO title="Meshery"
    description="Lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};