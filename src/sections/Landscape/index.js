import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import Subscribe from "../../sections/subscribe/subscribe";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceMeshTimeline from "./ServiceMeshTimeline";
import landscape from "../../assets/images/landscape/layer5_landscape_green.svg";
import Consul_Img from "../../assets/images/service-mesh-icons/consul-white.svg";
import Nginx_Img from "../../assets/images/service-mesh-icons/nginx-white.svg";
import Linkerd_Img from "../../assets/images/service-mesh-icons/linkerd-white.svg";
import NSM_Img from "../../assets/images/service-mesh-icons/nsm-white.svg";
import Istio_Img from "../../assets/images/service-mesh-icons/istio-white.svg";
import halfMark from "../../assets/images/landscape/half.svg";
import passingMark from "../../assets/images/landscape/passing.svg";
import failingMark from "../../assets/images/landscape/failing.svg";
import Button from "../../reusecore/Button";
import Categories from "./categories";
import NonFunctional from "./non-functional";
import Functional from "./functional";
import SMI_Compatibility from "./smi";
import Tools from "./tools";
import "regenerator-runtime/runtime";

const isBrowser = typeof window !== "undefined";

const LandscapeGrid = () => {
  return (
    <LandscapePageWrapper>
      <PageHeader title="The Service Mesh Landscape" path="Landscape" />
      <div className="landscape-page-wrapper">
        <Container>
          <div>
            <Row Hcenter>
              <h2 id="service-mesh-comparison-strength" className="sub-heading landscape-section-heading">
                                Comparison of Service Mesh Strengths
              </h2>
              <div className="strength-comparison-section">
                <div className="comparison-mesh">
                  <div className="mesh-img">
                    <img src={Linkerd_Img} className="pad-top" />
                    <h3>Linkerd</h3>
                  </div>
                  <div className="mesh-data">
                    <p>Time to Value, Performance</p>
                  </div>
                </div>
                <div className="comparison-mesh">
                  <div className="mesh-img">
                    <img src={Istio_Img} className="pad-top" />
                    <h3>Istio</h3>
                  </div>
                  <div className="mesh-data">
                    <p>Powerful Feature Set, Extensibility</p>
                  </div>
                </div>
                <div className="comparison-mesh">
                  <div className="mesh-img">
                    <img src={Consul_Img} className="pad-top" />
                    <h3>Consul</h3>
                  </div>
                  <div className="mesh-data">
                    <p>Support for Non-Kubernetes Workloads</p>
                  </div>
                </div>
                <div className="comparison-mesh">
                  <div className="mesh-img">
                    <img src={Nginx_Img} />
                    <h3>NGINX Service Mesh</h3>
                  </div>
                  <div className="mesh-data">
                    <p>Interoperability with Existing Ingresses</p>
                  </div>
                </div><div className="comparison-mesh">
                  <div className="mesh-img">
                    <img src={NSM_Img} />
                    <h3>Network Service Mesh</h3>
                  </div>
                  <div className="mesh-data">
                    <p>Layer2 and Layer3 Functions</p>
                  </div>
                </div>
              </div>
              <h2 className="sub-heading landscape-section-heading">
                                Service Mesh Timeline
              </h2>
              <ServiceMeshTimeline  />
              <h2 id="service-mesh-comaprison-matrix" className="sub-heading landscape-section-heading">
                                Service Mesh Comparison Matrix
              </h2>
              {isBrowser ?
                <Tabs defaultIndex={2} className="landscape-table">
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
                : ""}
              <h2 id="smi" className="sub-heading landscape-section-heading" >Service Mesh Interface Compliance</h2>
              <h4 className="landscape-section-sub-heading">Is your service mesh compliant? <a href="/projects/service-mesh-interface-conformance">Find out</a>.</h4>
              <SMI_Compatibility/>
              <div className="Legend">
                <span>Legend:</span>
                <div className="Landscape">
                  <img alt="Full" src={passingMark} />
                  Fully Compatible
                </div>
                <div>
                  <img alt="Half" src={halfMark} />
                  Partially Compatible
                </div>
                <div>
                  <img alt="None" src={failingMark} />
                  Incompatible
                </div>
              </div>
              <div className="AboutLandscape">
                <img src={landscape}
                  alt="Service Mesh Landscape"
                />
                <div>
                  <p>The Layer5 Service Mesh Landscape is a community-curated collection of service mesh projects.
                                    We encourage project maintainers to directly update and represent their service mesh’s functional
                                    and non-functional details.
                  </p>
                  <p className="text-gray">Found a discrepancy, missing or out-dated information?</p>
                  <Button primary url="https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Flandscape&template=landscape.md&title=%5BLandscape%5D" external={true}>
                                        Let Us Know
                  </Button>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
      <Subscribe />
    </LandscapePageWrapper>
  );
};

export default LandscapeGrid;
