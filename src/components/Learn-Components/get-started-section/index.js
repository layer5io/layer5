import { Link } from "gatsby";
import React from "react";
import GetStartedWrapper from "./get-started.styles";


const GetStarted = () => (
  <GetStartedWrapper>
    <div className="get-started-desc">
      <h2>Get Started</h2>
      <p>Meshery is the service mesh management plane which offers lifecycle, configuration, and performance management of service meshes and their workloads.</p>
    </div>
    <div className="container-card">
      <Link to="/service-mesh-management/meshery">
        <div className="card">
          <h2>Set up</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius.</p>
        </div>
      </Link>
      <Link to="/service-mesh-management/meshery/getting-started">
        <div className="card">
          <h2>Run Meshery</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius.</p>
        </div>
      </Link>
      <Link to="/service-mesh-management/meshery/operating-service-meshes">
        <div className="card">
          <h2>Manage Meshery</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem id magna tempus fringilla. Suspendisse posuere nibh et dictum varius.</p>
        </div>
      </Link>
    </div>
  </GetStartedWrapper>
);

export default GetStarted;
