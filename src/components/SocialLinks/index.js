import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import mail_icon from "../..//assets/images/app/footer/social/mail_black.svg";
import slack_icon from "../../assets/images/app/footer/social/slack_black.svg";
import twitter_icon from "../../assets/images/app/footer/social/twitter_black.svg";
import github_icon from "../../assets/images/app/footer/social/github_black.svg";
import youtube_icon from "../../assets/images/app/footer/social/youtube_black.svg";
import docker_icon from "../../assets/images/app/footer/social/docker_black.svg";
import { Link } from "gatsby";
import SocialSectionWrapper from "./SocialLinks.style";

const SocialLinks = props => {
    return (
        <SocialSectionWrapper>
            <Col className="social-widgets" xs={12} sm={7}>
                <Row className="contactf">
                    <Link className="social-icons mail" href="mailto:community@layer5.io">
                        <img height="40 px" src={mail_icon} />
                    </Link>
                    <Link className="social-icons" to="http://slack.layer5.io/">
                        <img className="slack" height="40 px" src={slack_icon} />
                    </Link>
                    <Link className="social-icons" to="https://twitter.com/layer5">
                        <img className="twitter" height="40 px" src={twitter_icon} />
                    </Link>
                    <Link className="social-icons" to="https://github.com/layer5io">
                        <img className="github" height="40 px" src={github_icon} />
                    </Link>
                    <Link
                        className="social-icons"
                        to="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
                    >
                        <img className="youtube" height="40 px" src={youtube_icon} />
                    </Link>
                    <Link className="social-icons" to="https://hub.docker.com/u/layer5/">
                        <img className="docker" height="40 px" src={docker_icon} />
                    </Link>
                </Row>
            </Col>
        </SocialSectionWrapper>
    );
};

export default SocialLinks;
