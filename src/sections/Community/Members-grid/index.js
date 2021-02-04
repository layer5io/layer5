import React from "react";
import Select from "react-select";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import ProfileCard from "../../../components/Profile-card";
import Button from "../../../reusecore/Button";
import communityImg from "../../../assets/images/community/community-green.svg";
import { Link } from "gatsby";
import { MembersGridWrapper, selectStyles, dropdownTheme } from "./membersGrid.style";
import VintageBox from "../../../reusecore/VintageBox";
import { FaEnvelope, FaUsers } from "react-icons/fa";

const MembersGrid = props => {
  return (
    <MembersGridWrapper>
      <PageHeader title="Community Members"
        path="Community > Members"
        subtitle="A warm and welcoming collection of open sourcers" />
      <div className="members-page-wrapper">
        <Container>
          <div className="members-grid-wrapper">
            <div className="members-grid-select">
              <Row>
                <Col xs={12} sm={6} lg={9} />
                <Col xs={12} sm={6} lg={3}>
                  <Select
                    name="Filter Members"
                    defaultValue={props.options[0]}
                    isSearchable={false}
                    styles={selectStyles}
                    options={props.options}
                    value={props.members}
                    onChange={props.handleChange}
                    theme={dropdownTheme}
                  />
                  <br />
                </Col>
              </Row>
            </div>
            <div className="members-profile-cards">
              <Row>
                {props.data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                  <Col xs={12} sm={6} md={6} lg={4} xl={3} key={id}>
                    <ProfileCard frontmatter={frontmatter} cardlink={fields.slug} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="AboutCommunity">
            <div>
              <h3 className="sectionTitle">Community Membership</h3>
              <img src={communityImg}
                alt="Layer5 Service Mesh Community"
              />
            </div>
            <div className="detailsCommunity">
              <p>The open source community at Layer5 goes out of its way to welcome and encourage new contributors. We often assign newcomers an onboarding buddy, a <Link to="/community/meshmates" className="meshmate-link">MeshMate</Link>, to ensure that newcomers get both introduced to the projects within the community and introduced around to other individuals. We strive to help them get a foothold on a crevice of one of our initiatives, instilling and nurturing a sense of ownership, so that they feel at-home as they become a regular contributor.</p>
              <p>
                We also spend a great deal of time trying to recognize and uplift contributors on the Layer5 and Meshery Twitter accounts whether "contribution" means code or any of the other various forms of being involved int the projects and community. Likewise, we try to lift up contributors' works on the <Link to="https://www.linkedin.com/company/layer5">Layer5</Link> and <Link to="https://www.linkedin.com/showcase/meshery">Meshery</Link> LinkedIn pages, too. And, while it's not a world stage, we openly and publicly share our community meetings on <Link to="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">YouTube</Link>.</p>

              <p>Open source contributors come in all shapes, sizes, colors and so on. All are welcome in the Layer5 projects and community!!</p>

              <p className="text-gray">Would you like a member profile?</p>
              <div className="">
                <VintageBox right={true} vintageOne={true}>

                  <Button primary className="banner-btn memberProfileBtn" title="Let Layer5 Community Managers Know" url="mailto:community@layer5.io?subject=Layer5 Community Membership" external="true">

                    <FaEnvelope size={21} className="icon-left" />
                  </Button>

                  <Button secondary className="banner-btn two memberProfileBtn" title="Join the Community" url="http://slack.layer5.io">
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
