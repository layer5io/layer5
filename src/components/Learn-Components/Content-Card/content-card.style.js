import styled from "styled-components";

const ContentCardWrapper = styled.div`
  padding: 2.5rem;
  margin: 2rem 0;
  background-color: ${props => props.theme.DarkTheme ? "#111111" :"#fafafa"};
  display: flex;
  border: 1px solid ${props => props.theme.DarkTheme ? "rgba(255 ,255 ,255 ,0.3)" :"rgba(0 ,0 ,0 ,0.1)"};
  justify-content: space-between;
  :hover {
    transition: background 150ms ease-out 0s, border 150ms ease-out 0s,
      transform 150ms ease-out 0s;
    transform: translate3d(0px, -1px, 0px);
    box-shadow:  ${props => props.theme.DarkTheme ? "rgba(255 ,255 ,255 ,0.08)" :"rgba(0 ,0 ,0 ,0.08)"} 0px 8px 16px 0px;
  }

  .chapter-content {
    display: inline-flex;

    .chapter-number {
        font-size: 2rem;
        margin: 0 2rem 0 1rem;
        color:  ${props => props.theme.DarkTheme ? "rgba(255 ,255 ,255 ,0.4)" :"rgba(0 ,0 ,0 ,0.4)"};
        align-self: center;
    }
    .chapter-desc {
      h2 {
          margin: 0.25rem 0;
      }
      p {
          margin: 0.35rem 0;
          color:  ${props => props.theme.DarkTheme ? "rgba(255 ,255 ,255 ,0.4)" :"rgba(0 ,0 ,0 ,0.4)"};
      }
    }
  }

  @media screen and (max-width:992px) {
    padding: 1.5rem;
  }
  @media screen and (max-width:500px) {
    padding: 0.75rem;
    .chapter-content {
      .chapter-number {
          margin: 0 1rem;
      }
    }
  }


  // .chapter-info {
  //   display: flex;
  //   width: 60%;
  //   justify-content: space-between;
  //   .info {
  //     display: flex;
  //     align-items: center;
  //     span {
  //       margin: 0 0.5rem;
  //     }
  //   }
  // }
  // .bookmark-btn-div {
  //   display: flex;
  //   align-items: end;
  // }

  // .bookmark-btn {
  //   background-color: #fafafa;
  //   min-width: auto;
  //   :hover {
  //     color: black;
  //     background-color: #fafafa;
  //   }
  // }
`;

export default ContentCardWrapper;
