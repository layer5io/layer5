import styled from "styled-components";

export const Search = styled.div`
  padding: 15px 30px;
  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 0 0;
  }
  .search-box {
    position: relative;
    display: flex;
    input {
      flex-basis: 100%;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.headingColor};

      &:focus {
        border-color: ${(props) => props.theme.primaryColor};
      }
    }
    button {
      position: absolute;
      right: 0px;
      top: 0;
      height: 100%;
      min-width: 20px;
      border-radius: 5px;
      background: transparent;
      font-size: 22px;
      color: ${(props) => props.theme.headingColor};
    }
  }
`;
