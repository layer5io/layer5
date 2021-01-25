import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ProfileCard from "../../../components/Profile-card";
import MeshMatesWrapper from "./meshmates.style";
import EmeritusGrid from "../Emeritus-grid";
import { useStaticQuery, graphql } from "gatsby";

import meshmate from "./meshmate.svg";
import c_icon from "./c-icon.svg";
import hero from "./hero.png";

const Meshmates=() => {
  const data=useStaticQuery(
    graphql`
            query meshmates {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { meshmate: { eq: "yes" } } }
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
                            image_path{
                                childImageSharp{
                                    fluid(maxWidth: 200){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        `
  );
  return (
    <MeshMatesWrapper>
      <div className="hero">
        <img src={hero} alt="community" />
        <Container>
          <div className="hero-text">
            <h2> A warm and welcoming collection of open sourcers </h2>
            <h1> Layer5 Meshmates </h1>
            <p> Layer5 MeshMates are committed to helping community members be successful contributors. MeshMates aid in identifying areas of projects to engage within, working groups to join, and in helping community members grow in their open source and cloud native knowledge. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible. </p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="meshmates-grid">
          <h1> Our Community Meshmates </h1>
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
          <img className="meshmate-logo" alt="meshmate-logo" src={meshmate} />
          <h5> What to Expect </h5>
          <h2> Engaging with a MeshMate Program </h2>
          <p> The program pairs experienced Layer5 community members with community newcomers to ensure a smooth onboarding experience. There is a lot going in the Layer5 community. Projects and working groups move fast. MeshMates are committed to helping their mentees in identifying an area of the projects to engage within, working groups to join, growing their Cloud Native knowledge, and network of relationships. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible. </p>
          <img className="meshmeet-img" alt="community" src={hero} />
          <p> Meshtees are encouraged to get to know their MeshMate as soon as they are assigned (MeshMates and Mentees will be introduced in the Layer5 Slack). Help your MeshMate understand your current skills, ideal topics of learning, and areas of passion. Doing so will help them to point out various aspects of projects that you might find your first foothold. </p>
        </div>
        <div className="meshmate-meet">
          <Row>
            <Col lg={6}>
              <h2> Meeting Your Meshmate </h2>
              <p> Slack’s video chat or Google Hangouts are both available for your use as tools for getting to know one another. While getting acquainted and onboarding into the community, we suggest the following goals: </p>
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
            <Col lg={6}>
              <div className="callout-card">
                <img className="card-img" alt="community" src={hero} />
                <div className="card-text">
                  <h4> Community Call </h4>
                  <p> Layer5 hosts official monthly community calls where users and contributors can discuss about any topic and demonstrate  use-cases. </p>
                  <h4 className="highlight"> Interested? </h4>
                  <p> You can register below for the next Community Call. </p>
                  <Row>
                    <input type="text" placeholder="Your Email Address" />
                    <Button secondary title="Subscribe" />
                  </Row>
                  <p className="unsubscribe"> You can unsubscribe any time. No spam. </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="conduct">
          <h2> Code of Conduct </h2>
          <p> The comfort and safety of Layer5 community members is our priority. You must agree to the Code of Conduct to participate in the Layer5 community, and any violations of the Code of Conduct will be taken seriously. <br/>
                    To report any violations please fill out this incident form. </p>
          <Button primary title="Fill Form" url="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform" external="true"></Button>
        </div>
        <EmeritusGrid />
      </Container>
    </MeshMatesWrapper>
  );
};

export default Meshmates;
