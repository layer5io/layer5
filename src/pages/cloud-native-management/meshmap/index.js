import React from "react";

import SEO from "../../../components/seo";

import Meshmap from "../../../sections/Meshmap/index";
const MeshmapPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const parameter1 = params.get("teaser");
  return (
    <>
      <Meshmap teaser={parameter1 === "play"} />
    </>
  );
};
export default MeshmapPage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, infrastructure components, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};
