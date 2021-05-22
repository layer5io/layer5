import React from "react";
import CardWrapper from "./learninfo.style";
import {Col, Row} from "../../../reusecore/Layout";

function LearnInfo() {
  return (
    <CardWrapper>
      <Row>
        <Col xs={12} lg={4}>
          <h2>4 courses</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <h2>24 chapters</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <h2>12 service meshes available.</h2>
          <p>Istio, Kuma, NSM, Linkerd, Consul</p>
        </Col>
      </Row>
    </CardWrapper>
  );
}

export default LearnInfo;
