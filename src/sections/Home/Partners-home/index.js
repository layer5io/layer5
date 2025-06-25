import React, { useState, useEffect } from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { partners } from "./partners-home-data";
import Slider from "react-slick";

const settings = {
  initialSlide: 1,
  lazyLoad: false, // disable slick's lazyLoad
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

const Projects = () => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = partners.map(partner => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = partner.imageLink;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setAllImagesLoaded(true))
      .catch(() => setAllImagesLoaded(true)); // still render even if some fail
  }, []);

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

      {allImagesLoaded ? (
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Link className="partner-card" to={partner.imageRoute} key={index}>
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
            </Link>
          ))}
        </Slider>
      ) : (
        <div style={{ height: "100px", textAlign: "center" }}>Loading...</div>
      )}
    </PartnerItemWrapper>
  );
};

export default Projects;
