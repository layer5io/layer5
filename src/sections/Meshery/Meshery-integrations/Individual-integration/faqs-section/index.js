import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../../reusecore/Accordion";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import FaqSectionWrapper from "../../../../General/Faq/faqSection.style";
import React from "react";

const index = ({ faqs }) => {
  return (
    <FaqSectionWrapper>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Accordion
          allowMultipleExpanded="true"
          allowZeroExpanded="true"
          style={{
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              padding: "2rem 0",
              fontWeight: "700",
            }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTitle>
                <IconWrapper>
                  <h5 style={{ padding: "0.5rem 0rem" }}>{faq.question}</h5>
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
                  <p>{faq.ans}</p>
                </ul>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </FaqSectionWrapper>
  );
};

export default index;
