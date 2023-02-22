import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../../reusecore/Accordion";

// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import particle1 from "../../../assets/images/app/particle/07.png";
import particle2 from "../../../assets/images/app/particle/08.png";

import data from "../../../assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const FaqClassic = () => {
  return (
    <FaqSectionWrapper id="faq">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <SectionTitle className="section-title" UniWidth="80%">
          <h2>
            <span>Easy and perfect solution </span> for this app
          </h2>
        </SectionTitle>
        <Row Vcenter={true}>
          <Col className="faq-content-block" md={8} sm={12} offsetMd={2}>
            <Accordion>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <h5>{faq.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        {/* <IoIosArrowForward /> */}
                      </OpenIcon>
                      <CloseIcon>
                        {/* <IoIosArrowDown /> */}
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{faq.content}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default FaqClassic;
