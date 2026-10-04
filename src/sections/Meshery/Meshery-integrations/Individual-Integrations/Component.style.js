import styled from "styled-components";

export const ComponentsWrapper = styled.div`
  .heading {
    text-align: center;
    margin-top: 7rem;

    h1 {
    }

    h2 {
      font-weight: normal;
    }
  }
  .componentimg {
    width: 80px;
    height: 80px;
  }
  .componentimg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .componentsSection {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    padding: 3rem 2rem 5rem 2rem;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .maincontainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${(props) => props.theme.grey212121ToGreyEEEEEE};
    padding: 0.5rem 1rem;
    border-radius: 0.85rem;
    width: 100%;
  }

  .items {
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    transition: all 0.1s ease-in-out;
    line-height: 1.1875rem;
    width: 100%;
  }
`;
