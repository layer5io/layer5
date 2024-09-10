import React from "react";

import SEO from "../../../components/seo";

import KanvasVisualize from "../../../sections/Kanvas/Kanvas-visualize/index";

const KanvasVisualizePage = () => {

  return (
    <>
      <KanvasVisualize />

    </>
  );
};
export default KanvasVisualizePage;


export const Head = () => {
  return <SEO title="Kanvas Visualizer" description="Import your existing Kubernetes, Helm, or Docker Compose applications, monitor various performance metrics and see your clusters in-action." />;
};