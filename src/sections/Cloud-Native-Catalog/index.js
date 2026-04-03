import React from "react";
import Patterns from "./patterns";
import Header from "./header";
import NewCatalog from "./new-catalog";
import Reviews from "../Pricing/review-slider";
import Catalog from "./catalog";

const CloudNativeCatalogPage = () => {
  return (
    <>
      <Header />
      <Catalog />
      <Patterns />
      <Reviews />
      <NewCatalog />
    </>
  );
};

export default CloudNativeCatalogPage;
