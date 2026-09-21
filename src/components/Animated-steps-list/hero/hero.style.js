import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding: 4rem 0 3rem 0;

  @media (max-width: 800px) {
    padding: 2rem 0 2rem 0;
  }

  .content {
    width: 100%;
    max-width: 52rem;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 1119px) {
      max-width: 48rem;
    }

    @media (max-width: 850px) {
      max-width: 100%;
    }

    & > h1 {
      margin-top: 0;
      line-height: 3.125rem;
      padding-bottom: 1.5rem;
      font-weight: 600;
      text-align: center;
    }

    .subtitle {
      font-weight: 600;
      color: ${(props) => props.theme.primaryColor};
      margin-bottom: 1rem;
      text-align: center;
    }

    & > p {
      max-width: 44rem;
      margin: 0 auto 1.5rem auto;
      text-align: center;
    }

    & .links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: calc(32px - 8px);
      margin-bottom: -8px;
      margin-left: -8px;

      & a {
        margin: 8px;
      }
    }

    .code {
      width: 100%;
      max-width: 50rem;
      margin: 0 auto;

      pre {
        width: 100%;
        margin: auto;

        &:hover,
        &:focus {
          width: 100%;
        }

        button {
          top: 1rem;
          right: 1rem;
          margin-right: 0;
        }

        pre {
          display: flex;
          height: 5.5rem;
          align-items: center;
          padding: 1rem 4.5rem 1rem 1.25rem;
          font-size: 0.95rem;

          @media screen and (max-width: 850px) {
            height: 4.5rem;
            padding: 0.75rem 3.75rem 0.75rem 1rem;
            font-size: 0.85rem;
          }

          @media screen and (max-width: 480px) {
            height: 4rem;
            font-size: 0.8rem;
            padding: 0.5rem 3.5rem 0.5rem 0.75rem;
          }
        }
      }

      .token-line > span:first-of-type {
        display: none;
      }
    }

    p.enddescr {
      margin-top: 1.25rem;
      text-align: center;
    }
  }
`;
