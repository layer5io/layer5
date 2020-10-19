import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";
import PageHeader from "../../reusecore/PageHeader";

import { WorkshopPageWrapper } from "./WorkshopsGrid.style";

// Social Icons
import Slack from "../../images/socialIcons/slack_color.png";
import Slide from "../../images/socialIcons/slide_color.png";
import Link from "../../images/socialIcons/link_color.png";
import Youtube from "../../images/socialIcons/youtube_color.png";
import Lab from "../../images/socialIcons/lab_color.png";


const WorkshopsPage = ({hide_path}) => {

    const [content, setContent] = useState(false);
    const [ID, setID] = useState("");

    const data = useStaticQuery(
        graphql`
            query allWorkshops {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "workshops" } } }
                ) {
                    nodes {
                        id
                        slug
                        body
                        frontmatter {
                            title
                            date(formatString: "Do MMMM YYYY")
                            slack
                            abstract
                            status
                            labs
                            video
                            eurl
                            thumbnail {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    }
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

    let path = hide_path ? "" : "Workshop";

    return (
        <WorkshopPageWrapper>
            <PageHeader title="Workshop" path={path}/>
            <div className="workshop-page-wrapper">
                <Container>
                    <div className="workshop-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter, fields, body }) => (
                                <Col {...content && ID === id ? {xs:12, sm:12, lg:12} : {xs:12, sm:12, lg:6} } key={id}>
                                    <div className="workshop-grid-card">
                                        <WorkshopCard frontmatter={frontmatter} fields={fields} content={content} ID={ID} id={id} />
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
                                                {frontmatter.slides && frontmatter.status === "delivered" && content && ID === id ? 
                                                    <a href={frontmatter.slides} target = "_blank" rel="noreferrer" className="links">
                                                        <img src={Slide} alt="Slide"/> 
                                                        Slides
                                                    </a> : ""}
                                                {frontmatter.eurl && frontmatter.status === "delivered" && content && ID === id ? 
                                                    <a href={frontmatter.eurl} target = "_blank" rel="noreferrer" className="links">
                                                        <img src={Link} alt="Link"/> 
                                                        EURL
                                                    </a> : ""}
                                                {frontmatter.labs && frontmatter.status === "delivered" && content && ID === id ? 
                                                    <a href={frontmatter.labs} target = "_blank" rel="noreferrer" className="links">
                                                        <img src={Lab} alt="Lab"/> 
                                                        Labs
                                                    </a> : ""}
                                                {frontmatter.video && frontmatter.status === "delivered" && content && ID === id ? 
                                                    <a href={frontmatter.video} target = "_blank" rel="noreferrer" className="links">
                                                        <img src={Youtube} alt="Youtube video"/> 
                                                        Video
                                                    </a> : ""}
                                            </div>
                                            {frontmatter.status === "delivered" ? "" : <p>Upcoming...</p>}
                                            <button type="button" className="readme-btn" onClick={() => {
                                                setID(id);
                                                setContent(!content);
                                            }}>
                                                {content && ID === id ? "Show Less" : "Show More"}
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </WorkshopPageWrapper>
    );
};

export default WorkshopsPage;
