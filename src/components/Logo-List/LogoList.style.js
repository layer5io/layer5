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
      display: flex;
      align-items: center;
      justify-content: center;

      .logo-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        transition:
          transform 0.2s ease-in-out,
          filter 0.2s ease-in-out,
          opacity 0.2s ease-in-out;
        border-radius: 4px;

        &:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 2px 8px rgba(0, 179, 159, 0.5));
          opacity: 0.95;
        }

        &:focus-visible {
          outline: 2px solid ${(props) => props.theme.primaryColor || "#00B39F"};
          outline-offset: 2px;
        }
      }

      .logo-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
      }

      & img {
        height: 32px;
        width: auto;
        display: block;
      }
    }
  }
`;
