import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import VisualizerIcon from "../../images/designer-context2.svg";
import DesignerIcon from "../../images/designer-base2.svg";
import CollaboratorIcon from "../../images/designer-3.svg";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  return (
    <DiagramStyles>
      <div className="root">
        <img id="designer" className="show" src={DesignerIcon} alt="" />
        <img id="visualizer" className={(activeExampleIndex >= 1) ? "show" : "render"} src={VisualizerIcon} alt="" />
        <img id="collaborator" className={activeExampleIndex >= 2 ? "show" : "render"} src={CollaboratorIcon} alt="" />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;