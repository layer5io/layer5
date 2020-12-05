import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";

import Card from "../../components/Card";

import RelatedPostsWrapper from "./relatedPosts.style";
import { Col } from "../../reusecore/Layout";

import Carousel from "react-elastic-carousel";
import RelatedPostsFactory from "./relatedPostsFactory";


const RelatedPosts = props => {
    const data = useStaticQuery(
        graphql`
            query relatedPosts{
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { 
                        fields: { collection: { eq: "blog" } }, , frontmatter: { published: { eq: true } }
                    }
                ) {
                    nodes {
                        frontmatter {
                            title
                            date(formatString: "Do MMMM YYYY")
                            author
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
    const { tags, currentPostSlug } = props;
    const posts = data.allMdx.nodes;
    const relatedPosts = new RelatedPostsFactory (
        posts, currentPostSlug
    ).setMaxPosts(6)
        // .setCategory(category)
        .setTags(tags)
        .getPosts();

    return (
        <RelatedPostsWrapper>
            <div className="widgets-title">
                <h3>Related Blogs</h3>
            </div>
            <Carousel
                easing="ease"
                itemsToScroll = {1}
                className="carouselStyling"
                showArrows = {true}
                breakPoints = {[
                    { width: 1, itemsToShow: 1},
                    { width: 550, itemsToShow: 2},
                    { width: 850, itemsToShow: 3},
                    { width: 1000, itemsToShow: 3}
                ]}
            >
                {
                    relatedPosts.map(({post}) => {
                        return (
                            <Col xs={12} lg={12} key={post.fields.slug}>
                                <Card frontmatter={post.frontmatter} fields={post.fields}/>
                            </Col>
                        );
                    })
                }

                <Col xs={12} lg={12} className="allBlogsCard">
                    <Link to="/blog">
                        All Blogs <IoIosArrowRoundForward/>
                    </Link>
                </Col>
            </Carousel>
        </RelatedPostsWrapper>
    );
};

export default RelatedPosts;
