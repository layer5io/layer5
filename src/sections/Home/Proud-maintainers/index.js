import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";

import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg";
import Linkerd from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg";
import Image3 from "../../../assets/images/service-mesh-icons/service-mesh.svg";
import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
import Kuma from "../../../assets/images/service-mesh-icons/kuma/horizontal/color/kuma-horizontal-color.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg";
import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
import SMP from "../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg";
import CNCF from "../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg";
import Meshery from "../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import OAM from "../../../assets/images/partners/oam.svg";

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
              <h4>PROUDLY MAINTAINING AND CONTRIBUTING</h4>
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
                <Col sm={12} md={12} lg={12}>
                  <img src={CNCF} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={Envoy} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={Linkerd} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Image3} alt="" width="100" height="100" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Service Mesh</h4>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={Meshery} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={OAM} alt="" />
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
                  <img src={Istio} alt="" width="100" height="100" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Istio</h4>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={OSM} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={SMP} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={ImageHub} alt="" width="100" height="100" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Image Hub</h4>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div-up">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <img src={SMI} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <div className="project-div">
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <img src={Traefik} alt="" width="100" height="100" />
                </Col>
                <Col className="company-name" sm={6} md={6} lg={6}>
                  <h4>Traefik Mesh</h4>
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
