import React from "react";
import {Link} from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import JoinCommunity from "../Community/Join-community";
import PictureSlider from "./slider";
import {FaArrowRight} from "react-icons/fa";
import CommunitySectionWrapper from "./community.style";
import Lee_workshop from "./Lee_Workshop.png";
import CommunityMemberImage from "./community-member.jpeg";
import MeshmateIcon from "../../assets/images/meshmate/meshmate-stack.svg";

const CommunityPage = () => {

  return (
    <CommunitySectionWrapper>
      <div className="community-header">
        <h1>The Layer5 Community</h1>
        <h3>New members are always welcome</h3>
      </div>
      <div className="community-section-wrapper">
        <Container>
          <Row className="service-mesh-projects">
            <Col sm={12} lg={6}>
              <h2>Largest collection of service mesh projects and their maintainers in the world</h2>
              <p>
                                We build projects to provide learning environments,
                                deployment and operational best practices, performance benchmarks,
                                create documentation, share networking opportunities, and more.
                                Our shared commitment to the open source spirit pushes Layer5 projects forward.
              </p>
            </Col>
            <Col sm={12} lg={6}>
              <img src={CommunityMemberImage} alt="Community Member"/>
            </Col>
          </Row>
          <Row className="open-source-projects">
            <h1>Open Source Projects</h1>
            <p>
                            Layer5 projects are open source software. Anyone can download,
                            use, work on, and share it with others. It's built on principles
                            like collaboration, globalism, and innovation. Layer5 projects
                            are distributed under the terms of Apache v2.
            </p>
          </Row>
        </Container>
        <div className="our-community-members">
          <Container>
            <Row>
              <Col className="community" sm={12} lg={6}>
                <h1>Our Community Members</h1>
                <h5>Jump in. The community is warm!</h5>
                <p>
                                With active members from around the globe, the Layer5 community is a collection of diverse open source contributors, each of whom espouse our cultural values of inclusivity and paying it forward for others.
                                We welcome individuals at all stages of their development and of all walks of life. Every member is encourage to embrace these values and support one another in meaninfully and consistently advancing the community's open source initiatives.
                </p>
                <p>
                                We believe that every contributor deserves a safe and friendly environment,
                                enabling them to effectively compare different ideas and find the best solutions
                                for advancement, while building the size, diversity, and strength of the community.
                </p>
                <Button primary title="See our community member profiles" url="/community/members"/>
              </Col>
              <Col className="slider" sm={12} lg={6}>
                <PictureSlider/>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="meshmate">
            <Col className="content" sm={12} lg={6}>
              <h1>Layer5 MeshMates</h1>
              <h5>An onboarding and mentoring program</h5>
              <p>
                                The Layer5 community is growing at a tremendous rate.
                                We value our connections and that is what makes us unique.
                                Whether it is your first Layer5 meeting or your tenth contribution,
                                we want to make sure that you are supported and equipped to take
                                advantage of all of that the Layer5 community has to offer.
              </p>
              <p>
                                In the Layer5 mentor program, we will match you up
                                with a MeshMate to support and guide you along the way,
                                by enabling you to identify your area of interests within the projects,
                                directing you towards working groups to join, growing your Cloud Native knowledge,
                                and establishing a network of relationships.
              </p>
            </Col>
            <Col sm={12} lg={6}>
              <img src={MeshmateIcon} alt="MeshMate Icon"/>
              <Link className="meshmate-link" to="/community/meshmates">
                <h3>Open Source Mentorship Program</h3>
                <button className="icon">
                  <FaArrowRight />
                </button>
              </Link>
            </Col>
            <div className="newcomers-section">
              <h2>Are you new to the community?</h2>
              <h4>Don't worry we have got you covered</h4>
              <Button primary title="Hop In!" url="/community/newcomers"/>
            </div>
          </Row>
          <JoinCommunity image={Lee_workshop}/>
        </Container>
      </div>
    </CommunitySectionWrapper>
  );
};

export default CommunityPage;
