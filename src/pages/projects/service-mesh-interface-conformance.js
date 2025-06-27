import React from "react";

import SEO from "../../components/seo";
import SMIPage from "../../sections/Projects/SMI";

const SMI = () => {
  return (
    <>
      <SMIPage />

    </>
  );
};
export default SMI;
export const Head = () => {
  return  <SEO title="Service Mesh Interface (SMI)"
    description="Integrate and wrap your operational processes around a service mesh without fear of lock-in. SMI provides a standard interface on Kubernetes and a basic feature set for the most common use cases."
    image="/images/servicemeshinterface-icon-color.webp" />;
};