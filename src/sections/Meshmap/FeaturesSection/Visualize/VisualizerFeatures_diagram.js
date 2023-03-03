import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Visualize1 from "./images/visualize-1.svg";
import Visualize1_dark from "./images/visualize-1-dark.svg";
import Visualize2 from "./images/visualize-2.svg";
import Visualize2_dark from "./images/visualize-2-dark.svg";
import { useInView } from "react-intersection-observer";

const VisualizerFeaturesDiagram = ({ activeExampleIndex, theme }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <DiagramStyles>
      <div className="root" style={{ paddingLeft: "0rem", minHeight: "25rem" }}>
        <img id="visualize-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={theme === "dark" ? Visualize1_dark : Visualize1} alt="" />
        <img id="visualize-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={theme === "dark" ? Visualize2_dark : Visualize2} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;