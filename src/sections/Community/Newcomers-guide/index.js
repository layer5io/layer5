import React, { useState } from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { NewcomersGuideWrapper } from "./NewcomersPageWrapper.style";
import CommunityImage1 from "./community-image1.png";
import CommunityImage2 from "./community-image2.png";
import CommunityImage3 from "./community-image3.png";
import CommunityImage4 from "./community-image4.png";
import TutorialsTable from "./Tutorials-table";
import NewcomersMap from "./newcomers-map";
import JoinCommunity from "../Join-community";
import longArrow from "./long-arrow.svg";

const NewcomersGuide = () => {
  const [hover, setHover] = useState(false);

  return (
    <NewcomersGuideWrapper>
      <PageHeader title="Welcome Newcomers!" />
      <Container>
        <div className="newcomers-welcome">
          <p>
            Whether you are a first time contributor or an open source
            veteran,you are welcome to contribute to and actively engage in the
            development of projects at Layer5. Here are some instructions to get
            you started and if you haven’t joined yet, join the{" "}
            <a href="http://slack.layer5.io/" target="_blank" rel="noreferrer">
              Slack workspace
            </a>{" "}
            to collaborate with the community. Also, you can check the
            quick-links below for jumping straight into things.
          </p>
          <Row className="newcomers-journey">
            <Col
              className="heading"
              sm={12}
              lg={6}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <h2>Contributor's Journey</h2>
              <div className="heading-start">
                <h5>Start Here</h5>
                <img className="heading-start__arrow" src={longArrow} />
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <NewcomersMap handleMouseHover={hover} />
            </Col>
          </Row>
          <Row className="how-to-contribute">
            <h3>How to Contribute?</h3>
            <p>
              The following set of steps outlines the process by which you can
              openly engage, learn, and participate in the broad set of open
              source projects at Layer5. If at any time you get stuck, please
              seek help in the{" "}
              <a
                href="https://layer5io.slack.com/archives/C019426UBNY"
                target="_blank"
                rel="noreferrer"
              >
                #newcomers
              </a>{" "}
              channel in the Layer5 (joining instructions below). Our{" "}
              <Link to="/community/meshmates">MeshMates</Link> and community
              members are here to help!
            </p>
          </Row>
        </div>
        <div className="instructions">
          <Row className="step">
            <Col sm={12} lg={6}>
              <img src={CommunityImage1} alt="Community Image" />
            </Col>
            <Col sm={12} lg={6}>
              <h3>Finding an Issue to Work On</h3>
              <ol type="i">
                <li>
                  Browse the list of{" "}
                  <a
                    href="https://github.com/layer5io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Layer5 org
                  </a>{" "}
                  issues bearing the “
                  <a
                    href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+"
                    target="_blank"
                    rel="noreferrer"
                  >
                    good first issue
                  </a>
                  ” label, “
                  <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first-timers-only%22+">
                    first timers only
                  </a>
                  ” or the “
                  <a
                    href="https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help wanted
                  </a>
                  ” label.
                </li>
                <li>
                  Alternatively, find an area of interest by reviewing/browsing
                  the{" "}
                  <a
                    href="https://drive.google.com/a/layer5.io/open?id=1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Layer5 Repository Overview
                  </a>{" "}
                  document.
                </li>
                <li>
                  After identifying the issue you wish to work on, check whether
                  it has been assigned or not by taking a look at the assignee
                  section on the issue. If it hasn't been, signal your interest
                  by commenting on the issue so that it can be assigned to you.
                </li>
              </ol>
            </Col>
          </Row>
          <Row className="step">
            <Col sm={12} lg={6}>
              <h3>Working on Your Issue</h3>
              <ol type="i">
                <li>
                  Once an issue has been assigned to you, it’s time to get
                  started! Make sure you take a look at the{" "}
                  <a
                    href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contributing Guidelines
                  </a>
                  .
                </li>
                <li>
                  Be sure to{" "}
                  <a
                    href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sign-off on your commits
                  </a>
                  .
                </li>
                <li>Contributions of all sizes are welcome.</li>
                <li>
                  If you need some additional help, please join Layer5 Slack
                  workspace at{" "}
                  <a
                    href="http://slack.layer5.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://slack.layer5.io
                  </a>{" "}
                  and find your way to the{" "}
                  <a
                    href="https://layer5io.slack.com/archives/C019426UBNY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    #newcomers
                  </a>{" "}
                  channel. Feel free to ask questions.
                </li>
              </ol>
            </Col>
            <Col sm={12} lg={6}>
              <img src={CommunityImage2} alt="Community Image" />
            </Col>
          </Row>
          <Row className="step">
            <Col sm={12} lg={6}>
              <img src={CommunityImage3} alt="Community Image" />
            </Col>
            <Col sm={12} lg={6}>
              <h3>While Your Issue is under Review</h3>
              <p>
                Be patient. There are a large number of contributors and only a
                small number of maintainers/reviewers. All contributors are
                equally important to us, and we'll be sure to get to you as soon
                as possible. In the meanwhile, you are welcome to join our{" "}
                <a
                  href="http://slack.layer5.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Slack workspace
                </a>{" "}
                and take a look at all our projects.
              </p>
            </Col>
          </Row>
        </div>
        <div className="table-wrapper">
          <h2>Tutorials</h2>
          <h5>Checkout some of the resources to get going</h5>
          <TutorialsTable />
        </div>
        <JoinCommunity image={CommunityImage4} />
      </Container>
    </NewcomersGuideWrapper>
  );
};

export default NewcomersGuide;
