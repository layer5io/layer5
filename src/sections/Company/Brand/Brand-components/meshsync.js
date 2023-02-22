import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import MeshSyncLight from "../../../../assets/images/meshsync/meshsync-light.png";
import MeshSync from "../../../../assets/images/meshsync/meshsync.png";

const MeshSyncWrapper = styled.section`
    .sub-project {
        margin-top: -2rem;
    }
`;

const MeshSyncBrand = () => {
  return (
    <MeshSyncWrapper>
      <div className="post-content">
        <Row className="sub-project brand-section">
          <Col xs={12} sm={6}>
            <h2 className="layerH3">
                MeshSync
            </h2>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/meshsync-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
            The MeshSync mark includes the MeshSync name & logo, and any word,
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
              <Col xs={12} sm={4} className="logo">
                <img src={MeshSync} alt="MeshSync Logo"/>
              </Col>
              <Col xs={12} sm={4} className="logo">
                <img src={MeshSyncLight} alt="MeshSyncLight Logo"/>
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
                            The MeshSync color palette consists of the primary MeshSync color
                            and additional shades. The MeshSync logo should be white or
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
    </MeshSyncWrapper>
  );
};

export default MeshSyncBrand;
