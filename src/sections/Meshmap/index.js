import React from "react";
import MeshmapWrapper from "./meshmap.style";
import { Container } from "../../reusecore/Layout";
import Features from "../../components/Features-carousel";
import MeshmapModes from "./meshmap-modes";
import Catalog from "./meshmap-catalog";
import Platform from "./meshmap-platform";
import MeshmapBanner from "./meshmap_banner";
import designerImage from "../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../assets/images/meshmap/MeshmapVisualizer.png";
import DesignerFeatures from "./FeaturesSection/Design/DesignerFeatures";
import CollaboratorFeatures from "./FeaturesSection/Collaborate/CollaboratorFeatures";
import VisualizerFeatures from "./FeaturesSection/Visualize/VisualizerFeatures";
import SignupForm from "./signup-form";
import Reviews from "../Pricing/review-slider";

const Meshmap = ({ theme }) => {

  return (
    <MeshmapWrapper>
      <div >
        <Container>
          <MeshmapBanner />
          <div className="mobile-modes">
            <Features
              heading="MeshMap Modes"
              features={[
                {
                  title: "Designer Mode",
                  description:
                    "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Using a service mesh? Visually configure your Envoy filter chain. Using Prometheus? Explore all available metrics. Using Grafana? Ingest your existing boards and panels. Using GitOps? Integrate advanced performance analysis into your pipeline.",
                  content: (
                    <img
                      src={designerImage}
                      alt="Designer Mode"
                      className="designer-img modes-image"
                    />
                  ),
                },
                {
                  title: "Visualizer Mode",
                  description:
                    "Visualizer offers an interactive topology of your Kubernetes clusters with live terminal sessions, log streaming and performance testing of your applications. Designs created in Designer mode can be deployed and viewed as running in your environment using Visualizer.",
                  content: (
                    <img
                      src={visualizerImage}
                      alt="Visualizer Mode"
                      className="modes-image"
                    />
                  ),
                },
              ]}
            />
          </div>
          <MeshmapModes />

          <DesignerFeatures
            features={
              [
                {
                  title: "Design your deployments the way you want",
                  description: "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations."
                },
                {
                  title: "Manage your applications visually and intuitively",
                  description: "Play with powerful features including context-aware designs and namespace configurations to easily manage all services."
                },
                {
                  title: "Build the bridge",
                  description: "Go from developer handoffs to ongoing conversations with a shared language between design and development."
                },
                {
                  title: "Stop finger-pointing",
                  description: "Make infrastructure and application management less about finger-pointing and more about collaborating."
                },
              ]} theme={theme} />

          <VisualizerFeatures
            features={
              [
                {
                  title: "All your Kubernetes clusters under a common management",
                  description: "Deploy designs, apply patterns, manage and operate your deployments and services in real-time."
                },
                {
                  title: "Continuous visibility across all of your clusters and workloads.",
                  description: "Import your existing Kubernetes, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers."
                },
              ]} theme={theme} />

          <CollaboratorFeatures
            features={
              [
                {
                  title: "Bring those ideas to life",
                  description: "Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place."
                  // Invite any Meshery Cloud user, or all Meshery users, to work with you on a public design, including making changes and releasing new versions."
                },
                // {
                //   title: "Nothing great is made alone.",
                //   description: "MeshMap connects everyone in the DevOps process so teams can deliver better products, faster."
                // },
                {
                  title: "Create. Iterate. Repeat.",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely."
                },
                {
                  title: "Where your teams share the same language",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely."
                },
                // {
                //   title: "Where your teams share the same language",
                //   description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely."
                // },
                {
                  title: "Inclusive collaboration from start to finish",
                  description: "MeshMap is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together."
                }
              ]} theme={theme} />
          {/* <CollaboratorFeatures
            features={
              [
                {
                  title: "Stop finger-pointing",
                  description: "Make infrastructure and application management less about finger-pointing and more about collaborating."
                },
                {
                  title: "Self-service empowerment for all of your teams",
                  description: "As a self-service engineering platform, Layer5 helps DevOps teams make infrastructure and application management less about finger-pointing and more about collaborating."
                },
                {
                  title: "Empower developers to change how they write applications",
                  description: "We , support operators in rethinking how they run modern infra, supercharge security engineers with code-level insight, enable service owners to regain control over their products."
                },
                {
                  title: "",
                  description: ""
                },
                {
                  title: "",
                  description: ""
                },
                {
                  title: "",
                  description: ""
                },
                {
                  title: "",
                  description: ""
                },
                {
                  title: "",
                  description: ""
                },
                {
                  title: "",
                  description: ""
                },
              ]} />*/}

          <Catalog />
          {/* <MesheryAction /> */}
          <SignupForm />
          <Platform />
        </Container >
      </div >
      <Reviews />
    </MeshmapWrapper>
  );
};

export default Meshmap;
