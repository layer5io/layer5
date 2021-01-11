import styled from "styled-components";

const AboutSectionWrapper = styled.section`
  margin: 1rem 0 5rem
  position: relative;
  overflow: hidden;
  .section__particle {
    position: absolute;
    &.one {
      right: 9%;
      top: 19%;
      height: 34px;
      width: 40px;
      transform: rotate(-45deg);
    }
    &.two {
      width: 150px;
      top: auto;
      bottom: 80px;
      left: -22px;
    }
  }
  .busCard {
    display: block;
    margin-bottom: 2rem;
  }
  .busCard2 { 
      margin:4rem; 
      width:90%;
  }
  .contactButton {
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }
  .location {
    display: inline;
    height: 1.75rem;
  }
  .about-thumb {
    width: 100%;
    transform: translateX(-80px);
    display: inline-block;
  }
  .about-text.text-one {
    font-weight: 300;
    margin-bottom: 28px;
  }

  .about-text.text-two {
    color: ${props => props.theme.headingColor};
    font-weight: 400;
    margin-bottom: 28px;
  }
  .section-title {
    h2 {
      margin-bottom: 1rem;
    }
  }
  .section-bottom {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 1400px) {
    .about-thumb {
      transform: translateX(0px);
    }
    .section__particle {
      &.one {
        top: 9%;
      }
      &.two {
        bottom: -92px;
        left: -38px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .section-bottom {
      h2 {
        margin-bottom: -4rem;
      }

      img {
        margin-bottom: -5rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .section__particle {
      &.one {
        top: 0%;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    padding: 2rem 0 0;
    .section-title h2 {
      margin-bottom: 20px;
      font-size: 2.125rem;
      line-height: normal;
    }
    .about-text.text-two {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 911px) and (min-width: 569px) {
    .section-bottom {
      h2 {
        margin-bottom: -8rem;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 60px 0 60px 0;
    .about-thumb {
      margin-bottom: 70px;
    }
  }
  @media only screen and (max-width: 568px) {
    .section-title,
    .about-content-wrap {
      text-align: center;
    }
    .section-title {
      img {
        display: none;
      }
      h4 {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 0 60px 0;
  }
  .community {
    color: blue;
  }
  .about-button {
    height: 40px;
    margin-top: 20px;
  }
`;
export default AboutSectionWrapper;
