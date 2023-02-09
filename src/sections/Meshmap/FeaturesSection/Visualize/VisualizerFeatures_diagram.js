import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Visualize1 from "../../images/collaborate-1.svg";
import Visualize2 from "../../images/collaborate-2.svg";
import Visualize3 from "../../images/collaborate-3.svg";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root" style={{ paddingLeft: "0rem" }}>
        <img id="image1" className="show" src={Visualize1} alt="" />
        <img id="image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Visualize2} alt="" />
        <img id="image3" className={activeExampleIndex >= 2 ? "show" : "render"} src={Visualize3} alt="" />

      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;