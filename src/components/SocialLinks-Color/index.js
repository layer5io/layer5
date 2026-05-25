import React from "react";
import { Col, Row } from "../../reusecore/Layout";
import forum_icon from "../../assets/images/socialIcons/forum.svg";
import mail_icon from "../../assets/images/socialIcons/mail_keppel.svg";
import slack_icon from "../../assets/images/socialIcons/slack-light.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/socialIcons/twitter.svg";
import github_icon from "../../assets/images/socialIcons/github.svg";
import youtube_icon from "../../assets/images/socialIcons/youtube.svg";
import docker_icon from "../../assets/images/socialIcons/docker.svg";
import linkedin_icon from "../../assets/images/socialIcons/linkedin-light.svg";
import bluesky_icon from "../../assets/images/socialIcons/bluesky.svg";
import { CustomTooltip } from "@sistent/sistent";
import SocialLinksWrapper from "./sociallinkscolor.style";

const tooltipStyles = {
  tooltip: {
    sx: {
      fontSize: "0.65rem",
      padding: "3px 6px",
    },
  },
};

const SocialLinksColor = () => {
  return (
    <SocialLinksWrapper>
      <Col $xs={12}>
        <Row className="social_icons">
          <CustomTooltip title="Layer5 Discussion Forum" placement="top" componentsProps={tooltipStyles}>
            <a href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
              <img height="30px" src={forum_icon} alt="forum" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Email Layer5 Community" placement="top" componentsProps={tooltipStyles}>
            <a className="mail_icon"
              href="mailto:community@layer5.io"
              target="_blank"
              rel="noreferrer"
            >
              <img height="30px" src={mail_icon} alt="mail" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Join Layer5 on Slack" placement="top" componentsProps={tooltipStyles}>
            <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer">
              <img className="slack" height="30px" src={slack_icon} alt="slack" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Follow Layer5 on X (Twitter)" placement="top" componentsProps={tooltipStyles}>
            <a
              href="https://x.com/layer5"
              target="_blank"
              rel="noreferrer"
              className="footer_twitter"
            >
              <TwitterIcon />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Follow Layer5 on Bluesky" placement="top" componentsProps={tooltipStyles}>
            <a
              className="bluesky_icon"
              href="https://bsky.app/profile/layer5.bsky.social"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bluesky"
                height="30px"
                src={bluesky_icon}
                alt="bluesky"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on GitHub" placement="top" componentsProps={tooltipStyles}>
            <a
              href="https://github.com/layer5io"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <img height="30px" src={github_icon} alt="github" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on LinkedIn" placement="top" componentsProps={tooltipStyles}>
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
          </CustomTooltip>
          <CustomTooltip title="Layer5 on YouTube" placement="top" componentsProps={tooltipStyles}>
            <a
              className="youtube_icon"
              href="https://youtube.com/Layer5io?sub_confirmation=1"
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
          </CustomTooltip>
          <CustomTooltip title="Layer5 on Docker Hub" placement="top" componentsProps={tooltipStyles}>
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
          </CustomTooltip>
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;
