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
import ContinuousContributorLogo from "../../../assets/images/continuous-contributor/continuous-contributor.svg";

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
  height: "25px",
  width: "25px",
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
            <ul style={badgeListStyle}>
              <p><b>Activity badges:</b></p>
              <li>
                <img src={DesignPioneerLogo} style={badgeStyle} />
                <b>Design Pioneer</b> - awarded to the Layer5 cloud users when they create their first design.
              </li>
              <li>
                <img src={ApplicationPioneerLogo} style={badgeStyle} />
                <b>Application Pioneer</b> - awarded to the Layer5 cloud users when they create their first application.
              </li>
              <li>
                <img src={SharingIsCaringLogo} style={badgeStyle} />
                <b>Sharing is Caring</b> - This badge is awarded upon first-time sharing one of your designs.
              </li>
              <li>
                <img src={ShippedLogo} style={badgeStyle} />
                <b>Shipped</b> - This badge is awarded upon the success of your first design deployment.
              </li>
              <li>
                <img src={NeedForSpeedLogo} style={badgeStyle} />
                <b>Need for Speed</b> - This badge is awarded upon successful execution of your first performance test.
              </li>
              <li>
                <img src={HipHackerLogo} style={badgeStyle} />
                <b>Hip Hacker</b> - First Interactive Terminal Session - awarded the first time that you establish an interactive terminal session with a Kubernetes Pod.
              </li>
              <li>
                <img src={StreamerLogo} style={badgeStyle} />
                <b>Streamer</b> - First Log Streaming Session - awarded the first time that you stream logs from a Kubernetes Pod.
              </li>
              <li>
                <img src={GitOPsWithFriendsLogo} style={badgeStyle} />
                <b>GitOps with Friends</b> - First Collaborator - awarded the first time a collaborator saves changes to one of your designs.
              </li>
              <li>
                <img src={BringABuddyLogo} style={badgeStyle} />
                <b>Bring a Buddy</b> - awarded to the users who invite someone to Layer5 cloud.
              </li>
              <li>
                <img src={CodeCleanupCrewLogo} style={badgeStyle} />
                <b>Code Cleanup Crew</b> - awarded to contributors who help maintain code quality and cleanliness.
              </li>
              <li>
                <img src={SecuritySentinelLogo} style={badgeStyle} />
                <b>Security Sentinel</b> - awarded to individuals who contribute to identifying and fixing security vulnerabilities.
              </li>
              <li>
                <img src={LogevityLegendLogo} style={badgeStyle} />
                <b>Longevity Legend</b> - awarded for long-term, sustained contributions to the project over the years.
              </li>
              <li>
                <img src={ReviewRockstarLogo} style={badgeStyle} />
                <b>Review Rockstar</b> - awarded to individuals who provide thorough and valuable code reviews.
              </li>
              <li>
                <img src={KanvasSnapshotLogo} style={badgeStyle} />
                <b>Kanvas Snapshot</b> - awarded to users upon creation of their first infrastructure screenshot directly in their pull request.
              </li>
              <li>
                <img src={ContinuousContributorLogo} style={badgeStyle} />
                <b>Continuous Contributor</b> - awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects in recognition and appreciation of their efforts.
              </li>
              <p><b>Projects:</b></p>
              <li>
                <img src={ImageHubLogo} style={badgeStyle} />
                <b>Image Hub</b> - awarded to the community members who make consistent and impactful contributions to the Image Hub project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={kanvasLogo} style={badgeStyle} />
                <b>Kanvas</b> - awarded to the community members who make consistent and impactful contributions to the <Link to="/cloud-native-management/kanvas">Kanvas</Link> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={ServiceMeshPerformance} style={badgeStyle} />
                <b>Cloud Native Performance</b> - awarded to the community members who make consistent and impactful contributions to the Cloud Native Performance project. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={CommunityLogo} style={badgeStyle} />
                <b>Community</b> - awarded to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role.
              </li>
              <li>
                <img src={MesheryLogo} style={badgeStyle} />
                <b>Meshery</b> - awarded to the community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={MesheryOperator} style={badgeStyle} />
                <b>Meshery Operator</b> - awarded to the community members who make consistent and impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={PatternsLogo} style={badgeStyle} />
                <b>Patterns</b> - awarded to the community members who make consistent and impactful contributions to the <Link to="/learn/service-mesh-books/service-mesh-patterns">Cloud Native Patterns</Link> project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={LandscapeGreen} style={badgeStyle} />
                <b>Landscape</b> - awarded to the community members who make consistent and impactful contributions to the layer5.io website.
              </li>
              <li>
                <img src={writersLogo} style={badgeStyle} />
                <b>Writer's Program</b> - awarded to the community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={NightHawkLogo} style={badgeStyle} />
                <b>Nighthawk</b> - awarded to the community members who make consistent and impactful contributions to the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={uiuxrLogo} style={badgeStyle} />
                <b>UI/UX</b> - awarded to the community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={MesheryCatalogLogo} style={badgeStyle} />
                <b>Meshery Catalog</b> - awarded to the community members who make consistent and impactful contributions to the <a href="https://meshery.io/catalog">Meshery Catalog</a> of Meshery project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={DockerExtension} style={badgeStyle} />
                <b>Docker Extension</b> - awarded to the community members who make consistent and impactful contributions to the Docker Extension of meshery project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={DocsLogo} style={badgeStyle} />
                <b>Docs</b> - awarded to the community members who make consistent and impactful contributions to the <a href="https://docs.meshery.io/">Meshery docs</a> in recognition and appreciation of their efforts.
              </li>
            </ul>
            <a id="how-to-earn-badges">
              <h3>How can I Earn Badges?</h3>
            </a>
            <p>
              Earning Layer5 badges is both rewarding and straightforward.  As you continue to contribute to our projects, your accomplishments will be recognized with badges that reflect your dedication and expertise.
              Each badge is tied to specific activities. Here are some ways you can earn Layer5 Badges:
            </p>
            <p>
              For users, badges for activities such as using our projects, talking about the projects, sharing your successes and what you like about them. For contributors, badges include activities such as submitting code, reviewing Pull Requests, assisting with documentation, participating in community events, and more. As you accumulate contributions in various areas, you'll begin to unlock badges that showcase your multifaceted involvement. These badges will be prominently displayed on your <a href="https://meshery.layer5.io">Layer5 Cloud</a> profile, visually representing your journey. Not only does this serve as a source of personal pride, but it also helps others in the community recognize your expertise and dedication.
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
                <a href="https://meshery.layer5.io">Layer5 Cloud</a>{" "}
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