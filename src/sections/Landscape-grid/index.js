import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import ServiceMeshComparison from "../../assets/images/landscape/comparison-of-service-mesh-strengths-dark.svg";
import Categories from "./categories";
import NonFunctional from "./non-functional";
import Functional from "./functional";
import SMI_Compatibility from "./smi";
import Tools from "./tools";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceMeshTimeline from "./ServiceMeshTimeline";
import landscape from "../../assets/images/app/projects/landscape.png";
import Button from "../../reusecore/Button";

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div>
                        <Row>
                            <h2 className="first-heading">Comparison of Service Mesh Strengths</h2>
                            <img src={ServiceMeshComparison} width="100%" height="100%" alt="Service Mesh Comparison" />
                            <h2 className="subsequent-heading">Service Mesh Timeline</h2>
                            <ServiceMeshTimeline />
                            <h2 className="subsequent-heading">Service Mesh Comparison Matrix</h2>
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
                            <div className="missingText">
                                <div>
                                    <img src={landscape}
                                        alt="Landscape" 
                                    />
                                </div>
                                <h2>The Layer5 Service Mesh Landscape is a community-curated collection of service mesh projects.
                                   We encourage project maintainers to directly update and represent their service mesh’s functional
                                   and non-functional details.
                                </h2>
                                <p>Found a discrepancy, missing or out-dated information?</p>
                                <Button primary url="https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Flandscape&template=landscape.md&title=%5BLandscape%5D" external="true">
                                    Let Us Know
                                </Button>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
