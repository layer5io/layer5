import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../../components/Card";
import RelatedPostsWrapper from "./relatedNewsBlogs.style";
import { Col } from "../../../reusecore/Layout";
import Slider from "react-slick";

const RelatedNewsPosts = props => {
  const data = useStaticQuery(
    graphql`
            query relatedNewsPosts{
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { 
                        fields: { collection: { eq: "news" } }, frontmatter: { published: { eq: true } }
                    }
                    limit:6
                ) {
                    nodes {
                        frontmatter {
                            title
                            date(formatString: "MMM Do YYYY")
                            author
                            category
                            tags
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
      <div className="widgets-title">
        <h3>Latest News</h3>
      </div>
      {
        typeof window !== "undefined" &&
                <Slider
                  dots= { window.innerWidth < 992 }
                  arrows={ window.innerWidth >= 992 }
                  infinite= {false}
                  speed= "500"
                  slidesToShow= {window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                  slidesToScroll= {1}
                >
                  {
                    relatedPosts.map((newsPost) => {
                      return (
                        <Col className="cardCol" xs={12} key={newsPost.fields.slug}>
                          <Card frontmatter={newsPost.frontmatter} fields={newsPost.fields}/>
                        </Col>
                      );
                    })
                  }
                  <Col xs={12} lg={12} className="allBlogs">
                    <div className="allBlogs_card">
                      <Link to="/company/news">
                        <h2>All News</h2>
                        <IoIosArrowRoundForward/>
                      </Link>
                    </div>
                  </Col>
                </Slider>
      }
    </RelatedPostsWrapper>
  );
};

export default RelatedNewsPosts;
