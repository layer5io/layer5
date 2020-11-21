import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import ServiceMeshComparison from "../../assets/images/landscape/comparison-of-service-mesh-strengths.svg";
import { non_functional } from "../../collections/landscape/non-functional";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Categories from "./categories";
import "react-vertical-timeline-component/style.min.css";
import NonFunctional from "./non-functional";
import Functional from "./functional";
import SMI_Compatibility from "./smi";
import Tools from "./tools";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div>
                        <Row>
                            <div className="heading-container">
                                <h2>Comparison of Service Mesh Strengths</h2>
                            </div>
                            <img src={ServiceMeshComparison} width="100%" alt="Service Mesh Comparison" />
                            <div className="heading-container">
                                <h2>Service Mesh Timeline</h2><br />
                                <h3>Project Announcement</h3>
                            </div>
                            <VerticalTimeline
                                className="timeline"
                            >
                                {non_functional.reverse().map(mesh => (
                                    mesh.timeline_order?
                                        <VerticalTimelineElement
                                            key={mesh.timeline_order}
                                            className="timeline-element"
                                            contentStyle={{ background: "rgb(60, 73, 79)", color: "#3c494f" }}
                                            contentArrowStyle={{ borderRight: "7px solid  rgb(60, 70, 70)" }}
                                            date={mesh.announce_date}
                                            iconStyle={{ background: "rgb(60, 73, 79)", color: "#fff" }}
                                        >
                                            {mesh.timeline_order?
                                                <div className="meshtitle-img">
                                                    {mesh.icon?
                                                        <img src={mesh.icon} alt={mesh.name} />
                                                        :<></>}
                                                    <h3 className="vertical-timeline-element-title">{mesh.name}</h3>
                                                </div>
                                                :<></>}
                                        </VerticalTimelineElement>
                                        :<></>
                                )
                                )}
                            </VerticalTimeline>
                            <Tabs className="landscape-table">
                                <TabList>
                                    <Tab>Categories</Tab>
                                    <Tab>Non-Functional</Tab>
                                    <Tab>Functional</Tab>
                                    <Tab>SMI Compatibilty</Tab>
                                    <Tab>Tools</Tab>
                                </TabList>
                                <TabPanel>
                                    <Categories />
                                </TabPanel>
                                <TabPanel>
                                    <NonFunctional />
                                </TabPanel>
                                <TabPanel>
                                    <Functional />
                                </TabPanel>
                                <TabPanel>
                                    <SMI_Compatibility />
                                </TabPanel>
                                <TabPanel>
                                    <Tools />
                                </TabPanel>
                            </Tabs>
                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
