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
  return <SEO title="Google Cloud Platform (GCP) Architecture Diagramming"
    description="Create your own Google Cloud Platform solution architecture and collaborative, visual diagrams with Kanvas."
    image="/images/meshery-logo-dark-text.webp" />;
};