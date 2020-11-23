import React from "react";
import { graphql, useStaticQuery} from "gatsby";

import Card from "../../components/Card";

import RelatedPostsWrapper from "./relatedPosts.style";
import { Row, Col } from "../../reusecore/Layout";

const RelatedPosts = ( ) => {
    const data = useStaticQuery(
        // This query fetches latest posts now, change it in future by adding prop with tag for query
        graphql`
            query relatedPosts {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                    limit: 3     
                ) {
                    nodes {
                        frontmatter {
                            title
                            date(formatString: "Do MMMM YYYY")
                            author
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
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

    const relatedPosts = data.allMdx.nodes;

    return (
        <RelatedPostsWrapper>
            <div className="sidebar-widgets recent-post">
                <div className="widgets-title">
                    <h3>Related Posts</h3>
                </div>
                <br/>
                <Row>
                    <Col xs={12} lg={12}>
                        <Row>
                            { 
                                relatedPosts.map(post => {
                                    return (
                                        <Col xs={12} lg={4} key={post.fields.slug}>
                                            <Card frontmatter={post.frontmatter} fields={post.fields}/>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </RelatedPostsWrapper>
    );
};

export default RelatedPosts;
