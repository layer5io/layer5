import styled from "styled-components";
import collabMap from "./images/layer5-collaboration-map.svg";

const AboutSectionWrapper = styled.section`
  
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
  p.address {
      font-size: .95rem;
      line-height: 1.25rem;
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
  .aboutus-title {
    margin-top: 10vw;
    h2 {
      display: block;
      font-weight: 400;     
      margin-bottom: 1rem;
      line-height: 1rem;
    }
  }
  .section-title {
    h2 {
      /* line-height: 1rem; */
      /* top: -5rem;  */
      margin-top: 4rem;
      margin-bottom: 0rem;
    }
    h3 {
        margin-bottom: 1.7vw;
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
    .section-title {
      h2 {
        margin-bottom: 1rem;
      }
      h1{
        
        margin-bottom: -4rem;
      }

      img {
        margin-bottom: -5rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .section-title {
      h2 {
        margin-bottom: 0rem;
      }
      h1{
        
        margin-bottom: -4rem;
      }

      img {
        margin-bottom: -6rem;
      }
    }
    .section__particle {
      &.one {
        top: 0%;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .section-title {
      h2 {
        margin-top: 2rem;
      }
      h1{
        margin-bottom: -9rem;
      }

      img {
        margin-bottom: -6rem;
      }
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

      h2 {
        margin-bottom: 0rem;
      }
      h1{
        
        margin-bottom: 0rem;
      }
      img {
        padding:0px;
        margin: 0px;
        height:auto;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 0 60px 0;
    .section-title {
    h2 {
      margin-bottom: 0rem;
      font-size: 1.4rem;
    }
    h1{
      font-size: 1.6rem;
      margin-bottom: 0rem;
    }
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
