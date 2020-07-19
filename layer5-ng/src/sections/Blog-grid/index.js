import React from "react";
import { useStaticQuery, graphql ,Link } from "gatsby";

import { IoIosArrowRoundForward } from "react-icons/io";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import blogThumb1 from "../../assets/images/blog/post/blog-post-1.png";
import blogThumb2 from "../../assets/images/blog/post/blog-post-2.png";
import blogThumb3 from "../../assets/images/blog/post/blog-post-3.png";
import blogThumb4 from "../../assets/images/blog/post/blog-post-4.png";
import blogThumb5 from "../../assets/images/blog/post/blog-post-5.png";
import blogThumb6 from "../../assets/images/blog/post/blog-post-6.png";

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
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
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
      <PageHeader title="Blog Grid" author={{ name: "Alexa", profile: "#" }} />

      <div className="blog-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div className="blog-grid-wrapper">
                <Row>
                    {data.allMdx.nodes.map(({id, excerpt, frontmatter, fields }) => (
                        <Col xs={12} sm={6} key={id}>
                          <div className="post-block">
                            <div className="post-thumb-block">
                              <Link className="anchor" to={fields.slug}>
                                <img src={blogThumb1} alt="img" />
                              </Link>
                            </div>
                            <div className="post-content-block">
                              <div className="post-meta-block">
                                <span>In: </span>
                                <Link className="anchor" to="#">
                                  Discussion
                                </Link>
                                <span className="divider">/</span>
                                <span>{frontmatter.date}</span>
                              </div>
                              <h2 className="post-title">
                                <Link className="anchor" to={fields.slug}>
                                  {frontmatter.title}
                                </Link>
                              </h2>
                              <p className="post-entry">
                                {excerpt}
                              </p>
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
