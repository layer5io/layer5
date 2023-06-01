import React from "react";

import SEO from "../../components/seo";
import SMPPage from "../../sections/Projects/SMP";
import Footer from "../../sections/General/Footer";

const SMP = ({ location }) => {
  return (
    <>
      <SMPPage />
      <Footer location={location} />

    </>
  );
};
export default SMP;
export const Head = () => {
  return <SEO title="Service Mesh Performance (SMP)"
    description="Measuring and indexing the performance, overhead, and value of the world's service mesh deployments."
    image="/images/smp-dark.png" />;
};