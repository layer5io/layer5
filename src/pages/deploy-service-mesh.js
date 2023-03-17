import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import DeployServiceMesh from "../sections/DeployServiceMesh/index";
const DeployServiceMeshPage = () => {
  return (
    <Layout>
      <DeployServiceMesh />
      <Footer />
    </Layout>
  );
};
export default DeployServiceMeshPage;
export const Head = () => {
  return <SEO title="when should i deploy service mesh" description="when should i deploy service mesh question form." />;
};