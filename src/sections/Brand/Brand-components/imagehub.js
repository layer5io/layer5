import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import { FiDownloadCloud } from "react-icons/fi";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.png";
import ImageHubWhite from "../../../assets/images/image-hub/layer5-image-hub-white.png";

const ImageHubWrap = styled.section`
  .ImageHubWhite {
    float: left;
    padding: 3px;
    background-color: ${props => props.theme.primaryColor};
  }
`;

const ImageHubBrand = () => {
    return (
        <ImageHubWrap>
            <div className="post-content">
                <Row>
                    <h1 className="layerH3">
                            Image-Hub
                    </h1>
                    <Button primary className="l5-dark-yellow" title="DOWNLOAD LOGO ASSETS" url="https://layer5.io/assets/resources/brand/image-hub-brand-kit.zip" external="true">
                        <FiDownloadCloud size={21} className="icon-left" />
                    </Button>
                </Row>
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
                <Row>
                    <h1 className="layerH3 in">
                            Logos
                    </h1>
                </Row>
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
                <Row>
                    <h1 className="layerH3 in">
                            Colors
                    </h1>
                </Row>
                <Row>
                    <p>
            The Image-Hub color palette consists of the primary Image-Hub
            color and additional shades. The Image-Hub logo should be white or
            monochrome tonal when using a color background.
                    </p>
                </Row>
            </div>
        </ImageHubWrap>
    );
};

export default ImageHubBrand;
