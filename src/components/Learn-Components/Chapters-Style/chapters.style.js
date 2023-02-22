import styled from "styled-components";
export const ChapterStyle = styled.div`

  color: ${(props) => props.theme.text};
  .chapter-sub-heading, .chapter-sub-heading a {
    color: ${props => props.theme.DarkTheme ? "grey" : "#3c494f"};
  }
  .chapter-alt-heading, .chapter-alt-heading a {
    color: gray;
  }
  a {
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  }
`;
