import React from "react";

import SEO from "../../../components/seo";

import MeshmapDesign from "../../../sections/Meshmap/Meshmap-design/index";
const MeshmapDesignPage = () => {
  return (
    <>
      <MeshmapDesign  />

    </>
  );
};
export default MeshmapDesignPage;
export const Head = () => {
  return <SEO title="MeshMap Designer" description="Design your infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations." />;
};