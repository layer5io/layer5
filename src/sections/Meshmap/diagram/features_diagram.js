import React from "react";
import DiagramStyles from "./diagram.style";
import VisualizerIcon from "../images/Visualizer.svg";
import DesignerIcon from "../images/Designer.svg";
import CollaboratorIcon from "../images/collaborate.gif";

const FeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root" style={{ padding: "0px" }}>
        <img id="designer" className={(activeExampleIndex <= 3) ? "show" : "render"} src={DesignerIcon} alt="" />
        <img id="visualizer" className={(activeExampleIndex > 3 && activeExampleIndex <= 6) ? "show" : "render"} src={VisualizerIcon} alt="" />
        <img id="collaborator" className={activeExampleIndex > 6 ? "show" : "render"} src={CollaboratorIcon} alt="" />

      </div>
    </DiagramStyles>
  );
};

export default FeaturesDiagram;