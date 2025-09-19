import React, { useState, useRef } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import WorkshopCard from "../../../components/Workshop-Card";
import PageHeader from "../../../reusecore/PageHeader";
import { WorkshopPageWrapper } from "./WorkshopsGrid.style";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";
import { BsArrowUp } from "@react-icons/all-files/bs/BsArrowUp";
import Slack from "../../../assets/images/socialIcons/slack-light.svg";
import Button from "../../../reusecore/Button";
import WorkshopImage from "../../../assets/images/workshops/workshops.svg";
import { FaRegWindowMaximize } from "@react-icons/all-files/fa/FaRegWindowMaximize";


const WorkshopsPage = () => {

  const [content, setContent] = useState(false);
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState("");
  const workshopRefs = useRef({});

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

  const scrollToWorkshop = (id) => {
    if (workshopRefs.current[id]) {
      const element = workshopRefs.current[id];
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleActive = (id) => {
    if (open) {
      if (ID === id) {
        const currentRef = workshopRefs.current[id];
        setOpen(false);
        setContent(false);
        setID("");
        setTimeout(() => {
          if (currentRef) {
            const headerOffset = 80;
            const offsetPosition = currentRef.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      } else {
        const targetId = id;
        setOpen(false);
        setContent(false);
        setID("");
        setTimeout(() => {
          setID(targetId);
          setContent(true);
          setOpen(true);
          setTimeout(() => {
            scrollToWorkshop(targetId);
          }, 100);
        }, 100);
      }
    } else {
      setID(id);
      setContent(true);
      setOpen(true);
      setTimeout(() => scrollToWorkshop(id), 100);
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
            }}>
              {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                <Col {...content && ID === id ? { $xs: 12, $sm: 12, $lg: 12 } : { $xs: 12, $sm: 6, $lg: 4 } } key={id} className="workshop-grid-col">
                  <div className="workshop-grid-card">
                    <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} ref={el => workshopRefs.current[id] = el} />
                    <div className={content && ID === id ? "active" : "text-contents"}>
                      <div className="content">
                        <p>{frontmatter.abstract}</p>
                      </div>
                    </div>
                    <div className={content && ID === id ? "btn-and-status-open" : "btn-and-status"}>
                      <div className="social-icons">
                        {frontmatter.slack && frontmatter.status === "delivered" && content && ID === id ?
                          <a href={frontmatter.slack} target="_blank" rel="noreferrer" className="links">
                            <img src={Slack} alt="Slack"/>
                            Slack
                          </a> : ""}
                      </div>
                      <div className={content && ID === id ? "linkAndReadBtns-open" : "linkAndReadBtns"}>
                        <div className="expand">
                          {content && ID === id ?
                            <button onClick={() => toggleActive(id)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                            <button onClick={() => toggleActive(id)} className="readmeBtn readmreBtn"> Read More <BsArrowDown className="icon" size={30} /></button> }
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
