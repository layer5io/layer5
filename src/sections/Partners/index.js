import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import {partners} from "../../collections/partners/partners";
import PartnerWrapper from "./partner.style";

const Partner = () => {
  let academic_partners = partners.filter(partner => partner.type === "academic");
  let technology_partners = partners.filter(partner => partner.type === "technology");

  return (
    
    <PartnerWrapper>
      <div className="partner-container">
        <div className="partner-container-head">
          <h1>Layer5 Partner Program</h1>
        </div>
        <div className="partner-container-body">    
          <div className="container">
            <p>Layer5 is dedicated to partnering with leading educational institutions, technology vendors, solution providers and industry experts to drive the adoption of cloud native technologies focused on the evolution of how developers write modern applications, how operators run infrastructure and how product owners manage service offerings.</p>      
          </div>
          <div className="partner-button">
            <Button primary className="partner-btn" url="mailto:partners@layer5.io?subject=Partner Program" external={true}>
              <p>Become</p>
              <p>A</p>
              <p>Partner</p>
            </Button>
          </div>
        </div>
      </div>
      <Container>
        <div className="academic-container"> 
          <div className="acad-container-body">
            <h1 className="heading">Academic Partners</h1>
            <p>Layer5, the service mesh community, established the Layer5 Partner Program to develop an ecosystem to advance higher learning of cloud native networking and to enable service providers to accelerate customers’ digital transformations, helping them move into the new era of DevOps and cloud native applications.</p>
          </div>
        </div>
        {
          academic_partners.map((partner,index) => (
            <Row key={index} className={(index) %2 == 1?"cont-row-reverse":"cont-row"}>
              <Col xs={5} sm={3} lg={2} className="custom-col">
                <div className="img1">
                  <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                    <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={9} lg={10}>
                <div className="container">
                  <h2>{partner.name}</h2>
                  <div>
                    {partner.desc}
                  </div>
                  {
                    partner.link ?<Button secondary className="custom-btn" url={partner.link}>Learn More &rarr;</Button>:null
                  }
                </div>
              </Col>
            </Row>
          ))
        }
        <h1 className="heading">Our Technology Partners</h1>
        {
          technology_partners.map((partner,index) => (
            <Row key={index+1} className={(academic_partners.length % 2 == 0 && index % 2 == 1) || (academic_partners.length % 2 == 1 && index % 2 == 0)?"cont-row-reverse":"cont-row"}>
              <Col xs={5} sm={3} lg={2} className="custom-col">
                <div className="img1">
                  <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                    <img src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={9} lg={10} >
                <div className="container">
                  <h2>{partner.name}</h2>
                  <div>
                    {partner.desc}
                  </div>
                  {
                    partner.link ?<Button secondary className="custom-btn" url={partner.link} title="Learn More" >&rarr;</Button>:null
                  }
                </div>
              </Col>
            </Row>
          ))
        }
        <div className='partner-button-cont'>
          <div className="partner-btn-cont-head">
            <h1>Become a Layer5 Partner</h1>
          </div>
          <div className="partner-btn-cont-body">
            <Button primary title="BECOME A PARTNER" url="mailto:partners@layer5.io" external={true} />
          </div>
        </div>
      </Container>
    </PartnerWrapper >
  );
};


export default Partner;
