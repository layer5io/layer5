import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import CytoscapeWrapper from "./cytoscape-demo.style";
import { k8sService, clusterRole, kubePrometheus, argoCD, NGINX } from "./images/cytoNodes";

cytoscape.use(coseBilkent);

const CytoscapeCtx = () => {
  const cyRef = useRef(null);
  useEffect(() => {
    const cy = cytoscape({
      container: cyRef.current,

      elements: {
        nodes: [
          { data: { id: "a", parent: "b" }, position: { x: 300, y: 175 } },
          { data: { id: "b" } },
          { data: { id: "c", parent: "b" }, position: { x: 300, y: 85 } },
          { data: { id: "d" } },
          { data: { id: "e" } },
          { data: { id: "f", parent: "e" }, position: { x: 300, y: 175 } },
          { data: { id: "g", parent: "b" }, position: { x: 215, y: 85 } },
        ],
        edges: [
          { data: { id: "ad", source: "a", target: "d" } },
          { data: { id: "eb", source: "e", target: "b" } }

        ]
      },

      style: [
        {
          selector: "node",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "text-background-opacity": "0.7",
            "text-background-shape": "round-rectangle",
            "text-background-color": "#d2d4d2",
            "font-family": "Qanelas Soft, sans-serif",
            "font-size": "16px",
            "font-weight": "300",
            "text-background-padding": "2px",
            color: "#000",
            "z-index": "2",
            "text-margin-y": "7px",
            "text-max-width": "50px",
          }
        },
        {
          selector: "node[id=\"a\"]",
          style: {
            "background-image": clusterRole().svg,
            width: clusterRole().width,
            shape: "round-rectangle",
            "padding": "20px",
            "background-color": "#326CE5",
            height: clusterRole().height,
            "label": "cluster-role",
          },
        },
        {
          selector: "node[id=\"c\"]",
          style: {
            "background-image": argoCD().svg,
            width: argoCD().width,
            "background-color": "#fe733e",
            height: argoCD().height,
            "padding": "20px",
            "label": "application-set",
          },
        },
        {
          selector: "node[id=\"d\"]",
          style: {
            "background-image": NGINX().svg,
            width: NGINX().width,
            "background-color": "#009639",
            height: NGINX().height,
            "padding": "20px",
            "label": "nginx",
          },
        },
        {
          selector: "node[id=\"f\"]",
          style: {
            "background-image": k8sService().svg,
            width: k8sService().width,
            shape: "round-triangle",
            "background-color": "#326CE5",
            "padding": 8,
            "background-fit": "none",
            "background-position-y": 18,
            height: k8sService().height,
            "label": "service",
          },
        },
        {
          selector: "node[id=\"g\"]",
          style: {
            "background-image": kubePrometheus().svg,
            width: kubePrometheus().width,
            height: kubePrometheus().height,
            "background-color": "#e75225",
            "padding": "20px",
            "label": "prometheus",
          },
        },
        {
          selector: "node[id=\"e\"]",
          style: {
            "border-width": "2px",
            "border-color": "#326CE5",
            "border-style": "dashed",
            "backgroundColor": "#326CE5",
            "label": "namespace",
            "background-opacity": "0.5"
          }
        },
        {
          selector: "node[id=\"b\"]",
          style: {
            "border-width": "2px",
            "border-color": "#326CE5",
            "border-style": "dashed",
            "backgroundColor": "#326CE5",
            "label": "namespace",
            "background-opacity": "0.5"
          }
        },
        {
          selector: "edge",
          style: {
            "font-family": "Qanelas Soft, sans-serif",
            "font-size": "6px",
            "curve-style": "bezier",
            "z-index-compare": "manual",
            "z-index": "999",
            label: "data(protocol)",
            "line-style": "dotted",
            "target-arrow-shape": "vee",
            "text-events": "yes",
            "text-outline-color": "rgb(255,255,255)",
            "text-outline-width": "1px",
            "text-wrap": "wrap",
            width: "1.5px",
            "length": "2px"
          }
        },
      ],

      layout: {
        name: "cose-bilkent",
        animate: true,
        animationDuration: 1000,
        animationEasing: "ease-out",
        fit: true,
        idealEdgeLength: 20,
        spacingFactor: 1,
        gravityRangeCompound: 1,
        gravityCompound: 1,
      },
      zoom: 3,
      minZoom: 0.3,
      maxZoom: 2,
      // boundingBox: { x1: 0, y1: 0, w: "40vh", h: "50vh" },
      boxSelectionEnabled: false,
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

export default CytoscapeCtx;
