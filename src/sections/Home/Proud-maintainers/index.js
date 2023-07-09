import React from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./proudMaintainers.style";
import { Link } from "gatsby";
import { maintainers } from "./proud-maintainers-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  className: "maintainer-slider",
  responsive: [
    {
      breakpoint: 1400,
      settings: "unslick",
    },
  ],
};

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container>
        <Row className="project-title">

          <SectionTitle UniWidth="100%">
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>

          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners
            and maintainers of leading open source projects.
          </p>

        </Row>
      </Container>
      <Slider {...settings}>
        {maintainers.map((maintainer, index) => (
          <Link className="maintainer-card" to={maintainer.imageRoute} key={index}>
            <div className={maintainer.innerDivStyle}>
              <img
                className="maintainer-image"
                id={maintainer.name}
                loading="lazy"
                src={maintainer.imageLink}
                alt={maintainer.name}
                width={maintainer.imageWidth}
                height={maintainer.imageHeight}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;
