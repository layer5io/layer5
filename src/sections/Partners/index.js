import React,{ useState } from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import {partners} from "./partners";
import PartnerWrapper from "./partner.style";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import Partner_Icon from "../../assets/images/contact/partner_white.svg";

const Partner = () => {
  let academic_partners = partners.filter(partner => partner.type === "academic");
  let technology_partners = partners.filter(partner => partner.type === "technology");
  let len_acad_part = academic_partners.length;
  const [isOpen, setIsOpen] = useState(false);
  const [ID, setID] = useState(-1);

  const toggleActive = (id) => {
    
    if(isOpen){
      if(ID === id){
        setIsOpen(false);
        setID(-1);
      } else{
        setIsOpen(false);
        setID(id);
        setIsOpen(true);
      }
    } else{
      setID(id);
      setIsOpen(true);
    } 
  };

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
            <Button primary className="partner-btn" url="mailto:partners@layer5.io?subject=Partner Program" external={true} icon={Partner_Icon} title="Become A Partner" />
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
            <div key={index}>
              <Row  className={(index) % 2 === 1?"cont-row-reverse":"cont-row"} >
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
                      isOpen && ID === index? <button onClick={() => toggleActive(index)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                        <button onClick={() => toggleActive(index)} className="readmeBtn readmreBtn"> Read More <BsArrowDown className="icon" size={30} /></button> 
                    }
                  </div>
                </Col>
              </Row>
              {
                index % 2 == 1 ? <Row className={isOpen && ID === index ? "row-elem moreInfo-div-active cont-row-reverse": "row-elem moreInfo-div cont-row-reverse"}>
                  <Col xs={5} sm={3} lg={4} className="custom-col">
                    <div className="img1">
                      <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                        <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={9} lg={8}>
                    <div className={isOpen&& ID === index ? "container container-active":"container"}>
                      <h2>{partner.name}</h2>
                      <div>
                        {partner.moreInfo}
                      </div>
                    </div>
                  </Col>
                </Row> : <Row className={isOpen && ID === index ? "row-elem moreInfo-div-active cont-row": "row-elem moreInfo-div cont-row"}>
                  <Col xs={5} sm={3} lg={4} className="custom-col">
                    <div className="img1">
                      <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                        <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={9} lg={8}>
                    <div className={isOpen&& ID === index ? "container container-active":"container"}>
                      <h2>{partner.name}</h2>
                      <div>
                        {partner.moreInfo}
                      </div>
                    </div>
                  </Col>
                </Row>
              }
            </div>
          ))
        }
        <h1 className="heading">Our Technology Partners</h1>
        {
          technology_partners.map((partner,index) => (
            <div key={index+len_acad_part}>
              <Row  className={((len_acad_part+ index) % 2 == 1)?"cont-row-reverse":"cont-row"}>
                <Col xs={5} sm={3} lg={2} className="custom-col">
                  <div className="img1">
                    <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                      <img src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
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
                      isOpen && ID === index+len_acad_part? <button onClick={() => toggleActive(index+len_acad_part)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                        <button onClick={() => toggleActive(index+len_acad_part)} className="readmeBtn readmreBtn"> Read More <BsArrowDown className="icon" size={30} /></button> 
                    }
                  </div>
                </Col>
              </Row>
              {
                (len_acad_part+ index) % 2 == 1?<Row className={isOpen && ID === index + len_acad_part? "row-elem moreInfo-div-active cont-row-reverse": "row-elem moreInfo-div cont-row-reverse"}>
                  <Col xs={5} sm={3} lg={4} className="custom-col">
                    <div className="img1">
                      <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                        <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={9} lg={8}>
                    <div className={isOpen&& ID === index+len_acad_part ? "container container-active":"container"}>
                      <h2>{partner.name}</h2>
                      <div>
                        {partner.moreInfo}
                        {partner.desc}
                      </div>
                    </div>
                  </Col>
                </Row> : <Row  className={isOpen && ID === index + len_acad_part ? "row-elem moreInfo-div-active cont-row": "row-elem moreInfo-div cont-row"}>
                  <Col xs={5} sm={3} lg={4} className="custom-col">
                    <div className="img1">
                      <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                        <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={9} lg={8}>
                    <div className={isOpen&& ID === index+len_acad_part ? "container container-active":"container"}>
                      <h2>{partner.name}</h2>
                      <div>
                        {partner.moreInfo}
                        {partner.desc}
                      </div>
                    </div>
                  </Col>
                </Row>
              }
            </div>
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
    </PartnerWrapper>
  );
};


export default Partner;
