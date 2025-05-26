import React from "react";
import SEO from "../../../components/seo";
import KubernetesMultiCluster from "../../../sections/CloudNativeDeployments";

const CloudNativeDeploymentsPage = () => {
  return <KubernetesMultiCluster />;
};
export default CloudNativeDeploymentsPage;
export const Head = () => {
  return (
    <SEO
      title="Cloud Native Deployments by Diagram"
      description="Design and Deploy your Kubernetes-based, cloud native deployments"
      image="/images/solutions-diagram.png"
    />
  );
};