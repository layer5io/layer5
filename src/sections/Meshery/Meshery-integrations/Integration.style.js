import styled from "styled-components";

const Integrations = styled.div`
  max-width: 75rem;
  margin: 5.1875rem auto;

  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 2.5625rem 0;
    gap: 0.625rem;
    justify-content: center;
  }

  .items {
    background-color: #f0f0f0;
    padding: 0.625rem 1.5625rem;
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .selected {
    background-color: #1e2117;
    color: #ffffff;
  }
  @media (max-width: 394px) and (min-width: 315px) {
    padding-bottom: 37.5rem;
  }
`;
export default Integrations;
