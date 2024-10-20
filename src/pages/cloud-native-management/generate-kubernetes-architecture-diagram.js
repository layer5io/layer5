import React from "react";

import SEO from "../../components/seo";
import KubernetesDiagram from "../../sections/Kubernetes-Diagram";

const Kubernetes = () => {
  return (
    <>
      <KubernetesDiagram />
    </>
  );
};
export default Kubernetes;
export const Head = () => {
  return <SEO title="Kubernetes Architecture Diagram"
    description="Create your own Kubernetes diagrams with Kanvas."
    image="/images/meshery-logo-dark-text.webp" />;
};