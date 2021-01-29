import styled from "styled-components";

import backgroundImg from "./images/stewards.png";

const BannerSectionWrapper = styled.section`
  .wrapper {
    background-image: url(${backgroundImg});
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .header, .content {
    text-align: center;
    padding: 5vh 20vw 2.5vh 20vw;

  }
  .header{
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    color: white;

  }
  .content {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 18px;
    line-height: 23.4px;
    color: white;
  }
  .button {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 54px;
      background: #EBC017;
      border-radius: 5px;
      border: none;
      font-family: Open Sans;
      font-weight: 600;
      font-sizze: 17px;
      line-height: 17px;
      cursor: pointer;
      &:hover{
        background: #EBC045;
      }
  }

  @media only screen and (max-width: 1600px) {
  }
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 912px) {
  }
  @media only screen and (max-width: 576px) {
  }
`;

export default BannerSectionWrapper;
