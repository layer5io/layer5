import React from "react";
import styled from "styled-components";
import reviewerImage from "./images/reviewer.svg";

const ReviewWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 6rem 0;
  background: linear-gradient(360deg, rgba(0, 171, 179, 0.2) 1.02%, rgba(61, 79, 87, 0) 22.54%);
  background-color: ${props => props.theme.blackToWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const ReviewCard = styled.div`
  background: #293B43;
  border-radius: 20px;
  padding: 4rem 3rem 3rem 3rem;
  max-width: 1000px;
  width: 90%;
  text-align: center;
  position: relative;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid ${props => props.theme.primaryColor};
  background: #87ceeb;
`;

const Quote = styled.p`
  font-family: "Qanelas Soft", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.whiteToBlack};
  margin: 2rem 0;
  padding-top: 1rem;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 5rem;
    color: ${props => props.theme.whiteToBlack};
    font-family: serif;
    position: absolute;
    left: -1rem;
    top: -1.5rem;
    line-height: 1;
  }
  
  &::after {
    content: '"';
    font-size: 5rem;
    color: ${props => props.theme.whiteToBlack};
    font-family: serif;
    position: absolute;
    right: -1rem;
    bottom: -2rem;
    line-height: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ReviewerName = styled.h4`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.theme.whiteToBlack};
  margin: 2rem 0 0.5rem 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ReviewerTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.text};
  margin: 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Review = () => {
  return (
    <ReviewWrapper>
      <ReviewCard>
        <Avatar src={reviewerImage} alt="Reviewer" />
        <Quote>
          Lorem ipsum dolor sit amet consectetur. Nec fames amet magna cursus sed suscipit. Maecenas in ullamcorper ut magna diam ut. Maecenas in ullamcorper ut magna diam ut.
        </Quote>
        <ReviewerName>REVIEWER'S NAME</ReviewerName>
        <ReviewerTitle>HEAD OF ENGENEERING AT LAYER5</ReviewerTitle>
      </ReviewCard>
    </ReviewWrapper>
  );
};

export default Review;
