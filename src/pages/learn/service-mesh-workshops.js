import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";
import Footer from "../../sections/General/Footer";
import { useState } from "react";
const WorkshopsGridPage = () => {
  return (
    <Layout>
      <WorkshopsPage />
      <Footer />
    </Layout>
  );
};
export default WorkshopsGridPage;
export const Head = () => {
  return <SEO title="Service Mesh Workshops" description="Service mesh workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh, Cilium, Kuma, NGINX" />;
};