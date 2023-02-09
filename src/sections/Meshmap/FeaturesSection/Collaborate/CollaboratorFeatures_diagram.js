import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Collaborate1 from "../../images/collaborate-1.svg";
import Collaborate2 from "../../images/collaborate-2.svg";
import Collaborate3 from "../../images/collaborate-3.svg";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="image1" className="show" src={Collaborate1} alt="" />
        <img id="image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Collaborate2} alt="" />
        <img id="image3" className={activeExampleIndex >= 2 ? "show" : "render"} src={Collaborate3} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;