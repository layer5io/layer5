import React from "react";

import SEO from "../components/seo";
import DeployServiceMesh from "../sections/DeployServiceMesh/index";
import Footer from "../sections/General/Footer";
const DeployServiceMeshPage = ({ location }) => {
  return (
    <>
      <DeployServiceMesh />
      <Footer location={location} />

    </>
  );
};
export default DeployServiceMeshPage;
export const Head = () => {
  return <SEO title="when should i deploy service mesh" description="when should i deploy service mesh question form." />;
};