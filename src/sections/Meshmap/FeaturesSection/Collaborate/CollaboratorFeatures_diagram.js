import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Collaborate1 from "../../images/collaborate1.svg";
import Collaborate2 from "../../images/collaborate2.svg";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="collaborate-image1" className="show" src={Collaborate1} alt=""/>
        <img id="collaborate-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Collaborate2} alt=""/>
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;