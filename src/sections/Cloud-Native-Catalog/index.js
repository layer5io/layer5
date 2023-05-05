import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import Patterns from "./patterns";
import Header from "./header";
import NewCatalog from "./new-catalog";
import Reviews from "../Pricing/review-slider";

const CloudNativeCatalogPage = () => {
  return (
    <CloudNativeCatalogWrapper>
      <Header />
      <Patterns />
      <Reviews />
      <NewCatalog />
    </CloudNativeCatalogWrapper>
  );
};

export default CloudNativeCatalogPage;
