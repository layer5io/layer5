import styled from "styled-components";

const FeatureWrapper = styled.section`
  .root {
    display: flex;
    flex-direction: column;

    & > .text {
      font-family: "Qanelas Soft", "Qanelas Soft", sans-serif;
      opacity: 0;
      margin-top: 2rem;
      margin-bottom: 5rem;

      line-height: 2rem;

      @media (max-width: 670px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 992px) {
        margin-top: 10rem;
        margin-bottom: 10rem;
      }

      @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;
      }

      & > h2 {
        margin-bottom: 2rem;
        font-size: 1.75rem;
        font-weight: 500;
        @media (max-width: 991px) {
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }
      }

      & > hr {
        margin: 1.25rem auto;
        width: 100%;
      }

      & > p {
        margin-top: 1.5rem;
        z-index: 0;
        font-weight: 500;
        color: ${(props) => props.theme.greyDDDDDDToGrey333333};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        @media (max-width: 991px) {
          margin-top: 1rem;
          line-height: 1.6;
        }
      }
    }
  }

  #inView {
    opacity: 1;
    transition: opacity 0.6s ease;
  }

  #notInView {
    opacity: 0;
    transition: opacity 0.6s ease;
    @media (max-width: 991px) {
      opacity: 1;
    }
  }
  .imageContent {
    @media (min-width: 992px) {
      display: none;
    }

    max-width: 90%;
    margin: 2rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    svg {
      color: ${(props) => props.theme.text};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      max-width: 100%;
      height: auto;
    }
  }
`;

export default FeatureWrapper;
