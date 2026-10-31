import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperContainer from "./mobile-swiper.style.js";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";
import AutoVideo from "../../../../components/AutoVideo";
import { KANVAS_VIDEOS } from "../kanvas-design-features-carousel";


const CONTENT = [
  {
    title: "Confidently make changes to your infrastructure",
    video: KANVAS_VIDEOS.dragDrop,
    description:
      "Kanvas automatically catalogs and provides insight into all of your services, datastores and the connections between them, allowing teams to deeply understand application architecture.",
    gradient: "one",
  },
  {
    title: "Understand your infrastructure with visualization and automation",
    video: KANVAS_VIDEOS.mergeDesign,
    description:
      "Kanvaselps your team automate infrastructure understanding from the architecture to a single PR so your team can ship, refactor and onboard to legacy or existing applications faster.",
    gradient: "two",
  },
  {
    title: "Make working across services as easy as working across files",
    video: KANVAS_VIDEOS.connectComponents,
    description:
      "Get automatic visibility into how your services interact in your application so you can confidently change, update or migrate to microservices.",
    gradient: "three",
  },
  {
    title: "Stop finger-pointing",
    video: KANVAS_VIDEOS.shareDesign,
    description:
      "Share your designs publically or in private to collaborate with others in real-time.",
    gradient: "four",
  },
];

//readMoreLink is available if link is uncommented below
// eslint-disable-next-line no-unused-vars
const Card = ({ title, description, video, active, readMoreLink }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <AutoVideo {...video} active={active} style={{ border: "1px solid #444444", borderRadius: "10px", width: "100%" }} />
      {/* <a href={readMoreLink}>Read More</a> */}
    </div>
  );
};

export const KanvasMobileSwiper = () => {
  return (
    <SwiperContainer>
      <h2>Multi user real time collaboration</h2>
      <h6>
        Designer and Operator live side-by-side, so all design work, from ideation to operation, can be found in one
        place.
      </h6>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={false}
        className="mySwiper"
      >
        {CONTENT.map(({ title, description, video, readMoreLink, gradient }) => (
          <SwiperSlide key={title}>
            {({ isActive }) => (
              <div className={`card ${gradient}`}>
                <Card title={title} description={description} video={video} active={isActive} readMoreLink={readMoreLink} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

