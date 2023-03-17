import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SMPPage from "../../sections/Projects/SMP";
import Footer from "../../sections/General/Footer";
const SMP = () => {
  return (
    <Layout>
      <SMPPage />
      <Footer />
    </Layout>
  );
};
export default SMP;
export const Head = () => {
  return <SEO title="Service Mesh Performance (SMP)"
    description="Measuring and indexing the performance, overhead, and value of the world's service mesh deployments."
    image="/images/smp-dark.png" />;
};