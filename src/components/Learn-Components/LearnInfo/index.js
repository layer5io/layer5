import React from "react";
import InfoWrapper from "./learninfo.style";
import {Col, Row} from "../../../reusecore/Layout";

const LearnInfo = () => {
  return (
    <InfoWrapper>
      <Row className="info-row">
        <Col xs={12} sm={6} lg={4}>
          <h2>4 courses</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>24 chapters</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>12 service meshes available.</h2>
          <p>Istio, Kuma, NSM, Linkerd, Consul</p>
        </Col>
      </Row>
    </InfoWrapper>
  );
};

export default LearnInfo;
