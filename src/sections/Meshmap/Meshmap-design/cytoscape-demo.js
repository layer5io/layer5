import React from "react";
import CytoscapeWrapper from "./cytoscape-demo.style";
import { SimpleReactCytoscape } from "simple-react-cytoscape";
import { useCallback, useState } from "react";

const elements = [
  // list of graph elements to start with
  {
    // node a
    data: { id: "a" }
  },
  {
    // node b
    data: { id: "b" }
  },
  {
    // node c
    data: { id: "c" }
  },
  {
    // edge ab
    data: { id: "ab", source: "a", target: "b" }
  },
  {
    // edge ab
    data: { id: "ac", source: "a", target: "c" }
  }
];

const style = [
  // the stylesheet for the graph
  {
    selector: "node",
    style: {
      "background-color": "#00b39f",
      // 'background-image': '../../../assets/images/meshery/icon-only/meshery-logo-dark.png',
      // 'background-fit': 'contain',
      // 'background-clip': 'none',
      // 'background-opacity': 1,
      label: "data(id)"
    }
  },

  {
    selector: "edge",
    style: {
      width: 3,
      "line-color": "#ccc",
      "target-arrow-color": "#ccc",
      "target-arrow-shape": "triangle",
      "curve-style": "bezier"
    }
  }
];

const options = {
  elements,
  style
};

const CytoscapeDemo = () => {
  const [setMyCy] = useState();

  const cyCallback = useCallback(cy => {
    setMyCy(cy);
  }, []);

  return (
    <CytoscapeWrapper>
      <SimpleReactCytoscape options={options} cyCallback={cyCallback} />
    </CytoscapeWrapper>
  );
};

export default CytoscapeDemo;
