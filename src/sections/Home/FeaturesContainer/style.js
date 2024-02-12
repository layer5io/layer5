import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 1rem;
  margin: 5rem auto 0;
  animation: ${slideInAnimation} 2s ease forwards;

  .title {
    text-transform: capitalize;
    text-align: center;
    font-weight: 400;
    color: ${(props) => props.theme.greyDEE3DEToGreen3C494F};
    span {
      color: ${(props) => props.theme.text};
      font-weight: 700;
    }
    animation: ${slideInAnimation} 1s ease forwards;
  }

  .subtitle {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;
    animation: ${slideInAnimation} 1.5s ease forwards;
  }
`;