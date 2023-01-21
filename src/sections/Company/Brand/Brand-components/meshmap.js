import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshMapIcon from "../../../../assets/images/meshmap/meshmap-color-icon.svg";
import MeshMapIconHorizontal from "../../../../assets/images/meshmap/meshmap-white-horizontal.svg";
import MeshMapText from "../../../../assets/images/meshmap/meshmap-color-text.png";

const MeshMapBrand = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            MeshMap
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/meshmap-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The MeshMap mark includes the Meshmap name & logo, and any
            word, phrase, image, or other designation that identifies the
            source or origin of any Layer5 projects. Please don’t modify the
            marks or use them in a confusing way, including suggesting
            sponsorship or endorsement by Layer5, or in a way that confuses
            Layer5 with another brand (including your own).
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
          <Row Vcenter className="ImgDiv">
            <Col xs={12} sm={4} className="logo">
              <img src={MeshMapIconHorizontal} alt="Meshmap Icon" />
            </Col>
            <Col xs={12} sm={4}>
              <img src={MeshMapIcon} alt="Meshmap Full Logo" />
            </Col>
            <Col xs={12} sm={4}>
              <img src={MeshMapText} alt="Meshmap Text" />
            </Col>

          </Row>
        </SRLWrapper>
      </Row>
    </div>
  );
};

export default MeshMapBrand;
