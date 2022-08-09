import React from "react";
import { Accordion,AccordionItem,AccordionTitle,AccordionBody,IconWrapper,OpenIcon,CloseIcon } from "../../../reusecore/Accordion";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import FaqSectionWrapper from "../../General/Faq/faqSection.style";

const faq = ({ questions, answers }) => {

  return (
    <FaqSectionWrapper>
      <div style={{ maxWidth: "50rem", margin: "0 auto" }}>
        <Accordion
          allowMultipleExpanded="true"
          allowZeroExpanded="true"
          style={{
            margin: "0 auto",
            maxWidth: "50rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              padding: "2rem 0",
            }}
          >
        Frequently Asked Questions
          </h2>
          {questions.map((que, index) => (
            <AccordionItem key={index}>
              <AccordionTitle>
                <IconWrapper>
                  <h5 style={{ padding: "0.5rem 0rem" }}>{que}</h5>
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
                  <p>{answers[index]}</p>
                </ul>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </FaqSectionWrapper>  );
};

export default faq;


