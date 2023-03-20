import styled from "styled-components";

const InternshipSectionWrapper = styled.div`
p{
  color: ${props => props.theme.whiteEightToBlack};

}
  h1 {
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
  }

  .grid {
    margin: 1rem 0;
  }

  .oppurtunities {
    margin: 3rem auto;
    text-align: center;
    span {
      font-weight: 400;
    }
  }
  .oppurtunities > div {
    margin: 3rem 0;
  }

  .opportunity-col {
    flex: 0 0 25%;
    max-width: 100%;
    margin: 1rem 0;
  }
  @media only screen and (max-width: 1200px) {
    .opportunity-col {
      flex: 0 0 50%;
    }
  }
  @media only screen and (max-width: 700px) {
    .opportunity-col {
      flex: 0 0 100%;
    }
  }

  .opportunity-card {
    width: 20rem;
    height: 15rem;
    margin: auto;
    padding: 0.5rem;
    background:  ${props => props.theme.DarkTheme ? "#212121" : "rgba(245, 245, 245, 1)"};
    text-align: center;
    border-bottom: 5px solid ${(props) => props.theme.secondaryColor};
    transition: all 0.2s;
    transition-timing-function: ease-in-out;
    position: relative;

    .text {
      height: inherit;
      width: 100%;
      transition: all 0.4s ease-in-out;
    }

    h3 {
      font-weight: 500;
      transition: transform 0.7s ease-in-out;
    }
    p {
      margin: 0.5rem 0;
      color: ${props => props.theme.whiteEightToBlackEight};

      transition: transform 0.7s ease-in-out;
    }

    .peek-card {
      position: absolute;
      height: inherit;
      top: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      z-index:1030;
      transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out,
        visibility 0.7s ease-in-out;
    }
    &:hover {
      box-shadow: 0px 4px 20px 4px ${(props) => props.theme.shadowLightColor};

      .text {
        width: 80%;
        transform: translateX(2%);
        transition: all 0.4s ease-in-out;
      }

      h3 {
        transform: translateX(2%);
        text-align: left;
        transition: transform 0.7s ease-in-out;
      }

      p {
        transform: translateX(2%);
        text-align: left;
        transition: transform 0.7s ease-in-out;
      }
      .peek-card {
        visibility: visible;
        transform: rotate(-2deg);
        opacity: 1;
        transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out,
          visibility 0.7s ease-in-out;
      }
    }
  }

  .full_time {
    .opportunity-card {
      height: 12rem;
    }
  }

  @media screen and (max-width: 991px) {
    .opportunity-card {
      height: 12.5rem;
    }
  }

  .partner-image {
    height: 13rem;
    margin-bottom: 0.25rem;

    img {
      width: 22rem;
      height: inherit;
      border-radius: 0.5rem;
    }
  }

  .partners-card {
    display: block;
    width: max-content;
    background:  ${props => props.theme.grey050505ToGreyF1F2F1};

    border-radius: 1rem;
    text-align: center;
    justify-content: space-between;
    transition: all 0.2s;
    transition-timing-function: ease-in-out;
    h5 {
      display: inline-flex;
      font-weight: 400;
      line-height: 3.5rem;
    }
    &:hover {
      .arrow_icon {
        color: white;
        background: #00d3a9;
        left: 0.2rem;
      }
    }
  }
  .arrow_icon {
    width: 2.5rem;
    height: 2.5rem;
    min-width: auto;
    margin: auto 0 auto 0.5rem;
    padding: 0;
    font-size: 1.25rem;
    border-radius: 1rem;
    justify-content: center;
    transition: all 0.2s;
  }

  .partner-col {
    display: flex;
    justify-content: center;
    flex: 0 0 50%;
    max-width: 100%;
  }

  .oppurtunities_row {
    justify-content: space-evenly;
  }
`;

export default InternshipSectionWrapper;
