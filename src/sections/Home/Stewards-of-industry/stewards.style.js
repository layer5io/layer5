import styled from "styled-components";

const BannerSectionWrapper = styled.section`
  z-index:0;
  .section {
    background-size: cover;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
  
  }
  h2{
    color: white;
    margin-bottom: 3rem;
    font-weight: 300;
  }
  .section-header,
  .section-content {
    text-align: center;
  }
  .section-header {
    line-height: 3.125rem;
    color: white;
  }
  h1,h2 {
    margin-top: 2rem;
  }
  .section-content {
    line-height: 1.463rem;
    color: white;
    padding: 0 20rem 1.5rem 20rem;
  }
  .section-button {
    font-weight: 600;
    color: ${props => props.theme.DarkTheme ? "black" : "white"};
    margin-bottom: -15rem;
  }
  @media only screen and (max-width: 1224px) {
    .section-header {
      padding: 8rem 15rem 1.5rem 15rem;
    }
    h2 {
      font-weight: 400;
      margin-top: .5rem;
      margin-bottom: 4rem;
    }
    .section-content {
      padding: 0 15rem 1.5rem 15rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    .section-header {
      padding: 4rem 12.5rem 1.5rem 12.5rem;
    }
    .section-content {
      padding: 0 12.5rem 1.5rem 12.5rem;
    }
  }
  @media only screen and (max-width: 824px) {
    .section-header {
      padding: 4rem 10rem 1.5rem 10rem;
    }
    h2 {
      font-weight: 400;
      margin-top: 1rem;
    }
    .section-content {
      padding: 0 10rem 1.5rem 10rem;
    }
  }
  @media only screen and (max-width: 624px) {
    .section-header {
      padding: 6rem 2rem 0.75rem 2rem;
      margin-top: 1rem;
    }
    .section-content {
      padding: 0 2rem 0.75rem 1rem;
    }
    .section-button {
      font-size: 1rem;
      margin-bottom: 0rem;
      margin-top: 2rem;
      color: white;
    }
  }
  @media only screen and (max-width: 424px) {
    .section-header,
    .section-content {
      text-align: left;
    }
    .section {
      height: 37.5rem;
    }
    .section-header {
      font-size: 2rem;
      line-height: 2.8rem;
      padding: 1rem 3rem;
      
    }
    .section-content {
      font-size: 1rem;
      line-height: 1.3rem;
      padding: 0rem 3rem 1rem 3rem;
    }
    .section-button {
      font-size: 1rem;
      margin-bottom: 1rem;
      
      color: white;
    }
  }
  @media only screen and (max-width: 300px) {
    .section {
      height: 40rem;
    }
  }
`;

export default BannerSectionWrapper;
