import styled from "styled-components";

export const LogoListWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -10px -16px;

    & > li {
      height: 32px;
      margin: 10px 16px;

      & a,
      & button {
        display: inline-flex;
        align-items: center;
        height: 32px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        border-radius: 4px;
        transition:
          transform 0.2s ease,
          opacity 0.2s ease;

        &:hover {
          transform: translateY(-2px) scale(1.1);
          opacity: 0.85;
        }

        &:focus-visible {
          outline: 2px solid ${(props) => props.theme.secondaryColor};
          outline-offset: 4px;
        }
      }

      & img {
        height: 32px;
        width: auto;
        display: block;
      }
    }
  }
`;
