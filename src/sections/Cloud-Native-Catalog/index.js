import React from "react";
import Patterns from "./patterns";
import Header from "./header";
import NewCatalog from "./new-catalog";
import Catalog from "./catalog";
import ReviewsSlider from "../../components/ReviewsSlider";

const CloudNativeCatalogPage = () => {
  return (
    <>
      <Header />
      <Catalog />
      <Patterns />
      <ReviewsSlider />
      <NewCatalog />
    </>
  );
};

export default CloudNativeCatalogPage;
