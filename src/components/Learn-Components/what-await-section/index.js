import React from "react";
import WhatAwaitsWrapper from "./what-await.styles";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";

const WhatAwaitsSection = () => {
  return (
    <WhatAwaitsWrapper>
      <div className="what_awaits-section-wrapper"></div>
      <Container>
        <Row className="what_awaits">
          <Col sm={12} lg={6}>
   
            <h2>What Awaits you</h2>
            <p>
              Learning service mesh the right way. From the best learning path by the experts at 
              Layer5 and learn how to mesh.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            
            <Terminal
              lines={[
                { code: "$ mesheryctl", color: "white" },
                { code: "» Meshery is the service mesh management plane, providing lifecycle,", color: "navy" },
                { code :"  performance, and configuration management of service meshes and their workloads.", color: "navy" },
                {
                  code: "Usage:",
                  color: "green",
                },
                {
                  code: "  mesheryctl [command]",
                  color: "green",
                },
                { code: "\n" },
                { code: "Available Commands:", color: "navy" },
                {
                  code: "  exp         Experimental commands for mesheryctl",
                  color: "green",
                },
                {
                  code: "  help        Help about any command",
                  color: "green",
                },
                {
                  code: "  mesh        Service Mesh Lifecycle Management",
                  color: "green",
                },
                {
                  code: "  pattern     Service Mesh Patterns Management",
                  color: "green",
                },
                {
                  code: "  perf        Performance Management",
                  color: "green",
                },
                {
                  code: "  system      Meshery Lifecycle Management",
                  color: "green",
                },
                {
                  code: "  version     Version of mesheryctl",
                  color: "green",
                },
                { code: "\n" },
                {
                  code: "Flags:",
                  color: "navy",
                },
                {
                  code: "      --config string   config file (default location is: $HOME/.meshery/config.yaml)",
                  color: "green",
                },
                {
                  code: "  -h, --help            help for mesheryctl",
                  color: "green",
                },
              ]}
            /> 
          </Col>
        </Row>
      </Container>   
    </WhatAwaitsWrapper>
  );
};

export default WhatAwaitsSection;
