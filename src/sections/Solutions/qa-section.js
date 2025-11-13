import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";

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
  gap: 1rem;
`;

const QAItem = styled.div`
  background: #3D4F57;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const QuestionHeader = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
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
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.isOpen ? "#00B39F" : "white"};
  transition: all 0.3s ease;
  font-weight: 300;
  
  &::before {
    content: '${props => props.isOpen ? "−" : "+"}';
  }
`;

const AnswerContent = styled.div`
  padding: ${props => props.isOpen ? "0 1.5rem 1rem 1.5rem" : "0 1.5rem"};
  max-height: ${props => props.isOpen ? "500px" : "0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${props => props.isOpen ? "0 1rem 0.75rem 1rem" : "0 1rem"};
  }

  @media (max-width: 480px) {
    padding: ${props => props.isOpen ? "0 0.75rem 0.5rem 0.75rem" : "0 0.75rem"};
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
      question: "Why use Meshery?",
      answer: [
        "As a self-service engineering platform, Meshery enables collaborative design and operation of cloud and cloud native infrastructure.",
        "Meshery is an open source, highly extensible, vendor neutral project, created for the world of AI and remote knowledge workers.",
      ],
      link: "/cloud-native-management/meshery/operating-cloud-native-infra",
      linktext: "Operating cloud native infrastructure"
    },
    {
      question: "I am already operating Kubernetes clusters. Can I use Meshery?",
      answer: [
        "Yes, as a management plane, Meshery provides value in a number of ways post-adoption Kubernetes. For example, Meshery analyzes your deployments in evaluation of cloud native best practices and patterns, highlighting where you might be deviating.",
        "Meshery performs deep discovery of your environment and currently running applications and infrastructure"
      ]
    },
    {
      question: "Is Kanvas cloud or a self-hosted solution?",
      answer: [
        "Yes, Kanvas is available both as a hosted solution and is also deployable on-premises as a self-hosted solution.",
        "Kanvas can be self-hosted to keep your designs and applications internal to your premises. You can also choose to have Kanvas hosted as SaaS solution offered by Layer5.",
        "Whether self-hosted or hosted by Layer5, we are here to support you."

      ]
    } ,
    {
      question: "How can I try out Kanvas?",

      answer: [
        "Kanvas is available in beta today. Visit https://kanvas.new to use it.",
        "Kanvas is cloud native collaboration tool for managing your infrastructure and applications. Kanvas has two modes: Visualizer for operating your actively running Kubernetes clusters and Designer for configuring your Kubernetes clusters and creating your creating your application deployments.",
      ],
      link: "https://kanvas.new",
      linktext: "Open kanvas.new",
    },
    {
      question: "Are Layer5's solutions open source?",
      answer: [
        "Yes, all of Layer5's projects are licensed under Apache v2.",
        "Layer5 also offers extensions to the Meshery project in which Enterprise-grade functionality is commercially offered and supported."
      ]
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
                {Array.isArray(item.answer) ? (
                  <>
                    <ul style={{
                      color: "white"
                    }}>
                      {item.answer.map((point, pIndex) => (
                        <li key={pIndex} style={{ marginBottom: "0.5rem" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.link && item.linktext && (
                      <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Button
                          $primary
                          $url={item.link}
                          title={item.linktext}
                          $external={!item.link.startsWith("/")}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <AnswerText isOpen={openIndex === index}>
                    {item.answer}
                  </AnswerText>
                )}
              </AnswerContent>
            </QAItem>
          ))}
        </QAList>
      </Inner>
    </QAWrapper>
  );
};

export default QASection;
