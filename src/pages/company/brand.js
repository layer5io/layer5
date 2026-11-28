import React from "react";

import SEO from "../../components/seo";
import Brand from "../../sections/Company/Brand";

const BrandPage = () => {
  return (
    <>
      <Brand />
    </>
  );
};
export default BrandPage;
export const Head = () => {
  return <SEO title="Brand Kits" description="Layer5 brand kits with logos, color schemes, and approved usage of Meshery, Image Hub, and other Layer5 projects" />;
};