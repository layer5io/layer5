import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { useStaticQuery, graphql } from "gatsby";

const PictureSliderWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;

  .slick-slider {
    margin-top: 1rem;
    height:100%;
    width: 100%;

    .slick-list{
      width:100%;
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

  const data = useStaticQuery(
    graphql`
      query community {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: {eq: "Community-pictures"}
            
          }
          sort: {fields: [base] }
        ) {
          edges {
            node {
              extension
              publicURL
            }
          }
        }
      }
    `
  );

  const settings = {
    dots : false,
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    autoplaySpeed : 2000
  };

  return (
    <PictureSliderWrapper>
      <Slider {...settings}>
        {data.allFile.edges.map((image, id) => (
          <img key={id} src={image.node.publicURL} alt="community" />
        ))}
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;
