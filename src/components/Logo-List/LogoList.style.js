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

      a {
        display: block;
        transition: all 0.2s ease-in-out;
      }

      a:hover {
        transform: translateY(-2px);
      }

      & img {
        height: 32px;
        width: auto;
      }
    }
  }
`;
