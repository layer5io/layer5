import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Community from "./Community";
import CommunityMembers from "./CommunityMembers";
import MeshmatesProgramSummary from "./MeshmatesProgramSummary";
import CommunityMeetingsTable from "./CommunityMeetingsTable";
import CommunitySectionWrapper from "./community.style";

const CommunityPage = () => {
    return (
        <CommunitySectionWrapper>
            <PageHeader title="The Layer5 Community" path="Community"/>
            <div className="community-section-wrapper">
                <Container>
                    <div id="community">
                        <div className="row white-bg row-view">
                            <Row>
                                <Col sm={12} md={12} >   
                                    <div>
                                        <Community />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="row white-bg row-view">
                            <Row>
                                <Col sm={12} md={6} lg={6} >
                                    <div>
                                        <CommunityMembers />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={6} >
                                    <div>
                                        <MeshmatesProgramSummary />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="row white-bg row-view">
                            <CommunityMeetingsTable />
                        </div>
                    </div>
                </Container>
            </div>
        </CommunitySectionWrapper>
    );
};

export default CommunityPage;
