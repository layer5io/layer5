import React from "react";

import SEO from "../../components/seo";
import SolutionsMainPage from "../../sections/Solutions";


const SolutionsPage = () => {
  return (
    <>
      <SolutionsMainPage/>
    </>
  );
};
export default SolutionsPage;
export const Head = () => {
  return <SEO title="Solutions"
    description="Explore Layer5's solutions for cloud native management, platform engineering, and GitOps. Discover how to enhance your infrastructure with our curated catalog of best practices and patterns."
    image="/images/layer5-gradient.webp" />;
};