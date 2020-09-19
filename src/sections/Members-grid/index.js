import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";

import { MembersGridWrapper } from "./membersGrid.style";
import Button from "../../reusecore/Button";

const MembersGrid = ({data}) =>{
    return(
        <MembersGridWrapper>
            <PageHeader title="Community Members"
                        subtitle="A warm and welcoming collection of open sourcers"/>
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
                        <Row>
                            <Col xs={12} sm={12} lg={12}>
                                <div className="color-legend">
                                    <Button><div className="active-filter-color"/> Active</Button>
                                    <Button><div className="inactive-filter-color"/> Inactive</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <ProfileCard frontmatter={frontmatter} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </MembersGridWrapper>
    );
};

export default MembersGrid;
