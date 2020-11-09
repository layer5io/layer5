import React from "react";

function Tools() {
    return (
        <div>
            <div className="heading-container">
                <h2 className="white-text center landscape-category">Tools</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tool</th>
                        <th>Written in</th>
                        <th>Written for</th>
                        <th>Supported by</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/istio/fortio/">fortio</a></td>
                        <td>Golang</td>
                        <td>Istio, general use</td>
                        <td>Istio</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A load testing library and command line tool and web UI. Allows to specify a set query-per-second load and record latency histograms and other useful stats.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/requests/httpbin">httpbin</a></td>
                        <td>Python</td>
                        <td>general use</td>
                        <td>Kenneth Reitz</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A simple HTTP request & response service.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/layer5io/meshery">Meshery</a></td>
                        <td>Golang</td>
                        <td>Istio, Linkerd, Consul, Octarine, Network Service Mesh, App Mesh</td>
                        <td>Layer5</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A service mesh playground to facilitate learning about functionality and performance of different service meshes. Meshery incorporates the collection and display of metrics from applications running in the playground.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/twitter/iago">lago</a></td>
                        <td>Scala</td>
                        <td>Finagle, general use</td>
                        <td>Twitter</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A load generation tool that replays production or synthetic traffic against a given target. Among other things, it differs from other load generation tools in that it attempts to hold constant the transaction rate.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/buoyantio/slow_cooker">slow_cooker</a></td>
                        <td>Golang</td>
                        <td>Linkerd, general use</td>
                        <td>Buoyant</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A load testing tool that produces a predictable load and concurrency level for a long period of time. Provides periodic reports of qps and latency (during testing).</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/wg/wrk">wrk</a></td>
                        <td>C</td>
                        <td>general use</td>
                        <td>Will Glozer</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A modern HTTP benchmarking tool capable of generating significant load when run on a single multi-core CPU. It combines a multithreaded design with scalable event notification systems such as epoll and kqueue.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/aspenmesh/istio-vet">istio-vet</a></td>
                        <td>Golang</td>
                        <td>general use</td>
                        <td>Aspen Mesh</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A tool for validating Istio and application configuration installed in a Kubernetes cluster. It detects incompatible or incorrect configuration which might lead to unexpected runtime behaviors.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://www.kiali.io">Kiali</a></td>
                        <td>Golang</td>
                        <td>Istio</td>
                        <td>Kiali Project, Red Hat</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A graphical user interface to provide insight into what is happening within your Istio service mesh. Kiali graphs the interaction between service mesh components, handles configuration files, and analyses your mesh for potential issues.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/xiaomi/naftis">Naftis</a></td>
                        <td>Golang</td>
                        <td>Istio</td>
                        <td>Xiaomi</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A web-based dashboard for Istio. It helps user manage their Istio tasks more easily. Using Naftis we can custom our own task templates, then build task from them and execute it.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/JoeDog/siege">Siege</a></td>
                        <td>C++</td>
                        <td>Reporting the total number of hits recorded, bytes transferred, response time, concurrency, and return status on web</td>
                        <td>Jeffrey Fulmer</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>It is an http load tester and benchmarking utility.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/Hyperfoil/Hyperfoil">Hyperfoil</a></td>
                        <td>Java</td>
                        <td>general use</td>
                        <td>Red Hat</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>Microservice-oriented distributed benchmark framework:
                        &bull; Drive the load from many nodes.
                        &bull; Express complex scenarios either in YAML or through pluggable steps.
                        &bull; All operations are async to avoid coordinated-omission fallacy (open model by default).</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/cncf/cnf-testbed">CNF Testbed</a></td>
                        <td>Shell</td>
                        <td>Testing network functions</td>
                        <td>CNCF, TLF </td>
                        <td style={{ whiteSpace: "pre-wrap" }}>The CNCF CNF Testbed provides reference code and test cases for running the same networking code packaged as containers (Cloud native Network Functions or CNFs) on Kubernetes and as virtual machines (Virtual Network Functions or VNFs) on OpenStack.
                        </td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/tsenart/vegeta">Vegeta</a></td>
                        <td>Golang</td>
                        <td>HTTP load testing tool</td>
                        <td></td>
                        <td>Vegeta is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. It can be used both as a command line utility and a library.</td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/locustio/locust">Locust</a></td>
                        <td>Python</td>
                        <td>Scalable user load testing tool</td>
                        <td>Locustio </td>
                        <td style={{ whiteSpace: "pre-wrap" }}>Locust is an easy-to-use, distributed, user load testing tool. It is intended for load-testing web sites (or other systems) and figuring out how many concurrent users a system can handle.
                        </td>
                    </tr>
                    <tr style={{ border: "1px dashed #a6b7be", textAlign: "center" }}>
                        <td><a href="https://github.com/envoyproxy/nighthawk">Nighthawk</a></td>
                        <td>C++</td>
                        <td>L7 (HTTP/HTTPS/HTTP2) performance characterization tool</td>
                        <td>Envoy, CNCF</td>
                        <td style={{ whiteSpace: "pre-wrap" }}>A L7 (HTTP/HTTPS/HTTP2) performance characterization tool. Its design focuses on exact request release timing and aims to provide its users with the ability to dynamically customize the request headers and content during an experiment.
                        </td>
                    </tr>
                </tbody>
            </table>
            <span style={{ color: "#000" }}>Found a discrepancy, missing or out-dated information? Please
                <a href="https://github.com/layer5io/layer5/issues" style={{ color: "	#A9A9A9" }}> submit an issue</a>.</span>
        </div>
    );
}

export default Tools;

