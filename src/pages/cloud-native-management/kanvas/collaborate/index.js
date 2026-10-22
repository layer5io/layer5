import React from "react";

import SEO from "../../../../components/seo";

import KanvasCollaborate from "../../../../sections/Kanvas/Kanvas-collaborate";
const KanvasCollaboratePage = () => {
  return (
    <>
      <KanvasCollaborate  />

    </>
  );
};
export default KanvasCollaboratePage;
export const Head = () => {
  return <SEO title="Collaborative GitOps" description="Build an iterative design flow with live collaboration that keeps you in the loop whether you are working in the office or remotely." />;
};