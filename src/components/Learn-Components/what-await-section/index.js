import React from "react";
import WhatAwaitsWrapper from "./what-await.styles";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Shell from "../../../assets/images/shell.png";

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
          <img src={Shell} alt="shell"/>
        </Col>
      </Row>
    </WhatAwaitsWrapper>
  );
};

export default WhatAwaitsSection;