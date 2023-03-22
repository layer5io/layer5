import styled from "styled-components";

const CollaboratorFeaturesWrapper = styled.section`
  margin-top: 1rem;

  .collaborate-container {
    padding: 0;
  }

  .scroll {
    position: sticky;
    top: calc(50vh - 249px);
  }

  .contentContainer {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    max-height: 600px;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 767px) {
      flex-direction: column;
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
    min-width: 47rem;
    position: sticky;
    top: 0;
    z-index: -1;
    margin-top:auto;
    margin-bottom:auto;
    height:100%;

    @media (max-width: 1200px) {
      min-width: 38rem;
    }
    @media (max-width: 992px) {
      min-width: 27rem;
    }
    @media (max-width: 767px) {
      max-height: 550px;
      min-width: 25rem;
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
      background: linear-gradient(123deg, #00b39f 60%, #00b39f 100%);

      @media (max-width: 767px) {
        font-size: 1.75rem;
      }
    }
  }

  .learn-more {
    position: absolute;
    top: 0%;
    right: 2%;
    display: flex;
    flex-direction: row;
    text-align: end;
    align-items: center;
    height: 90px;

    @media screen and (max-width: 992px) {
        height: 73px;
      }

    a {
      display: flex;
      text-align: end;
      justify-content: center;
    }

    h6 {
      @media (max-width: 600px) {
        font-size: 0.7rem;
      }
      @media (max-width: 450px) {
        opacity: 0 !important;
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
          @media (max-width: 1120px) {
            padding-top: 64px;
          }
        }
      }
    }
  }

  .fixed {
    top: 6rem;
    font-weight: 300;
    transition: 0.3s ease-in-out;
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

  .arrow {
    transition: all 0.5s;
  }
  .arrow-enter {
    fill: #000;
    transform: translateX(1rem);
    transition: transform 0.5s ease-in-out;
  }
`;

export default CollaboratorFeaturesWrapper;
