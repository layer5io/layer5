import styled from "styled-components";
import collabMap from "./images/layer5-collaboration-map.svg";

const AboutSectionWrapper = styled.section`

   
    background: linear-gradient(255.21deg, #477E96 20.89%, #01B29F 36.99%, #00B39F 59.78%, #3C494F 90.08%);
    mix-blend-mode: darken; 
    
    height: 55rem;
    color: white;
    text-align: centers;
    .check-circle {
      fill: ${props => props.theme.caribbeanGreenColor};
      stroke: red;
    }
  .whoweare-title {
    
    h2 {
      display: block;
      font-weight: 400;     
      margin-bottom: 1rem;
      line-height: 1rem;
    }
    
  }
  
  .section-title {
    h1 {color: white;}
    h2 {
      color: white;
      margin-top: 4rem;
      margin-bottom: 0rem;
    }
    h3 {
        color: white;
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
