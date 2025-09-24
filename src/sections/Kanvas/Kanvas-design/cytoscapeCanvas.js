import React from "react";
import CytoscapeWrapper from "./cytoscape-demo.style";

const CytoscapeCtx = () => {
  return (
    <CytoscapeWrapper>
      <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Cytoscape visualization disabled during SSR
      </div>
    </CytoscapeWrapper>
  );
};

export default CytoscapeCtx;
