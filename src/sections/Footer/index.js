import React from "react";
import { Link } from "gatsby";
import { TwitterTimelineEmbed } from "react-twitter-embed" ;

import { Container, Row, Col } from "../../reusecore/Layout";

import logo from "../../assets/images/layer5/layer5-only/svg/layer5-light-bg.svg";
import particleOne from "../../assets/images/app/footer/footer-particle.png";
import SocialLinks from "../../components/SocialLinks";
import mail_icon from "../../assets/images/app/footer/social/mail_white_trim.svg";
import slack_icon from "../../assets/images/app/footer/social/slack_white_trim.svg";
import twitter_icon from "../../assets/images/app/footer/social/twitter_white_trim.svg";
import github_icon from "../../assets/images/app/footer/social/github_white_trim.svg";
import youtube_icon from "../../assets/images/app/footer/social/youtube_white_trim.svg";
import docker_icon from "../../assets/images/app/footer/social/docker_white_trim.svg";
import FotterWrapper from "./footer.style";

const Footer = () => {
    return (
        <FotterWrapper>
            <img className="section__particle one" src={particleOne} alt="appion app landing" />
            <Container>
                <Row>
                    <Col className="footer-widgets" lg={3}>
                        <Link to="#">
                            <img src={logo} className="footer-logo" alt="logo" />
                        </Link>
                        <div className="descript">representing <i>every</i> service mesh</div>
                    </Col>
                    <Col lg={9}>
                        <div className="links">
                            <SocialLinks />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                    Representing the largest collection of service meshes and their maintainers in the world, Layer5 is the service mesh company. 
                        <br /><br />
                    Creator and maintainer of service mesh standards.
                        <br /><br />
                    Maker of Meshery, the service mesh management plane.
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col xs={12} sm={12} lg={3}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">RESOURCES</h3>
                                    <ul className="widget-catagory">
                                        <li>
                                            <Link className="anchor" to="/landscape">
                    Service Mesh Comparison
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/landscape#tools">
                    Service Mesh Tools
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
                            <Col xs={6} sm={6} lg={3}>
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
                            <Col xs={12} sm={12} lg={3}>
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
                            <Col xs={6} sm={6} lg={3}>
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
                {/* <Row>
                    <Col xs={12} sm={5} lg={4}>
                        <div className="first">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="layer5"
                                options={{height: 300}}
                                noFooter
                                noScrollbar
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={7} lg={8}>
                        <Row>
                            <Col xs={12} sm={12} lg={5}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">Resources</h3>
                                    <ul className="widget-catagory">
                                        <li>
                                            <Link className="anchor" to="/landscape">
                    Service Mesh Comparison
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/landscape#tools">
                    Service Mesh Tools
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
                            <Col xs={6} sm={6} lg={4}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">Community</h3>
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
                                            <Link className="anchor" to="/subscribe">
                    Mailing List
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
                            <Col xs={6} sm={6} lg={3}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">Company</h3>
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
                        <Row className="footer-contact">
                            <Col className="footer-widgets" xs={12} sm={6} lg={6}>
                                <Row className="contactf">
                                    <a className="social-icons" href="mailto:community@layer5.io">
                                        <img className="mail" height="40 px" src={mail_icon} alt="mail" />
                                    </a>
                                    <a className="social-icons" href="http://slack.layer5.io/">
                                        <img className="slack" height="40 px" src={slack_icon} alt="slack" />
                                    </a>
                                    <a className="social-icons" href="https://twitter.com/layer5">
                                        <img className="twitter" height="40 px" src={twitter_icon} alt="twitter" />
                                    </a>
                                    <a className="social-icons" href="https://github.com/layer5io">
                                        <img className="github" height="40 px" src={github_icon} alt="github" />
                                    </a>
                                    <a className="social-icons" href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">
                                        <img className="youtube" height="40 px" src={youtube_icon} alt="youtube" />
                                    </a>
                                    <a className="social-icons" href="https://hub.docker.com/u/layer5/">
                                        <img className="docker" height="40 px" src={docker_icon} alt="docker" />
                                    </a>
                                </Row>
                            </Col>
                            <Col className="footer-widgets" xs={12} sm={6} lg={6}>
                                <Link to="#">
                                    <img src={logo} className="footer-logo" alt="logo" />
                                </Link>
                                <div className="descript">representing <i>every</i> service mesh</div>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
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
