import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import LearningPath1 from "../images/learning-path1.png";
import LearningPath2 from "../images/learning-path2.png";
import LearningPath4 from "../images/learning-path4.png";

const PictureSliderWrapper = styled.div`
  width: 100%;
  max-width: 600px; 
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
        max-height: 550px; 
        height: auto;
        object-fit: contain; 
      }
    }
  }

  @media (max-width: 850px) {
    .slick-prev,
    .slick-next {
      display: none;
    }

    .slick-track .slick-slide img {
      max-height: 350px; 
    }
  }
`;



const PictureSlider = () => {
  const data = [LearningPath1, LearningPath2, LearningPath4];

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