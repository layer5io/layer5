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
    border-radius: 50%;
    background-color: ${(props) => props.theme.blackToWhite};
    padding: 8px;
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
    padding: 0.85rem 1.25rem;
    border-radius: 0.85rem;
    width: 100%;
    flex: 1 1 360px;
    max-width: 400px;
    min-height: 72px;
  }

  .items {
    margin: 0;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    line-height: 1.25;
    text-transform: uppercase;
    word-break: break-word;
  }
`;
