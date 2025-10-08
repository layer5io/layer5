import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContainer from "../../../sections/Kanvas/Kanvas-design/Kanvas_Mobile_swiper/mobile-swiper.style.js";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";
import Levels from "./academy-catalog.gif";
import Challenges from "./challenges.webp";
import Badges from "./badges.webp";
import Track from "./track.webp";

const CONTENT = [
  {
    title: "CNCF Structured Learning Paths",
    img: Levels,
    description:
      "Comprehensive CNCF-aligned learning paths designed for different skill levels — from beginner to advanced. Master Kubernetes and cloud native technologies through hands-on experience.",
    gradient: "one",
  },
  {
    title: "Labs and Real-world Challenges",
    img: Challenges,
    description:
      "Hands-on labs and challenges on live Kubernetes clusters. Practice real-world scenarios, earn points, and climb the leaderboard as you sharpen your cloud native skills.",
    gradient: "two",
  },
  {
    title: "Earn Certifications and Badges",
    img: Badges,
    description:
      "Validate your skills with recognized certifications and badges. Build credibility, celebrate your achievements, and showcase your cloud native expertise.",
    gradient: "three",
  },
  {
    title: "Track Your Learning Journey",
    img: Track,
    description:
      "Stay motivated with clear progress tracking as you move forward. Keep an eye on your completed labs, challenges, and milestones, and see how your cloud native skills steadily grow step by step.",
    gradient: "four"
  }
];

const DivWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .highlight {
    background: linear-gradient(135deg, #00b39f, #00d3a9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

  img {
    max-height: 50%;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    padding-inline: 1rem;
  }

`;


const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img style={{ border: "1px solid #444444", borderRadius: "10px", height: "50%" }} src={img} alt="" />
    </div>
  );
};

const AcademyMobileSwiper = () => {
  return (
    <DivWrapper>
      <SwiperContainer style={{ marginBottom: "10%" }}>
        <h2 style={{ marginBottom: "2rem" }}>Unlock Your Cloud Native Journey</h2>
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
          {CONTENT.map(({ title, description, img, gradient }) => (
            <SwiperSlide key={title}>
              <div className={`card ${gradient}`}>
                <Card title={title} description={description} img={img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </DivWrapper>
  );
};

export default AcademyMobileSwiper;
