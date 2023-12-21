import React from "react";
import loadable from "@loadable/component";

import Whiteboard from "../../sections/Whiteboard";
// const ServiceMeshFocussed = loadable(() => import("../sections/Home/Service-mesh-focussed"));
import ServiceMeshFocused from "../../sections/Home/Service-mesh-focussed";

const WhiteboardPage = () => {
  return (
    <>
      <Whiteboard/>
      <ServiceMeshFocused bookName={"enterprise-path"} />
    </>
  );
};

export default WhiteboardPage;