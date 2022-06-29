import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import SmpLogo from "../../../../assets/images/service-mesh-patterns/service-mesh-patterns.png";
import SmpWhite from "../../../../assets/images/service-mesh-patterns/service-mesh-patterns-side-white.png";
import SmpTxt from "../../../../assets/images/service-mesh-patterns/service-mesh-pattern-text_white.png";

const ServiceMeshPatterns = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            <strong>Service Mesh Patterns</strong>
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/service-mesh-patterns-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
              The Service Mesh Pattern mark includes Service Mesh Pattern name & logo and any
              word, phrase, image, or other designation that identifies the
              source or origin of any Layer5 projects. PLease don't modify the
              marks or use them in a confusing way, including suggesting
              sponsorship or endorsement by Layer5 with another brand (including
              your own)
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="layerH3 in">
              Logos
          </h2>
        </Col>
        <SRLWrapper>
          <Row Vcenter className="ImgDiv smp-logo">
            <Col xs={12} sm={4}>
              <img src={SmpLogo} alt="Smp Logo"/>
            </Col>
            <Col xs={12} sm={4}>
              <div className="logo">
                <img src={SmpWhite} alt="SmpWhite Logo"/>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="logo">
                <img src={SmpTxt} alt="SmpTxt Logo"/>
              </div>
            </Col>
          </Row>
        </SRLWrapper>
      </Row>
      <Row>
        <Col>
          <h2 className="layerH3 in">
                            Colors
          </h2>
        </Col>
        <Col>
          <p>
                            The Service Mesh Pattern color palette consists of gray and green colors along with
                            additional shades. The SMP logo should be white or monochrome when
                            using project colors as the background.
          </p>
        </Col>
        <Row className="color-code-wrapper">
          <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
          <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
          <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
          <div className="white-color-box">
            <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default ServiceMeshPatterns;
