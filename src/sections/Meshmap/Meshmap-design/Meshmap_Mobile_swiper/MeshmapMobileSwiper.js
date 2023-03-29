import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SwiperContainer from "./mobile-swiper.style.js";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import img from "./images/BlankSwiper.png";

const CONTENT = [
  {
    title: "Design your deployments the way you want",
    description:
      "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.",
    img: img,
    readMoreLink: "https://google.com",
  },
  {
    title: "Manage your applications visually and intuitively",
    description:
      "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
    img: img,
    readMoreLink: "https://google.com",
  },
  {
    title: "Build the bridge",
    description:
      "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
    img: img,
    readMoreLink: "https://google.com",
  },
  {
    title: "Stop finger-pointing",
    description:
      "Make infrastructure and application management less about finger-pointing and more about collaborating.",
    img: img,
    readMoreLink: "https://google.com",
  },
];


const Card = ({ title, description, img, readMoreLink }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} alt="" />
      <a href={readMoreLink}>Read More</a>
    </div>
  );
};

export const MeshmapMobileSwiper = () => {
  return (
    <SwiperContainer>
      <h2>Multi user real time collaboration</h2>
      <h6>
        Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one
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
        {CONTENT.map(({ title, description, img, readMoreLink }, index) => (
          <SwiperSlide key={title}>
            <div className={`card ${index % 2 === 0 ? "dark" : "light"}`}>
              <Card title={title} description={description} img={img} readMoreLink={readMoreLink} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

