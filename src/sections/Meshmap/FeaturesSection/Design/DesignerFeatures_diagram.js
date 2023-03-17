import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import roleBind1 from "./images/role-binding-1.svg";
import roleBind1_dark from "./images/role-binding-1-dark.svg";
import roleBind2 from "./images/role-binding-2.svg";
import roleBind2_dark from "./images/role-binding-2-dark.svg";
import roleBind3 from "./images/role-binding-3.svg";
import roleBind3_dark from "./images/role-binding-3-dark.svg";
import roleBind4 from "./images/role-binding-4.svg";
import roleBind4_dark from "./images/role-binding-4-dark.svg";
import { useInView } from "react-intersection-observer";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { isDark } = useStyledDarkMode();
  const theme = (typeof isDark === "boolean" && isDark) ? "dark" : "light";

  return (
    <DiagramStyles>
      <div className="root" style={{ minHeight: "25rem" }}>
        <img id="design-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={theme === "dark" ? roleBind1_dark : roleBind1} alt="" />
        <img id="design-image2" className={(activeExampleIndex == 1) ? "show" : "render"} src={theme === "dark" ? roleBind2_dark : roleBind2} alt="" />
        <img id="design-image3" className={(activeExampleIndex == 2) ? "show" : "render"} src={theme === "dark" ? roleBind3_dark : roleBind3} alt="" />
        <img id="design-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} src={theme === "dark" ? roleBind4_dark : roleBind4} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;