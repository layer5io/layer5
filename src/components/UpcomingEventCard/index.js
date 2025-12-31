import React from "react";
import Image from "../image";
import UpcomingEventsWrapper from "./EventCard.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { Link } from "gatsby";
import "swiper/css/bundle";
import Button from "../../reusecore/Button";
import slugify from "../../utils/slugify";


const UpcomingEvents = ({ data }) => {
  return (
    <UpcomingEventsWrapper>
      <div className="blog-slider swiper">
        <div style={{ display: "block" }} className="blog-slider__wrp swiper-wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Mousewheel, Pagination]}
            pagination={{ clickable: true }}
          >
            {data.nodes.map(item => {
              const joinUrl = item.frontmatter.eurl || item.frontmatter.joinLink || item.frontmatter.registration || "";
              const isValidUrl = joinUrl && /^https?:\/\//i.test(joinUrl);
              return (
                <SwiperSlide key={item.id}>
                  <div className="blog-slider_item swiper-slide">
                    <div className="blog-slider_img">
                      <Link to={`/community/events/${slugify(item.frontmatter.title)}`}>
                        <Image {...item.frontmatter.thumbnail} alt={item.frontmatter.title} />
                      </Link>
                    </div>
                    <div className="blog-slider_content">
                      <h3 className="blog-slider_title">{item.frontmatter.title}</h3>
                      <p className="blog-slider_date">{item.frontmatter.date}</p>
                      <p className="blog-slider_description">{item.frontmatter.abstract}</p>
                      {isValidUrl ? (
                        <Button
                          $secondary
                          className="blog-slider_button"
                          $url={joinUrl}
                          title="Join Now"
                          $external={true}
                          aria-label={`Join ${item.frontmatter.title} event`}
                        />
                      ) : (
                        <Button
                          $secondary
                          className="blog-slider_button"
                          title="Join Now"
                          aria-label={`Join ${item.frontmatter.title} event (link unavailable)`}
                          disabled
                          style={{ opacity: 0.5, cursor: "not-allowed" }}
                          onClick={() => {

                            console.error(`No valid join link for event: ${item.frontmatter.title}`);
                          }}
                        >Join Now
                        </Button>
                      )}
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
