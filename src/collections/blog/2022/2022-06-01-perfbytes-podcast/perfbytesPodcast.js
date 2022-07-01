import styled from "styled-components";
export const PerfbytesPodcast = styled.div`

  div.answer {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${(props) => props.theme.blogLightText};
    font-style: italic;
    text-align: left;
    border-left: 2px solid ${(props) => props.theme.secondaryColor};
    padding-left: 2rem;
    span {
      font-weight: 600;
      font-style: normal;
    }
  }

`;
