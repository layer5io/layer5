import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import VisualizerIcon from "../../images/Visualizer.svg"
import DesignerIcon from "../../images/Designer.svg";
import CollaboratorIcon from "../../images/collaborate.gif";

const VisualizerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="designer" className={(activeExampleIndex <= 0) ? "show" : "render"} src={DesignerIcon} alt="" />
        <img id="visualizer" className={(activeExampleIndex ==1) ? "show" : "render"} src={VisualizerIcon} alt="" />
        <img id="collaborator" className={activeExampleIndex >= 2 ? "show" : "render"} src={CollaboratorIcon} alt="" />

      </div>
    </DiagramStyles>
  );
};

export default VisualizerFeaturesDiagram;