import React from "react";

import SEO from "../../components/seo";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";

const WorkshopsGridPage = () => {
  return (
    <>
      <WorkshopsPage />

    </>
  );
};
export default WorkshopsGridPage;
export const Head = () => {
  return <SEO title="Service Mesh Workshops" description="Service mesh workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh, Cilium, Kuma, NGINX" />;
};