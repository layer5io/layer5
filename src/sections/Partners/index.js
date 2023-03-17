import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { partners } from "./partners";
import PartnerWrapper from "./partner.style";
import Partner_Icon from "../../assets/images/contact/partner_white.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const Partner = () => {
  let academic_partners = partners.filter(partner => partner.type === "academic");
  let technology_partners = partners.filter(partner => partner.type === "technology");
  let len_acad_part = academic_partners.length;
  const { isDark } = useStyledDarkMode();
  const theme = isDark ? "dark" : "light";
  // const [isOpen, setIsOpen] = useState(false);
  // const [ID, setID] = useState(-1);

  // const toggleActive = (id) => {

  //   if (isOpen){
  //     if (ID === id){
  //       setIsOpen(false);
  //       setID(-1);
  //     } else {
  //       setIsOpen(false);
  //       setID(id);
  //       setIsOpen(true);
  //     }
  //   } else {
  //     setID(id);
  //     setIsOpen(true);
  //   }
  // };

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
            <p>Layer5 established the Layer5 Partner Program to develop an ecosystem to advance higher learning of cloud native networking and to enable service providers to accelerate customers’ digital transformations, helping them move into the new era of DevOps and cloud native applications.</p>
          </div>
        </div>
        {
          academic_partners.map((partner, index) => (
            <div key={index} className="acc-cont">
              <Row className={(index) % 2 === 1 ? "cont-row-reverse" : "cont-row"} >
                <Col xs={5} sm={3} lg={3} className="custom-col mob-col">
                  <div className="img1">
                    <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                      <img src={theme === "dark" ? partner.darkimageLink : partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                    </a>
                  </div>
                </Col>
                <Col xs={12} sm={9} lg={9}>
                  <div className="container">
                    <a id={partner.partnerId} className="anchor">
                      <h2>{partner.name}</h2>
                    </a>
                    <div>
                      {partner.desc}
                    </div>
                    {/* {
                      isOpen && ID === index? <button onClick={() => toggleActive(index)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                        <button onClick={() => toggleActive(index)} className="readmeBtn"> Read More <BsArrowDown className="icon" size={30} /></button>
                    } */}
                  </div>
                </Col>
              </Row>
              {/* <div className={isOpen && ID === index ? "par-cont parent-cont-active" : "par-cont parent-cont" }>
                <div className={isOpen && ID === index && index % 2 == 1 ? "row-elem moreInfo-div-active cont-row-reverse": isOpen && ID === index && index % 2 == 0 ? "row-elem moreInfo-div-active cont-row": ID !== index && index % 2 == 1 ? "row-elem moreInfo-div cont-row-reverse" : "row-elem moreInfo-div cont-row"}>
                  <div className="sub-cont">
                    <div className="custom-col content-head">
                      <div className="img1 img-1-mob">
                        <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                          <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                        </a>
                      </div>
                      <h1>{partner.name}</h1>
                    </div>
                    <div className="mobview">
                      <div className="container cont-vert-align">
                        {partner.moreInfo}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          ))
        }
        <h1 className="heading">Our Technology Partners</h1>
        {
          technology_partners.map((partner, index) => (
            <div key={index + len_acad_part} className="acc-cont">
              <Row className={((len_acad_part + index) % 2 == 1) ? "cont-row-reverse" : "cont-row"}>
                <Col xs={5} sm={3} lg={3} className="custom-col mob-col">
                  <div className="img1">
                    <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                      <img src={theme === "dark" ? partner.darkimageLink : partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                    </a>
                  </div>
                </Col>
                <Col xs={12} sm={9} lg={9}>
                  <div className="container">
                    <a id={partner.partnerId} className="anchor">
                      <h2>{partner.name}</h2>
                    </a>
                    <div>
                      {partner.desc}
                    </div>
                    {/* {
                      isOpen && ID === index+len_acad_part? <button onClick={() => toggleActive(index+len_acad_part)} className="readmeBtn"> Read Less <BsArrowUp className="icon" size={30} /></button> :
                        <button onClick={() => toggleActive(index+len_acad_part)} className="readmeBtn"> Read More <BsArrowDown className="icon" size={30} /></button>
                    } */}
                  </div>
                </Col>
              </Row>
              {/* <div className={isOpen && ID === index + len_acad_part ? "par-cont parent-cont-active" : "par-cont parent-cont" }>
                <div className={isOpen && ID === index + len_acad_part && (len_acad_part+ index) % 2 == 1 ? "row-elem moreInfo-div-active cont-row-reverse" : isOpen && ID === index + len_acad_part && (len_acad_part+ index) % 2 == 0 ? "row-elem moreInfo-div-active cont-row" : ID !== index + len_acad_part && (len_acad_part+ index) % 2 == 1 ? "row-elem moreInfo-div cont-row-reverse" : "row-elem moreInfo-div cont-row"}>
                  <div className="sub-cont">
                    <div className="custom-col content-head">
                      <div className="img1 img-1-mob">
                        <a href={partner.imageRoute} target="_blank" rel="noopener noreferrer">
                          <img  src={partner.imageLink} title="Click to know More about our partner" alt={partner.name} />
                        </a>
                      </div>
                      <h1>{partner.name}</h1>
                    </div>
                    <div className="mobview">
                      <div className="container cont-vert-align">
                        {partner.moreInfo}
                        {partner.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          ))
        }
        <div className="partner-button-cont">
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
