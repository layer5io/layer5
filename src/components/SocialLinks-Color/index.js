import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinksWrapper from "./sociallinkscolor.style";

const forum_icon = "../../assets/images/socialIcons/forum.svg";
const mail_icon = "../../assets/images/socialIcons/mail_keppel.svg";
const slack_icon = "../../assets/images/socialIcons/slack-light.svg";
const twitter_icon = "../../assets/images/socialIcons/twitter-light.svg";
const github_icon = "../../assets/images/socialIcons/github.svg";
const youtube_icon = "../../assets/images/socialIcons/youtube.svg";
const docker_icon = "../../assets/images/socialIcons/docker.svg";
const linkedin_icon = "../../assets/images/socialIcons/linkedin-light.svg";

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
            <StaticImage   src={forum_icon} alt="forum" objectFit="contain"/>
          </a>
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage   src={mail_icon} alt="mail" objectFit="contain"/>
          </a>
          <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer">
            <StaticImage className="slack"   src={slack_icon} alt="slack" objectFit="contain"/>
          </a>
          <a href="https://twitter.com/layer5" target="_blank" rel="noreferrer">
            <StaticImage
              className="twitter"
              src={twitter_icon}
              alt="twitter"
              objectFit= "contain"
            />
          </a>
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <StaticImage  
              src={github_icon}
              alt="github"
              objectFit= "contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/layer5"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="linkedin" 
              src={linkedin_icon}
              objectFit= "contain"
              alt="linkedin"
            />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="youtube"
              objectFit= "contain"
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
            <StaticImage
              className="docker"
              src={docker_icon}
              objectFit= "contain"
              alt="docker"
            />
          </a>
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;
