import React from "react";

import SEO from "../../../components/seo";
import SnapshotPage from "../../../sections/gitops/SnapshotPage";

const Meshery = () => {
  return (
    <>
      <SnapshotPage />
    </>
  );
};
export default Meshery;
export const Head = () => {
  // TODO Change this
  return  <SEO title="GitOps with Meshery"
    description="GitOps, lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};