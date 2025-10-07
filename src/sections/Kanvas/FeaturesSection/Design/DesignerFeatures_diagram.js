import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import RoleBind1 from "./images/role-binding-1-colorMode.svg";
import RoleBind2 from "./images/role-binding-2-colorMode.svg";
import RoleBind3 from "./images/role-binding-3-colorMode.svg";
import RoleBind4 from "./images/role-binding-4-colorMode.svg";
import { useInView } from "react-intersection-observer";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <DiagramStyles>
      <div className="root" ref={ref} style={{ minHeight: "25rem" }}>
        <img src={RoleBind1} alt="design-image1"  className={(inView && activeExampleIndex == 0) ? "show" : "render"} id="design-image1" />
        <img src={RoleBind2} alt="design-image2" id="design-image2" className={(activeExampleIndex == 1) ? "show" : "render"} />
        <img src={RoleBind3} alt="design-image3" id="design-image3" className={(activeExampleIndex == 2) ? "show" : "render"} />
        <RoleBind4 id="design-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} alt="design-image4" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;