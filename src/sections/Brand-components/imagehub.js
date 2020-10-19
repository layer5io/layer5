import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";

import ImageHub from "../../assets/images/image-hub/layer5-image-hub.png";
import ImageHubWhite from "../../assets/images/image-hub/layer5-image-hub-white.png";

const ImageHubWrap = styled.section`
  .ImageHubWhite {
    float: left;
    padding: 3px;
    background-color: #3c494f;
  }
`;

const ImageHubBrand = () => {
    return (
        <ImageHubWrap>
            <Row className="post-content">
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <h1 className="layerH3">
                        <strong>Image-Hub</strong>
                    </h1>
                </Col>
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <Button className="l5-dark-yellow">DOWNLOAD LOGO ASSETS</Button>
                </Col>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <Row>
                        <p>
              The Image-Hub mark includes the Image-Hub name & logo, and any
              word, phrase, image, or other designation that identifies the
              source or origin of any Layer5 projects. Please don’t modify the
              marks or use them in a confusing way, including suggesting
              sponsorship or endorsement by Layer5, or in a way that confuses
              Layer5 with another brand (including your own).
                        </p>
                    </Row>
                </Col>
                <Row>
                    <Col xs={12} sm={6} lg={6} xl={6}>
                        <h3 className="layerH3">
                            <strong>Colors</strong>
                        </h3>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p>
              The Image-Hub color palette consists of the primary Image-Hub
              color and additional shades. The Image-Hub logo should be white or
              monochrome tonal when using a color background.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <h4 className="layerH3">Web</h4>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p className="layerH3">Logos to use online:</p>
                    </Col>
                    <Row className="ImgDiv">
                        <Col xs={12} sm={2} lg={2} xl={2}>
                            <a href="#">
                                <img src={ImageHub} />
                            </a>
                        </Col>
                        <Col xs={12} sm={2} lg={2} xl={2}>
                            <div className="ImageHubWhite">
                                <a href="#">
                                    <img src={ImageHubWhite} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </ImageHubWrap>
    );
};

export default ImageHubBrand;
