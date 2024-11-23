import React from "react";

import SEO from "../../../components/seo";

import KanvasDesign from "../../../sections/Kanvas/Kanvas-design/index";
const KanvasDesignPage = () => {
  return (
    <>
      <KanvasDesign  />

    </>
  );
};
export default KanvasDesignPage;
export const Head = () => {
  return <SEO title="Kanvas Designer" description="Design your infrastructure using a palette of thousands of versioned Kubernetes components. Say goodbye to YAML." />;
};