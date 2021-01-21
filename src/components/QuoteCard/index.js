import React from "react";
import styled from "styled-components";

const QuotesCardWrapper = styled.div`
    min-height: 250px;
    background-color: ${props => props.theme.secondaryLightColor};
    margin: auto 1rem;
    border-radius: 15px;
    .content{
      padding: 2rem 4rem 0 4rem;
      
      h5{
        font-weight: 400;
        margin: 1rem auto;
      }
      p{
        font-size: 1rem;
      }
    }
`;

const QuoteCard = ({name , position, quote}) => {
  return(
    <QuotesCardWrapper>
      <div className="content">
        <h3>{name}</h3>
        <h5>{position}</h5>
        <p>{quote}</p>
      </div>
    </QuotesCardWrapper>
  );
};

export default QuoteCard;
