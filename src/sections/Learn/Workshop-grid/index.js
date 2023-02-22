import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
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

  const data = useStaticQuery(
    graphql`query allWorkshops {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "service-mesh-workshops"}}}
  ) {
    nodes {
      id
      slug
      body
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
}
`
  );

  const toggleActive = (id) => {
    if (open){
      if (ID === id){
        setOpen(false);
        setContent(false);
        setID("");
      } else {
        setOpen(false);
        setContent(false);
        setID(id);
        setContent(true);
        setOpen(true);
      }
    } else {
      setID(id);
      setContent(true);
      setOpen(true);
    }
  };

  return (
    <WorkshopPageWrapper>
      <PageHeader title="Service Mesh Workshops"/>
      <h2 className="sub-heading">Over 5,000 engineers trained.</h2>
      <div className="workshop-page-wrapper">
        <Container>
          <div className="workshop-grid-wrapper">
            <Row>
              {data.allMdx.nodes.map(({ id, frontmatter, fields, body }) => (
                <Col {...content && ID === id ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6, lg: 4 } } key={id} className="workshop-grid-col">
                  <div className="workshop-grid-card">
                    <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} />
                    <div className={content && ID === id ? "active" : "text-contents"}>
                      <div className="content">
                        <MDXRenderer>{body}</MDXRenderer>
                      </div>
                    </div>
                    <div className={content && ID === id ? "btn-and-status-open" : "btn-and-status"}>
                      <div className="social-icons">
                        {frontmatter.slack && frontmatter.status === "delivered" && content && ID === id ?
                          <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">
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
            <Row className="rqst-workshop">
              <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
              <Button primary url="mailto:support@layer5.io" external={true}>
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
