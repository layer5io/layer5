import styled from "styled-components";

export const StepWrapper = styled.li`
  width: 314px;
  scroll-margin-top: 9.5rem;

  @media (max-width: 850px) {
    width: unset;
    scroll-margin-top: 6rem;
  }

  & h3 {
    margin-bottom: 12px;
    margin-top: 0;
  }

  & .description {
    & > p {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: 0.0125em;
      color: var(--gray-2);
    }
  }

  & > .logo-list {
    margin-top: 38px;
  }
`;
