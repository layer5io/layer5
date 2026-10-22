import React from "react";
import SistentHome from "../../../sections/Projects/Sistent/index";
import SEO from "../../../components/seo";
import seoImage from "../../../assets/images/sistent/icon-only/sistent-icon-color.png";

const SistentIndexPage = () => {
  return (
    <>
      <SistentHome />
    </>
  );
};

export default SistentIndexPage;

export const Head = () => {
  return (
    <SEO
      title="Sistent"
      description="Design system for Layer5 projects"
      image={seoImage}
    />
  );
};
