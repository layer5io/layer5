import React from "react";
import Whiteboard from "../../sections/Whiteboard";
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