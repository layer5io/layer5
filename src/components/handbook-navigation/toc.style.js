import styled from "styled-components";

const TOCWrapper = styled.div`

  position: sticky;
  top: 10rem;
  left: 0rem;
  margin-left: 3rem;
  margin-top: 3rem;
  width:15rem;
  padding-bottom: 2rem;
  
  .go-back {
    margin-left: 1rem;
    a {
      display: inline-flex;
      svg {
        align-self: center;
        font-size: 1.5rem;
        color: rgb(177, 182, 184);
        width: 100%;
        max-width: 1.5rem;
      }
      h4 {
        font-weight: 500;
        text-transform: capitalize;
        font-size: 1.25rem;
        white-space: nowrap;
      }
      &:hover {
        svg,
        h4 {
          color: #3c494f;
        }
      }
    }
    margin-bottom: 1rem;
  }

  .toc-sub-heading {
    margin-top: 1rem;
    font-weight: 300;
    font-size: 1.15rem;
  }
  
  .toc-sub-inline{
    display: inline-block;
  }

  .toc-ul{
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    list-style: none;
  }

  .toc-sub-heading:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export default TOCWrapper;
