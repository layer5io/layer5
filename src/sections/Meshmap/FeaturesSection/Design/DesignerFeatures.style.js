import styled from "styled-components";

const DesignerFeaturesWrapper = styled.section`
margin-top: 3rem;
margin-bottom: 1.5rem;


// ul li:last-child {
//     padding-bottom: 120px;
//   }
  ul li:first-child {
  }
.scroll{
    position: sticky;
    top: calc(50vh - 249px);
}


  .contentContainer {
    display: flex;
    position: relative;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
    & > ul {
      position: relative;
      max-width: 470px;
      padding-bottom: 50px;
      padding-left: 0;

      @media (max-width: 767px) {
        margin-left: 6rem;
        text-align: left;
      }
      @media (max-width: 500px) {
        padding-left: 0;
        margin-left: 0;
      }
    }
  }

  .diagram {
    width: 591px;
    max-width: 100%;
    min-width: 40rem;
    position: sticky;
    top: calc(50vh - 249px);
    z-index: -1;

    @media (max-width: 1200px) {
      min-width: 38rem;
    }
    @media (max-width: 992px) {
      min-width: 30rem;
    }
    @media (max-width: 767px) {
      min-width: 25rem;
      opacity: 0.4;
    }
    @media (max-width: 670px) {
      width: 20rem;
    }
  }

  #featureHeading {
    z-index: 1;
    & h3 {
      text-align: center;
      font-size: 80px;
      padding-top: 1rem;
      padding-bottom: 1rem;
      @media (max-width: 767px) {
        font-size: 60px;
      }
    }
  }
  .features {
    z-index: 0;
    & > li {
      list-style: none;

      & > div {
        list-style: none;
        padding-bottom: 150px;

        @media (max-width: 767px) {
          padding-top: 0;
          margin-bottom: 0;
          padding-bottom: 50px;
        }
      }

      &:last-child {
        & > div {
          padding-bottom: 600px;
          margin-bottom: -200px;
          @media (max-width: 767px) {
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      }

      &:first-child {
        & > div {
          padding-top: 108px;
          @media (max-width:  1120px) {
            padding-top: 64px;
          }
        }
      }
    }
  }

  .fixed {
  position: sticky;
  top: 5rem;
  font-weight: 300;
  border-bottom: 2px solid #00b39f;
  transition: .3s ease-in-out;
  background: ${props => props.theme.DarkTheme ? "#121212" : "#fff"};
}

`;

export default DesignerFeaturesWrapper;
