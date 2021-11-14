import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import { Link } from "gatsby";
import NewcomersMap from "../Newcomers-guide/newcomers-map";
import TOC from "../../../components/handbook-navigation/index";
import longArrow from "../Newcomers-guide/long-arrow.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";


const Intro = () => {
  const [hover, setHover] = useState(false);
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>About</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>

          <div className="content">
            <h2>About Layer5</h2>
            <p>
              Layer5 is a community and open-source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world.
              Layer5 is the creator and maintainer of <Link to="../blog/announcements/a-standard-interface-for-service-meshes">service mesh standards</Link> and also the maker of <a href="https://meshery.io">Meshery</a>,  the <Link to="/service-mesh-management/meshery">Service Mesh Management Plane</Link>.<br/>
              Layer5 is not just a company, we are also:
            </p>
            <h4>Community First</h4>
            <p>
              Layer5 represents the community.  We build projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more.
              Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome.
            </p>
            <h4>Open Source First</h4>
            <p>
              All Layer5 projects are open-source. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration,
              globalism, and innovation. Layer5 projects are distributed under the terms of <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache v2</a>.
            </p>
            <h2>Goals</h2>
            <ul>

              <li>
                <span>To build a large collection of service meshes.</span>
              </li>
              <li>
                <span>
                  To build products that are accessible and easy to use.
                </span>
              </li>
              <li>
                <span>
                  To build a welcoming community for open-source contributions.
                </span>
              </li>
            </ul>

            <h2>Newcomer’s Path</h2>
            <p>
              Thank you for your interest in contributing to Layer5 open source
              initiatives!
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
            <p>
              In combination with the Layer5 Community Guide and Contributing
              Guide, the following set of instructions are to encourage and
              support first-time (or near first-time) open-source contributors.
            </p>
            <h3>How to contribute?</h3>
            <p>
              The following steps outline the process by which you can openly
              engage, learn, and participate in the broad set of open source
              projects at Layer5.
            </p>

            <ol>
              <li>
                <span>
                  Browse the list of{" "}
                  <a href="https://github.com/layer5io">Layer5</a> org issues
                  bearing the{" "}
                  <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+no%3Aassignee">
                    “good first issue”
                  </a>
                  ,{" "}
                  <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first+timers+only%22+no%3Aassignee">
                    “first-timers-only”
                  </a>{" "}
                  or the{" "}
                  <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+no%3A%22assignee%22">
                    “help wanted”
                  </a>{" "}
                  label.
                </span>
              </li>
              <li>
                <span>
                  Alternatively, find an area of interest by checking out the
                  Layer5 Repository Overview section of this handbook.
                </span>
              </li>
              <li>
                <span>
                  After identifying the issue you wish to work on, check if it
                  has been assigned by taking a look at the assignee section on
                  the issue, otherwise signal your interest by commenting on the
                  issue so that it can be assigned to you.
                </span>
              </li>
            </ol>
            <h3>Working on your issue</h3>
            <p>
              Once an issue has been assigned to you, it’s time to get started!
            </p>

            <ol>
              <li>
                <span>
                  Be sure to{" "}
                  <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin">
                    sign off on your commits
                  </a>
                </span>
              </li>
              <li>
                <span>Contributions of all sizes are welcome.</span>
              </li>
              <li>
                <span>
                  If you need some additional help, please join the Layer5 Slack
                  workspace and find your way to the #newcomers channel. Feel
                  free to ask questions.
                </span>
              </li>
            </ol>
            <h3>While your issue is under review</h3>

            <ol>
              <li>
                <span>
                  Please double-check that you have signed off on all of your
                  git commits.
                </span>
              </li>
              <li>
                <span>
                  Be patient. There are a large number of contributors and only
                  a small number of maintainers/reviewers. All contributors are
                  equally important to us, and we'll be sure to get to you as
                  soon as possible. In the meanwhile, you are welcome to join
                  our Slack workspace and take a look at all our projects.{" "}
                </span>
              </li>
            </ol>

          </div>
        </Container>
        <TocPagination />
      </div>
    </HandbookWrapper>
  );
};

export default Intro;
