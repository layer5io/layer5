import React from "react";
import WhatAwaitsWrapper from "./what-await.styles";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";

const WhatAwaitsSection = () => {
  return (
    <WhatAwaitsWrapper>
      <Row className="what-await-section">
        <Col sm={12} md={6} xl={4} className="what-await-section-info">
          <h2>What Awaits you</h2>
          <p>
              Learning service mesh the right way. From the best
              learning path by the experts at Layer5 and learn how
              to mesh
          </p>
        </Col>
        <Col sm={12} md={6} xl={4} className="what-await-section-image">

          <Terminal
            lines={[
              { code : "$ mesheryctl pattern apply -f canary-v3.yaml", color : "white" },
              { code : "» Deploying...", color : "navy" },
              {
                code : "✓ Deployment successfully rolled out!",
                color : "green",
              },
              { code : "\n" },
              { code : "» Traffic splitting...", color : "navy" },
              {
                code : "✓ 5% of user requests to v3.",
                color : "green",
              },
              {
                code : "✓ 30% of user requests to v3.",
                color : "green",
              },
              {
                code : "✓ 60% of user requests to v3.",
                color : "green",
              },
              {
                code : "✓ 90% of user requests to v3.",
                color : "green",
              },
              {
                code : "✓ 100% of user requests to v3.",
                color : "green",
              },
              { code : "\n" },
              {
                code : "Pattern successfully applied. Rollout of 'canary-v3' completed.",
                color : "navy",
              },
              {
                code : "» Prerelease URL: https://payments-v3.meshery.run",
                color : "green",
              },
              {
                code : "» Release URL: https://payments.meshery.run",
                color : "green",
              },
            ]}
          />

        </Col>
      </Row>
    </WhatAwaitsWrapper>
  );
};

export default WhatAwaitsSection;
