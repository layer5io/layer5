import React from "react";

import SEO from "../../components/seo";
import Brand from "../../sections/Company/Brand";

import SimpleReactLightbox from "simple-react-lightbox";
const BrandPage = () => {
  return (
    <>
      <SimpleReactLightbox>
        <Brand />
      </SimpleReactLightbox>

    </>
  );
};
export default BrandPage;
export const Head = () => {
  return <SEO title="Brand Kits" description="Layer5 brand kits with logos, color schemes, and approved usage of Meshery, Image Hub, and other Layer5 projects" />;
};