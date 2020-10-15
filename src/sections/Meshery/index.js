import React from "react";
// import { Link } from "gatsby";

import {ThemeProvider} from "styled-components";
import Layout from "../../components/layout"; 

import { Container, Row, Col } from "../../reusecore/Layout";
// import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import Features from "../Features";
// import Counters from "../Counters";
// import Pricing from "../Pricing";
import Faq from "../Faq";

import meshery from "./meshery-logo-light-text-side.png";
import meshery_multi_mesh from "./meshery_multi_mesh.png";
import meshes from "./meshes.png"
import meshery_benchmark_screen from "./meshery_benchmark_screen.png";
import meshery_configuration_management from "./meshery-configuration-management.png";
import smi_conformance from "./SMI-Conformance-in-Meshery.png";
import smi_performance from "./service-mesh-performance-example.gif";
import meshery_architecture from "./meshery-architecture.svg";

import MesheryWrapper from "./meshery.style";
import theme from "../../theme/app/themeStyles";

const MesheryPage = () => {
    return (
        <ThemeProvider theme={theme}> 
            <Layout>
                <MesheryWrapper> 
                    <div className="meshery-img"><img src={meshery} /></div>
                    <Row className="description">
                        <Col className="desc-text" lg={7} md={12} sm={12}>
                            <Row>
                                <Col lg={9}>
                                    <p className="desc-p"> 
                                        Meshery is the service mesh management plane.<br />
                                        Adopt and operate any service mesh with confidence using Meshery's management features. 
                                    </p>
                                    <Button> Learn More </Button> &nbsp;
                                    <Button> Run Meshery </Button>
                                </Col>
                                <Col lg={3}>
                                    <Button>
                                        <h3>1,113</h3>  
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5} md={12} sm={12}>
                            <img src={meshery_multi_mesh} />
                        </Col>
                    </Row>
                    <div className="description">
                        <div className="heading">
                            <p> The only service mesh management plane to allow</p>
                            <h2> Use your 12 service meshes under a single roof</h2>
                        </div>
                        <Row>
                            <Col className="mesh_list" lg={3}>
                                <Row>
                                    <Col lg={6}>
                                        Istio
                                    </Col>
                                    <Col lg={6}>
                                        Linkerd
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshes} />
                            </Col>
                            <Col className="mesh_list" lg={3}>
                                <Row>
                                    <Col lg={6}>
                                        Istio
                                    </Col>
                                    <Col lg={6}>
                                        Linkerd
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h1 className="heading"> USE CASES</h1>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                            <h3>Manage the performance of your service mesh and its workloads</h3>
                            Baseline and track your service mesh performance from release to release.
                            <ul>
                                <li>Track your application performance from version to version.</li>
                                <li>Understand behavioral differences between service meshes.</li>
                                <li>Compare performance across service mesh deployments.</li>
                            </ul>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshery_benchmark_screen} />
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <img src={meshery_configuration_management} />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <h3>What are configuration best practices and patterns?</h3>
                            <p>Assess your service mesh configuration against deployment and operational best practices with Meshery's configuration validator.</p>
                            <p>See the service mesh patterns</p>
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                            <h3>Is your service mesh SMI compliant?</h3>
                            <p>Validate your service mesh's conformance to Service Mesh Interface (SMI) specifications.</p>
                            <p>See the testing SMI conformance</p>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img src={smi_conformance} />
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                                <img src={smi_performance} />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <h3>Use the Service Mesh Performance standard</h3>
                            <p>Weigh the value of your service mesh features in-context of it's overhead.</p>
                            <p>See Service Mesh Performance (SMP).</p>
                            </Col>
                        </Row>
                    </div>
                    <Features />
                    <div className="architecture content">
                        <a name="architecture"></a>
                        <h1 className="heading"> ARCHITECTURE</h1>
                        <a href={meshery_architecture}>
                            <img src={meshery_architecture} />
                        </a>
                    </div>
                    {/* 
                    <Row className="content">
                        <Col md={8}>
                            <a name="demo"></a>
                            <h2>See Meshery at</h2>
                            <iframe width="100%" src="https://www.youtube.com/embed/CFj1O_uyhhs" frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Col>
                        <Col md={4}>
                    These events:
                            <ul>
                                <li><a href="https://conferences.oreilly.com/oscon/oscon-or">O'Reilly OSCON 2020</a></li>
                                <li><a href="https://conferences.oreilly.com/infrastructure-ops/io-ca/public/schedule/speaker/226795">O'Reilly Infrastructure & Ops 2020</a></li>
                                <li><a href="https://innotechdallas2020.sched.com/event/aN7E/a-management-plane-for-service-meshes">InnoTech Dallas 2020</a></li>
                                <li><a href="https://kccnceu20.sched.com/event/Zetg/discreetly-studying-the-effects-of-individual-traffic-control-functions-lee-calcote-layer5?iframe=no&w=100%&sidebar=yes&bg=no">KubeCon EU 2020</a></li>
                                <li><a href="https://www.youtube.com/watch?v=Q1zSWbO0RmI&list=PL3A-A6hPO2IN_HSU0pSfijBboiHggs5mC&index=2&t=0s">Open Source 101 at Home</a></li>
                                <li><a href="https://calcotestudios.com/talks/decks/slides-docker-captains-2020-meshery-the-multi-service-mesh-manager.html">Docker Captains Roundtable 2020</a></li>
                                <li><a href="https://www.meetup.com/Cloud-Native-Austin/events/267784090/">Cloud Native Austin 2020</a></li>
                                <li><a href="https://networkservicemesh.io/events/nsmcon2019/">Network Service Mesh Con 2019</a></li>
                                <li><a href="https://www.lakeside-hackfest.com/speakers/#lee-calcote">Lakeside HackFest 2019</a></li>
                                <li><a href="https://servicemeshday.com/schedule/">Service Mesh Day 2019</a></li>
                                <li> <a href="https://innotechsanantonio2019.sched.com/event/Lmlb/the-enterprise-path-to-service-mesh-architectures?iframe=no&w=100%&sidebar=yes&bg=no">Innotech San Antonio 2019</a></li>
                                <li> <a href="https://tmt.knect365.com/container-world/speakers/lee-calcote">Container World 2019</a></li>
                                <li> <a href="https://dockercon19.smarteventscloud.com/connect/sessionDetail.ww?SESSION_ID=309149&tclass=popup#.XJxH-TOcbjI.twitter">DockerCon 2019</a></li>
                                <li> <a href="https://kccnceu19.sched.com/event/MPf7/service-meshes-at-what-cost-lee-calcote-layer5-girish-ranganathan-solarwinds?iframe=no&w=100%&sidebar=yes&bg=no">KubeCon EU 2019</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="content">
                                <a name="getting-started"></a><h2>Run Meshery</h2>
                                <h3>Step 1: Install and start</h3>
                                <Tabs className="code-tabs">
                                    <TabList>
                                    <Tab>Bash user</Tab>
                                    <Tab>Brew user</Tab>
                                    <Tab>Kubernetes user</Tab>
                                    </TabList>
                                
                                    <TabPanel>
                                        <p>Install on <a href="https://meshery.layer5.io/docs/installation#quick-start">Mac or Linux</a> using Docker, install Meshery on your local machine by running the following:</p>
                                        <Code codeString="$ curl -L https://git.io/meshery | bash -" />
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Install on <a href="https://meshery.layer5.io/docs/installation#quick-start">Mac or Linux</a> using Homebrew:</p>
                                        <Code className="code" codeString="$ brew install layer5io/mesheryctl;
                                        | $ mesheryctl system start" /> 
                                    </TabPanel>
                                    <TabPanel>
                                        <p>To install on Kubernetes, follow the instructions below or see Meshery documentation to <a href="https://meshery.layer5.io/docs/installation#using-docker-on-windows">install on Windows</a>.
                                        Using Kubernetes, install Meshery on your cluster by cloning the Meshery repo:</p>
                                        <Code  className="code"codeString="$ git clone https://github.com/layer5io/meshery.git; cd meshery" />
                                        <p>Install Meshery on your cluster by running the following:</p>
                                        <Code codeString="$ kubectl create ns meshery 
                                        | $ kubectl -n meshery apply -f install/deployment_yamls/k8s" />
                                        <p>If you want to use a different namespace, please change the name of the namespace in the ClusterRoleBinding section appropriately. </p>
                                    </TabPanel>
                                </Tabs>
                                <h3>Step 2: Login</h3>
                                <p>Access Meshery in your browser at <a href="http://localhost:9081">http://localhost:9081</a>.</p>
                            </div>
                        </Col>
                        <Col lg={4}>

                        </Col>
                    </Row>*/}
                    
                    <Faq /> 
                </MesheryWrapper>
            </Layout>
        </ThemeProvider>
    );
};

export default MesheryPage;
