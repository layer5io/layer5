import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { Link } from "gatsby";
import CommunityLogo from "../../../assets/images/community/community-green.svg";
import PatternsLogo from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import LandscapeGreen from "../../../assets/images/landscape/layer5_landscape_green.svg";
import ImageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import DockerExtension from "../../../assets/images/docker-extension/docker-extension-meshery-logo.svg";
import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import ServiceMeshPerformance from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import NightHawkLogo from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import uiuxrLogo from "../../../assets/images/uiuxr/uiuxr.svg";
import writersLogo from "../../../assets/images/writer-program/writer-program-badge.svg";
import kanvasLogo from "../../../assets/images/kanvas/icon-only/kanvas-icon-color.svg";
import MesheryCatalogLogo from "../../../assets/images/meshery/meshery-catalog.svg";
import DocsLogo from "../../../assets/images/docs/docs.svg";
import ApplicationPioneerLogo from "../../../assets/images/application-pioneer/application-pioneer.svg";
import BringABuddyLogo from "../../../assets/images/bring-a-buddy/bring-a-buddy.svg";
import DesignPioneerLogo from "../../../assets/images/design-pioneer/design-pioneer.svg";
import GitOPsWithFriendsLogo from "../../../assets/images/gitops-with-friends/gitops-with-friends.svg";
import HipHackerLogo from "../../../assets/images/hip-hacker/hip-hacker.svg";
import NeedForSpeedLogo from "../../../assets/images/need-for-speed/need-for-speed.svg";
import SharingIsCaringLogo from "../../../assets/images/sharing-is-caring/sharing-is-caring.svg";
import ShippedLogo from "../../../assets/images/shipped/shipped.svg";
import StreamerLogo from "../../../assets/images/streamer/streamer.svg";
import CodeCleanupCrewLogo from "../../../assets/images/code-cleanup-crew/code-cleanup-crew.svg";
import SecuritySentinelLogo from "../../../assets/images/security-sentinel/security-sentinel.png";
import LogevityLegendLogo from "../../../assets/images/longevity-legend/longevity-legend.svg";
import ReviewRockstarLogo from "../../../assets/images/review-rockstar/review-rockstar.svg";
import KanvasSnapshotLogo from "../../../assets/images/kanvas-snapshot/kanvas-snapshot.svg";
import SistentContributorLogo from "../../../assets/images/sistent/badges/sistent-contributor.svg";
import ContinuousContributorLogo from "../../../assets/images/continuous-contributor/continuous-contributor.svg";
import AcademyLogo from "../../../assets/images/academy/academy.svg";

const contents = [
  { id: 0, link: "#Profile Bages", text: "Profile Bages" },
  { id: 1, link: "#Membership", text: "Membership to GitHub" },
  {
    id: 2,
    link: "#Community_member_profile",
    text: "Community Member Profile",
  },
  { id: 3, link: "#Badges", text: "Community Member Profile Badges" },
  { id: 4, link: "#SocialMedia", text: "Recognition on Social Media Platforms" },
];

const badgeStyle = {
  height: "50px",
  width: "50px",
  verticalAlign: "middle",
  marginRight: "1rem",
};

const badgeListStyle = {
  listStyleType: "none",
};

const recognitionsstyle = {
  marginBottom: "0.5rem",
};
const RecognitionPage = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Recognizing and Appreciating Community Members</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Community Guidelines">
              <h2 id="communityGuidelines">Your Efforts Do Not Go Unnoticed or Unappreciated</h2>
            </a>
            <p>
              As an open source-first community, we very much appreciate the engagement of individuals within the Layer5 community. We wouldn't be here without you. Our success is a collective one.Consequently, we are quite intentional about defining and encouraging the journey for each individual community member. No small part of their journey is that of recognizing their accomplishments and publicly celebrating their accolades. We do so in a number of ways.
            </p>
            <a id="Membership">
              <h3>Membership to the Github organizations</h3>
            </a>
            <p>
              Membership to the Github organizations is a significant milestone for contributors who have shown persistent commitment and dedication to Layer5 projects. It is not solely about writing code but rather the consistency of engagement and alignment of mentality. Those who have been actively involved in the community for several months, making updates, helping others, attending meetings, and demonstrating a willingness to learn and share their knowledge, are the ones who are likely to receive an invite. Such individuals demonstrate a genuine desire to improve themselves, others, and the projects they are working on. Depending on the number of contributions made across the five GitHub organizations of Layer5, contributors can expect to receive an invitation to any or all of these organizations. We value and appreciate the hard work and dedication of our contributors, and we are delighted to reward their efforts with access to our Github organizations. Our <Link to="https://layer5.io/community/community-managers">Community Managers</Link> and <Link to="https://layer5.io/community/meshmates"> MeshMates</Link> recognize potential contributors on a weekly basis and typically invite individuals after 6 to 8 weeks of continuous, active participation.
            </p>
            <a id="Community_member_profile">
              <h3>
                <Link to="/community/members">Community Member Profiles</Link>
              </h3>
            </a>
            <p>
              Once a contributor joins the Layer5 community by filling in the
              community member form, they are automatically classified as
              members of Layer5. Although, you earn a member profile after
              consistent contributions to the community for and projects. You
              can find out more about the Members profile on the Layer5 website.
            </p>
            <p>Member profiles carry a number of specific designations, depending upon how a community member is participating. One of those designations is that of whether the member is actively particpating or has gone dormant. We define "active" and "inactive" members in the following way:</p>
            <ul>
              <li><b>Active</b> - Members who are engaged and participating in any aspect of the community and/or its projects. Activities vary broadly from meeting attendance to helping other contributors to using and providing feedback on projects, to code contribution, and so on.
              </li>
              <li><b>Inactive</b>  - Members who have previously engaged but have not participated in the community or projects within ~two months.</li>
            </ul>
            <a id="Badges">
              <h3 style={recognitionsstyle}>Community Member Profile Badges</h3>
            </a>
            <p>
              Badges are awarded to community members who have been consistently engaged and impactful within a given area of the community or on a specific project. Every community member, whether contributing with code or not, has the opportunity to obtain any number of badges of recognition of their efforts. Community members are encouraged to collect the whole set!
            </p>
            <div style={{ overflowX: "auto" }}>
              <h4>Activity Badges</h4>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--text-color, #ddd)", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Badge</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Name</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Badge Key</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={DesignPioneerLogo} style={badgeStyle} alt="Design Pioneer" /></td>
                    <td style={{ padding: "12px" }}><b>Design Pioneer</b></td>
                    <td style={{ padding: "12px" }}><code>first-design</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the Layer5 cloud users when they create their first design.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ApplicationPioneerLogo} style={badgeStyle} alt="Application Pioneer" /></td>
                    <td style={{ padding: "12px" }}><b>Application Pioneer</b></td>
                    <td style={{ padding: "12px" }}><code>first-application</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the Layer5 cloud users when they create their first application.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={SharingIsCaringLogo} style={badgeStyle} alt="Sharing is Caring" /></td>
                    <td style={{ padding: "12px" }}><b>Sharing is Caring</b></td>
                    <td style={{ padding: "12px" }}><code>first-share</code></td>
                    <td style={{ padding: "12px" }}>This badge is awarded upon first-time sharing one of your designs.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ShippedLogo} style={badgeStyle} alt="Shipped" /></td>
                    <td style={{ padding: "12px" }}><b>Shipped</b></td>
                    <td style={{ padding: "12px" }}><code>first-deployment</code></td>
                    <td style={{ padding: "12px" }}>This badge is awarded upon the success of your first design deployment.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={NeedForSpeedLogo} style={badgeStyle} alt="Need for Speed" /></td>
                    <td style={{ padding: "12px" }}><b>Need for Speed</b></td>
                    <td style={{ padding: "12px" }}><code>need-for-speed</code></td>
                    <td style={{ padding: "12px" }}>This badge is awarded upon successful execution of your first performance test.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={HipHackerLogo} style={badgeStyle} alt="Hip Hacker" /></td>
                    <td style={{ padding: "12px" }}><b>Hip Hacker</b></td>
                    <td style={{ padding: "12px" }}><code>first-interactive-terminal-session</code></td>
                    <td style={{ padding: "12px" }}>First Interactive Terminal Session - awarded the first time that you establish an interactive terminal session with a Kubernetes Pod.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={StreamerLogo} style={badgeStyle} alt="Streamer" /></td>
                    <td style={{ padding: "12px" }}><b>Streamer</b></td>
                    <td style={{ padding: "12px" }}><code>first-log-streaming-session</code></td>
                    <td style={{ padding: "12px" }}>First Log Streaming Session - awarded the first time that you stream logs from a Kubernetes Pod.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={GitOPsWithFriendsLogo} style={badgeStyle} alt="GitOps with Friends" /></td>
                    <td style={{ padding: "12px" }}><b>GitOps with Friends</b></td>
                    <td style={{ padding: "12px" }}><code>first-collaborator</code></td>
                    <td style={{ padding: "12px" }}>First Collaborator - awarded the first time a collaborator saves changes to one of your designs.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={BringABuddyLogo} style={badgeStyle} alt="Bring a Buddy" /></td>
                    <td style={{ padding: "12px" }}><b>Bring a Buddy</b></td>
                    <td style={{ padding: "12px" }}><code>bring-a-buddy</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the users who invite someone to Layer5 cloud.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={CodeCleanupCrewLogo} style={badgeStyle} alt="Code Cleanup Crew" /></td>
                    <td style={{ padding: "12px" }}><b>Code Cleanup Crew</b></td>
                    <td style={{ padding: "12px" }}><code>code-cleanup-crew</code></td>
                    <td style={{ padding: "12px" }}>Awarded to contributors who help maintain code quality and cleanliness.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={SecuritySentinelLogo} style={badgeStyle} alt="Security Sentinel" /></td>
                    <td style={{ padding: "12px" }}><b>Security Sentinel</b></td>
                    <td style={{ padding: "12px" }}><code>security-sentinel</code></td>
                    <td style={{ padding: "12px" }}>Awarded to individuals who contribute to identifying and fixing security vulnerabilities.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={LogevityLegendLogo} style={badgeStyle} alt="Longevity Legend" /></td>
                    <td style={{ padding: "12px" }}><b>Longevity Legend</b></td>
                    <td style={{ padding: "12px" }}><code>longevity-legend</code></td>
                    <td style={{ padding: "12px" }}>Awarded for long-term, sustained contributions to the project over the years.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ReviewRockstarLogo} style={badgeStyle} alt="Review Rockstar" /></td>
                    <td style={{ padding: "12px" }}><b>Review Rockstar</b></td>
                    <td style={{ padding: "12px" }}><code>review-rockstar</code></td>
                    <td style={{ padding: "12px" }}>Awarded to individuals who provide thorough and valuable code reviews.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={KanvasSnapshotLogo} style={badgeStyle} alt="Kanvas Snapshot" /></td>
                    <td style={{ padding: "12px" }}><b>Kanvas Snapshot</b></td>
                    <td style={{ padding: "12px" }}><code>meshmap-snapshot</code></td>
                    <td style={{ padding: "12px" }}>Awarded to users upon creation of their first infrastructure screenshot directly in their pull request.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ContinuousContributorLogo} style={badgeStyle} alt="Continuous Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Continuous Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>continuous-contributor</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={SistentContributorLogo} style={badgeStyle} alt="Sistent Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Sistent Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>sistent-contributor</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the Sistent project as a recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/gitops-connected/gitops-connected.png" style={badgeStyle} alt="GitOps Connected" /></td>
                    <td style={{ padding: "12px" }}><b>GitOps Connected</b></td>
                    <td style={{ padding: "12px" }}><code>gitops-connected</code></td>
                    <td style={{ padding: "12px" }}>Awarded to users upon establishment of a connection with Meshery GitHub App.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/meshmate/meshmate.png" style={badgeStyle} alt="Meshmate" /></td>
                    <td style={{ padding: "12px" }}><b>Meshmate</b></td>
                    <td style={{ padding: "12px" }}><code>meshmate</code></td>
                    <td style={{ padding: "12px" }}>Awarded to community members who actively support and guide others, embodying the spirit of collaboration and knowledge sharing in the Layer5 community.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/hacktoberfest-contributor/hacktoberfest-contributor.png" style={badgeStyle} alt="Hacktoberfest Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Hacktoberfest Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>hacktoberfest-contributor</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the contributors who contribute to any Layer5 project during Hacktoberfest.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/hacktoberfest-contributor-2024/layer5-hacktoberfest-badge-2024.png" style={badgeStyle} alt="Hacktoberfest '24 Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Hacktoberfest '24 Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>hacktoberfest-24-contributor</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the contributors who contribute to any Layer5 project during Hacktoberfest 2024.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/hacktoberfest-contributor-2025/hacktoberfest2025-badge.png" style={badgeStyle} alt="Hacktoberfest 2025 Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Hacktoberfest 2025 Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>hacktoberfest25</code></td>
                    <td style={{ padding: "12px" }}>Awarded to community members who participate in Hacktoberfest 2025 by making meaningful contributions to Layer5 projects during the month of October 2025.</td>
                  </tr>
                </tbody>
              </table>

              <h4>Project Badges</h4>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--text-color, #ddd)", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <th style={{ textAlign: "left", padding: "12px" }}>Badge</th>
                    <th style={{ textAlign: "left", padding: "12px" }}>Name</th>
                    <th style={{ textAlign: "left", padding: "12px" }}>Badge Key</th>
                    <th style={{ textAlign: "left", padding: "12px" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ImageHubLogo} style={badgeStyle} alt="Image Hub" /></td>
                    <td style={{ padding: "12px" }}><b>Image Hub</b></td>
                    <td style={{ padding: "12px" }}><code>image-hub</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the Image Hub project in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={kanvasLogo} style={badgeStyle} alt="Kanvas" /></td>
                    <td style={{ padding: "12px" }}><b>Kanvas</b></td>
                    <td style={{ padding: "12px" }}><code>kanvas</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the <Link to="/cloud-native-management/kanvas">Kanvas</Link> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={ServiceMeshPerformance} style={badgeStyle} alt="Cloud Native Performance" /></td>
                    <td style={{ padding: "12px" }}><b>Cloud Native Performance</b></td>
                    <td style={{ padding: "12px" }}><code>cloud-native-performance</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the Cloud Native Performance project. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={AcademyLogo} style={badgeStyle} alt="Academy" /></td>
                    <td style={{ padding: "12px" }}><b>Academy</b></td>
                    <td style={{ padding: "12px" }}><code>academy</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the <Link to="https://cloud.layer5.io/academy/overview">Layer5 Academy</Link> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/meshmap/meshmap.svg" style={badgeStyle} alt="MeshMap" /></td>
                    <td style={{ padding: "12px" }}><b>MeshMap</b></td>
                    <td style={{ padding: "12px" }}><code>meshmap</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the MeshMap project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/meshsync/meshsync.png" style={badgeStyle} alt="MeshSync" /></td>
                    <td style={{ padding: "12px" }}><b>MeshSync</b></td>
                    <td style={{ padding: "12px" }}><code>meshsync</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to MeshSync in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={CommunityLogo} style={badgeStyle} alt="Community" /></td>
                    <td style={{ padding: "12px" }}><b>Community</b></td>
                    <td style={{ padding: "12px" }}><code>community</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={MesheryLogo} style={badgeStyle} alt="Meshery" /></td>
                    <td style={{ padding: "12px" }}><b>Meshery</b></td>
                    <td style={{ padding: "12px" }}><code>meshery</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={MesheryOperator} style={badgeStyle} alt="Meshery Operator" /></td>
                    <td style={{ padding: "12px" }}><b>Meshery Operator</b></td>
                    <td style={{ padding: "12px" }}><code>meshery-operator</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={PatternsLogo} style={badgeStyle} alt="Patterns" /></td>
                    <td style={{ padding: "12px" }}><b>Patterns</b></td>
                    <td style={{ padding: "12px" }}><code>patterns</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the <Link to="/learn/service-mesh-books/service-mesh-patterns">Cloud Native Patterns</Link> project in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={LandscapeGreen} style={badgeStyle} alt="Landscape" /></td>
                    <td style={{ padding: "12px" }}><b>Landscape</b></td>
                    <td style={{ padding: "12px" }}><code>landscape</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the layer5.io website.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={writersLogo} style={badgeStyle} alt="Writer's Program" /></td>
                    <td style={{ padding: "12px" }}><b>Writer's Program</b></td>
                    <td style={{ padding: "12px" }}><code>writers-program</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={NightHawkLogo} style={badgeStyle} alt="Nighthawk" /></td>
                    <td style={{ padding: "12px" }}><b>Nighthawk</b></td>
                    <td style={{ padding: "12px" }}><code>nighthawk</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={uiuxrLogo} style={badgeStyle} alt="UI/UX" /></td>
                    <td style={{ padding: "12px" }}><b>UI/UX</b></td>
                    <td style={{ padding: "12px" }}><code>ui-ux</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={MesheryCatalogLogo} style={badgeStyle} alt="Meshery Catalog" /></td>
                    <td style={{ padding: "12px" }}><b>Meshery Catalog</b></td>
                    <td style={{ padding: "12px" }}><code>meshery-catalog</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the <a href="https://meshery.io/catalog">Meshery Catalog</a> of Meshery project in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={DockerExtension} style={badgeStyle} alt="Docker Extension" /></td>
                    <td style={{ padding: "12px" }}><b>Docker Extension</b></td>
                    <td style={{ padding: "12px" }}><code>docker-extension</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the Docker Extension of meshery project in recognition and appreciation of their efforts.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src={DocsLogo} style={badgeStyle} alt="Docs" /></td>
                    <td style={{ padding: "12px" }}><b>Docs</b></td>
                    <td style={{ padding: "12px" }}><code>docs</code></td>
                    <td style={{ padding: "12px" }}>Awarded to the community members who make consistent and impactful contributions to the <a href="https://docs.meshery.io/">Meshery docs</a> in recognition and appreciation of their efforts.</td>
                  </tr>
                </tbody>
              </table>

              <h4>Special Recognition Badges</h4>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--text-color, #ddd)", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Badge</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Name</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Badge Key</th>
                    <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/static/certification-program-6ea140e34c1dd08074ec896d0b98c0f8.png" style={badgeStyle} alt="Certified Meshery Contributor" /></td>
                    <td style={{ padding: "12px" }}><b>Certified Meshery Contributor</b></td>
                    <td style={{ padding: "12px" }}><code>certified-meshery-contributor</code></td>
                    <td style={{ padding: "12px" }}>Recognition of contributor expertise.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/cncf-ambassador/cncf-ambassador.png" style={badgeStyle} alt="CNCF Ambassador" /></td>
                    <td style={{ padding: "12px" }}><b>CNCF Ambassador</b></td>
                    <td style={{ padding: "12px" }}><code>cncf-ambassador</code></td>
                    <td style={{ padding: "12px" }}>This is a special edition badge awarded to CNCF Ambassadors.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}><img src="https://badges.layer5.io/assets/badges/docker-captain/docker-captain.png" style={badgeStyle} alt="Docker Captain" /></td>
                    <td style={{ padding: "12px" }}><b>Docker Captain</b></td>
                    <td style={{ padding: "12px" }}><code>docker-captain</code></td>
                    <td style={{ padding: "12px" }}>This is a special edition badge awarded to Docker Captains.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a id="how-to-earn-badges">
              <h3>How can I Earn Badges?</h3>
            </a>
            <p>
              Earning Layer5 badges is both rewarding and straightforward.  As you continue to contribute to our projects, your accomplishments will be recognized with badges that reflect your dedication and expertise.
              Each badge is tied to specific activities. Here are some ways you can earn Layer5 Badges:
            </p>
            <p>
              For users, badges for activities such as using our projects, talking about the projects, sharing your successes and what you like about them. For contributors, badges include activities such as submitting code, reviewing Pull Requests, assisting with documentation, participating in community events, and more. As you accumulate contributions in various areas, you'll begin to unlock badges that showcase your multifaceted involvement. These badges will be prominently displayed on your <a href="https://cloud.layer5.io">Layer5 Cloud</a> profile, visually representing your journey. Not only does this serve as a source of personal pride, but it also helps others in the community recognize your expertise and dedication.
              <ul>
                <li>
                  Activity Badges are the badges that are assigned when a user completes a task like sharing a design, creating a design for the first time, etc.
                </li>
              </ul>
              <ul>
                <li>
                  Project Badges are assigned to the user when a user contributes to a particular project.
                </li>
              </ul>
              <p>The description and criteria for all the badges are listed <a href="#Badges">above</a>.</p>
            </p>
            <a id="how-to-share-badges">
              <h3>How can I Share My Badge On My Profile?</h3>
            </a>
            <p>
              To share your badges on other social profiles, utilize the provided embedded code and direct share functionality. Access your badges from the Layer5 Cloud profile badges section, and then use it to post your achievements on social media platforms seamlessly. This enables you to showcase your Layer5 contributions and milestones to a wider audience:
            </p>
            <p>To display badge on your GitHub profile, follow below steps: </p>
            <ul>
              <li>
                Visit your{" "}
                <a href="https://cloud.layer5.io">Layer5 Cloud</a>{" "}
                Profile to see the badges
              </li>
              <li>Click on the badge, which you wanted to display</li>
              <li>
                Copy the markdown code by clicking the Embed Code icon
              </li>
              <li>Paste the code in your GitHub profile README.</li>
            </ul>
            <a id="SocialMedia">
              <h3>Recognition on Social Media Platforms</h3>
            </a>
            <p>
              We highly encourage you to share your engagement and contributions to the Layer5 community on social media like LinkedIn and Twitter. We support every contribution by liking your posts and retweeting them. Your contributions and engagement in different ways are what make us a successful and collaborative open-source community. We love celebrating your every accomplishment with Layer5 publicly and encourage you in every way we can.
            </p>
          </div>
          <TocPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default RecognitionPage;
