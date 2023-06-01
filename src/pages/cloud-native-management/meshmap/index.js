import React from "react";

import SEO from "../../../components/seo";

import Meshmap from "../../../sections/Meshmap/index";
import Footer from "../../../sections/General/Footer";
const MeshmapPage = ({ location }) => {
  return (
    <>
      <Meshmap  />
      <Footer location={location} />

    </>
  );
};
export default MeshmapPage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};