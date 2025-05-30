import React from "react";
import SEO from "../../../components/seo";
import DeveloperInfrastructure from "../../../sections/Developer-Infrastructure";

const DeveloperInfrastructurePage = () => {
  return (
    <DeveloperInfrastructure/>
  );
};
export default DeveloperInfrastructurePage;
export const Head = () => {
  return (
    <SEO
      title="Developer-defined Infrastructure"
      description="Our cloud native application and infrastructure management software enables organizations to expect more from their infrastructure."
      image="/images/solutions-infrastructure.png" />
  );
};