import React from "react";

import SEO from "../../../components/seo";

import MesheryIntegration from "../../../sections/Meshery/Meshery-integrations";
const Integrations = () => {
  return (
    <>
      <MesheryIntegration />

    </>
  );
};
export default Integrations;
export const Head = () => {
  return <SEO title="Meshery Integrations"
    description="A collection of supported Meshery Integrations."
  />;
};