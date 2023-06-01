import React from "react";

import SEO from "../../../components/seo";
import ProjectsPage from "../../../sections/Community/Handbook/projects";
import Footer from "../../../sections/General/Footer";

const CommunityProjects = ({ location }) => {
  return (
    <>
      <ProjectsPage  />
      <Footer location={location} />
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