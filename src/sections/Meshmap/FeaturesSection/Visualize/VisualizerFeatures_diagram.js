import React from "react";
import DiagramStyles fro  m "../../diagram/diagram.style";
import Visualize1 from "./images/design1.svg";
import Visualize2 from "./images/design2.svg";
import { useInView } from "react-intersection-observer";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <DiagramStyles>
      <div className="root" style={{ paddingLeft: "0rem" }}>
        <img id="visualize-image1" ref={ref} className={inView ? "show" : "render"} src={Visualize1} alt="" />
        <img id="visualize-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Visualize2} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;