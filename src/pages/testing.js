import * as React from "react";
import EmbeddedDesignLoader from "../components/EmbeddedDesignLoader";

const Testing = () => {
  const scriptPath =
    "./embedded-design-amazon-web-services-iot-architecture-diagram.js";
  const containerId = "embedded-design-df24a01a-8235-449f-8dad-4a2474059ad3";

  return (
    <main>
      <EmbeddedDesignLoader scriptPath={scriptPath} containerId={containerId} />
    </main>
  );
};

export default Testing;
