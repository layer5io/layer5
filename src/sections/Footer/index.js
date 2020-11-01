import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed" ;

import { Container, Row, Col } from "../../reusecore/Layout";

import logo from "../../images/layer5/layer5-only/svg/layer5-light-bg.svg";
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
            <img className="section__particle one" src={particleOne} alt="appion app landing" />
            <Container>
                <Row>
                    <Col xs={12} sm={5} lg={4}>
                        <div className="first">
                            <a href="#">
                                <img src={logo} className="footer-logo" alt="logo" />
                            </a>
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
                                            <a className="anchor" href="/landscape">
                    Service Mesh Comparison
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/landscape#tools">
                    Service Mesh Tools
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/books">
                    Service Mesh Books
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/workshops">
                    Service Mesh Workshops
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} lg={4}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">Community</h3>
                                    <ul className="widget-catagory">
                                        <li>
                                            <a className="anchor" href="/blog">
                    Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/community/events">
                    Events
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/subscribe">
                    Mailing List
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/programs/gsoc/2020">
                    GSoC 2020
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/programs/gsod/2020">
                    GSOD 2020
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/programs/communitybridge">
                    Community Bridge
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} lg={3}>
                                <div className="footer-widgets">
                                    <h3 className="widget-title">Company</h3>
                                    <ul className="widget-catagory">
                                        <li>
                                            <a className="anchor" href="/news">
                    News
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/brand">
                    Brand
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/careers">
                    Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/partners">
                    Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a className="anchor" href="/contact">
                    Contact
                                            </a>
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
                                    <a className="social-icons" href="mailto:community@layer5.io">
                                        <img height="40 px" src={mail_icon} alt="mail" />
                                    </a>
                                    <a className="social-icons" href="http://slack.layer5.io/">
                                        <img height="40 px" src={slack_icon} alt="slack" />
                                    </a>
                                    <a className="social-icons" href="https://twitter.com/layer5">
                                        <img height="40 px" src={twitter_icon} alt="twitter" />
                                    </a>
                                    <a className="social-icons" href="https://github.com/layer5io">
                                        <img height="40 px" src={github_icon} alt="github" />
                                    </a>
                                    <a className="social-icons" href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">
                                        <img height="40 px" src={youtube_icon} alt="youtube" />
                                    </a>
                                    <a className="social-icons" href="https://hub.docker.com/u/layer5/">
                                        <img height="40 px" src={docker_icon} alt="docker" />
                                    </a>
                                </Row>
                            </Col>
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
