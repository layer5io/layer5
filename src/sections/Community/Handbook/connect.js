import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import {Link} from "gatsby";
import Point from "./images/bullet.svg";
import TOC from "../../../components/handbook-navigation/index";
import twitter_icon from "../../../assets/images/socialIcons/twitter-light.svg";
import mail_icon from "../../../assets/images/socialIcons/mail_keppel.svg";
import youtube_icon from "../../../assets/images/socialIcons/youtube-light.svg";
import github_icon from "../../../assets/images/socialIcons/github-light.svg";
import linkedin_icon from "../../../assets/images/socialIcons/linkedin-light.svg";
import docker_icon from "../../../assets/images/socialIcons/docker-light.svg";
import slack_icon from "../../../assets/images/socialIcons/slack-light.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";


const Connect= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Connect with Us</h1>
      </div> 
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>Subscribe to Newsletter</h2>
            <p>Don’t miss out on anything, sign up to receive updates on our newest releases, latest blog posts and any relevant information.</p>
            <ul>
              <li><a href="https://meshery.io/subscribe">Meshery mailing</a></li>
              <li><a href="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb">Layer5 mailing</a></li>
              <li><a href="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb">SMP(Service Mesh Performance) mailing</a></li>
            </ul>

            <h2>Mailing Lists</h2>
            <ul>
              <li><a href="mailto:maintainers@layer5.io">Layer5 Maintainers</a></li>
              <li><a href="mailto:discuss-admins@layer5.io">Administrators of discuss.layer5.io</a></li>
              <li><a href="mailto:discuss-moderators@layer5.io">Moderators of discuss.layer5.io</a></li>
              <li><a href="mailto:dev-group@meshery.io">Meshery Developers</a></li>
              <li><a href="mailto:user-group@meshery.io">Meshery Users</a></li>
              <li><a href="http://meshery-dev@meshery.dev">Meshery Contributors</a></li>
              <li><a href="mailto:maintainers@meshery.io">Meshery Maintainers</a></li>
              <li><a href="http://meshery-security-vulns-reports@meshery.dev">Meshery Security and Vulnerability Reports</a></li>
              <li><a href="mailto:community@meshery.io">Meshery Community</a></li>
              <li><a href="mailto:katacoda@layer5.io">Katacoda-Managers</a></li>
              <li><a href="http://developers@nighthawk.dev">Nighthawk Developers</a></li>
              <li><a href="http://maintainers@nighthawk.dev">Nighthawk Maintainers</a></li>
              <li><a href="http://users@nighthawk.dev">Nighthawk Users</a></li>
              <li><a href="mailto:community@smp-spec.io">Service Mesh Performance Community</a></li>
              <li><a href="mailto:maintainers@smp-spec.io">Service Mesh Performance Maintainers</a></li>
              <li><a href="mailto:user-group@smp-spec.io">Service Mesh Performance Users</a></li>
              <li><a href="mailto:community@layer5.io">Layer5 Community</a></li>
              <li><a href="mailto:community-members@layer5.io">Layer5 Community Members</a></li>
            </ul>

            <h2>Calendar</h2>
            <p>Don’t miss out on any of the activities in the community. Join any or all of the weekly meetings subscribing to the <a href="https://layer5.io/community/calendar#meetings">community calendar</a>.</p>

            <h2>Slack Community</h2>
            <p>We are a community of like-minded people with over a thousand members.</p>
            <p>Join our <a href="http://slack.layer5.io/">Slack Workspace</a> “introduce yourself” and interact with the community. There are different channels in the workspace, to engage in, just search for:</p>
            <div className="channels-list">
              <p><a href="https://layer5io.slack.com/archives/CDM0ACDM5">#general</a> - For workspace-wide communication and announcements.</p>
              <p><a href="https://layer5io.slack.com/archives/CFGG6U10E">#meshery</a> - For discussion on topics in and around Meshery.</p>
              <p><a href="https://layer5io.slack.com/archives/C017NA80S66">#meshery-adapters</a> - Discuss topics related to meshery-adapters.</p>
              <p><a href="https://layer5io.slack.com/archives/C011VPREG2Z">#meshery-ci</a> - For discussion on topics related to meshery-ci.</p>
              <p><a href="https://layer5io.slack.com/archives/C010LFFGFFA">#meshery-meshsync</a> - For discussions on issues related to mesh sync.</p>
              <p><a href="https://layer5io.slack.com/archives/C0130BQ4L3T">#mesheryctl</a> - For discussions on Meshery’s CLI</p>
              <p><a href="https://layer5io.slack.com/archives/C019426UBNY">#newcomers</a> - For welcoming first-time contributors and community newcomers.</p>
              <p><a href="https://layer5io.slack.com/archives/CVBGPTFJN">#performance</a> - For discussions related to measuring and evaluating Service Mesh Performance.</p>
              <p><a href="https://layer5io.slack.com/archives/C010H0HE2E6">#smi</a> - For discussions related to Meshery and Service Mesh Interface (SMI).</p>
              <p><a href="https://layer5io.slack.com/archives/C012UMS2MCM">#wasm</a> - For discussions on web assembly, rust, data plane filters.</p>
              <p><a href="https://layer5io.slack.com/archives/C015QJKUMPU">#websites</a> - For discussions related to the UI/UX of <a href="http://layer5.io/">Layer 5</a> project sites.</p>
            </div>

            <h2>Discussion Forum</h2>
            <p>Join us on our service mesh community's <a href="https://discuss.layer5.io">Discussion Forum</a></p>

            <h2>Social Media</h2>
            <p>Layer5 is dedicated to providing the most efficient Service mesh management tool while growing a healthy open-source community. To know more about layer5 and connect with the community, follow and engage with us on our social media accounts.</p>
            <div className="channels-list">
              <p className="channels-para">
                <img className="channels-img" src={twitter_icon} alt="twitter" />&nbsp;&nbsp;
                <a href="https://twitter.com/layer5">@layer5</a>,&nbsp;<a href="https://twitter.com/mesheryio">@mesheryio</a>&nbsp;and&nbsp;<a href="https://twitter.com/smp_spec">@smp_spec</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={mail_icon} alt="mail" />&nbsp;&nbsp;
                <a href="mailto:community@layer5.io">community@layer5.io</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={youtube_icon} alt="youtube" />&nbsp;&nbsp;
                <a href="https://www.youtube.com/c/Layer5io?sub_confirmation=1">Subscribe on Youtube</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={github_icon} alt="github" />&nbsp;&nbsp;
                <a href="https://github.com/layer5io">Layer5io</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={linkedin_icon} alt="linkedin" />&nbsp;&nbsp;
                <a href="https://www.linkedin.com/company/layer5">Layer5</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={docker_icon} alt="docker" />&nbsp;&nbsp;
                <a href="https://hub.docker.com/u/layer5/">Layer5</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={slack_icon} alt="slack" />&nbsp;&nbsp;
                <a href="https://bit.ly/3fXwYPk">Layer5</a>
              </p>
            </div>
          </div>
        </Container>
        <TocPagination />
      </div>
    </HandbookWrapper>
  );
};

export default Connect;