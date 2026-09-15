import React, { useState, useEffect } from "react";
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
import Kind from "./supported-icons/kind-logo-white.svg";
import Kubernetes from "./supported-icons/kubernetes_white.svg";
import Linux from "./supported-icons/linux.svg";
import Minikube from "./supported-icons/minikube.svg";
import AKS from "./supported-icons/aks_white.svg";
import WSL2 from "./supported-icons/wsl2.svg";
import {
  PLATFORM_NAMES,
  PLATFORM_SECTION_ID,
  SELECT_PLATFORM_EVENT,
  TALL_PLATFORMS,
} from "./platform-data";

const supported_platforms = [
  {
    icon: Apple,
    name: PLATFORM_NAMES.APPLE,
    steps: (
      <>
        <h2>MacOS User</h2>
        <h4>Install on Mac using Homebrew:</h4>
        <Code
          codeString={dedent`brew install mesheryctl
        mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: Docker,
    name: PLATFORM_NAMES.DOCKER,
    steps: (
      <>
        <h2>Docker User</h2>
        <Code
          codeString={dedent`curl -L https://meshery.io/install | PLATFORM=docker bash -`}
        />
        <h2 style={{ marginTop: "20px" }}>Using mesheryctl</h2>
        <Code
          codeString={dedent`mesheryctl system context create docker --platform docker --set
        mesheryctl system start`}
        />
        <h2 style={{ marginTop: "20px" }}>Docker Extension</h2>
        <Code
          codeString={dedent`docker extension install meshery/docker-extension-meshery:stable-latest`}
        />
      </>
    ),
  },
  {
    icon: EKS,
    name: PLATFORM_NAMES.EKS,
    steps: (
      <>
        <h2>AWS Elastic Kubernetes Service User</h2>
        <Code
          codeString={dedent`mesheryctl system config eks
      mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: GKE,
    name: PLATFORM_NAMES.GKE,
    steps: (
      <>
        <h2>Google Kubernetes Engine User</h2>
        <Code
          codeString={dedent`mesheryctl system config gke --token *PATH_TO_TOKEN*
        ./generate_kubeconfig_gke.sh cluster-admin-sa-gke default
        mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: Helm,
    name: PLATFORM_NAMES.HELM,
    steps: (
      <>
        <h2>Helm Chart</h2>
        <p>Install on Kubernetes using Helm:</p>
        <Code
          codeString={dedent`helm repo add meshery https://meshery.io/charts/
             helm install my-meshery meshery/meshery --version 2.1.2`}
        />
        <h3 style={{ marginTop: "20px" }}>Using kubectl</h3>
        <Code
          codeString={dedent`kubectl create ns meshery
        helm repo add meshery https://meshery.io/charts
        helm install meshery meshery/meshery -n meshery`}
        />
      </>
    ),
  },
  {
    icon: HomeBrew,
    name: PLATFORM_NAMES.HOMEBREW,
    steps: (
      <>
        <h2>Brew User</h2>
        <h4>Install on Mac or Linux using Homebrew:</h4>
        <Code
          codeString={dedent`brew install mesheryctl
        mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: Kind,
    name: PLATFORM_NAMES.KIND,
    steps: (
      <>
        <h2>KinD User</h2>
        <Code
          codeString={dedent`export KUBECONFIG=$HOME/.kube/config
        kubectl create namespace meshery
        helm repo add meshery https://meshery.io/charts
        helm install meshery --namespace meshery meshery/meshery`}
        />
      </>
    ),
  },
  {
    icon: Kubernetes,
    name: PLATFORM_NAMES.KUBERNETES,
    steps: (
      <>
        <h2>Kubernetes User</h2>
        <Code
          codeString={dedent`curl -L https://meshery.io/install | PLATFORM=kubernetes bash -
        mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: Linux,
    name: PLATFORM_NAMES.LINUX,
    steps: (
      <>
        <h3>Install Using Kubernetes</h3>
        <Code
          codeString={dedent`curl -L https://meshery.io/install | PLATFORM=kubernetes bash -`}
        />
        <h3 style={{ marginTop: "20px" }}>Install Using Docker</h3>
        <Code
          codeString={dedent`curl -L https://meshery.io/install | PLATFORM=docker bash -`}
        />
      </>
    ),
  },
  {
    icon: Minikube,
    name: PLATFORM_NAMES.MINIKUBE,
    steps: (
      <>
        <h2>Minikube User</h2>
        <Code
          codeString={dedent`mesheryctl system config minikube -t ~/Downloads/auth.json`}
        />
      </>
    ),
  },
  {
    icon: AKS,
    name: PLATFORM_NAMES.AKS,
    steps: (
      <>
        <h2>Azure Kubernetes Service User</h2>
        <p>Install mesheryctl and configure Meshery to communicate with AKS.</p>
        <Code
          codeString={dedent`mesheryctl system config aks
        mesheryctl system start`}
        />
      </>
    ),
  },
  {
    icon: WSL2,
    name: PLATFORM_NAMES.WSL2,
    steps: (
      <>
        <h2>Windows User</h2>
        <p>
          Download and unzip mesheryctl from the{" "}
          <a href="https://github.com/layer5io/meshery/releases/">
            Meshery releases page
          </a>
          . Add mesheryctl to your PATH for ease of use. Then, execute:
        </p>
        <Code codeString={dedent`mesheryctl system start`} />
      </>
    ),
  },
];

const MesheryPlatforms = () => {
  const [currentPlatform, setCurrentPlatform] = useState({});
  const [installationStepsHeight, setInstallationStepsHeight] = useState(
    currentPlatform.name ? "200px" : 0,
  );

  const hasSelectedSamePlatform = (index) =>
    currentPlatform.name === supported_platforms[index].name;

  const changeCurrentPlatformState = (index) => {
    if (currentPlatform.name && hasSelectedSamePlatform(index)) {
      setCurrentPlatform({});
    } else {
      setCurrentPlatform(supported_platforms[index]);
    }
  };

  const changeCurrentPlatform = (index) => {
    if (currentPlatform.name && !hasSelectedSamePlatform(index)) {
      changeCurrentPlatformState(index);
      return;
    }
    setTimeout(() => changeCurrentPlatformState(index), 500);
    setInstallationStepsHeight(currentPlatform.name ? 0 : "200px");
  };

  const selectPlatformByName = (name) => {
    if (!name) return;
    const cleanName = name.replace(/^#/, "").toLowerCase();
    const index = supported_platforms.findIndex(
      (p) => p.name.toLowerCase() === cleanName,
    );
    if (index !== -1) {
      setCurrentPlatform(supported_platforms[index]);
      setInstallationStepsHeight("200px");
    }
  };

  useEffect(() => {
    const handlePlatformEvent = (event) => {
      const platformName = event.detail?.platform;
      if (platformName) {
        selectPlatformByName(platformName);
      }
    };

    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        selectPlatformByName(window.location.hash);
      }
    };

    if (typeof window !== "undefined" && window.location.hash) {
      handleHashChange();
    }

    if (typeof window !== "undefined") {
      window.addEventListener(SELECT_PLATFORM_EVENT, handlePlatformEvent);
      window.addEventListener("hashchange", handleHashChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(SELECT_PLATFORM_EVENT, handlePlatformEvent);
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  return (
    <MesheryPlatformsWrapper id={PLATFORM_SECTION_ID}>
      <div id="platforms" className="content">
        <Row $Hcenter className="step-1">
          <p>
            Start managing cloud native infrastructure easily with a single
            command.{" "}
          </p>
          <h2>
            <span>Step 1:</span> Choose your platform
          </h2>
        </Row>
        <Row className="supported-platforms">
          {supported_platforms.map((platform, index) => (
            <Col
              $xs={6}
              $sm={4}
              $md={3}
              $lg={2}
              key={platform.name}
              id={platform.name.toLowerCase()}
            >
              <Button
                className={
                  currentPlatform.name &&
                  currentPlatform.name === supported_platforms[index].name
                    ? "single-platform single-platform-selected "
                    : "single-platform "
                }
                onClick={() => changeCurrentPlatform(index)}
                aria-label={`Select platform ${platform.name}`}
              >
                <img src={platform.icon} alt={platform.name} />
              </Button>
            </Col>
          ))}
        </Row>
        <Container
          style={{
            transition: "height 0.5s ease-in-out",
            height: TALL_PLATFORMS.includes(currentPlatform.name)
              ? "30rem"
              : installationStepsHeight,
            overflow: "hidden",
          }}
        >
          <Row className="installation-steps">
            {currentPlatform.name && currentPlatform.steps}
          </Row>
        </Container>
        <Row $Hcenter className="step-2">
          <Col>
            <h2>
              <span>Step 2:</span> Manage your Cloud Native Infra
            </h2>
            <p>
              There is no step 2. Login and manage cloud native infrastructure!
              For more detailed instructions, visit{" "}
              <a href="https://docs.meshery.io">Meshery Docs</a>
            </p>
            <a
              href="https://docs.meshery.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meshery Docs"
            >
              <img src={MesheryLogo} alt="Meshery" className="meshery-logo" />
            </a>
          </Col>
        </Row>
      </div>
    </MesheryPlatformsWrapper>
  );
};

export default MesheryPlatforms;
