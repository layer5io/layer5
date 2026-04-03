import styled from "styled-components";

const HandbookFaqWrapper = styled.div`
  margin: 2.5rem auto;
  position: relative;
  overflow: hidden;

  .heading-top {
    margin: 2rem 0 0.5rem;
    font-style: italic;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
  }

  .accordion__item + .accordion__item {
    border-color: transparent;
  }

  .reusecore__accordion {
    margin-bottom: 5rem;
  }

  .accordion__item {
    .accordion__header {
      padding: 0;
      background: ${(props) => props.theme.secondaryColor};

      h5 {
        font-weight: 700;
        font-size: 18px;
        position: relative;
        color: ${(props) => props.theme.white};
        margin: 0;
      }

      > div {
        &:focus {
          outline: none;
        }
      }
    }

    .accordion__body {
      padding: 0 0.625rem 0 0.625rem;

      p {
        font-size: 16px;
        font-weight: 300;
        text-align: initial;
        margin: 0;
        line-height: 1.6;
      }

      a {
        color: ${(props) => props.theme.secondaryColor};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      ul,
      ol {
        margin: 0.5rem 0;
        padding-left: 1.5rem;

        li {
          margin-bottom: 0.5rem;
          line-height: 1.6;

          &:last-child {
            margin-bottom: 0;
          }

          ul,
          ol {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .reusecore__accordion {
      margin-bottom: 3.125rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__item {
      .accordion__header {
        h5 {
          font-size: 13px;
          line-height: 21px;
          padding-right: 1.6rem;
        }
      }
    }
  }
`;

export default HandbookFaqWrapper;
