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

const tooltipProps = {
  placement: "top",
  variant: "small",
};

const SocialLinksColor = () => {
  return (
    <SocialLinksWrapper>
      <Col $xs={12}>
        <Row className="social_icons">
          <CustomTooltip title="Layer5 Discussion Forum" {...tooltipProps}>
            <a
              href="https://discuss.layer5.io"
              target="_blank"
              rel="noreferrer"
            >
              <img height="30px" src={forum_icon} alt="forum" loading="lazy" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Email Layer5 Community" {...tooltipProps}>
            <a
              className="mail_icon"
              href="mailto:community@layer5.io"
              target="_blank"
              rel="noreferrer"
            >
              <img height="30px" src={mail_icon} alt="mail" loading="lazy" />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Join Layer5 on Slack" {...tooltipProps}>
            <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer">
              <img
                className="slack"
                height="30px"
                src={slack_icon}
                alt="slack"
                loading="lazy"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Follow Layer5 on X (Twitter)" {...tooltipProps}>
            <a
              href="https://x.com/layer5"
              target="_blank"
              rel="noreferrer"
              className="footer_twitter"
            >
              <TwitterIcon />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Follow Layer5 on Bluesky" {...tooltipProps}>
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
                loading="lazy"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on GitHub" {...tooltipProps}>
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
                loading="lazy"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on LinkedIn" {...tooltipProps}>
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
                loading="lazy"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on YouTube" {...tooltipProps}>
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
                loading="lazy"
              />
            </a>
          </CustomTooltip>
          <CustomTooltip title="Layer5 on Docker Hub" {...tooltipProps}>
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
                loading="lazy"
              />
            </a>
          </CustomTooltip>
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;
