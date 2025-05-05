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
      <p>Learning Paths are designed to be accessible to a wide range of learners, from beginners to experienced professionals. However, certain paths may assume a basic understanding of specific technologies or concepts.</p>
    </div>
    <div className="container-card" id="Set up">
      <a href="/cloud-native-management/meshery"
        target="_blank"
      >
        <div className="card">
          <div className="card-header">
            <h2>Prerequisites</h2>
            <BsTerminalFill />
          </div>
          <ul>
            <li>Familiarity with Linux command line</li>
            <li>Optional: Prior experience with cloud platforms (AWS, Azure, GCP)</li>
            <li>Familiarity with GitHub and Helm</li>
            <li>Understanding of infrastructure as code (IaC) principles</li>
            <li>Familiarity with containerization (e.g., Docker)</li>
            <li>Knowledge of Kubernetes architecture and components</li>
          </ul>
        </div>
      </a>
      <a href="https://playground.meshery.io/" id="Run Meshery"
        target="_blank" rel="noreferrer"
      >
        <div className="card">
          <div className="card-header">
            <h2>Acess to Meshery</h2>
            <StaticImage src={meshery} alt="Meshery" className="setup-imgs" />
          </div>
          <b>Recommended:</b>
          <p>
            Use Meshery Playground, a
            free-to-use, hosted Meshery deployment with live Kubernetes cluster. Click this
            card to open the playground.
          </p>
          <b>Alternative:</b>
          <p>
            Install Meshery locally to
            see how easy it is to start managing cloud native infrastructure and complete
            the labs in this Learning Path.
          </p>
        </div>
      </a>
      <a href="https://meshery.io/#getting-started" id="Manage Meshery"
        target="_blank" rel="noreferrer"
      >
        <div className="card">
          <div className="card-header">
            <h2>Or Run Meshery</h2>
            <StaticImage src={mesheryOperator} alt="Meshery Operator" className="setup-imgs" />
          </div>
          <p>Optionally, install Meshery locally to see how easy it is to start managing cloud native infrastructure and complete the labs in this Learning Path. Optionally, Meshery can be deployed on-premises with a single command to download, install, and run your own instance of Meshery in your environment. See all supported platforms to deploy your own Meshery Server.</p>
        </div>
      </a>
    </div>
  </SetupPreReqWrapper>
);

export default SetupPreReq;
