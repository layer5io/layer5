import React from "react";
import { useStaticQuery, graphql ,Link } from "gatsby";
import Img from "gatsby-image";

import { IoIosArrowRoundForward } from "react-icons/io";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import { BlogPageWrapper } from "./blogGrid.style";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query SITE_INDEX_QUERY {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY")
            author
            thumbnail{
                childImageSharp{
                    fluid(maxWidth: 500, maxHeight:300){
                        ...GatsbyImageSharpFluid
                    }
                }
            }  
          }
          fields {
            slug
          }
        }
      }
    }
  `);

    return (
        <BlogPageWrapper>
            <PageHeader title="Blogs" />

            <div className="blog-page-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <div className="blog-grid-wrapper">
                                <Row>
                                    {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                        <Col xs={12} sm={6} key={id}>
                                            <div className="post-block">
                                                <div className="post-thumb-block">
                                                    <Link className="anchor" to={fields.slug}>
                                                        <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
                                                    </Link>
                                                </div>
                                                <div className="post-content-block">
                                                    <div className="post-meta-block">
                                                        <span>By: {frontmatter.author}</span>
                                                        <span className="divider">/</span>
                                                        <span>{frontmatter.date}</span>
                                                    </div>
                                                    <h2 className="post-title">
                                                        <Link className="anchor" to={fields.slug}>
                                                            {frontmatter.title}
                                                        </Link>
                                                    </h2>
                                                    <Link className="readmore-btn" to={fields.slug}>
                                see more <IoIosArrowRoundForward />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </BlogPageWrapper>
    );
};

export default BlogPage;
