import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";

import { WorkshopPageWrapper } from "./WorkshopsGrid.style";

const WorkshopsPage = ({data}) => {
    return (
        <WorkshopPageWrapper>
            <div className="header">
                <h2>Workshops</h2>
            </div>
            <div className="workshop-page-wrapper">
                <Container>
                    <div className="workshop-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <div className="workshop-grid-card">
                                        <WorkshopCard frontmatter={frontmatter} fields={fields}/>
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
