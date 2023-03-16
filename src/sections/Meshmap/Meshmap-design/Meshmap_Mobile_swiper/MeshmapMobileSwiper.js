import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import "./cardStyle.css";

const CONTENT = [
  {
    title: "Design your deployments the way you want",
    description:
      "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.",
  },
  {
    title: "Manage your applications visually and intuitively",
    description:
      "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
  },
  {
    title: "Build the bridge",
    description:
      "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
  },
  {
    title: "Stop finger-pointing",
    description:
      "Make infrastructure and application management less about finger-pointing and more about collaborating.",
  },
];

const Container = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  width: 45vw;
  // height:100vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  img {
    object-fit: contain;
    // image-position:cover;
  }

  h2 {
    margin: 0 0 1rem 0;
  }

  h6 {
    margin: 10px 0 2.5rem 0;
  }
`;

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export const MeshmapMobileSwiper = () => {
  return (
    <>
      <Container>
        <h2>Multi user real time collaboration</h2>
        <h6>
          Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one
          place.
        </h6>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
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
          {CONTENT.map(({ title, description }) => (
            <SwiperSlide key={title}>
              <Card title={title} description={description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
