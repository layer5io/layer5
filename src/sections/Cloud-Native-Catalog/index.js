import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import Catalog from "./catalog";
import Patterns from "./patterns";
import Header from "./header";

const CloudNativeCatalogPage = () => {
  return (
    <CloudNativeCatalogWrapper>
      <Header />
      <Catalog />
      <Patterns />
    </CloudNativeCatalogWrapper>
  );
};

export default CloudNativeCatalogPage;
