import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Counter from "../../reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

const Counters = () => {
    return (
        <CounterSectionWrapper>
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="counter__item">
                            <Counter end={16} suffix="k+" />
                            <p>GLobal Customers</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="counter__item">
                            <Counter end={1700} suffix="+" />
                            <p>Completed Projects</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
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
                    </Col>
                </Row>
            </Container>
        </CounterSectionWrapper>
    );
};

export default Counters;
