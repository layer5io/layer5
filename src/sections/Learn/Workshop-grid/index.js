import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import WorkshopCard from "../../../components/Workshop-Card";
import PageHeader from "../../../reusecore/PageHeader";
import { WorkshopPageWrapper } from "./WorkshopsGrid.style";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import Slack from "../../../assets/images/socialIcons/slack-light.svg";
import Button from "../../../reusecore/Button";
import WorkshopImage from "../../../assets/images/workshops/workshops.svg";
import { FaRegWindowMaximize } from "@react-icons/all-files/fa/FaRegWindowMaximize";


const WorkshopsPage = () => {

  const data = useStaticQuery(
    graphql`query allWorkshops {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {collection: {eq: "workshops"}}}
  ) {
    nodes {
      id
      
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slack
        slides
        abstract
        status
        labs
        video
        eurl
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}`
  );

  return (
    <WorkshopPageWrapper>
      <PageHeader title="Cloud Native Workshops"/>
      <h2 className="sub-heading">Over 5,000 engineers trained.</h2>
      <div className="workshop-page-wrapper">
        <Container>
          <div className="workshop-grid-wrapper">
            <Row style={{
              flexWrap: "wrap"
            }}>
              {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                <Col $xs={12} $sm={6} $lg={4} key={id} className="workshop-grid-col">
                  <div className="workshop-grid-card">
                    <WorkshopCard frontmatter={frontmatter} />
                    <div className="btn-and-status">
                      <div className="social-icons">
                        {frontmatter.slack && frontmatter.status === "delivered" ?
                          <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">
                            <img src={Slack} alt="Slack"/>
                                                        Slack
                          </a> : ""}
                      </div>
                      <div className="linkAndReadBtns">
                        <div className="expand">
                          <Link to={fields.slug} className="readmeBtn readmreBtn"> Read More <BsArrowRight className="icon" size={30} /></Link>
                        </div>
                        <div className="externalLink">
                          <Link to={fields.slug} className="siteLink"><FaRegWindowMaximize style={{ height: "25px", width: "auto" }} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row style={{
              flexDirection: "column"
            }} className="rqst-workshop">
              <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
              <Button $primary $url="mailto:support@layer5.io" $external={true}>
                                Request A Workshop
              </Button>
            </Row>
          </div>
        </Container>
      </div>
    </WorkshopPageWrapper>
  );
};

export default WorkshopsPage;
