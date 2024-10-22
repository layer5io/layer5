import React, { memo, Suspense, useState, useEffect } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { partners } from "./partners-home-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerImage = memo(({ partner }) => (
  <div className="partner__block__inner">
    <img
      className="partner-image"
      id={partner.name}
      src={partner.imageLink}
      alt={partner.name}
      width={partner.imageWidth}
      height={partner.imageHeight}
      loading="eager"
    />
  </div>
));

const PartnerSlider = memo(({ settings, isVisible }) => (
  <div style={{
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease-in-out"
  }}>
    <Slider {...settings}>
      {partners.map((partner, index) => (
        <Link
          to={partner.imageRoute}
          className="partner-card"
          key={partner.name || index}
        >
          <PartnerImage partner={partner} />
        </Link>
      ))}
    </Slider>
  </div>
));

const SliderFallback = () => (
  <div style={{ height: "110px", visibility: "hidden" }} />
);

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    initialSlide: 1,
    lazyLoad: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    autoplay: isLoaded,
    autoplaySpeed: 1500,
    className: "partner-slider",
    responsive: [
      {
        breakpoint: 1400,
        settings: "unslick"
      }
    ]
  };

  return (
    <PartnerItemWrapper>
      <Container>
        <Row>
          <SectionTitle
            className="section-title"
            $leftAlign={true}
            $UniWidth="75%"
          >
            <h4>ENGAGING AND COLLABORATING WITH</h4>
          </SectionTitle>
        </Row>
      </Container>
      <Suspense fallback={<SliderFallback />}>
        <PartnerSlider
          settings={settings}
          isVisible={isLoaded}
        />
      </Suspense>
    </PartnerItemWrapper>
  );
};

export default Projects;