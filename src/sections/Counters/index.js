import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Counter from "../../reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

// cloud.layer5.io's CORS allowlist only permits https://layer5.io/https://www.layer5.io,
// so local `gatsby develop` sessions use the dev-only proxy from gatsby-config.js instead.
export const URL =
  process.env.NODE_ENV === "development"
    ? "/api/performance/results/total"
    : "https://cloud.layer5.io/api/performance/results/total";

const Counters = () => {
  const [performanceCount, setPerformanceCount] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (!Number.isFinite(result.totalRuns)) {
          throw new Error("Invalid performance count received");
        }
        setPerformanceCount(result.totalRuns);
      })
      .catch((error) => {
        console.log("Failed to fetch performance count:", error.message);
      });
  }, []);

  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col $xs={12} $sm={6} $lg={6}>
            <div className="counter__item">
              <Counter end={16} suffix="k+" />
              <p>Global Customers</p>
            </div>
          </Col>
          <Col $xs={12} $sm={6} $lg={6}>
            <div className="counter__item">
              <Counter end={performanceCount} duration={2.25} />
              <p>Performance Tests run</p>
            </div>
          </Col>
          {/* <Col $xs={12} $sm={6} $lg={3}>
                        <div className="counter__item">
                            <Counter end={1450} suffix="+" />
                            <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col $xs={12} $sm={6} $lg={3}>
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
