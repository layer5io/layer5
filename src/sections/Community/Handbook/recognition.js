import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { Link } from "gatsby";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

import BadgeItem from "./badge-item";
import { activityBadges, projectBadges } from "./badges-data";

const contents = [
  { id: 0, link: "#Profile Bages", text: "Profile Bages" },
  { id: 1, link: "#Membership", text: "Membership to GitHub" },
  { id: 2, link: "#Community_member_profile", text: "Community Member Profile" },
  { id: 3, link: "#Badges", text: "Community Member Profile Badges" },
  { id: 4, link: "#SocialMedia", text: "Recognition on Social Media Platforms" },
];

const badgeListStyle = { listStyleType: "none", paddingLeft: 0, marginLeft: 0 };
const recognitionsstyle = { marginBottom: "0.5rem" };

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

            <p><b>Activity badges:</b></p>
            <ul style={badgeListStyle}>
              {activityBadges.map((b, idx) => (
                <BadgeItem key={`activity-${idx}`} {...b} />
              ))}
            </ul>

            <p><b>Projects:</b></p>
            <ul style={badgeListStyle}>
              {projectBadges.map((b, idx) => (
                <BadgeItem key={`project-${idx}`} {...b} />
              ))}
            </ul>

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
                Visit your <a href="https://cloud.layer5.io">Layer5 Cloud</a> Profile to see the badges
              </li>
              <li>Click on the badge, which you wanted to display</li>
              <li>Copy the markdown code by clicking the Embed Code icon</li>
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