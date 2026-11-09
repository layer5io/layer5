import React from "react";
import Orchestration from "../../../sections/OrchestrationManagement";
import ServiceMeshFocused from "../../../sections/Home/Service-mesh-focussed";
import SEO from "../../../components/seo";

const OrchestrationManagement = () => {
  return (
    <>
      <Orchestration />
      <ServiceMeshFocused bookName={"enterprise-path"} />
    </>
  );
};

export default OrchestrationManagement;

export const Head = () => {
  return (
    <SEO
      title="Orchestration Management | Layer5"
      description="Optimize and streamline operations through strategic orchestration of your infrastructure."
      image="/images/solutions-collaborate.webp"
    />
  );
};
