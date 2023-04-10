import React from "react";

import SEO from "../../../components/seo";

import MeshmapCollaborate from "../../../sections/Meshmap/Meshmap-collaborate";
const MeshmapCollaboratePage = () => {
  return (
    <>
      <MeshmapCollaborate  />

    </>
  );
};
export default MeshmapCollaboratePage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};