import React from "react";
import loadable from "@loadable/component";

import Whiteboard from "../../sections/Whiteboard";
const ServiceMeshFocussed = loadable(() => import("../sections/Home/Service-mesh-focussed"));

const WhiteboardPage = () => {
  return (
    <>
      <Whiteboard/>
      <ServiceMeshFocussed bookName={"enterprise-path"} />
    </>
  );
};

export default WhiteboardPage;