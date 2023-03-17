import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import MeshmapCollaborate from "../../../sections/Meshmap/Meshmap-collaborate";
const MeshmapCollaboratePage = () => {
  return (
    <Layout>
      <MeshmapCollaborate  />
      <Footer />
    </Layout>
  );
};
export default MeshmapCollaboratePage;
export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};