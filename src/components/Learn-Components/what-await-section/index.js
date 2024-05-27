import React from "react";
import WhatAwaitsWrapper from "./what-await.styles";
import { Row, Col } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";
import Button from "../../../reusecore/Button";


const WhatAwaitsSection = () => {
  return (
    <WhatAwaitsWrapper>
      <Row className="what-await-section">
        <Col sm={12} md={8} xl={4} className="what-await-section-info">
          <div className="service-mesh-patterns_text-and_button">
            <h2>Use Cloud Native Patterns</h2>
            <p>Cloud Native patterns help you get the most out of any cloud native. Each pattern can be used as a template and is customizable.
            </p>
            <p style={{ "justifyContent": "center", "textAlign": "center" }}>
              <Button primary title="Visit Cloud Native Patterns catalog" url="https://meshery.layer5.io/catalog" external={true} style={{ "margin": "1rem" }}/>
              <Button secondary title="Visit Service Mesh Patterns website" url="https://service-mesh-patterns.github.io/service-mesh-patterns/" external={true} />
            </p>
          </div>
        </Col>
        <Col sm={12} md={8} xl={4} className="what-await-section-image">

          <Terminal
            lines={[
              { code: "$ mesheryctl pattern apply -f canary-v3.yaml", color: "white" },
              { code: "» Deploying...", color: "navy" },
              {
                code: "✓ Deployment successfully rolled out!",
                color: "green",
              },
              { code: " " },
              { code: "» Traffic splitting...", color: "navy" },
              {
                code: "✓ 5% of user requests to v3.",
                color: "green",
              },
              {
                code: "✓ 30% of user requests to v3.",
                color: "green",
              },
              {
                code: "✓ 60% of user requests to v3.",
                color: "green",
              },
              {
                code: "✓ 90% of user requests to v3.",
                color: "green",
              },
              {
                code: "✓ 100% of user requests to v3.",
                color: "green",
              },
              { code: " " },
              {
                code: "Pattern successfully applied. Rollout of 'canary-v3' completed.",
                color: "navy",
              },
              {
                code: "» Prerelease URL: https://payments-v3.meshery.run",
                color: "green",
              },
              {
                code: "» Release URL: https://payments.meshery.run",
                color: "green",
              },
            ]}
          />

        </Col>
      </Row>
    </WhatAwaitsWrapper>
  );
};

export default WhatAwaitsSection;
