import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

const QuotesWrapper = styled.div`
  margin: 5% 0%;
  text-align: center;
  padding: 0 1rem;

  .quote-box {
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    border: 2px solid transparent;
    border-image: linear-gradient(
      to right bottom, 
      #00b39f, 
      ${props => props.theme.DarkTheme ? "#121212" : "#fff"} 80%
    );
    border-image-slice: 1 0 1 1;
    transition: border-image 0.6s ease-in-out;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1.5rem 1rem;
      gap: 1rem;
    }

    @media (max-width: 500px) {
      padding: 1rem 0.75rem;
    }
  }

  .border {
    border-image: linear-gradient(
      to left top, 
      #00b39f, 
      ${props => props.theme.DarkTheme ? "#121212" : "#fff"} 80%
    );
    border-image-slice: 1 1 1 0;
  }

  h4 {
    flex: ${props => props.$onlyQuoteIsPresent ? "0 0 100%" : "0 0 65%"};
    margin: 0;
    color: ${props => props.theme.primaryColor};
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 100;
    font-style: italic;
    line-height: 1.6;
    text-align: ${props => props.$onlyQuoteIsPresent ? "center" : "right"};

    @media (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
      line-height: 1.5;
    }
  }

  img {
    flex-shrink: 0;
    width: clamp(72px, 10vw, 96px);
    height: clamp(72px, 10vw, 96px);
    border-radius: 50%;
    object-fit: cover;
  }

  .quote-source {
    display: flex;
    flex: 2 1 0;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    text-align: left;

    @media (max-width: 768px) {
      padding: 0;
      text-align: center;
    }
   
    h5 {
      margin: 0 0 0.5rem 0;
      padding: 0.1rem;
      font-size: clamp(0.875rem, 2vw, 1rem);
      font-weight: bold;
      text-transform: uppercase;
    }

    p {
      margin: 0;
      font-size: clamp(0.8rem, 1.8vw, 0.9rem);
      line-height: 1.4;

      @media (max-width: 500px) {
        line-height: 1.3;
      }
    }
  }

  hr {
    align-self: stretch;
    height: 5rem;
    margin: 0;
    border: none;
    border-left: 1px solid ${props => props.theme.DarkTheme ? "#444" : "#ddd"};

    @media (max-width: 768px) {
      width: clamp(150px, 60%, 200px);
      height: 0;
      margin: 0.5rem auto;
      border-left: none;
      border-top: 1px solid ${props => props.theme.DarkTheme ? "#444" : "#ddd"};
    }
  }

  .author-section {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`;

const InlineQuotes = ({ person, title, quote, image }) => {
  const [quoteRef, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const [quoteInView, setquoteInView] = useState(false);

  useEffect(() => {
    setquoteInView(inView);
  }, [inView]);

  const showAuthorSection = image || person || title;

  return (
    <QuotesWrapper $onlyQuoteIsPresent={!showAuthorSection}>
      <div className={quoteInView ? "quote-box border" : "quote-box"} ref={quoteRef}>
        <h4>❝ {quote} ❞</h4>
        {showAuthorSection && (
          <>
            <hr />
            <div className="author-section">
              {image && (
                <img
                  src={image}
                  alt={person || "Quote author"}
                  loading="lazy"
                />
              )}
              <div className="quote-source">
                {person && <h5>{person}</h5>}
                {title && <p>{title}</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </QuotesWrapper>
  );
};

export default InlineQuotes;
