import React from "react";

import SEO from "../../../components/seo";
import MesheryOperatorPage from "../../../sections/Meshery/meshery-operator";

const MesheryOperator = () => {
  return (
    <>
      <MesheryOperatorPage />
    </>
  );
};
export default MesheryOperator;
export const Head = () => {
  return (
    <SEO
      title="Meshery Operator"
      description="Meshery Operator is the multi-cluster Kubernetes operator that manages MeshSync and its messaging broker."
      image="/images/meshery-operator.webp"
    />
  );
};
