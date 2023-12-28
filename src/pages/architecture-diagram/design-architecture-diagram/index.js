import React from "react";
import ArchitectureDiagram from "../../../sections/ArchitectureDiagram";
import ServiceMeshFocused from "../../../sections/Home/Service-mesh-focussed";

const ArchitectureDiagramPage = () => {
  return (
    <>
      <ArchitectureDiagram/>
      <ServiceMeshFocused bookName={"enterprise-path"} />
    </>
  );
};

export default ArchitectureDiagramPage;