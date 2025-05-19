import React from "react";
import KanvasWrapper from "./kanvas.style";
import { Container } from "../../reusecore/Layout";
import Features from "../../components/Features-carousel";
import KanvasModes from "./kanvas-modes";
import Catalog from "./kanvas-catalog";
import Platform from "./kanvas-platform";
import KanvasBanner from "./kanvas_banner";
import designerImage from "../../assets/images/kanvas/KanvasDesigner.webp";
import visualizerImage from "../../assets/images/kanvas/KanvasVisualizer.webp";
import DesignerFeatures from "./FeaturesSection/Design/DesignerFeatures";
import CollaboratorFeatures from "./FeaturesSection/Collaborate/CollaboratorFeatures";
import VisualizerFeatures from "./FeaturesSection/Visualize/VisualizerFeatures";
import KanvasBtn from "./kanvas-buttons.js";
import Reviews from "../Pricing/review-slider";
import InlineQuotes from "../../components/Inline-quotes";
import { ReactComponent as RoleBind1 } from "./FeaturesSection/Design/images/role-binding-1-colorMode.svg";
import { ReactComponent as RoleBind2 } from "./FeaturesSection/Design/images/role-binding-2-colorMode.svg";
import { ReactComponent as RoleBind3 } from "./FeaturesSection/Design/images/role-binding-3-colorMode.svg";
import { ReactComponent as RoleBind4 } from "./FeaturesSection/Design/images/role-binding-4-colorMode.svg";

import { ReactComponent as Visualize1 } from "./FeaturesSection/Visualize/images/visualize-1-colorMode.svg";
import { ReactComponent as Visualize2 } from "./FeaturesSection/Visualize/images/visualize-2-colorMode.svg";

import { ReactComponent as Collab1 } from "./FeaturesSection/Collaborate/images/collab1-colorMode.svg";
import { ReactComponent as Collab2 } from "./FeaturesSection/Collaborate/images/collab2-colorMode.svg";
import { ReactComponent as Collab3 } from "./FeaturesSection/Collaborate/images/collab3-colorMode.svg";
import { ReactComponent as Collab4 } from "./FeaturesSection/Collaborate/images/collab4-colorMode.svg";

import Avatar1 from "./FeaturesSection/Collaborate/images/avatar1.webp";
import Avatar2 from "./FeaturesSection/Collaborate/images/avatar2.webp";
import Avatar3 from "./FeaturesSection/Collaborate/images/avatar3.webp";
import Kaur from "../../sections/Pricing/reviews/kaur-kallas.webp";
import Ala from "../../sections/Pricing/reviews/ala-eddine-benhassir.jpeg";
import Phillip from "../../sections/Pricing/reviews/phillip-ulberg.jpeg";
import Alex from "../../sections/Pricing/reviews/alex-hokanson.jpeg";
import TeaserModal from "../../components/TeaserModal";
import GuyM from "./images/guym.jpg";
import Abdechakour from "../../sections/Pricing/reviews/abdechakour-h.jpeg";


const Kanvas = (props) => {

  return (
    <KanvasWrapper>
      <div >
        <Container>
          <KanvasBanner />
          <div className="mobile-modes">
            <Features
              heading="Kanvas Modes"
              features={[
                {
                  title: "Designer Mode",
                  description:
                    "Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components and Cloud services. Collaborate wtih teammates using this self-service engineering platform. Using GitOps? Integrate advanced performance analysis into your pipeline.",
                  content: (
                    <img
                      src={designerImage}
                      alt="Designer Mode"
                      className="designer-img modes-image"
                      width="100%"
                      height="auto"
                      style={{ aspectRatio: "16/9" }}
                    />
                  ),
                },
                {
                  title: "Operator Mode",
                  description:
                    "Operator offers an interactive topology of your Kubernetes clusters with live terminal sessions, log streaming and performance testing of your applications. Designs created in Designer mode can be deployed and viewed as running in your environment using Operator.",
                  content: (
                    <img
                      src={visualizerImage}
                      alt="Operator Mode"
                      className="modes-image"
                      width="100%"
                      height="auto"
                      style={{ aspectRatio: "16/9" }}
                    />
                  ),
                },
              ]}
            />
          </div>
          <KanvasModes />
          <InlineQuotes
            person="Guy Menahem"
            title="Software Engineer at AWS"
            quote="I love visuals for creating IaC. I think it can be amazingly impactful for self-serve platforms for developers."
            image={GuyM}/>
          <DesignerFeatures
            features={
              [
                {
                  title: "Design your deployments the way you want",
                  description: "Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components and Cloud services. Say goodbye to YAML configurations.",
                  imgContent: (
                    <RoleBind1 id="design-image1" style={{ transform: "translateX(-2rem)" }} alt="design-image1" />
                  )
                },
                {
                  title: "Manage your applications visually and intuitively",
                  description: "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
                  imgContent: (
                    <RoleBind2 id="design-image2" alt="design-image2" />
                  )
                },
                {
                  title: "Build the bridge",
                  description: "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
                  imgContent: (
                    <RoleBind3 id="design-image3" style={{ transform: "translateX(-2rem)" }} alt="design-image3" />
                  )
                },
                {
                  title: "Stop finger-pointing",
                  description: "Make infrastructure and application management less about finger-pointing and more about collaborating.",
                  imgContent: (
                    <RoleBind4 id="design-image4" style={{ transform: "translateX(-2rem)" }} alt="design-image4" />
                  )
                },
              ]}/>

          <InlineQuotes
            person="Kaur Kallas"
            title="Software Architect at Entigo"
            quote="The fact that Kanvas automatically renders our Kubernetes configuration is a game-changer for our team."
            image={Kaur}/>
          <VisualizerFeatures
            features={
              [
                {
                  title: "All your Kubernetes and Cloud infrastructure under a common management",
                  description: "Deploy designs, apply patterns, manage and operate your deployments and services in real-time.",
                  imgContent: (
                    <Visualize1 id="visualize-image1" alt="visualize-image1" />
                  )
                },
                {
                  title: "Continuous visibility across all of your clusters and workloads.",
                  description: "Import your existing Kubernetes, Kustomize, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.",
                  imgContent: (
                    <Visualize2 id="visualize-image2" alt="visualize-image2" />
                  )
                },
              ]} />
          <InlineQuotes
            quote="Wow, just tried Kanvas and it's exactly what I needed! Dragging that Helm chart was so smooth, and the smart features really caught my attention. Definitely sharing this with my dev team before everyone else discovers it!"
            person="Abdechakour Hrouchan"
            title="Software Engineer at Atlas Cloud Services"
            image={Abdechakour} />

          <CollaboratorFeatures
            features={
              [
                {
                  title: "Bring those ideas to life",
                  description: "Designer and Operator live side-by-side, so all design work, from ideation to operation, can be found in one place.",
                  imgContent: (
                    <>
                      <img
                        id="avatar-1"
                        src={Avatar1}
                        alt=""
                        width="48"
                        height="48"
                        style={{ objectFit: "cover" }}
                      />
                      <Collab1 id="collaborate-image1" alt="collaborate-image1" />
                    </>
                  )
                  // Invite any Layer5 Cloud user, or all Meshery users, to work with you on a public design, including making changes and releasing new versions."
                },
                // {
                //   title: "Nothing great is made alone.",
                //   description: "Kanvas connects everyone in the DevOps process so teams can deliver better products, faster."
                // },
                {
                  title: "Create. Iterate. Repeat.",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you're working in the office or remotely.",
                  imgContent: (
                    <>
                      <img
                        id="avatar-2"
                        src={Avatar2}
                        alt="avatar-2"
                        width="48"
                        height="48"
                        style={{ objectFit: "cover" }}
                      />
                      <Collab2 id="collaborate-image2" alt="collaborate-image2" />
                    </>
                  )
                },
                {
                  title: "Where your teams share the same language",
                  description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you're working in the office or remotely.",
                  imgContent: (
                    <>
                      <img
                        id="avatar-3"
                        src={Avatar3}
                        alt="avatar-3"
                        width="48"
                        height="48"
                        style={{ objectFit: "cover" }}
                      />
                      <Collab3 id="collaborate-image3" alt="collaborate-image3" />
                    </>
                  )
                },
                // {
                //   title: "Where your teams share the same language",
                //   description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you're working in the office or remotely."
                // },
                {
                  title: "Inclusive collaboration from start to finish",
                  description: "Kanvas is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together.",
                  imgContent: (
                    <>
                      <img
                        id="avatar-3"
                        src={Avatar3}
                        alt="avatar-3"
                        width="48"
                        height="48"
                        style={{ objectFit: "cover" }}
                      />
                      <Collab4 id="collaborate-image4" alt="collaborate-image4" />
                    </>
                  )
                }
              ]} />
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
          <InlineQuotes
            quote="Kanvas is unreal. Support for air-gapped deployments is all the better, too."
            person="Phillip Ulberg"
            title="Solutions Architect at Raymond James Financial, Inc."
            image={Phillip} />
          <Catalog />
          <InlineQuotes
            quote="Do we like Kanvas? ABSOLUTELY!"
            person="Alex"
            title="Infrastructure Engineering at Docker, Inc."
            image={Alex} />
          {/* <MesheryAction /> */}
          <KanvasBtn style={{ marginBottom: "2rem" }} />
          <Platform />
          <InlineQuotes
            quote="Guys, I love Kanvas! This tool is crazy!"
            person="Ala Eddine BENHASSIR"
            title="Networks & Systems Engineer at AYRADE"
            image={Ala}/>
        </Container>
      </div>
      <>
        <Reviews />
        <TeaserModal title="Kanvas Teaser" open={props?.teaser} />
      </>
    </KanvasWrapper>
  );
};

export default Kanvas;
