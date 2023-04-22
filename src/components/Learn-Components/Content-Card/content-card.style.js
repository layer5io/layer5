import styled from "styled-components";

const ContentCardWrapper = styled.div`
  padding: 2.5rem;
  margin: 2rem 0;
  background-color: ${props => props.theme.grey111111ToGreyFAFAFA};
  display: flex;
  border: 1px solid ${props => props.theme.whiteZeroThreeToBlackZeroOne};
  justify-content: space-between;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    transition: background 150ms ease-out 0s, border 150ms ease-out 0s,
      transform 150ms ease-out 0s;
    transform: translate3d(0px, -1px, 0px);
    box-shadow:  ${props => props.theme.whiteZeroEightToBlackZeroEight} 0px 8px 16px 0px;
  }

  .chapter-content {
    display: inline-flex;

    .chapter-number {
        font-size: 2rem;
        margin: 0 2rem 0 1rem;
        color:  ${props => props.theme.whiteFourToBlackFour};
        align-self: center;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .chapter-desc {
      h2 {
          margin: 0.25rem 0;
      }
      p {
          margin: 0.35rem 0;
          color:  ${props => props.theme.whiteFourToBlackFour};
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
