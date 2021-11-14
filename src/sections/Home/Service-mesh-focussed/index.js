import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";

import MeshFocusWrapper from "./service-mesh-focussed.style";
import ServiceMeshFocusedImage from "./The-Enterprise-path-to-service-mesh-Architectures-2nd-Edition.png";
import BlockQuoteImage from "../../../assets/images/blockquote/quote-left.svg";
import Button from "../../../reusecore/Button";
import { FaArrowRight } from "react-icons/fa";

const ServiceMeshFocused = () => {

  return (
    <MeshFocusWrapper>
      <Container>
        <Row className="heading">
          <Col>
            <h5>Cloud native focused.</h5>
            {/* <h1>Service mesh focused.</h1> */}
            <h1>Service mesh neutral</h1>
            <h4>Dedicated to empowering you to expect more from your infrastructure.</h4>
          </Col>
        </Row>
        <Row Vcenter >
          <Col xs={12} sm={6} lg={6}>
            <img src={ServiceMeshFocusedImage} className="book" alt="The-Enterprise-Path-to-Service-Mesh-Architectures" />
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <img src={BlockQuoteImage} className="quote-icon" alt="Quote from book" />
            <p className="quote">
              "Diverse microservices patterns and technologies, together with the requirements of given microservice applications,provide myriad opportunities for service mesh differentiation and specialization - including meshes native to specific cloud platforms. This will lead to a world where many           enterprises use multiple service mesh products, whether separately or together."
            </p>
            <Button className="book_btn" primary url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition" title="Read Book">
              <FaArrowRight className="icon-right" /> 
            </Button>
          </Col>
        </Row>
      </Container>
    </MeshFocusWrapper>
  );
};


export default ServiceMeshFocused;
