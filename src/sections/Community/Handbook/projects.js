import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";


const Maintainer= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Projects</h1>
      </div>  
      <TOC />
      <div className="page-section">
        <Container>
          <div className= "content">
            <p>Here are the Layer5 Projects:  </p>
        
            <h3><a href="https://layer5.io/">1. Layer5</a></h3>
            <p>Its service mesh community represents the largest collection of service Mesh projects.Emerging projects like GetNighthawk , community with  MeshMates, catch-all org, “home base”.<br/> Github link: <a href="https://github.com/layer5io">https://github.com/layer5io</a>
              <ul>
                <li><h4><a href="https://layer5.io/">Layer5 :</a></h4> </li>
                <p>Layer5 is the official website of the Layer5 community showing an overview of the Layer5 projects. The different service mesh landscapes, resources to learn about service mesh, and communities.<br/> Github link: <a href="https://github.com/layer5io/layer5">https://github.com/layer5io/layer5</a> </p>
                <li><h4><a href="https://layer5.io/projects/image-hub">Image-Hub :</a></h4> </li>
                <p>Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters are written in Rust. These modules can be used to implement multi-tenancy or to implement per-user rate-limiting in your application's endpoints. This application was first demonstrated at DockerCon 2020.<br/> Github link: <a href="https://github.com/layer5io/image-hub">https://github.com/layer5io/image-hub</a> </p>
                <li><h4><a href="https://layer5.io/projects/getnighthawk">GetNightHawk :</a></h4> </li>
                <p>This Is a Layer 7 (HTTP/HTTPS/HTTP2) performance characterization tool. Nighthawk is Envoy’s load generator and is written in C++. Meshery integrates Nighthawk as one of (currently) three choices of load generators for characterizing and managing the performance of service meshes and their workloads.<br/> Github link: <a href="https://github.com/layer5io/getnighthawk">https://github.com/layer5io/getnighthawk</a> </p>
              </ul>
            </p>
            <h3><a href="https://layer5.io/service-mesh-management/meshery">2. Meshery</a></h3>
            <p>Meshery and its components Meshery Operator   and MeshSync  
              <ul>
                <li><h4>Meshery</h4> </li>
                <p>It is a multi-service mesh management plane offering lifecycle management of more types of service meshes than any other tool available today. Meshery facilitates adopting, configuring, operating, and managing the performance of different service meshes and incorporates the collection and display of metrics from applications running on top of any service mesh. <br/> Github link: <a href="https://github.com/meshery">https://github.com/meshery</a> </p>
                <li><h4>Meshery.io :</h4> </li>
                <p>WebSite for Meshery, the multi-mesh manager.<br/> Github link: <a href="https://github.com/meshery/meshery.io">https://github.com/meshery/meshery.io</a> </p>
                <li><h4>Meshery-operator :</h4> </li>
                <p>Meshery Operator is the multi-service mesh operator and implementation of MeshSync.<br/> Github link: <a href="https://github.com/meshery/meshery-operator">https://github.com/meshery/meshery-operator</a> </p>
              </ul>
            </p>
            <h3><a href="https://layer5.io/projects/service-mesh-performance">3. Service Mesh Performance</a></h3>
            <p>Service Mesh Performance specification.</p>
            <ul>
              <li><h4>Service Mesh Performance :</h4></li>
              <p>The Service Mesh Performance (SMP) is a vendor-neutral specification for capturing details of environment and infrastructure details, service mesh and it’s configuration, service/application details, and bundling of statistical analysis of the result.<br/>Github link: <a href="https://github.com/service-mesh-performance/service-mesh-performance">https://github.com/service-mesh-performance/service-mesh-performance</a></p>
            </ul>
            <h3><a href="https://github.com/service-mesh-patterns/service-mesh-patterns">4. Service Mesh Patterns</a></h3>
            <ul>
              <li><h4>Service Mesh Performance :</h4></li>
              <p>A collection of curated patterns of service mesh use cases compatible with Meshery.<br/>Github link: <a href="https://github.com/service-mesh-patterns/service-mesh-patterns">https://github.com/service-mesh-patterns/service-mesh-patterns</a></p>
            </ul>
          </div>
        </Container> 
      </div>    
    </HandbookWrapper>
  );
};
  
export default Maintainer;