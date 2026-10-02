import React from "react";

import SEO from "../../../components/seo";
import PerformanceManagementPage from "../../../sections/gitops/PerformanceManagementPage";

export default PerformanceManagementPage;

export const Head = () => {
  return  <SEO title="Performance Management with Meshery"
    description="Run repeatable performance tests for Kubernetes and service meshes with Meshery. Define performance profiles and automate conformance testing in GitHub Actions."
    image="/images/meshery-logo-dark-text.webp"
  />;
};