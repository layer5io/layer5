import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";


const QuotesWrapper = styled.div`
  margin: 5% 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  .quote-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px solid transparent;
    border-image: ${props => props.theme.DarkTheme
  ? "linear-gradient(to right bottom, #00b39f, #121212 80%)"
  : "linear-gradient(to right bottom, #00b39f, #fff 80%)"};
    border-image-slice: 1;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1.2rem;
      gap: 1.2rem;
    }
  }

  h4 {
    flex: 1 1 60%;
    color: ${props => props.theme.primaryColor};
    font-weight: 100;
    font-style: italic;
    word-break: break-word;
    hyphens: auto;
    margin: 0;
    min-width: 0;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1rem;
    }
  }

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 56px;
      height: 56px;
    }
  }

  .quote-source {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 120px;
    max-width: 35%;
    padding: 0 0.5rem;

    @media (max-width: 768px) {
      align-items: center;
      max-width: 100%;
    }
  }

  .quote-source h5,
  .quote-source p {
    margin: 0.3rem 0 0 0;
    word-break: break-word;
    hyphens: auto;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 0.9rem;
    }
  }

  hr {
    height: 48px;
    width: 1px;
    border: none;
    background: ${props => props.theme.primaryColor};
    margin: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const InlineQuotes = ({ person, title, quote, image }) => {
  const [quoteRef, inView] = useInView({ threshold: 1.0 });
  const [quoteInView, setquoteInView] = useState(false);

  useEffect(() => {
    setquoteInView(inView);
  }, [inView]);

  return (
    <QuotesWrapper $onlyQuoteIsPresent={!(image || person || title)}>
      <div className={quoteInView ? "quote-box border" : "quote-box"} ref={quoteRef}>
        <h4>❝ {quote} ❞</h4>
        {(image || person || title) && <hr />}
        {image && (
          <img
            src={image}
            alt={person || "Quote author"}
          />
        )}
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
