import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";

import { MembersGridWrapper } from "./membersGrid.style";

const MembersGrid = props =>{
    return(
        <MembersGridWrapper>
            <PageHeader title="Community Members"
                        path="Community > Members"
                subtitle="A warm and welcoming collection of open sourcers"/>
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
                        <Row>
                            <Col xs={12} sm={12} lg={12}>
                                <div className="color-legend">
                                    <Button active={props.active} onClick={props.toggleActive}><div className="active-filter-color"/> Active</Button>
                                    <Button active={props.inActive} onClick={props.toggleInactive}><div className="inactive-filter-color"/> Inactive</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {props.data.allMdx.nodes.map(({id, frontmatter }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <Link to={kebabCase(frontmatter.name)}>
                                        <ProfileCard frontmatter={frontmatter} />
                                    </Link>
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
