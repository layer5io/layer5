import styled from "styled-components";
import { CopyButton, LineNo, Pre } from "../../CodeBlock";

export const HeroWrapper = styled.div`
  padding: 4rem 0 3rem 0;

  @media (max-width: 800px) {
    padding: 2rem 0;
  }

  .content {
    width: 100%;
    max-width: 52rem;
    margin: 0 auto;
    text-align: center;

    & > h1 {
      margin-top: 0;
      line-height: 1.2;
      padding-bottom: 1.5rem;
      font-weight: 600;
      text-wrap: balance;
    }

    .subtitle {
      font-weight: 600;
      color: ${(props) => props.theme.primaryColor};
      margin-bottom: 1rem;

      &:empty {
        display: none;
      }
    }

    & > p {
      max-width: 44rem;
      margin: 0 auto 1.5rem auto;
      text-wrap: pretty;
    }

    & .links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.5rem;

      &:empty {
        display: none;
      }
    }

    .code {
      width: 100%;
      max-width: 50rem;
      margin: 0 auto;

      ${Pre} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: auto;
        min-height: 5.5rem;
        height: auto;
        padding: 1rem 1.25rem;
        font-size: clamp(0.78rem, 0.72rem + 0.28vw, 0.95rem);
        white-space: pre-wrap;
        overflow-wrap: break-word;

        /* Keep auto width on hover/focus so MesheryWrapper's pre:hover rule
           does not collapse or expand the block, while preserving CodeBlock's
           touch margin-right reserve. */
        &:hover,
        &:focus {
          width: auto;
        }

        .token-line {
          height: auto;
          min-width: 0;
        }

        @media screen and (max-width: 991px) {
          min-height: 4.75rem;
          padding: 0.875rem 1rem;
        }

        @media screen and (max-width: 480px) {
          min-height: 4rem;
          padding: 0.75rem 0.25rem 0.75rem 0.75rem;
          overflow-wrap: anywhere;
        }

        @media (hover: hover) {
          padding-right: 4.5rem;
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

        @media (pointer: coarse) {
          &::after {
            content: "";
            position: absolute;
            inset: -0.5625rem -0.375rem;
          }
        }
      }
    }

    p.enddescr {
      margin: 1.25rem auto 0 auto;
      max-width: 44rem;
    }
  }
`;
