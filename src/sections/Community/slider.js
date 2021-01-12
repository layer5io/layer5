import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CommunityImage1 from "./community1.png";
import CommunityImage2 from "./community2.png";
import CommunityImage3 from "./community-member.jpeg";

const PictureSliderWrapper = styled.div`
      .slick-slider {
        margin-top: 11.25rem;
        margin-left: 3.125rem;
        max-width: 25rem;
        @media (max-width: 62rem) {
           margin: 3.75rem auto;
        }
        @media (max-width: 36rem) {
            margin: 15rem auto;
            max-width: 18.75rem;
        }
      }
      .slick-track {
         display: flex;
        .slick-slide {
          display: flex;
          height: auto;
          align-items: center;
          justify-content: center;
        }
      }
`;

const PictureSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return(
        <PictureSliderWrapper>
            <Slider {...settings}>
                <img src={CommunityImage1} alt="Community Member"/>
                <img src={CommunityImage2} alt="Community Member"/>
                <img src={CommunityImage3} alt="Community Member"/>
            </Slider>
        </PictureSliderWrapper>
    );
};

export default PictureSlider;
