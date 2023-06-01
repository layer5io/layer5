import React from "react";

import SEO from "../../../components/seo";
import MesheryIntegration from "../../../sections/Meshery/Meshery-integrations";
import Footer from "../../../sections/General/Footer";
const Integrations = ({ location }) => {
  return (
    <>
      <MesheryIntegration />
      <Footer location={location} />

    </>
  );
};
export default Integrations;
export const Head = () => {
  return <SEO title="Meshery Integrations"
    description="A collection of supported Meshery Integrations."
  />;
};