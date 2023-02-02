import styled from "styled-components";

const CollaboratorFeaturesWrapper = styled.section`
margin-bottom: 15rem;


// ul li:last-child {
//     padding-bottom: 120px;
//   }
  ul li:first-child {
  }
.scroll{
    position: sticky;
    top: calc(50vh - 249px);
}
.root {
    padding: 0 0;

    & .headerWrapper {
      & h2 {
        position: sticky;
        text-align: center;
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 48px;
        font-weight: 300;
        font-family: 'Qanelas Soft';
        margin-top: 6rem;
        @media (max-width: 767px) {
          margin-bottom: 0;
        }
      }

      & p {
        max-width: 818px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .contentContainer {
    display: flex;
    position: relative;
    min-width: 67rem;

    @media (max-width: 1200px) {
      min-width: 55rem;
    }

    @media (max-width: 767px) {
      flex-direction: column;
    }

    & > ul {
      max-width: 470px;
      padding-bottom: 50px;
      padding-left: 0;

      @media (max-width: 1120px) {
        margin-left: 64px;
      }

      @media (max-width: 1024px) {
        margin-left: 40px;
      }

      @media (max-width: 767px) {
        margin-left: 0;
      }
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .diagram {
    width: 591px;
    max-width: 100%;
    min-width: 40rem;
    position: sticky;
    top: calc(50vh - 249px);
    @media (max-width: 767px) {
        display: none;
      }
  }

  #featureHeading {
    z-index: 1;
    & h3 {
      text-align: center;
      font-size: 80px;
      padding-top: 1rem;
      padding-bottom: 1rem;
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
  top: 5.9rem;
  font-weight: 300;
  color: white;
  background-color: #00b39f;
  box-shadow: -50px 50px 60px #fff;
  transition: .3s ease-in-out;
}

`;

export default CollaboratorFeaturesWrapper;
