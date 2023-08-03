import React from "react";

import SEO from "../../../components/seo";
import PerformanceManagementPage from "../../../sections/gitops/PerformanceManagementPage";

const Page = () => {
  return (
    <>
      <PerformanceManagementPage />
    </>
  );
};
export default Page;
export const Head = () => {
  // TODO Change this
  return  <SEO title="GitOps with Meshery"
    description="GitOps, lifecycle, performance, and configuration management for cloud native infrastructure as code. Manage your Kubernetes clusters visually. Use the catalog of patterns and best practices."
    image="/images/meshery-logo-dark-text.png" />;
};