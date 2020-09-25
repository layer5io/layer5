import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

import { ProgramsPageWrapper } from "./ProgramGrid.style";
import {Link} from "gatsby";
import Icon5 from "../../images/careers/gsod.png";
import Icon6 from "../../images/layer5/gsoc.svg";
import Icon8 from "../../images/layer5/cb.png";

const ProgramsGrid = ({data}) => {
    return (
        <ProgramsPageWrapper>
            <PageHeader title="Programs" hide_path={true}/>
            <div className="programs-page-wrapper">
                <Container>
                    <div className="program-grid-wrapper">
                        <Row>
                            <Col xs={12} sm={6} lg={3}>
                                <Link to="/gsod">
                                    <div className="program">
                                        <div className="icon">
                                            <img src={Icon5} alt="img" />
                                        </div>
                                        <h3>Google Season of Docs 2020</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Link to="/gsoc">
                                    <div className="program">
                                        <div className="icon">
                                            <img src={Icon6} alt="img" />
                                        </div>
                                        <h3>Google Summer of Code 2020</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Link to="/careers/gsoc2019">
                                    <div className="program">
                                        <div className="icon">
                                            <img src={Icon6} alt="img"/>
                                        </div>
                                        <h3>Google Summer of Code 2019</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Link to="/careers/cb2020">
                                    <div className="program">
                                        <div className="icon">
                                            <img src={Icon8} alt="img" />
                                        </div>
                                        <h3>CommunityBridge 2020</h3>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </ProgramsPageWrapper>
    );
};

export default ProgramsGrid;
