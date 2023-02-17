import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Collaborate1 from "../../images/collaborate1.svg";
import Collaborate2 from "../../images/collaborate2.svg";
import { useInView } from "react-intersection-observer";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <DiagramStyles>
      <div className="root">
        <img id="collaborate-image1" ref={ref} className={inView ? "show" : "render"} src={Collaborate1} alt=""/>
        <img id="collaborate-image2" className={(activeExampleIndex >= 1) ? "show" : "render"} src={Collaborate2} alt=""/>
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;