import React from "react";

import { Container} from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
// import { FiSearch } from "react-icons/fi";
// import Button from "../../reusecore/Button";
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

const Faq = () => {
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
                    {data.faqs.map((faq, index) => (
                        <AccordionItem key={index}>
                            <AccordionTitle>
                                <IconWrapper>
                                    <h5>{faq.title}</h5>
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
                                    <li><p>{faq.content}</p></li>
                                    {faq.content_2 && <li><p>{faq.content_2}</p></li>}
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </FaqSectionWrapper>
    );
};

export default Faq;
