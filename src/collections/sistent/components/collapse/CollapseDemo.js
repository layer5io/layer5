import React, { useState } from "react";
import { Collapse, Button } from "@sistent/sistent";

const CollapseDemo = ({ defaultExpanded = false, unmountOnExit = false, customTransition = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const getButtonLabel = () => {
    if (customTransition) return expanded ? "Fast Collapse" : "Slow Expand";
    return expanded ? "Collapse" : "Expand";
  };

  const getTimeout = () => {
    if (customTransition) return expanded ? 1000 : 300;
    return undefined; // use default
  };

  const getEasing = () => {
    if (customTransition) return expanded ? "cubic-bezier(0.4, 0, 0.2, 1)" : "ease-out";
    return undefined; // use default
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Button variant={customTransition ? "contained" : "outlined"} onClick={() => setExpanded(!expanded)}>
        {getButtonLabel()}
      </Button>
      <Collapse
        in={expanded}
        unmountOnExit={unmountOnExit}
        timeout={getTimeout()}
        easing={getEasing()}
      >
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
          {customTransition
            ? "Custom transition content"
            : unmountOnExit
            ? "Content that unmounts when collapsed"
            : defaultExpanded
            ? "Content that's expanded by default"
            : "Content to be collapsed/expanded"}
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseDemo;
