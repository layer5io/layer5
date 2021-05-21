import React from "react";
import CardWrapper from "./info.style";

function Info() {
  return (
    <CardWrapper>
      <div className="row">
        <div className="column">
          <h2>4 courses</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </div>
        <div className="column">
          <h2>24 chapters</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </div>
        <div className="column">
          <h2>12 service meshes available.</h2>
          <p>Istio, Kuma, NSM, Linkerd, Consul</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Info;
