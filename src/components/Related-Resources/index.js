import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Card from "../Card";
import RelatedResourcesWrapper from "./relatedResources.style";
import { Col } from "../../reusecore/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useHasMounted from "../../utils/useHasMounted";

const RelatedResources = props => {

  const { resourceType, relatedResources, mainHead, lastCardHead, linkToAllItems } = props;

  const hasMounted = useHasMounted();
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 700) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 991) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 1400) {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <RelatedResourcesWrapper>
      <div className="widgets-title">
        <h3>{mainHead}</h3>
      </div>
      {
        hasMounted &&
        <Slider
          dots={window.innerWidth < 992}
          arrows={window.innerWidth >= 992}
          infinite={false}
          speed="500"
          slidesToShow={slidesToShow}
          slidesToScroll={1}
        >
          {
            resourceType === "resources" ? relatedResources.map(({ resource }) => {
              return (
                <Col className="cardCol" xs={12} key={resource.fields.slug}>
                  <Card frontmatter={resource.frontmatter} fields={resource.fields} />
                </Col>
              );
            }) : relatedResources.map((resource) => {
              return (
                <Col className="cardCol" xs={12} key={resource.fields.slug}>
                  <Card frontmatter={resource.frontmatter} fields={resource.fields} />
                </Col>
              );
            })
          }
          <Col xs={12} lg={12} className="allResources">
            <div className="allResources_card">
              <Link to={linkToAllItems}>
                <h2>{lastCardHead}</h2>
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </Col>
        </Slider>
      }
    </RelatedResourcesWrapper>
  );
};

export default RelatedResources;
