
import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Card from "../Card";
import RelatedResourcesWrapper from "./relatedResources.style";
import { Col } from "../../reusecore/Layout";
import Slider from "react-slick";
import useHasMounted from "../../utils/useHasMounted";

const RelatedResources = props => {

  const { resourceType , relatedResources , mainHead , lastCardHead , linkToAllItems, fitContainer } = props;

  const hasMounted = useHasMounted();

  const shouldFitContainer = (frontmatter) => {
    if (typeof fitContainer === "boolean") return fitContainer;
    return frontmatter?.type === "Article" || frontmatter?.type === "Comparison";
  };

  return (
    <RelatedResourcesWrapper>
      <div className="widgets-title">
        <h3>{mainHead}</h3>
      </div>
      {
        hasMounted &&
                <Slider
                  dots= { window.innerWidth < 992 }
                  arrows={ window.innerWidth >= 992 }
                  infinite= {false}
                  speed= "500"
                  slidesToShow= {window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                  slidesToScroll= {1}
                >
                  {
                    resourceType === "resources" ? relatedResources.map(({ resource }) => {
                      return (
                        <Col className="cardCol" $xs={12} key={resource.fields.slug}>
                          <Card frontmatter={resource.frontmatter} fields={resource.fields} fitContainer={shouldFitContainer(resource.frontmatter)}/>
                        </Col>
                      );
                    }) : relatedResources.map((resource) => {
                      return (
                        <Col className="cardCol" $xs={12} key={resource.fields.slug}>
                          <Card frontmatter={resource.frontmatter} fields={resource.fields} fitContainer={shouldFitContainer(resource.frontmatter)}/>
                        </Col>
                      );
                    })
                  }
                  <Col $xs={12} $lg={12} className="allResources">
                    <div className="allResources_card">
                      <Link to={linkToAllItems}>
                        <h2>{lastCardHead}</h2>
                        <IoIosArrowRoundForward/>
                      </Link>
                    </div>
                  </Col>
                </Slider>
      }
    </RelatedResourcesWrapper>
  );
};

export default RelatedResources;