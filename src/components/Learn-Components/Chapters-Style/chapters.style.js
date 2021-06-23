import styled from "styled-components";
export const ChapterStyle = styled.div`

  color: #000;
  .chapter-sub-heading, .chapter-sub-heading a {
    color: #3c494f;
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
