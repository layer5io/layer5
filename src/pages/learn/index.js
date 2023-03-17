import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LearnPage from "../../sections/Learn";
import Footer from "../../sections/General/Footer";
import { useState } from "react";
const LearnGridPage = () => {
  return (
    <Layout>
      <LearnPage />
      <Footer />
    </Layout>
  );
};
export default LearnGridPage;
export const Head = () => {
  return  <SEO title="Learn Service Mesh"
    description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Open Service Mesh, Traefik Mesh, Kuma, AWS App Mesh, Citrix, VMware Tanzu Service Mesh"
    image="/images/workshops.png" />;
};