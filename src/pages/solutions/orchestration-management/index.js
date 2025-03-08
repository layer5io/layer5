import React from "react";
import Orchestration from "../../../sections/OrchestrationManagement";
import ServiceMeshFocused from "../../../sections/Home/Service-mesh-focussed";

const OrchestrationManagement = () => {
  return (
    <>
      <Orchestration/>
      <ServiceMeshFocused bookName={"enterprise-path"} />
    </>
  );
};

export default OrchestrationManagement;