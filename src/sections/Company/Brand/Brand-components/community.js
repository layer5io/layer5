import React from "react";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshMateLogoLight from "../../../../assets/images/meshmate/meshmate-icon-white.png";
import MeshMateLogo from "../../../../assets/images/meshmate/meshmate-icon.png";


const CommunityBrand = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            Community
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <h2 className="layerH3">
            MeshMate
          </h2>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/meshmate-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The MeshMate mark includes the MeshMate name & logo, and any word,
            phrase, image, or other designation that identifies the source or
            origin of any Layer5 projects. Please don’t modify the marks or
            use them in a confusing way, including suggesting sponsorship or
            endorsement by Layer5, or in a way that confuses Layer5 with
            another brand (including your own).
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="layerH3 in">
            Logos
          </h3>
        </Col>
        <Row className="ImgDiv">
          <Col xs={12} sm={3}>
            <img src={MeshMateLogo} alt="MeshMate Logo"/>
          </Col>
          <Col xs={12} sm={3} className="logo">
            <img src={MeshMateLogoLight} alt="MeshMate Logo Light"/>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <h3 className="layerH3 in">
            Colors
          </h3>
        </Col>
        <Col>
          <p>
            The MeshMate color palette consists of the primary MeshMate color
            and additional shades. The MeshMate logo should be white or
            monochrome tonal when using a color background.
          </p>
        </Col>
        <Row className="color-code-wrapper">
          <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
          <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
          <ColorBox name="Casper" R="177" G="182" B="184" colorCode="#B1B6B8" />
          <div className="white-color-box">
            <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default CommunityBrand;
