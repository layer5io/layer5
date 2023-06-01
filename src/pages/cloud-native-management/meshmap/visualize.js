import React from "react";

import SEO from "../../../components/seo";

import MeshmapVisualize from "../../../sections/Meshmap/Meshmap-visualize/index";
import Footer from "../../../sections/General/Footer";
const MeshmapVisualizePage = ({ location }) => {

  return (
    <>
      <MeshmapVisualize />
      <Footer location={location} />


    </>
  );
};
export default MeshmapVisualizePage;


export const Head = () => {
  return <SEO title="MeshMap Visualizer" description="Import your existing Kubernetes, Helm, or Docker Compose applications, monitor various performance metrics and see your clusters in-action." />;
};