import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import mail_icon from "../../assets/images/socialIcons/mail_keppel.svg";
import slack_icon from "../../assets/images/socialIcons/slack-light.svg";
import twitter_icon from "../../assets/images/socialIcons/twitter-light.svg";
import github_icon from "../../assets/images/socialIcons/github_white_trim.svg";
import youtube_icon from "../../assets/images/socialIcons/youtube.svg";
import docker_icon from "../../assets/images/socialIcons/docker.svg";
import SocialIconWrapper from "./socialicon.style";

const SocialLinks = () => {
  return (
    <SocialIconWrapper>
      <Col xs={12}>
        <Row className="social_icons">
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <img height="40 px" src={mail_icon} alt="mail" />
          </a>
          <a
            href="https://slack.layer5.io/"
            target="_blank" rel="noreferrer"
          >
            <img className="slack" height="40 px" src={slack_icon} alt="slack" />
          </a>
          <a
            href="https://twitter.com/layer5"
            target="_blank"
            rel="noreferrer"
          >
            <img className="twitter" height="40 px" src={twitter_icon} alt="twitter" />
          </a>
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github" height="40 px" src={github_icon} alt="github" />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/c/Layer5io?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <img className="youtube" height="40 px" src={youtube_icon} alt="youtube" />
          </a>
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/layer5/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="docker" height="40 px" src={docker_icon} alt="docker" />
          </a>
        </Row>
      </Col>
    </SocialIconWrapper>
  );
};

export default SocialLinks;
