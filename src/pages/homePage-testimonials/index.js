import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../reusecore/Layout";
import Customers from "../../reusecore/Blockquote/Blockquote-image";

const QuotesWrapper = styled.div`

padding: 3% 5% 0%;

h1 {
    text-align: center;
    margin-bottom: 5%;
    span {
        font-weight: 200;
    }
}

`;

const HomePageQuotes = () => {
  return (
    <QuotesWrapper>
      <h1>What our users are <span>saying</span></h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="The fact that MeshMap automatically renders our Kubernetes configuration is a game-changer for our team."
            person="Kaur Kallas"
            title="Software Architect at Entigo"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="Guys, I love MeshMap! This tool is crazy!"
            person="Ala Eddine BENHASSIR"
            title="Networks & Systems Engineer at AYRADE"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="The Meshery Docker Extension offers an easy button to go from Docker Compose to Kubernetes to any service mesh."
            person="Nic Jackson"
            title="Principal Developer Advocate at HashiCorp"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="With a goal to bring workload identity and attestation to all service meshes, HPE Security Engineering uses the Meshery Docker Extension to deploy their service mesh of choice and test the performance of our SPIFFE and SPIRE-based identity solution."
            person="Maximiliano Churichi"
            title="Software Engineer at HPE"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="It was an intuitive experience to visually place and configure various components saving the time of going through 10 different YAML files."
            person="Deepak Dinesh"
            title="MeshMap User"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Customers
            type="4"
            quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
            person="Otto Van Der Schaaf"
            title="Principal Engineer at Red Hat"
          />
        </Col>
      </Row>
    </QuotesWrapper>
  );
};

export default HomePageQuotes;