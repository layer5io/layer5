import styled from "styled-components";

export const AnimatedStepsListWrapper = styled.div`
  .animated-steps-list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 1200px) {
      margin-right: calc(
        -1 * clamp(0px, calc((100vw - 1170px) / 2 - 40px), 140px)
      );
      width: calc(100% + clamp(0px, calc((100vw - 1170px) / 2 - 40px), 140px));
    }

    & .indicator-wrapper {
      & > ul {
        position: sticky;
        top: 200px;
        padding-bottom: 395px;
      }

      margin-right: 64px;
      @media (max-width: 1119px) {
        display: none;
      }
    }

    & .steps-list {
      margin-bottom: 46px;
      flex-shrink: 0;
    }

    & .terminal-wrapper {
      margin-left: 80px;
      position: sticky;
      top: 148px;
      align-self: flex-start;
      box-shadow: rgb(0 0 0 / 0.35) 7px 10px 25px;
      flex: 1;
      min-width: 0;

      @media (max-width: 1119px) {
        margin-left: 48px;
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
