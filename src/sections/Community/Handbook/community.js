import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import {Link} from "gatsby";
import Point from "./images/bullet.svg";
import CommunityLogo from "../../../assets/images/community/community-green.svg";
import PatternsLogo from "./images/patterns-logo.png";
import LandscapeGreen from "../../../assets/images/landscape/layer5_landscape_green.svg";
import ImageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import ServiceMeshPerformance from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import GetNightHawkLogo from "../../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";

const badgeStyle = {
  height: "25px",
  width: "25px",
  marginRight: "5px"
};
const badgeListStyle = {
  listStyleType: "none"
};

const CommunityGuide= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2 id="communityGuidelines">Community Guidelines</h2>
            <p>
              Welcome to the Layer5 community! We’re happy to have you here and handhold you for your first contribution. Here are some tips to help you get started:
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>For Easy Identification -</strong> When setting up your slack workspace, your display name should be the same as your GitHub username for easy identification,
              engage freely, and in whatever form you will: as a listener, user, contributor, maintainer, ambassador, or bystander. Involvement in any way is warmly received.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Familiarize with the community -</strong> As you get to familiarize yourself with the community, know that there are multiple initiatives for you to explore.
              Some initiatives have working groups that meet at different times each week, while others use the weekly community meeting as their place of discussion. Details of each can be found on the <a href="https://bit.ly/2SbrRhe">community calendar</a>.
              Everyone is welcome to join the calls and engage with other community members over Slack, the mailing list, and so on.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Familiarize with the projects -</strong> The following is a sample of the many active, ongoing community projects. One way of doing so is to review the Layer5 Repository Overview section of this handbook to get a better understanding of each project.
              This document will help you to understand the projects based on their technology domain(s). Be sure to star the community’s <a href="https://github.com/layer5io">repositories</a> on GitHub!
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Be friendly and open-minded -</strong> We encourage you to be welcoming to new collaborators and those just getting started. Other contributors might not have the same degree
              of experience or background as you, but that doesn't mean they can't provide useful ideas.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Be honest -</strong> “A half-truth is a whole lie.” Being truthful allows you to reach a better agreement. As a result, be open and honest about who you are, what you do, and how you want to accomplish it.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Be respectful and inclusive -</strong> We are a diverse group of people with diverse backgrounds and opinions. We expect everyone to be civil and professional in their activities. Disrespectful behavior is not tolerated.
              Do not publish anything that would be considered insulting, abusive, or hate speech by a reasonable person.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Collaborate and Contribute -</strong> Members are expected to attend community and workgroup meetings, find ways to help, check up on our Github page regularly etc. Within the community and outside, we encourage teamwork.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>Resources -</strong> Be sure to access the resources in the <a href="https://drive.google.com/drive/u/0/folders/0ABH8aabN4WAKUk9PVA">community drive</a> and sign-up on the <a href="https://layer5.io/subscribe">community mailer</a>.
              Ask for a copy of <a href="https://layer5.io/books/the-enterprise-path-to-service-mesh-architectures">The Enterprise Path to Service Mesh Architectures</a>.
            </p>
            <p>
              <img className="logo" src={Point} />
              <strong>We do not allow:</strong>
              <ul >
                <li>Threats of violence</li>
                <li>Sexually obscene content</li>
                <li>Bullying</li>
                <li>Harassment</li>
                <li>Invasion of privacy </li>
                <li>Misinformation</li>
                <li>Please refer to the <Link to="/community/handbook/code-of-conduct">Code of Conduct</Link> for more details.</li>
              </ul>
            </p>

            <h3>Community Manager</h3>
            <p>
              A Community Manager is a  person who has an innate drive to contribute to the community's prosperity. A community manager serves as a link between the organisation and its community, overcoming obstacles as they arise—or even before they arise!—by
              collaborating with other departments and the community to find solutions that benefit the entire community.
            </p>
            <h3>Meshmates</h3>
            <p>
              Layer5 MeshMates are committed to helping community members be successful contributors. MeshMates aid in identifying areas of projects to engage within, working groups to join, and helping community members grow in their open-source and cloud-native knowledge.
              By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.
            </p>
            <p>
              MeshMate is a distinction that Layer5 awards select members of the community who innately align with the Layer5 culture of helping others, paying it forward, and have a commitment to sharing their knowledge of Layer5 projects with the community.
              MeshMates are Layer5 ambassadors (not employees) and their commitment to helping others and sharing their expertise has a huge impact on the Layer5 community – don’t hesitate to reach out to them!
            </p>

            <h3>Contributors</h3>
            <p>
              As you contribute to the Layer5 community, do follow the <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md">contributing guidelines</a> to make sure you are on the right track. For information about the community, please refer to the <Link to="/community/handbook/community/#communityGuidelines">community guidelines</Link>.
              Always remember to reach out to a <Link to="/community/meshmates">MeshMate</Link> when in doubt or in need of a helping hand.
            </p>

            <h3>Badges</h3>
            <p>
            As you continue your contributions to this community, you stand a chance to receive a badge in acknowledgement of your engagement within and/or contribution to the representative project or (sub-)community. A variety of badges exist so that community members and their efforts may be affiliated with a particular project or community initiative.
            </p>
            <ul style={badgeListStyle}>
              <li><img src={CommunityLogo} style={badgeStyle}/>Community</li>
              <li><img src={LandscapeGreen} style={badgeStyle}/>Landscape</li>
              <li><img src={ImageHubLogo} style={badgeStyle}/>Image Hub</li>
              <li><img src={MesheryLogo} style={badgeStyle}/>Meshery</li>
              <li><img src={MesheryOperator} style={badgeStyle}/>Meshery Operator</li>
              <li><img src={ServiceMeshPerformance} style={badgeStyle}/>Service Mesh Performance</li>
              <li><img src={GetNightHawkLogo} style={badgeStyle}/>GetNighthawk</li>
              <li><img src={PatternsLogo} style={badgeStyle}/>Patterns</li>
            </ul>

            <h2>Path to Leadership</h2>
            <h3>What does leadership mean to the Layer5 community?</h3>
            <p>
              A leader is someone who can contribute to the Layer5 Community's growth by being accountable, participating in decision-making, and feeling responsible.
            </p>
            <h3>What does it take to be a leader?</h3>
            <h4><strong>First, you have to be a MeshMate</strong></h4>
            <p>
              Roles/Responsibilities
              <ul>
                <li>Increasing awareness of the community to others</li>
                <li>Helping newbies in the community get familiar with all of the projects</li>
                <li>Mentoring members of the community</li>
                <li>Facilitate newcomers call</li>
              </ul>
            </p>
            <h4><strong>Maintainer</strong></h4>
            <p>
              Roles/Responsibilities
              <ul>
                <li>Send a reminder about meetings</li>
                <li>Prepare meetings</li>
                <li>Lead meetings</li>
                <li>Make sure meeting minutes are kept</li>
                <li>Facilitate the creation and advancement of metrics/software</li>
                <li>Answer questions about the progress of Layer5 projects</li>
                <li>Report on weekly community call progress on a project</li>
                <li>Review issues on the repository</li>
                <li>Review and merge pull requests</li>
                <li>Regularly check the repository for stale content</li>
                <li>Monitor issue tracker and pull requests</li>
              </ul>
            </p>
            <p><strong>Checklist before becoming a Maintainer</strong></p>
            <input type="checkbox" name="maintainer-checklist-1" id="maintainer-checklist-1"/>
            <label htmlFor="maintainer-checklist-1">
                Makes consistent contributions within the Layer5 community
            </label>
            <input type="checkbox" name="maintainer-checklist-2" id="maintainer-checklist-2"/>
            <label htmlFor="maintainer-checklist-2">
                Has the ability to commit directly to a project repository
            </label>
            <input type="checkbox" name="maintainer-checklist-3" id="maintainer-checklist-3"/>
            <label htmlFor="maintainer-checklist-3">
                Holds knowledge of Layer5 project performance, and software
            </label>
            <input type="checkbox" name="maintainer-checklist-3" id="maintainer-checklist-4"/>
            <label htmlFor="maintainer-checklist-4">
                Attends community meeting
            </label>
            <input type="checkbox" name="maintainer-checklist-5" id="maintainer-checklist-5"/>
            <label htmlFor="maintainer-checklist-5">
                Holds good knowledge in helping others achieve their goals
            </label>
            <input type="checkbox" name="maintainer-checklist-6" id="maintainer-checklist-6"/>
            <label htmlFor="maintainer-checklist-6">
                Has knowledge of Git and GitHub
            </label>
            <input type="checkbox" name="maintainer-checklist-7" id="maintainer-checklist-7"/>
            <label htmlFor="maintainer-checklist-7">
                Understands the workflow of the Issues and Pull Requests
            </label><br/>

            <h4><strong>Community Manager</strong></h4>
            <p>
              Roles/Responsibilities
              <ul>
                <li>Moderating, engaging, and supporting community members on platforms like Slack, GitHub etc.</li>
                <li>Building healthy relationships among community members.</li>
                <li>Celebrating community successes, sending swag, and recognizing top contributors.</li>
                <li>Regularly updating the community on the metrics performance.</li>
                <li>Creating and managing new community programs.</li>
                <li>Organizing meetups, events, and other engagements.</li>
                <li>Coordinating with other departments—such as product, engineering, and content marketing—to support community initiatives.</li>
              </ul>
            </p>
            <p><strong>Checklist before becoming a Community Manager</strong></p>
            <input type="checkbox" name="CM-checklist-1" id="CM-checklist-1"/>
            <label htmlFor="CM-checklist-1">
              Prior technical community management experience
            </label>
            <input type="checkbox" name="CM-checklist-2" id="CM-checklist-2"/>
            <label htmlFor="CM-checklist-2">
              Self-motivated with the ability to manage multiple competing priorities
            </label>
            <input type="checkbox" name="CM-checklist-3" id="CM-checklist-3"/>
            <label htmlFor="CM-checklist-3">
              A growth mindset and an approach to new information and knowledge with curiosity
            </label>
            <input type="checkbox" name="CM-checklist-4" id="CM-checklist-4"/>
            <label htmlFor="CM-checklist-4">
              A challenge seeker who desires and readily takes on new challenges and works towards solutions
            </label>
            <input type="checkbox" name="CM-checklist-5" id="CM-checklist-5"/>
            <label htmlFor="CM-checklist-5">
              Good communication skills
            </label>
            <input type="checkbox" name="CM-checklist-6" id="CM-checklist-6"/>
            <label htmlFor="CM-checklist-6">
              Strong relational skills
            </label>
            <input type="checkbox" name="CM-checklist-7" id="CM-checklist-7"/>
            <label htmlFor="CM-checklist-7">
              An understanding of how contemporary open-source projects function
            </label>
            <br/>
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default CommunityGuide;
