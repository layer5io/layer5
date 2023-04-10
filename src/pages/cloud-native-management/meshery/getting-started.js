import React from "react";

import SEO from "../../../components/seo";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import loadable from "@loadable/component";
const MesheryPlatforms = loadable(() => import ("../../../sections/Meshery/Meshery-platforms"));
const MesheryManageMesh = loadable(() => import ("../../../sections/Meshery/Meshery-mange-mesh"));
const MesheryQuotes = loadable(() => import ("../../../sections/Meshery/Meshery-quotes"));
const MesheryMainPage = () => {
  return (
    <>
      <MesheryTerminal />
      <MesheryPlatforms />
      <MesheryManageMesh />
      <MesheryQuotes />

    </>
  );
};
export default MesheryMainPage;
export const Head = () => {
  return <SEO title="Meshery Getting Started"
    description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
    image="/images/meshery-logo-dark-text.png" />;
};