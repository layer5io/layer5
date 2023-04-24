import React from "react";

import SEO from "../components/seo";
import LandscapeGrid from "../sections/Landscape";

const LandscapeGridPage = () => {
  return (
    <>
      <LandscapeGrid  />

    </>
  );
};
export default LandscapeGridPage;
export const Head = () => {
  return <SEO title="Service Mesh Landscape" description="Compare service meshes like Istio, Linkerd, App Mesh, Maesh, Kuma, Network Service Mesh, Consul, Kuma, Citrix and VMware Tanzu Service Mesh. What is the best service mesh? What's the difference between Istio and Envoy?" image="/images/landscape.png" />;
};