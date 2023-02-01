/* eslint-disable */
import React from "react";
import MeshmapWrapper from "./meshmap.style";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { Container, Row, Col } from "../../reusecore/Layout";
import Features from "../../components/Features-carousel";
import MeshmapModes from "./meshmap-modes";
import Catalog from "./meshmap-catalog";
import Platform from "./meshmap-platform";
import MeshmapBanner from "./meshmap_banner";
import designerImage from "../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../assets/images/meshmap/MeshmapVisualizer.png";
import MeshMapDrafts from "./images/meshmap-draft-logos.png";
import MesheryAction from "./meshery-action";
import CommonForm from "../../components/CommonForm";
import MeshmapFeatures from "./meshmap_features";
import Reviews from "../Pricing/review-slider";



const Meshmap = () => {

  return (
    <MeshmapWrapper>
      <div >
        <ThemeProvider theme={theme}>
          <MeshmapBanner />
        </ThemeProvider>
        <Container>
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
          <MeshmapFeatures
            title="MeshMap Features"
            // description="As the cloud native manager, Meshery offers support for more adapters than any other project or product in the world. Meshery uses adapters for managing the various service meshes."
            features={
              [
                {
                  title: "Design",
                  description: <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Using GitOps? Integrate advanced performance analysis into your pipeline.</p>
                },
                {
                  title: "",
                  description:
                    <p>Visually modify your infrastructure requirements with an intuitive interface.</p>,
                },
                {
                  title: "",
                  description:
                    <div><p>Substitute your YAML files with powerful configurations.</p>
                    </div>,
                },
                {
                  title: "Visualize",
                  description:
                    <div>
                      <p>Deploy designs, apply patterns, manage and operate your deployments in real-time. Bring all your Kubernetes clusters under a common point of management. </p>
                    </div>,
                },
                {
                  title: "",
                  description: <div>
                    <p>Interactively connect to terminal sessions or initiate and search log streams from your containers.</p>
                  </div>
                },
                {
                  title: "",
                  description:
                    <p>Manage your infrastructure in the best way possible.</p>,
                },
                {
                  title: "Collaborate",
                  description:
                    <p>Collaborate with other engineers to achieve the best infrastructure desings.</p>,
                },

                {
                  title: "",
                  description:
                    <p>Save and resume your sessions without losing any ideas.</p>,
                },
                {
                  title: "",
                  description:
                    <p>Friends don't let friends GitOps alone.</p>,
                },

              ]} />

          {/* <Catalog /> */}
          {/* <MesheryAction /> */}

          <div className="banner-background">

            <Container style={{ marginBottom: "4rem" }}>
              <Row className="description">
                <Col lg={7} md={6} sm={12} className="desc-text">
                  <h1 className="heading-1">Signup for</h1>
                  <h1 className="heading-2">MeshMap Beta</h1>
                  <p className="desc-p">
                    Join the waiting list for participation in the beta program. Your request for access will be processed as quickly as possible. Due to the large influx of program participation requests, it may take some time before system access is granted. So that you can familiarize while you wait, the Layer5 team will send you additional information about beta program, MeshMap modes, and service mesh patterns.
                  </p>
                  {/* <div className="draft-logo">
                    <p>Help choose the best logo for MeshMap:</p>
                    <a target="_blank" href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA" rel="noreferrer">
                      <img src={MeshMapDrafts} alt="MeshMap Draft" /></a><br />
                    <p><a target="_blank" href="https://twitter.com/layer5/status/1536832439833743363?s=20&t=oEDasGEBl8cvsA64P7NNTA" rel="noreferrer">Vote for your favorite design</a></p>
                  </div> */}
                </Col>

                <Col lg={5} md={6} sm={12}>
                  <CommonForm
                    title="Join the Beta Program"
                    form="meshmap"
                    account_desc="Selected beta program participants will receive a free Meshery Cloud account and have full access MeshMap enabled for each of the following user accounts that you provide. Please provide at least one account."
                    submit_title="Thank you for your interest in Layer5 MeshMap!"
                    submit_body="You are now signed up for the Layer5 MeshMap beta program and your position on the waiting list is confirmed. Please patiently await your acceptance and start of the beta program. We are working through a growing waitlist"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          {/* <Platform /> */}
        </Container >
      </div >
      <Reviews />
    </MeshmapWrapper>
  );
};

export default Meshmap;
