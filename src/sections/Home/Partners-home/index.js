import React, { Suspense, useState, useEffect } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { partners } from "./partners-home-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerImage = ({ partner }) => (
  <div className={partner.innerDivStyle}>
    <img
      className="partner-image"
      id={partner.name}
      src={partner.imageLink}
      alt={partner.name}
      width={partner.imageWidth}
      height={partner.imageHeight}
      loading="lazy"
      onLoad={(e) => {
        e.target.classList.add("loaded");
      }}
    />
  </div>
);

const SliderContent = ({ settings }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'opacity 0.3s ease-in-out',
      position: 'relative',
      height: isVisible ? 'auto' : '110px'
    }}>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <Link 
            className="partner-card" 
            to={partner.imageRoute} 
            key={index}
            style={{ 
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          >
            <PartnerImage partner={partner} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

const SliderFallback = () => (
  <div style={{ 
    height: "110px", 
    visibility: "hidden",
    position: "relative"
  }} />
);

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    autoplay: isClient,
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
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {isClient && (
          <Suspense fallback={<SliderFallback />}>
            <SliderContent settings={settings} />
          </Suspense>
        )}
      </div>
    </PartnerItemWrapper>
  );
};

export default Projects;
