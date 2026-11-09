import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../reusecore/Accordion";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import HandbookFaqWrapper from "./faq-wrapper.style";

const HandbookFaqAccordion = ({ faqData }) => {
  return (
    <HandbookFaqWrapper>
      <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
        {faqData.map((faq) => (
          <AccordionItem key={faq.question}>
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
              <div className="inner">{faq.answer}</div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </HandbookFaqWrapper>
  );
};

export default HandbookFaqAccordion;
