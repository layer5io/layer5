import React from "react";

import SEO from "../../components/seo";
import LearnPage from "../../sections/Learn";

const LearnGridPage = () => {
  return (
    <>
      <LearnPage />

    </>
  );
};
export default LearnGridPage;
export const Head = () => {
  return  <SEO title="Learn Cloud Native"
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Open Service Mesh, Traefik Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
    image="/images/workshops.webp" />;
};