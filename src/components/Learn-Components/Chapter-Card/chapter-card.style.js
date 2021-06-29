import styled from "styled-components";

const ChapterCardWrapper = styled.div`
  padding: 1rem 1.25rem;
  margin: 2rem 0;
  background-color: #fafafa;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  :hover {
    border: 1px solid ${props => props.theme.secondaryColor};;
    transition: background 150ms ease-out 0s, border 150ms ease-out 0s,
      transform 150ms ease-out 0s;
    transform: translate3d(0px, -3px, 0px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
  }

  .chapter-content {
    display: inline-flex;

    .chapter-number {
        font-size: 2rem;
        margin: 0 2rem 0 1rem;
        color: rgba(0, 0, 0, 0.4);
        align-self: center;
    }

    .chapter-desc {
        h3 {
            margin: 0.25rem 0;
        }
        p {
            margin: 0.35rem 0;
            color: rgba(0, 0, 0, 0.6);
        }
    }
  }
`;

export default ChapterCardWrapper;