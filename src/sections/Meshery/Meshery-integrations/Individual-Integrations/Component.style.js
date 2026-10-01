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

  .componentsSection {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 3rem 2rem 5rem 2rem;
    justify-content: center;
  }

  .componentimg {
    width: 48px;
    height: 48px;
    min-width: 48px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
  }

  .componentimg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .maincontainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${(props) => props.theme.grey212121ToGreyEEEEEE};
    padding: 0.75rem 1rem;
    border-radius: 0.85rem;
    width: 100%;
    flex: 30%;
    max-width: 350px;
    min-height: 72px;
  }

  .items {
    margin: 0;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
`;
