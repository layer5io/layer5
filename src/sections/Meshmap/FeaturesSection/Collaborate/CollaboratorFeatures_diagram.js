import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import { ReactComponent as Collab1 } from "./images/collab1-colorMode.svg";
import { ReactComponent as Collab2 } from "./images/collab2-colorMode.svg";
import { ReactComponent as Collab3 } from "./images/collab3-colorMode.svg";
import { ReactComponent as Collab4 } from "./images/collab4-colorMode.svg";
import Avatar1 from "./images/avatar1.png";
import Avatar2 from "./images/avatar2.png";
import Avatar3 from "./images/avatar3.png";
import { useInView } from "react-intersection-observer";

const CollaboratorFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <DiagramStyles>
      <div className="transitions">
        <div className="avatars">
          <img id="avatar-1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} src={Avatar1} alt="" />
          <img id="avatar-2" className={(activeExampleIndex == 1) ? "show" : "render"} src={Avatar2} alt="" />
          <img id="avatar-3" className={(activeExampleIndex >= 2) ? "show" : "render"} src={Avatar3} alt="" />
        </div>
        <div className="root" style={{ minHeight: "25rem", minWidth: "41rem" }}>
          <Collab1 id="collaborate-image1" ref={ref} className={inView && activeExampleIndex == 0 ? "show" : "render"} alt="collaborate-image1" />
          <Collab2 id="collaborate-image2" className={(activeExampleIndex == 1) ? "show" : "render"} alt="collaborate-image2" />
          <Collab3 id="collaborate-image3" className={(activeExampleIndex == 2) ? "show" : "render"} alt="collaborate-image3" />
          <Collab4 id="collaborate-image4" className={(activeExampleIndex >= 3) ? "show" : "render"} alt="collaborate-image4" />
        </div>
      </div>
    </DiagramStyles>
  );
};

export default CollaboratorFeaturesDiagram;