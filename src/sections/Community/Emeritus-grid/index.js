import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "../../../reusecore/Layout";
import ProfileCard from "../../../components/Profile-card";
import { useStaticQuery, graphql } from "gatsby";
import { EmeritusWrapper } from "./emeritus.style";

const Emeritus=() => {
  const data=useStaticQuery(
    graphql`query emeritus {
  allMdx(
    sort: {fields: [frontmatter___name], order: ASC}
    filter: {fields: {collection: {eq: "members"}}, frontmatter: {emeritus: {eq: "yes"}}}
  ) {
    nodes {
      id
      frontmatter {
        name
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
    <EmeritusWrapper>
      <div className="emeritus-text">
        <h2>Layer5 MeshMate Emeritus</h2>
        <p>
                    Once a MeshMate, always a MeshMate. We thank and salute our previous MeshMates. Each has served the Layer5 community selflessly.
        </p>
      </div>
      <Row>
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <Col xs={12} sm={6} lg={3} key={id}>
            <Link to={fields.slug}>
              <ProfileCard frontmatter={frontmatter} />
            </Link>
          </Col>
        ))}
      </Row>
    </EmeritusWrapper>
  );
};

export default Emeritus;
