import React from "react";
import SEO from "../../../components/seo";
import KubernetesMultiCluster from "../../../sections/kubernetes-multi-cluster";

const KubernetesMultiClusterPage = () => {
  return (
    <KubernetesMultiCluster/>
  );
};
export default KubernetesMultiClusterPage;
export const Head = () => {
  return (
    <SEO
      title="Kubernetes Multi-cluster Operation"
      description="Manage all of your Kubernetes clusters with the cloud native management plane, Meshery. Learn how Meshery makes connecting, discovering, and configuring multiple clusters a breeze."
    />
  );
};
