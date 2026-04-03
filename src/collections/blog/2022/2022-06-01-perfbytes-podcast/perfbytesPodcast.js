import styled from "styled-components";
export const PerfbytesPodcast = styled.div`

  div.answer {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${(props) => props.theme.grey737373ToGrey222222};
    font-style: italic;
    text-align: left;
    border-left: 2px solid ${(props) => props.theme.secondaryColor};
    padding-left: 2rem;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    span {
      font-weight: 600;
      font-style: normal;
    }
  }

`;
