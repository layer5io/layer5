import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Design1 from "../../images/design1.svg";
import Design2 from "../../images/design2.svg";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="design-image1" className="show" src={Design1} alt="" />
        <img id="design-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Design2} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;