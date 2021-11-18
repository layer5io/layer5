import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";

// import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg";
// import Linkerd from "../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg";

// import Traefik from "../../../assets/images/service-mesh-icons/traefik.svg";
// import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
// import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg";
// import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
// import SMP from "../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg";
// import CNCF from "../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg";
// import Meshery from "../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg";
// import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";
// import OAM from "../../../assets/images/partners/oam.svg";
import { StaticImage } from "gatsby-plugin-image";

import ProjectItemWrapper from "./proudMaintainers.style";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container>
        <Row className="project-title">
          <SectionTitle UniWidth="75%">
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>
          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners
            and maintainers of leading open source projects We are open source
            contributors and maintainers.
          </p>
        </Row>
      </Container>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/partners/cncf/horizontal/color/cncf-color.svg"
              alt="CNCF"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-color.svg"
              alt="Envoy"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/linkerd/horizontal/color/linkerd-horizontal-color.svg"
              alt="Linkerd"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
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
            <StaticImage
              src="../../../assets/images/meshery/full-logo/meshery-logo-light-text-side.svg"
              alt="Meshery"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/partners/oam.svg"
              alt="OAM"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
      </Row>
      <Row className="row row_2">
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/istio.svg"
              alt="Istio"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/open-service-mesh/stacked/color/openservicemesh-stacked-color.svg"
              alt="OSM"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/service-mesh-performance/horizontal/smp-dark-text-side.svg"
              alt="SMP"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage
              src="../../../assets/images/image-hub/layer5-image-hub.svg"
              alt="ImageHub"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg"
              alt="SMI"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <StaticImage
              src="../../../assets/images/service-mesh-icons/traefik.svg"
              alt="Traefik"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="50% 50%"
            />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
