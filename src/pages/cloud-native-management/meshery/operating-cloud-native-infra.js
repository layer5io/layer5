import React from "react";

import SEO from "../../../components/seo";
import HowMesheryWorksHero from "../../../sections/Meshery/How-meshery-works/hero";

import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import VisualTopology from "../../../sections/Meshery/How-meshery-works/images/visual-topology.svg";
import MesheryOperatorLogo from "../../../sections/Meshery/How-meshery-works/images/meshery-operator-dark.svg";
import Smi from "../../../assets/images/app/projects/smi.svg";
import WebA from "../../../sections/Meshery/How-meshery-works/images/webassembly_logo.svg";
import SMP from "../../../sections/Meshery/How-meshery-works/images/smp-dark-text.webp";
import { ReactComponent as GithubLogo } from "../../../assets/images/socialIcons/github_colorMode.svg";
import loadable from "@loadable/component";
const HowMesheryWorks = loadable(() =>
  import("../../../sections/Meshery/How-meshery-works")
);
const HowMesheryWorksSpecs = loadable(() =>
  import("../../../sections/Meshery/How-meshery-works/specs")
);

const OperatingServiceMeshes = () => {
  return (
    <>
      <HowMesheryWorksHero />
      <HowMesheryWorks
        title="How Meshery Manages Cloud Native Infra"
        description="As the cloud native manager, Meshery offers support for more adapters than any other project or product in the world. Adapters in Meshery are used to extend its management capabilities."
        features={[
          {
            title: "GitOps: Configuration as Visual Design",
            icon: <GithubLogo alt="title" />,
            description: (
              <p>
                GitOps is a way to define workflows for declarative
                configuration using Git. Meshery greatly simplifies configuring
                and managing cloud native infrastructure at-scale across
                multiple clusters with a git-integrated experience.
              </p>
            ),
          },
          {
            title: "Adapter is extend rich control over infra",
            icon: MesheryLogo,
            description: (
              <div>
                <p>
                  Adapters allow Meshery to interface with the different
                  Kuberentes-based infrastructure, exposing the tools'
                  differentiated value to users. Care is taken in each Meshery
                  Adapter to expose the unique value of each component.{" "}
                </p>
                <p>
                  Consequently, each Meshery Adapter is not equally capable just
                  as each Kubernetes infrastucture tool is not equally capable
                  as another.
                </p>
              </div>
            ),
          },
          {
            title: "MeshMap",
            icon: VisualTopology,
            description: (
              <div>
                <p>
                  MeshMap enables all cloud native management operations from
                  `mesheryctl` to Meshery's web-based user interface in visually
                  interactive topology.
                </p>
                <p>
                  Designing and configuring your cloud native infrastructure is
                  as easy as dragging and dropping.
                </p>
                <p>
                  Learn more about{" "}
                  <a href="https://layer5.io/cloud-native-management/meshmap">
                    MeshMap
                  </a>
                </p>
              </div>
            ),
          },
          {
            title: "Extension Points",
            icon: MesheryLogo,
            description: (
              <div>
                <p>
                  Meshery is not just an application. It is a set of
                  microservices where the central component is itself called
                  Meshery. Integrators may extend Meshery by taking advantage of
                  designated Extension Points. Extension points come in various
                  forms and are available through Mesherys architecture.
                </p>
                <p>
                  Learn more about{" "}
                  <a href="https://docs.meshery.io/extensibility">
                    Extension Points
                  </a>
                </p>
              </div>
            ),
          },
          {
            title: "Meshery Operator with MeshSync",
            icon: MesheryOperatorLogo,
            description: (
              <p>
                MeshSync's ease of use is simple, but tiered, discovery
                pipelines are powerful and independently scale across multiple
                Kubernetes clusters.
              </p>
            ),
          },
          {
            title: "Using Multiple Adapters",
            icon: MesheryLogo,
            description: (
              <div>
                <p>
                  Adapters are optional components that enhance and extend
                  Meshery’s core functionality. Multiple adapters of the same
                  type may be deployed concurrently. The default configuration
                  of a Meshery deployment includes one instance of each of the
                  Meshery adapters.
                </p>
                <p>
                  See the{" "}
                  <a
                    href="https://docs.meshery.io/guides/multiple-adapters"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Using Multiple Adapters
                  </a>{" "}
                  guide for more information.
                </p>
              </div>
            ),
          },
          {
            title: "Interactive Terminal",
            icon: Smi,
            description: (
              <p>
                Establish web-based console sessions with one or more pods at a
                time.
              </p>
            ),
          },
          {
            title: "Envoy WebAssembly Filters",
            icon: WebA,
            description: (
              <p>
                Meshery dynamically loads and reloads WebAssembly (WASM)
                modules, enabling Envoy-based data planes to be more intelligent
                and responsive in real-time.
              </p>
            ),
          },
          {
            title: "Cloud Native Performance",
            icon: SMP,
            description: <p>Track your MeshMark and compare with others.</p>,
          },
          {
            title: "Broad Platform Support",
            icon: MesheryLogo,
            description: (
              <p>Deploy Meshery to one of ten different supported platforms.</p>
            ),
          },
        ]}
      />
      <HowMesheryWorksSpecs />
    </>
  );
};
export default OperatingServiceMeshes;

export const Head = () => {
  return (
    <SEO
      title="Manage Meshery"
      description="How the cloud native management plane, Meshery works"
      image="/images/meshery-logo-dark-text.webp"
    />
  );
};
