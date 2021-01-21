import React, {useState} from "react";
import MesheryLogo from  "../../../assets/images/meshery/meshery-logo-complete-white-side.svg";
import { MesheryPlatformsWrapper } from "./MesheryPlatforms.style";
import {Col, Container, Row} from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Code from "../../../components/CodeBlock";
import dedent from "dedent";

const supported_platforms = [
  {
    icon : require("./supported-icons/apple.svg"),
    name: "Apple",
    steps: (
      <h3>Apple</h3>
    )
  },
  {
    icon : require("./supported-icons/docker.svg"),
    name: "Docker",
    steps: (
      <h2>Docker</h2>
    )
  },
  {
    icon : require("./supported-icons/eks.svg"),
    name: "EKS",
    steps: (
      <h2>EKS</h2>
    )
  },
  {
    icon : require("./supported-icons/gke.svg"),
    name: "GKE",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/helm.svg"),
    name: "Helm",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/homebrew.svg"),
    name: "HomeBrew",
    steps: (
      <>
        <h3>Brew User</h3>
        <p>Install on Mac or Linux using Homebrew:</p>
        <Code codeString={dedent`brew tap layer5io/tap
                    brew install mesheryctl
                    mesheryctl system start`}
        />
      </>
    )
  },
  {
    icon : require("./supported-icons/kind.svg"),
    name: "Kind",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/kubernetes.svg"),
    name: "Kubernetes",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/linux.svg"),
    name: "Linux",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/minikube.svg"),
    name: "Minikube",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/openshift.svg"),
    name: "OpenShift",
    steps: (
      <h2>test</h2>
    )
  },
  {
    icon : require("./supported-icons/wsl2.svg"),
    name: "WSL2",
    steps: (
      <h2>test</h2>
    )
  }
];

const MesheryPlatforms = () => {
  const [currentPlatform, setCurrentPlatform] = useState({});

  const changeCurrentPlatform = (index) => {
    if(currentPlatform.name && currentPlatform.name === supported_platforms[index].name)
      setCurrentPlatform({});
    else
      setCurrentPlatform(supported_platforms[index]);
  };

  return(
    <MesheryPlatformsWrapper>
      <div className="content">
        <Row Hcenter className="step-1">
          <p>1 step install to managing service meshes</p>
          <h2>Step 1: Choose your platform</h2>
        </Row>
        <Row className="supported-platforms">
          { supported_platforms.map((platform,index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={platform.name}>
              <Button
                className={currentPlatform.name && currentPlatform.name === supported_platforms[index].name
                  ? "single-platform single-platform-selected " : "single-platform "}
                onClick={() => changeCurrentPlatform(index)}>
                <img src={platform.icon} alt={platform.name} />
              </Button>
            </Col>
          ))}
        </Row>
        {currentPlatform.name && (
          <Container>
            <Row className="installation-steps">
              {currentPlatform.steps}
            </Row>
          </Container>
        )}
        <Row Hcenter className="step-2">
          <h2>Step 2: Manage your mesh</h2>
          <img src={MesheryLogo} alt="Meshery"/>
        </Row>
      </div>
    </MesheryPlatformsWrapper>
  );
};

export default MesheryPlatforms;
