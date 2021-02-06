import React from "react";
import Slider from "react-slick";
import SoSpecialWrapper from "./so-special-style";
import MarketLandscape from "./MarketLandscape.png";
import Forrester from "./Forrester.jpg";

const SoSpecial = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    className:"slick-inside-div",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <SoSpecialWrapper>
      <div className="so-special-head">
        <h1>Why Is Layer5 So special?</h1>
      </div>
      <div className="special_carousel">
        <Slider {...settings}>
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={Forrester} alt="forrester-image" />
            </div>
            <p className="special-cont_para">Forrester: Layer5 and Meshery Help Developers Focus On The Business</p>
          </div>    
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={MarketLandscape} alt="market-landscape-image" />
            </div>
            <p className="special-cont_para">Meshery Provides the Service Mesh Managemnet Plane and Kubernetes Evolves into an Enterprise Platform</p>
          </div>    
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={Forrester} alt="forrester-image" />
            </div>
            <p className="special-cont_para">Forrester: Layer5 and Meshery Help Developers Focus On The Business</p>
          </div>    
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={MarketLandscape} alt="market-landscape-image" />
            </div>
            <p className="special-cont_para">Meshery Provides the Service Mesh Managemnet Plane and Kubernetes Evolves into an Enterprise Platform</p>
          </div> 
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={Forrester} alt="forrester-image" />
            </div>
            <p className="special-cont_para">Forrester: Layer5 and Meshery Help Developers Focus On The Business</p>
          </div> 
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={MarketLandscape} alt="market-landscape-image" />
            </div>
            <p className="special-cont_para">Meshery Provides the Service Mesh Managemnet Plane and Kubernetes Evolves into an Enterprise Platform</p>
          </div>    
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={Forrester} alt="forrester-image" />
            </div>
            <p className="special-cont_para">Forrester: Layer5 and Meshery Help Developers Focus On The Business</p>
          </div> 
          <div className="special-cont">
            <div className="special-cont_img">
              <img src={MarketLandscape} alt="market-landscape-image" />
            </div>
            <p className="special-cont_para">Meshery Provides the Service Mesh Managemnet Plane and Kubernetes Evolves into an Enterprise Platform</p>
          </div>    
        </Slider>
      </div>
    </SoSpecialWrapper>
  );
};

export default SoSpecial;