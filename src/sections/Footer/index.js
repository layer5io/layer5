import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "../../assets/images/app/footer/footer-logo.png";
import particleOne from "../../assets/images/app/footer/footer-particle.png";

import FotterWrapper from "./footer.style";

const Footer = () => {
    return (
        <FotterWrapper>
            <img className="section__particle one" alt="img" src={particleOne} alt="appion app landing" />
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="footer-widgets first">
                            <Link className="footer-logo" to="#">
                                <img src={logo} alt="logo" />
                            </Link>
                            <ul className="info">
                                <li>
                                    <FiMail />
                                    <Link className="anchor" to="#">
                    contact@appion.com
                                    </Link>
                                </li>
                                <li>
                                    <FiPhoneCall />
                                    <Link className="anchor" to="#">
                    +88 12345 697858
                                    </Link>
                                </li>
                            </ul>

                            <ul className="social">
                                <li>
                                    <Link className="anchor" to="#">
                                        <FaFacebookF />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="footer-widgets">
                            <h3 className="widget-title">Services</h3>
                            <ul className="widget-catagory">
                                <li>
                                    <Link className="anchor" to="#">
                    Web Developments
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    UX/UI Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Graphic Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Software Development
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="footer-widgets">
                            <h3 className="widget-title">About Us</h3>
                            <ul className="widget-catagory">
                                <li>
                                    <Link className="anchor" to="#">
                    About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Work Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Team
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Plan & Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor" to="#">
                    Company News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="footer-widgets">
                            <h3 className="widget-title">Our Address</h3>
                            <p>
                1370 Roosevelt Street, <br />
                Little York City, New Jersey <br />
                08834
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <ul className="footer-menu">
                        <li>
                            <Link className="anchor" to="#">
                Terms
                            </Link>
                        </li>
                        <li>
                            <Link className="anchor" to="#">
                Condition
                            </Link>
                        </li>
                        <li>
                            <Link className="anchor" to="#">
                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="anchor" to="#">
                Help
                            </Link>
                        </li>
                    </ul>
                    <p className="copyright-text">
            Copyright @
                        <Link className="anchor" to="#">
              Devscorn 
                        </Link>
             | All Right Reserved 2020
                    </p>
                </div>
            </Container>
        </FotterWrapper>
    );
};

export default Footer;
