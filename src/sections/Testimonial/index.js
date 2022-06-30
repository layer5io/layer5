import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import { SlickSlider, SliderItem } from "../../reusecore/SlickSlider";

import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import  { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import data from "../../assets/data/testimonial";

import TestimonialWrapper from "./testimonial.style";

const Testimonial = () => {
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
    customPaging: function(i) {
      return (
        <a>
          <img src={data.thumbs[i]} alt="img" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots testimonial__thumb",
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />
  };

  return (
    <TestimonialWrapper id="testimonial">
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle leftAlign={true} className="testmonial__heading">
              <h4>Testimonial</h4>
              <h2>
                <span>What our users are</span> saying
              </h2>
            </SectionTitle>
            <SlickSlider {...settings} className="testimonial__slider">
              {data.testimonials.map((testimonial, index) => (
                <SliderItem key={index}>
                  <p>
                    <FaQuoteLeft />
                    {testimonial.quote}
                  </p>
                  <div className="slider__meta">
                    <img src={testimonial.thumb} alt="img" />
                    <div className="testimonial-client">
                      <h6>{testimonial.author}</h6>
                      <p>{testimonial.dsignation}</p>
                    </div>
                  </div>
                </SliderItem>
              ))}
            </SlickSlider>
          </Col>
        </Row>
      </Container>
    </TestimonialWrapper>
  );
};

export default Testimonial;
