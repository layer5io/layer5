import { useState } from "react";
import React from "react";
import styled from "styled-components";

const QAWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #293B434D;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const QAList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const QAItem = styled.div`
  background: #3D4F57;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const QuestionHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const QuestionText = styled.h3`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${props => props.isOpen ? "#00B39F" : "white"};
  margin: 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ToggleIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.isOpen ? "#00B39F" : "white"};
  transition: all 0.3s ease;
  font-weight: 300;
  
  &::before {
    content: '${props => props.isOpen ? "−" : "+"}';
  }
`;

const AnswerContent = styled.div`
  padding: ${props => props.isOpen ? "0 2rem 2rem 2rem" : "0 2rem"};
  max-height: ${props => props.isOpen ? "500px" : "0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${props => props.isOpen ? "0 1.5rem 1.5rem 1.5rem" : "0 1.5rem"};
  }

  @media (max-width: 480px) {
    padding: ${props => props.isOpen ? "0 1rem 1rem 1rem" : "0 1rem"};
  }
`;

const AnswerText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin: 0;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const QASection = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    const qaData = [
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet consectetur. Aliquam odio enim aliquam tristique nisl volutpat maecenas ullamcorper. Id lobortis id amet orci enim eget fringilla. Faucibus praesent proin id sed vitae nam. Placerat placerat tincidunt turpis bibendum tristique est in sit urna. Nibh facilisi fringilla consequat lobortis vel habitant erat mattis. Consectetur semper dignissim proin phasellus adipiscing elementum id. Est at vulputate diam faucibus molestie erat a. Phasellus placerat aliquam pellentesque sed egestas convallis. Aliquam senectus urna vel phasellus purus nec."
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet consectetur. Aliquam odio enim aliquam tristique nisl volutpat maecenas ullamcorper. Id lobortis id amet orci enim eget fringilla. Faucibus praesent proin id sed vitae nam. Placerat placerat tincidunt turpis bibendum tristique est in sit urna. Nibh facilisi fringilla consequat lobortis vel habitant erat mattis. Consectetur semper dignissim proin phasellus adipiscing elementum id. Est at vulputate diam faucibus molestie erat a. Phasellus placerat aliquam pellentesque sed egestas convallis. Aliquam senectus urna vel phasellus purus nec."
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet consectetur. Aliquam odio enim aliquam tristique nisl volutpat maecenas ullamcorper. Id lobortis id amet orci enim eget fringilla. Faucibus praesent proin id sed vitae nam. Placerat placerat tincidunt turpis bibendum tristique est in sit urna. Nibh facilisi fringilla consequat lobortis vel habitant erat mattis. Consectetur semper dignissim proin phasellus adipiscing elementum id. Est at vulputate diam faucibus molestie erat a. Phasellus placerat aliquam pellentesque sed egestas convallis. Aliquam senectus urna vel phasellus purus nec."
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <QAWrapper>
            <Inner>
                <Title>Some answers to more of your questions</Title>
                <QAList>
                    {qaData.map((item, index) => (
                        <QAItem key={index}>
                            <QuestionHeader onClick={() => toggleQuestion(index)}>
                                <QuestionText isOpen={openIndex === index}>
                                    {item.question}
                                </QuestionText>
                                <ToggleIcon isOpen={openIndex === index} />
                            </QuestionHeader>
                            <AnswerContent isOpen={openIndex === index}>
                                <AnswerText isOpen={openIndex === index}>
                                    {item.answer}
                                </AnswerText>
                            </AnswerContent>
                        </QAItem>
                    ))}
                </QAList>
            </Inner>
        </QAWrapper>
    );
};

export default QASection;
