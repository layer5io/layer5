import React from "react";

import { Container} from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/NewButton";
import VintageBox from "../../reusecore/VintageBox";
import {
    Accordion,
    AccordionItem,
    AccordionTitle,
    AccordionBody,
    IconWrapper,
    OpenIcon,
    CloseIcon
} from "../../reusecore/Accordion";

import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import particle1 from "../../assets/images/app/particle/07.png";
import particle2 from "../../assets/images/app/particle/08.png";

import data from "../../assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = () => {
    return (
        <FaqSectionWrapper id="faq">
            <img className="section__particle one" src={particle1} alt="img" />
            <img className="section__particle two" src={particle2} alt="img" />
            <Container fullWidthSM>
                <SectionTitle
                    className="section-title"
                    leftAlign={true}
                    UniWidth="100%"
                >
                    <h2>
                        <span>FAQs</span>
                    </h2>
                </SectionTitle>
                <Accordion allowZeroExpanded>
                    {data.faqs.map((faq, index) => (
                        <AccordionItem key={index}>
                            <AccordionTitle>
                                <IconWrapper>
                                    <OpenIcon>
                                        <IoIosArrowDown />
                                    </OpenIcon>
                                    <CloseIcon>
                                        <FaPlus />
                                    </CloseIcon>
                                    <h5>{faq.title}</h5>
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
                <VintageBox
                    right={true}
                    vintageTwo={true}
                    position="relative"
                >
                    <Button title="Learn More" />
                </VintageBox>
            </Container>
        </FaqSectionWrapper>
    );
};

export default Faq;
