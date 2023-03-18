import styled from "styled-components";

const VisualizerFeaturesWrapper = styled.section`
  margin-top: 1rem;

  .visualizer-container {
    padding: 0;
  }

  .scroll {
    position: sticky;
    top: calc(50vh - 249px);
  }

  .contentContainer {
    display: flex;
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
      padding-left: 0;
      padding-right: 2rem;

      @media (max-width: 767px) {
        padding-right: 0;
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
    top: 0;
    z-index: -1;

    @media (max-width: 1200px) {
      min-width: 32rem;
    }
    @media (max-width: 992px) {
      min-width: 24rem;
    }
    @media (max-width: 767px) {
      max-height: 400px;
      padding-right: 0;
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
`;

export default VisualizerFeaturesWrapper;
