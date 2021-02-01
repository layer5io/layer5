import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import CommunityImage1 from "./Community-Pictures/Yogi Porla showing Layer5 parntership at HPE Discover.png";
import CommunityImage2 from "./Community-pictures/Nikhil Ladha - MeshMate of the Year.png";
import CommunityImage3 from "./Community-pictures/Derek Weeks and Lee at book signing at All Things Open.jpg";
import CommunityImage4 from "./Community-pictures/Navendu Pottekkat.png";
import CommunityImage5 from "./Community-pictures/First meeting with Ishita Kumar -2020-06-11 at 3.37.52 PM.jpg";
import CommunityImage6 from "./Community-pictures/Utkarsh Srivasta.png";
import CommunityImage7 from "./Community-pictures/ed-warnicke-network-service-mesh.jpg";
import CommunityImage8 from "./Community-pictures/Abishek Kumar.png";
import CommunityImage9 from "./Community-pictures/IMG_6521.jpeg";
import CommunityImage10 from "./Community-pictures/Augustine Ogiza.png";
import CommunityImage11 from "./Community-pictures/IMG_6936.jpeg";
import CommunityImage12 from "./Community-pictures/Girish Ranganathan presenting at NSMCon.jpg";
import CommunityImage13 from "./Community-pictures/Rodolfo Martinez Vega.png";
import CommunityImage14 from "./Community-pictures/istio-up-and-running-framed.jpg";
import CommunityImage15 from "./Community-pictures/Jash Patel.png";
import CommunityImage16 from "./Community-pictures/gsoc-shirt.jpg";
import CommunityImage17 from "./Community-pictures/Michael Gfeller.png";
import CommunityImage18 from "./Community-pictures/Lee Calcote and Zack Butcher.jpeg";
import CommunityImage19 from "./Community-pictures/Aisuko Li.png";

// 

// import CommunityImage8 from "./Community-pictures/.jpg";
// import CommunityImage8 from "./Community-pictures/.jpg";

const PictureSliderWrapper = styled.div`
      .slick-slider {
        margin-top: 1rem;
        
        margin-left: 2.125rem;
        width: 100%;
        /* max-width: 25rem; */
        @media (max-width: 62rem) {
           margin: 3.75rem auto;
        }
        @media (max-width: 36rem) {
            margin: 5rem auto;
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
        <img src={CommunityImage4} alt="Community Member"/>
        <img src={CommunityImage5} alt="Community Member"/>
        <img src={CommunityImage6} alt="Community Member"/>
        <img src={CommunityImage7} alt="Community Member"/>
        <img src={CommunityImage8} alt="Community Member"/>
        <img src={CommunityImage9} alt="Community Member"/>
        <img src={CommunityImage10} alt="Community Member"/>
        <img src={CommunityImage11} alt="Community Member"/>
        <img src={CommunityImage12} alt="Community Member"/>
        <img src={CommunityImage13} alt="Community Member"/>
        <img src={CommunityImage14} alt="Community Member"/>
        <img src={CommunityImage15} alt="Community Member"/>
        <img src={CommunityImage16} alt="Community Member"/>
        <img src={CommunityImage17} alt="Community Member"/>
        <img src={CommunityImage18} alt="Community Member"/>
        <img src={CommunityImage19} alt="Community Member"/>
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;
