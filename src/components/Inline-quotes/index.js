import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const QuotesWrapper = styled.div`
  margin: 5% 0%;
  text-align: center;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  .quote-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px solid transparent;
    border-image: ${props => props.theme.DarkTheme ? "linear-gradient(to right bottom, #00b39f, #121212 80%)" : "linear-gradient(to right bottom, #00b39f, #fff 80%)"};
    border-image-slice: 1 0 1 1;
    transition: border 0.2s ease-in-out;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    gap: 1rem;
    
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 1.5rem;
      gap: 1.5rem;
    }

    @media screen and (max-width: 500px) {
      padding: 1rem;
      gap: 1rem;
    }

    h4 {
      text-align: ${props => props.$onlyQuoteIsPresent ? "center" : "right"};
      flex: ${props => props.$onlyQuoteIsPresent ? "1 1 100%" : "1 1 60%"};
      color: ${props => props.theme.primaryColor};
      font-weight: 100;
      font-style: italic;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      min-width: 0;
      max-width: 100%;
      
      @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        text-align: center;
        flex: 1 1 100%;
      }
      
      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }

  .border {
    border-image: ${props => props.theme.DarkTheme ? "linear-gradient(to left top, #00b39f, #121212 80%)" : "linear-gradient(to left top, #00b39f, #fff 80%)"};
    border-image-slice: 1 1 1 0;
    transition: 0.6s ease-in-out;
  }

  img {
    border-radius: 50%;
    width: 96px;
    height: 96px;
    min-width: 96px;
    min-height: 96px;
    object-fit: cover;
    flex-shrink: 0;
    
    @media screen and (max-width: 1300px) {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
    }
    
    @media screen and (max-width: 768px) {
      width: 70px;
      height: 70px;
      min-width: 70px;
      min-height: 70px;
    }
    
    @media screen and (max-width: 500px) {
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;
    }
  }

  .quote-source {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 0 0 auto;
    min-width: 200px;
    max-width: 35%;
    padding: 0 1rem;
    box-sizing: border-box;
    
    @media screen and (max-width: 768px) {
      align-items: center;
      text-align: center;
      min-width: 0;
      max-width: 100%;
      width: 100%;
      padding: 0;
    }
   
    h5 {
      font-weight: bold;
      padding: 0.1rem;
      margin: 0;
      text-transform: uppercase;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      white-space: normal;
      width: 100%;
      
      @media screen and (max-width: 768px) {
        margin-top: 0.5rem;
        font-size: 1rem;
      }
      
      @media screen and (max-width: 500px) {
        font-size: 0.9rem;
      }
    }
    
    p {
      margin: 0.5rem 0 0 0;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      white-space: normal;
      width: 100%;
      
      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.3rem;
      }
      
      @media screen and (max-width: 500px) {
        font-size: 0.75rem;
        line-height: 1.2rem;
      }
    }
  }

  hr {
    height: 5rem;
    width: 1px;
    margin: 0;
    border: none;
    border-left: 1px solid ${props => props.theme.primaryColor || "#00b39f"};
    flex-shrink: 0;
    
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const InlineQuotes = ({ person, title, quote, image }) => {
  const [quoteRef, inView] = useInView({ threshold: 1.0 });
  const [quoteInView, setquoteInView] = useState(false);
  
  useEffect(() => {
    if (inView && !quoteInView)
      setquoteInView(true);
    else if (quoteInView && !inView)
      setquoteInView(false);
  }, [inView, quoteInView]);

  return (
    <QuotesWrapper $onlyQuoteIsPresent={!(image || person || title)}>
      <div className={quoteInView ? "quote-box border" : "quote-box"} ref={quoteRef}>
        <h4>❝ {quote} ❞</h4>
        {(image || person || title) && <hr />}
        {
          image &&
          <img
            src={image}
            alt={`${person || "Quote author"}`}
            width="96"
            height="96"
          />
        }
        {(person || title) && (
          <div className="quote-source">
            {person && <h5>{person}</h5>}
            {title && <p>{title}</p>}
          </div>
        )}
      </div>
    </QuotesWrapper>
  );
};

export default InlineQuotes;
