import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { Link } from "gatsby";
import Point from "./images/bullet.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  { id: 0, link: "#Community Guidelines", text: "Community Guidelines" },
  { id: 1, link: "#Recognitions", text: "Recognition" },
  { id: 2, link: "#Membership", text: "Membership to the github" },
  {
    id: 3,
    link: "#Community_member_profile",
    text: "Community member profile",
  },
];

const CommunityGuide = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            {" "}
            <a id="Community Guidelines">
              <h2 id="communityGuidelines">Community Guidelines</h2>
            </a>
            <p>
              Welcome to the Layer5 community! We’re happy to have you here and
              handhold you for your first contribution. Here are some tips to
              help you get started:
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>For Easy Identification -</strong> When setting up your
              slack workspace, your display name should be the same as your
              GitHub username for easy identification, engage freely, and in
              whatever form you will: as a listener, user, contributor,
              maintainer, ambassador, or bystander. Involvement in any way is
              warmly received.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Familiarize with the community -</strong> As you get to
              familiarize yourself with the community, know that there are
              multiple initiatives for you to explore. Some initiatives have
              working groups that meet at different times each week, while
              others use the weekly community meeting as their place of
              discussion. Details of each can be found on the{" "}
              <Link to="/community/calendar">community calendar</Link>. Everyone
              is welcome to join the calls and engage with other community
              members over Slack, the mailing list, and so on.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Familiarize with the projects -</strong> The following is
              a sample of the many active, ongoing community projects. One way
              of doing so is to review the{" "}
              <Link to="/community/handbook/repository-overview">
                Layer5 Repository Overview
              </Link>{" "}
              section of this handbook to get a better understanding of each
              project. This document will help you to understand the projects
              based on their technology domain(s). Be sure to star the
              community’s <a href="https://github.com/layer5io">repositories</a>{" "}
              on GitHub!
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Be friendly and open-minded -</strong> We encourage you to
              be welcoming to new collaborators and those just getting started.
              Other contributors might not have the same degree of experience or
              background as you, but that doesn't mean they can't provide useful
              ideas.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Be honest -</strong> “A half-truth is a whole lie.” Being
              truthful allows you to reach a better agreement. As a result, be
              open and honest about who you are, what you do, and how you want
              to accomplish it.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Be respectful and inclusive -</strong> We are a diverse
              group of people with diverse backgrounds and opinions. We expect
              everyone to be civil and professional in their activities.
              Disrespectful behavior is not tolerated. Do not publish anything
              that would be considered insulting, abusive, or hate speech by a
              reasonable person.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Collaborate and Contribute -</strong> Members are expected
              to attend community and workgroup meetings, find ways to help,
              check up on our Github page regularly etc. Within the community
              and outside, we encourage teamwork.
            </p>
            <p>
              <img className="logo" src={Point} alt="Point" />
              <strong>Resources -</strong> Be sure to access the resources in
              the{" "}
              <a href="https://drive.google.com/drive/u/0/folders/0ABH8aabN4WAKUk9PVA">
                community drive
              </a>{" "}
              and sign-up on the{" "}
              <a href="https://layer5.io/subscribe">community mailer</a>. Ask
              for a copy of{" "}
              <a href="https://layer5.io/books/the-enterprise-path-to-service-mesh-architectures">
                The Enterprise Path to Service Mesh Architectures
              </a>
              .
            </p>
            <p>
              Please refer to the{" "}
              <Link to="/community/handbook/code-of-conduct">
                Code of Conduct
              </Link>{" "}
              for more details.
            </p>
          </div>
          <TocPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default CommunityGuide;
