import React from "react";
import Slider from "react-slick";
import CommunityImage1 from "./community1.png";
import CommunityMemberImage from "./community-member.png";
import styled from "styled-components";

const PictureSliderWrapper = styled.div`
      .slick-slider {
        margin-top: 180px;
        margin-left: 50px;
        max-width: 400px;
        @media (max-width: 992px) {
           margin: 60px auto;
        }
        @media (max-width: 576px) {
            margin: 120px auto;
            max-width: 300px;
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
      
      .slick-arrow{
        
      }
`;


const PictureSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <PictureSliderWrapper>
            <Slider {...settings}>
                <img src={CommunityMemberImage}/>
                <img src={CommunityImage1}/>
            </Slider>
        </PictureSliderWrapper>
    );
};

export default PictureSlider;
