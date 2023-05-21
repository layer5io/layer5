import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import CytoscapeWrapper from "./cytoscape-demo.style";
import { k8sService, clusterRole } from "./images/cytoNodes";

cytoscape.use(coseBilkent);

const CytoscapeComponent = () => {
  const cyRef = useRef(null);
  useEffect(() => {
    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        {
          data: { id: "node1" },
          position: { x: 100, y: 100 },
        },
        {
          data: { id: "node2" },
          position: { x: 200, y: 200 },
        },
        {
          // edge 1-2
          data: { id: "edge1", source: "node1", target: "node2" }
        },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-image": clusterRole().svg,
            width: clusterRole().width,
            "background-color": "#326CE5",
            height: clusterRole().height,
            shape: "round-rectangle",
            "label": "cluster-role",
            color: "white",
            "font-size": "5",
            "text-halign": "center",
            "text-valign": "bottom",
            "text-margin-y": 3,
          },
        },
        {
          selector: "node[id=\"node2\"]",
          style: {
            "background-image": k8sService().svg,
            width: k8sService().width,
            height: k8sService().height,
            shape: "round-triangle",
            "background-fit": "contain",
            "background-position-y": "4",
            "label": "service",
            color: "white",
            "font-size": "5",
            "text-halign": "center",
            "text-valign": "bottom",
            "text-margin-y": 3,
          },
        },
        {
          selector: "edge",
          style: {
            "line-color": "#ccc",
            "width": "2px",
            "target-arrow-color": "#000",
            "target-arrow-shape": "triangle",
            "target-arrow-fill": "filled",
            "text-rotation": "autorotate",
            "target-arrow-offset": "20px",
            "text-margin-y": 5,
            color: "white",
            "font-size": "5",
            label: "80/TCP",
          },
        },
      ],
      layout: {
        name: "cose-bilkent",
        animate: true,
        animationDuration: 1000,
        animationEasing: "ease-out",
        fit: true,
      },
    });

    return () => {
      cy.destroy();
    };
  }, []);
  return (
    <CytoscapeWrapper>
      <div ref={cyRef} className="simple-react-cytoscape" />
    </CytoscapeWrapper>
  );
};

export default CytoscapeComponent;
