import React, {useState, useEffect } from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";

import Card from "../../components/Card";

import RelatedPostsWrapper from "./relatedPosts.style";
import { Col } from "../../reusecore/Layout";

import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination, Navigation]);

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
                            date(formatString: "MMM Do YYYY")
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
            {
                typeof window !== "undefined" && 
                <Slider 
                    dots= { window.innerWidth <= 992 }
                    arrows={ window.innerWidth >= 992 }
                    infinite= {false}
                    speed= "500"
                    slidesToShow= {window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                    slidesToScroll= {1}
                >
                    {
                        relatedPosts.map(({post}) => {
                            return (
                                <SwiperSlide style={{display:"inline-block"}} key={post.fields.slug}>
                                    <Col className="cardCol" xs={10} lg={10} key={post.fields.slug}>
                                        <Card frontmatter={post.frontmatter} fields={post.fields}/>
                                    </Col>
                                </SwiperSlide>
                            );
                        })
                    }
                    <Col xs={12} lg={12} className="allBlogsCard">
                        <Link to="/blog">
                            All Blogs <IoIosArrowRoundForward/>
                        </Link>
                    </Col>
                </Slider>
            }
            
            {   typeof window !== "undefined" && 
                <Swiper
                    navigation = { window.innerWidth >= 992}
                    pagination={ window.innerWidth <= 992}
                    spaceBetween={5}
                    slidesPerView={window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                    wrapperTag='div'
                    infinite = {false}
                >
                    {
                        relatedPosts.map(({post}) => {
                            return (
                                <SwiperSlide style={{display:"inline-block"}} key={post.fields.slug}>
                                    <Col className="cardCol" xs={10} lg={10} key={post.fields.slug}>
                                        <Card frontmatter={post.frontmatter} fields={post.fields}/>
                                    </Col>
                                </SwiperSlide>
                            );
                        })
                    }

                    <SwiperSlide>
                        <Col xs={12} lg={12} className="allBlogsCard">
                            <Link to="/blog">
                                All Blogs <IoIosArrowRoundForward/>
                            </Link>
                        </Col>
                    </SwiperSlide>
                </Swiper>
            }
        </RelatedPostsWrapper>
    );
};

export default RelatedPosts;
