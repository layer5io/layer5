import React from "react";

import SEO from "../../components/seo";
import ProjectPage from "../../sections/Projects/Project-grid";

const ProjectGridPage = () => {
  return (
    <ProjectPage />
  );
};
export default ProjectGridPage;
export const Head = () => {
  return <SEO title="Innovative Cloud Native Projects"
    description="We empower engineers. Layer5 is the maker of Meshery, Kanvas, and Nighthawk. At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration."
    image="/images/Layer5-overview.svg"
  />;
};
