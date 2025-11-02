import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const QuotesWrapper = styled.div`
  margin: 5% 0%;
  text-align: center;
  padding: 0 1rem;

  .quote-box {
    display: flex;
    flex-direction: row;
    flex: 1 1 0;
    text-align: center;
    align-items: center;
    padding: 2rem;
    border: 2px solid transparent;
    border-image: ${props => props.theme.DarkTheme
  ? "linear-gradient(to right bottom, #00b39f, #121212 80%)"
  : "linear-gradient(to right bottom, #00b39f, #fff 80%)"};
    border-image-slice: 1 0 1 1;
    transition: border 0.2s ease-in-out;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 1.5rem 1rem;
      gap: 1rem;
    }

    @media screen and (max-width: 500px) {
      padding: 1rem 0.75rem;
    }

    h4 {
      text-align: ${props => props.$onlyQuoteIsPresent ? "center" : "right"};
      flex: ${props => props.$onlyQuoteIsPresent ? "0 0 100%" : "0 0 65%"};
      color: ${props => props.theme.primaryColor};
      font-weight: 100;
      font-style: italic;
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0;

      @media screen and (max-width: 768px) {
        text-align: center;
        flex: 0 0 100%;
        font-size: 1.1rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }

  .border {
    border-image: ${props => props.theme.DarkTheme
    ? "linear-gradient(to left top, #00b39f, #121212 80%)"
    : "linear-gradient(to left top, #00b39f, #fff 80%)"};
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

    @media screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
    }

    @media screen and (max-width: 500px) {
      width: 72px;
      height: 72px;
      min-width: 72px;
      min-height: 72px;
    }
  }

  .quote-source {
    display: flex;
    flex: 2 1 0;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    @media screen and (max-width: 768px) {
      text-align: center;
      padding: 0;
    }
   
    h5 {
      font-weight: bold;
      padding: 0.1rem;
      margin: 0 0 0.5rem 0;
      text-transform: uppercase;
      font-size: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 0.95rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 0.875rem;
      }
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;

      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        line-height: 1.3;
      }
    }
  }

  hr {
    height: 5rem;
    margin: 0;
    border: none;
    border-left: 1px solid ${props => props.theme.DarkTheme ? "#444" : "#ddd"};
    align-self: stretch;

    @media screen and (max-width: 768px) {
      height: 0;
      width: 60%;
      max-width: 200px;
      margin: 0.5rem auto;
      border-left: none;
      border-top: 1px solid ${props => props.theme.DarkTheme ? "#444" : "#ddd"};
    }

    @media screen and (max-width: 500px) {
      width: 50%;
      max-width: 150px;
    }
  }

  .author-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`;

const InlineQuotes = ({ person, title, quote, image }) => {
  const [quoteRef, inView] = useInView({ threshold: 0.5 });
  const [quoteInView, setquoteInView] = useState(false);

  useEffect(() => {
    if (inView && !quoteInView) {
      setquoteInView(true);
    } else if (quoteInView && !inView) {
      setquoteInView(false);
    }
  }, [inView, quoteInView]);

  return (
    <QuotesWrapper $onlyQuoteIsPresent={!(image || person || title)}>
      <div className={quoteInView ? "quote-box border" : "quote-box"} ref={quoteRef}>
        <h4>❝ {quote} ❞</h4>
        {(image || person || title) && <hr />}
        {(image || person || title) && (
          <div className="author-section">
            {image && (
              <img
                src={image}
                alt={`${person || "Quote author"}`}
                width="96"
                height="96"
              />
            )}
            <div className="quote-source">
              {person && <h5>{person}</h5>}
              {title && <p>{title}</p>}
            </div>
          </div>
        )}
      </div>
    </QuotesWrapper>
  );
};

export default InlineQuotes;
