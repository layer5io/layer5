import styled from "styled-components";

export const StepsIndicatorWrapper = styled.nav`
  padding: 0;
  margin: 0;

  & .indicator-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & li {
    margin-bottom: 1rem;

    & .indicator-link {
      display: inline-block;
      text-decoration: none;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
      font-family: inherit;
      font-size: 17px;
      line-height: 28px;
      color: ${(props) => props.theme.greyB4B4B4ToGrey505050 || "gray"};
      cursor: pointer;
      transition:
        color 0.2s ease,
        font-weight 0.2s ease;

      &:hover {
        color: ${(props) => props.theme.secondaryColor || "#00b39f"};
        background: transparent;
        box-shadow: none;
        text-decoration: none;
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }

      &:focus-visible {
        outline: 2px solid ${(props) => props.theme.secondaryColor || "#00b39f"};
        outline-offset: 3px;
        border-radius: 4px;
      }
    }

    &.active .indicator-link {
      font-weight: 600;
      color: ${(props) => props.theme.text};
    }
  }
`;
