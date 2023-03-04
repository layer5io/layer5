import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { Link } from "gatsby";
import CommunityLogo from "../../../assets/images/community/community-green.svg";
import PatternsLogo from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import LandscapeGreen from "../../../assets/images/landscape/layer5_landscape_green.svg";
import ImageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import ServiceMeshPerformance from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import NightHawkLogo from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import uiuxrLogo from "../../../assets/images/uiuxr/uiuxr.svg";
import writersLogo from "../../../assets/images/writer-program/writer-program-badge.svg";
import meshmapLogo from "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";

const contents = [
  { id: 0, link: "#Profile Bages", text: "Profile Bages" },
  { id: 1, link: "#Membership", text: "Membership to GitHub" },
  { id: 2, link: "#Badges", text: "Community Member Profile Badges" },
  {
    id: 3,
    link: "#Community_member_profile",
    text: "Community Member Profile",
  },
  { id: 4, link: "#SocialMedia", text: "Recognition on Social Media Platforms" },
];

const badgeStyle = {
  height: "25px",
  width: "25px",
  marginRight: "5px",
  verticalAlign: "middle",
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
            As an open source-first community, we very much appreciate the engagement of individuals within the Layer5 community. We wouldn't be here without you. Our success is a collective one.Consequently, we are quite intentional about defining and encouraging the journey for each individual community member. No small part of their journey is that of recongizing their accomplishments and publicly celebrating their accolades. We do so in a number of ways.
            </p>
            <a id="Membership">
              <h3>Membership to the Github organizations</h3>
            </a>
            <p>
              As you continue making your contributions to Layer5 projects, you
              will be given an invite to the github org for the project you have
              been diligently contributing to. This invitation can be from all
              four github orgs of Layer5 depending on the number of
              contributions you make.
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
              <li>
                <img src={CommunityLogo} style={badgeStyle} />
                <b>Community</b> - awarded given to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role.
              </li>
              <li>
                <img src={ImageHubLogo} style={badgeStyle} />
                <b>Image Hub</b> - awarded community members who make consistent and impactful contributions the Image Hub project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={LandscapeGreen} style={badgeStyle} />
                <b>Landscape</b> - awarded community members who make consistent and impactful contributions to the have made impactful contributions to the layer5.io website.
              </li>
              <li>
                <img src={MesheryLogo} style={badgeStyle} />
                <b>Meshery</b> - awarded community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={MesheryOperator} style={badgeStyle} />
                <b>Meshery Operator</b> - awarded community members who make consistent and impactful contributions to the have made impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={meshmapLogo} style={badgeStyle} />
                <b>MeshMap</b> - awarded community members who make consistent and impactful contributions the <Link to="/cloud-native-management/meshmap">MeshMap</Link> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={NightHawkLogo} style={badgeStyle} />
                <b>Nighthawk</b> - awarded community members who make consistent and impactful contributions the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={PatternsLogo} style={badgeStyle} />
                <b>Patterns</b> - awarded community members who make consistent and impactful contributions to the have made impactful contributions to <a href="https://meshery.io/catalog">Meshery Catalog</a> and or the <Link to="/learn/service-mesh-books/service-mesh-patterns">Service Mesh Patterns</Link> project in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={ServiceMeshPerformance} style={badgeStyle} />
                <b>Service Mesh Performance</b> - awarded community members who make consistent and impactful contributions to the Service Mesh Performance project. Community members who earn this badge occasionally become a project maintainer.
              </li>
              <li>
                <img src={uiuxrLogo} style={badgeStyle} />
                <b>UI/UX</b> - awarded community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts.
              </li>
              <li>
                <img src={writersLogo} style={badgeStyle} />
                <b>Writer's Program</b> - awarded community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts.
              </li>
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
