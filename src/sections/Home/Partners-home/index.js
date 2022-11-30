import React from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { partners } from "./partners-home-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  className: "partner-slider",
  responsive: [
    {
      breakpoint: 1400,
      settings: "unslick"
    }
  ]
};

const Projects = () => {
  return (
    <PartnerItemWrapper>
      <Container>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={true}
            UniWidth="75%"
          >
            <h4>ENGAGING AND COLLABORATING WITH</h4>
          </SectionTitle>
        </Row>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Link className="partner-card" to={partner.imageRoute} key={index}>
              <div className={partner.innerDivStyle}>
                <img src={partner.imageLink} alt={partner.name} width="100%" height="auto" />
              </div>
            </Link>
          ))}
        </Slider>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
