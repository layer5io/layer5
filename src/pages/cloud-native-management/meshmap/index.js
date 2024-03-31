import React from "react";

import SEO from "../../../components/seo";

import Meshmap from "../../../sections/Meshmap/index";
const MeshmapPage = ({ location: { search } }) => {
  const { teaser: parameter1 = "" } = new URLSearchParams(search);
  const teaser = parameter1 === "play";
  return <Meshmap teaser={teaser} />;
};
export default MeshmapPage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, infrastructure components, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};
