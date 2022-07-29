import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import JoinCommunity from "../Community/Join-community";
import PictureSlider from "./slider";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import CommunitySectionWrapper from "./community.style";
import Lee_workshop from "../../assets/images/community/Lee_Workshop.png";
import NewcomersMap from "./Newcomers-guide/newcomers-map.js";
import DiscussCallout from "../../sections/Discuss-Callout";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const CommunityMember = "./Community-pictures/Lee Calcote and Oliver Gould - CTO of Buoyant.jpg";
const MeshmateIcon = "../../assets/images/meshmate/meshmate-stack.svg";


const CommunityPage = () => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "bookmarks.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(backgroundImage123);

  return (
    <CommunitySectionWrapper>
      <BgImage image={pluginImage} className="section">
      <div className="community-header">
        <h1>The Layer5 Community</h1>
        <h3>New members are always welcome</h3>
      </div>
      </BgImage>
      <div className="community-section-wrapper">
        <Container>
          <Row className="service-mesh-projects">
            <Col sm={12} lg={6}>
              <h2>Warm, welcoming, and encouraging. Embrace developer-defined infrastructure and help empower every engineer with us.</h2>
              <p>
                We build projects to provide learning environments and
                cloud native infrastructure and application management tooling. Share in our collective accolades as you build lifelong relationships, and world-stage software. Our shared commitment to the open source spirit pushes Layer5 projects forward.
              </p>
            </Col>
            <Col sm={12} lg={6}>
              <StaticImage src={CommunityMember} alt="Community Member" placeholder="blurred" />
            </Col>
          </Row>
          <Row className="open-source-projects">
            <h2>Open Source and Cloud Native</h2>
            <p>
              Layer5 projects are open source software. Anyone can download,
              use, work on, and share it with others. It's built on principles
              like collaboration, globalism, and innovation. Layer5 projects
              are distributed under the terms of Apache v2.
            </p>
          </Row>
        </Container>
        <div className="our-community-members">
          <Row className="our-community-members_row">
            <Col className="community" sm={12} lg={6}>
              <h3>Jump in. The community is warm!</h3>
              <h1>Our Community Members</h1>
              <p>
                With active members from around the globe, the Layer5 community is a collection of diverse open source contributors, each of whom espouse our cultural values of inclusivity and paying it forward for others.
                We welcome individuals at all stages of their development and of all walks of life. Every member is encourage to embrace these values and support one another in meaninfully and consistently advancing the community's open source initiatives.
              </p>
              <p>
                We believe that every contributor deserves a safe and friendly environment,
                enabling them to effectively compare different ideas and find the best solutions
                for advancement, while building the size, diversity, and strength of the community.
              </p>
              <Button primary title="See our community member profiles" url="/community/members" />
            </Col>
            <Col className="slider" sm={12} lg={6}>
              <PictureSlider />
            </Col>
          </Row>
        </div>
        <Container>
          <Row className="meshmate">
            <Col className="content" sm={12} lg={6}>
              <h3>An onboarding and mentoring program</h3>
              <h1>Layer5 MeshMates</h1>
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
              <StaticImage src={MeshmateIcon} alt="MeshMate Icon" className="meshmate-img" />
              <Link className="meshmate-link" to="/community/meshmates">
                <h3>Open Source Mentorship Program</h3>
                <button className="icon">
                  <FaArrowRight />
                </button>
              </Link>
            </Col>

          </Row>
        </Container>
        <Container>
          <Row className="newcomers-section">
            <Col xs={12} lg={6} className="map">
              <NewcomersMap />
            </Col>
            <Col xs={12} lg={6} className="text">
              <div>
                <h1>Newcomers Welcome!</h1>
                <h3>Are you new to the community?</h3>
                <p className="invitation">
                  Begin your journey by <a href="http://slack.layer5.io">joining the community Slack</a>. Then, use the resources linked in our <a href="community/newcomers">Contributor's Journey Map </a>
                  and engage in the community and projects.
                </p>
                <Button primary title="See All Newcomers Resources" url="/community/newcomers">
                  <FaUsers size={21} className="icon-left" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <JoinCommunity image={Lee_workshop} className="newcomers-join" />
      <DiscussCallout />

    </CommunitySectionWrapper>
  );
};

export default CommunityPage;
