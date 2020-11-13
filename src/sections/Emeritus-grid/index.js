import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "../../reusecore/Layout";
import ProfileCard from "../../components/Profile-card";
import { useStaticQuery, graphql } from "gatsby";
import { EmeritusWrapper } from "./emeritus.style";

const Emeritus=() => {
    const data=useStaticQuery(
        graphql`
            query emeritus {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { emeritus: { eq: "yes" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            emeritus
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
        <div>
            <h3>Layer5 MeshMate Emeritus</h3>
            <p>
                O​nce a MeshMate, always a MeshMate. We thank and salute our previous MeshMates. Each has served the Layer5 community selflessly.
            </p>
            <EmeritusWrapper>
                <Row>
                    {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                        <Col xs={6} sm={3} lg={2} key={id}>
                            <Link to={fields.slug}>
                                <ProfileCard frontmatter={frontmatter} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </EmeritusWrapper>
        </div>
    );
};

export default Emeritus;
