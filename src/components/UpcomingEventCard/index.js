import React from "react";
import Image from "../image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import UpcomingEventsWrapper from "./EventCard.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css/bundle";
import Button from "../../reusecore/Button";


const UpcomingEvents = ({ data }) => {
  return (
    <UpcomingEventsWrapper>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">

          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            modules={[Mousewheel, Pagination]}
            pagination={{ clickable: true }}
          >
            {data.nodes.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="blog-slider_item swiper-slide">
                    <div className="blog-slider_img">
                      <Image {...item.frontmatter.thumbnail}  alt={item.frontmatter.title} />
                    </div>
                    <div className="blog-slider_content">
                      <h3 className="blog-slider_title">{item.frontmatter.title}</h3>
                      <p className="blog-slider_date">{item.frontmatter.date}</p>
                      <p className="blog-slider_description">{item.frontmatter.abstract}</p>
                      <div className="blog-slider_text">
                        <MDXRenderer>
                          {item.body}
                        </MDXRenderer>
                      </div>
                      <Button secondary className="blog-slider_button" url={item.frontmatter.eurl} title="Join Now" external={true} />
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
