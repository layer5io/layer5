import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";

import logo from "../../assets/images/layer5/layer5-only/svg/layer5-light-bg.svg";
import particleOne from "../../assets/images/app/footer/footer-particle.png";
import SocialLinks from "../../components/SocialLinks";
import Button from "../../reusecore/Button";
import FotterWrapper from "./footer.style";

const Footer = () => {
    return (
        <FotterWrapper>
            <img className="section__particle one" src={particleOne} alt="appion app landing" />
            <Container>
                <Row className="footer-head">
                    <Col className="footer-logo-pos" lg={3}>
                        <Link to="#">
                            <img src={logo} className="footer-logo" alt="logo" />
                        </Link>
                    </Col>
                    <Col lg={9}>
                        <div className="links">
                            <SocialLinks />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <p className="desc-info">
                        Representing the largest collection of service meshes and their maintainers in the world, Layer5 is the service mesh company. 
                            <br /><br />
                        Creator and maintainer of service mesh standards.
                            <br /><br />
                        Maker of Meshery, the service mesh management plane.
                        </p>    
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={7}>
                                        <div className="footer-widgets">
                                            <h3 className="widget-title">RESOURCES</h3>
                                            <ul className="widget-catagory">
                                                <li>
                                                    <Link className="anchor" to="/landscape#tools">
                            Service Mesh Tools
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/landscape">
                            Service Mesh Comparison
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/books">
                            Service Mesh Books
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/workshops">
                            Service Mesh Workshops
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="footer-widgets">
                                            <h3 className="widget-title">COMMUNITY</h3>
                                            <ul className="widget-catagory">
                                                <li>
                                                    <Link className="anchor" to="/blog">
                            Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/community/events">
                            Events
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/programs">
                            Programs
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={7}>
                                        <div className="footer-widgets">
                                            <h3 className="widget-title">PROJECTS</h3>
                                            <ul className="widget-catagory">
                                                <li>
                                                    <Link className="anchor" to="/meshery">
                            Meshery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/landscape">
                            Service Mesh Landscape
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/books">
                            Service Mesh Interface
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/workshops">
                            Service Mesh Conformace
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="footer-widgets">
                                            <h3 className="widget-title">COMPANY</h3>
                                            <ul className="widget-catagory">
                                                <li>
                                                    <Link className="anchor" to="/news">
                            News
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/brand">
                            Brand
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/careers">
                            Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/partners">
                            Partners
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="anchor" to="/contact">
                            Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="subscribe">
                            <div>
                                <input type="text" placeholder="Email Address"></input>
                                <Button secondary title="Subscribe to Newsletter"></Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <ul className="footer-menu">
                        <li>
                            <a className="anchor" href="https://meshery.layer5.io/privacy-policy.html">
                Privacy
                            </a>
                        </li>
                        <li>
                            <a className="anchor" href="https://meshery.layer5.io/terms-of-service.html">
                Terms
                            </a>
                        </li>
                    </ul>
                    <p className="copyright-text">
            2020 Copyright @Layer5, Inc | All Rights Reserved
                    </p>
                </div>
            </Container>
        </FotterWrapper>
    );
};

export default Footer;
