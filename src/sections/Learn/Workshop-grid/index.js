import React, { useState, useRef } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
      body
    }
  }
}`
  );

  const scrollRefMap = useRef({});
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [ID, setID] = useState("");

  const toggleActive = (id) => {
    const targetElement = scrollRefMap.current[id];

    if (open && ID === id) {
      setOpen(false);
      setContent(false);
      setID("");

      if (targetElement) {
        // Wait for DOM to collapse, then scroll
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const rect = targetElement.getBoundingClientRect();
            const y = rect.top + window.scrollY; // adjust for header
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          });
        });
      }
    } else {
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const y = rect.top + window.scrollY - 20;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
      setID(id);
      setContent(true);
      setOpen(true);
    }
  };


  return (
    <WorkshopPageWrapper>
      <PageHeader title="Cloud Native Workshops"/>
      <h2 className="sub-heading">Over 5,000 engineers trained.</h2>
      <div className="workshop-page-wrapper">
        <Container>
          <div className="workshop-grid-wrapper">
            <Row style={{
              flexWrap: "wrap"
            }}
            >
              {data.allMdx.nodes.map(({ id, frontmatter, fields, body }) => (
                <Col {...content && ID === id ? { $xs: 12, $sm: 12, $lg: 12 } : { $xs: 12, $sm: 6, $lg: 4 } } key={id} className="workshop-grid-col">
                  <div className="workshop-grid-card" ref={(el) => {
                    if (el) scrollRefMap.current[id] = el;
                  }} onClick={() => toggleActive(id)}
                  >
                    <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} />
                    <div className={content && ID === id ? "active" : "text-contents"}>
                      <div className="content">
                        <MDXRenderer>{body}</MDXRenderer>
                      </div>
                    </div>
                    <div className={content && ID === id ? "btn-and-status-open" : "btn-and-status"}>
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
            }} className="rqst-workshop"
            >
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