import styled from "styled-components";

export const AnimatedStepsListWrapper = styled.div`
  .animated-steps-list {
    display: flex;

    /* Reach into the right page margin, stopping 16px short of the window
       edge, so the terminal can be wider than the container. */
    @media (min-width: 851px) {
      margin-right: calc(50% - 50vw + 16px);
    }

    & .indicator-wrapper {
      & > ul {
        position: sticky;
        top: 200px;
        padding-bottom: 395px;
      }

      margin-right: 115px;
      @media (max-width: 1199px) {
        display: none;
      }
    }

    & .steps-list {
      margin-bottom: 46px;
    }

    & .terminal-wrapper {
      margin-left: 150px;
      position: sticky;
      top: 148px;
      align-self: flex-start;
      box-shadow: rgb(0 0 0 / 0.35) 7px 10px 25px;
      /* Let the terminal shrink to the space left in the row */
      min-width: 0;

      @media (max-width: 1199px) {
        margin-left: 75px;
      }

      @media (max-width: 850px) {
        display: none;
      }

      & > * {
        /* Child should not be sticky now; allow natural flow */
        margin-top: 0;

        max-width: 100%;
      }
    }
  }
`;
