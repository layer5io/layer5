import React from "react";

import SEO from "../components/seo";
import Footer from "../sections/General/Footer";

const Actions = () => {
  return (
    <>
      <h2>Actions Page</h2>
      <Footer/>
    </>
  );
};
export default Actions;
export const Head = () => {
  return (
    <SEO
      title="Service Mesh performance GitHub Actions"
      description="Test your Kubernetes cluster and service mesh implementation for conformance with the SMI specification"
      image="/images/meshery-logo-dark-text.png"
    />
  );
};
