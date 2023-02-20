import styled from "styled-components";


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
      font-size: 1.05rem;
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
    color: ${props => props.theme.sideTextColor};
    font-weight: 400;
    margin-bottom: 28px;
  }
  p.section-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0rem;
  }
  .colab {
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
  }
  .country {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: normal;
    margin: 0;
  }
  .aboutus-title {
    
    h2 {
      display: block;
      font-weight: 500;     
      font-size: 3.2rem;
      line-height: 1rem;
    }
  }
  .section-title {
    h1 {
      /* line-height: 1rem; */
      /* top: -5rem;  */
      margin-top: 4rem;
      margin-bottom: 0rem;
      font-family:"Qanelas Soft";
      color: ${props => props.theme.DarkTheme ? "rgba(255,255,255,1.0)" : "rgba(0, 0, 0, 1.0)"};  
    }
    h4{
        margin-bottom: 1.7vw;
        font-family:"Qanelas Soft";
        color: ${props => props.theme.DarkTheme ? "rgba(255,255,255,0.7)" : "rgba(0, 0, 0, 0.7)"};  
      }
  }
  .section-bottom {
    margin-bottom: 5rem;
  }
  .footer-section{
    width:100%;
    display:flex;
    justify-content:center;
    h4{
      font-weight:600;
    }
  }
  .bottom-sect-head{
    text-align:center;
    padding: 2rem;
    margin: 1rem;
  }
  .row-img-cont-1,.row-img-cont-2{
    padding:2rem 0rem;
    margin:2rem 0rem;
  }
  .location-row{
    align-items:center;
    justify-content:center;
    .loc{
      margin:0rem 1rem;
      font
    }
  }
  .section-title{
    #contact{
      color:white;
      :hover{
        color:black;
      }
    }
  }
  #mapBack {
    filter: invert(${(props) => props.theme.mapBackground});

  }
  .caption {
    font-size: .9rem;
    font-style: italic;
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
      h1 {
        margin-bottom: 1rem;
      }
      h3{
        
        margin-bottom: -2rem;
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
  
  @media only screen and (max-width: 575px) {
    .section-title,
    .about-content-wrap {
      text-align: center;
    }
    .row-img-cont-1{
      flex-direction:column-reverse;
      margin:1rem 0rem;
      padding:0rem;
      .col{
        margin:0.5rem 0rem;
      }
    }
    .loc{
      width:55%;
    }
    .row-img-cont-2{
      margin:1rem 0rem;
      padding:0rem;
      .col{
        margin:0.5rem 0rem;
      }
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
  }
  @media only screen and (max-width: 370px) {
    .loc{
        width:100%;
      }
  }
`;
export default AboutSectionWrapper;
