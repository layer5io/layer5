import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";

import MeshFocusWrapper from "./service-mesh-focussed.style";
import ServiceMeshFocusedImage from "./The-Enterprise-path-to-service-mesh-Architectures-2nd-Edition.png";
import BlockQuoteImage from "../../../assets/images/blockquote/quote-left.svg";
import Button from "../../../reusecore/Button";
import {FaArrowRight} from "react-icons/fa";

const ServiceMeshFocused = () => {

  return (
    <MeshFocusWrapper>
            <Container>

      <Row>
        <Col>asdf</Col>
        </Row>
        <Row>
        <Col>asdf</Col>
        <Col>asdf</Col>
      </Row>
      <div className="main">
        <Row className="head-cont-2">
          <Col>
          <h5>Service mesh focused.</h5>
          {/* <h1>Service mesh focused.</h1> */}
          <h1>Service mesh neutral</h1>
          <h4>Dedicated to empowering you with any service mesh.</h4>
          </Col>
        </Row>
        <Row className="card-cont-1">
          <Col className="img-col">
            <img src={ServiceMeshFocusedImage} alt="The-Enterprise-Path-to-Service-Mesh-Architectures" />
          </Col>
          <Col className="content-col">
            <img src={BlockQuoteImage} alt="Quote-left"/>
            <p className="content">
              
              "Diverse microservices patterns and technologies, together with the requirements of given microservice applications,provide myriad opportunities for service mesh differentiation and specialization - including meshes native to specific cloud platforms. This will lead to a world where many           enterprises use multiple service mesh products, whether separately or together."
              
            </p>
            <Button url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition">
              Read Story
              <FaArrowRight className="icon-right"/>
            </Button>

          </Col>

        </Row>
      </div>
      </Container>

    </MeshFocusWrapper>
  );
};


export default ServiceMeshFocused;
