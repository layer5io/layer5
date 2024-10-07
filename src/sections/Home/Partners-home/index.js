import React, { useState, useEffect } from "react";
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
    />
  </div>
);

const Projects = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = partners.map(partner => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = partner.imageLink;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error("Error preloading images:", error));
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
    autoplay: true,
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
      {imagesLoaded ? (
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Link className="partner-card" to={partner.imageRoute} key={index}>
              <PartnerImage partner={partner} />
            </Link>
          ))}
        </Slider>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading partners...</div>
      )}
    </PartnerItemWrapper>
  );
};

export default Projects;