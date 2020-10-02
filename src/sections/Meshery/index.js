import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Counters from "../Counters";
import Pricing from "../Pricing";

import meshery_benchmark_screen from "./meshery_benchmark_screen.png";
import meshery_configuration_management from "./meshery-configuration-management.png";
import awsappmesh from "./aws-app-mesh.png";
import consul from "./consul.svg";
import istio from "./istio.svg";
import linkerd from "./linkerd.svg";
import osm from "./osm.png"
import nsm from "./nsm.svg";
import octarine from "./octarine.svg";
import kuma from "./kuma.svg";
import maesh from "./maesh.png";
import tanzu from "./tanzu.png";

import MesheryWrapper from "./meshery.style";

const MesheryPage = () => {
    return (
        <MesheryWrapper>
            <SectionTitle> 
                <h1>Meshery</h1>
            </SectionTitle>
            <Row>
                <Col lg={6} className="content">
                    <Counters />
                    <div>
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
                </Col>
                <Col lg={6} className="content">
                <div class="table_content">
                    <h3 class="black-text center">Service Mesh Adapters</h3>
                        <table class="adapters">
                            <thead>
                                <th>Status</th>
                                <th>Adapter</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowspan="7" class="stable-adapters">stable</td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-istio">
                                    <img src={istio} alt='Istio Service Mesh adapter' class="adapter-logo" />Meshery adapter for Istio</a> 
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-linkerd">
                                    <img src={linkerd} alt='Linkerd' class="adapter-logo" />Meshery adapter for Linkerd</a> 
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-consul">
                                    <img src={consul} alt='Consul Connect' class="adapter-logo" />Meshery adapter for Consul</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-octarine">
                                    <img width="30px" src={octarine} alt='Octarine Service Mesh' class="adapter-logo" />Meshery adapter for Octarine</a> 
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-nsm">
                                    <img src={nsm} alt='Network Mesh' class="adapter-logo" />Meshery adapter for Network Service Mesh</a>
                                </td>
                            </tr>
                            <tr><td class="stable-adapters"><br /></td></tr>
                            <tr>
                                <td rowspan="4" class="beta-adapters">beta</td>
                                <td><a href="https://github.com/layer5io/meshery-cpx">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksHj15DkID308qQw3cmkQrRULPxyzbVquSZVev-9dj1L6sPs-rQ&s' alt='Citrix CPX Service Mesh' class="adapter-logo" />Meshery adapter for Citrix CPX</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-kuma">
                                    <img src={kuma} alt='Kuma Service Mesh' class="adapter-logo" />Meshery adapter for Kuma</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-osm">
                                    <img src={osm} alt='Open Service Mesh' class="adapter-logo" />Meshery adapter for Open Service Mesh</a>
                            </td>
                            </tr>
                            <tr><td class="beta-adapters"><br /></td></tr>
                            <tr>
                                <td rowspan="5" class="alpha-adapters">alpha</td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-maesh">
                                    <img src={maesh} alt='Maesh Service Mesh' class="adapter-logo" />Meshery adapter for Maesh</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-app-mesh">
                                    <img src={awsappmesh} alt='AWS App Mesh Service Mesh' class="adapter-logo" />Meshery adapter for App Mesh </a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/layer5io/meshery-tanzu-sm">
                                    <img src={tanzu} alt='Tanzu Service Mesh' class="adapter-logo" />Meshery adapter for Tanzu SM</a>
                                </td>
                            </tr>
                            <tr><td class="alpha-adapters"><br /></td></tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
            <Pricing />
            <Row>
                <Col lg={6} className="content">
                    <div class="post-content">
                        <h3>Configuration Best Practices and Service Mesh Patterns</h3>
                        <p>	Assess your service mesh configuration against deployment and 
                            operational best practices with Meshery's configuration validator.
                            <a href="/assets/images/meshery/meshery-configuration-management.png" data-caption="Service Mesh configuration Comparison">
                                <img src={meshery_configuration_management}
                                alt="Service Mesh configuration Comparison" />
                            </a>
                            See the <a href = "https://meshery.layer5.io/docs">service mesh patterns</a>.
                        </p>
                    </div>
                </Col>
                <Col lg={6} className="content">
                    <div class="post-content">
                        <h3>Service Mesh Standards</h3>
                        <h6>Service Mesh Performance </h6><a name="smp"></a>
                        <img src="/assets/images/buttons/smp-dark-text.png" 
                        class="light-shadow" width="25%" />
                        The <a href="https://github.com/layer5io/service-mesh-performance">Service Mesh Performance (SMP)</a>
                        is a vendor-neutral specification to aid operators in assessing the overhead of their service mesh in context of the value it provides.
                        Layer5's MeshDex provides a universal performance index to gauge your mesh’s efficiency against deployments in other organizations’ environments.
                        <p>Learn more about <a href="/performance">this open standard</a> as a partnership of Layer5, UT Austin, and Google.</p>
                    
                        <h6>Service Mesh Interface</h6><a name="smi"></a>
                        <a href="/blog/a-standard-interface-for-service-meshes">
                            <img src="/assets/images/posts/2019-05-21-a-standard-interface-for-service-meshes/smi-logo.png" 
                            width="22%" align="right" /></a>
                        <a href="http://smi-spec.io" target="_blank">Service Mesh Interface (SMI)</a> 
                        SMI defines a common standard that can be implemented by a variety of service mesh projects and vendors. SMI’s aim for consistent APIs facilitates Meshery’s same goals, 
                        allowing for users and tools to flourish. As SMI was unveiled at KubeCon + CloudNativeCon Europe 2019, so did Meshery’s compatibility.   
                        <p>Learn more about 
                        <a href="/blog/a-standard-interface-for-service-meshes">Layer5's partnership with Microsoft and the CNCF</a>.</p>
                    </div> 
                </Col>
            </Row>
        </MesheryWrapper>
    );
};

export default MesheryPage;
