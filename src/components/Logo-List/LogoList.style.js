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

      & a {
        display: inline-flex;
        align-items: center;
        height: 32px;
        border-radius: 4px;

        &:focus-visible {
          outline: 2px solid ${(props) => props.theme.secondaryColor};
          outline-offset: 4px;
        }
      }

      & img {
        height: 32px;
        width: auto;
      }
    }
  }
`;
