import React from "react";
import { Link } from "gatsby";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import {ThemeProvider} from "styled-components";

import Layout from "../../components/layout"; 

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import Counters from "../Counters";
import Pricing from "../Pricing";
import Code from "../../components/CodeBlock";
import Faq from "../Faq";

import meshery from "./meshery-logo-light-text-side.png";
import meshery_multi_mesh from "./meshery_multi_mesh.png";
import meshes from "./meshes.png"
import meshery_benchmark_screen from "./meshery_benchmark_screen.png";
import meshery_configuration_management from "./meshery-configuration-management.png";
import aws_app_mesh from "./aws-app-mesh.png";
import consul from "./consul.svg";
import istio from "./istio.svg";
import linkerd from "./linkerd.svg";
import osm from "./osm.png";
import nsm from "./nsm.svg";
import octarine from "./octarine.svg";
import kuma from "./kuma.svg";
import maesh from "./maesh.png";
import tanzu from "./tanzu.png";
import smi_logo from "./smi-logo.png";
import smp_logo from "./smp-dark-text.png";
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
                            <h2>Manage the performance of your service mesh and its workloads</h2>
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
                                <img src={meshery_benchmark_screen} />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <h2>Manage the performance of your service mesh and its workloads</h2>
                            Baseline and track your service mesh performance from release to release.
                            <ul>
                                <li>Track your application performance from version to version.</li>
                                <li>Understand behavioral differences between service meshes.</li>
                                <li>Compare performance across service mesh deployments.</li>
                            </ul>
                            </Col>
                        </Row>
                        <Row className="use_row"> 
                            <Col lg={6} md={12} sm={12}>
                            <h2>Manage the performance of your service mesh and its workloads</h2>
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
                                <img src={meshery_benchmark_screen} />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <h2>Manage the performance of your service mesh and its workloads</h2>
                            Baseline and track your service mesh performance from release to release.
                            <ul>
                                <li>Track your application performance from version to version.</li>
                                <li>Understand behavioral differences between service meshes.</li>
                                <li>Compare performance across service mesh deployments.</li>
                            </ul>
                            </Col>
                        </Row>
                    </div>
                    {/* <Pricing />
                    <Row>
                        <Col lg={6} className="content">
                            <Counters />
                            <div className="extra">
                                <h3>Baseline, Measure, and Assess</h3>
                                <p>       
                                    <ul>
                                        <li> Compare apples-to-apples performance across service meshes.</li>
                                        <li> Track your service mesh performance from release to release.</li>
                                        <li> Understand behavioral differences between service meshes.</li>
                                        <li> Track your application performance from version to version.</li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <a href="/assets/images/meshery/meshery_benchmark_screen.png">
                                    <img src={meshery_benchmark_screen}  
                                        alt="Meshery service mesh comparison"
                                        title="Service mesh comparison"  /><br />service performance comparison</a>
                            </div>
                            <div className="sub-content">
                                <h3>Service Mesh Standards</h3>
                                <h5>Service Mesh Performance </h5><a name="smp"></a>
                                <img src={smp_logo} align="left" width="25%" />
                        The <a href="https://github.com/layer5io/service-mesh-performance">Service Mesh Performance (SMP)</a>
                        is a vendor-neutral specification to aid operators in assessing the overhead of their service mesh in context of the value it provides.
                        Layer5's MeshDex provides a universal performance index to gauge your mesh’s efficiency against deployments in other organizations’ environments.
                                <p>Learn more about <a href="/performance">this open standard</a> as a partnership of Layer5, UT Austin, and Google.</p>
                    
                                <h5>Service Mesh Interface</h5><a name="smi"></a>
                                <a href="/blog/a-standard-interface-for-service-meshes">
                                    <img src={smi_logo} 
                                        width="22%" align="right" /></a>
                                <a href="http://smi-spec.io">Service Mesh Interface (SMI)</a> 
                        SMI defines a common standard that can be implemented by a variety of service mesh projects and vendors. SMI’s aim for consistent APIs facilitates Meshery’s same goals, 
                        allowing for users and tools to flourish. As SMI was unveiled at KubeCon + CloudNativeCon Europe 2019, so did Meshery’s compatibility.   
                                <p>Learn more about 
                                    <a href="/blog/a-standard-interface-for-service-meshes">Layer5's partnership with Microsoft and the CNCF</a>.</p>
                            </div> 
                        </Col>
                        <Col lg={6} className="content">
                            <div className="table_content">
                                <h3 className="black-text center">Service Mesh Adapters</h3>
                                <table className="adapters">
                                    <thead>
                                        <th>Status</th>
                                        <th>Adapter</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan="7" className="stable-adapters">stable</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-istio">
                                                <img src={istio} alt='Istio Service Mesh adapter' className="adapter-logo" />Meshery adapter for Istio</a> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-linkerd">
                                                <img src={linkerd} alt='Linkerd' className="adapter-logo" />Meshery adapter for Linkerd</a> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-consul">
                                                <img src={consul} alt='Consul Connect' className="adapter-logo" />Meshery adapter for Consul</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-octarine">
                                                <img width="30px" src={octarine} alt='Octarine Service Mesh' className="adapter-logo" />Meshery adapter for Octarine</a> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-nsm">
                                                <img src={nsm} alt='Network Mesh' className="adapter-logo" />Meshery adapter for Network Service Mesh</a>
                                            </td>
                                        </tr>
                                        <tr><td className="stable-adapters"><br /></td></tr>
                                        <tr>
                                            <td rowSpan="4" className="beta-adapters">beta</td>
                                            <td><a href="https://github.com/layer5io/meshery-cpx">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksHj15DkID308qQw3cmkQrRULPxyzbVquSZVev-9dj1L6sPs-rQ&s' alt='Citrix CPX Service Mesh' className="adapter-logo" />Meshery adapter for Citrix CPX</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-kuma">
                                                <img src={kuma} alt='Kuma Service Mesh' className="adapter-logo" />Meshery adapter for Kuma</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-osm">
                                                <img src={osm} alt='Open Service Mesh' className="adapter-logo" />Meshery adapter for Open Service Mesh</a>
                                            </td>
                                        </tr>
                                        <tr><td className="beta-adapters"><br /></td></tr>
                                        <tr>
                                            <td rowSpan="5" className="alpha-adapters">alpha</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-maesh">
                                                <img src={maesh} alt='Maesh Service Mesh' className="adapter-logo" />Meshery adapter for Maesh</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-app-mesh">
                                                <img src={aws_app_mesh} alt='AWS App Mesh Service Mesh' className="adapter-logo" />Meshery adapter for App Mesh </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://github.com/layer5io/meshery-tanzu-sm">
                                                <img src={tanzu} alt='Tanzu Service Mesh' className="adapter-logo" />Meshery adapter for Tanzu SM</a>
                                            </td>
                                        </tr>
                                        <tr><td className="alpha-adapters"><br /></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sub-content">
                                <h3>Configuration Best Practices and Service Mesh Patterns</h3>
                                <p>	Assess your service mesh configuration against deployment and 
                            operational best practices with Meshery's configuration validator.
                                <a href="/assets/images/meshery/meshery-configuration-management.png" data-caption="Service Mesh configuration Comparison">
                                    <img src={meshery_configuration_management}
                                        alt="Service Mesh configuration Comparison" />
                                </a><br />
                            See the <a href = "https://meshery.layer5.io/docs">service mesh patterns</a>.
                                </p>
                            </div>
                        </Col>
                    </Row> */}
                    {/* <div className="content">
                        <a name="architecture"></a>
                        <h3>Architecture</h3>
                        <a href={meshery_architecture}>
                            <img src={meshery_architecture} />
                        </a>
                    </div>
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
                    </Row>
                    
                    <Faq /> */}
                </MesheryWrapper>
            </Layout>
        </ThemeProvider>
    );
};

export default MesheryPage;
