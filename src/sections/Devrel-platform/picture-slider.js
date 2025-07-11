import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import ChallangePNG from "./images/challange_mac.png";
import DesignPNG from "./images/design_mac.png";
import TutorialPNG from "./images/tutorial_mac.png";

const PictureSliderWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  .slick-slider {
    margin-top: 1rem;

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

  .slick-track {
    display: flex;

    .slick-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-height: 500px;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 850px) {
    .slick-prev,
    .slick-next {
      display: none ;
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
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <PictureSliderWrapper>
      <Slider {...settings}>
        {data.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} />
        ))}
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;
