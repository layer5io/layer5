import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";

const Envoy = "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg";
const Linkerd = "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg";
const Traefik = "../../../assets/images/service-mesh-icons/traefik.svg";
const Istio = "../../../assets/images/service-mesh-icons/istio.svg";
const OSM = "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg";
const SMI = "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
const SMP = "../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg";
const CNCF = "../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg";
const Meshery = "../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg";
const ImageHub = "../../../assets/images/image-hub/layer5-image-hub.svg";
const OAM = "../../../assets/images/partners/oam.svg";

import ProjectItemWrapper from "./proudMaintainers.style";
import { StaticImage } from "gatsby-plugin-image";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container>
        <Row className="project-title">
          <SectionTitle
            UniWidth="75%"
          >
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>
          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners and
            maintainers of leading open source projects
            We are open source contributors and maintainers.
          </p>
        </Row>
      </Container>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage src={CNCF} alt="CNCF" objectFit="contain"/>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage  src={Envoy} alt="Envoy" objectFit="contain" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage  src={Linkerd} alt="Linkerd" objectFit="contain"/>
          </div>
        </Col>
        {/* <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={ServiceMesh} alt="Service Mesh" />
            <h4>Service Mesh</h4>
          </div>
        </Col> */}
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage  src={Meshery} alt="Meshery" objectFit="contain"/>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage  src={OAM} alt="OAM" objectFit="contain" />
          </div>
        </Col>
      </Row>
      <Row className="row row_2">
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage  src={Istio} alt="Istio" objectFit="contain"/>
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage src={OSM} alt="OSM" objectFit="contain" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage src={SMP} alt="SMP" objectFit="contain" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage  src={ImageHub} alt="ImageHub" objectFit="contain" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage  src={SMI} alt="SMI" objectFit="contain"/>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage  src={Traefik} alt="Traefik" objectFit="contain" />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
