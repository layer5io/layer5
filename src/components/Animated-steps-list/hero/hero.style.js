import styled from "styled-components";
import { CopyButton, LineNo, Pre } from "../../CodeBlock";

export const HeroWrapper = styled.div`
  h1 {
    line-height: 3.125rem;
    padding-bottom: 2rem;
    font-weight: 600;
  }

  padding: 4rem 0 4rem 0;

  @media (max-width: 800px) {
    padding: 1rem 0 2rem 0;
  }

   .content {
    max-width: 34rem;

    @media (max-width: 1119px) {
      max-width: 22rem;
    }

    @media (max-width: 850px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 35rem;
      text-align: center;
    }

    & > h1 {
      margin-top: 0;
    }

    .subtitle{
      font-weight: 600;
      color: ${props => props.theme.primaryColor};
      margin-bottom: 1rem;
    }

    & .links {
      flex-wrap: wrap;
      margin-top: calc(32px - 8px);
      margin-bottom: -8px;
      margin-left: -8px;

      & a {
        margin: 8px;
      }
    }

    .code {
      ${Pre} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 6rem;

        @media screen and (max-width: 850px) {
          height: 4.5rem;
        }
      }

      ${LineNo} {
        display: none;
      }

      /* A single command centered in a tall panel: center the button on
         that line, as the default placement does for a first line. */
      ${CopyButton} {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
    p.enddescr {
      margin-top: 1rem;
    }
`;
