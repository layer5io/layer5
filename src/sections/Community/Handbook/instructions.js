import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

const contents = [
  { id: 0, link: "#top", text: "GitHub Organization Membership", },
  { id: 1, link: "#Requirements", text: "Membership Requirements" },
  { id: 2, link: "#InvitationProcess", text: "Invitation Process" },
  { id: 3, link: "#TemplateMessage", text: "Template Message for Invitations", },
  { id: 4, link: "#SendingInvitation", text: "Sending the GitHub Invitation", },
];

const GitHubOrgMembership = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>GitHub Organization Membership</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="top">
              {" "}
              <h2>GitHub Organization Membership</h2>{" "}
            </a>

            <p>
              Membership to the GitHub organizations is a significant milestone for contributors who have shown
              persistent commitment and dedication to Layer5 projects. It is not solely about writing code
              but rather the consistency of engagement and alignment of mentality.
            </p>

            <a id="Requirements">
              {" "}
              <h4>
                <strong>Membership Requirements</strong>
              </h4>{" "}
            </a>

            <p>
              Contributors who may be invited typically:
              <ul>
                <li>Have been actively involved in the community for several weeks</li>
                <li>Make regular updates to projects</li>
                <li>Help other community members</li>
                <li>Attend development meetings</li>
                <li>Demonstrate a willingness to learn and share knowledge</li>
                <li>Show a genuine desire to improve themselves, others, and the projects</li>
              </ul>
            </p>

            <a id="InvitationProcess">
              {" "}
              <h4>
                <strong>Invitation Process</strong>
              </h4>{" "}
            </a>

            <p>
              Depending on the number and quality of contributions made across the five GitHub organizations
              of Layer5, contributors can receive an invitation to any or all of these orgs. The process involves:
              <ol>
                <li>Sending a group DM</li>
                <li>Executing Slack slash command in #community-management</li>
              </ol>
            </p>

            <a id="TemplateMessage">
              {" "}
              <h4>
                <strong>Group Message for Invitations</strong>
              </h4>{" "}
            </a>

            <p>
              When you identify a worthy contributor, send a message in a group DM that includes
              the individual and other maintainers/appropriate members: look in Community Managers'
              docs to see some examples.
            </p>

            <a id="SendingInvitation">
              {" "}
              <h4>
                <strong>Sending the GitHub Invitation</strong>
              </h4>{" "}
            </a>

            <p>
              To send the invitation to join the GitHub organization, use the following slash command in
              #community-management channel:
            </p>
            <div className="code-block">
              <code>/invite-github [email address] [organization name]</code>
            </div>
            <p>
              Where <strong>[organization name]</strong> should be either:
              <ul>
                <li>
                  <strong>layer5io</strong> - to send the invite to the email address to join Layer5 GitHub org under the "layer5-contributors" team
                </li>
                <li>
                  <strong>meshery</strong> - to send the invite to the email address to join Meshery GitHub organization under the "contributors" team
                </li>
              </ul>
            </p>
            <p>
              For example:
            </p>
            <div className="code-block">
              <code>/invite-github contributor@example.com layer5io</code>
            </div>
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default GitHubOrgMembership;
