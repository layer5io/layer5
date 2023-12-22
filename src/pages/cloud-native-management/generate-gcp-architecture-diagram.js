import React from "react";

import SEO from "../../components/seo";
import GcpDiagram from "../../sections/GCP-Diagram";

const Gcp = () => {
  return (
    <>
      <GcpDiagram />
    </>
  );
};
export default Gcp;
export const Head = () => {
  return <SEO title="GCP Architecture Diagram"
    description="Create your own Google Cloud Platform diagrams with Meshmap."
    image="/images/meshery-logo-dark-text.webp" />;
};