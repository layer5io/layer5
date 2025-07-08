
import React from "react";
import SEO from "../../components/seo";
import SolutionPage from "../../sections/Solutions";

const Solutions = () => {
  return (
    <>
      <SolutionPage />
    </>
  );
};
export default Solutions;
export const Head = () => {
  return  <SEO title="Solutions page"
    description="Explore Layer5's solutions for cloud native management, platform engineering, and GitOps. Discover how to enhance your infrastructure with our curated catalog of best practices and patterns."/>;
};