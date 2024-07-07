import styled from "styled-components";

const LabSinglePageWrapper = styled.div`
  margin-bottom: 4rem;
  display: block;
  padding: 0 1rem; // Add padding for small screens

  .backBtn {
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-weight: 600;

    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.primaryColor};
      &:hover {
        color: ${(props) => props.theme.linkColor};
      }

      h4 {
        line-height: 1.75rem;
        margin-left: 0.5rem;
      }
      svg {
        font-size: 1.75rem;
      }
    }
  }

  .join-community {
    margin: 3rem 0;
  }

  .join-community_text-and_button {
    text-align: center;
    padding: 0 1rem;

    h1 {
      margin-top: 1rem;
      font-size: clamp(1.5rem, 4vw, 2.5rem);
    }
    p {
      margin: 1rem auto;
      max-width: 40rem;
      font-size: clamp(1rem, 2vw, 1.2rem);
    }
    button {
      margin-top: 1.5rem;
      font-size: clamp(0.8rem, 2vw, 1rem);
      padding: 0.8em 1.5em;
    }
  }

  .cardContent {
    margin: 0 auto;
    max-width: 60rem;
    color: ${(props) => props.theme.textColor};
    padding: 0 1rem;

    a {
      display: inline-flex;
      align-items: center;
      color: ${(props) => props.theme.linkColor};
      &:hover {
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }

  #katacoda-scenario {
    min-height: 25rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    .backBtn {
      margin-top: 2rem;
      margin-left: 0;
    }

    .cardContent {
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    .backBtn h4 {
      display: none;
    }
  }
`;

export default LabSinglePageWrapper;
