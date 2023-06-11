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
  return <SEO title="MeshMap Collaboration" description="Build an iterative design flow with live collaboration that keeps you in the loop whether you are working in the office or remotely." />;
};