import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import { FiDownloadCloud } from "react-icons/fi";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.png";
import ImageHubWhite from "../../../assets/images/image-hub/layer5-image-hub-white.png";

const ImageHubWrap = styled.section`
  .ImageHubWhite {
    background: ${props => props.theme.primaryColor};
  }
`;

const ImageHubBrand = () => {
    return (
        <ImageHubWrap>
            <div className="post-content">
                <Row>
                    <Col xs={12} sm={6}>
                        <h1 className="layerH3">
                            Image Hub
                        </h1>
                    </Col>
                    <Col xs={12} sm={6} className="download-button">
                        <Button primary title="Download Logo Assets" url="../../../assets/brand/image-hub-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            The Image Hub mark includes the Image Hub name & logo, and any
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
                    <Row className="ImgDiv">
                        <Col xs={12} sm={3}>
                            <img src={ImageHub} />
                        </Col>
                        <Col xs={12} sm={3} className="ImageHubWhite">
                            <img src={ImageHubWhite} />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2 className="layerH3 in">
                            Colors
                        </h2>
                    </Col>
                    <Col>
                        <p>
                            The Image Hub color palette consists of the primary Image Hub
                            color and additional shades. The Image Hub logo should be white or
                            monochrome tonal when using a color background.
                        </p>
                    </Col>
                    <Row className="color-code-wrapper">
                        <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
                        <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                        <ColorBox name="Casper" R="177" G="182" B="184" colorCode="#B1B6B8" />
                    </Row>
                </Row>
            </div>
        </ImageHubWrap>
    );
};

export default ImageHubBrand;
