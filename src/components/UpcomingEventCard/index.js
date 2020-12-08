import React from "react";
import Image from "../image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import UpcomingEventsWrapper from "./EventCard.style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Mousewheel]);

const UpcomingEvents = ({ data }) => {
    return (
        <UpcomingEventsWrapper>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">

                    <Swiper
                        spaceBetween={100}
                        slidesPerView={1}
                        mousewheel
                        pagination={{ clickable: true }}
                    >
                        {data.nodes.map(item => {
                            return(
                                <SwiperSlide key={item.id}>
                                    <div className="blog-slider__item swiper-slide">
                                        <div className="blog-slider__img">
                                            <Image {...item.frontmatter.thumbnail} alt={item.frontmatter.title} />
                                        </div>
                                        <div className="blog-slider__content">
                                            <h3 className="blog-slider__title">{item.frontmatter.title}</h3>
                                            <span className="blog-slider__code">{item.frontmatter.date}</span>
                                            <div className="blog-slider__text">
                                                <MDXRenderer>
                                                    {item.body}
                                                </MDXRenderer>
                                            </div>
                                            <div className="blog-slider__button">
                                                <a href={item.frontmatter.eurl} rel="noreferrer" target="_blank">Join Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                </div>
            </div>
        </UpcomingEventsWrapper>
    );
};

export default UpcomingEvents;