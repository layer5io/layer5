import React from "react";

import { SlickSlider, SliderItem } from "../../reusecore/SlickSlider";
import { Container } from "../../reusecore/Layout";

import Client1 from "../../assets/images/app/clients/client-1.png";
import Client2 from "../../assets/images/app/clients/client-2.png";
import Client3 from "../../assets/images/app/clients/client-3.png";
import Client4 from "../../assets/images/app/clients/client-4.png";
import Client5 from "../../assets/images/app/clients/client-5.png";

import ClientsSectionWrapper from "./clientSection.style";

const Client = () => {
  const settings = {
    autoplay : true,
    infinite : true,
    dots : false,
    speed : 500,
    slidesToShow : 4,
    slidesToScroll : 1,
    responsive : [
      {
        breakpoint : 912,
        settings : {
          slidesToShow : 3
        }
      },
      {
        breakpoint : 500,
        settings : {
          slidesToShow : 2
        }
      },
      {
        breakpoint : 400,
        settings : {
          slidesToShow : 1
        }
      }
    ]
  };
  return (
    <ClientsSectionWrapper>
      <Container>
        <SlickSlider {...settings}>
          <SliderItem>
            <div>
              <img src={Client1} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client2} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client3} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client4} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client5} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client1} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client2} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client3} alt="our clients" />
            </div>
          </SliderItem>
          <SliderItem>
            <div>
              <img src={Client4} alt="our clients" />
            </div>
          </SliderItem>
        </SlickSlider>
      </Container>
    </ClientsSectionWrapper>
  );
};

export default Client;
