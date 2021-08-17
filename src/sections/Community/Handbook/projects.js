import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import TOC from "../../../components/handbook-navigation/index";


const Maintainer= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Projects</h1>
      </div>  
      <TOC />
      <Container>
        <p>Here are the Layer5 Projects:  </p>

        <h3><span className="number">1</span>Layer5</h3>
        <p>It is the official website for the Layer5 community showing an overview of the Layer5 Projects, the different service mesh landscapes, resources to learn about service Mesh and communities.</p>
        <h3><span className="number">2</span>Meshery</h3>
        <p>It is a multi-service mesh management plane offering lifecycle management of more types of service meshes than any other tool available today. Meshery facilitates adopting, configuring, operating, and managing the performance of different service meshes and incorporates the collection and display of metrics from applications running on top of any service mesh. </p>
        <h3><span className="number">3</span>Service Mesh Performance</h3>
        <p>The Service Mesh Performance (SMP) is a vendor-neutral specification for capturing details of environment and infrastructure details, service mesh and it’s configuration, service/application details, and bundling of statistical analysis of the result.</p>
        <h3><span className="number">4</span> GetNightHawk</h3>
        <p>This Is a Layer 7 (HTTP/HTTPS/HTTP2) performance characterization tool.      Nighthawk is Envoy’s load generator and is written in C++. Meshery integrates Nighthawk as one of (currently) three choices of load generator for characterizing and managing the performance of service meshes and their workloads.</p>
      </Container>       
    </HandbookWrapper>
  );
};
  
export default Maintainer;