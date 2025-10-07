import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Visualize1 from "./images/visualize-1-colorMode.svg";
import Visualize2 from "./images/visualize-2-colorMode.svg";
import { useInView } from "react-intersection-observer";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <DiagramStyles>
      <div className="root" ref={ref} style={{ paddingLeft: "0rem", minHeight: "25rem" }}>
        <img src={Visualize1} alt="visualize-image1" id="visualize-image1"  className={inView && activeExampleIndex == 0 ? "show" : "render"} />
        <Visualize2 id="visualize-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} alt="visualize-image2" />
      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;