import React from "react";

import SEO from "../../components/seo";
import SMPPage from "../../sections/Projects/SMP";

const SMP = () => {
  return (
    <>
      <SMPPage />

    </>
  );
};
export default SMP;
export const Head = () => {
  return <SEO title="Cloud Native Performance"
    description="Measuring and indexing the performance, overhead, and value of the world's cloud native deployments."
    image="/images/smp-dark.webp" />;
};