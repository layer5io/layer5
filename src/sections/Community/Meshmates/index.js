import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ProfileCard from "../../../components/Profile-card";
import CommunityCallCard from "../../../components/CommunityCallCard";
import MeshMatesWrapper from "./meshmates.style";
import { useStaticQuery, graphql } from "gatsby";
import c_icon from "./c-icon.svg";
import MeshmateStackImage from "../../../assets/images/meshmate/meshmate-stack.svg";
import MeshmateStackLightImage from "../../../assets/images/meshmate/meshmate-stack-light.svg";
import { Link } from "gatsby";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";

const Meshmates = ({ theme }) => {
  const data = useStaticQuery(
    graphql`query meshmates {
  allMdx(
    sort: {fields: [frontmatter___name], order: ASC}
    filter: {fields: {collection: {eq: "members"}}, frontmatter: {meshmate: {eq: "yes"}, emeritus: {ne: "yes"}}}
  ) {
    nodes {
      id
      frontmatter {
        name
        github
        twitter
        status
        linkedin
        location
        badges
        bio
        meshmate
        emeritus
        image_path {
          childImageSharp {
            gatsbyImageData(width: 200, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`
  );
  return (
    <MeshMatesWrapper>
      <Container>
        <Row className="hero">
          <Col sm={12} lg={6}>
            <h5>A warm and welcoming collection of open sourcers</h5>
            <h1>Layer5 MeshMates</h1>
            <p>
                  Layer5 MeshMates are committed to helping community members be successful contributors.
                  MeshMates aid in identifying areas of projects to engage within, working groups to join,
                  and in helping community members grow in their open source and cloud native knowledge.
                  By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.
            </p>
          </Col>
          <Col className="meshmate-logo-wrapper" sm={12} lg={6}>
            <img src={theme === "dark" ? MeshmateStackLightImage : MeshmateStackImage} alt="meshmate logo"/>
          </Col>
        </Row>
        <div className="meshmates-grid">
          <h1> Our MeshMates </h1>
          <p> MeshMate is a distinction that Layer5 awards select members of the community that who innately align with the Layer5 culture of helping others, paying it forward, and have a commitment to sharing their knowledge of Layer5 projects with the community. MeshMates are Layer5 ambassadors (not employees) and their commitment to helping others and sharing their expertise has a huge impact on the Layer5 community – don’t hesitate to reach out to them! </p>
          <Row>
            {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
              <Col xs={12} sm={6} lg={4} key={id}>
                <ProfileCard frontmatter={frontmatter} cardlink = {fields.slug}/>
              </Col>
            ))}
          </Row>
        </div>
        <div className="expect">
          <h5> What to Expect </h5>
          <h2> Engaging with a MeshMate</h2>
          <p> The program pairs experienced Layer5 community members with community newcomers to ensure a smooth onboarding experience. There is a lot going in the Layer5 community. Projects and working groups move fast. MeshMates are committed to helping their mentees in identifying an area of the projects to engage within, working groups to join, growing their Cloud Native knowledge, and network of relationships. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible. </p>
          <p> Meshtees are encouraged to reach out to any MeshMate directly in order to pair up. Introduce yourself either on in the <a href="https://discuss.layer5.io/c/community/12">Layer5 discussion forum</a>. Help your MeshMate understand your current skills, ideal topics of learning, and areas of passion. Doing so will help them to point out various aspects of projects that you might find your first foothold. </p>
        </div>
        <div className="meshmate-meet">
          <Row Vcenter>
            <Col sm={12} lg={6}>
              <h2> Meeting Your MeshMate </h2>
              <p>After pairing up on the <a href="https://discuss.layer5.io/c/community/12">Layer5 discussion forum</a>, the community Slack’s video chat or Google Hangouts are both available for your use as tools for getting to know one another. While getting acquainted and onboarding into the community, we suggest the following goals: </p>
              <table>
                <tr>
                  <td className="icon"><img alt="icon" src={c_icon} /></td>
                  <td className="feature">
                    <h4> Get familiar with all of the projects </h4>
                    <p> Spend time understanding each of the Layer5 initiatives through high level overviews available in the community drive and in discussion with your MeshMate. </p>
                  </td>
                </tr>
                <tr>
                  <td className="icon"><img alt="icon" src={c_icon} /></td>
                  <td className="feature">
                    <h4> Identify your area of interest </h4>
                    <p> Use time with your MeshMate to familiarize with the architecture and technologies used in the projects. Inform your MeshMate of your current skills and what skills you would like to develop. </p>
                  </td>
                </tr>
                <tr>
                  <td className="icon"><img alt="icon" src={c_icon} /></td>
                  <td className="feature">
                    <h4> Run Meshery </h4>
                    <p> Put on your user hat and walk-through all of Meshery’s features and functions as a user. </p>
                  </td>
                </tr>
                <tr>
                  <td className="icon"><img alt="icon" src={c_icon} /></td>
                  <td className="feature">
                    <h4> Build Meshery </h4>
                    <p> Confirm that you have a usable development environment. </p>
                  </td>
                </tr>
                <tr>
                  <td className="icon"><img alt="icon" src={c_icon} /></td>
                  <td className="feature">
                    <h4> Contribute </h4>
                    <p> Grab an open issue or suggest a new one. </p>
                  </td>
                </tr>
              </table>
            </Col>
            <Col sm={12} lg={6}>
              <CommunityCallCard />
            </Col>
          </Row>
        </div>
        <div className="conduct">
          <h4> Get to know about <Link className="readmore-btn" to="/community/community-managers">Layer5 Community Managers <FiArrowRight /></Link></h4>
        </div>
        <div className="conduct">
          <h2> Code of Conduct </h2>
          <p> The comfort and safety of Layer5 community members is our priority. You must agree to the Code of Conduct to participate in the Layer5 community, and any violations of the Code of Conduct will be taken seriously. <br/>
                    To report any violations please fill out this incident form. </p>
          <Button primary title="Report Incident" url="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform" external={true}/>
        </div>
      </Container>
    </MeshMatesWrapper>
  );
};

export default Meshmates;
