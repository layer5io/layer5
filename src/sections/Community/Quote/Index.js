import React from "react";
import { Col } from "../../../reusecore/Layout";
import styled from "styled-components";

const QuoteWrapper = styled.div`
    .section{
        background-size: cover;
        background-position: center;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin: 3rem auto;
        padding-right: 15px;
        padding-left: 15px;
    }
    .col{
        margin: 0;
        width: 50%;
        @media (max-width: 62rem) {
            margin: auto;
            width: 100%;
        }
    }
    .section .col h1{
        margin: 0px;
    }
    .quote-container{
        align-items: center;
    }
    .section{
        @media (min-width: 576px) {
            max-width: 100%;
        }
        @media (min-width: 768px) {
            max-width: 720px;
        }
        @media (min-width: 992px) {
            max-width: 960px;
        }
        @media (min-width: 1200px) {
            max-width: 1170px;
        }
        @media (max-width: 62rem) {
            text-align: center;
            flex-direction: column;
        }
    }  
`;

const Quote = () => {
  return (
    <QuoteWrapper>

      <div className="section">
        <Col className="col">
          <h1>
                        What developers say about us
          </h1>
        </Col>
        <Col className="col quote-container">
          <h3 className="">"Wow, you're incredibly helpful, I wish every open-source community is as friendly as yours."</h3>
          <a target="_blank" href="https://discuss.layer5.io/t/can-someone-explain-me-what-this-meshery-or-none-provider-mean-here/3107/2" className="" rel="noreferrer">@priyanshu-kun</a>
        </Col>
      </div>
    </QuoteWrapper>
  );
};

export default Quote;
