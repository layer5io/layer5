import React from "react";
import {Link} from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Button from "../../reusecore/Button";

import ContactCard from "../../components/ContactCard";
import partner1 from "../../assets/images/partners/University_of_Texas_at_Austin_seal.png";
import partner2 from "../../assets/images/partners/gsoc.svg";
import partner3 from "../../assets/images/partners/UEM_Logo.jpg";
import partner4 from "../../assets/images/partners/citrix.svg";
import partner5 from "../../assets/images/partners/cncf-stacked-color.svg";
import partner6 from "../../assets/images/partners/hashicorp_vertical_black.svg";
import partner7 from "../../assets/images/partners/hpe_side_black.svg";
import partner8 from "../../assets/images/partners/microsft.svg";
import partner9 from "../../assets/images/partners/redhat.svg";
import partner10 from "../../assets/images/partners/smi1.png";
import PartnerWrapper from "./partner.style";

const Partner = () => {
  return (
    <PartnerWrapper>
      <PageHeader title="Layer5 Partner Program"
        path="Partners"
      />
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={8}>
            <br />
            <div className="container">
              <p>Layer5 is dedicated to partnering with leading educational institutions, technology vendors, solution providers and industry experts to drive the adoption of cloud native technologies focused on the evolution of how developers write modern applications, how operators run infrastructure and how product owners manage service offerings.</p>
              <p>Layer5, the service mesh community, established the Layer5 Partner Program to develop an ecosystem to advance higher learning of cloud native networking and to enable service providers to accelerate customers’ digital transformations, helping them move into the new era of DevOps and cloud native applications.</p>
            </div>
          </Col>
          <Col xs={0} sm={4} lg={4} className="btn-section" >
            <div className="container partner-button">
              <Button primary title="BECOME A PARTNER" url="mailto:partners@layer5.io?subject=Partner Program" external="true" />
            </div>
          </Col>
        </Row>

        <h1 className="heading">Academic Partners</h1>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="http://www.ece.utexas.edu/speakers/lee-calcote" target="_blank" rel="noopener noreferrer">
                <img width="120px" height="120px" src={partner1} title="Click to know More about our partner" alt="The University of Texas at Austin" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>The University of Texas at Austin</h2>
              <div>
                In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.
                            Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about <a href="http://www.ece.utexas.edu/speakers/lee-calcote">our collaborative research</a>.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.0625em" }}>
              <a href="https://layer5.io/gsoc/2020" target="_blank" rel="noopener noreferrer">
                <img width="120px" height="120px" src={partner2} title="Click to know More about our partner" alt="Google Summer of Code" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>Google Summer of Code</h2>
              <div>
                Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about <Link to="/programs">our mentoring</Link>.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="https://uem.edu.in/blog/what-is-open-source/" target="_blank" rel="noopener noreferrer">
                <img width="150px" height="130px" src={partner3} title="Click to know More about our partner" alt="University of Engineering and Management Jaipur" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>University of Engineering & Management Jaipur</h2>
              <div>
                We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the univeristy participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.
                            Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. Learn more about <Link to="/careers/internships">Layer5's internships</Link>.
              </div>
            </div>
          </Col>
        </Row>
        <h1 className="heading">Technology Partners</h1>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="https://www.citrix.com/products/citrix-adc/" target="_blank" rel="noopener noreferrer">
                <img width="120px" height="120px" src={partner4} title="Click to know More about our partner" alt="Citrix" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>Citrix</h2>
              <div>
                Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1em" }}>
              <a href="https://landscape.cncf.io/category=cncf-members&format=logo-mode&grouping=category&selected=layer5-member&embed=yes" target="_blank" rel="noopener noreferrer">
                <img width="130px" height="130px" src={partner5} title="Click to know More about our partner" alt="Cloud Native Computing Foundation (CNCF)" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div leftAlign={true} className="container">
              <h2>Cloud Native Computing Foundation (CNCF)</h2>
              <div>
                The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: ".99em" }}>
              <a href="https://www.hashicorp.com/integrations/layer5-io/consul" target="_blank" rel="noopener noreferrer">
                <img width="110px" height="110px" src={partner6} alt="HashiCorp" title="Click to know More about our partner" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div leftAlign={true} className="container">
              <h2>HashiCorp</h2>
              <div>
                HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.0625em" }}>
              <a href="https://www.hpe.com/" target="_blank" rel="noopener noreferrer">
                <img width="100%" height="100px" src={partner7} alt="HPE" title="Click to know More about our partner" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>HPE</h2>
              <div>
                HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="https://istio.io/about/community/partners/" target="_blank" rel="noopener noreferrer">
                <img alt="Istio" width="100%" height="70px" src="data:image/png;base64,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" title="Click to know More about our partner" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div leftAlign={true} className="container">
              <h2>Istio</h2>
              <div>
                Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer">
                <img width="120%" height="75px" src={partner8} title="Click to know More about our partner" alt="Microsoft" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>Microsoft</h2>
              <div>
                Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "1.625em" }}>
              <a href="https://www.redhat.com/" target="_blank" rel="noopener noreferrer">
                <img width="130px" height="100%" src={partner9} title="Click to know More about our partner" alt="Red Hat" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div leftAlign={true} className="container">
              <h2>Red Hat</h2>
              <div>
                The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={2} lg={2}>
            <div className="img1" style={{ paddingTop: "2em" }}>
              <a href="https://smi-spec.io/" target="_blank" rel="noopener noreferrer">
                <img width="100%" height="60px" src={partner10} title="Click to know More about our partner" alt="Service Mesh Interface" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={10} lg={10}>
            <div rightAlign={true} className="container">
              <h2>Service Mesh Interface</h2>
              <div>
                The Service Mesh Interface (SMI) is a specification for service meshes that run on Kubernetes. It defines a common standard that can be implemented by a variety of providers. This allows for both standardization for end-users and innovation by providers of Service Mesh Technology. It enables flexibility and interoperability.
              </div>
            </div>
          </Col>
        </Row>
        <Row className='partner-button-row'>
          <Col xs={12} sm={4} lg={4}>
            <div className="container partner-button">
              <Button primary title="BECOME A PARTNER" url="mailto:partners@layer5.io" external="true" />
            </div>
          </Col>
        </Row>
        <ContactCard />
      </Container>
    </PartnerWrapper >
  );
};


export default Partner;
