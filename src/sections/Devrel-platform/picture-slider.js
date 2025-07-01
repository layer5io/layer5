import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import ChallangePNG from "./images/challange_mac.png";
import DesignPNG from "./images/design_mac.png";
import TutorialPNG from "./images/tutorial_mac.png";

const PictureSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  .slick-slider {
    margin-top: 1rem;
    width: 100%;

    .slick-list {
      width: 100%;
    }

    .slick-prev,
    .slick-next {
      &:before {
        color: ${(props) => props.theme.tertiaryColor};
      }
    }
  }

  @media (max-width: 36rem) {
    overflow: hidden;
    position: relative;

    .slick-prev,
    .slick-next {
      display: none ;
    }
  }

  .slick-track {
    display: flex;

    .slick-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;

const PictureSlider = () => {
  const data = [ChallangePNG, TutorialPNG, DesignPNG];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <PictureSliderWrapper>
      <Slider {...settings}>
        {data.map((image, index) => (
          <img key={index} src={image} alt="content" />
        ))}
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;
