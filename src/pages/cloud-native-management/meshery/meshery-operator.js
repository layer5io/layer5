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
  return <SEO title="Meshery Operator"
    description="Meshery Operator is the multi-service mesh operator that manages MeshSync and it’s messaging broker."
    image="/images/meshery-operator.png" />;
};