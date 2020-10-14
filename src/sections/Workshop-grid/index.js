import React, { useState } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";

import { WorkshopPageWrapper } from "./WorkshopsGrid.style";

const WorkshopsPage = ({data}) => {

    const [content, setContent] = useState(false);
    const [ID, setID] = useState("");

    return (
        <WorkshopPageWrapper>
            <div className="header">
                <h2>Workshops</h2>
            </div>
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
                                            <div>
                                                {frontmatter.slack ? <a href={frontmatter.slack} target = "_blank" rel="noreferrer" className="links">Slack</a> : ""}
                                                {frontmatter.slides ? <a href={frontmatter.slides} target = "_blank" rel="noreferrer" className="links">Slides</a> : ""}
                                                {frontmatter.eurl ? <a href={frontmatter.eurl} target = "_blank" rel="noreferrer" className="links">EURL</a> : ""}
                                                {frontmatter.labs ? <a href={frontmatter.labs} target = "_blank" rel="noreferrer" className="links">Labs</a> : ""}
                                                {frontmatter.video ? <a href={frontmatter.video} target = "_blank" rel="noreferrer" className="links">Video</a> : ""}
                                            </div>
                                        </div>
                                        <div className={content && ID === id ? "btn-and-status-open" : "btn-and-status"}>
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
