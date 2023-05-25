import React from "react";

import SEO from "../components/seo";
import CatalogPage from "../sections/Cloud-Native-Catalog";

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
    description="The Cloud Native Catalog, easily import any catalog item into Meshery."
    image="/images/meshery-logo-dark-text.png" />;
};