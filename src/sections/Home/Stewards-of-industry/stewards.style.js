import styled from "styled-components";

import backgroundImg from "./images/stewards.png";

const BannerSectionWrapper = styled.section`
  .section {
    background-image: url(${backgroundImg});
    background-size: cover;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .section-header,
  .section-content {
    text-align: center;
  }
  .section-header {
    line-height: 3.125rem;
    color: white;
    padding: 4rem 20rem 1.5rem 20rem;
  }
  .section-content {
    line-height: 1.463rem;
    color: white;
    padding: 0 20rem 1.5rem 20rem;
  }
  .section-button {
    font-weight: 600;
  }
  @media only screen and (max-width: 1224px) {
    .section-header {
      padding: 4rem 15rem 1.5rem 15rem;
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
    .section-content {
      padding: 0 10rem 1.5rem 10rem;
    }
  }
  @media only screen and (max-width: 624px) {
    .section-header {
      padding: 2rem 5rem 0.75rem 5rem;
    }
    .section-content {
      padding: 0 5rem 0.75rem 5rem;
    }
    .section-button {
      font-size: 1rem;
      margin-bottom: 3rem;
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
      padding: 0 3rem 1rem 3rem;
    }
    .section-button {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 300px) {
    .section {
      height: 40rem;
    }
  }
`;

export default BannerSectionWrapper;
