import React from "react";

import SEO from "../../components/seo";
import CatalogPage from "../../sections/Cloud-Native-Catalog";

const Catalog = () => {
  return (
    <>
      <CatalogPage />
    </>
  );
};
export default Catalog;
export const Head = () => {
  return <SEO title="Cloud Native Catalog"
    description="The Kubernetes and Cloud Native Catalog. Build, share, innovate with CNCF project-curated best practices."
    image="/images/meshery-logo-dark-text.webp" />;
};