import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Collab1 from "./images/collab1.svg";
import Collab1_dark from "./images/collab1-dark.svg";
import Collab2 from "./images/collab2.svg";
import Collab2_dark from "./images/collab2-dark.svg";
import Collab3 from "./images/collab3.svg";
import Collab3_dark from "./images/collab3-dark.svg";
import Collab4 from "./images/collab4.svg";
import Collab4_dark from "./images/collab4-dark.svg";
import Avatar1 from "./images/avatar1.png";
import Avatar2 from "./images/avatar2.png";
import Avatar3 from "./images/avatar3.png";
import { useInView } from "react-intersection-observer";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { isDark } = useStyledDarkMode();
  const theme = isDark ? "dark" : "light";

  return (
    <DiagramStyles>
      <div className="transitions">
        <div className="avatars">
          <img id="avatar-1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={Avatar1} alt="" />
          <img id="avatar-2" className={(activeExampleIndex == 1) ? "show" : "render"} src={Avatar2} alt="" />
          <img id="avatar-3" className={(activeExampleIndex >= 2) ? "show" : "render"} src={Avatar3} alt="" />
        </div>
        <div className="root" style={{ minHeight: "25rem" }}>
          <img id="collaborate-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={theme === "dark" ? Collab1_dark : Collab1} alt="" />
          <img id="collaborate-image2" className={(activeExampleIndex == 1) ? "show" : "render"} src={theme === "dark" ? Collab2_dark : Collab2} alt="" />
          <img id="collaborate-image3" className={(activeExampleIndex == 2) ? "show" : "render"} src={theme === "dark" ? Collab3_dark : Collab3} alt="" />
          <img id="collaborate-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} src={theme === "dark" ? Collab4_dark : Collab4} alt="" />
        </div>
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;