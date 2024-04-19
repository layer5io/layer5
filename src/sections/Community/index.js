import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import JoinCommunity from "../Community/Join-community";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import CommunitySectionWrapper from "./community.style";
import Five from "./Community-pictures/community.png";
import NewcomersMap from "./Newcomers-guide/newcomers-map.js";
import DiscussCallout from "../../sections/Discuss-Callout";
import { ReactComponent as MeshmateIcon } from "../../assets/images/meshmate/meshmate-stack-colorMode.svg";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import useHasMounted from "../../utils/useHasMounted";
import InlineQuotes from "../../components/Inline-quotes";
import AdventuresCallout from "../Adventures-Callout";
// import PictureSlider from "./slider";

const CommunityMember = "./Community-pictures/five.svg";
const Picture = "./Community-pictures/join-the-community.png";

const CommunityPage = () => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "bookmarks.webp" }
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

  const hasMounted = useHasMounted();

  const pluginImage = hasMounted && getImage(backgroundImage123);

  return (
    <CommunitySectionWrapper>
      <BgImage image={ pluginImage} className="section">
        <div className="community-header">
          <h1>The Layer5 Community</h1>
          <h2>New members are always welcome</h2>
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
                We welcome individuals at all stages of their development and of all walks of life. Every member is encouraged to embrace these values and support one another in meaningfully and consistently advancing the community's open source initiatives.
              </p>
              <p>
                We believe that every contributor deserves a safe and friendly environment,
                enabling them to effectively compare different ideas and find the best solutions
                for advancement, while building the size, diversity, and strength of the community.
              </p>
              <Button primary title="See our community member profiles" url="/community/members" />
            </Col>
            <Col className="slider" sm={12} lg={6}>
              <StaticImage src={Picture} alt="Five_with_banner" />
              {/* <PictureSlider /> */}
            </Col>
          </Row>
        </div>
        <Container>
          <Row className="meshmate">
            <Col className="content" sm={12} lg={6}>
              <h1 className="onboarding">An onboarding and mentoring program</h1>
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
              <MeshmateIcon className="meshmate-img meshmate-img-transparent" />
              <Link className="meshmate-link meshmate-link-transparent" to="/community/meshmates">
                <h2>Open Source Mentorship Program</h2>
                <button className="icon" aria-label="mentorship-program">
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
                <h2>Are you new to the community?</h2>
                <p className="invitation">
                  Begin your journey by <a href="https://slack.layer5.io">joining the community Slack</a>. Then, use the resources linked in our <Link to="/community/newcomers">Contributor's Journey Map </Link>
                  and engage in the community and projects.
                </p>
                <Button primary title="See All Newcomers Resources" url="/community/newcomers">
                  <FaUsers size={21} className="icon-left" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <InlineQuotes title={"Community Member"} quote={"Wow, you all are incredibly helpful. I wish every open source community was as friendly as Layer5's."} person={"Priyanshu Sharma"}/>
        </Container>
      </div>
      <JoinCommunity image={Five} className="newcomers-join" />
      <Container className="Callout">
        <DiscussCallout />
        <AdventuresCallout />
      </Container>

    </CommunitySectionWrapper>
  );
};

export default CommunityPage;
