import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import forum_icon from "../../assets/images/socialIcons/forum.svg";
import mail_icon from "../../assets/images/socialIcons/mail_keppel.svg";
import slack_icon from "../../assets/images/socialIcons/slack-light.svg";
import twitter_icon from "../../assets/images/socialIcons/twitter-light.svg";
import github_icon from "../../assets/images/socialIcons/github.svg";
import youtube_icon from "../../assets/images/socialIcons/youtube.svg";
import docker_icon from "../../assets/images/socialIcons/docker.svg";
import linkedin_icon from "../../assets/images/socialIcons/linkedin-light.svg";
import SocialLinksWrapper from "./sociallinkscolor.style";

const SocialLinksColor = () => {
  return (
    <SocialLinksWrapper>
      <Col xs={12}>
        <Row className="social_icons">
          <a
            href="https://discuss.layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <img height="30px" src={forum_icon} alt="forum" />
          </a>
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <img height="30px" src={mail_icon} alt="mail" />
          </a>
          <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer">
            <img className="slack" height="30px" src={slack_icon} alt="slack" />
          </a>
          <a href="https://twitter.com/layer5" target="_blank" rel="noreferrer">
            <img
              className="twitter"
              height="30px"
              src={twitter_icon}
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <img
              height="30px"
              src={github_icon}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/layer5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              height="30px"
              src={linkedin_icon}
              alt="linkedin"
            />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="youtube"
              height="30px"
              src={youtube_icon}
              alt="youtube"
            />
          </a>
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/layer5/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="docker"
              height="30px"
              src={docker_icon}
              alt="docker"
            />
          </a>
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;