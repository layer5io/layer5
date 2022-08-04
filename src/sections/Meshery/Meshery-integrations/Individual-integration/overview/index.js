import React from "react";
import styled from "styled-components";
import arrow from "./forward-arrow.svg";
import tick from "./tick.svg";
const Overview = styled.section`
  display: flex;
  padding: 0 2rem 5rem 2rem;
  gap: 5rem;
  justify-content: center;
  h3 {
    font-weight: 700;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  } ;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 700;
    padding-bottom: 1rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
    padding: 0.625rem 0;
  }
  div p {
    margin: auto 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    line-height: 40px;
    font-family: "Qanelas Soft", "Open Sans", sans-serif;
    text-align: justify;
  }

  span {
    display: flex;
    gap: 2rem;
    flex-wrap: "wrap";

    .btn {
      font-weight: bold;
      transition: all 0.5s ease;
      background: #ebc017;
      opacity: 0.8;
      padding: 5px 2rem;
      color: black;
      border-radius: 0.625rem;
    }

    .btn:hover {
      opacity: 1;
    }

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      a {
        font-weight: 700;
        color: black;
        transition: all 0.5s ease;
      }
      a:hover {
        padding-right: 5px;
        transform: scale(1.01);
      }
    }
  }

  @media (min-width: 700px) {
    width: 35rem;
  } ;
`;

const index = (props) => {
  console.log(props.name);
  return (
    <Overview>
      <Feature>
        <h3>Features</h3>
        {props.featureList.map((feature, id) => {
          return (
            <div key={id}>
              <img src={tick} alt="checkbox" />
              <p>{feature}</p>
            </div>
          );
        })}
      </Feature>
      <Content>
        <h3>Overview</h3>
        <p>
          Connect {props.name} with any of your favorite apps in just a few
          clicks. Design, build, and automate anything for your work by
          integrating apps like {props.name} to create visual automatedcl
          workflows. Choose from hundreds of ready-made design patterns or use
          our no-code designer, MeshMap to connect to apps not yet in our
          library.
        </p>
        <span>
          <a href="#" className="btn">
            Get Started
          </a>
          <span>
            <a href={props.docURL}>See Documentation</a>
            <img src={arrow} alt="arrow" height={12} />
          </span>
        </span>
      </Content>
    </Overview>
  );
};

export default index;
