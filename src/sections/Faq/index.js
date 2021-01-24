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
  if(props.category === "all"){
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
                <ul>
                  <li><p>{faq.answer}</p></li>
                  {faq.answer_2 && <li><p>{faq.answer_2}</p></li>}
                  {faq.answer_3 && <li><p>{faq.answer_3}</p></li>}
                  {faq.answer_4 && <li><p>{faq.answer_4}</p></li>}
                  {faq.answer_5&& <li><p>{faq.answer_5}</p></li>}
                </ul>
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
