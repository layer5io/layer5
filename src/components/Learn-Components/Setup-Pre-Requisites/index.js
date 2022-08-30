import React from "react";
import SetupPreReqWrapper from "./setup-pre-req.style";
import { BsTerminalFill } from "@react-icons/all-files/bs/BsTerminalFill";
import { StaticImage } from "gatsby-plugin-image";

const meshery = "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
const mesheryOperator = "../../../assets/images/meshery-operator/meshery-operator-dark.svg";


const SetupPreReq = () => (
  <SetupPreReqWrapper>
    <div className="get-started-desc" id="pre-requisites">
      <h2>Prerequisites</h2>
      <p>In this learning path, we will be using Meshery as the management plane to manage the service meshes. Meshery is the cloud native management plane which offers lifecycle, configuration, and performance management of service meshes and their workloads.</p>
    </div>
    <div className="container-card" id="Set up">
      <a href="/cloud-native-management/meshery"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Install Meshery</h2>
            <BsTerminalFill />
          </div>
          <p>Meshery provides you with a clean, robust, streamlined command-line interface to manage your service meshes: 'mesheryctl'.</p>
        </div>
      </a>
      <a href="/cloud-native-management/meshery/getting-started" id="Run Meshery"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Run Meshery</h2>
            <StaticImage src={meshery} alt="Meshery" className="setup-imgs" />
          </div>
          <p>With 'mesheryctl', not only you can manage your service meshes, but also manage their workloads, measure their performance, verify conformance to service mesh standards.</p>
        </div>
      </a>
      <a href="/cloud-native-management/meshery/operating-service-meshes" id="Manage Meshery"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Manage Meshery</h2>
            <StaticImage src={mesheryOperator} alt="Meshery Operator" className="setup-imgs" />
          </div>
          <p>Wrangle your mesh with Meshery Operator and MeshSync.</p>
        </div>
      </a>
    </div>
  </SetupPreReqWrapper>
);

export default SetupPreReq;
