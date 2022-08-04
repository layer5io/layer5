import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 5rem 1rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }
  img {
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Qanelas Soft", "Open Sans", sans-serif;
    text-align: center;
  }
`;
const index = (props) => {
  return (
    <HeroSection>
      <img src={props.img} alt={props.name} height={90} />
      <h2>
        {props.name} with{" "}
        <span
          style={{
            color: "#00B39F",
          }}
        >
          Meshery
        </span>
      </h2>
      <p>{props.text}</p>
    </HeroSection>
  );
};

export default index;
