import React, { useState } from "react";
import MesheryLogo from "../../../assets/images/meshery/meshery-logo-complete-white-side.svg";
import { MesheryPlatformsWrapper } from "./MesheryPlatforms.style";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Code from "../../../components/CodeBlock";
import dedent from "dedent";
import Apple from "./supported-icons/apple.svg";
import Docker from "./supported-icons/docker_white.svg";
import EKS from "./supported-icons/eks_white.svg";
import GKE from "./supported-icons/gke.svg";
import Helm from "./supported-icons/helm-icon-white.svg";
import HomeBrew from "./supported-icons/homebrew.svg";
import Kind from "./supported-icons/kind.svg";
import Kubernetes from "./supported-icons/kubernetes_white.svg";
import Linux from "./supported-icons/linux.svg";
import Minikube from "./supported-icons/minikube.svg";
import AKS from "./supported-icons/aks_white.svg";
import WSL2 from "./supported-icons/wsl2.svg";

const supported_platforms = [
  {
    icon : Apple,
    name : "Apple",
    steps : (
      <>
        <h2>MacOS User</h2>
        <h4>Install on Mac using Homebrew:</h4>
        <Code codeString={dedent`brew tap layer5io/tap
        brew install mesheryctl
        mesheryctl system start`
        }
        />
      </>
    )
  },
  {
    icon : Docker,
    name : "Docker",
    steps : (
      <>
        <h2>Docker User</h2>
        <Code codeString={dedent`curl -L https://meshery.io/install | PLATFORM=docker bash -`
        }
        />
      </>
    )
  },
  {
    icon : EKS,
    name : "EKS",
    steps : (
      <>
        <h2>AWS Elastic Kubernetes Service User</h2>
        <Code codeString={dedent`mesheryctl system config eks
      mesheryctl system start`}
        />
      </>
    )
  },
  {
    icon : GKE,
    name : "GKE",
    steps : (
      <>
        <h2>Google Kubernetes Engine User</h2>
        <Code codeString={dedent`mesheryctl system config gke --token *PATH_TO_TOKEN* 
        ./generate_kubeconfig_gke.sh cluster-admin-sa-gke default
        mesheryctl system start`}
        />
      </>
    )
  },
  {
    icon : Helm,
    name : "Helm",
    steps : (
      <>
        <h2>Helm Chart</h2>
        <p>Install on Kubernetes using Helm:</p>
        <Code codeString={dedent`helm repo add meshery https://meshery.io/charts/
        helm install my-meshery meshery/meshery --version 2.1.2`}
        />
      </>
    )
  },
  {
    icon : HomeBrew,
    name : "HomeBrew",
    steps : (
      <>
        <h2>Brew User</h2>
        <h4>Install on Mac or Linux using Homebrew:</h4>
        <Code codeString={dedent`brew tap layer5io/tap
        brew install mesheryctl
        mesheryctl system start`}
        />
      </>
    )
  },
  {
    icon : Kind,
    name : "Kind",
    steps : (
      <>
        <h2>Kind User</h2>
        <Code codeString={dedent`export KUBECONFIG=$HOME/.kube/config
        kubectl create namespace meshery
        helm install meshery --namespace meshery install/kubernetes/helm/meshery`}
        />
      </>
    )
  },
  {
    icon : Kubernetes,
    name : "Kubernetes",
    steps : (
      <>
        <h2>Kubernetes User</h2>
        <Code codeString={dedent`curl -L https://meshery.io/install | PLATFORM=kubernetes bash - 
        mesheryctl system start`
        }
        />
      </>
    )
  },
  {
    icon : Linux,
    name : "Linux",
    steps : (
      <>
        <h2>Bash User</h2>
        <Code codeString={dedent`curl -L https://meshery.io/install | PLATFORM=kubernetes bash -`}
        />
      </>
    )
  },
  {
    icon : Minikube,
    name : "Minikube",
    steps : (
      <>
        <h2>Minikube User</h2>
        <Code codeString={dedent`mesheryctl system config minikube -t ~/Downloads/auth.json`
        }
        />
      </>
    )
  },
  {
    icon : AKS,
    name : "AKS",
    steps : (
      <>
        <h2>Azure Kubernetes Service User</h2>
        <p>Install mesheryctl and configure Meshery to communicate with AKS.</p>
        <Code codeString={dedent`mesheryctl system config aks
        mesheryctl system start`
        }
        />
      </>
    )
  },
  {
    icon : WSL2,
    name : "WSL2",
    steps : (
      <>
        <h2>Windows User</h2>
        <p>
          Download and unzip mesheryctl from the <a href="https://github.com/layer5io/meshery/releases/">Meshery releases page</a>. Add mesheryctl to your PATH for ease of use. Then, execute:</p>
        <Code codeString={dedent`mesheryctl system start`}
        />
      </>
    )
  }
];

const MesheryPlatforms = () => {
  const [currentPlatform, setCurrentPlatform] = useState({});
  const [installationStepsHeight,setInstallationStepsHeight] = useState(currentPlatform.name ? "200px" : 0);

  const hasSelectedSamePlatform = (index) => currentPlatform.name === supported_platforms[index].name;

  const changeCurrentPlatformState = (index) => {
    if (currentPlatform.name && hasSelectedSamePlatform(index))
      setCurrentPlatform({});
    else
      setCurrentPlatform(supported_platforms[index]);

  };

  const changeCurrentPlatform = (index) => {
    if (currentPlatform.name && !hasSelectedSamePlatform(index)) {
      changeCurrentPlatformState(index);
      return;
    }
    setTimeout(() => changeCurrentPlatformState(index), 500);
    setInstallationStepsHeight(currentPlatform.name ? 0 : "200px");
  };


  return (
    <MesheryPlatformsWrapper>
      <div className="content">
        <Row Hcenter className="step-1">
          <p>1 step install to managing service meshes</p>
          <h2><span>Step 1:</span> Choose your platform</h2>
        </Row>
        <Row className="supported-platforms">
          {supported_platforms.map((platform, index) => (
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
        <Container style={{ transition : "height 0.5s ease-in-out", height : installationStepsHeight, overflow : "hidden" }}>
          <Row className="installation-steps" >
            {currentPlatform.name && currentPlatform.steps}
          </Row>
        </Container>
        <Row Hcenter className="step-2">
          <Col>
            <h2><span>Step 2:</span> Manage your mesh</h2>
            <img src={MesheryLogo} alt="Meshery" className="meshery-logo" />
          </Col>
        </Row>
      </div>
    </MesheryPlatformsWrapper>
  );

};

export default MesheryPlatforms;
