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
import KanvasFeatures from "./kanvas-feature.js";
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
import { Helmet } from "react-helmet";

const Kanvas = (props) => {
  return (
    <KanvasWrapper>
      {/* Hidden SEO elements — not visible but crawlable */}
      <Helmet>
        <title>Kanvas | Visual Kubernetes Designer by Layer5</title>
        <meta
          name="description"
          content="Kanvas by Layer5 lets teams visually design, deploy, and manage Kubernetes and cloud native applications using an intuitive drag-and-drop interface."
        />
        <meta
          name="keywords"
          content="Kanvas, Layer5, Kubernetes visualizer, Meshery, Cloud Native Design, DevOps tools, CNCF, Kubernetes management"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://layer5.io/cloud-native-management/kanvas" />
        <meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate" />
      </Helmet>

      <div style={{ display: "none" }}>
        <h1>Kanvas Cloud Native Visual Designer</h1>
        <p>
          Kanvas enables teams to visually design, manage, and deploy Kubernetes and cloud native
          applications using an interactive drag-and-drop interface integrated with Layer5 Meshery.
        </p>
        <img src={designerImage} alt="Kanvas Designer Mode showing Kubernetes layout" />
        <img src={visualizerImage} alt="Kanvas Operator Mode showing real-time visualization" />
      </div>

      <div>
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
                      alt="Kanvas Designer Mode"
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
                      alt="Kanvas Operator Mode visualization"
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
            image={GuyM}
          />
          <DesignerFeatures
            features={[
              {
                title: "Design your deployments the way you want",
                description:
                  "Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components and Cloud services. Say goodbye to YAML configurations.",
                imgContent: (
                  <RoleBind1 id="design-image1" alt="Kubernetes deployment visual design" />
                ),
              },
              {
                title: "Manage your applications visually and intuitively",
                description:
                  "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
                imgContent: <RoleBind2 id="design-image2" alt="application management visual view" />,
              },
              {
                title: "Build the bridge",
                description:
                  "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
                imgContent: <RoleBind3 id="design-image3" alt="team collaboration visual" />,
              },
              {
                title: "Stop finger-pointing",
                description:
                  "Make infrastructure and application management less about finger-pointing and more about collaborating.",
                imgContent: <RoleBind4 id="design-image4" alt="collaboration interface view" />,
              },
            ]}
          />
          <InlineQuotes
            person="Kaur Kallas"
            title="Software Architect at Entigo"
            quote="The fact that Kanvas automatically renders our Kubernetes configuration is a game-changer for our team."
            image={Kaur}
          />
          <VisualizerFeatures
            features={[
              {
                title: "All your Kubernetes and Cloud infrastructure under a common management",
                description:
                  "Deploy designs, apply patterns, manage and operate your deployments and services in real-time.",
                imgContent: (
                  <Visualize1 id="visualize-image1" alt="visualize Kubernetes infrastructure" />
                ),
              },
              {
                title: "Continuous visibility across all of your clusters and workloads.",
                description:
                  "Import your existing Kubernetes, Kustomize, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.",
                imgContent: <Visualize2 id="visualize-image2" alt="Kubernetes clusters visibility" />,
              },
            ]}
          />
          <InlineQuotes
            quote="Wow, just tried Kanvas and it's exactly what I needed! Dragging that Helm chart was so smooth, and the smart features really caught my attention. Definitely sharing this with my dev team before everyone else discovers it!"
            person="Abdechakour Hrouchan"
            title="Software Engineer at Atlas Cloud Services"
            image={Abdechakour}
          />
          <CollaboratorFeatures
            features={[
              {
                title: "Bring those ideas to life",
                description:
                  "Designer and Operator live side-by-side, so all design work, from ideation to operation, can be found in one place.",
                imgContent: (
                  <>
                    <img id="avatar-1" src={Avatar1} alt="Collaborator Avatar 1" width="48" height="48" style={{ objectFit: "cover" }} />
                    <Collab1 id="collaborate-image1" alt="collaboration design diagram" />
                  </>
                ),
              },
              {
                title: "Create. Iterate. Repeat.",
                description:
                  "Build an iterative design flow with live collaboration that keeps you in the loop whether you're working in the office or remotely.",
                imgContent: (
                  <>
                    <img id="avatar-2" src={Avatar2} alt="Collaborator Avatar 2" width="48" height="48" style={{ objectFit: "cover" }} />
                    <Collab2 id="collaborate-image2" alt="collaboration iteration view" />
                  </>
                ),
              },
              {
                title: "Where your teams share the same language",
                description:
                  "Build an iterative design flow with live collaboration that keeps you in the loop whether you're working in the office or remotely.",
                imgContent: (
                  <>
                    <img id="avatar-3" src={Avatar3} alt="Collaborator Avatar 3" width="48" height="48" style={{ objectFit: "cover" }} />
                    <Collab3 id="collaborate-image3" alt="collaboration shared language diagram" />
                  </>
                ),
              },
              {
                title: "Inclusive collaboration from start to finish",
                description:
                  "Kanvas is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together.",
                imgContent: (
                  <>
                    <img id="avatar-3" src={Avatar3} alt="Collaborator Avatar 3" width="48" height="48" style={{ objectFit: "cover" }} />
                    <Collab4 id="collaborate-image4" alt="team collaboration visualization" />
                  </>
                ),
              },
            ]}
          />
          <InlineQuotes
            quote="Kanvas is unreal. Support for air-gapped deployments is all the better, too."
            person="Phillip Ulberg"
            title="Solutions Architect at Raymond James Financial, Inc."
            image={Phillip}
          />
          <KanvasFeatures style={{ marginBottom: "2rem" }} />
          <Catalog />
          <InlineQuotes
            quote="Do we like Kanvas? ABSOLUTELY!"
            person="Alex"
            title="Infrastructure Engineering at Docker, Inc."
            image={Alex}
          />
          <KanvasBtn style={{ marginBottom: "2rem" }} />
          <Platform />
          <InlineQuotes
            quote="Guys, I love Kanvas! This tool is crazy!"
            person="Ala Eddine BENHASSIR"
            title="Networks & Systems Engineer at AYRADE"
            image={Ala}
          />
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
