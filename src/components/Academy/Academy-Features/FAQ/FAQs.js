import React from "react";

import { Container } from "../../../../reusecore/Layout";
import SectionTitle from "../../../../reusecore/SectionTitle";
import Button from "../../../../reusecore/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../../../reusecore/Accordion";

import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import data from "./FaqData";

import FaqSectionWrapper from "./FaqWrapper";

const Faq = () => {
  const faqs_data = data.faqs;

  return (
    <FaqSectionWrapper id="faq">
      <Container>
        <SectionTitle
          className="section-title"
          $leftAlign={true}
          $UniWidth="100%"
        >
          <h1>
            <span>Frequently Asked Questions</span>
          </h1>
        </SectionTitle>

        <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
          {faqs_data.map((faq, index) => (
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
                <div className="inner">
                  {faq.answer.length >= 1 ? (
                    <ul>
                      {faq.answer.map((ans, id) => (
                        <li key={id}>
                          <p>{ans}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <br />
                  )}
                  {faq.link && (
                    <div className="faqbutton">
                      {faq.link.startsWith("/") ? (
                        <Button
                          $primary
                          className="faqbutton"
                          $url={faq.link}
                          title={faq.linktext}
                          $external={false}
                        />
                      ) : (
                        <Button
                          $primary
                          className="faqbutton"
                          $url={faq.link}
                          title={faq.linktext}
                          $external={true}
                        />
                      )}
                    </div>
                  )}
                </div>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="askus_section">
          <h2>Didn't find an answer to your question?</h2>
          <Button
            $secondary
            title="Just Ask"
            $url="https://layer5.io/company/contact"
            $external={true}
          />
        </div>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
