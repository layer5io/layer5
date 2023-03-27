import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Counter from "../../reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

export const URL = "https://meshery.layer5.io/api/performance/results/totala";

const Counters = () => {
  const [performanceCount, setPerformanceCount] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setPerformanceCount(result.total_runs));
  }, []);

  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <div className="counter__item">
              <Counter end={16} suffix="k+" />
              <p>Global Customers</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <div className="counter__item">
              <Counter end={performanceCount} duration={2.25} />
              <p>Performance Tests run</p>
            </div>
          </Col>
          {/* <Col xs={12} sm={6} lg={3}>
                        <div className="counter__item">
                            <Counter end={1450} suffix="+" />
                            <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="counter__item">
                            <Counter end={120} suffix="+" />
                            <p>Expert Workers</p>
                        </div>
                    </Col> */}
        </Row>
      </Container>
    </CounterSectionWrapper>
  );
};

export default Counters;
