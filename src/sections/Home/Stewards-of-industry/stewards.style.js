import styled from "styled-components";

import backgroundImg from "./images/stewards.png";

const BannerSectionWrapper = styled.section`
  .section {
    background-image: url(${backgroundImg});
    background-size: cover;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .section-header,
  .section-content {
    text-align: center;
    padding: 5vh 20vw 2.5vh 20vw;
  }
  .section-header {
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    color: white;
    padding: 5vh 20vw 2.5vh 20vw;
  }
  .section-content {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 18px;
    line-height: 23.4px;
    color: white;
    padding: 0 20vw 2.5vh 20vw;
  }
  .section-button {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 54px;
    background: #ebc017;
    border-radius: 5px;
    border: none;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    cursor: pointer;
    &:hover {
      background: #ebc045;
    }
  }
  @media only screen and (max-width: 500px) {
    .section-header,
    .section-content {
      text-align: left;
    }
  }
`;

export default BannerSectionWrapper;
