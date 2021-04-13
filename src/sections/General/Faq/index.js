import React from "react";

import { Container} from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
// import { FiSearch } from "react-icons/fi";
import Button from "../../../reusecore/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../../reusecore/Accordion";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import data from "../../../assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";
import ContactFormModal from "../../../components/Contact-Modal";

const Faq = () => {

  let faq_keys = [];

  let faqs = data.faqs.reduce((faq, ind) => {
    faq[ind.category] = [...faq[ind.category] || [], ind];
    return faq;
  }, {});

  faq_keys = Object.keys(faqs);

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
          {/* <div className="search">
            <Button>
                <FiSearch size={22} />
            </Button>
            <input type="text" placeholder="Search" />
          </div> */}
        </SectionTitle>
        <Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
          {faq_keys.map((key) => (
            <>
              <h2 className="category_name">{key}</h2>
              {faqs[key].map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <IconWrapper>
                      {console.log(faq)}
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
                    <div className="faqbutton">
                      {faq.link && <Button primary className="faqbutton" url={faq.link} title={faq.linktext} external={false} />}
                    </div>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </>
          ))}
        </Accordion>
        <div className="askus_section">
          <h2>Didn't find an answer to your question?</h2>
          <p>Ask Us</p>
          <ContactFormModal callout_text="Let Us Know" form_header="Mail Us Your Query" />
        </div>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
