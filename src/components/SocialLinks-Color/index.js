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
import { Tooltip } from "react-tooltip";
import SocialLinksWrapper from "./sociallinkscolor.style";

const SocialLinksColor = () => {
  return (
    <SocialLinksWrapper>
      <Col $xs={12}>
        <Row className="social_icons">
          <a href="https://discuss.layer5.io" target="_blank" rel="noreferrer" data-tooltip-id="forum" data-tooltip-content="Layer5 Discussion Forum">
            <img height="30px" src={forum_icon} alt="forum" />
          </a>
          <Tooltip id="forum" place="top" variant="dark" />
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="mail"
            data-tooltip-content="Email Layer5 Community"
          >
            <img height="30px" src={mail_icon} alt="mail" />
          </a>
          <Tooltip id="mail" place="top" variant="dark" />
          <a href="https://slack.layer5.io/" target="_blank" rel="noreferrer" data-tooltip-id="slack" data-tooltip-content="Layer5 Slack">
            <img className="slack" height="30px" src={slack_icon} alt="slack" />
          </a>
          <Tooltip id="slack" place="top" variant="dark" />
          <a
            href="https://x.com/layer5"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="twitter"
            data-tooltip-content="Layer5 Twitter"
            className="footer_twitter"
          >
            <TwitterIcon />
          </a>
          <Tooltip id="twitter" place="top" variant="dark" />
          <a
            className="bluesky_icon"
            href="https://bsky.app/profile/layer5.bsky.social"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="bluesky"
            data-tooltip-content="Layer5 Bluesky"
          >
            <img
              className="bluesky"
              height="30px"
              src={bluesky_icon}
              alt="bluesky"
            />
          </a>
          <Tooltip id="bluesky" place="top" variant="dark" />
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="github"
            data-tooltip-content="Layer5 GitHub"
            className="github"
          >
            <img height="30px" src={github_icon} alt="github" />
          </a>
          <Tooltip id="github" place="top" variant="dark" />
          <a
            href="https://www.linkedin.com/company/layer5"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="linkedin"
            data-tooltip-content="Layer5 LinkedIn"
          >
            <img
              className="linkedin"
              height="30px"
              src={linkedin_icon}
              alt="linkedin"
            />
          </a>
          <Tooltip id="linkedin" place="top" variant="dark" />
          <a
            className="youtube_icon"
            href="https://youtube.com/Layer5io?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="youtube"
            data-tooltip-content="Layer5 YouTube"
          >
            <img
              className="youtube"
              height="30px"
              src={youtube_icon}
              alt="youtube"
            />
          </a>
          <Tooltip id="youtube" place="top" variant="dark" />
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/layer5/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="docker"
            data-tooltip-content="Layer5 Docker"
          >
            <img
              className="docker"
              height="30px"
              src={docker_icon}
              alt="docker"
            />
          </a>
          <Tooltip id="docker" place="top" variant="dark" />
        </Row>
      </Col>
    </SocialLinksWrapper>
  );
};

export default SocialLinksColor;
