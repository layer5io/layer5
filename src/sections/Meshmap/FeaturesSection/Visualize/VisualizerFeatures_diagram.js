import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import { ReactComponent as Visualize1 } from "./images/visualize-1-colorMode.svg";
import { ReactComponent as Visualize2 } from "./images/visualize-2-colorMode.svg";
import { useInView } from "react-intersection-observer";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <DiagramStyles>
      <div className="root" ref={ref} style={{ paddingLeft: "0rem", minHeight: "25rem" }}>
        <Visualize1 id="visualize-image1"  className={inView && activeExampleIndex == 0 ? "show" : "render"} alt="visualize-image1" />
        <Visualize2 id="visualize-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} alt="visualize-image2" />
      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;