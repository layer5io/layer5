import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import IntegrationList from "../../../assets/data/integrations/IntegrationList";
import { Link } from "gatsby";
import Button from "../../../reusecore/Button";

const RelatedIntegrationWrapper = styled.section`

  margin:2rem 0;
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

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  
  .img-effect{
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
  .img-effect:hover{
    transform: scale(1.05);
  }
  .btn-integration{
    display: flex;
    padding: 10px;
    margin: 0 5rem 2rem auto;
  }
`;
const relatedIntegration = ({ category }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 12,
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
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <RelatedIntegrationWrapper>
      <h2> Explore other Integrations </h2>
      <Button
        primary
        className="btn-integration"
        type="button"
        title="See All Integrations"
        url="/service-mesh-management/meshery/integrations"
      />
      <Slider {...settings}>
        {
          IntegrationList.map((item, index) => {
            if (item.category === category){
              return   (
                <div key={index}>
                  <Link
                    to={`/service-mesh-management/meshery/integrations/${item.name.toLowerCase()}`}
                  >
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

export default relatedIntegration;
