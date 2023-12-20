import React, { useEffect } from "react";

const EmbeddedDesignLoader = ({ scriptPath, containerId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptPath;
    script.type = "module";
    script.crossOrigin = "anonymous";

    script.onload = () => {
      console.log("Script loaded successfully");
    };

    script.onerror = () => {
      console.error("Error loading script");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [scriptPath]);

  return <div id={containerId} style={{ height: "100%", width: "100%" }}></div>;
};

export default EmbeddedDesignLoader;
