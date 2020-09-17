import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";

import { MembersGridWrapper } from "./membersGrid.style";

const MembersGrid = ({data}) =>{
    return(
        <MembersGridWrapper>
            <PageHeader title="Members" />
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
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



