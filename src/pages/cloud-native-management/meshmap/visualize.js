import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import MeshmapVisualize from "../../../sections/Meshmap/Meshmap-visualize/index";

const MeshmapVisualizePage = () => {

  return (
    <Layout>
      <MeshmapVisualize />
      <Footer />
    </Layout>
  );
};
export default MeshmapVisualizePage;


export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};