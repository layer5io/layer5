import React from "react";

import {ThemeProvider} from "styled-components";
import Layout from "../../components/layout"; 

import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import Features from "../Features";
import { IoMdCheckmark } from "react-icons/io";
import Faq from "../Faq";

import meshery from "./meshery-logo-light-text-side.png";
import meshery_multi_mesh from "./meshery_multi_mesh.png";
import meshes from "./meshes.png";
import meshery_benchmark_screen from "./meshery_benchmark_screen.png";
import meshery_configuration_management from "./meshery-configuration-management.png";
import smi_conformance from "./SMI-Conformance-in-Meshery.png";
import smi_performance from "./service-mesh-performance-example.gif";
import meshery_architecture from "./meshery-architecture.svg";
import smi_logo from "./smi-logo.png";
import smp_logo from "./smp-dark-text.png";

import MesheryWrapper from "./meshery.style";
import theme from "../../theme/app/themeStyles";

// import Counters from "../Counters";
// import { Link } from "gatsby";
// import SectionTitle from "../../reusecore/SectionTitle";
// import Pricing from "../Pricing";

const MesheryPage = () => {
    return (
        <ThemeProvider theme={theme}> 
            <Layout>
                <MesheryWrapper> 
                    <div className="info">
                        <div className="meshery-img"><img src={meshery} alt="meshery" /></div>
                        <Row className="description">
                            <Col className="desc-text" lg={7} md={12} sm={12}>
                                <Button className="number">
                                    <h3>1,113</h3> <br />
                                    {/* <p className="number-desc"> performance tests run </p>  */}
                                </Button>
                                <p className="desc-p"> 
                                            Meshery is the service mesh management plane.<br />
                                            Adopt and operate any service mesh with confidence using Meshery's management features. 
                                </p>
                                <Button> Learn More </Button> &nbsp;
                                <Button> Run Meshery </Button>
                            </Col>
                            <Col lg={5} md={12} sm={12}>
                                <div className="meshery-img"><img src={meshery_multi_mesh} alt="meshery_multi_mesh" /></div>
                            </Col>
                        </Row>
                    </div>
                    <div className="description">
                        <div className="heading">
                            <p> The only service mesh management plane to allow</p>
                            <h2> Use your 12 service meshes under a single roof</h2>
                        </div>
                        <Row>
                            <Col className="mesh_list_left" lg={3}>
                                <Row>
                                    <IoMdCheckmark className="check" />6/6 service meshes present
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshes} alt="meshes" />
                            </Col>
                            <Col className="mesh_list_right" lg={3}>
                                <Row>
                                    <IoMdCheckmark className="check" />6/6 service meshes present
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Istio </div>
                                    </Col>
                                    <Col className="meshes" lg={6}>
                                        <div className="mesh_box"> Linkerd </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h1 className="heading"> USE CASES</h1>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <h3>Manage the <b>performance</b> of your service mesh and its workloads</h3>
                                <h5>Baseline and track your service mesh performance from release to release.</h5>
                                <ul>
                                    <li>Track your application performance from version to version.</li>
                                    <li>Understand behavioral differences between service meshes.</li>
                                    <li>Compare performance across service mesh deployments.</li>
                                </ul>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshery_benchmark_screen} alt="meshery_benchmark_screen" />
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshery_configuration_management} alt="meshery_configuration_management" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h3>What are <b>configuration best practices</b> and patterns?</h3>
                                <h5>Assess your service mesh configuration against deployment and operational best practices with Meshery's configuration validator.</h5><br />
                                <p>See the service mesh patterns</p>
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <img className="text_logo" src={smi_logo} alt="smi_logo" />
                                <h3>Is your service mesh <b>SMI compliant</b>?</h3>
                                <h5>Validate your service mesh's conformance to Service Mesh Interface (SMI) specifications.</h5><br />
                                <p>See the testing SMI conformance</p>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={smi_conformance} alt="smi_conformance" />
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <img src={smi_performance} alt="smi_performance" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img className="text_logo" src={smp_logo} alt="smp_logo" />
                                <h3>Use the <b>Service Mesh Performance</b> standard</h3>
                                <h5>Weigh the value of your service mesh features in-context of it's overhead.</h5><br />
                                <p>See Service Mesh Performance (SMP).</p>
                            </Col>
                        </Row>
                    </div>
                    <Features />
                    <div className="architecture content">
                        <a name="architecture"></a>
                        <h1 className="heading"> ARCHITECTURE</h1>
                        <a href={meshery_architecture}>
                            <img src={meshery_architecture} alt="meshery_architecture" />
                        </a>
                    </div>
                    <Faq /> 
                </MesheryWrapper>
            </Layout>
        </ThemeProvider>
    );
};

export default MesheryPage;
