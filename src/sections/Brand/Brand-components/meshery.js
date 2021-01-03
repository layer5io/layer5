import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import { FiDownloadCloud } from "react-icons/fi";
import MeshLogoLightText from "../../../assets/images/meshery/meshery-logo-light-text.png";
import MeshLogoTagLightTextSide from "../../../assets/images/meshery/meshery-logo-tag-light-text-side.png";
import MeshLogoLightTextSide from "../../../assets/images/meshery/meshery-logo-light-text-side.png";
import MeshDarkText from "../../../assets/images/meshery/meshery-dark-text.png";
import MeshDarkTagText from "../../../assets/images/meshery/meshery-dark-tag-text.png";
import MeshSyncLight from "../../../assets/images/meshsync/meshsync-light.png";
import MeshSync from "../../../assets/images/meshsync/meshsync.png";
import MesheryOperatorDark from "../../../assets/images/meshery-operator/meshery-operator-dark.png";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator.png";

const MesheryWrapper = styled.section`
    .mesheryLogoTagLightTextSide {
        margin: auto;
        text-align: center;
    }

    .sub-project {
        margin-top: 2rem;
    }

    .mesheryOperator, .meshSyncLight{
        background: ${props => props.theme.primaryColor};
    }
`;

const MesheryBrand = () => {
    return (
        <MesheryWrapper>
            <div className="post-content">
                <Row>
                    <Col xs={12} sm={6}>
                        <h1 className="layerH3">
                            Meshery
                        </h1>
                    </Col>
                    <Col xs={12} sm={6} className="download-button">
                        <Button primary title="Download Logo Assets" url="../../../assets/brand/meshery-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            The Meshery mark includes the Meshery name & logo, and any word,
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
                        <h2 className="layerH3 in">
                            Logos
                        </h2>
                    </Col>
                    <Row className="ImgDiv">
                        <Col xs={12} sm={4}>
                            <img src={MeshDarkText} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <img src={MeshDarkTagText} />
                        </Col>
                    </Row>
                    <Row className="ImgDiv">
                        <Col xs={12} sm={4}>
                            <img src={MeshLogoLightText} />
                        </Col>
                        <Col xs={12} sm={4} className="mesheryLogoTagLightTextSide">
                            <img src={MeshLogoLightTextSide} />
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col>
                        <h2 className="layerH3 in">
                            Colors
                        </h2>
                    </Col>
                    <Col>
                        <p>
                            The Meshery color palette consists of the primary Meshery color
                            and additional shades. The Meshery logo should be white or
                            monochrome tonal when using a color background.
                        </p>
                    </Col>
                    <Row className="color-code-wrapper">
                        <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
                        <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                        <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
                    </Row>
                </Row>
                <Row className="sub-project">
                    <Col xs={12} sm={6}>
                        <h2 className="layerH3">
                            MeshSync
                        </h2>
                    </Col>
                    <Col xs={12} sm={6} className="download-button">
                        <Button primary title="Download Logo Assets" url="../../../assets/brand/meshsync-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
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
                    <Row className="ImgDiv">
                        <Col xs={12} sm={4} className="logo">
                            <img src={MeshSync} />
                        </Col>
                        <Col xs={12} sm={4} className="meshSyncLight logo">
                            <img src={MeshSyncLight} />
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
                <Row className="sub-project">
                    <Col xs={12} sm={6}>
                        <h2 className="layerH3">
                            Meshery Operator
                        </h2>
                    </Col>
                    <Col xs={12} sm={6} className="download-button">
                        <Button primary title="Download Logo Assets" url="../../../assets/brand/meshery-operator-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            The Meshery Operator mark includes the Meshery Operator name & logo, and any word,
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
                        <Col xs={12} sm={4}>
                            <img src={MesheryOperatorDark} />
                        </Col>
                        <Col xs={12} sm={4} className="mesheryOperator">
                            <img src={MesheryOperator} />
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
                            The Meshery Operator color palette consists of the primary Meshery Operator color
                            and additional shades. The Meshery Operator logo should be white or
                            monochrome tonal when using a color background.
                        </p>
                    </Col>
                    <Row className="color-code-wrapper">
                        <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
                        <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                        <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
                        <ColorBox name="Blue Bayoux" R="100" G="120" B="129" colorCode="#647881" />
                    </Row>
                </Row>
            </div>
        </MesheryWrapper>
    );
};

export default MesheryBrand;
