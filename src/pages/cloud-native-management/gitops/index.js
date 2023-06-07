import React from "react";

import SEO from "../../../components/seo";
import GitOps from "../../../sections/gitops";

const Meshery = () => {
  return (
    <>
      <GitOps />
    </>
  );
};
export default Meshery;
export const Head = () => {
  return  <SEO title="GitOps with Meshery"
    description="GitOps, lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};