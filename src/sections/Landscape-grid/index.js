import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import Categories from "./categories";
import NonFunctional from "./non-functional";
import Functional from "./functional";
import SMI_Compatibility from "./smi";
import Tools from "./tools";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceMeshTimeline from "./ServiceMeshTimeline";
import landscape from "../../assets/images/app/projects/landscape.png";
import Consul_Img from "../../assets/images/service-mesh-icons/consul-white.svg";
import Nginx_Img from "../../assets/images//service-mesh-icons/nginx-white.svg";
import Linkerd_Img from "../../assets/images//service-mesh-icons/linkerd-white.svg";
import NSM_Img from "../../assets/images//service-mesh-icons/nsm-white.svg";
import Istio_Img from "../../assets/images//service-mesh-icons/istio-white.svg";
import Button from "../../reusecore/Button";

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Service Mesh Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div>
                        <Row>
                            <h2 id="service-mesh-comparison-strength" className="headings">
                                Comparison of Service Mesh Strengths
                            </h2>
                            <div className="strength-comparison-section">
                                <div className="comparison-mesh">
                                    <div className="mesh-img">
                                        <img src={Linkerd_Img} />
                                        <h5>Linkerd</h5>
                                    </div>
                                    <div className="mesh-data">
                                        <p>Time to value, Performance</p>
                                    </div>
                                </div>
                                <div className="comparison-mesh">
                                    <div className="mesh-img">
                                        <img src={Istio_Img} />
                                        <h5>Istio</h5>
                                    </div>
                                    <div className="mesh-data">
                                        <p>Powerful Feature Set, Extensibility</p>
                                    </div>
                                </div>
                                <div className="comparison-mesh">
                                    <div className="mesh-img">
                                        <img src={Consul_Img} />
                                        <h5>Consul</h5>
                                    </div>
                                    <div className="mesh-data">
                                        <p>Support for Non-kubernetes Workloads</p>
                                    </div>
                                </div>
                                <div className="comparison-mesh">
                                    <div className="mesh-img">
                                        <img src={Nginx_Img} />
                                        <h5>NGINX Service Mesh</h5>
                                    </div>
                                    <div className="mesh-data">
                                        <p>Time to value, Performance</p>
                                    </div>
                                </div><div className="comparison-mesh">
                                    <div className="mesh-img">
                                        <img src={NSM_Img} />
                                        <h5>Network Service Mesh</h5>
                                    </div>
                                    <div className="mesh-data">
                                        <p>Layer2 and Layer3 Functions</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="headings subsequent-heading">
                                Service Mesh Timeline
                            </h2>
                            <ServiceMeshTimeline />
                            <h2 id="service-mesh-comaprison-matrix" className="headings subsequent-heading">
                                Service Mesh Comparison Matrix
                            </h2>
                            <Tabs className="landscape-table">
                                <TabList>
                                    <Tab>Categories</Tab>
                                    <Tab>Non-Functional</Tab>
                                    <Tab>Functional</Tab>
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
                                    <Tools />
                                </TabPanel>
                            </Tabs>
                            <h2 className="headings subsequent-heading">SMI Compliance</h2>
                            <div className="landscape-table">
                                <SMI_Compatibility />
                            </div>
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
