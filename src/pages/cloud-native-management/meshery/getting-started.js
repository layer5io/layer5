import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import loadable from "@loadable/component";
const MesheryPlatforms = loadable(() => import ("../../../sections/Meshery/Meshery-platforms"));
const MesheryManageMesh = loadable(() => import ("../../../sections/Meshery/Meshery-mange-mesh"));
const MesheryQuotes = loadable(() => import ("../../../sections/Meshery/Meshery-quotes"));
const Footer = loadable(() => import ("../../../sections/General/Footer"));
const MesheryMainPage = () => {
  return (
    <Layout>
      <MesheryTerminal />
      <MesheryPlatforms />
      <MesheryManageMesh />
      <MesheryQuotes />
      <Footer />
    </Layout>
  );
};
export default MesheryMainPage;
export const Head = () => {
  return <SEO title="Meshery Getting Started"
    description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
    image="/images/meshery-logo-dark-text.png" />;
};