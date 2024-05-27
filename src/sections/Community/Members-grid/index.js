import React, { useState , useEffect } from "react";
// Libraries
import { Link } from "gatsby";

// Components
import { Container, Row, Col } from "../../../reusecore/Layout";
import ProfileCard from "../../../components/Profile-card";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

// Assets
import { MembersGridWrapper } from "./membersGrid.style";
import communityImg from "../../../assets/images/community/community-green.svg";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import  badgeImage from "../../../assets/images/recognition-program/recognition-program.png";
import { FaCertificate } from "@react-icons/all-files/fa/FaCertificate";

const MembersGrid = (props) => {

  const [marginLeft, setMarginLeft] = useState("1.8rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setMarginLeft("0");
      } else {
        setMarginLeft("1.8rem");
      }
    };

    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <MembersGridWrapper>
      <div className="members-page-wrapper">
        <Container>
          <div className="members-profile-cards">
            <Row>
              {props?.data?.map(({ id, frontmatter, fields }) => (
                <Col xs={12} sm={6} md={6} lg={4} xl={3} key={id}>
                  <ProfileCard
                    frontmatter={frontmatter}
                    cardlink={fields.slug}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <div className="AboutCommunity">
            <div>
              <h3 className="sectionTitle">Community Membership</h3>
              <img src={communityImg} alt="Layer5 Community" />
            </div>
            <div className="detailsCommunity">
              <p>
                The open source community at Layer5 goes out of its way to
                welcome and encourage new contributors. We often assign
                newcomers an onboarding buddy, a{" "}
                <Link to="/community/meshmates" className="meshmate-link">
                  MeshMate
                </Link>
                , to ensure that newcomers get both introduced to the projects
                within the community and introduced around to other individuals.
                We strive to help them get a foothold on a crevice of one of our
                initiatives, instilling and nurturing a sense of ownership, so
                that they feel at-home as they become a regular contributor.
              </p>
              <p>
                We also spend a great deal of time trying to recognize and
                uplift contributors on the Layer5 and Meshery Twitter accounts
                whether "contribution" means code or any of the other various
                forms of being involved in the projects and community.
                Likewise, we try to lift up contributors' works on the{" "}
                <Link to="https://www.linkedin.com/company/layer5">Layer5</Link>
                ,{" "}
                <Link to="https://www.linkedin.com/showcase/meshery">
                  Meshery
                </Link>
                ,{" "}
                <Link to="https://getnighthawk.dev/">
                Nighthawk
                </Link>
                , and{" "}
                <Link to="https://www.linkedin.com/showcase/service-mesh-performance">
                  Service Mesh Performance
                </Link>{" "}
                LinkedIn pages, too. We openly and publicly share our community
                meetings on{" "}
                <Link to="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">
                  YouTube
                </Link>
                .
              </p>

              <p>
                Open source contributors come in all shapes, sizes, colors and
                so on. All are welcome in the Layer5 projects and community!!
              </p>

              <p className="text-gray">Would you like to participate?</p>
              <div className="">
                <VintageBox right={true} vintageOne={true}>
                  <Button
                    primary
                    className="banner-btn memberProfileBtn"
                    title="Read the Community Handbook"
                    url="/community/handbook"
                    external={true}
                  >
                    <FaBook size={21} className="icon-left" />
                  </Button>

                  <Button
                    secondary
                    className="banner-btn two memberProfileBtn"
                    title="Join the Community"
                    url="https://slack.layer5.io"
                  >
                    <FaUsers size={21} className="icon-left" />
                  </Button>
                </VintageBox>
              </div>
            </div>
          </div>

          <div className="AboutCommunity">
            <div>
              <h3 className="sectionTitle">Recognition Program</h3>
              <img className="badge-Img" src={badgeImage} alt="Recognition Program Logo" style={{
                width: "22rem",
                height: "auto",
                marginLeft: marginLeft,
              }}/>
            </div>
            <div className="detailsCommunity">
              <p>
              Layer5 badges are one of the many ways that we recognize the efforts
              of our contributors and uplift our users. Layer5 badges represent milestones
              that you achieve both in using and in contributing to Layer5-supported
              open source projects. As a contributor, this is how you demonstrate your ownership,
              dedication, skills and loyalty to Layer5. As a user,
              this is how you demonstrate your prowess.
              </p>
              <p>
              Community members, whether users or contributors, receive badges upon achieving various milestones throughout their journey. These milestones can be related to community activities or aspects of using or contributing to a project.
              Every community member, whether contributing with code or not,
              has the opportunity to earn any number of badges in
              recognition of your achievements.
              </p>
              <p>
              See what badges you can earn by visiting the Layer5 badges site. Collect the whole set!
              </p>

              <div>
                <VintageBox right={true} vintageOne={true}>
                  <Button
                    primary
                    className="banner-btn memberProfileBtn"
                    title="Collect Badges"
                    url="https://badges.layer5.io/"
                    external={true}
                  >
                    <FaCertificate size={21} className="icon-left" />
                  </Button>

                  <Button
                    secondary
                    className="banner-btn two memberProfileBtn"
                    title="Join the Community"
                    url="https://slack.layer5.io"
                  >
                    <FaUsers size={21} className="icon-left" />
                  </Button>
                </VintageBox>
              </div>
            </div>
          </div>

        </Container>
      </div>
    </MembersGridWrapper>
  );
};

export default MembersGrid;
