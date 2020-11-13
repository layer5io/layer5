import styled from "styled-components";

export const StepWrapper = styled.li`
    width: 314px;
    
    @media (max-width: 850px) {
        width: unset;
    }

      & h2 {
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
