import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import LearningPath1 from "../images/learning-path1.png";
import LearningPath2 from "../images/learning-path3.png";
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
        color: ${(props) => props.theme.secondaryColor};
      }
    }

    .slick-prev,
    .slick-next {
      box-shadow: none;
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
        border: ${props => props.isDark ? "none" : "2px solid #e0e0e0"};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      }

      .screenshot {
      display: block;
      box-shadow: var(--box-shadow-primary);
      margin-left: auto;
      margin-right: auto;
      background: #868e96
          url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244%22%20height%3D%2212%22%20viewBox%3D%220%200%2044%2012%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3Ccircle%20cx%3D%2222%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3Ccircle%20cx%3D%2238%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3C%2Fsvg%3E")
          4px 4px no-repeat;
      padding: 20px 0 0 0;
      position: relative;
      width: 100%;
      border-radius: 20px;
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



const PictureSlider = (props) => {
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
    <PictureSliderWrapper isDark={props.isDark}>
      <Slider {...settings}>
        {data.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} className="screenshot"/>
        ))}
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;