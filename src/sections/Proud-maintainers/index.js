import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";

import Image1 from "../../assets/images/app/proudMaintainers/envoy.png";
import Image2 from "../../assets/images/app/proudMaintainers/linkerd.png";
import Image3 from "../../assets/images/app/proudMaintainers/service-mesh.png";
import Image4 from "../../assets/images/app/proudMaintainers/traefik.png";
import Image5 from "../../assets/images/app/proudMaintainers/kuma.png";

import ProjectItemWrapper from "./proudMaintainers.style";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper id="projects">
      <Container>
        <Row>
          <div className="project-title">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="75%"
            >
              <h4>PROUDLY MAINTAINERS AND CONTRIBUTERS</h4>
              <h2>
                <span>Open Source and Community First</span>.
              </h2>
            </SectionTitle>
            <p className="project-text">
            We are the world’s largest collection of service mesh practitioners and
             maintainers of leading open source projects
            We are open source contributors and maintainers.
            </p>
          </div>
        </Row>
      </Container>
      <Row>
        <div className="project__block__wrap">

          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image1} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Envoy</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image2} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Linkerd</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image3} alt="" />
                </Col>
                <Col className="company-name-service" sm={6} md={6} lg={6}>
                  <h4>Service Mesh</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image4} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Traefik</h4>
                </Col>
              </Row>
            </div>
          </Col>



        </div>
      </Row>
      <Row>
        <div className="project__block__wrap">

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image5} alt="" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Kuma</h4>
                </Col>
              </Row>
            </div>
          </Col>

        </div>
      </Row>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
