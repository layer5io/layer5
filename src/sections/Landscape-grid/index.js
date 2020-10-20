import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import ServiceMeshComparison from "../../assets/images/landscape/comparison-of-service-mesh-strengths.svg";
import { non_functional } from '../../collections/landscape/non-functional'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Categories from './categories'
import 'react-vertical-timeline-component/style.min.css';
import NonFunctional from "./non-functional";
import Functional from './functional'
import Compatibilty from "./compatibility";
import Tools from './tools'

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div className="landscape-grid-wrapper">
                        <Row>
                            <div className="heading-container">
                                <h2>Comparison of Service Mesh Strengths</h2>
                            </div>
                            <img src={ServiceMeshComparison} width="100%" alt="Service Mesh Comparison" />
                            <div className="heading-container">
                                <h2>Service Mesh Timeline</h2><br />
                                <h4>Project Announcement</h4>
                            </div>
                            <VerticalTimeline>
                                {non_functional.reverse().map(mesh => (
                                    mesh.timeline_order?
                                        <VerticalTimelineElement
                                            key={mesh.timeline_order}
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date={mesh.announce_date}
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        >
                                            {mesh.timeline_order?
                                                <div className="meshtitle-img">
                                                    {mesh.icon?
                                                        <img src={mesh.icon} alt={mesh.name} style={{ width: "100px", height: "inherit" }} />
                                                        :<></>}
                                                    <h3 className="vertical-timeline-element-title">{mesh.name}</h3>
                                                </div>
                                                :<></>}
                                        </VerticalTimelineElement>
                                        :<></>
                                )
                                )}
                            </VerticalTimeline>
                            <Categories />
                            <NonFunctional />
                            <Functional />
                            <Compatibilty />
                            <Tools />
                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
