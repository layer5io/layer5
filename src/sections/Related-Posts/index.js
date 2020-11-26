import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";

import Card from "../../components/Card";

import RelatedPostsWrapper from "./relatedPosts.style";
import { Row, Col } from "../../reusecore/Layout";

import Carousel from "react-elastic-carousel";



const RelatedPosts = ( {tags} ) => {
    console.log(tags);
    const data = useStaticQuery(
        graphql`
            query relatedPosts{
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { 
                        fields: { collection: { eq: "blog" } }
                    }
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
                <h3>Related Blogs</h3>
            </div>
            <Carousel  
                itemsToScroll = {2}
                showArrows = {true}  
                breakPoints = {[
                    { width: 1, itemsToShow: 1, itemsToScroll:1},
                    { width: 550, itemsToShow: 2},
                    { width: 850, itemsToShow: 3},
                    { width: 1000, itemsToShow: 3}
                ]}
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
                    
                <Col xs={12} lg={12} className="allBlogsCard">
                    <a href="/blog">
                            All Blogs <IoIosArrowRoundForward/>
                    </a>
                </Col>
            </Carousel>
        </RelatedPostsWrapper>
    );
};

export default RelatedPosts;
