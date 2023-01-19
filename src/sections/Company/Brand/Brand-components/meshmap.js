import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshMapIcon from "../../../../assets/images/meshmap/meshmap-color-icon.png";
import MeshMap from "../../../../assets/images/meshmap/meshmap-color-stacked.png";
import MeshMapTitle from "../../../../assets/images/meshmap/meshmap-color-text.png";

const MeshMapWrapper = styled.section`
    .sub-project {
        margin-top: -2rem;
    }
`;

const MeshMapBrand = () => {
  return (
    <MeshMapWrapper>
      <div className="post-content">
        <Row className="sub-project brand-section">
          <Col xs={12} sm={6}>
            <h2 className="layerH3">
                MeshMap
            </h2>
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
            The MeshMap mark includes the MeshMap name & logo, and any word,
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
          <SRLWrapper>
            <Row Vcenter className="ImgDiv">
              <Col xs={12} sm={4}>
                <img src={MeshMap} alt="MeshMap Logo"/>
              </Col>
              <Col xs={12} sm={4}>
                <img src={MeshMapIcon} alt="MeshMapLight Icon"/>
              </Col>
              <Col xs={12} sm={4}>
                <img src={MeshMapTitle} alt="MeshMapTitle Text"/>
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col>
            <h3 className="layerH3 in">
                            Colors
            </h3>
          </Col>
          <Col>
            <p>
                            The MeshMap color palette consists of the primary MeshMap color
                            and additional shades. The MeshMap logo should be white or
                            monochrome tonal when using a color background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Outer Space" R="60" G="73" B="79" colorCode="#3C494F" />
          </Row>
        </Row>
      </div>
    </MeshMapWrapper>
  );
};

export default MeshMapBrand;
