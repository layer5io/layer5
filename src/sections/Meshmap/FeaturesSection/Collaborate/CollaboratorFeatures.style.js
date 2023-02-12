import styled from "styled-components";

const CollaboratorFeaturesWrapper = styled.section`
margin-top: 1.5rem;


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
    max-height: 1600px;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      align-items: center;
    }
    & > ul {
      position: relative;
      max-width: 470px;
      padding-left: 2rem;

      @media (max-width: 767px) {
        padding-left: 0;
      }

      @media (max-width: 500px) {
        padding-left: 0;
        margin-left: 0;
      }
    }
  }

  .diagram {
    width: 591px;
    min-width: 40rem;
    position: sticky;
    top: calc(50vh - 249px);
    z-index: -1;

    @media (max-width: 1200px) {
      min-width: 32rem;
    }
    @media (max-width: 992px) {
      min-width: 25rem;
    }
    @media (max-width: 767px) {
      max-height: 550px;
      min-width: 25rem;
      opacity: 0.4;
    }

  }

  #featureHeading {
    z-index: 2;
    & h1 {
      text-transform: uppercase;
      text-align: center;
      font-weight: 600;
      padding-top: 1rem;
      padding-bottom: 1rem;

      @media (max-width: 767px) {
      font-size: 1.75rem;
    }
    }
  }
  .features {
    z-index: 1;
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
  top: 6rem;
  font-weight: 300;
  transition: .3s ease-in-out;
  background: #00b39f;
  box-shadow: 0px 6px 5px 0px rgb(0 0 0 / 25%);
   & > h1 {
    color: #ffffff;
   }
   @media (max-width: 912px) {
    top: 5rem;
   }
  }

  #add-border {
  border-color: #00b39f;
  border-style: solid;
  border-width: 0px 2px 2px 2px;
  box-shadow: 0px 6px 5px 0px rgb(0 0 0 / 25%);
  transition: ease-in-out;
}


`;

export default CollaboratorFeaturesWrapper;
