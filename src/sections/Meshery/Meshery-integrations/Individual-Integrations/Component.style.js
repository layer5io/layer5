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
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 3rem 2rem 5rem 2rem;
    justify-content: center;
  }

  .componentlink {
    text-decoration: none;
    flex: 30%;
    max-width: 350px;
    width: 100%;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-radius: 0.85rem;

    &:hover {
      transform: translateY(-3px);
      
      .maincontainer {
        box-shadow: 0 4px 15px rgba(0, 211, 169, 0.2);
        border: 1px solid ${(props) => props.theme.primaryColor};
      }
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
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .items {
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    transition: all .1s ease-in-out;
    line-height: 1.1875rem;
    width: 100%;
`;
