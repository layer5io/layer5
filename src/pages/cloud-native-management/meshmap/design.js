import React from "react";

import SEO from "../../../components/seo";

import MeshmapDesign from "../../../sections/Meshmap/Meshmap-design/index";
import Footer from "../../../sections/General/Footer";
const MeshmapDesignPage = ({ location }) => {
  return (
    <>
      <MeshmapDesign  />
      <Footer location={location} />

    </>
  );
};
export default MeshmapDesignPage;
export const Head = () => {
  return <SEO title="MeshMap Designer" description="Design your infrastructure using a palette of thousands of versioned Kubernetes components. Say goodbye to YAML." />;
};