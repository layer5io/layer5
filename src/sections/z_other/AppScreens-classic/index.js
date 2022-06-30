import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import { SlickSlider, SliderItem } from "../../../reusecore/SlickSlider";

import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

import screen1 from "../../../assets/images/classic/screens/secreens-1.png";
import screen2 from "../../../assets/images/classic/screens/secreens-2.png";
import screen3 from "../../../assets/images/classic/screens/secreens-3.png";
import screen4 from "../../../assets/images/classic/screens/secreens-4.png";
import screen5 from "../../../assets/images/classic/screens/secreens-5.png";

import AppScreenSctionWrapper from "./appScreenSection.style";

const AppScreensClassic = () => {
  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-prev-icon">
      <IoIosArrowRoundBack />
    </button>
  );
  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props} className="slick-arrow slick-next-icon">
      <IoIosArrowRoundForward />
    </button>
  );
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "170px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px"
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          centerPadding: "60px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "00px"
        }
      }
    ],
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />
  };
  return (
    <AppScreenSctionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <SectionTitle
              className="section-title-block"
              leftAlign={true}
              UniWidth="100%"
              mb={50}
            >
              <h4>app screens</h4>
              <h2>
                <span>See screenshot </span> & engage in this app.
              </h2>
            </SectionTitle>
          </Col>
          <Col xs={12} sm={6}>
            <div className="view-more-button">
              <Button title="View on Google Play" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SlickSlider {...settings}>
              <SliderItem key={"1"}>
                <img src={screen1} alt="img" />
              </SliderItem>
              <SliderItem key={"2"}>
                <img src={screen2} alt="img" />
              </SliderItem>
              <SliderItem key={"3"}>
                <img src={screen3} alt="img" />
              </SliderItem>
              <SliderItem key={"4"}>
                <img src={screen4} alt="img" />
              </SliderItem>
              <SliderItem key={"2"}>
                <img src={screen5} alt="img" />
              </SliderItem>
            </SlickSlider>
          </Col>
        </Row>
      </Container>
    </AppScreenSctionWrapper>
  );
};

export default AppScreensClassic;
