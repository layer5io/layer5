import React from "react";

import SEO from "../../../components/seo";
import ProjectsPage from "../../../sections/Community/Handbook/projects";

const CommunityProjects = () => {
  return (
    <>
      <ProjectsPage  />

    </>
  );
};
export default CommunityProjects;
export const Head = () => {
  return <SEO
    title="Projects"
    description="Layer5 Projects: Layer5, Meshery, Service Mesh Performance and NightHawk"
  />;
};