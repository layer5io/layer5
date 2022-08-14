import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import styled from "styled-components";
import IntegrationList from "../../../../assets/data/integrations/IntegrationList";

const RelatedIntegrationWrapper = styled.section`

  margin: 4rem 0;

  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    padding:10px;
    text-align:center;
    margin-right:10px;
    margin-left:10px;
  }
  .slick-slider {
    display: flex;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
  }
  
  h2{
    margin-bottom: 2rem;
    text-align: center;
  }

  .slick-dots li.slick-active button:before {
    color: black;
  }

  .slick-prev:before, .slick-next:before {
    color: black;
  }
  
  .img-effect{
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .img-effect:hover{
    transform: scale(1.05);
  }
`;
const RelatedIntegration = ({ category }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      }
    ]
  };
  return (
    <RelatedIntegrationWrapper>
      <h2> Related Integrations </h2>
      <Slider {...settings}>
        {
          IntegrationList.map((item, index) => {
            if (item.category === category && item.status != "InProgress"){
              return (
                <div key={index}>
                  <Link to={`/service-mesh-management/meshery/integrations/${item.name.toLowerCase()}`}>
                    <img src={item.img} alt={item.name} height={60} className="img-effect" />
                  </Link>
                </div>
              );
            }
          })
        }
      </Slider>
    </RelatedIntegrationWrapper>
  );
};

export default RelatedIntegration;
