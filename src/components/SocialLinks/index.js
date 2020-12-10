import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import mail_icon from "../..//assets/images/app/footer/social/mail_black.svg";
import slack_icon from "../../assets/images/app/footer/social/slack_black.svg";
import twitter_icon from "../../assets/images/app/footer/social/twitter_black.svg";
import github_icon from "../../assets/images/app/footer/social/github_black.svg";
import youtube_icon from "../../assets/images/app/footer/social/youtube_black.svg";
import docker_icon from "../../assets/images/app/footer/social/docker_black.svg";
import SocialSectionWrapper from "./SocialLinks.style";

const SocialLinks = () => {
    return (
        <SocialSectionWrapper>
            <Col className="social-widgets" xs={12}>
                <Row className="contactf">
                    <a 
                        className="social-icons mail" 
                        href="mailto:community@layer5.io" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img height="40 px" src={mail_icon} alt="mail" />
                    </a>
                    <a 
                        className="social-icons" 
                        href="http://slack.layer5.io/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="slack" height="40 px" src={slack_icon} alt="slack" />
                    </a>
                    <a 
                        className="social-icons" 
                        href="https://twitter.com/layer5" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="twitter" height="40 px" src={twitter_icon} alt="twitter" />
                    </a>
                    <a 
                        className="social-icons" 
                        href="https://github.com/layer5io" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="github" height="40 px" src={github_icon} alt="github" />
                    </a>
                    <a
                        className="social-icons"
                        href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="youtube" height="40 px" src={youtube_icon} alt="youtube" />
                    </a>
                    <a 
                        className="social-icons" 
                        href="https://hub.docker.com/u/layer5/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="docker" height="40 px" src={docker_icon} alt="docker" />
                    </a>
                </Row>
            </Col>
        </SocialSectionWrapper>
    );
};

export default SocialLinks;
