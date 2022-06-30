import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ProfileCard from "../../../components/Profile-card";
import CommunityManagersWrapper from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";


const CommunityManagers=() => {
  const data=useStaticQuery(
    graphql`query managers {
  allMdx(
    sort: {fields: [frontmatter___name], order: ASC}
    filter: {fields: {collection: {eq: "members"}}, frontmatter: {badges: {in:["community"]},status: {eq: "Active"}}}
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
    <CommunityManagersWrapper>
      <Container>
        <div className="managers-grid">
          <h1> Our Community Managers </h1>
          <p>A Community Manager is a person who has an innate drive to contribute to the community's prosperity.
            A community manager serves as a link between the organisation and its community,
            overcoming obstacles as they arise—or even before they arise!—by collaborating with other departments and the community to find solutions that benefit the entire community.</p>
          <Row>
            {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
              <Col xs={12} sm={6} lg={4} key={id}>
                <ProfileCard frontmatter={frontmatter} cardlink = {fields.slug}/>
              </Col>
            ))}
          </Row>
        </div>
        <div className="expect">
          <h2> What Does a Community Manager Do? </h2>
          <p> Layer5 Community Managers generally oversee community activities and support ongoing initiatives. They are responsible for the health and growth of the community.
             Community Managers cultivate an environment which attracts new community members by ensuring that timely and completed responses are provided to questions asked.
             Aspects of marketing including member and project promotion as well as aspects of project management by organizing meetings and triaging issues are under the purview of Community Managers. </p>
          <p>Community Managers work to ensure that existing community members are retained by helping those members stay engaged in projects on an ongoing basis.</p>
        </div>
        <div className="manager-meet">
          <h2> Want To Know More About Community Managers?</h2>
          <p>Take a look at the <Link to="/community/handbook">Community Handbook</Link></p>
        </div>
        <div className="conduct">
          <h2> Code of Conduct </h2>
          <p> The comfort and safety of Layer5 community members is our priority. You must agree to the Code of Conduct to participate in the Layer5 community, and any violations of the Code of Conduct will be taken seriously. <br/>
                    To report any violations please fill out this incident form. </p>
          <Button primary title="Report Incident" url="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform" external={true}/>
        </div>
      </Container>
    </CommunityManagersWrapper>
  );
};

export default CommunityManagers;
