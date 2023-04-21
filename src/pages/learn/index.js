import React from "react";

import SEO from "../../components/seo";
import LearnPage from "../../sections/Learn";

import { useState } from "react";
const LearnGridPage = () => {
  return (
    <>
      <LearnPage />

    </>
  );
};
export default LearnGridPage;
export const Head = () => {
  return  <SEO title="Learn Service Mesh"
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Open Service Mesh, Traefik Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
    image="/images/workshops.png" />;
};