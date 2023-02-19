import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import Collab1 from "./images/collab1.svg";
import Collab2 from "./images/collab2.svg";
import Collab3 from "./images/collab3.svg";
import Collab4 from "./images/collab4.svg";
import Avatar1 from "./images/avatar1.png";
import Avatar2 from "./images/avatar2.png";
import Avatar3 from "./images/avatar3.png";

import { useInView } from "react-intersection-observer";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <DiagramStyles>
      <div className="transitions">
        <div className="avatars">
          <img id="avatar-1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={Avatar1} alt="" />
          <img id="avatar-2" className={(activeExampleIndex == 1) ? "show" : "render"} src={Avatar2} alt="" />
          <img id="avatar-3" className={(activeExampleIndex >= 2) ? "show" : "render"} src={Avatar3} alt="" />
        </div>
        <div className="root" style={{ minHeight: "25rem" }}>
          <img id="collaborate-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={Collab1} alt="" />
          <img id="collaborate-image2" className={(activeExampleIndex == 1) ? "show" : "render"} src={Collab2} alt="" />
          <img id="collaborate-image3" className={(activeExampleIndex == 2) ? "show" : "render"} src={Collab3} alt="" />
          <img id="collaborate-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} src={Collab4} alt="" />
        </div>
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;