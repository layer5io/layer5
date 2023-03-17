import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import HowMesheryWorksHero from "../../../sections/Meshery/How-meshery-works/hero";
import Footer from "../../../sections/General/Footer";
import SMILogo from "../../../sections/Meshery/How-meshery-works/images/servicemeshinterface-icon-color.svg";
import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import VisualTopology from "../../../sections/Meshery/How-meshery-works/images/visual-topology.svg";
import MesheryOperatorLogo from "../../../sections/Meshery/How-meshery-works/images/meshery-operator-dark.svg";
import Smi from "../../../assets/images/app/projects/smi.svg";
import WebA from "../../../sections/Meshery/How-meshery-works/images/webassembly_logo.svg";
import SMP from "../../../sections/Meshery/How-meshery-works/images/smp-dark-text.png";
import dark_githubLogo from "../../../assets/images/socialIcons/github_black.svg";
import loadable from "@loadable/component";
const HowMesheryWorks = loadable(() => import ("../../../sections/Meshery/How-meshery-works"));
const HowMesheryWorksSpecs = loadable(() => import ("../../../sections/Meshery/How-meshery-works/specs"));
const OperatingServiceMeshes = () => {
  return (
    <Layout>
      <HowMesheryWorksHero  />
      <HowMesheryWorks
        title="How Meshery Manages Cloud Native Infra"
        description="As the cloud native manager, Meshery offers support for more adapters than any other project or product in the world. Meshery uses adapters for managing the various service meshes."
        features={
          [
            {
              title: "GitOps: Configuration as Visual Design",
              icon: dark_githubLogo,
              description: <p>GitOps is a way to define workflows for declarative configuration using Git. Meshery greatly simplifies configuring and managing cloud native infrastructure at-scale across multiple clusters with a git-integrated experience.</p>
            },
            {
              title: "Supporting Service Mesh Interface",
              icon: SMILogo,
              description:
                  <p>Every Meshery Adapter provides a common substrate of support for every service mesh, offering a
                    standard set of management features across all service meshes.</p>,
            },
            {
              title: "Each service mesh adapter is unique",
              icon: MesheryLogo,
              description:
                  <div><p>Adapters allow Meshery to interface with the different service meshes, exposing their differentiated value to users.Care is taken in each Meshery Adapter to expose the unique value of each service mesh. </p>
                    <p>Consequently, each Meshery Adapter is not equally capable just as each service mesh is not equally
                      capable as another service mesh.</p>
                  </div>,
            },
            {
              title: "MeshMap",
              icon: VisualTopology,
              description:
                  <div>
                    <p>MeshMap enables all cloud native management operations from `mesheryctl` to Meshery's web-based user interface in visually interactive topology.</p><p>
                      Designing and configuring your service mesh is as easy as dragging and dropping.</p>
                    <p>Learn more about <a href="https://layer5.io/cloud-native-management/meshmap">MeshMap</a></p>
                  </div>,
            },
            {
              title: "Extension Points",
              icon: MesheryLogo,
              description: <div>
                <p>Meshery is not just an application. It is a set of microservices where the central component is itself called Meshery. Integrators may extend Meshery by taking advantage of designated Extension Points. Extension points come in various forms and are available through Mesherys architecture.</p>
                <p>Learn more about <a href="https://docs.meshery.io/extensibility">Extension Points</a></p>
              </div>
            },
            {
              title: "Meshery Operator with MeshSync",
              icon: MesheryOperatorLogo,
              description:
                  <p>MeshSync's ease of use is simple, but tiered, discovery pipelines are powerful and independently scale across multiple Kubernetes clusters.</p>,
            },
            {
              title: "Managing multiple instances of the same type of service mesh",
              icon: MesheryLogo,
              description:
                  <p>Adapters establish
                    communication with Kubernetes and a specific type of service mesh.
                    Multiple adapters of the same type may be deployed concurrently. Although,
                    this isn’t strictly necessary for Meshery to communicate to more than one instance of the same type of service mesh.
                    See the <a href="https://docs.meshery.io/guides/multiple-adapters" target="_blank" rel="noreferrer">Using Multiple Adapters</a> guide for more information.</p>,
            },
            {
              title: "Service Mesh Interface Conformance",
              icon: Smi,
              description:
                  <p>Adapters allow Meshery to interface with the different service meshes, exposing their differentiated value to users.</p>,
            },
            {
              title: "WebAssembly Filters",
              icon: WebA,
              description:
                  <p>Meshery dynamically loads and reloads WebAssembly (WASM) modules in service mesh data planes, enabling Envoy-based data planes to be more intelligent and responsive in real-time.</p>,
            },
            {
              title: "Service Mesh Performance",
              icon: SMP,
              description:
                  <p>Track your MeshMark and compare with others.</p>,
            },
            {
              title: "Broad Platform Support",
              icon: MesheryLogo,
              description:
                  <p>Deploy Meshery to one of ten different supported platforms.</p>,
            },
          ]} />
      <HowMesheryWorksSpecs />
      <Footer />
    </Layout>
  );
};
export default OperatingServiceMeshes;
export const Head = () => {
  return  <SEO title="Manage Meshery"
    description="How the cloud native management plane, Meshery works"
    image="/images/meshery-logo-dark-text.png" />;
};