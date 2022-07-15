import styled from "styled-components";

const Integrations = styled.div`
  max-width: 1200px;
  margin: 83px auto;

  .heading {
    text-align: center;

    h1 {
      font-size: 3.14rem;
      line-height: 60px;
    }

    h4 {
      font-size: 2.125rem;
    }
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 41px 0;
    gap: 10px;
    justify-content: center;
  }

  .items {
    background-color: #f0f0f0;
    padding: 10px 25px;
    border-radius: 10px;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .selected {
    background-color: #1e2117;
    color: #ffffff;
  }
`;
export default Integrations;