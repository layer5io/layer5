import React from "react";
import { Link } from "gatsby";
import { TwitterTimelineEmbed } from "react-twitter-embed" ;

import { Container, Row, Col } from "../../reusecore/Layout";

import logo from "../../images/layer5/layer5-dark-bg.svg";
import particleOne from "../../assets/images/app/footer/footer-particle.png";

import mail_icon from "../..//assets/images/app/footer/social/mail_white_trim.svg";
import slack_icon from "../../assets/images/app/footer/social/slack_white_trim.svg";
import twitter_icon from "../../assets/images/app/footer/social/twitter_white_trim.svg";
import github_icon from "../../assets/images/app/footer/social/github_white_trim.svg";
import youtube_icon from "../../assets/images/app/footer/social/youtube_white_trim.svg";
import docker_icon from "../../assets/images/app/footer/social/docker_white_trim.svg";


import FotterWrapper from "./footer.style";
import Language from "./languages";

const Footer = () => {
    return (
        <FotterWrapper>
            <img className="section__particle one" alt="img" src={particleOne} alt="appion app landing" />
            <Container>
                <Row>
                    <Col xs={12} sm={5} lg={4}>
                        <div className="first">
                            <Link to="#">
                                <img src={logo} className="footer-logo" alt="logo" />
                            </Link>
                            <div className="descript">representing <i>every</i> service mesh</div>
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
                                            <Link className="anchor" to="/learn/books">
                    Service Mesh Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/learn/workshops">
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
                                            <Link className="anchor" to="/careers/programs/internships">
                    Internships
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/careers/programs/gsoc/2020">
                    GSoC 2020
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/careers/programs/gsod/2020">
                    GSOD 2020
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/careers/programs/communitybridge/2020">
                    Community Bridge
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
                                            <Link className="anchor" to="company/news">
                    News
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="company/brand">
                    Brand
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/careers">
                    Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="anchor" to="/contact/partners">
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
                            <Col className="footer-widgets" xs={12} sm={6} lg={7}>
                                <Language />
                            </Col>
                            <Col className="footer-widgets" xs={12} sm={6} lg={5}>
                                <h3 className="widget-title">Contact</h3>
                                <Row className="contactf">
                                    <Link className="social-icons" to="mailto:community@layer5.io">
                                        <img height="40 px" src={mail_icon} />
                                    </Link>
                                    <Link className="social-icons" to="http://slack.layer5.io/">
                                        <img height="40 px" src={slack_icon} />
                                    </Link>
                                    <Link className="social-icons" to="https://twitter.com/layer5">
                                        <img height="40 px" src={twitter_icon} />
                                    </Link>
                                    <Link className="social-icons" to="https://github.com/layer5io">
                                        <img height="40 px" src={github_icon} />
                                    </Link>
                                    <Link className="social-icons" to="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">
                                        <img height="40 px" src={youtube_icon} />
                                    </Link>
                                    <Link className="social-icons" to="https://hub.docker.com/u/layer5/">
                                        <img height="40 px" src={docker_icon} />
                                    </Link>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <ul className="footer-menu">
                        <li>
                            <Link className="anchor" to="https://meshery.layer5.io/privacy-policy.html">
                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link className="anchor" to="https://meshery.layer5.io/terms-of-service.html">
                Terms
                            </Link>
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
