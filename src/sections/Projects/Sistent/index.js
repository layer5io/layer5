import React from "react";
import Sidebar from "./Sistent-sidebar";
import { Col, Row } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";

const SistentHome = () => {
  return (
    <SistentWrapper>
      <Row>
        <Col xs={12} lg={3}>
          <Sidebar />
        </Col>
        <Col xs={12} lg={7}>
          <h1>About</h1>
          <p>
            Colors when accurately applied can be a potent tool that enables
            designers and developers to implement solutions with speed and
            efficiency. Here are a couple of things to keep in mind.
          </p>
        </Col>
      </Row>
    </SistentWrapper>
  );
};

export default SistentHome;
