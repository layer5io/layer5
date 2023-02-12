import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Visualize1 from "../../images/design1.svg";
import Visualize2 from "../../images/design2.svg";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root" style={{ paddingLeft: "0rem" }}>
        <img id="visualize-image1" className="show" src={Visualize1} alt="" />
        <img id="visualize-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Visualize2} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;