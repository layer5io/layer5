import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";



const QuotesWrapper = styled.div`

margin: 5% 0%;
text-align: center;
.quote-box {
    display: flex;
    flex-direction: row;
    flex: 1 1 0;
    text-align: center;
    align-items: center;
    padding: 2rem;
    border: 2px solid transparent;
    border-image: ${props => props.theme.DarkTheme ? "linear-gradient(to right bottom, #00b39f, #121212 80%)" : "linear-gradient(to right bottom, #00b39f, #fff 80%)"} ;
    border-image-slice: 1 0 1 1;
    transition: border 0.2s ease-in-out;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

    h4 {
        text-align: right;
        flex: 0 0 65%;
        font-weight: 100;
        font-style: italic;
        @media screen and (max-width: 600px) {
            font-size: 1rem;
        }
        @media screen and (max-width: 500px) {
            text-align: center;
            flex: 0 0 100%;
        }
    }
}

.border {
    border-image: ${props => props.theme.DarkTheme ? "linear-gradient(to left top, #00b39f, #121212 80%)" : "linear-gradient(to left top, #00b39f, #fff 80%)"} ;
    border-image-slice: 1 1 1 0;
    transition: 0.6s ease-in-out;
}
img{
    border-radius: 50%;
    width: 6vw;
    height: 6vw;
}

.quote-source {
    display: flex;
    flex: 2 1 0;
    padding: 0 1rem;
    flex-direction: column;
    @media screen and (max-width: 500px) {
        text-align: center;
    }
   
    h5 {
        font-weight: bold;

        padding:0.1rem;
        text-transform: uppercase;
        @media screen and (max-width: 600px) {
            margin-top: 1rem;
            font-size: 1rem;
        }
    }
    p {
        @media screen and (max-width: 600px) {
            font-size: 0.75rem;
            line-height: 1.25rem;
        }
    }
}

hr {
    height: 5rem;
    margin: 0% 3%;
    @media screen and (max-width: 500px) {
        margin: 5% 0%;
        height: 0;
        width: 40vw;
    }
}
`;

const InlineQuotes = ({ person, title, quote,image }) => {

  const [quoteRef, inView] = useInView({ threshold: 1.0 });
  const [quoteInView, setquoteInView] = useState(false);
  useEffect(() => {
    if (inView && !quoteInView)
      setquoteInView(true);
    else if (quoteInView && !inView)
      setquoteInView(false);
  }, [inView, quoteInView]);

  return (
    <QuotesWrapper>
      <div className={quoteInView ? "quote-box border" : "quote-box"} ref={quoteRef}>
        <h4>❝ {quote} ❞</h4>
        <hr />
        <img src={image}></img>
        <div className="quote-source">
          <h5>{person}</h5>
          <p>{title}</p>
        </div>
      </div>
    </QuotesWrapper>
  );
};

export default InlineQuotes;
