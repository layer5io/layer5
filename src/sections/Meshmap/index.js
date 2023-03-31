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
import InlineQuotes from "../../components/Inline-quotes";
import roleBind1 from "./FeaturesSection/Design/images/role-binding-1.svg";
import roleBind1_dark from "./FeaturesSection/Design/images/role-binding-1-dark.svg";
import roleBind2 from "./FeaturesSection/Design/images/role-binding-2.svg";
import roleBind2_dark from "./FeaturesSection/Design/images/role-binding-2-dark.svg";
import roleBind3 from "./FeaturesSection/Design/images/role-binding-3.svg";
import roleBind3_dark from "./FeaturesSection/Design/images/role-binding-3-dark.svg";
import roleBind4 from "./FeaturesSection/Design/images/role-binding-4.svg";
import roleBind4_dark from "./FeaturesSection/Design/images/role-binding-4-dark.svg";
import Visualize1 from "./FeaturesSection/Visualize/images/visualize-1.svg";
import Visualize1_dark from "./FeaturesSection/Visualize/images/visualize-1-dark.svg";
import Visualize2 from "./FeaturesSection/Visualize/images/visualize-2.svg";
import Visualize2_dark from "./FeaturesSection/Visualize/images/visualize-2-dark.svg";
import Collab1 from "./FeaturesSection/Collaborate/images/collab1.svg";
import Collab1_dark from "./FeaturesSection/Collaborate/images/collab1-dark.svg";
import Collab2 from "./FeaturesSection/Collaborate/images/collab2.svg";
import Collab2_dark from "./FeaturesSection/Collaborate/images/collab2-dark.svg";
import Collab3 from "./FeaturesSection/Collaborate/images/collab3.svg";
import Collab3_dark from "./FeaturesSection/Collaborate/images/collab3-dark.svg";
import Collab4 from "./FeaturesSection/Collaborate/images/collab4.svg";
import Collab4_dark from "./FeaturesSection/Collaborate/images/collab4-dark.svg";
import Avatar1 from "./FeaturesSection/Collaborate/images/avatar1.png";
import Avatar2 from "./FeaturesSection/Collaborate/images/avatar2.png";
import Avatar3 from "./FeaturesSection/Collaborate/images/avatar3.png";

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
                  description: "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.",
                  imgContent: (
                    <img id="design-image1" src={theme === "dark" ? roleBind1_dark : roleBind1} style={{ transform: "translateX(-2rem)" }} alt="design-image1" />
                  )
                },
                {
                  title: "Manage your applications visually and intuitively",
                  description: "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
                  imgContent: (
                    <img id="design-image2" src={theme === "dark" ? roleBind2_dark : roleBind2} alt="design-image2" />
                  )
                },
                {
                  title: "Build the bridge",
                  description: "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
                  imgContent: (
                    <img id="design-image3" src={theme === "dark" ? roleBind3_dark : roleBind3} style={{ transform: "translateX(-2rem)" }} alt="design-image3" />
                  )
                },
                {
                  title: "Stop finger-pointing",
                  description: "Make infrastructure and application management less about finger-pointing and more about collaborating.",
                  imgContent: (
                    <img id="design-image4" src={theme === "dark" ? roleBind4_dark : roleBind4} style={{ transform: "translateX(-2rem)" }} alt="design-image3" />
                  )
                },
              ]} theme={theme} />

          <InlineQuotes
            person="Kaur Kallas"
            title="Software Architect at Entigo"
            quote="The fact that MeshMap automatically renders our Kubernetes configuration is a game-changer for our team." />
          <VisualizerFeatures
            features={
              [
                {
                  title: "All your Kubernetes clusters under a common management",
                  description: "Deploy designs, apply patterns, manage and operate your deployments and services in real-time.",
                  imgContent: (
                    <img id="visualize-image1" src={theme === "dark" ? Visualize1_dark : Visualize1} alt="visualize-image1" />
                  )
                },
                {
                  title: "Continuous visibility across all of your clusters and workloads.",
                  description: "Import your existing Kubernetes, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.",
                  imgContent: (
                    <img id="visualize-image2" src={theme === "dark" ? Visualize2_dark : Visualize2} alt="visualize-image2" />
                  )
                },
              ]} theme={theme} />
          <InlineQuotes
            quote="Guys, I love MeshMap! This tool is crazy!"
            person="Ala Eddine BENHASSIR"
            title="Networks & Systems Engineer at AYRADE" />

          <CollaboratorFeatures
            features={
              [
                {
                  title: "Bring those ideas to life",
                  description: "Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place.",
                  imgContent: (
                    <>
                      <img id="avatar-1" src={Avatar1} alt="" />
                      <img id="collaborate-image1" src={theme === "dark" ? Collab1_dark : Collab1} alt="collaborate-image1" />
                    </>
                  )
                  // Invite any Meshery Cloud user, or all Meshery users, to work with you on a public design, including making changes and releasing new versions."
                },
                // {
                //   title: "Nothing great is made alone.",
                //   description: "MeshMap connects everyone in the DevOps process so teams can deliver better products, faster."
                // },
                {
                  title: "Create. Iterate. Repeat.",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.",
                  imgContent: (
                    <>
                      <img id="avatar-2" src={Avatar2} alt="avatar-2" />
                      <img id="collaborate-image2" src={theme === "dark" ? Collab2_dark : Collab2} alt="collaborate-image2" />
                    </>
                  )
                },
                {
                  title: "Where your teams share the same language",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.",
                  imgContent: (
                    <>
                      <img id="avatar-3" src={Avatar3} alt="avatar-3" />
                      <img id="collaborate-image3" src={theme === "dark" ? Collab3_dark : Collab3} alt="collaborate-image3" />
                    </>
                  )
                },
                // {
                //   title: "Where your teams share the same language",
                //   description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely."
                // },
                {
                  title: "Inclusive collaboration from start to finish",
                  description: "MeshMap is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together.",
                  imgContent: (
                    <>
                      <img id="avatar-3" src={Avatar3} alt="avatar-3" />
                      <img id="collaborate-image4" src={theme === "dark" ? Collab4_dark : Collab4} alt="collaborate-image4" />
                    </>
                  )
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
