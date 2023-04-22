import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperContainer from "./mobile-swiper.style.js";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import dragDrop from "../images/drag-drop-components.gif";
import mergeDesign from "../images/merge-design.gif";
import connectComponents from "../images/connect-components.gif";
import shareDesign from "../images/share-design.gif";


const CONTENT = [
  {
    title: "Design your deployments the way you want",
    img: dragDrop,
    description:
      "Browse available components and select the specific version you need. Build complex cloud native deployments.",
  },
  {
    title: "Manage your applications visually and intuitively",
    img: mergeDesign,
    description:
      "Drag-and-drop an existing design to merge it with your current design.",
  },
  {
    title: "Build the bridge",
    img: connectComponents,
    description:
      "Connect components or group them as needed.",
  },
  {
    title: "Stop finger-pointing",
    img: shareDesign,
    description:
      "Share your designs publically or in private to collaborate with others in real-time.",
  },
];


const Card = ({ title, description, img, readMoreLink }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img style={{ border: "1px solid #444444", borderRadius: "10px" }} src={img} alt="" />
      {/* <a href={readMoreLink}>Read More</a> */}
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

