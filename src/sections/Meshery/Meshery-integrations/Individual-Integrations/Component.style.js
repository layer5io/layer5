import styled from "styled-components";

export const ComponentsWrapper = styled.div`
  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

  .componentimg {
    flex-basis: 30%;
  }
  .componentimg img {
    width: 100%;
  }

  .componentsSection {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

  }
  .maincontainer {
    height: 150px;
    width: 300px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem;
  }
  .items {
    background-color: #D2D8DA; //#E7EFF3;
    padding: 0.625rem 1.5625rem;
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all .1s ease-in-out;
    
`;


