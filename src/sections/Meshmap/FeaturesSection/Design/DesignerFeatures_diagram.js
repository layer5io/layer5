import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import roleBind1 from "./images/role-binding-1.svg";
import roleBind2 from "./images/role-binding-2.svg";
import roleBind3 from "./images/role-binding-3.svg";
import roleBind4 from "./images/role-binding-4.svg";
import { useInView } from "react-intersection-observer";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <DiagramStyles>
      <div className="root">
        <img id="design-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={roleBind1} alt="" />
        <img id="design-image2" className={(activeExampleIndex == 1) ? "show" : "render"} src={roleBind2} alt="" />
        <img id="design-image3" className={(activeExampleIndex == 2) ? "show" : "render"} src={roleBind3} alt="" />
        <img id="design-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} src={roleBind4} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;