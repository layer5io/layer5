import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";


const Repository= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Repository Overview</h1>
      </div> 
      <TOC />  
      <div className="page-section">
        <Container>
          <div className= "content">
            <h2>Purpose</h2>
            <p>This overview serves as resources to newcomers seeking a perspective of the collective community efforts (from the limited vantage point of a code-centric perspective). </p>

            <h2>Frontend Projects</h2>
            <p>
              <li><a href="https://layer5.io/">Layer.io</a></li> 
              <li><a href="https://meshery.io">Meshery.io</a></li>
              <li><a href="http://docs.meshery.io">Meshery Documentation</a></li>
              <li><a href="https://smp-spec.io">Service Mesh Performance</a></li>
              <li><a href="https://github.com/layer5io/meshery/tree/master/ui">Meshery UI</a></li>
              <li><a href="https://docs.google.com/document/d/1lHfMo4iIx2WXFZIspfHyxTsPR1T63_2IV5NUkgxoo0w/edit#"> GetNighthawk</a></li>
              <li><a href="https://drive.google.com/a/layer5.io/open?id=1AMi5UTUwLRFeQRQj7YuRQgMG-4IXWie24z4R88Eoazs">MeshSync UI (MeshMap)</a></li>
            </p>

            <h2>Backend Projects</h2>
            <h3>Service Mesh Management Repos</h3>
            <p>
              <li><a href="https://github.com/layer5io/meshery">Meshery</a></li>
              <li><a href="https://github.com/layer5io/smi-conformance">Learn-Layer5</a></li>
              <li><a href="https://github.com/layer5io/meshery-operator">Meshery Operator</a></li>
              <li><a href="https://github.com/layer5io/meshsync">MeshSync</a></li> 
            </p>
            <h3>Adapter Dedicated Repos</h3>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <p>
                  <li><a href="https://github.com/layer5io/meshery-istio">Meshery-istio</a></li>
                  <li><a href="https://github.com/layer5io/meshery-linkerd">Meshery-linkerd</a></li>
                  <li><a href="https://github.com/layer5io/layer5-istio-adapter">Layer5-istio-adapter</a></li>
                  <li><a href="https://github.com/layer5io/meshery-nsm">Meshery-nsm</a></li> 
                  <li><a href="https://github.com/layer5io/meshery-octarine">Meshery-octarine</a></li>
                  <li><a href="https://github.com/layer5io/meshery-traefik-mesh">Meshery-traefik-mesh</a></li>
                  <li><a href="https://github.com/layer5io/meshery-kuma">Meshery-kuma</a></li>
                </p>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <p>
                  <li><a href="https://github.com/layer5io/meshery-consul">Meshery-consul</a></li>
                  <li><a href="https://github.com/layer5io/meshery-cpx">Meshery-cpx</a></li> 
                  <li><a href="https://github.com/layer5io/meshery-adapter-template">Meshery-adapter-template</a></li> 
                  <li><a href="https://github.com/layer5io/meshery-tanzu-sm">Meshery-tanzu-sm</a></li> 
                  <li><a href="https://github.com/layer5io/meshery-nginx-sm">Meshery-Nginx-sm</a></li>  
                  <li><a href="https://github.com/layer5io/meshkit">Meshkit</a></li> 
                  <li><a href="https://github.com/layer5io/meshery-adapter-library">Meshery-adapter-library</a></li> 
                </p>
              </Col>
            </Row>
        
            <h3>Installation Dedicated Repos</h3>
        
            <p>
              <li><a href="https://github.com/layer5io/scoop-bucket">Scoop-bucket</a></li>
              <li><a href="https://github.com/layer5io/homebrew-tap">Homebrew-tap</a></li> 
            </p>
            <h3>WebAssembly Repos </h3>
            <p>
              <li><a href="https://github.com/layer5io/image-hub">Image-hub</a></li>
              <li><a href="https://github.com/layer5io/wasm-filters">Wasm-filters</a></li>  
            </p>
            <h3>Service Mesh Performance Repos </h3>
            <p>
              <li><a href="https://github.com/layer5io/service-mesh-performance-specification">Service Mesh Performance</a></li>
              <li><a href="https://github.com/giltene/wrk2">Wrk2</a></li> 
              <li><a href="https://github.com/layer5io/gowrk2">Gowrk2</a></li> 
              <li><a href="https://github.com/layer5io/nighthawk-go">Getnighthawk</a></li> 
            </p>
          </div>
        </Container>     
      </div>
    </HandbookWrapper>
  );
};
  
export default Repository;