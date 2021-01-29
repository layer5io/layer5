import React from "react";

import { Container} from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
// import { FiSearch } from "react-icons/fi";
import Button from "../../reusecore/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../reusecore/Accordion";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import data from "../../assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = (props) => {
  let faqs = [];
  if(props.category === "all" || props.category === undefined){
    faqs = data.faqs;
  }

  data.faqs.forEach(faq => {
    if(faq.category.toString() === props.category){
      faqs.push(faq);
    }
  });

  return (
    <FaqSectionWrapper id="faq">
      <Container fullWidthSM>
        <SectionTitle
          className="section-title"
          leftAlign={true}
          UniWidth="100%"
        >
          <h1>
            <span>Frequently Asked Questions</span>
          </h1>
          <div className="search">
            {/* <Button>
                            <FiSearch size={22} />
                        </Button> */}
            <input type="text" placeholder="Search" />
          </div>
        </SectionTitle>
        <Accordion allowMultipleExpanded="true" allowZeroExpanded="true">


          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTitle>
                <IconWrapper>
                  <h5>{faq.question}</h5>
                  <OpenIcon>
                    <IoIosArrowUp size={22} color="white" />
                  </OpenIcon>
                  <CloseIcon>
                    <IoIosArrowDown size={22} color="white" />
                  </CloseIcon>
                </IconWrapper>
              </AccordionTitle>
              <AccordionBody>
                {
                  faq.answer.length >=1 ? <ul>{faq.answer.map((ans, id) => (<li key={id}><p key={id}>{ans}</p></li>))}</ul> : <br />
                }
                {/*

                                Jash, will you padding and center this button?

                                */}
                <div className="faqbutton">
                  {faq.link && <Button primary className="faqbutton" url={faq.link} title={faq.linktext} external="false" />}
                </div>
              </AccordionBody>
            </AccordionItem>
          ))}



        </Accordion>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
