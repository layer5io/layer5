import styled from "styled-components";
import React from "react";
const WhatsNextWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${props => props.theme.blackToWhite};
  padding: 6rem 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem 0 2rem;
  display: flex;
  gap: 5rem;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: ${props => props.theme.whiteToBlack};
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
  margin: 0;
`;

const RightCard = styled.div`
  background: #00B39F;
  border-radius: 20px;
  padding: 52px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  min-width: 300px;
  max-width: 452px;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    min-width: auto;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const CardTitle = styled.h3`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const CallToAction = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a1a;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    gap: 1rem;
  }

  &::after {
    content: '→';
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }
`;

const WhatsNext = () => {
  return (
    <WhatsNextWrapper>
      <Inner>
        <LeftContent>
          <Title>What's next? Get stuck in!</Title>
          <Description>
                        Take the next step towards unlocking seamless cloud solutions to enhance
                        your infrastructure. Discover the range of innovative products that are
                        designed to resolve your challenges and bring your ideas to life!
          </Description>
        </LeftContent>
        <RightCard>
          <CardTitle>Layer5's Cloud-Native Management (Setup?)</CardTitle>
          <CardDescription>
                        See specific products that execute our solution propositions.
          </CardDescription>
          <CallToAction href="https://cloud.layer5.io/login" target="_blank" rel="noopener noreferrer">
                        Set up your free account
          </CallToAction>
        </RightCard>
      </Inner>
    </WhatsNextWrapper>
  );
};

export default WhatsNext;
