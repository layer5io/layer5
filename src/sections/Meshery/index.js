import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";

import FeaturesTable from "./Features-Col";

import mesheryDemo from "../../assets/video/meshery/meshery-full-perf-720p.mp4";
import DockerExtensionCTA from "../Docker-Meshery/docker-extension-CTA";

import MesheryWrapper from "./meshery.style";
import FeaturesSection from "./Features-section";
import Features from "./Meshery-features";
import InlineQuotes from "../../components/Inline-quotes";
import Maximiliano from "../../collections/members/maximiliano-churichi/Maximiliano-Churichi.jpg";
import Nic from "../../collections/members/nicholas-jackson/nic-jackson.jpg";

const MesheryPage = () => {
  return (
    <MesheryWrapper>
      <Container>
        <div className="info">
          <Row className="description">
            <Col className="desc-text" lg={6} md={6} sm={10} xs={8}>
              <h1 className="heading-1"> Wrangle your infrastructure</h1>
              <h1 className="heading-2"> <span className="heading-2"> collaboratively</span></h1>
              <p className="desc-p">
                {/* Meshery is the cloud native manager. <br /> */}
                Confidently design, deploy, and operate your infrastructure and workloads with Meshery.
              </p>
              <Button primary className="banner-btn" title="How Meshery Works" url="./operating-service-meshes">
                <GiClockwork size={21} className="button-icon" />
              </Button>
              <Button secondary className="banner-btn" title="Run Meshery" url="./getting-started">
                <FiDownloadCloud size={21} className="button-icon" />
              </Button>
            </Col>
            <Col lg={6} md={6} className="meshery-hero-img">
              <video autoPlay muted loop controls className="meshery-video">
                <source src={mesheryDemo} type="video/mp4" />
              </video>
              {/* <img className="meshery-sup-img" src={mesheryFullStack} alt="Meshery the multi-mesh manager" /> */}
            </Col>
          </Row>
        </div>
        <FeaturesTable />
      </Container>
      <FeaturesSection />
      <Container>
        <InlineQuotes
          quote="Meshery is the perfect tool for ensuring that your service mesh applications are optimally configured and performing well; it also gives you a fantastic visual insight into what can be a large amount of textual configuration"
          person="Nic Jackson"
          title="Principal Developer Advocate at HashiCorp"
          image={Nic} />
        <div className="callout">
          <h1> Manage your clusters with features you won't find anywhere else.</h1>
        </div>
      </Container>
      <Features />
      <Container>
        <DockerExtensionCTA />
        <InlineQuotes
          quote="The Meshery Extension transforms Docker Desktop into a powerful load generation utility, conveniently enabling me to deploy and configure any service mesh with a click of the button and invoke and control load-based performance tests from my desktop."
          person="Maximiliano Churichi"
          title="Software Engineer at HPE"
          image={Maximiliano} />
      </Container>
    </MesheryWrapper>

  );
};

export default MesheryPage;
