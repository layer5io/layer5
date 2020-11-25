import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";

import Card from "../../components/Card";

import RelatedPostsWrapper from "./relatedPosts.style";
import { Row, Col } from "../../reusecore/Layout";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
};


const RelatedPosts = ( ) => {
    const data = useStaticQuery(
        // This query fetches latest posts now, change it in future by adding prop with tag for query
        graphql`
            query relatedPosts {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                    limit: 6     
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
            <div className="widgets-title">
                <h3>Related Posts</h3>
            </div>
            <Carousel
                additionalTransfrom={1}
                arrows
                autoPlay={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                customTransition="all .5"
                dotListClass="custom-dot-list-style"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="carousel-item-padding-40-px"
                keyBoardControl={true}
                containerClass="container"
                // containerClass="carousel-container"
                // containerClass="container-with-dots"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                ssr={true} // means to render carousel on server-side.
                draggable={false}
                responsive={responsive}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable={true}
                showDots={true}
                transitionDuration={500}
            >
                
                { 
                    relatedPosts.map(post => {
                        return (
                            <Col xs={12} lg={12} key={post.fields.slug}>
                                <Card frontmatter={post.frontmatter} fields={post.fields}/>
                            </Col>
                        );
                    })
                }
                    
                <Col xs={12} lg={12} >
                    <Link to={"/blog"}>More posts </Link>
                </Col>
            </Carousel>
        </RelatedPostsWrapper>
    );
};

export default RelatedPosts;
