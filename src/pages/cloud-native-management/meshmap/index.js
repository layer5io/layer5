import React from "react";

import SEO from "../../../components/seo";

import Meshmap from "../../../sections/Meshmap/index";
const MeshmapPage = () => {
  return (
    <>
      <Meshmap  />

    </>
  );
};
export default MeshmapPage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};