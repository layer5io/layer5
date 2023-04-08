import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../../../components/layout";
import SMPWrapper from "./smp.style";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import MeshMapCTA from "../../meshmap-cta";

import example from "../../../assets/images/smp-page/service-mesh-performance-specification-example.gif";
import smp from "../../../assets/images/smp-page/smp-white.svg";


const latency = "../../../assets/images/smp-page/latency-at-scale.png";
const wasm_capacity = "../../../assets/images/smp-page/native-and-wasm-at-capacity-100rps.png";
const client_capacity = "../../../assets/images/smp-page/client-capacity.png";

const SMPPage = () => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "smp-page/smp-hero.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 80 }
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(backgroundImage123);

  return (
    <Layout>
      <SMPWrapper>
        <BgImage image={pluginImage} className="section">
          <div className="smp-hero">
            <Container>
              <div className="hero-text">
                <Row>
                  <Col lg={5} md={12} sm={12} style={{ display: "flex", justifyContent: "center" }}>
                    <img className="logo-img" alt="smp-logo" src={smp} />
                  </Col>
                  <Col lg={7} md={12} sm={12} style={{ textAlign: "center" }}>
                    <h1> Service Mesh Performance </h1>
                    <p>Donated by Layer5, Intel, Red Hat, and HashiCorp, Service Mesh Performance is a CNCF-hosted project. Using SMP, MeshMark provides a universal performance index to gauge your mesh's efficiency against deployments in other organizations' environments.</p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </BgImage>
        <Container>
          <div className="smp-details">
            <h2> Standardizing Service Mesh Value Measurement</h2>
            <h3>SMP is a collaborative effort of Layer5, UT Austin, Intel, Red Hat, HashiCorp, Google and The Linux Foundation.</h3>
            <Row>
              <Col lg={6}>
                <img src={example} className="smp-example" alt="example: smp in action"></img>
              </Col>
              <Col className="features" lg={6}>
                <h1> SMP accounts for details of:</h1>
                <table>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#FFF7D8" rx="5" /><path stroke="#EBC017" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20" /></svg></td>
                    <td className="feature"> Environment and infrastructure details </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#FFF7D8" rx="5" /><path stroke="#EBC017" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20" /></svg></td>
                    <td className="feature"> Service mesh and its configuration </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#FFF7D8" rx="5" /><path stroke="#EBC017" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20" /></svg></td>
                    <td className="feature"> Service (workload) details </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#FFF7D8" rx="5" /><path stroke="#EBC017" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20" /></svg></td>
                    <td className="feature"> Statistical analysis of performance results </td>
                  </tr>
                </table>
                <Button primary title="Learn More" url="https://smp-spec.io"></Button>
              </Col>
            </Row>
          </div>
          <div className="use-cases">
            <div className="use-case-title">
              <h1> Performance of Envoy Filters </h1>
              <h4> The following analysis compares native Envoy filter performance to WebAssembly (WASM) filter performance using Rust. </h4>
            </div>
            <Row className="use-case-data">
              <Col className="use-case-box" lg={6}>
                <StaticImage src={wasm_capacity} alt="wasm capacity" />
              </Col>
              <Col className="use-case-box" lg={6}>
                <div>
                  <h1> Native WASM at Capacity </h1>
                  <p> When every request goes via the rate-limit check and then the actual program logic, we see that the latency incurred for the WASM code is higher than the Native client. This is expected since the native client has processing for rate-limiting locally in a process whereas the rust module is invoked as an additional thread to do the processing and the communication involved with the module incurs an overhead. This is prominent in the minimum response time case which represents latency just due to rate-limiting logic where every other part of the request is already "warm". <br />
                    As we move towards average latency, the overhead gets slightly amortized but is still above the native rate-limiting case. Our max latency is slightly lower than native, but we attribute it to various other system effects like TLS handshake and network latencies that usually contribute to the maximum tail latency. </p>
                </div>
              </Col>
            </Row>
            <Row className="use-case-data">
              <Col className="use-case-box" lg={6}>
                <div>
                  <h1> Latency at scale </h1>
                  <p> When we go beyond the application capacity (100 in our example), we start noticing the power of a in-line ight wasm module which starts terminating requests at the side-car and the core application logic is never invoked/loaded. We notice that even the minimum response time for a terminated request is about 15-20% faster than invoking of application logic since the wasm is a dynamic module in the sidecar and we start to avoid complex network redirection and invocation of a new container/instance. We also notice that the average latency of requests is lower than in the case of native client.</p>
                </div>
              </Col>
              <Col className="use-case-box" lg={6}>
                <StaticImage src={latency} alt="latency" />
              </Col>
            </Row>
            <Row className="use-case-data">
              <Col className="use-case-box" lg={6}>
                <StaticImage src={client_capacity} alt="client capacity" />
              </Col>
              <Col className="use-case-box" lg={6}>
                <div>
                  <h1> Client Capacity </h1>
                  <p> Client Capacity figure also shows us that we are able to handle more requests than in the native case, although this infometric needs to be taken with a grain of salt, i.e. the difference might reduce if our application capacity was significantly larger than 100. </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="smp-effects">
          <Container>
            <div className="effects-title">
              <h1> Discreetly Studying the Effects of Individual Traffic Control Functions</h1>
              <h4> The group is also working in collaboration with the Envoy project to create easy-to-use tooling around distributed performance management (distributed load generation and analysis) in context of Istio, Consul, Tanzu Service Mesh, Network Service Mesh, App Mesh, Linkerd, and so on. </h4>
            </div>
          </Container>
          <div className="iframes">
            <iframe className="iframe" src="https://www.youtube.com/embed/rgnb0-ntPko" loading="lazy"
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <iframe className="iframe" src="https://www.youtube.com/embed/LxP-yHrKL4M" loading="lazy"
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <iframe className="iframe" src="https://docs.google.com/presentation/d/e/2PACX-1vSWhREOZIfJqTG8jHtitgb5e-OAHC7E8EMmoVCaTRmC8b_itHkeFUNKcBVn9oaTpX5ozYvlhscvBXiK/embed?start=false&loop=false&delayms=3000" loading="lazy"
              frameBorder="0" allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="cncf-callout">
          <h1> Join the CNCF Service Mesh Working Group </h1>
          <h4> Learn more about these initiatives</h4>
          <Button primary title="Learn More" url="https://smp-spec.io"></Button>
        </div>
        <MeshMapCTA />
      </SMPWrapper>
    </Layout>
  );
};

export default SMPPage;