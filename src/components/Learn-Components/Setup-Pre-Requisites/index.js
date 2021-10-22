import { Link } from "gatsby";
import React from "react";
import SetupPreReqWrapper from "./setup-pre-req.style";
import Meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import { BsTerminalFill } from "react-icons/bs";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";


const SetupPreReq = () => (
  <SetupPreReqWrapper>
    <div className="get-started-desc" id="pre-requisites">
      <h2>Pre-requisites</h2>
      <p>In this learning path, we will be using Meshery as the management plane to manage the service meshes. Meshery is the service mesh management plane which offers lifecycle, configuration, and performance management of service meshes and their workloads.</p>
    </div>
    <div className="container-card" id="Set up">
      <Link to="/service-mesh-management/meshery">
        <div className="card">
          <div className="card-header">
            <h2>Install Meshery</h2>
            <BsTerminalFill />
          </div>
          <p>Meshery provides you with a clean, robust, streamlined command-line interface to manage your service meshes: 'mesheryctl'.</p>
        </div>
      </Link>
      <Link to="/service-mesh-management/meshery/getting-started" id="Run Meshery">
        <div className="card">
          <div className="card-header">
            <h2>Run Meshery</h2>
            <img src={Meshery} />
          </div>
          <p>With 'mesheryctl', not only you can manage your service meshes, but also manage their workloads, mesure their performance, verify conformance to service mesh standards.</p>
        </div>
      </Link>
      <Link to="/service-mesh-management/meshery/operating-service-meshes" id="Manage Meshery">
        <div className="card">
          <div className="card-header">
            <h2>Manage Meshery</h2>
            <img src={MesheryOperator} />
          </div>
          <p>Wrangle your mesh with Meshery Operator and MeshSync.</p>
        </div>
      </Link>
    </div>
  </SetupPreReqWrapper>
);

export default SetupPreReq;
