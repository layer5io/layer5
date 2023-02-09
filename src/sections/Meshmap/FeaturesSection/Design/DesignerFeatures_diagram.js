import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Design1 from "../../images/design-2.svg";
import Design2 from "../../images/design-1.svg";
import Design3 from "../../images/design-3.svg";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="image1" className="show" src={Design1} alt="" />
        <img id="image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Design2} alt="" />
        <img id="image3" className={activeExampleIndex >= 2 ? "show" : "render"} src={Design3} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;