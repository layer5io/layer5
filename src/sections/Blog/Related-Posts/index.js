import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../../components/Card";
import RelatedPostsWrapper from "./relatedPosts.style";
import { Col } from "../../../reusecore/Layout";
import Slider from "react-slick";
import RelatedPostsFactory from "./relatedPostsFactory";


const RelatedPosts = props => {
  const data = useStaticQuery(
    graphql`query relatedPosts {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        author
        category
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
  const { category, tags, currentPostSlug } = props;
  const posts = data.allMdx.nodes;
  const relatedPosts = new RelatedPostsFactory (
    posts, currentPostSlug
  ).setMaxPosts(6)
    .setCategory(category)
    .setTags(tags)
    .getPosts();

  return (
    <RelatedPostsWrapper>
      <div className="widgets-title">
        <h3>Related Blogs</h3>
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
                    relatedPosts.map(({post}) => {
                      return (
                        <Col className="cardCol" xs={12} key={post.fields.slug}>
                          <Card frontmatter={post.frontmatter} fields={post.fields}/>
                        </Col>
                      );
                    })
                  }
                  <Col xs={12} lg={12} className="allBlogs">
                    <div className="allBlogs_card">
                      <Link to="/blog">
                        <h2>All Blogs</h2>
                        <IoIosArrowRoundForward/>
                      </Link>
                    </div>
                  </Col>
                </Slider>
      }
    </RelatedPostsWrapper>
  );
};

export default RelatedPosts;
