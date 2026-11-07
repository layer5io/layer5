import styled from "styled-components";

const DesignerFeaturesWrapper = styled.section`
  margin-top: 1rem;

  .designer-container {
    padding: 0;

    @media (max-width: 991px) {
      margin-top: 6vw;
      padding: 0 1rem;
    }
  }

  .scroll {
    position: sticky;
    top: calc(50vh - 249px);
  }

  .contentContainer {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      overflow: visible;
    }
    & > ul {
      position: relative;
      max-width: 470px;
      padding-left: 2rem;

      @media (max-width: 991px) {
        padding-left: 0;
        text-align: center;
        max-width: 600px;
        width: 100%;
      }

      @media (max-width: 500px) {
        padding-left: 0;
        margin-left: 0;
      }
    }

    @media (min-width: 992px) {
      max-height: 600px;
    }
  }

  .diagram {
    width: 591px;
    min-width: 40rem;
    position: sticky;
    top: 0;
    z-index: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;

    @media (max-width: 1200px) {
      min-width: 32rem;
    }
    @media (max-width: 992px) {
      min-width: 24rem;
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

      @media (max-width: 991px) {
        font-size: 1.75rem;
      }
    }

    @media (max-width: 991px) {
      margin-bottom: 2rem;
      border-radius: 4px;
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

    h5 {
      font-weight: 600;
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

      @media (max-width: 991px) {
        border: 2px solid #00b39f;
        box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 25%);
        border-radius: 8px;
        padding: 2.5rem 1.5rem;
        margin-bottom: 2rem;
        width: 100%;
        box-sizing: border-box;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          border-color: #ebc017;
        }
      }

      & > div {
        list-style: none;
        padding-bottom: 150px;

        @media (max-width: 991px) {
          padding-top: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }

      &:last-child {
        & > div {
          padding-bottom: 600px;
          margin-bottom: -200px;
          @media (max-width: 991px) {
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
          @media (max-width: 991px) {
            padding-top: 0;
          }
        }
      }
    }
  }

  .design-trigger-container {
    &:hover {
      .fixed {
        background: #ebc017;
        & > h1 {
          color: #000000;
        }
        .learn-more h5 {
          color: #000000 !important;
        }
      }
      #add-border {
        border-color: #ebc017;
      }
      .features > li {
        border-color: #ebc017;
      }
    }
  }

  .fixed {
    top: 6rem;
    font-weight: 300;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media (max-width: 991px) {
      border: none;
      box-shadow: none;
    }
  }
  .hideInMobile {
    @media (max-width: 991px) {
      display: none;
    }
  }

  .arrow {
    transition: all 0.5s;
  }
  .arrow-enter {
    transform: translateX(0.4rem);
    transition: transform 0.5s ease-in-out;
  }
`;

export default DesignerFeaturesWrapper;
